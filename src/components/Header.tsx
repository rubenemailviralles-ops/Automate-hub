import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bot, Menu, X, ChevronDown } from 'lucide-react';
import { useLogoAnimation } from '../hooks/useLogoAnimation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAnimating, triggerAnimation } = useLogoAnimation();

  const services = [
    { name: 'Website Creation', path: '/website-creation' },
    { name: 'CRM Integration', path: '/crm-integration' },
    { name: 'AI Phone Callers', path: '/phone-callers' },
    { name: 'Email Outreach', path: '/email-outreach' },
  ];

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeServices = () => {
    setIsServicesOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close services dropdown
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      
      // Close mobile menu
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      // Close mobile menu when scrolling
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
      // Close services dropdown when scrolling
      if (isServicesOpen) {
        setIsServicesOpen(false);
      }
    };
    if (isServicesOpen || isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isServicesOpen, isMenuOpen]);

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleServiceClick = (servicePath: string, e: React.MouseEvent) => {
    if (location.pathname === servicePath) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeServices();
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    if (location.pathname === '/about') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    if (location.pathname === '/contact') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleWebsiteCreationClick = (e: React.MouseEvent) => {
    if (location.pathname === '/website-creation') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCRMIntegrationClick = (e: React.MouseEvent) => {
    if (location.pathname === '/crm-integration') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePhoneCallersClick = (e: React.MouseEvent) => {
    if (location.pathname === '/phone-callers') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleEmailOutreachClick = (e: React.MouseEvent) => {
    if (location.pathname === '/email-outreach') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBookConsultationClick = (e: React.MouseEvent) => {
    if (location.pathname === '/book-consultation') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50" ref={mobileMenuRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 animate-slide-in-left">
          <Link to="/" className="flex items-center space-x-3">
            <div 
              className={`nav-item nav-brand-icon w-10 h-10 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center shadow-lg cursor-pointer transition-all duration-200 logo-normal ${
                isAnimating ? 'logo-hidden' : 'hover:logo-shake'
              }`}
              onClick={triggerAnimation}
              id="logo-icon"
              data-nav-item="logo"
            >
              <Bot className="w-6 h-6 text-black" />
            </div>
            <span 
              className={`nav-item nav-brand-text text-2xl font-bold text-white tracking-tight transition-all duration-300 ${
                isAnimating ? 'opacity-0 -translate-y-1 pointer-events-none' : 'opacity-100'
              }`}
              data-nav-item="brand"
            >
              Automate Hub
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 animate-slide-in-right">
            <Link 
              to="/" 
              onClick={handleHomeClick}
              className={`text-sm font-medium transition-all duration-300 hover-pop-text nav-item ${
                location.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              data-nav-item="home"
            >
              Home
            </Link>
            
            <div className="relative group" ref={servicesDropdownRef}>
              <button 
                className={`flex items-center text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 hover-pop-text nav-item ${
                  isAnimating ? 'nav-item-animating' : ''
                }`}
                onClick={toggleServices}
                data-nav-item="services"
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className={`absolute top-full left-0 mt-2 w-64 bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl py-2 hover-pop dropdown-menu dropdown-fade-in ${
                    isAnimating ? 'dropdown-falling' : ''
                  }`}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 hover-pop-subtle"
                      onClick={(e) => {
                        handleServiceClick(service.path, e);
                        if (service.path === '/website-creation') handleWebsiteCreationClick(e);
                        if (service.path === '/crm-integration') handleCRMIntegrationClick(e);
                        if (service.path === '/phone-callers') handlePhoneCallersClick(e);
                        if (service.path === '/email-outreach') handleEmailOutreachClick(e);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/about"
              onClick={handleAboutClick}
              className={`text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 hover-pop-text nav-item ${
                isAnimating ? 'nav-item-animating' : ''
              }`}
              data-nav-item="about"
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              onClick={handleContactClick}
              className={`text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 hover-pop-text nav-item ${
                isAnimating ? 'nav-item-animating' : ''
              }`}
              data-nav-item="contact"
            >
              Contact
            </Link>
            
            <Link 
              to="/book-consultation"
              onClick={handleBookConsultationClick}
              className={`bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover-pop-button nav-item ${
                isAnimating ? 'nav-item-animating' : ''
              }`}
              data-nav-item="consultation"
            >
              Book Consultation
            </Link>
          </nav>

          <button
            className="lg:hidden text-white nav-item"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-nav-item="mobile-toggle"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 mobile-menu-fade-in nav-item" data-nav-item="mobile-menu">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={(e) => {
                  handleHomeClick(e);
                  setIsMenuOpen(false);
                }}
                className="text-gray-400 hover:text-white transition-colors nav-item"
                data-nav-item="mobile-home"
              >
                Home
              </Link>
              <div className="space-y-2 nav-item" data-nav-item="mobile-services">
                <p className="text-white font-medium nav-item" data-nav-item="mobile-services-label">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block pl-4 text-gray-400 hover:text-white transition-colors nav-item"
                    data-nav-item={`mobile-service-${service.path.replace('/', '')}`}
                    onClick={(e) => {
                      if (service.path === '/website-creation') handleWebsiteCreationClick(e);
                      if (service.path === '/crm-integration') handleCRMIntegrationClick(e);
                      if (service.path === '/phone-callers') handlePhoneCallersClick(e);
                      if (service.path === '/email-outreach') handleEmailOutreachClick(e);
                      setIsMenuOpen(false);
                    }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link 
                to="/about"
                className="text-gray-400 hover:text-white transition-colors nav-item"
                data-nav-item="mobile-about"
                onClick={(e) => {
                  handleAboutClick(e);
                  setIsMenuOpen(false);
                }}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-400 hover:text-white transition-colors nav-item"
                data-nav-item="mobile-contact"
                onClick={(e) => {
                  handleContactClick(e);
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </Link>
              <Link 
                to="/book-consultation"
                className="bg-white text-black px-4 py-2 rounded-lg font-medium transition-colors nav-item"
                data-nav-item="mobile-consultation"
                onClick={(e) => {
                  handleBookConsultationClick(e);
                  setIsMenuOpen(false);
                }}
              >
                Book Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;