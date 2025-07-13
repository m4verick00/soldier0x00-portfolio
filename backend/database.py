from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import IndexModel, ASCENDING, DESCENDING
import os
from typing import Optional

class Database:
    client: Optional[AsyncIOMotorClient] = None
    database = None

db = Database()

async def get_database():
    return db.database

async def connect_to_mongo():
    """Create database connection"""
    mongo_url = os.environ.get('MONGO_URL')
    if not mongo_url:
        raise ValueError("MONGO_URL environment variable is required")
    
    db.client = AsyncIOMotorClient(mongo_url)
    db.database = db.client[os.environ.get('DB_NAME', 'portfolio')]
    
    # Create indexes for better performance
    await create_indexes()
    print("Connected to MongoDB")

async def close_mongo_connection():
    """Close database connection"""
    if db.client:
        db.client.close()
        print("Disconnected from MongoDB")

async def create_indexes():
    """Create database indexes for optimal performance"""
    try:
        # Contact messages indexes
        await db.database.contact_messages.create_indexes([
            IndexModel([("timestamp", DESCENDING)]),
            IndexModel([("email", ASCENDING)]),
            IndexModel([("is_read", ASCENDING)])
        ])
        
        # Newsletter subscriptions indexes
        await db.database.newsletter_subscriptions.create_indexes([
            IndexModel([("email", ASCENDING)], unique=True),
            IndexModel([("subscribed_at", DESCENDING)])
        ])
        
        # Page views indexes
        await db.database.page_views.create_indexes([
            IndexModel([("timestamp", DESCENDING)]),
            IndexModel([("page", ASCENDING)]),
            IndexModel([("ip_address", ASCENDING)])
        ])
        
        # Blog posts indexes
        await db.database.blog_posts.create_indexes([
            IndexModel([("date", DESCENDING)]),
            IndexModel([("category", ASCENDING)]),
            IndexModel([("status", ASCENDING)])
        ])
        
        print("Database indexes created successfully")
    except Exception as e:
        print(f"Error creating indexes: {e}")

# Collection getters for easier access
async def get_contact_messages_collection():
    db_instance = await get_database()
    return db_instance.contact_messages

async def get_newsletter_collection():
    db_instance = await get_database()
    return db_instance.newsletter_subscriptions

async def get_page_views_collection():
    db_instance = await get_database()
    return db_instance.page_views

async def get_blog_posts_collection():
    db_instance = await get_database()
    return db_instance.blog_posts

async def get_experiences_collection():
    db_instance = await get_database()
    return db_instance.experiences

async def get_projects_collection():
    db_instance = await get_database()
    return db_instance.projects