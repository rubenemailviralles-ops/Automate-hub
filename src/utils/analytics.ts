/**
 * Enhanced Analytics Tracking Utilities with Security
 * 
 * Tracks events to both Google Analytics and custom Supabase analytics
 * Includes invisible security measures to protect against abuse
 * 
 * Usage:
 * import { trackEvent, trackPageView, trackButtonClick } from '@/utils/analytics';
 * 
 * trackEvent('button_click', { button_name: 'Book Consultation' });
 */

import { supabase } from '../lib/supabase';
import { 
  checkRateLimit, 
  logSecurityEvent, 
  isBot, 
  detectSpam, 
  validateFormInput,
  SECURITY_EVENTS 
} from './security';

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

// Generate a unique session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

// Get user agent info
const getUserInfo = () => {
  const userAgent = navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTablet = /iPad|Android(?=.*\bMobile\b)/i.test(userAgent);
  
  let deviceType = 'desktop';
  if (isMobile) deviceType = 'mobile';
  else if (isTablet) deviceType = 'tablet';

  return {
    userAgent,
    deviceType,
    browser: getBrowserName(userAgent),
    os: getOSName(userAgent)
  };
};

const getBrowserName = (userAgent: string): string => {
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  return 'Other';
};

const getOSName = (userAgent: string): string => {
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac')) return 'macOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iOS')) return 'iOS';
  return 'Other';
};

/**
 * Track custom events in both Google Analytics and Supabase with security
 * @param eventName - Name of the event (e.g., 'button_click', 'form_submit')
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = async (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  // Security checks (invisible to users)
  const userInfo = getUserInfo();
  
  // Check for bot activity
  if (isBot(userInfo.userAgent)) {
    await logSecurityEvent(SECURITY_EVENTS.BOT_DETECTED, {
      eventName,
      userAgent: userInfo.userAgent
    });
    return; // Don't track bot events
  }
  
  // Check rate limiting
  const isAllowed = await checkRateLimit('analytics', 'client');
  if (!isAllowed) {
    await logSecurityEvent(SECURITY_EVENTS.RATE_LIMIT_EXCEEDED, {
      eventName,
      endpoint: 'analytics'
    });
    return; // Block excessive requests
  }
  
  // Validate and sanitize event parameters
  if (eventParams) {
    for (const [key, value] of Object.entries(eventParams)) {
      if (typeof value === 'string') {
        const validation = validateFormInput(value);
        if (!validation.isValid) {
          await logSecurityEvent(SECURITY_EVENTS.INVALID_REQUEST, {
            eventName,
            parameter: key,
            value: value
          });
          return; // Block suspicious content
        }
        eventParams[key] = validation.sanitized;
      }
    }
  }

  // Track in Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }

  // Track in Supabase
  try {
    const sessionId = getSessionId();
    
    await supabase.from('analytics_events').insert({
      event_type: eventParams?.event_type || 'custom',
      event_name: eventName,
      page_path: window.location.pathname,
      user_agent: userInfo.userAgent,
      session_id: sessionId,
      metadata: {
        ...eventParams,
        device_type: userInfo.deviceType,
        browser: userInfo.browser,
        os: userInfo.os,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

/**
 * Track page views in both Google Analytics and Supabase
 * @param pageTitle - Title of the page
 * @param pagePath - Path of the page
 */
