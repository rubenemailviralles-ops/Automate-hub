import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Calendar, ArrowRight, CheckCircle, X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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
            <ScrollReveal delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Scale Your Business?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                Join businesses using Automate Hub to streamline their operations and increase productivity.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Custom automation solutions</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="inline-block"
                style={{ perspective: '1000px' }}
              >
                <Link 
                  to="/book-consultation"
                  className="group bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-base hover-pop-button inline-flex items-center justify-center shadow-lg relative"
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.1s ease-out, background-color 0.3s',
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 15;
                    const rotateY = (centerX - x) / 15;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                  }}
                >
                  <Calendar className="mr-2 w-5 h-5" style={{ transform: 'translateZ(5px)' }} />
                  <span style={{ transform: 'translateZ(5px)' }}>Book Your Free Consultation</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ transform: 'translateZ(5px)' }} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-sm text-gray-500 mt-4">
                Free 30-minute consultation • No commitment required
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

    </>
  );
};

export default CTASection;
