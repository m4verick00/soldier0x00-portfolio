from fastapi import APIRouter, HTTPException, Request
from typing import List
from datetime import datetime, timedelta
import logging

from ..models import ContactMessage, ContactMessageCreate, ContactResponse, MessageResponse
from ..database import get_contact_messages_collection, get_page_views_collection

router = APIRouter(prefix="/contact", tags=["Contact"])
logger = logging.getLogger(__name__)

@router.post("/", response_model=ContactResponse)
async def create_contact_message(
    contact_data: ContactMessageCreate,
    request: Request
):
    """Create a new contact message"""
    try:
        collection = await get_contact_messages_collection()
        
        # Get client IP address
        client_ip = request.client.host
        if hasattr(request, 'headers'):
            client_ip = request.headers.get("x-forwarded-for", client_ip)
        
        # Create contact message
        contact_message = ContactMessage(
            **contact_data.dict(),
            ip_address=client_ip
        )
        
        # Insert into database
        result = await collection.insert_one(contact_message.dict())
        
        # Log page view for analytics
        page_views = await get_page_views_collection()
        await page_views.insert_one({
            "page": "contact_form_submission",
            "timestamp": datetime.utcnow(),
            "ip_address": client_ip,
            "user_agent": request.headers.get("user-agent"),
            "referrer": request.headers.get("referer")
        })
        
        logger.info(f"New contact message from {contact_data.email}")
        
        return ContactResponse(
            id=contact_message.id,
            message="Your message has been sent successfully! I'll get back to you within 24-48 hours.",
            success=True
        )
        
    except Exception as e:
        logger.error(f"Error creating contact message: {e}")
        raise HTTPException(status_code=500, detail="Failed to send message. Please try again.")

@router.get("/messages", response_model=List[ContactMessage])
async def get_contact_messages(
    limit: int = 50,
    skip: int = 0,
    unread_only: bool = False
):
    """Get contact messages (admin endpoint)"""
    try:
        collection = await get_contact_messages_collection()
        
        query = {}
        if unread_only:
            query["is_read"] = False
        
        cursor = collection.find(query).sort("timestamp", -1).skip(skip).limit(limit)
        messages = await cursor.to_list(limit)
        
        return [ContactMessage(**msg) for msg in messages]
        
    except Exception as e:
        logger.error(f"Error fetching contact messages: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch messages")

@router.patch("/messages/{message_id}/read", response_model=MessageResponse)
async def mark_message_as_read(message_id: str):
    """Mark a contact message as read (admin endpoint)"""
    try:
        collection = await get_contact_messages_collection()
        
        result = await collection.update_one(
            {"id": message_id},
            {"$set": {"is_read": True}}
        )
        
        if result.matched_count == 0:
            raise HTTPException(status_code=404, detail="Message not found")
        
        return MessageResponse(
            message="Message marked as read",
            success=True
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error marking message as read: {e}")
        raise HTTPException(status_code=500, detail="Failed to update message")

@router.get("/stats")
async def get_contact_stats():
    """Get contact form statistics"""
    try:
        collection = await get_contact_messages_collection()
        
        # Total messages
        total_messages = await collection.count_documents({})
        
        # Unread messages
        unread_messages = await collection.count_documents({"is_read": False})
        
        # Messages by subject
        subject_pipeline = [
            {"$group": {"_id": "$subject", "count": {"$sum": 1}}},
            {"$sort": {"count": -1}}
        ]
        subject_stats = await collection.aggregate(subject_pipeline).to_list(None)
        
        # Recent messages (last 7 days)
        seven_days_ago = datetime.utcnow() - timedelta(days=7)
        recent_messages = await collection.count_documents({
            "timestamp": {"$gte": seven_days_ago}
        })
        
        return {
            "total_messages": total_messages,
            "unread_messages": unread_messages,
            "recent_messages": recent_messages,
            "subject_breakdown": subject_stats
        }
        
    except Exception as e:
        logger.error(f"Error fetching contact stats: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch statistics")