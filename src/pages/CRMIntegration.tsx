import React from 'react';
import { Database, Zap, BarChart3, Users, Workflow, Shield, MessageSquare, Calendar, Headphones, Ticket, Clock, ArrowRight, ArrowLeft, CheckCircle, Settings, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import TypeWriter from '../components/TypeWriter';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import ServiceSchema from '../components/ServiceSchema';
import FAQSchema from '../components/FAQSchema';

const CRMIntegration = () => {
  return (
    <div className="pt-20">
      <SEO
        title="CRM Integration & Automation Services | AI-Powered Customer Data Management | Automate Hub"
        description="Streamline your business with intelligent CRM integration services. AI-powered customer data management, automated workflows, lead scoring, and seamless system connections. Boost productivity and reduce manual work."
        keywords="CRM integration, customer data management, AI automation, lead management, workflow automation, CRM systems, customer relationship management, business automation, data synchronization, sales automation"
        canonicalUrl="https://automate-hub.com/crm-integration"
      />
      <ServiceSchema
        serviceName="CRM Integration & Automation Services"
        description="Intelligent CRM integration services with AI-powered customer data management, automated workflows, lead scoring, and seamless system connections. Streamline your entire customer journey."
        serviceType="CRM Integration"
        offers={[
          { name: 'Bi-directional Sync', description: 'Real-time data synchronization across all platforms' },
          { name: 'Custom Field Mapping', description: 'Match your specific business requirements' },
          { name: 'Automated Workflows', description: 'Trigger actions based on customer behavior' },
          { name: 'AI Lead Scoring', description: 'Prioritize high-value prospects automatically' },
          { name: 'Data Deduplication', description: 'Keep your CRM clean and organized' },
          { name: 'Advanced Reporting', description: 'Real-time insights and analytics' },
        ]}
      />
      <section className="py-24 seamless-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <ScrollReveal delay={0}>
              <div 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-full mb-8 backdrop-blur-sm mobile-3d-tilt"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(168, 85, 247, 0.2)',
                  transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                  perspective: '1000px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateZ(15px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 4px 15px rgba(168, 85, 247, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateZ(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(168, 85, 247, 0.2)';
                }}
              >
                <Database className="w-5 h-5 text-purple-400 mr-2" style={{ transform: 'translateZ(5px)' }} />
                <span className="text-purple-400 font-medium" style={{ transform: 'translateZ(5px)' }}>CRM Integration & Automation</span>
              </div>
            </ScrollReveal>

            <TypeWriter 
              text="Unify Your" 
              as="h1"
              className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight"
              delay={100}
            >
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Customer Data
              </span>
            </TypeWriter>

            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Connect all your systems into one powerful automation engine. Our CRM integrations eliminate data silos 
                and create seamless workflows that scale with your business. <Link to="/#roi-calculator" className="text-purple-400 hover:text-purple-300 transition-colors font-semibold">See your potential savings</Link> with 
                our free ROI calculator.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div 
                className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto mb-12 mobile-3d-tilt relative"
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
                  Our AI-powered integrations don't just connect your systems - they <span className="text-white font-bold">intelligently automate</span> your 
                  entire customer journey, from first contact to closed deal.
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
                See CRM Integration In Action
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Watch how our AI chatbot captures leads and syncs data to your CRM automatically
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div 
              className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-3xl p-8 max-w-6xl mx-auto mobile-3d-popup relative"
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" style={{ transform: 'translateZ(10px)' }}>
              {/* Website with Chatbot */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 ml-4">
                    your-website.com
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white relative">
                  <h3 className="text-2xl font-bold mb-2">Welcome to Our Service</h3>
                  <p className="text-purple-100">Get started with our solutions today</p>
                  
                  {/* Animated Chatbot Popup */}
                  <div className="absolute bottom-4 right-4 animate-slide-in-up">
                    <div className="bg-white rounded-2xl shadow-2xl p-4 w-80 text-gray-800">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">AI Assistant</h4>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs text-gray-500">Online</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="bg-gray-100 rounded-lg p-2 text-sm animate-fade-in">
                          👋 Hi! I'm here to help. What brings you here today?
                        </div>
                        <div className="bg-blue-500 text-white rounded-lg p-2 text-sm ml-8 animate-fade-in delay-1000">
                          I need help with automation
                        </div>
                        <div className="bg-gray-100 rounded-lg p-2 text-sm animate-fade-in delay-1600">
                          Perfect! Let me get some details to help you better...
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-500">
                          Type your message...
                        </div>
                        <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CRM Dashboard */}
              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <Database className="w-4 h-4 text-purple-400" />
                    <span className="text-white text-sm font-medium">CRM Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-1 ml-auto">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs">Live Sync</span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-white font-semibold mb-4">New Lead Captured</h4>
                  
                  <div className="bg-gray-800 rounded-lg p-4 mb-4 animate-slide-in-left">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Contact Information</span>
                      <span className="text-green-400 text-xs">✓ Verified</span>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="text-white">John Smith</p>
                      <p className="text-gray-400">john@company.com</p>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4 mb-4 animate-slide-in-left delay-500">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Lead Score</span>
                      <span className="text-yellow-400 text-xs">🔥 Hot Lead</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-4/5 animate-pulse"></div>
                      </div>
                      <span className="text-white text-sm">85/100</span>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-4 animate-slide-in-left delay-1000">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Next Action</span>
                      <span className="text-blue-400 text-xs">Auto-scheduled</span>
                    </div>
                    <p className="text-white text-sm">Follow-up call scheduled for tomorrow 2:00 PM</p>
                  </div>
                </div>
              </div>
              </div>

              <ScrollReveal delay={300}>
                <div className="text-center mt-8">
                  <div className="flex items-center justify-center space-x-4 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Real-time sync</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-500"></div>
                      <span>Auto lead scoring</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
                      <span>Smart follow-ups</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* AI Chatbot & Appointment Setting Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl font-bold mb-8 text-white">
                Advanced CRM Features
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Chatbot */}
            <ScrollReveal delay={100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI Chatbot Integration</h3>
                <p className="text-gray-400 mb-6">
                  Deploy intelligent AI chatbots that engage visitors, qualify leads, and drive conversions around the clock. 
                  Turn every website visitor into a potential customer with conversations that convert 24/7.
                </p>
                <div className="bg-gradient-to-r from-green-500/10 to-blue-600/10 border border-green-500/30 rounded-xl p-6 mb-6">
                  <p className="text-gray-300">
                    Our AI chatbots don't just answer questions - they <span className="text-white font-bold">actively sell</span> your products and services, 
                    handling objections and guiding prospects through your entire sales funnel.
                  </p>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    Natural Language Processing for human-like conversations
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    24/7 availability with instant responses
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    Automatic lead qualification and scoring
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    Personalized experiences based on visitor behavior
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Appointment Setting */}
            <ScrollReveal delay={200}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Automated Appointment Setting</h3>
                <p className="text-gray-400 mb-6">
                  Transform your scheduling process with AI that books appointments while you sleep. Intelligent calendar 
                  management that maximizes your availability and minimizes no-shows.
                </p>
                <div className="bg-gradient-to-r from-teal-500/10 to-green-600/10 border border-teal-500/30 rounded-xl p-6 mb-6">
                  <p className="text-gray-300">
                    Our AI doesn't just schedule appointments - it <span className="text-white font-bold">optimizes your entire calendar</span> for 
                    maximum productivity, automatically handling rescheduling, follow-ups, and no-show prevention.
                  </p>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    Smart scheduling with optimal time suggestions
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    Multi-person coordination for group meetings
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    Automatic confirmations and reminders
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-3">✓</span>
                    No-show prevention with 80% reduction rate
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Customer Support */}
            <ScrollReveal delay={300}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI Customer Support</h3>
                <p className="text-gray-400 mb-6">
                  Transform your customer support with AI-powered ticket management, instant responses, and intelligent 
                  routing that ensures every customer gets the help they need, when they need it.
                </p>
                <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/30 rounded-xl p-6 mb-6">
                  <p className="text-gray-300">
                    Our AI support system resolves <span className="text-white font-bold">80% of tickets automatically</span> while seamlessly 
                    escalating complex issues to human agents with full context and suggested solutions.
                  </p>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">✓</span>
                    Smart ticket categorization and routing
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">✓</span>
                    Instant responses to common questions
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">✓</span>
                    Multi-channel support integration
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">✓</span>
                    Performance analytics and insights
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl font-bold mb-8 text-white">
                Core CRM Integration Features
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
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Real-Time Sync</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Instant data synchronization across all platforms. Updates happen in real-time, ensuring everyone has the latest information.
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
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Advanced Analytics</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Comprehensive reporting and analytics across all integrated systems. Track performance, identify trends, and optimize processes.
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
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Lead Management</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Automated lead scoring, routing, and nurturing. Ensure no lead falls through the cracks with intelligent automation.
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
                  <Workflow className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Custom Workflows</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Build complex automation workflows that match your unique business processes. Trigger actions based on any data point.
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
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Data Security</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Enterprise-grade security with encryption, access controls, and compliance with industry standards like GDPR and CCPA.
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
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: 'translateZ(15px)' }}>Multi-Platform Support</h3>
                <p className="text-gray-400" style={{ transform: 'translateZ(10px)' }}>
                  Connect with 100+ platforms including Salesforce, HubSpot, Pipedrive, Zapier, and custom APIs.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CRM Integration Benefits */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Complete CRM Automation Package
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Streamline your entire customer journey with intelligent CRM integration
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
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-0" style={{ transform: 'translateZ(10px)' }}>Core Integration Features</h3>
                </div>
                <ul className="space-y-4 text-gray-400" style={{ transform: 'translateZ(8px)' }}>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Bi-directional sync</span> - Real-time data synchronization across all platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Custom field mapping</span> - Match your specific business requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Automated workflows</span> - Trigger actions based on customer behavior</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Lead scoring</span> - AI-powered prioritization of high-value prospects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Data deduplication</span> - Keep your CRM clean and organized</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Advanced reporting</span> - Insights and analytics in real-time</span>
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
                <div className="flex items-start mb-6" style={{ transform: 'translateZ(15px)' }}>
                  <div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4 flex-shrink-0"
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
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-0" style={{ transform: 'translateZ(10px)' }}>Expand Your Automation</h3>
                </div>
                <ul className="space-y-4 text-gray-400" style={{ transform: 'translateZ(8px)' }}>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Add <Link to="/website-creation" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">custom websites</Link> with automated lead capture forms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Connect <Link to="/phone-callers" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">AI phone agents</Link> for automated call logging</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Integrate <Link to="/email-outreach" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">email automation</Link> for personalized campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Calendar integration</span> - Automated appointment scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Task automation</span> - Auto-create follow-up tasks and reminders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span><span className="text-white font-semibold">Sales pipeline automation</span> - Move deals automatically based on triggers</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* In-content CTA */}
          <ScrollReveal delay={400}>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Integrate Your CRM?
              </h3>
              <p className="text-gray-400 mb-6 text-lg">
                Get a free consultation to discuss your CRM integration needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-consultation"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
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
                Everything you need to know about CRM integration and automation
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal delay={200}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Which CRM systems do you integrate with?</h3>
                <p className="text-gray-400 leading-relaxed">
                  We integrate with all major CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho CRM, Monday.com, ActiveCampaign, and many others. We also work with custom CRMs and can connect virtually any system through APIs. If your CRM has an API, we can integrate it seamlessly with your business processes.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">How long does CRM integration take?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Basic CRM integrations typically take 1-2 weeks, while complex multi-system integrations with custom workflows may take 3-4 weeks. The timeline depends on the number of systems being connected, data migration requirements, and custom automation rules. We provide a detailed project timeline after assessing your specific needs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Will you migrate our existing data?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Yes! We handle complete data migration including contacts, deals, tasks, notes, and custom fields. We ensure data integrity throughout the process, remove duplicates, validate information, and map fields correctly. Your historical data is preserved and properly organized in the new system without any loss.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Can you automate our sales and marketing workflows?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Absolutely! We create intelligent automation workflows that handle lead assignment, follow-up sequences, deal stage progression, task creation, email campaigns, and much more. Our AI-powered automation can score leads, trigger actions based on customer behavior, and ensure no opportunity falls through the cracks.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">What if we use multiple systems that need to work together?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Multi-system integration is our specialty. We connect your CRM with email marketing platforms, phone systems, accounting software, project management tools, and more. Data flows seamlessly between systems in real-time, eliminating manual data entry and ensuring all your tools stay synchronized automatically.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">Do you provide training on the integrated CRM system?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Yes! We provide comprehensive training for your team including video tutorials, written documentation, and live training sessions. We ensure everyone understands how to use the automated workflows, where to find information, and how to leverage the system for maximum productivity. Ongoing support is available whenever you need it.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">How secure is the data during integration?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Security is our top priority. We use encrypted connections, follow industry best practices, and comply with data protection regulations like GDPR. All API connections are secured with authentication tokens, data transfers are encrypted, and we never store sensitive information longer than necessary. Your data remains completely secure throughout the integration process.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={550}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">What does CRM integration cost?</h3>
                <p className="text-gray-400 leading-relaxed">
                  CRM integration pricing varies based on complexity. Basic single-system integrations start around $1,500, while comprehensive multi-system integrations with custom automation can range from $3,500-$10,000+. We offer flexible payment plans and provide detailed quotes after understanding your systems and requirements. <Link to="/book-consultation" className="text-purple-400 hover:text-purple-300 transition-colors">Schedule a consultation</Link> for a custom quote.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FAQSchema
        faqs={[
          {
            question: 'Which CRM systems do you integrate with?',
            answer: 'We integrate with all major CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho CRM, Monday.com, ActiveCampaign, and many others. We also work with custom CRMs and can connect virtually any system through APIs. If your CRM has an API, we can integrate it seamlessly with your business processes.',
          },
          {
            question: 'How long does CRM integration take?',
            answer: 'Basic CRM integrations typically take 1-2 weeks, while complex multi-system integrations with custom workflows may take 3-4 weeks. The timeline depends on the number of systems being connected, data migration requirements, and custom automation rules. We provide a detailed project timeline after assessing your specific needs.',
          },
          {
            question: 'Will you migrate our existing data?',
            answer: 'Yes! We handle complete data migration including contacts, deals, tasks, notes, and custom fields. We ensure data integrity throughout the process, remove duplicates, validate information, and map fields correctly. Your historical data is preserved and properly organized in the new system without any loss.',
          },
          {
            question: 'Can you automate our sales and marketing workflows?',
            answer: 'Absolutely! We create intelligent automation workflows that handle lead assignment, follow-up sequences, deal stage progression, task creation, email campaigns, and much more. Our AI-powered automation can score leads, trigger actions based on customer behavior, and ensure no opportunity falls through the cracks.',
          },
          {
            question: 'What if we use multiple systems that need to work together?',
            answer: 'Multi-system integration is our specialty. We connect your CRM with email marketing platforms, phone systems, accounting software, project management tools, and more. Data flows seamlessly between systems in real-time, eliminating manual data entry and ensuring all your tools stay synchronized automatically.',
          },
          {
            question: 'Do you provide training on the integrated CRM system?',
            answer: 'Yes! We provide comprehensive training for your team including video tutorials, written documentation, and live training sessions. We ensure everyone understands how to use the automated workflows, where to find information, and how to leverage the system for maximum productivity. Ongoing support is available whenever you need it.',
          },
          {
            question: 'How secure is the data during integration?',
            answer: 'Security is our top priority. We use encrypted connections, follow industry best practices, and comply with data protection regulations like GDPR. All API connections are secured with authentication tokens, data transfers are encrypted, and we never store sensitive information longer than necessary. Your data remains completely secure throughout the integration process.',
          },
          {
            question: 'What does CRM integration cost?',
            answer: 'CRM integration pricing varies based on complexity. Basic single-system integrations start around $1,500, while comprehensive multi-system integrations with custom automation can range from $3,500-$10,000+. We offer flexible payment plans and provide detailed quotes after understanding your systems and requirements.',
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

export default CRMIntegration;