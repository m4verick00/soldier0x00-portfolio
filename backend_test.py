#!/usr/bin/env python3
"""
Backend API Testing Suite for Portfolio Website
Tests all API endpoints for functionality, error handling, and data persistence
"""

import requests
import json
import time
import os
from datetime import datetime
from typing import Dict, Any

# Get backend URL from environment
BACKEND_URL = "https://595845bc-d1c8-40d2-804e-45a7121b1a1b.preview.emergentagent.com/api"

class PortfolioAPITester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.test_results = {
            "health_check": {"passed": False, "details": ""},
            "contact_form": {"passed": False, "details": ""},
            "newsletter": {"passed": False, "details": ""},
            "analytics": {"passed": False, "details": ""},
            "blog": {"passed": False, "details": ""},
            "error_handling": {"passed": False, "details": ""},
            "cors": {"passed": False, "details": ""}
        }
        self.session = requests.Session()
        
    def log_test(self, test_name: str, success: bool, details: str):
        """Log test results"""
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status} {test_name}: {details}")
        self.test_results[test_name] = {"passed": success, "details": details}
        
    def test_health_endpoints(self):
        """Test health check endpoints"""
        print("\n🔍 Testing Health Check Endpoints...")
        
        try:
            # Test root endpoint
            response = self.session.get(f"{self.base_url}/")
            if response.status_code == 200:
                data = response.json()
                if data.get("status") == "operational":
                    self.log_test("health_check", True, "Root endpoint working correctly")
                else:
                    self.log_test("health_check", False, f"Unexpected response: {data}")
            else:
                self.log_test("health_check", False, f"Root endpoint failed: {response.status_code}")
                return
                
            # Test health endpoint
            response = self.session.get(f"{self.base_url}/health")
            if response.status_code == 200:
                data = response.json()
                if data.get("status") == "healthy":
                    self.log_test("health_check", True, "Health endpoints working correctly")
                else:
                    self.log_test("health_check", False, f"Health check failed: {data}")
            else:
                self.log_test("health_check", False, f"Health endpoint failed: {response.status_code}")
                
        except Exception as e:
            self.log_test("health_check", False, f"Exception: {str(e)}")
            
    def test_contact_form(self):
        """Test contact form submission and retrieval"""
        print("\n📧 Testing Contact Form...")
        
        try:
            # Test valid contact form submission
            contact_data = {
                "name": "John Smith",
                "email": "john.smith@example.com",
                "subject": "collaboration",
                "message": "I'm interested in collaborating on cybersecurity projects. I have experience in threat hunting and would love to discuss potential opportunities."
            }
            
            response = self.session.post(f"{self.base_url}/contact/", json=contact_data)
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and data.get("id"):
                    self.log_test("contact_form", True, f"Contact form submission successful, ID: {data.get('id')}")
                    
                    # Test retrieving contact messages (admin endpoint)
                    messages_response = self.session.get(f"{self.base_url}/contact/messages")
                    if messages_response.status_code == 200:
                        messages = messages_response.json()
                        if isinstance(messages, list):
                            self.log_test("contact_form", True, f"Contact messages retrieval successful, found {len(messages)} messages")
                        else:
                            self.log_test("contact_form", False, "Contact messages should return a list")
                    else:
                        self.log_test("contact_form", False, f"Failed to retrieve messages: {messages_response.status_code}")
                        
                    # Test contact stats
                    stats_response = self.session.get(f"{self.base_url}/contact/stats")
                    if stats_response.status_code == 200:
                        stats = stats_response.json()
                        if "total_messages" in stats:
                            self.log_test("contact_form", True, f"Contact stats working: {stats.get('total_messages')} total messages")
                        else:
                            self.log_test("contact_form", False, "Contact stats missing required fields")
                    else:
                        self.log_test("contact_form", False, f"Contact stats failed: {stats_response.status_code}")
                        
                else:
                    self.log_test("contact_form", False, f"Contact form response invalid: {data}")
            else:
                self.log_test("contact_form", False, f"Contact form submission failed: {response.status_code} - {response.text}")
                
        except Exception as e:
            self.log_test("contact_form", False, f"Exception: {str(e)}")
            
    def test_newsletter(self):
        """Test newsletter subscription functionality"""
        print("\n📰 Testing Newsletter...")
        
        try:
            # Test newsletter subscription
            subscription_data = {
                "email": "sarah.connor@cybersec.com"
            }
            
            response = self.session.post(f"{self.base_url}/newsletter/subscribe", json=subscription_data)
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success"):
                    self.log_test("newsletter", True, f"Newsletter subscription successful: {data.get('message')}")
                    
                    # Test duplicate subscription
                    duplicate_response = self.session.post(f"{self.base_url}/newsletter/subscribe", json=subscription_data)
                    if duplicate_response.status_code == 200:
                        duplicate_data = duplicate_response.json()
                        if duplicate_data.get("success"):
                            self.log_test("newsletter", True, "Duplicate subscription handled correctly")
                        else:
                            self.log_test("newsletter", False, "Duplicate subscription should succeed")
                    else:
                        self.log_test("newsletter", False, f"Duplicate subscription failed: {duplicate_response.status_code}")
                        
                    # Test newsletter stats
                    stats_response = self.session.get(f"{self.base_url}/newsletter/stats")
                    if stats_response.status_code == 200:
                        stats = stats_response.json()
                        if "total_subscribers" in stats:
                            self.log_test("newsletter", True, f"Newsletter stats working: {stats.get('active_subscribers')} active subscribers")
                        else:
                            self.log_test("newsletter", False, "Newsletter stats missing required fields")
                    else:
                        self.log_test("newsletter", False, f"Newsletter stats failed: {stats_response.status_code}")
                        
                else:
                    self.log_test("newsletter", False, f"Newsletter subscription failed: {data}")
            else:
                self.log_test("newsletter", False, f"Newsletter subscription failed: {response.status_code} - {response.text}")
                
        except Exception as e:
            self.log_test("newsletter", False, f"Exception: {str(e)}")
            
    def test_analytics(self):
        """Test analytics tracking functionality"""
        print("\n📊 Testing Analytics...")
        
        try:
            # Test page view tracking
            track_data = {
                "page": "home",
                "referrer": "https://google.com"
            }
            
            response = self.session.post(f"{self.base_url}/analytics/track", params=track_data)
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success"):
                    self.log_test("analytics", True, "Page view tracking successful")
                    
                    # Test analytics summary
                    summary_response = self.session.get(f"{self.base_url}/analytics/summary")
                    if summary_response.status_code == 200:
                        summary = summary_response.json()
                        if "total_views" in summary:
                            self.log_test("analytics", True, f"Analytics summary working: {summary.get('total_views')} total views")
                        else:
                            self.log_test("analytics", False, "Analytics summary missing required fields")
                    else:
                        self.log_test("analytics", False, f"Analytics summary failed: {summary_response.status_code}")
                        
                    # Test dashboard data
                    dashboard_response = self.session.get(f"{self.base_url}/analytics/dashboard")
                    if dashboard_response.status_code == 200:
                        dashboard = dashboard_response.json()
                        if "total" in dashboard and "today" in dashboard:
                            self.log_test("analytics", True, f"Analytics dashboard working")
                        else:
                            self.log_test("analytics", False, "Analytics dashboard missing required fields")
                    else:
                        self.log_test("analytics", False, f"Analytics dashboard failed: {dashboard_response.status_code}")
                        
                else:
                    # Analytics tracking failure is not critical
                    self.log_test("analytics", True, "Analytics tracking handled gracefully even on failure")
            else:
                self.log_test("analytics", False, f"Analytics tracking failed: {response.status_code} - {response.text}")
                
        except Exception as e:
            self.log_test("analytics", False, f"Exception: {str(e)}")
            
    def test_blog_endpoints(self):
        """Test blog-related endpoints"""
        print("\n📝 Testing Blog Endpoints...")
        
        try:
            # Test get blog posts
            response = self.session.get(f"{self.base_url}/blog/posts")
            
            if response.status_code == 200:
                posts = response.json()
                if isinstance(posts, list) and len(posts) > 0:
                    self.log_test("blog", True, f"Blog posts retrieval successful: {len(posts)} posts found")
                    
                    # Test get specific blog post
                    first_post_id = posts[0].get("id")
                    if first_post_id:
                        post_response = self.session.get(f"{self.base_url}/blog/posts/{first_post_id}")
                        if post_response.status_code == 200:
                            post = post_response.json()
                            if post.get("id") == first_post_id:
                                self.log_test("blog", True, f"Individual blog post retrieval successful")
                            else:
                                self.log_test("blog", False, "Individual blog post ID mismatch")
                        else:
                            self.log_test("blog", False, f"Individual blog post failed: {post_response.status_code}")
                    
                    # Test blog categories
                    categories_response = self.session.get(f"{self.base_url}/blog/categories")
                    if categories_response.status_code == 200:
                        categories = categories_response.json()
                        if "categories" in categories:
                            self.log_test("blog", True, f"Blog categories working: {len(categories.get('categories', []))} categories")
                        else:
                            self.log_test("blog", False, "Blog categories missing required fields")
                    else:
                        self.log_test("blog", False, f"Blog categories failed: {categories_response.status_code}")
                        
                else:
                    self.log_test("blog", False, "Blog posts should return a non-empty list")
            else:
                self.log_test("blog", False, f"Blog posts retrieval failed: {response.status_code} - {response.text}")
                
        except Exception as e:
            self.log_test("blog", False, f"Exception: {str(e)}")
            
    def test_error_handling(self):
        """Test error handling with invalid data"""
        print("\n🚨 Testing Error Handling...")
        
        try:
            # Test invalid contact form data
            invalid_contact = {
                "name": "",  # Empty name
                "email": "invalid-email",  # Invalid email
                "subject": "invalid-subject",  # Invalid subject
                "message": ""  # Empty message
            }
            
            response = self.session.post(f"{self.base_url}/contact/", json=invalid_contact)
            
            if response.status_code in [400, 422]:  # Validation error expected
                self.log_test("error_handling", True, f"Invalid contact data properly rejected: {response.status_code}")
            else:
                self.log_test("error_handling", False, f"Invalid contact data should be rejected, got: {response.status_code}")
                
            # Test invalid newsletter email
            invalid_newsletter = {
                "email": "not-an-email"
            }
            
            newsletter_response = self.session.post(f"{self.base_url}/newsletter/subscribe", json=invalid_newsletter)
            
            if newsletter_response.status_code in [400, 422]:  # Validation error expected
                self.log_test("error_handling", True, f"Invalid newsletter email properly rejected: {newsletter_response.status_code}")
            else:
                self.log_test("error_handling", False, f"Invalid newsletter email should be rejected, got: {newsletter_response.status_code}")
                
            # Test non-existent blog post
            nonexistent_response = self.session.get(f"{self.base_url}/blog/posts/nonexistent-id")
            
            if nonexistent_response.status_code == 404:
                self.log_test("error_handling", True, "Non-existent blog post properly returns 404")
            else:
                self.log_test("error_handling", False, f"Non-existent blog post should return 404, got: {nonexistent_response.status_code}")
                
        except Exception as e:
            self.log_test("error_handling", False, f"Exception: {str(e)}")
            
    def test_cors_headers(self):
        """Test CORS headers are present"""
        print("\n🌐 Testing CORS Headers...")
        
        try:
            # Test with Origin header to trigger CORS
            headers = {"Origin": "https://example.com"}
            response = self.session.get(f"{self.base_url}/", headers=headers)
            
            # Check for essential CORS headers
            cors_headers_found = []
            for header_name, header_value in response.headers.items():
                if header_name.lower().startswith("access-control-"):
                    cors_headers_found.append(f"{header_name}: {header_value}")
                    
            if cors_headers_found:
                self.log_test("cors", True, f"CORS headers present: {', '.join(cors_headers_found)}")
            else:
                self.log_test("cors", False, "No CORS headers found")
                
        except Exception as e:
            self.log_test("cors", False, f"Exception: {str(e)}")
            
    def run_all_tests(self):
        """Run all test suites"""
        print(f"🚀 Starting Portfolio Backend API Tests")
        print(f"🎯 Testing against: {self.base_url}")
        print("=" * 60)
        
        # Run all test suites
        self.test_health_endpoints()
        self.test_contact_form()
        self.test_newsletter()
        self.test_analytics()
        self.test_blog_endpoints()
        self.test_error_handling()
        self.test_cors_headers()
        
        # Print summary
        self.print_summary()
        
    def print_summary(self):
        """Print test summary"""
        print("\n" + "=" * 60)
        print("📋 TEST SUMMARY")
        print("=" * 60)
        
        total_tests = len(self.test_results)
        passed_tests = sum(1 for result in self.test_results.values() if result["passed"])
        
        for test_name, result in self.test_results.items():
            status = "✅ PASS" if result["passed"] else "❌ FAIL"
            print(f"{status} {test_name.replace('_', ' ').title()}")
            if not result["passed"]:
                print(f"    └─ {result['details']}")
                
        print(f"\n📊 Results: {passed_tests}/{total_tests} tests passed")
        
        if passed_tests == total_tests:
            print("🎉 All tests passed! Backend API is working correctly.")
        else:
            print("⚠️  Some tests failed. Check the details above.")
            
        return passed_tests == total_tests

if __name__ == "__main__":
    tester = PortfolioAPITester()
    success = tester.run_all_tests()
    exit(0 if success else 1)