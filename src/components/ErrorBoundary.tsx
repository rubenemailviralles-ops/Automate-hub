import React from 'react';
import * as Sentry from '@sentry/react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

/**
 * Error Fallback UI
 * Shown when an error is caught by the error boundary
 */
const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetError }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-red-500/20 border border-red-500/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-10 h-10 text-red-400" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">
            Oops! Something went wrong
          </h1>
          
          <p className="text-xl text-gray-400 mb-6">
            We're sorry for the inconvenience. Our team has been notified and we're working on fixing this issue.
          </p>
          
          {import.meta.env.DEV && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6 text-left">
              <h3 className="text-lg font-semibold text-red-400 mb-2">Error Details (Development Mode):</h3>
              <p className="text-sm text-gray-300 font-mono break-all">
                {error.message}
              </p>
              {error.stack && (
                <pre className="text-xs text-gray-400 mt-4 overflow-auto max-h-48">
                  {error.stack}
                </pre>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetError}
            className="inline-flex items-center justify-center bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            aria-label="Try again"
          >
            <RefreshCw className="mr-2 w-5 h-5" />
            Try Again
          </button>
          
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white hover:bg-white/5 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
            aria-label="Go back to homepage"
          >
            <Home className="mr-2 w-5 h-5" />
            Go to Homepage
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          Error ID: {Math.random().toString(36).substr(2, 9)}
        </p>
      </div>
    </div>
  );
};

/**
 * Sentry Error Boundary
 * Catches React errors and reports them to Sentry
 */
const SentryErrorBoundary = Sentry.withErrorBoundary(
  ({ children }: { children: React.ReactNode }) => <>{children}</>,
  {
    fallback: ErrorFallback,
    showDialog: false, // Set to true to show Sentry feedback dialog
  }
);

export default SentryErrorBoundary;

