import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bot, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-white/5 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 animate-slide-in-left">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-300 rounded-xl flex items-center justify-center shadow-lg animate-bounce-subtle">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Automate Hub
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 animate-slide-in-right">
            <Link 
              to="/" 
              onClick={handleHomeClick}
              className={`text-sm font-medium transition-all duration-300 hover-pop-text ${
                location.pathname === '/' ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 hover-pop-text"
                onClick={toggleServices}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 hover-pop"
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
              className="text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 hover-pop-text"
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              onClick={handleContactClick}
              className="text-sm font-medium text-gray-400 hover:text-white transition-all duration-300 hover-pop-text"
            >
              Contact
            </Link>
          </nav>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={(e) => {
                  handleHomeClick(e);
                  setIsMenuOpen(false);
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <div className="space-y-2">
                <p className="text-white font-medium">Services</p>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block pl-4 text-gray-400 hover:text-white transition-colors"
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
                className="text-gray-400 hover:text-white transition-colors"
                onClick={(e) => {
                  handleAboutClick(e);
                  setIsMenuOpen(false);
                }}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-400 hover:text-white transition-colors"
                onClick={(e) => {
                  handleContactClick(e);
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;