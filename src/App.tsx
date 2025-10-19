import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useMobileHover } from './hooks/useMobileHover';
import { useChatbotPosition } from './hooks/useChatbotPosition';
import { useRemoveBoltBranding } from './hooks/useRemoveBoltBranding';
import { initMobileScrollPopup, refreshMobileScrollPopup } from './utils/mobileScrollPopup';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import Breadcrumbs from './components/Breadcrumbs';

// Lazy load page components for better performance
const Home = lazy(() => import('./pages/Home'));
const WebsiteCreation = lazy(() => import('./pages/WebsiteCreation'));
const CRMIntegration = lazy(() => import('./pages/CRMIntegration'));
const PhoneCallers = lazy(() => import('./pages/PhoneCallers'));
const EmailOutreach = lazy(() => import('./pages/EmailOutreach'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const EmailContact = lazy(() => import('./pages/EmailContact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const ConsultationBooking = lazy(() => import('./pages/ConsultationBooking'));
const ABTestDashboard = lazy(() => import('./components/ABTestDashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Component to handle scrolling to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const { reinitialize } = useMobileHover();

  React.useEffect(() => {
    // If there's a hash, scroll to that element
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo(0, 0);
    }
    
    // Reinitialize mobile hover effects when route changes
    reinitialize();
    
    // Mobile scroll popup disabled
    // setTimeout(() => {
    //   refreshMobileScrollPopup();
    // }, 500);
  }, [pathname, hash, reinitialize]);

  return null;
}

function App() {
  // Initialize mobile hover effects
  useMobileHover();
  
  // Initialize chatbot positioning
  useChatbotPosition();

  // Remove external branding overlays
  useRemoveBoltBranding();

  // Add mobile-no-animations class to body on mobile devices
  useEffect(() => {
    const isMobileDevice = window.innerWidth < 1024;
    if (isMobileDevice) {
      document.body.classList.add('mobile-no-animations');
    } else {
      document.body.classList.remove('mobile-no-animations');
    }
    
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        document.body.classList.add('mobile-no-animations');
      } else {
        document.body.classList.remove('mobile-no-animations');
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <div className="min-h-screen text-white relative">
        {/* Floating background orbs */}
        <div className="floating-orb floating-orb-1" aria-hidden="true"></div>
        <div className="floating-orb floating-orb-2" aria-hidden="true"></div>
        <div className="floating-orb floating-orb-3" aria-hidden="true"></div>
        <div className="floating-orb floating-orb-4" aria-hidden="true"></div>
        <div className="floating-orb floating-orb-5" aria-hidden="true"></div>
        <div className="floating-orb floating-orb-6" aria-hidden="true"></div>
        <div className="floating-orb floating-orb-7" aria-hidden="true"></div>
        
        <Header />
        <Breadcrumbs />
        <ErrorBoundary>
          <main id="main-content" role="main">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/website-creation" element={<WebsiteCreation />} />
                <Route path="/crm-integration" element={<CRMIntegration />} />
                <Route path="/phone-callers" element={<PhoneCallers />} />
                <Route path="/email-outreach" element={<EmailOutreach />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/email-contact" element={<EmailContact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/book-consultation" element={<ConsultationBooking />} />
                <Route path="/ab-testing" element={<ABTestDashboard />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  );
}

export default App;