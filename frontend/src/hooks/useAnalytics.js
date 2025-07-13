import { useEffect } from 'react';
import { analyticsAPI } from '../services/api';

// Custom hook for tracking page views
export const useAnalytics = (pageName) => {
  useEffect(() => {
    const trackView = async () => {
      try {
        await analyticsAPI.trackPageView(pageName, document.referrer);
      } catch (error) {
        // Silently fail for analytics
        console.warn('Analytics tracking failed:', error.message);
      }
    };

    // Track page view after a short delay to ensure page is loaded
    const timer = setTimeout(trackView, 1000);
    return () => clearTimeout(timer);
  }, [pageName]);
};

// Analytics utility functions
export const trackEvent = async (eventName, eventData = {}) => {
  try {
    await analyticsAPI.trackPageView(`event_${eventName}`, JSON.stringify(eventData));
  } catch (error) {
    console.warn('Event tracking failed:', error.message);
  }
};

export const trackButtonClick = (buttonName, section = '') => {
  const eventData = {
    button: buttonName,
    section: section,
    timestamp: new Date().toISOString()
  };
  trackEvent('button_click', eventData);
};

export const trackFormSubmission = (formName, success = true) => {
  const eventData = {
    form: formName,
    success: success,
    timestamp: new Date().toISOString()
  };
  trackEvent('form_submission', eventData);
};

export const trackSectionView = (sectionName) => {
  trackEvent('section_view', { section: sectionName });
};

export default { useAnalytics, trackEvent, trackButtonClick, trackFormSubmission, trackSectionView };