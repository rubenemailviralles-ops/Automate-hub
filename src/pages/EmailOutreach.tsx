import React from 'react';
import { Mail, Target, BarChart3, Users, Zap, TrendingUp } from 'lucide-react';
import CTASection from '../components/CTASection';

const EmailOutreach = () => {
  return (
    <div className="pt-20">
      <section className="py-24 seamless-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500/20 to-rose-600/20 border border-pink-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Mail className="w-5 h-5 text-pink-400 mr-2" />
              <span className="text-pink-400 font-medium">AI Email Outreach</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Emails That
              <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Actually Convert
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Scale your outreach with AI-powered email campaigns that feel personal, drive engagement, and convert 
              prospects into customers at unprecedented rates.
            </p>

            <div className="bg-gradient-to-r from-pink-500/10 to-rose-600/10 border border-pink-500/30 rounded-2xl p-8 max-w-2xl mx-auto mb-12">
              <p className="text-gray-300 text-lg">
                Our AI writes <span className="text-white font-bold">hyper-personalized emails</span> at scale, analyzing each prospect's 
                digital footprint to craft messages that feel like they were written by a human who knows them personally.
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
              AI Email Campaigns In Action
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Watch how our AI creates personalized email campaigns that actually convert
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/10 to-rose-600/10 border border-pink-500/30 rounded-3xl p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
          </div>
        </div>
      </section>

      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">
              Advanced Email Automation Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Hyper-Personalization</h3>
              <p className="text-gray-400">
                AI analyzes prospect data, social profiles, and company information to create uniquely personalized messages for each recipient.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">A/B Testing</h3>
              <p className="text-gray-400">
                Automatically test subject lines, content, send times, and call-to-actions to optimize for maximum open and response rates.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Smart Segmentation</h3>
              <p className="text-gray-400">
                Automatically segment your audience based on behavior, demographics, and engagement patterns for targeted messaging.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Automated Follow-ups</h3>
              <p className="text-gray-400">
                Intelligent follow-up sequences that adapt based on recipient behavior, ensuring no lead falls through the cracks.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Performance Analytics</h3>
              <p className="text-gray-400">
                Comprehensive tracking of open rates, click-through rates, responses, and conversions with actionable insights.
              </p>
            </div>

            <div className="bg-black/50 border border-white/10 rounded-2xl p-8 hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Deliverability Optimization</h3>
              <p className="text-gray-400">
                Advanced spam detection, sender reputation management, and deliverability optimization to ensure your emails reach the inbox.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default EmailOutreach;