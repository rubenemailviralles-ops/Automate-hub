import React from 'react';
import { Phone, Clock, TrendingUp, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import CTASection from '../components/CTASection';

const PhoneCallers = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-600/5"></div>
        
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

      {/* Features Section */}
      <section className="py-24 bg-transparent">
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
      <section className="py-24 bg-transparent">
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