/**
 * Google Analytics Tracking Utilities
 * 
 * Usage:
 * import { trackEvent, trackPageView } from '@/utils/analytics';
 * 
 * trackEvent('button_click', { button_name: 'Book Consultation' });
 */

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

/**
 * Track custom events in Google Analytics
 * @param eventName - Name of the event (e.g., 'button_click', 'form_submit')
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track page views (useful for SPA navigation)
 * @param pageTitle - Title of the page
 * @param pagePath - Path of the page
 */
export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_path: pagePath,
    });
  }
};

/**
 * Track button clicks
 * @param buttonName - Name/label of the button
 * @param location - Where the button is located (e.g., 'hero', 'footer')
 */
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: location,
  });
};

/**
 * Track form submissions
 * @param formName - Name of the form (e.g., 'contact', 'consultation')
 * @param success - Whether the submission was successful
 */
export const trackFormSubmit = (formName: string, success: boolean = true) => {
  trackEvent('form_submit', {
    form_name: formName,
    success: success,
  });
};

/**
 * Track outbound link clicks
 * @param url - The URL being clicked
 * @param linkText - Text of the link
 */
export const trackOutboundLink = (url: string, linkText?: string) => {
  trackEvent('click', {
    event_category: 'outbound',
    event_label: linkText || url,
    transport_type: 'beacon',
    event_callback: () => {
      // Callback after tracking
    },
  });
};

/**
 * Track CTA (Call-to-Action) clicks
 * @param ctaName - Name of the CTA
 * @param ctaLocation - Location of the CTA
 */
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
  });
};

/**
 * Track service page views
 * @param serviceName - Name of the service
 */
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    service_name: serviceName,
  });
};

/**
 * Track consultation bookings
 * @param source - Where the booking originated from
 */
export const trackConsultationBooking = (source: string) => {
  trackEvent('consultation_booking', {
    booking_source: source,
    value: 1, // You can assign a monetary value
  });
};

/**
 * Track email contact attempts
 */
export const trackEmailContact = () => {
  trackEvent('contact_email', {
    contact_method: 'email',
  });
};

/**
 * Track phone contact attempts
 */
export const trackPhoneContact = () => {
  trackEvent('contact_phone', {
    contact_method: 'phone',
  });
};

/**
 * Track scroll depth (how far users scroll)
 * @param percentage - Scroll depth percentage (25, 50, 75, 100)
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', {
    percent_scrolled: percentage,
  });
};

