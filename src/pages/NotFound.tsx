import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import SEO from '../components/SEO';
import { useIsMobile } from '../utils/mobileDetection';

const NotFound = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <SEO
        title="Page Not Found - 404 | Automate Hub"
        description="The page you're looking for doesn't exist. Return to Automate Hub's homepage to explore our AI automation solutions."
        canonicalUrl="https://automate-hub.com/404"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className={`text-9xl font-bold ${isMobile ? 'text-blue-400' : 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'} mb-4`}>
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            to="/"
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <Home className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Go Home</h3>
            <p className="text-gray-400 text-sm">Return to our homepage</p>
          </Link>

          <Link
            to="/contact"
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <Search className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Get Help</h3>
            <p className="text-gray-400 text-sm">Contact our support team</p>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Go Back</h3>
            <p className="text-gray-400 text-sm">Return to previous page</p>
          </button>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">Popular Pages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/website-creation" className="text-blue-400 hover:text-blue-300 transition-colors">
              Website Creation
            </Link>
            <Link to="/crm-integration" className="text-purple-400 hover:text-purple-300 transition-colors">
              CRM Integration
            </Link>
            <Link to="/phone-callers" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              AI Phone Agents
            </Link>
            <Link to="/email-outreach" className="text-pink-400 hover:text-pink-300 transition-colors">
              Email Outreach
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link to="/book-consultation" className="text-green-400 hover:text-green-300 transition-colors">
              Book Consultation
            </Link>
            <Link to="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">
              Contact Us
            </Link>
            <Link to="/#roi-calculator" className="text-orange-400 hover:text-orange-300 transition-colors">
              ROI Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

