import React from 'react';
import { Mail, Target, BarChart3, Users, Zap, TrendingUp, ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import TypeWriter from '../components/TypeWriter';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import ServiceSchema from '../components/ServiceSchema';
import FAQSchema from '../components/FAQSchema';

const EmailOutreach = () => {
  return (
    <div className="pt-20">
      <SEO
        title="AI Email Outreach & Marketing Automation | Personalized Email Campaigns | Automate Hub"
        description="Scale your outreach with AI-powered email marketing automation. Hyper-personalized email campaigns, automated follow-ups, A/B testing, and advanced analytics. Boost open rates and conversions with intelligent email systems."
        keywords="email outreach, email marketing automation, AI email campaigns, personalized emails, email automation, lead generation, email marketing, automated follow-ups, email analytics, email marketing tools"
        canonicalUrl="https://automate-hub.com/email-outreach"
      />
      <ServiceSchema
        serviceName="AI Email Outreach & Marketing Automation"
        description="Scale your outreach with AI-powered email marketing automation. Hyper-personalized campaigns, automated follow-ups, A/B testing, and advanced analytics to boost conversions."
        serviceType="Email Marketing"
        offers={[
          { name: 'AI Personalization', description: 'Unique emails for each prospect at scale' },
          { name: 'Automated Sequences', description: 'Multi-touch campaigns that run on autopilot' },
          { name: 'A/B Testing', description: 'Optimize subject lines, content, and send times' },
          { name: 'Smart Scheduling', description: 'Send at optimal times for each recipient' },
          { name: 'Advanced Analytics', description: 'Track opens, clicks, and conversions' },
          { name: 'Deliverability Optimization', description: 'Maximize inbox placement rates' },
        ]}
      />
      <section className="py-24 seamless-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <ScrollReveal delay={0}>
              <div 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500/20 to-rose-600/20 border border-pink-500/30 rounded-full mb-8 backdrop-blur-sm mobile-3d-tilt"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(236, 72, 153, 0.2)',
                  transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                  perspective: '1000px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateZ(15px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 4px 15px rgba(236, 72, 153, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(236, 72, 153, 0.2)';
                }}
              >
                <Mail className="w-5 h-5 text-pink-400 mr-2" style={{ transform: 'translateZ(5px)' }} />
                <span className="text-pink-400 font-medium" style={{ transform: 'translateZ(5px)' }}>AI Email Outreach</span>
              </div>
            </ScrollReveal>

            <TypeWriter 
              text="Emails That" 
              as="h1"
              className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight"
              delay={100}
            >
              <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Actually Convert
              </span>
            </TypeWriter>

            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Scale your outreach with AI-powered email campaigns that feel personal, drive engagement, and convert 
                prospects into customers at unprecedented rates. <Link to="/#roi-calculator" className="text-pink-400 hover:text-pink-300 transition-colors font-semibold">Use our ROI calculator</Link> to 
                see how email automation can boost your revenue.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-gradient-to-r from-pink-500/10 to-rose-600/10 border border-pink-500/30 rounded-2xl p-8 max-w-2xl mx-auto mb-12 mobile-3d-tilt relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.1s ease-out, border-color 0.3s',
                  perspective: '1000px',
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
                <p className="text-gray-300 text-lg" style={{ transform: 'translateZ(10px)' }}>
                  Our AI writes <span className="text-white font-bold">hyper-personalized emails</span> at scale, analyzing each prospect's 
                  digital footprint to craft messages that feel like they were written by a human who knows them personally.
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
                AI Email Campaigns In Action
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Watch how our AI creates personalized email campaigns that actually convert
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div 
              className="bg-gradient-to-br from-pink-500/10 to-rose-600/10 border border-pink-500/30 rounded-3xl p-8 max-w-6xl mx-auto mobile-3d-popup relative"
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ transform: 'translateZ(10px)' }}>
              {/* Email Composition */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700 text-sm font-medium">AI Email Composer</span>
                  <div className="flex items-center space-x-1 ml-auto">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 text-xs">Writing...</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div className="animate-fade-in">
                      <label className="text-gray-600 text-sm">To:</label>
                      <div className="bg-gray-50 rounded-lg p-2 mt-1">
                        <span className="text-gray-800">john.smith@techcorp.com</span>
                      </div>
                    </div>

                    <div className="animate-fade-in delay-500">
                      <label className="text-gray-600 text-sm">Subject:</label>
                      <div className="bg-gray-50 rounded-lg p-2 mt-1 relative">
                        <span className="text-gray-800">John, boost TechCorp's efficiency by 40% 🚀</span>
                        <div className="absolute right-2 top-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">AI Optimized</span>
                        </div>
                      </div>
                    </div>

                    <div className="animate-fade-in delay-1000">
                      <label className="text-gray-600 text-sm">Message:</label>
                      <div className="bg-gray-50 rounded-lg p-4 mt-1 space-y-2">
                        <p className="text-gray-800 text-sm">Hi John,</p>
                        <p className="text-gray-800 text-sm">
                          I noticed TechCorp recently expanded to 3 new locations. Congratulations! 
                          Managing operations across multiple sites can be challenging.
                        </p>
                        <p className="text-gray-800 text-sm">
                          We've helped similar tech companies like yours reduce operational costs by 40% 
                          through smart automation. Would you be interested in a 15-minute call to see 
                          how this could work for TechCorp?
                        </p>
                        <p className="text-gray-800 text-sm">Best regards,<br/>Sarah</p>
                        
                        <div className="flex items-center space-x-2 mt-4 pt-2 border-t">
                          <Target className="w-4 h-4 text-pink-500" />
                          <span className="text-pink-600 text-xs font-medium">Personalization Score: 95%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Campaign Analytics */}
              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 text-pink-400" />
                  <span className="text-white text-sm font-medium">Campaign Performance</span>
                  <div className="flex items-center space-x-1 ml-auto">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs">Live</span>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <div className="animate-slide-in-left">
                    <h4 className="text-white font-semibold mb-4">Today's Campaign</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-blue-400 animate-pulse">1,247</div>
                        <div className="text-gray-400 text-xs">Emails Sent</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-green-400 animate-pulse">68%</div>
                        <div className="text-gray-400 text-xs">Open Rate</div>
                      </div>
                    </div>
                  </div>

                  <div className="animate-slide-in-left delay-500">
                    <h4 className="text-white font-semibold mb-3">Response Rate</h4>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 text-sm">Positive Responses</span>
                        <span className="text-green-400 text-sm font-bold">24%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                        <div className="bg-gradient-to-r from-pink-400 to-rose-500 h-2 rounded-full animate-pulse" style={{width: '24%'}}></div>
                      </div>
                      <div className="text-center">
                        <span className="text-gray-400 text-xs">↑ 340% above industry average</span>
                      </div>
                    </div>
                  </div>

                  <div className="animate-slide-in-left delay-1000">
                    <h4 className="text-white font-semibold mb-3">AI Optimizations</h4>
                    <div className="space-y-2">
                      <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm">Subject line A/B tested</span>
                        <span className="text-green-400 text-xs ml-auto">+12% open rate</span>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm">Send time optimized</span>
                        <span className="text-green-400 text-xs ml-auto">+8% engagement</span>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm">Content personalized</span>
                        <span className="text-green-400 text-xs ml-auto">+15% response</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>

              <ScrollReveal delay={300}>
                <div className="text-center mt-8">
                  <div className="flex items-center justify-center space-x-6 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-pink-500" />
                      <span>95% Personalized</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span>68% Open Rate</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-blue-500" />
                      <span>AI Optimized</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl font-bold mb-8 text-white">
                Advanced Email Automation Features
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
            <ScrollReveal delay={100}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop mobile-3d-tilt relative"
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
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Hyper-Personalization</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  AI analyzes prospect data, social profiles, and company information to create uniquely personalized messages for each recipient.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop mobile-3d-tilt relative"
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
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>A/B Testing</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Automatically test subject lines, content, send times, and call-to-actions to optimize for maximum open and response rates.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop mobile-3d-tilt relative"
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
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Smart Segmentation</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Automatically segment your audience based on behavior, demographics, and engagement patterns for targeted messaging.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop mobile-3d-tilt relative"
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
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Automated Follow-ups</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Intelligent follow-up sequences that adapt based on recipient behavior, ensuring no lead falls through the cracks.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop mobile-3d-tilt relative"
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
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Performance Analytics</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Comprehensive tracking of open rates, click-through rates, responses, and conversions with actionable insights.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div 
                className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop mobile-3d-tilt relative"
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
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Deliverability Optimization</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Advanced spam detection, sender reputation management, and deliverability optimization to ensure your emails reach the inbox.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Email Automation Features */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Complete Email Automation Package
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Scale your outreach with AI-powered personalization and automation
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12" style={{ perspective: '1000px' }}>
            <ScrollReveal delay={200}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 mobile-3d-tilt relative"
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
                <h3 className="text-2xl font-bold text-white mb-6" style={{ transform: 'translateZ(10px)' }}>What's Included</h3>
                <ul className="space-y-4 text-gray-400" style={{ transform: 'translateZ(8px)' }}>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">AI personalization</span> - Unique emails for each prospect at scale</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Automated sequences</span> - Multi-touch campaigns that run on autopilot</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">A/B testing</span> - Optimize subject lines, content, and send times</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Smart scheduling</span> - Send at optimal times for each recipient</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Advanced analytics</span> - Track opens, clicks, and conversions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Deliverability optimization</span> - Maximize inbox placement rates</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 mobile-3d-tilt relative"
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
                <h3 className="text-2xl font-bold text-white mb-6" style={{ transform: 'translateZ(10px)' }}>Integrate with Your Workflow</h3>
                <ul className="space-y-4 text-gray-400" style={{ transform: 'translateZ(8px)' }}>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Connect with <Link to="/crm-integration" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">CRM integration</Link> for automated lead nurturing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Sync with <Link to="/website-creation" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">your website</Link> for form-to-email automation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Combine with <Link to="/phone-callers" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">AI phone agents</Link> for multi-channel outreach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Email warmup</span> - Gradually build sender reputation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Reply detection</span> - Automatically stop sequences on response</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Custom domains</span> - Use your own domain for better deliverability</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* In-content CTA */}
          <ScrollReveal delay={400}>
            <div className="bg-gradient-to-r from-pink-500/10 to-rose-600/10 border border-pink-500/30 rounded-2xl p-8 max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Scale Your Email Outreach?
              </h3>
              <p className="text-gray-400 mb-6 text-lg">
                Start sending personalized emails that actually get responses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
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
                Everything you need to know about AI email automation
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal delay={200}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">How does AI personalization work for emails?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our AI analyzes each prospect's digital footprint including their website, social media, company news, and industry trends. It then crafts unique, personalized email content that references specific details about their business, challenges, and opportunities. This makes each email feel like it was written by a human who researched them personally, dramatically increasing response rates.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">How many emails can I send per day?</h3>
                <p className="text-gray-400 leading-relaxed">
                  We recommend starting with 50-100 emails per day per sending account to maintain optimal deliverability. Our system includes email warmup protocols that gradually increase volume over time. For larger campaigns, we can set up multiple sending accounts with domain rotation, allowing you to scale to thousands of emails daily while maintaining high inbox placement rates.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Will my emails end up in spam folders?</h3>
                <p className="text-gray-400 leading-relaxed">
                  We implement comprehensive deliverability best practices including proper SPF, DKIM, and DMARC setup, email warmup protocols, spam score checking, and content optimization. We monitor sender reputation, use rotating IP addresses, and follow all email service provider guidelines. Our typical inbox placement rate is 85-95%, far above industry averages.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Can you write the email content for us?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Yes! Our AI can generate complete email sequences based on your offer, target audience, and goals. We create subject lines, body copy, and calls-to-action optimized for conversions. You'll review and approve all content before campaigns launch. We also provide templates and frameworks if you prefer to write your own content with AI assistance.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">How do you handle email responses and follow-ups?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our system automatically detects replies and stops automated sequences immediately to prevent awkward follow-ups. Responses are logged in your CRM with notifications sent to your team. The AI can even analyze response sentiment and categorize replies (interested, not interested, out of office) to help you prioritize your manual outreach efforts.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Can I A/B test different email variations?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Absolutely! Our platform includes advanced A/B testing capabilities. Test different subject lines, email copy, send times, calls-to-action, and more. The system automatically tracks performance metrics and can even auto-select winning variations to maximize your results. You get detailed analytics showing what works best for your audience.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">How much does email automation cost?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Email automation pricing starts at $300/month for up to 1,000 contacts and 10,000 emails. Advanced plans with AI personalization, unlimited sending, and premium features range from $800-$2,500/month. Enterprise solutions with dedicated IPs and custom integrations are available. <Link to="/book-consultation" className="text-pink-400 hover:text-pink-300 transition-colors">Get a custom quote</Link> based on your needs.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FAQSchema
        faqs={[
          {
            question: 'How does AI personalization work for emails?',
            answer: 'Our AI analyzes each prospect\'s digital footprint including their website, social media, company news, and industry trends. It then crafts unique, personalized email content that references specific details about their business, challenges, and opportunities. This makes each email feel like it was written by a human who researched them personally, dramatically increasing response rates.',
          },
          {
            question: 'How many emails can I send per day?',
            answer: 'We recommend starting with 50-100 emails per day per sending account to maintain optimal deliverability. Our system includes email warmup protocols that gradually increase volume over time. For larger campaigns, we can set up multiple sending accounts with domain rotation, allowing you to scale to thousands of emails daily while maintaining high inbox placement rates.',
          },
          {
            question: 'Will my emails end up in spam folders?',
            answer: 'We implement comprehensive deliverability best practices including proper SPF, DKIM, and DMARC setup, email warmup protocols, spam score checking, and content optimization. We monitor sender reputation, use rotating IP addresses, and follow all email service provider guidelines. Our typical inbox placement rate is 85-95%, far above industry averages.',
          },
          {
            question: 'Can you write the email content for us?',
            answer: 'Yes! Our AI can generate complete email sequences based on your offer, target audience, and goals. We create subject lines, body copy, and calls-to-action optimized for conversions. You\'ll review and approve all content before campaigns launch. We also provide templates and frameworks if you prefer to write your own content with AI assistance.',
          },
          {
            question: 'How do you handle email responses and follow-ups?',
            answer: 'Our system automatically detects replies and stops automated sequences immediately to prevent awkward follow-ups. Responses are logged in your CRM with notifications sent to your team. The AI can even analyze response sentiment and categorize replies (interested, not interested, out of office) to help you prioritize your manual outreach efforts.',
          },
          {
            question: 'Can I A/B test different email variations?',
            answer: 'Absolutely! Our platform includes advanced A/B testing capabilities. Test different subject lines, email copy, send times, calls-to-action, and more. The system automatically tracks performance metrics and can even auto-select winning variations to maximize your results. You get detailed analytics showing what works best for your audience.',
          },
          {
            question: 'How much does email automation cost?',
            answer: 'Email automation pricing starts at $300/month for up to 1,000 contacts and 10,000 emails. Advanced plans with AI personalization, unlimited sending, and premium features range from $800-$2,500/month. Enterprise solutions with dedicated IPs and custom integrations are available.',
          },
        ]}
      />

      <CTASection />

      {/* Back to Homepage */}
      <section className="py-12 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link 
              to="/#services"
              className="inline-flex items-center text-gray-400 hover:text-white transition-all duration-300 hover-pop-text"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailOutreach;