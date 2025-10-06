import React from 'react';
import { Mail, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmailContact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full mb-8 backdrop-blur-sm">
              <Mail className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-medium">Email Support</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
              Contact Us
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Via Email
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              We're here to help! Send us an email anytime and we'll get back to you within 24 hours 
              during business days.
            </p>
          </div>
        </div>
      </section>

      {/* Email Contact Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="bg-black/50 border border-white/10 rounded-3xl p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-400">
                Ready to automate your business? We'd love to hear from you!
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-4 sm:p-8 mb-12 overflow-hidden">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Our Email Address</h3>
                <a 
                  href="mailto:automate.hub1@gmail.com" 
                  className="inline-block text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-400 hover:text-blue-300 transition-colors break-all max-w-full"
                >
                  automate.hub1@gmail.com
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Quick Response</h4>
                <p className="text-gray-400">We respond within 24 hours during business days</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Professional Support</h4>
                <p className="text-gray-400">Expert guidance for all your automation needs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Always Available</h4>
                <p className="text-gray-400">Send us an email anytime, day or night</p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">What to Include in Your Email:</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Your business name and industry
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Current challenges you're facing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  What automation solutions interest you
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Your preferred contact method for follow-up
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  Any specific questions about our services
                </li>
              </ul>
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/contact"
                className="inline-flex items-center bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailContact;