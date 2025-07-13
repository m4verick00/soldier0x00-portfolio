from fastapi import APIRouter, HTTPException, Request
from typing import List
from datetime import datetime, timedelta
import logging

from ..models import NewsletterSubscription, NewsletterSubscriptionCreate, MessageResponse
from ..database import get_newsletter_collection

router = APIRouter(prefix="/newsletter", tags=["Newsletter"])
logger = logging.getLogger(__name__)

@router.post("/subscribe", response_model=MessageResponse)
async def subscribe_to_newsletter(
    subscription_data: NewsletterSubscriptionCreate,
    request: Request
):
    """Subscribe to newsletter"""
    try:
        collection = await get_newsletter_collection()
        
        # Check if email already exists
        existing_subscription = await collection.find_one({
            "email": subscription_data.email
        })
        
        if existing_subscription:
            # Reactivate if previously unsubscribed
            if not existing_subscription.get("is_active", True):
                await collection.update_one(
                    {"email": subscription_data.email},
                    {"$set": {"is_active": True, "subscribed_at": datetime.utcnow()}}
                )
                return MessageResponse(
                    message="Welcome back! You've been resubscribed to our newsletter.",
                    success=True
                )
            else:
                return MessageResponse(
                    message="You're already subscribed to our newsletter!",
                    success=True
                )
        
        # Create new subscription
        subscription = NewsletterSubscription(**subscription_data.dict())
        await collection.insert_one(subscription.dict())
        
        logger.info(f"New newsletter subscription: {subscription_data.email}")
        
        return MessageResponse(
            message="Successfully subscribed! You'll receive updates about new cybersecurity articles and insights.",
            success=True
        )
        
    except Exception as e:
        logger.error(f"Error creating newsletter subscription: {e}")
        raise HTTPException(status_code=500, detail="Failed to subscribe. Please try again.")

@router.post("/unsubscribe", response_model=MessageResponse)
async def unsubscribe_from_newsletter(email: str):
    """Unsubscribe from newsletter"""
    try:
        collection = await get_newsletter_collection()
        
        result = await collection.update_one(
            {"email": email},
            {"$set": {"is_active": False}}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Email not found in our subscription list")
        
        logger.info(f"Newsletter unsubscription: {email}")
        
        return MessageResponse(
            message="You've been successfully unsubscribed from our newsletter.",
            success=True
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error unsubscribing from newsletter: {e}")
        raise HTTPException(status_code=500, detail="Failed to unsubscribe. Please try again.")

@router.get("/subscribers", response_model=List[NewsletterSubscription])
async def get_newsletter_subscribers(
    limit: int = 100,
    skip: int = 0,
    active_only: bool = True
):
    """Get newsletter subscribers (admin endpoint)"""
    try:
        collection = await get_newsletter_collection()
        
        query = {}
        if active_only:
            query["is_active"] = True
        
        cursor = collection.find(query).sort("subscribed_at", -1).skip(skip).limit(limit)
        subscribers = await cursor.to_list(limit)
        
        return [NewsletterSubscription(**sub) for sub in subscribers]
        
    except Exception as e:
        logger.error(f"Error fetching newsletter subscribers: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch subscribers")

@router.get("/stats")
async def get_newsletter_stats():
    """Get newsletter statistics"""
    try:
        collection = await get_newsletter_collection()
        
        # Total subscribers
        total_subscribers = await collection.count_documents({})
        
        # Active subscribers
        active_subscribers = await collection.count_documents({"is_active": True})
        
        # Recent subscriptions (last 30 days)
        thirty_days_ago = datetime.utcnow() - timedelta(days=30)
        recent_subscriptions = await collection.count_documents({
            "subscribed_at": {"$gte": thirty_days_ago},
            "is_active": True
        })
        
        return {
            "total_subscribers": total_subscribers,
            "active_subscribers": active_subscribers,
            "recent_subscriptions": recent_subscriptions,
            "growth_rate": round((recent_subscriptions / max(active_subscribers, 1)) * 100, 2)
        }
        
    except Exception as e:
        logger.error(f"Error fetching newsletter stats: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch statistics")