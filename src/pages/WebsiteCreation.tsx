import React, { useState } from 'react';
import { Globe, Smartphone, Search, Zap, Palette, Code, ArrowLeft, CheckCircle, ArrowRight, Package, Workflow, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import CTASection from '../components/CTASection';
import TypeWriter from '../components/TypeWriter';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import ServiceSchema from '../components/ServiceSchema';
import FAQSchema from '../components/FAQSchema';
import { useIsMobile } from '../utils/mobileDetection';
import { navigateBackToHome } from '../utils/scrollToTop';

const WebsiteCreation = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const location = useLocation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  return (
    <div className="pt-20">
      <SEO
        title="Professional Website Creation Services | AI-Powered Web Development | Automate Hub"
        description="Transform your business with professional website creation services. AI-powered web development, mobile-first design, SEO optimization, and conversion-focused websites that drive results. Get your custom website built from scratch."
        keywords="website creation, web development, AI-powered websites, professional web design, mobile-first design, SEO optimized websites, conversion optimization, custom website development, business websites, web design services"
        canonicalUrl="https://automate-hub.com/website-creation"
      />
      <ServiceSchema
        serviceName="AI-Powered Website Creation Services"
        description="Professional website creation services with AI integration, mobile-first design, SEO optimization, and conversion-focused development. Custom websites built from scratch to drive business growth."
        serviceType="Web Development"
        offers={[
          { name: 'Custom Website Design', description: 'Unique designs tailored to your brand identity with no templates' },
          { name: 'AI Chatbot Integration', description: '24/7 customer support and automated lead capture systems' },
          { name: 'Mobile-First Development', description: 'Responsive design optimized for all devices and screen sizes' },
          { name: 'SEO Optimization', description: 'Technical SEO, fast loading speeds, and clean code structure' },
          { name: 'Conversion Optimization', description: 'Every element designed to guide visitors toward taking action' },
          { name: 'Analytics Setup', description: 'Track visitors and conversions from day one' },
        ]}
      />
      {/* Hero Section */}
      <section className="py-16 md:py-20 seamless-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <ScrollReveal delay={0}>
              <div 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full mb-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(59, 130, 246, 0.2)',
                  transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                  perspective: '1000px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateZ(15px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 4px 15px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(59, 130, 246, 0.2)';
                }}
              >
                <Globe className="w-5 h-5 text-blue-400 mr-2" style={{ transform: 'translateZ(5px)' }} />
                <span className="text-blue-400 font-medium" style={{ transform: 'translateZ(5px)' }}>Professional Web Development</span>
              </div>
            </ScrollReveal>

            <TypeWriter 
              text="Websites That" 
              as="h1"
              className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight"
              delay={100}
            >
              <span className={`block ${isMobile ? 'text-blue-400' : 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'}`}>
                Convert Visitors
              </span>
            </TypeWriter>

            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
                Your website is your digital storefront. We create conversion-optimized, AI-powered websites that turn 
                visitors into customers and scale with your business growth. <Link to="/#roi-calculator" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">Calculate your potential ROI</Link> and 
                see how much you can save with automation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-6 max-w-2xl mx-auto mb-8 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/50"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                }}
              >
                <p className="text-gray-300 text-lg">
                  Our websites integrate AI chatbots, automated lead capture, and conversion optimization from day one - 
                  turning your site into a <span className="text-white font-bold">24/7 sales machine</span>.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visual Demo Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl font-bold mb-8 text-white">
                See It In Action
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Watch how our websites convert visitors into customers with AI-powered features
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div 
              className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-3xl p-8 max-w-5xl mx-auto mobile-3d-popup relative"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                perspective: '1000px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) translateZ(20px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 2px 16px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) translateZ(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ transform: 'translateZ(10px)' }}>
              {/* Mock Browser Header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 ml-4">
                  https://your-business.com
                </div>
              </div>

              {/* Mock Website Content */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Transform Your Business Today</h3>
                  <p className="text-blue-100 mb-6">Professional services that drive results</p>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 animate-pulse">
                    Get Started Now
                  </button>
                </div>
                
                {/* Floating Elements Animation */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full animate-float"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full animate-bounce-subtle delay-1000"></div>
              </div>

              {/* Features Section */}
              <div className="p-8 bg-gray-50">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center animate-fade-in delay-200">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm">Mobile First</h4>
                  </div>
                  <div className="text-center animate-fade-in delay-400">
                    <div className="w-12 h-12 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm">SEO Ready</h4>
                  </div>
                  <div className="text-center animate-fade-in delay-600">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm">AI Powered</h4>
                  </div>
                </div>
              </div>

              {/* Conversion Tracking Animation */}
              <div className="bg-green-50 border-t-4 border-green-500 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-green-800 font-semibold text-sm">🎯 Visitor converted to lead!</span>
                  <div className="flex items-center space-x-2 animate-pulse">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-xs">Real-time tracking</span>
                  </div>
                </div>
              </div>
              </div>

              <ScrollReveal delay={300}>
                <div className="text-center mt-8">
                  <p className="text-gray-300 text-lg">
                    ✨ <span className="text-white font-bold">Mobile-optimized</span> • 
                    <span className="text-white font-bold"> SEO-ready</span> • 
                    <span className="text-white font-bold"> Conversion-focused</span> ✨
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl font-bold mb-8 text-white">
                What Makes Our Websites Different
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
            <ScrollReveal delay={100}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
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
                <div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6"
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
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Mobile-First Design</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Optimized for mobile devices where 60% of web traffic originates. Fast loading, intuitive navigation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
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
                <div 
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6"
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
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>SEO Optimized</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Built with search engine optimization in mind. Technical SEO, fast loading speeds, and clean code structure.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
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
                <div 
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6"
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
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>AI Integration</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Built-in AI chatbots, automated lead capture forms, and intelligent user behavior tracking.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
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
                <div 
                  className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6"
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
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Custom Design</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Unique designs tailored to your brand identity. No templates - every website is built from scratch.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
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
                <div 
                  className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-6"
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
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Modern Technology</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Built with the latest web technologies for maximum performance, security, and scalability.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
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
                <div 
                  className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6"
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
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Conversion Focused</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Every element is designed to guide visitors toward taking action. Optimized for maximum conversions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl font-bold mb-8 text-white">
                Our Website Development Process
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Discovery</h3>
                <p className="text-gray-400">
                  We analyze your business, target audience, and competitors to create the perfect strategy.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Design</h3>
                <p className="text-gray-400">
                  Custom wireframes and designs that reflect your brand and optimize for conversions.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Development</h3>
                <p className="text-gray-400">
                  Clean, fast code with AI integrations, SEO optimization, and mobile responsiveness.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Launch</h3>
                <p className="text-gray-400">
                  Thorough testing, optimization, and launch with ongoing support and maintenance.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Our Website Services */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Complete Website Solutions
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Get more than just a website - get a complete digital growth platform
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12" style={{ perspective: '1000px' }}>
            <ScrollReveal delay={200}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
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
                <div className="flex items-start mb-6" style={{ transform: 'translateZ(15px)' }}>
                  <div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
                    style={{
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.15) translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                    }}
                  >
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-0" style={{ transform: 'translateZ(10px)' }}>What's Included</h3>
                </div>
                <ul className="space-y-4 text-gray-400" style={{ transform: 'translateZ(8px)' }}>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Custom Design</span> - No templates, built from scratch for your brand</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">AI Chatbot Integration</span> - 24/7 customer support and lead capture</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Mobile Optimization</span> - Perfect on all devices and screen sizes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">SEO Foundation</span> - Technical SEO and optimization built-in</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Fast Loading</span> - Optimized for speed and performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Analytics Setup</span> - Track visitors and conversions from day one</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
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
                <div className="flex items-start mb-6" style={{ transform: 'translateZ(15px)' }}>
                  <div 
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
                    style={{
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.15) translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(168, 85, 247, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                    }}
                  >
                    <Workflow className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-0" style={{ transform: 'translateZ(10px)' }}>Integrate with Your Automation</h3>
                </div>
                <ul className="space-y-4 text-gray-400" style={{ transform: 'translateZ(8px)' }}>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Connect with <Link to="/crm-integration" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CRM integration</Link> for automated lead management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Add <Link to="/phone-callers" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">AI phone agents</Link> for 24/7 call handling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Integrate <Link to="/email-outreach" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">email automation</Link> for nurturing leads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Appointment scheduling</span> - Automated calendar integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Form automation</span> - Instant notifications and follow-ups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Payment processing</span> - Secure payment gateway integration</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* In-content CTA */}
          <ScrollReveal delay={400}>
            <div 
              className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto text-center mobile-3d-popup"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 2px 16px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)';
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Build Your Website?
              </h3>
              <p className="text-gray-400 mb-6 text-lg">
                Get a custom quote for your business website with AI automation features
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  style={{
                    boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
                    transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(59, 130, 246, 0.4)';
                  }}
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                  style={{
                    transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Frequently Asked Questions
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-gray-400">
                Everything you need to know about our website creation services
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 faq-container">
            <ScrollReveal delay={200}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/10" 
                style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === 0 ? null : 0)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <h3 className="text-xl font-bold text-white">How long does it take to build a website?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      openFAQ === 0 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFAQ === 0 && (
                  <div className="px-6 pb-6 faq-dropdown">
                    <p className="text-gray-400 leading-relaxed">
                      Our typical website development timeline is 2-4 weeks, depending on complexity. Simple business websites can be completed in 2 weeks, while more complex sites with custom features, AI chatbots, and advanced integrations may take 3-4 weeks. We work efficiently while ensuring every detail meets our quality standards.
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/10" 
                style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <h3 className="text-xl font-bold text-white">Do you provide website hosting and maintenance?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      openFAQ === 1 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFAQ === 1 && (
                  <div className="px-6 pb-6 faq-dropdown">
                    <p className="text-gray-400 leading-relaxed">
                      Yes! We offer comprehensive hosting and maintenance packages. Your website will be hosted on enterprise-grade servers with 99.9% uptime guarantee. Our maintenance includes regular updates, security patches, backups, and technical support. You can focus on your business while we handle all technical aspects.
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/10" 
                style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <h3 className="text-xl font-bold text-white">Can you redesign my existing website?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      openFAQ === 2 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFAQ === 2 && (
                  <div className="px-6 pb-6 faq-dropdown">
                    <p className="text-gray-400 leading-relaxed">
                      Absolutely! We specialize in website redesigns and modernization. We'll analyze your current site, preserve what works, and transform outdated elements with modern design and AI-powered features. We can migrate your content, improve SEO, add automation, and create a fresh, conversion-focused design while maintaining your brand identity.
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/10" 
                style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <h3 className="text-xl font-bold text-white">Will my website be mobile-friendly and SEO optimized?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      openFAQ === 3 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFAQ === 3 && (
                  <div className="px-6 pb-6 faq-dropdown">
                    <p className="text-gray-400 leading-relaxed">
                      Every website we build is mobile-first and fully responsive, working perfectly on all devices. SEO optimization is built-in from day one with clean code structure, fast loading speeds, proper meta tags, structured data, and technical SEO best practices. We ensure your site ranks well and provides an excellent user experience on any device.
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/10" 
                style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <h3 className="text-xl font-bold text-white">What AI features can you integrate into my website?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      openFAQ === 4 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFAQ === 4 && (
                  <div className="px-6 pb-6 faq-dropdown">
                    <p className="text-gray-400 leading-relaxed">
                      We integrate advanced AI features including 24/7 chatbots for customer support and lead capture, automated appointment scheduling, intelligent form analysis, personalized content recommendations, and behavior-based automation. These AI tools work seamlessly with your CRM, email marketing, and phone systems to create a complete automation ecosystem.
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/10" 
                style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === 5 ? null : 5)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <h3 className="text-xl font-bold text-white">Can I update the website content myself?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      openFAQ === 5 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFAQ === 5 && (
                  <div className="px-6 pb-6 faq-dropdown">
                    <p className="text-gray-400 leading-relaxed">
                      Yes! We build user-friendly content management systems that allow you to easily update text, images, blog posts, and other content without technical knowledge. We provide comprehensive training and documentation. For complex updates or technical changes, our support team is always available to assist you.
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/10" 
                style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === 6 ? null : 6)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <h3 className="text-xl font-bold text-white">What happens if I need changes after the website launches?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      openFAQ === 6 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFAQ === 6 && (
                  <div className="px-6 pb-6 faq-dropdown">
                    <p className="text-gray-400 leading-relaxed">
                      We offer ongoing support and maintenance packages. Minor updates and tweaks are handled quickly, usually within 24-48 hours. For larger feature additions or redesigns, we'll provide a quote and timeline. All our websites are built with scalability in mind, making future enhancements straightforward and cost-effective.
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={550}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/10" 
                style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === 7 ? null : 7)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors focus:outline-none"
                >
                  <h3 className="text-xl font-bold text-white">How much does a custom website cost?</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-white transition-transform duration-300 ${
                      openFAQ === 7 ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFAQ === 7 && (
                  <div className="px-6 pb-6 faq-dropdown">
                    <p className="text-gray-400 leading-relaxed">
                      Website costs vary based on complexity, features, and integrations needed. A basic business website starts around $2,500, while advanced sites with AI features, custom integrations, and automation can range from $5,000-$15,000+. We offer flexible payment plans and provide detailed quotes after understanding your specific requirements. <Link to="/book-consultation" className="text-blue-400 hover:text-blue-300 transition-colors">Book a free consultation</Link> to get a custom quote.
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <FAQSchema
        faqs={[
          {
            question: 'How long does it take to build a website?',
            answer: 'Our typical website development timeline is 2-4 weeks, depending on complexity. Simple business websites can be completed in 2 weeks, while more complex sites with custom features, AI chatbots, and advanced integrations may take 3-4 weeks. We work efficiently while ensuring every detail meets our quality standards.',
          },
          {
            question: 'Do you provide website hosting and maintenance?',
            answer: 'Yes! We offer comprehensive hosting and maintenance packages. Your website will be hosted on enterprise-grade servers with 99.9% uptime guarantee. Our maintenance includes regular updates, security patches, backups, and technical support. You can focus on your business while we handle all technical aspects.',
          },
          {
            question: 'Can you redesign my existing website?',
            answer: 'Absolutely! We specialize in website redesigns and modernization. We\'ll analyze your current site, preserve what works, and transform outdated elements with modern design and AI-powered features. We can migrate your content, improve SEO, add automation, and create a fresh, conversion-focused design while maintaining your brand identity.',
          },
          {
            question: 'Will my website be mobile-friendly and SEO optimized?',
            answer: 'Every website we build is mobile-first and fully responsive, working perfectly on all devices. SEO optimization is built-in from day one with clean code structure, fast loading speeds, proper meta tags, structured data, and technical SEO best practices. We ensure your site ranks well and provides an excellent user experience on any device.',
          },
          {
            question: 'What AI features can you integrate into my website?',
            answer: 'We integrate advanced AI features including 24/7 chatbots for customer support and lead capture, automated appointment scheduling, intelligent form analysis, personalized content recommendations, and behavior-based automation. These AI tools work seamlessly with your CRM, email marketing, and phone systems to create a complete automation ecosystem.',
          },
          {
            question: 'Can I update the website content myself?',
            answer: 'Yes! We build user-friendly content management systems that allow you to easily update text, images, blog posts, and other content without technical knowledge. We provide comprehensive training and documentation. For complex updates or technical changes, our support team is always available to assist you.',
          },
          {
            question: 'What happens if I need changes after the website launches?',
            answer: 'We offer ongoing support and maintenance packages. Minor updates and tweaks are handled quickly, usually within 24-48 hours. For larger feature additions or redesigns, we\'ll provide a quote and timeline. All our websites are built with scalability in mind, making future enhancements straightforward and cost-effective.',
          },
          {
            question: 'How much does a custom website cost?',
            answer: 'Website costs vary based on complexity, features, and integrations needed. A basic business website starts around $2,500, while advanced sites with AI features, custom integrations, and automation can range from $5,000-$15,000+. We offer flexible payment plans and provide detailed quotes after understanding your specific requirements.',
          },
        ]}
      />

      <CTASection />

      {/* Back to Homepage */}
      <section className="py-12 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <button 
              onClick={() => navigateBackToHome(navigate, location.state)}
              className="inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 hover-pop-text cursor-pointer"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Homepage
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteCreation;