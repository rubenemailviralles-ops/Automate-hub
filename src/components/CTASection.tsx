import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Calendar, ArrowRight, CheckCircle, X } from 'lucide-react';

const CTASection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname === '/contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <>
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">
              Ready to Scale Your Business?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Join businesses using Automate Hub to streamline their operations and increase productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-slide-in-left delay-400">
              <div className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Custom automation solutions</span>
              </div>
            </div>

            <Link 
              to="/book-consultation"
              className="group bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover-pop-button inline-flex items-center justify-center shadow-lg animate-scale-in delay-600"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-sm text-gray-500 mt-4 animate-fade-in delay-800">
              Free 30-minute consultation • No commitment required
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default CTASection;
