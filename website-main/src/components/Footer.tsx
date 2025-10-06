import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Bot, Twitter, Mail, Phone } from 'lucide-react';

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
    <footer className="bg-transparent border-t border-white/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Automate Hub
              </span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Transforming businesses with cutting-edge AI automation solutions. 
              Scale your operations, boost conversions, and unlock exponential growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/Automate_hub1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group hover-pop-button">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <button onClick={handleEmailClick} className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group hover-pop-button">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </button>
              <button onClick={handlePhoneClick} className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group hover-pop-button">
                <Phone className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <button
                    onClick={() => handleServiceClick(service.path)}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm hover-pop-text"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li><button onClick={handleAboutClick} className="text-gray-400 hover:text-white transition-all duration-300 text-sm hover-pop-text">About Us</button></li>
              <li><button onClick={handlePhoneClick} className="text-gray-400 hover:text-white transition-all duration-300 text-sm hover-pop-text">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Automate Hub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={handlePrivacyClick} className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </button>
            <button onClick={handleTermsClick} className="text-gray-500 hover:text-white text-sm transition-all duration-300 hover-pop-text">
              Terms of Service
            </button>
            <button onClick={handleCookieClick} className="text-gray-500 hover:text-white text-sm transition-all duration-300 hover-pop-text">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;