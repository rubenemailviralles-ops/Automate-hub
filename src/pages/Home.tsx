import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, Sparkles, Globe, Database, Phone, Mail, BarChart3 } from 'lucide-react';
import CTASection from '../components/CTASection';
import Calculator from '../components/Calculator';
import TypeWriter from '../components/TypeWriter';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showSubheading, setShowSubheading] = useState(false);

  const handleServiceClick = (servicePath: string) => {
    if (location.pathname === servicePath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(servicePath);
    }
  };

  const services = [
    {
      icon: Globe,
      title: 'Website Creation',
      description: 'Professional, conversion-optimized websites built with cutting-edge technology and AI-powered design.',
      path: '/website-creation',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'CRM Integration',
      description: 'Seamlessly connect your systems with intelligent automation that grows with your business.',
      path: '/crm-integration',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Phone,
      title: 'AI Phone Callers',
      description: 'Never miss a call again. AI agents handle incoming calls professionally, capturing every opportunity.',
      path: '/phone-callers',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Mail,
      title: 'Email Outreach',
      description: 'Personalized AI-driven email campaigns that engage prospects and drive conversions at scale.',
      path: '/email-outreach',
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 seamless-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <ScrollReveal delay={0}>
              <div 
                className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm mobile-3d-tilt"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                  perspective: '1000px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateZ(15px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 4px 15px rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(255, 255, 255, 0.1)';
                }}
              >
                <Sparkles className="w-5 h-5 text-white mr-2" style={{ transform: 'translateZ(5px)' }} />
                <span className="text-white font-medium" style={{ transform: 'translateZ(5px)' }}>Next-Gen AI Automation Platform</span>
              </div>
            </ScrollReveal>

            <TypeWriter 
              text="Automate Your" 
              as="h1"
              className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight"
              delay={100}
              onComplete={() => setShowSecondLine(true)}
            >
              <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Business Growth
              </span>
            </TypeWriter>

            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
                Increase productivity and reduce costs with AI automation solutions. From intelligent chatbots to automated systems, 
                we help businesses operate more efficiently and compete effectively.
              </p>
            </ScrollReveal>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            </div>

            <ScrollReveal delay={300}>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-base text-gray-400">
                  Helping businesses streamline operations and reduce costs through intelligent automation solutions
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ScrollReveal delay={0}>
        <Calculator />
      </ScrollReveal>

      {/* Services Section */}
      <section className="py-16 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <TypeWriter 
              text="Our AI Solutions" 
              as="h2"
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              delay={0}
              onComplete={() => setShowSubheading(true)}
            />
            <p 
              className="text-lg text-gray-400 max-w-3xl mx-auto"
              style={{ 
                opacity: showSubheading ? 1 : 0,
                transform: showSubheading ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                transitionDelay: '200ms'
              }}
            >
              Comprehensive automation services designed to transform every aspect of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" style={{ perspective: '1000px' }}>
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <ScrollReveal key={index} delay={index * 150}>
                  <div 
                    className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:bg-white/10 hover-pop mobile-3d-tilt relative"
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      transition: 'transform 0.1s ease-out, border-color 0.5s, background-color 0.5s',
                    }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateX = (y - centerY) / 20;
                      const rotateY = (centerX - x) / 20;
                      e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                    }}
                  >
                    {/* Shine effect overlay */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)',
                      }}
                    />
                    
                    <div 
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 relative`}
                      style={{
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                        transform: 'translateZ(20px)',
                        transition: 'transform 0.3s ease-out',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateZ(20px) scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateZ(20px) scale(1)';
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-white relative" style={{ transform: 'translateZ(15px)' }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed mb-6 relative" style={{ transform: 'translateZ(10px)' }}>
                      {service.description}
                    </p>

                    <button
                      onClick={() => handleServiceClick(service.path)}
                      className="inline-flex items-center text-white font-semibold hover:text-gray-300 transition-all duration-300 group hover-pop-text relative"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Home;