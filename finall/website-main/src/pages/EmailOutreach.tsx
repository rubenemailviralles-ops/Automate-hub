import React from 'react';
import { Mail, Target, BarChart3, Users, Zap, TrendingUp } from 'lucide-react';
import CTASection from '../components/CTASection';

const EmailOutreach = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-rose-600/5"></div>
        
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

      <section className="py-24 bg-transparent">
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