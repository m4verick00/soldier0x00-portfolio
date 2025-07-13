from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid
from enum import Enum

# Contact Form Models
class ContactSubject(str, Enum):
    collaboration = "collaboration"
    consultation = "consultation"
    threat_intel = "threat-intel"
    ai_security = "ai-security"
    general = "general"

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: ContactSubject
    message: str = Field(..., min_length=1, max_length=2000)
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    is_read: bool = Field(default=False)
    ip_address: Optional[str] = None

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: ContactSubject
    message: str = Field(..., min_length=1, max_length=2000)

# Newsletter Subscription Models
class NewsletterSubscription(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    subscribed_at: datetime = Field(default_factory=datetime.utcnow)
    is_active: bool = Field(default=True)
    source: str = Field(default="website")

class NewsletterSubscriptionCreate(BaseModel):
    email: EmailStr

# Blog Post Models (for future Medium integration)
class BlogPost(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    excerpt: str
    content: Optional[str] = None
    medium_url: Optional[str] = None
    date: datetime
    read_time: str
    tags: List[str] = []
    category: str
    status: str = Field(default="published")
    views: int = Field(default=0)

# Analytics Models
class PageView(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    page: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None
    referrer: Optional[str] = None

class AnalyticsSummary(BaseModel):
    total_views: int
    total_contacts: int
    total_subscribers: int
    popular_pages: List[dict]
    recent_activity: List[dict]

# Skills and Experience Models (for admin updates)
class Skill(BaseModel):
    name: str
    level: int = Field(..., ge=0, le=100)
    category: str
    color: str = Field(default="cyan")

class Experience(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    company: str
    location: str
    period: str
    type: str
    highlights: List[str]
    technologies: List[str]
    achievements: List[str]
    is_current: bool = Field(default=False)

# YouTube Channel Models
class YouTubeChannel(BaseModel):
    name: str
    url: str
    description: str
    specialties: List[str]
    category: str
    is_featured: bool = Field(default=True)

# Project Models
class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    category: str
    status: str
    description: str
    technologies: List[str]
    features: List[str]
    goals: List[str]
    icon: str
    color: str
    github_url: Optional[str] = None
    demo_url: Optional[str] = None
    is_featured: bool = Field(default=True)

# Response Models
class MessageResponse(BaseModel):
    message: str
    success: bool

class ContactResponse(BaseModel):
    id: str
    message: str
    success: bool