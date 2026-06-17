import React from 'react';
import { MessageSquare, Target, Database, Clock, Shield, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Intelligent Chat Agents',
      description: 'Deploy AI-powered chat agents that understand context, handle complex queries, and convert visitors into qualified leads with human-like conversations.'
    },
    {
      icon: Target,
      title: 'Advanced Lead Generation',
      description: 'Automatically identify and qualify prospects using AI-driven behavior analysis, predictive scoring, and multi-channel engagement strategies.'
    },
    {
      icon: Database,
      title: 'Seamless CRM Integration',
      description: 'Connect with Salesforce, HubSpot, Pipedrive, and 100+ other platforms. Sync data in real-time and maintain a unified customer view.'
    },
    {
      icon: Clock,
      title: '24/7 Automation',
      description: 'Your AI workforce never sleeps. Capture leads, answer questions, and nurture prospects around the clock, even when your team is offline.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, GDPR compliance, and SOC 2 certification ensure your data and your customers\' information stays protected.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Get deep insights into conversation flows, conversion rates, and customer behavior with our advanced analytics dashboard.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-white heading-sophisticated animate-fade-in-up">
            Our AI Solutions
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto text-sophisticated animate-fade-in-up delay-200">
            Comprehensive AI automation services designed to increase productivity and reduce operational costs 
            for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const animationDelay = `delay-${400 + (index * 100)}`;
            
            return (
              <div
                key={index}
                className={`group bg-white/5 border border-white/10 rounded-2xl p-10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover-pop animate-fade-in-up ${animationDelay}`}
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 animate-bounce-subtle">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                
                <h3 className="text-xl font-medium mb-6 text-white heading-sophisticated">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed text-sophisticated">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 bg-white/5 border border-white/20 rounded-3xl p-12 md:p-16">
          <div className="text-center">
            <h3 className="text-4xl font-light mb-8 text-white heading-sophisticated hover-pop-text transition-all duration-300">
              Why Choose Automate Hub?
            </h3>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto text-sophisticated">
              We focus on delivering practical AI solutions that help businesses operate more efficiently, 
              reduce manual work, and compete effectively in their markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;