export const trackPageView = async (pageTitle: string, pagePath: string) => {
  // Track in Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_path: pagePath,
    });
  }

  // Track in Supabase
  try {
    const sessionId = getSessionId();
    const userInfo = getUserInfo();
    
    // Insert page view
    await supabase.from('analytics_page_views').insert({
      session_id: sessionId,
      page_path: pagePath,
      page_title: pageTitle,
      referrer: document.referrer,
      metadata: {
        device_type: userInfo.deviceType,
        browser: userInfo.browser,
        os: userInfo.os
      }
    });

    // Update or create session
    await supabase.from('analytics_sessions').upsert({
      session_id: sessionId,
      user_agent: userInfo.userAgent,
      device_type: userInfo.deviceType,
      browser: userInfo.browser,
      os: userInfo.os,
      page_views: 1,
      events_count: 0
    }, {
      onConflict: 'session_id',
      ignoreDuplicates: false
    });

    // Track as event
    await trackEvent('page_view', {
      event_type: 'page_view',
      page_title: pageTitle,
      page_path: pagePath
    });
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

/**
 * Track button clicks
 * @param buttonName - Name/label of the button
 * @param location - Where the button is located (e.g., 'hero', 'footer')
 */
export const trackButtonClick = async (buttonName: string, location?: string) => {
  await trackEvent('button_click', {
    event_type: 'button_click',
    button_name: buttonName,
    location: location,
    page_path: window.location.pathname
  });
};

/**
 * Track form submissions with spam detection
 * @param formName - Name of the form
 * @param success - Whether the submission was successful
 * @param formData - Form data to check for spam (optional)
 */
export const trackFormSubmit = async (formName: string, success: boolean = true, formData?: Record<string, string>) => {
  // Check for spam if form data is provided
  if (formData && detectSpam(formData)) {
    await logSecurityEvent(SECURITY_EVENTS.FORM_SPAM, {
      formName,
      formData: Object.keys(formData) // Only log keys, not values
    });
    return; // Don't track spam submissions
  }
  
  await trackEvent('form_submit', {
    event_type: 'form_submit',
    form_name: formName,
    success: success,
    page_path: window.location.pathname
  });
};

/**
 * Track CTA clicks
 * @param ctaName - Name of the CTA
 * @param location - Where the CTA is located
 */
export const trackCTAClick = async (ctaName: string, location?: string) => {
  await trackEvent('cta_click', {
    event_type: 'cta_click',
    cta_name: ctaName,
    location: location,
    page_path: window.location.pathname
  });
};

/**
 * Track service page views
 * @param serviceName - Name of the service
 */
export const trackServiceView = async (serviceName: string) => {
  await trackEvent('service_view', {
    event_type: 'service_view',
    service_name: serviceName,
    page_path: window.location.pathname
  });
};

/**
 * Track consultation bookings
 * @param step - Which step of the booking process
 */
export const trackConsultationBooking = async (step: string) => {
  await trackEvent('consultation_booking', {
    event_type: 'consultation_booking',
    step: step,
    page_path: window.location.pathname
  });
};

/**
 * Track email contact attempts
 * @param method - How they contacted (form, phone, email)
 */
export const trackEmailContact = async (method: string) => {
  await trackEvent('email_contact', {
    event_type: 'email_contact',
    method: method,
    page_path: window.location.pathname
  });
};

/**
 * Track scroll depth
 * @param depth - Percentage scrolled (0-100)
 */
export const trackScrollDepth = async (depth: number) => {
  await trackEvent('scroll_depth', {
    event_type: 'scroll_depth',
    depth: depth,
    page_path: window.location.pathname
  });
};

/**
 * Initialize analytics session
 */
export const initializeAnalytics = async () => {
  const sessionId = getSessionId();
  const userInfo = getUserInfo();
  
  try {
    // Create or update session
    await supabase.from('analytics_sessions').upsert({
      session_id: sessionId,
      user_agent: userInfo.userAgent,
      device_type: userInfo.deviceType,
      browser: userInfo.browser,
      os: userInfo.os,
      started_at: new Date().toISOString()
    }, {
      onConflict: 'session_id'
    });
  } catch (error) {
    console.error('Error initializing analytics:', error);
  }
};

/**
 * Track session end
 */
export const trackSessionEnd = async () => {
  const sessionId = getSessionId();
  
  try {
    await supabase.from('analytics_sessions').update({
      ended_at: new Date().toISOString()
    }).eq('session_id', sessionId);
  } catch (error) {
    console.error('Error tracking session end:', error);
  }
};