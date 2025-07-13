from fastapi import APIRouter, HTTPException, Request
from typing import List, Optional
from datetime import datetime, timedelta
import logging
from collections import defaultdict

from models import PageView, AnalyticsSummary
from database import (
    get_page_views_collection, 
    get_contact_messages_collection,
    get_newsletter_collection
)

router = APIRouter(prefix="/analytics", tags=["Analytics"])
logger = logging.getLogger(__name__)

@router.post("/track")
async def track_page_view(
    page: str,
    request: Request,
    referrer: Optional[str] = None
):
    """Track a page view"""
    try:
        collection = await get_page_views_collection()
        
        # Get client information
        client_ip = request.client.host
        if hasattr(request, 'headers'):
            client_ip = request.headers.get("x-forwarded-for", client_ip)
        
        user_agent = request.headers.get("user-agent", "")
        referrer = referrer or request.headers.get("referer", "")
        
        # Create page view record
        page_view = PageView(
            page=page,
            ip_address=client_ip,
            user_agent=user_agent,
            referrer=referrer
        )
        
        await collection.insert_one(page_view.dict())
        
        return {"message": "Page view tracked", "success": True}
        
    except Exception as e:
        logger.error(f"Error tracking page view: {e}")
        # Don't raise exception for analytics failures
        return {"message": "Page view tracking failed", "success": False}

@router.get("/summary", response_model=AnalyticsSummary)
async def get_analytics_summary(days: int = 30):
    """Get analytics summary for the specified number of days"""
    try:
        # Calculate date range
        end_date = datetime.utcnow()
        start_date = end_date - timedelta(days=days)
        
        # Get collections
        page_views_collection = await get_page_views_collection()
        contacts_collection = await get_contact_messages_collection()
        newsletter_collection = await get_newsletter_collection()
        
        # Total page views
        total_views = await page_views_collection.count_documents({
            "timestamp": {"$gte": start_date, "$lte": end_date}
        })
        
        # Total contacts
        total_contacts = await contacts_collection.count_documents({
            "timestamp": {"$gte": start_date, "$lte": end_date}
        })
        
        # Total newsletter subscribers
        total_subscribers = await newsletter_collection.count_documents({
            "subscribed_at": {"$gte": start_date, "$lte": end_date},
            "is_active": True
        })
        
        # Popular pages
        popular_pages_pipeline = [
            {"$match": {"timestamp": {"$gte": start_date, "$lte": end_date}}},
            {"$group": {"_id": "$page", "views": {"$sum": 1}}},
            {"$sort": {"views": -1}},
            {"$limit": 10}
        ]
        popular_pages_cursor = page_views_collection.aggregate(popular_pages_pipeline)
        popular_pages = await popular_pages_cursor.to_list(10)
        
        # Recent activity (last 7 days by day)
        recent_activity = []
        for i in range(7):
            day_start = end_date - timedelta(days=i+1)
            day_end = end_date - timedelta(days=i)
            
            day_views = await page_views_collection.count_documents({
                "timestamp": {"$gte": day_start, "$lt": day_end}
            })
            
            day_contacts = await contacts_collection.count_documents({
                "timestamp": {"$gte": day_start, "$lt": day_end}
            })
            
            recent_activity.append({
                "date": day_start.strftime("%Y-%m-%d"),
                "views": day_views,
                "contacts": day_contacts
            })
        
        return AnalyticsSummary(
            total_views=total_views,
            total_contacts=total_contacts,
            total_subscribers=total_subscribers,
            popular_pages=[{"page": p["_id"], "views": p["views"]} for p in popular_pages],
            recent_activity=list(reversed(recent_activity))
        )
        
    except Exception as e:
        logger.error(f"Error fetching analytics summary: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch analytics")

@router.get("/page-views")
async def get_page_views(
    page: Optional[str] = None,
    days: int = 7,
    limit: int = 100
):
    """Get page views with optional filtering"""
    try:
        collection = await get_page_views_collection()
        
        # Build query
        query = {}
        if page:
            query["page"] = page
        
        # Add date filter
        start_date = datetime.utcnow() - timedelta(days=days)
        query["timestamp"] = {"$gte": start_date}
        
        # Execute query
        cursor = collection.find(query).sort("timestamp", -1).limit(limit)
        page_views = await cursor.to_list(limit)
        
        return {
            "page_views": page_views,
            "total_count": len(page_views),
            "period_days": days
        }
        
    except Exception as e:
        logger.error(f"Error fetching page views: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch page views")

@router.get("/dashboard")
async def get_dashboard_data():
    """Get comprehensive dashboard data"""
    try:
        # Get collections
        page_views_collection = await get_page_views_collection()
        contacts_collection = await get_contact_messages_collection()
        newsletter_collection = await get_newsletter_collection()
        
        # Calculate different time periods
        now = datetime.utcnow()
        today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
        week_start = now - timedelta(days=7)
        month_start = now - timedelta(days=30)
        
        # Today's stats
        today_views = await page_views_collection.count_documents({
            "timestamp": {"$gte": today_start}
        })
        today_contacts = await contacts_collection.count_documents({
            "timestamp": {"$gte": today_start}
        })
        
        # This week's stats
        week_views = await page_views_collection.count_documents({
            "timestamp": {"$gte": week_start}
        })
        week_contacts = await contacts_collection.count_documents({
            "timestamp": {"$gte": week_start}
        })
        
        # This month's stats
        month_views = await page_views_collection.count_documents({
            "timestamp": {"$gte": month_start}
        })
        month_contacts = await contacts_collection.count_documents({
            "timestamp": {"$gte": month_start}
        })
        
        # Total stats
        total_views = await page_views_collection.count_documents({})
        total_contacts = await contacts_collection.count_documents({})
        total_subscribers = await newsletter_collection.count_documents({"is_active": True})
        
        return {
            "today": {
                "views": today_views,
                "contacts": today_contacts
            },
            "week": {
                "views": week_views,
                "contacts": week_contacts
            },
            "month": {
                "views": month_views,
                "contacts": month_contacts
            },
            "total": {
                "views": total_views,
                "contacts": total_contacts,
                "subscribers": total_subscribers
            }
        }
        
    except Exception as e:
        logger.error(f"Error fetching dashboard data: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch dashboard data")