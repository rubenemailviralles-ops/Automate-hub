import React, { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', businessName: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 seamless-section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Get In
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready to automate your business operations? Let's discuss how our AI solutions can help 
              increase your productivity and reduce costs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 seamless-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Let's Start the Conversation
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                We're here to help you understand how automation can transform your business. 
                Reach out to us and let's explore the possibilities together.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Phone</h4>
                    <p className="text-gray-400">(+27) 82 644 2575</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <p className="text-gray-400">automate.hub1@gmail.com</p>
                  </div>
                </div>

              </div>

              <div className="mt-8 p-6 bg-white/5 border border-white/20 rounded-2xl">
                <h4 className="text-lg font-medium text-white mb-4">What to Expect:</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>• Free consultation to understand your needs</li>
                  <li>• Custom automation recommendations</li>
                  <li>• Clear timeline and next steps</li>
                  <li>• No pressure, just helpful guidance</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all text-sm"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all text-sm"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-400 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all text-sm"
                    placeholder="Your Business Name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all resize-none text-sm"
                    placeholder="Tell us about your business and how we can help you automate your operations..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 hover-pop-button flex items-center justify-center shadow-2xl"
                >
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We'll respond within 24 hours during business hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;