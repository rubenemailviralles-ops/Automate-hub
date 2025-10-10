/**
 * Sentry Error Tracking Configuration
 * Monitors errors, performance, and user sessions
 */

import React from 'react';
import * as Sentry from '@sentry/react';
import { browserTracingIntegration, replayIntegration } from '@sentry/react';
import {
  useLocation,
  useNavigationType,
  createRoutesFromChildren,
  matchRoutes,
} from 'react-router-dom';

/**
 * Initialize Sentry
 * Replace SENTRY_DSN with your actual Sentry DSN from sentry.io
 */
export const initSentry = () => {
  // Only initialize in production
  if (import.meta.env.PROD) {
    Sentry.init({
      // Replace with your Sentry DSN
      dsn: import.meta.env.VITE_SENTRY_DSN || 'YOUR_SENTRY_DSN_HERE',
      
      // Set environment
      environment: import.meta.env.MODE,
      
      // Release tracking
      release: `automate-hub@${import.meta.env.VITE_APP_VERSION || '1.0.0'}`,
      
      // Integrations (v7 API)
      integrations: [
        // Basic browser tracing (without explicit router instrumentation to avoid build issues)
        browserTracingIntegration(),
        replayIntegration({
          maskAllText: true,
          blockAllMedia: true,
        }),
      ],
      
      // Performance monitoring
      tracesSampleRate: 1.0, // 100% of transactions (adjust in production)
      
      // Session replay
      replaysSessionSampleRate: 0.1, // 10% of sessions
      replaysOnErrorSampleRate: 1.0, // 100% of sessions with errors
      
      // Filter errors
      beforeSend(event, hint) {
        // Don't send errors in development
        if (import.meta.env.DEV) {
          console.error('Sentry Event (dev mode):', event, hint);
          return null;
        }
        
        // Filter out non-critical errors
        const error = hint.originalException;
        if (error && typeof error === 'object' && 'message' in error) {
          const message = String(error.message).toLowerCase();
          
          // Ignore common non-critical errors
          if (
            message.includes('network error') ||
            message.includes('failed to fetch') ||
            message.includes('load failed')
          ) {
            return null;
          }
        }
        
        return event;
      },
      
      // Ignore specific errors
      ignoreErrors: [
        // Browser extensions
        'top.GLOBALS',
        'chrome-extension://',
        'moz-extension://',
        // Third-party scripts
        'ResizeObserver loop',
        'Non-Error promise rejection',
      ],
      
      // Deny URLs (third-party scripts)
      denyUrls: [
        /extensions\//i,
        /^chrome:\/\//i,
        /^moz-extension:\/\//i,
      ],
    });
  } else {
    console.log('[Sentry] Running in development mode - error tracking disabled');
  }
};

// Re-export commonly used Sentry functions
export { Sentry };

