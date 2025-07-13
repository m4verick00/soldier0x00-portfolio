import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Contact API
export const contactAPI = {
  sendMessage: async (contactData) => {
    const response = await apiClient.post('/contact/', contactData);
    return response.data;
  },
  
  getMessages: async (params = {}) => {
    const response = await apiClient.get('/contact/messages', { params });
    return response.data;
  },
  
  markAsRead: async (messageId) => {
    const response = await apiClient.patch(`/contact/messages/${messageId}/read`);
    return response.data;
  },
  
  getStats: async () => {
    const response = await apiClient.get('/contact/stats');
    return response.data;
  }
};

// Newsletter API
export const newsletterAPI = {
  subscribe: async (email) => {
    const response = await apiClient.post('/newsletter/subscribe', { email });
    return response.data;
  },
  
  unsubscribe: async (email) => {
    const response = await apiClient.post('/newsletter/unsubscribe', { email });
    return response.data;
  },
  
  getSubscribers: async (params = {}) => {
    const response = await apiClient.get('/newsletter/subscribers', { params });
    return response.data;
  },
  
  getStats: async () => {
    const response = await apiClient.get('/newsletter/stats');
    return response.data;
  }
};

// Blog API
export const blogAPI = {
  getPosts: async (params = {}) => {
    const response = await apiClient.get('/blog/posts', { params });
    return response.data;
  },
  
  getPost: async (postId) => {
    const response = await apiClient.get(`/blog/posts/${postId}`);
    return response.data;
  },
  
  getCategories: async () => {
    const response = await apiClient.get('/blog/categories');
    return response.data;
  },
  
  getTags: async () => {
    const response = await apiClient.get('/blog/tags');
    return response.data;
  },
  
  getRecentPosts: async (limit = 5) => {
    const response = await apiClient.get('/blog/recent', { params: { limit } });
    return response.data;
  },
  
  searchPosts: async (query, limit = 10) => {
    const response = await apiClient.get('/blog/search', { params: { query, limit } });
    return response.data;
  }
};

// Analytics API
export const analyticsAPI = {
  trackPageView: async (page, referrer = null) => {
    try {
      const response = await apiClient.post('/analytics/track', { page, referrer });
      return response.data;
    } catch (error) {
      // Don't throw errors for analytics tracking
      console.warn('Analytics tracking failed:', error.message);
      return { success: false };
    }
  },
  
  getSummary: async (days = 30) => {
    const response = await apiClient.get('/analytics/summary', { params: { days } });
    return response.data;
  },
  
  getPageViews: async (params = {}) => {
    const response = await apiClient.get('/analytics/page-views', { params });
    return response.data;
  },
  
  getDashboardData: async () => {
    const response = await apiClient.get('/analytics/dashboard');
    return response.data;
  }
};

// Health check
export const healthAPI = {
  check: async () => {
    const response = await apiClient.get('/health');
    return response.data;
  },
  
  getInfo: async () => {
    const response = await apiClient.get('/');
    return response.data;
  }
};

// Error handling utility
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    const message = error.response.data?.message || error.response.data?.detail || 'Server error occurred';
    return {
      message,
      status: error.response.status,
      type: 'server_error'
    };
  } else if (error.request) {
    // Request was made but no response received
    return {
      message: 'Unable to connect to server. Please check your internet connection.',
      type: 'network_error'
    };
  } else {
    // Something else happened
    return {
      message: error.message || 'An unexpected error occurred',
      type: 'unknown_error'
    };
  }
};

export default apiClient;