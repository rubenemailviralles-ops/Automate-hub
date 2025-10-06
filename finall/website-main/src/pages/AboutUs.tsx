import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';
import CTASection from '../components/CTASection';

const AboutUs = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              About
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Automate Hub
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              We believe that every business, regardless of size, should have access to powerful automation tools 
              that increase productivity and reduce operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-white">Our Mission</h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                At Automate Hub, our mission is simple: to level the playing field for businesses by making 
                advanced AI automation accessible and affordable. We understand that in today's competitive 
                landscape, efficiency isn't just an advantage—it's a necessity.
              </p>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                By reducing operational costs and increasing productivity through intelligent automation, 
                we help businesses of all sizes compete more effectively in their markets. Our solutions 
                eliminate repetitive tasks, streamline processes, and free up valuable time for what matters most: 
                growing your business.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We're not just about technology—we're about empowering businesses to reach their full potential 
                through smart, practical automation solutions that deliver real results.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why We Do What We Do</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Small and medium businesses deserve the same automation advantages as large corporations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Reducing costs shouldn't mean sacrificing quality or customer service
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Every business should be able to operate efficiently and compete effectively
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Technology should work for you, not against you
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These core principles guide everything we do and every solution we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Accessibility</h3>
              <p className="text-gray-400">
                Making powerful automation tools available to businesses of all sizes, not just large enterprises.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Partnership</h3>
              <p className="text-gray-400">
                Working closely with our clients to understand their unique needs and deliver tailored solutions.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Innovation</h3>
              <p className="text-gray-400">
                Continuously improving our solutions to stay ahead of technology trends and business needs.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover-pop transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Results</h3>
              <p className="text-gray-400">
                Focusing on practical solutions that deliver measurable improvements in productivity and cost savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-white">Our Approach</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Understand</h3>
              <p className="text-gray-400">
                We take time to understand your business, challenges, and goals before recommending any solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Customize</h3>
              <p className="text-gray-400">
                Every solution is tailored to your specific needs, ensuring maximum impact and efficiency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Support</h3>
              <p className="text-gray-400">
                We provide ongoing support to ensure your automation solutions continue to deliver value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default AboutUs;