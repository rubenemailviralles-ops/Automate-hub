import React from 'react';
import { Database, Zap, BarChart3, Users, Workflow, Shield, MessageSquare, Calendar, Headphones, Ticket, Clock } from 'lucide-react';
import CTASection from '../components/CTASection';

const CRMIntegration = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Database className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-400 font-medium">CRM Integration & Automation</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Unify Your
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Customer Data
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect all your systems into one powerful automation engine. Our CRM integrations eliminate data silos 
              and create seamless workflows that scale with your business.
            </p>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-2xl p-8 max-w-2xl mx-auto mb-12">
              <p className="text-gray-300 text-lg">
                Our AI-powered integrations don't just connect your systems - they <span className="text-white font-bold">intelligently automate</span> your 
                entire customer journey, from first contact to closed deal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot & Appointment Setting Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">
              Advanced CRM Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Chatbot */}
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

            {/* Appointment Setting */}
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

            {/* Customer Support */}
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
          </div>
        </div>
      </section>

      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">
              Core CRM Integration Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Real-Time Sync</h3>
              <p className="text-gray-400">
                Instant data synchronization across all platforms. Updates happen in real-time, ensuring everyone has the latest information.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Advanced Analytics</h3>
              <p className="text-gray-400">
                Comprehensive reporting and analytics across all integrated systems. Track performance, identify trends, and optimize processes.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Lead Management</h3>
              <p className="text-gray-400">
                Automated lead scoring, routing, and nurturing. Ensure no lead falls through the cracks with intelligent automation.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Custom Workflows</h3>
              <p className="text-gray-400">
                Build complex automation workflows that match your unique business processes. Trigger actions based on any data point.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Data Security</h3>
              <p className="text-gray-400">
                Enterprise-grade security with encryption, access controls, and compliance with industry standards like GDPR and CCPA.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Multi-Platform Support</h3>
              <p className="text-gray-400">
                Connect with 100+ platforms including Salesforce, HubSpot, Pipedrive, Zapier, and custom APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default CRMIntegration;