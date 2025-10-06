import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useMobileHover } from './hooks/useMobileHover';
import Header from './components/Header';
import Home from './pages/Home';
import WebsiteCreation from './pages/WebsiteCreation';
import CRMIntegration from './pages/CRMIntegration';
import PhoneCallers from './pages/PhoneCallers';
import EmailOutreach from './pages/EmailOutreach';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import EmailContact from './pages/EmailContact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Footer from './components/Footer';

// Component to handle scrolling to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  const { reinitialize } = useMobileHover();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    // Reinitialize mobile hover effects when route changes
    reinitialize();
  }, [pathname]);

  return null;
}

function App() {
  // Initialize mobile hover effects
  useMobileHover();

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <Header />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;