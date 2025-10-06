import React from 'react';
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-white/5 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-white heading-sophisticated">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto text-sophisticated">
            Join companies using Automate Hub to streamline their operations and reduce costs through intelligent automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
            <div className="flex items-center text-white">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sophisticated">Free consultation</span>
            </div>
            <div className="flex items-center text-white">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="text-sophisticated">Custom solutions</span>
            </div>
          </div>

          <button className="group bg-white text-black hover:bg-gray-100 px-12 py-6 rounded-xl font-medium text-xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center mx-auto text-sophisticated">
            <Calendar className="mr-3 w-6 h-6" />
            Book Your Strategy Call Now
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-sm text-gray-600 mt-6 text-sophisticated">
            Free 30-minute consultation • No obligation
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;