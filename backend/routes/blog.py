from fastapi import APIRouter, HTTPException
from typing import List, Optional
from datetime import datetime
import logging

from ..models import BlogPost
from ..database import get_blog_posts_collection

router = APIRouter(prefix="/blog", tags=["Blog"])
logger = logging.getLogger(__name__)

# Mock blog data - in production, this would sync with Medium RSS
MOCK_BLOG_POSTS = [
    {
        "id": "1",
        "title": "Advanced Threat Hunting: Beyond Traditional SIEM",
        "excerpt": "Exploring next-generation threat hunting techniques using behavioral analytics and machine learning to detect sophisticated adversaries.",
        "date": datetime(2025, 1, 15),
        "read_time": "8 min read",
        "tags": ["Threat Hunting", "SIEM", "Machine Learning", "APT"],
        "category": "Threat Hunting",
        "status": "coming-soon",
        "views": 0
    },
    {
        "id": "2", 
        "title": "Building TAG: AI Guardian for Cybersecurity",
        "excerpt": "Journey of creating The Autonomous Guardian (TAG) for cybersecurity operations, lessons learned, and practical implementation strategies.",
        "date": datetime(2025, 1, 20),
        "read_time": "12 min read",
        "tags": ["AI", "Cybersecurity", "Automation", "Python"],
        "category": "AI & Security",
        "status": "coming-soon",
        "views": 0
    },
    {
        "id": "3",
        "title": "MITRE ATT&CK in Practice: Real-world Threat Modeling",
        "excerpt": "Practical guide to implementing MITRE ATT&CK framework for threat modeling and detection engineering in enterprise environments.",
        "date": datetime(2025, 2, 5),
        "read_time": "10 min read",
        "tags": ["MITRE ATT&CK", "Threat Modeling", "Detection Engineering"],
        "category": "Frameworks",
        "status": "coming-soon",
        "views": 0
    },
    {
        "id": "4",
        "title": "Olympics 2024: Securing Global Events",
        "excerpt": "Behind the scenes of cybersecurity operations for Paris 2024 Olympics - challenges, solutions, and lessons for critical infrastructure protection.",
        "date": datetime(2025, 2, 15),
        "read_time": "15 min read",
        "tags": ["Critical Infrastructure", "Event Security", "Olympics", "SOC"],
        "category": "Case Studies",
        "status": "coming-soon",
        "views": 0
    },
    {
        "id": "5",
        "title": "Data Integration Meets Cybersecurity",
        "excerpt": "How middleware technologies and data pipeline integration enhance cybersecurity operations and threat intelligence workflows.",
        "date": datetime(2025, 1, 25),
        "read_time": "11 min read",
        "tags": ["Data Integration", "Middleware", "Threat Intelligence", "Pipelines"],
        "category": "Data Security",
        "status": "coming-soon",
        "views": 0
    },
    {
        "id": "6",
        "title": "Voice-Controlled Security: Building ITACHI",
        "excerpt": "Developing ITACHI - an intelligent voice automation system for hands-free computing and advanced task automation.",
        "date": datetime(2025, 2, 20),
        "read_time": "9 min read",
        "tags": ["Voice Control", "Automation", "AI Assistant", "Innovation"],
        "category": "AI & Automation",
        "status": "coming-soon",
        "views": 0
    }
]

@router.get("/posts", response_model=List[BlogPost])
async def get_blog_posts(
    category: Optional[str] = None,
    limit: int = 10,
    skip: int = 0
):
    """Get blog posts with optional category filtering"""
    try:
        # Filter by category if provided
        posts = MOCK_BLOG_POSTS
        if category:
            posts = [post for post in posts if post["category"].lower() == category.lower()]
        
        # Apply pagination
        paginated_posts = posts[skip:skip + limit]
        
        return [BlogPost(**post) for post in paginated_posts]
        
    except Exception as e:
        logger.error(f"Error fetching blog posts: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch blog posts")

@router.get("/posts/{post_id}", response_model=BlogPost)
async def get_blog_post(post_id: str):
    """Get a specific blog post by ID"""
    try:
        post = next((post for post in MOCK_BLOG_POSTS if post["id"] == post_id), None)
        
        if not post:
            raise HTTPException(status_code=404, detail="Blog post not found")
        
        # Increment view count (in mock data, this would update database)
        post["views"] += 1
        
        return BlogPost(**post)
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching blog post {post_id}: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch blog post")

@router.get("/categories")
async def get_blog_categories():
    """Get all blog categories"""
    try:
        categories = list(set(post["category"] for post in MOCK_BLOG_POSTS))
        category_counts = {}
        
        for category in categories:
            count = len([post for post in MOCK_BLOG_POSTS if post["category"] == category])
            category_counts[category] = count
        
        return {
            "categories": sorted(categories),
            "category_counts": category_counts,
            "total_posts": len(MOCK_BLOG_POSTS)
        }
        
    except Exception as e:
        logger.error(f"Error fetching blog categories: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch categories")

@router.get("/tags")
async def get_blog_tags():
    """Get all blog tags"""
    try:
        all_tags = []
        for post in MOCK_BLOG_POSTS:
            all_tags.extend(post["tags"])
        
        # Count tag frequency
        tag_counts = {}
        for tag in all_tags:
            tag_counts[tag] = tag_counts.get(tag, 0) + 1
        
        # Sort by frequency
        sorted_tags = sorted(tag_counts.items(), key=lambda x: x[1], reverse=True)
        
        return {
            "tags": [tag for tag, count in sorted_tags],
            "tag_counts": dict(sorted_tags),
            "total_tags": len(tag_counts)
        }
        
    except Exception as e:
        logger.error(f"Error fetching blog tags: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch tags")

@router.get("/recent")
async def get_recent_posts(limit: int = 5):
    """Get most recent blog posts"""
    try:
        # Sort by date descending
        sorted_posts = sorted(MOCK_BLOG_POSTS, key=lambda x: x["date"], reverse=True)
        recent_posts = sorted_posts[:limit]
        
        return [BlogPost(**post) for post in recent_posts]
        
    except Exception as e:
        logger.error(f"Error fetching recent posts: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch recent posts")

@router.get("/search")
async def search_blog_posts(
    query: str,
    limit: int = 10
):
    """Search blog posts by title, excerpt, or tags"""
    try:
        query_lower = query.lower()
        matching_posts = []
        
        for post in MOCK_BLOG_POSTS:
            # Search in title, excerpt, and tags
            if (query_lower in post["title"].lower() or 
                query_lower in post["excerpt"].lower() or
                any(query_lower in tag.lower() for tag in post["tags"])):
                matching_posts.append(post)
        
        # Limit results
        limited_posts = matching_posts[:limit]
        
        return {
            "results": [BlogPost(**post) for post in limited_posts],
            "total_matches": len(matching_posts),
            "query": query
        }
        
    except Exception as e:
        logger.error(f"Error searching blog posts: {e}")
        raise HTTPException(status_code=500, detail="Failed to search blog posts")