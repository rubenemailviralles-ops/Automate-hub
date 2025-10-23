import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Bot, Twitter, Mail, Phone, Linkedin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const services = [
    { name: 'Website Creation', path: '/website-creation' },
    { name: 'CRM Integration', path: '/crm-integration' },
    { name: 'AI Phone Callers', path: '/phone-callers' },
    { name: 'Email Outreach', path: '/email-outreach' },
  ];

  const handlePhoneClick = () => {
    if (location.pathname === '/contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  const handleEmailClick = () => {
    navigate('/email-contact');
  };

  const handlePrivacyClick = () => {
    navigate('/privacy-policy');
  };

  const handleTermsClick = () => {
    navigate('/terms-of-service');
  };

  const handleCookieClick = () => {
    navigate('/cookie-policy');
  };

  const handleServiceClick = (servicePath: string) => {
    if (location.pathname === servicePath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(servicePath);
    }
  };

  const handleAboutClick = () => {
    if (location.pathname === '/about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/about');
    }
  };

  return (
    <footer className="seamless-section border-t border-white/5 py-20" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-center gap-16">
          {/* Company Info */}
          <ScrollReveal delay={0}>
            <div className="md:w-80">
              <Link to="/" className="flex items-center space-x-3 mb-4" aria-label="Automate Hub home page">
                <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center shadow-lg" aria-hidden="true">
                  <Bot className="w-6 h-6 text-black" aria-hidden="true" />
                </div>
                <span className="text-2xl font-bold text-white tracking-tight" aria-hidden="true">
                  Automate Hub
                </span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-sm">
                Transforming businesses with cutting-edge AI automation solutions. 
                Scale your operations, boost conversions, and unlock exponential growth.
              </p>
              <div className="flex space-x-3" role="group" aria-label="Social media links">
                <a 
                  href="https://x.com/Automate_hub1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  aria-label="Follow us on Twitter/X (opens in new tab)"
                >
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" aria-hidden="true" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ruben-germeshuys-bbb478385/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  aria-label="Connect with us on LinkedIn (opens in new tab)"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" aria-hidden="true" />
                </a>
                <button 
                  onClick={handleEmailClick} 
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  aria-label="Contact us via email"
                >
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" aria-hidden="true" />
                </button>
                <button 
                  onClick={handlePhoneClick} 
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  aria-label="Contact us by phone"
                >
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-white" aria-hidden="true" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Services */}
          <ScrollReveal delay={100}>
            <div className="md:w-48">
              <nav aria-label="Services links">
              <h3 className="text-base font-bold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.path}>
                    <button
                      onClick={() => handleServiceClick(service.path)}
                      className="text-gray-400 hover:text-white transition-all duration-300 text-sm hover-pop-text"
                      aria-label={`Navigate to ${service.name} service page`}
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
              </nav>
            </div>
          </ScrollReveal>

          {/* Company */}
          <ScrollReveal delay={200}>
            <div className="md:w-32">
              <nav aria-label="Company links">
              <h3 className="text-base font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><button onClick={handleAboutClick} className="text-gray-400 hover:text-white transition-all duration-300 text-sm hover-pop-text" aria-label="Navigate to about us page">About Us</button></li>
                <li><button onClick={handlePhoneClick} className="text-gray-400 hover:text-white transition-all duration-300 text-sm hover-pop-text" aria-label="Navigate to contact page">Contact</button></li>
              </ul>
              </nav>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Automate Hub. All rights reserved.
            </p>
            <nav className="flex space-x-4 mt-3 md:mt-0" aria-label="Legal links">
              <button onClick={handlePrivacyClick} className="text-gray-500 hover:text-white text-sm transition-colors" aria-label="View privacy policy">
                Privacy Policy
              </button>
              <button onClick={handleTermsClick} className="text-gray-500 hover:text-white text-sm transition-all duration-300 hover-pop-text" aria-label="View terms of service">
                Terms of Service
              </button>
              <button onClick={handleCookieClick} className="text-gray-500 hover:text-white text-sm transition-all duration-300 hover-pop-text" aria-label="View cookie policy">
                Cookie Policy
              </button>
            </nav>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;