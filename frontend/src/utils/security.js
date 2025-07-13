/**
 * Security utilities for the portfolio website
 * Implements input sanitization, XSS prevention, and secure practices
 */

// Input sanitization for terminal commands
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  
  // Check for malicious patterns and respond with humor
  const maliciousPatterns = [
    /(<script|javascript:|data:text\/html|vbscript:|onload|onerror)/gi,
    /(union\s+select|drop\s+table|insert\s+into|delete\s+from)/gi,
    /(<iframe|<object|<embed|<applet)/gi,
    /(eval\s*\(|setTimeout\s*\(|setInterval\s*\()/gi,
    /(\.\.\/|\.\.\\|\/etc\/passwd|\/windows\/system32)/gi
  ];
  
  const funResponses = [
    "🛡️ Nice try, but this site is bulletproof! soldier0x00 isn't falling for that one.",
    "🕵️‍♂️ Malicious code detected! Did you really think a cybersecurity guy wouldn't see that coming?",
    "⚠️ Security alert! That's some spicy payload you got there, but this fortress is unbreachable.",
    "🔒 Access denied! Your hacking attempt has been logged and sent to the cyber police (just kidding, but seriously, stop).",
    "🚨 Threat detected! Nice injection attempt, but I've seen better from script kiddies.",
    "💀 Malware detected! This site is protected by the power of proper input sanitization!"
  ];
  
  for (let pattern of maliciousPatterns) {
    if (pattern.test(input)) {
      // Trigger fun alert (this would be handled by the calling component)
      const randomResponse = funResponses[Math.floor(Math.random() * funResponses.length)];
      console.warn('🚨 SECURITY ALERT:', randomResponse);
      
      // Store the detection for analytics (non-malicious way)
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('maliciousInputDetected', {
          detail: { type: 'pattern_detected', message: randomResponse }
        }));
      }
      
      return ''; // Return empty string for malicious input
    }
  }
  
  // Remove potentially dangerous characters and scripts
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .replace(/[<>'"&]/g, (match) => { // Escape dangerous characters
      const escapeMap = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return escapeMap[match];
    })
    .trim()
    .slice(0, 100); // Limit input length
};

// Validate command input
export const validateCommand = (command) => {
  const sanitized = sanitizeInput(command);
  
  // Allowed commands whitelist
  const allowedCommands = [
    'help', 'whoami', 'ls', 'hack', 'matrix', 'clear', 
    'skills', 'social', 'easter', 'soldier0x00', 'exit'
  ];
  
  const commandName = sanitized.toLowerCase().split(' ')[0];
  return allowedCommands.includes(commandName) ? sanitized : null;
};

// Sanitize email input for forms
export const sanitizeEmail = (email) => {
  if (typeof email !== 'string') return '';
  
  // Basic email validation and sanitization
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const sanitized = email.trim().toLowerCase().slice(0, 254); // RFC 5321 limit
  
  return emailRegex.test(sanitized) ? sanitized : '';
};

// Sanitize form text inputs
export const sanitizeText = (text, maxLength = 1000) => {
  if (typeof text !== 'string') return '';
  
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim()
    .slice(0, maxLength);
};

// Rate limiting for form submissions
class RateLimiter {
  constructor(maxAttempts = 5, windowMs = 60000) { // 5 attempts per minute
    this.attempts = new Map();
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier) {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const validAttempts = userAttempts.filter(time => now - time < this.windowMs);
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    // Add current attempt
    validAttempts.push(now);
    this.attempts.set(identifier, validAttempts);
    
    return true;
  }

  getRemainingTime(identifier) {
    const userAttempts = this.attempts.get(identifier) || [];
    if (userAttempts.length === 0) return 0;
    
    const oldestAttempt = Math.min(...userAttempts);
    const remainingTime = this.windowMs - (Date.now() - oldestAttempt);
    
    return Math.max(0, remainingTime);
  }
}

// Global rate limiter instances
export const contactFormLimiter = new RateLimiter(3, 300000); // 3 attempts per 5 minutes
export const newsletterLimiter = new RateLimiter(2, 600000); // 2 attempts per 10 minutes

// Content Security Policy helpers
export const getSecureImageSrc = (src) => {
  // Only allow HTTPS images and data URLs
  if (src.startsWith('https://') || src.startsWith('data:image/')) {
    return src;
  }
  return null;
};

// Secure external link handler
export const openSecureLink = (url) => {
  // Validate URL
  try {
    const urlObj = new URL(url);
    if (urlObj.protocol === 'https:' || urlObj.protocol === 'http:') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  } catch (error) {
    console.error('Invalid URL:', error);
  }
};

// Environment variable validator
export const getSecureEnvVar = (varName) => {
  const value = process.env[varName];
  if (!value) {
    console.warn(`Environment variable ${varName} is not set`);
    return null;
  }
  return value;
};

// Local storage security wrapper
export const secureStorage = {
  setItem: (key, value) => {
    try {
      if (typeof key !== 'string' || typeof value !== 'string') {
        throw new Error('Invalid key or value type');
      }
      localStorage.setItem(sanitizeText(key, 50), sanitizeText(value, 10000));
    } catch (error) {
      console.error('Secure storage set error:', error);
    }
  },
  
  getItem: (key) => {
    try {
      if (typeof key !== 'string') return null;
      return localStorage.getItem(sanitizeText(key, 50));
    } catch (error) {
      console.error('Secure storage get error:', error);
      return null;
    }
  },
  
  removeItem: (key) => {
    try {
      if (typeof key !== 'string') return;
      localStorage.removeItem(sanitizeText(key, 50));
    } catch (error) {
      console.error('Secure storage remove error:', error);
    }
  }
};

// CSRF token generator (for future backend integration)
export const generateCSRFToken = () => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Error message sanitizer (prevent information disclosure)
export const sanitizeErrorMessage = (error) => {
  // Generic error messages to prevent information disclosure
  const genericMessages = {
    network: 'Network error occurred. Please try again.',
    validation: 'Invalid input provided. Please check your data.',
    server: 'Server error occurred. Please try again later.',
    unauthorized: 'Access denied.',
    default: 'An error occurred. Please try again.'
  };

  if (error.includes('fetch') || error.includes('network')) {
    return genericMessages.network;
  }
  if (error.includes('validation') || error.includes('invalid')) {
    return genericMessages.validation;
  }
  if (error.includes('server') || error.includes('500')) {
    return genericMessages.server;
  }
  if (error.includes('unauthorized') || error.includes('403')) {
    return genericMessages.unauthorized;
  }
  
  return genericMessages.default;
};

export default {
  sanitizeInput,
  validateCommand,
  sanitizeEmail,
  sanitizeText,
  contactFormLimiter,
  newsletterLimiter,
  getSecureImageSrc,
  openSecureLink,
  getSecureEnvVar,
  secureStorage,
  generateCSRFToken,
  sanitizeErrorMessage
};