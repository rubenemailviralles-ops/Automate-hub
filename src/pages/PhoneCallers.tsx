import React from 'react';
import { Phone, Clock, TrendingUp, Shield, CheckCircle, ArrowRight, Users, BarChart3 } from 'lucide-react';
import CTASection from '../components/CTASection';

const PhoneCallers = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 seamless-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Phone className="w-5 h-5 text-indigo-400 mr-2" />
              <span className="text-indigo-400 font-medium">AI Phone Automation</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Never Miss a
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Profitable Call
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Many businesses miss important calls due to unavailability. Our AI phone agents ensure every call 
              is answered professionally, helping you capture more opportunities and serve customers better.
            </p>

            <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-8 max-w-2xl mx-auto mb-12">
              <p className="text-gray-300 text-lg">
                Our AI phone agents help businesses provide consistent customer service and capture leads 
                <span className="text-white font-bold"> around the clock</span>, ensuring no opportunity is missed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Demo Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">
              AI Phone Agent In Action
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Watch how our AI handles incoming calls professionally and captures every opportunity
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-indigo-500/30 rounded-3xl p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Phone Call Simulation */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500 animate-pulse"></div>
                
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Phone className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-bold">Incoming Call</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 animate-fade-in">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <span className="text-green-400 font-semibold">AI Agent</span>
                    </div>
                    <p className="text-white text-sm">"Hello! Thank you for calling. How can I help you today?"</p>
                  </div>

                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 animate-fade-in delay-1000">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-blue-400 font-semibold">Customer</span>
                    </div>
                    <p className="text-white text-sm">"Hi, I'm interested in your automation services."</p>
                  </div>

                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 animate-fade-in delay-2000">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <span className="text-green-400 font-semibold">AI Agent</span>
                    </div>
                    <p className="text-white text-sm">"Perfect! I'd love to help you with that. Can I get your name and email to send you some information?"</p>
                  </div>

                  <div className="flex items-center justify-center space-x-2 mt-6">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-400"></div>
                    <span className="text-green-400 text-sm ml-2">Call in progress...</span>
                  </div>
                </div>
              </div>

              {/* Call Analytics Dashboard */}
              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-indigo-400" />
                    <span className="text-white text-sm font-medium">Call Analytics</span>
                  </div>
                  <div className="flex items-center space-x-1 ml-auto">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs">Live</span>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  <div className="animate-slide-in-right">
                    <h4 className="text-white font-semibold mb-3">Today's Performance</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-green-400 animate-pulse">47</div>
                        <div className="text-gray-400 text-xs">Calls Answered</div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-blue-400 animate-pulse">32</div>
                        <div className="text-gray-400 text-xs">Leads Captured</div>
                      </div>
                    </div>
                  </div>

                  <div className="animate-slide-in-right delay-500">
                    <h4 className="text-white font-semibold mb-3">Conversion Rate</h4>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 text-sm">Call to Lead</span>
                        <span className="text-green-400 text-sm font-bold">68%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full animate-pulse" style={{width: '68%'}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="animate-slide-in-right delay-1000">
                    <h4 className="text-white font-semibold mb-3">Recent Actions</h4>
                    <div className="space-y-2">
                      <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm">Lead qualified & scheduled callback</span>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-white text-sm">Follow-up email sent automatically</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span>24/7 Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  <span>100% Professional</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-purple-500" />
                  <span>68% Conversion Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">
              How Our AI Phone Agents Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">24/7 Availability</h3>
              <p className="text-gray-400">
                Your AI agent answers every call instantly, day or night, weekends and holidays. No more missed opportunities.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Natural Conversations</h3>
              <p className="text-gray-400">
                Advanced AI that understands context, handles objections, and guides callers through your sales process naturally.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Lead Qualification</h3>
              <p className="text-gray-400">
                Automatically qualifies leads, captures contact information, and schedules appointments with hot prospects.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Brand Consistency</h3>
              <p className="text-gray-400">
                Trained on your specific business, products, and services to maintain perfect brand representation.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Instant Follow-up</h3>
              <p className="text-gray-400">
                Automatically sends follow-up emails, texts, and schedules callbacks based on conversation outcomes.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">CRM Integration</h3>
              <p className="text-gray-400">
                Seamlessly logs all call data, lead information, and next steps directly into your existing CRM system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">
              The Benefits Are Clear
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Without AI Phone Agents:</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  Many calls go unanswered
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  Missed business opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  Inconsistent customer experience
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  Manual lead qualification
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  Limited business hours
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-6">After AI Phone Agents:</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Consistent call answering
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Better lead capture
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Perfect brand consistency
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  Automated lead qualification
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  24/7/365 availability
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border border-indigo-500/30 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Key Benefits</h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI phone agents help businesses provide better customer service, capture more leads, 
              and operate more efficiently with 24/7 availability and consistent professional responses.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default PhoneCallers;