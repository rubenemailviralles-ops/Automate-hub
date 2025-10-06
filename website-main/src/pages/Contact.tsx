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
      <section className="py-24 bg-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight">
              Get In
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to automate your business operations? Let's discuss how our AI solutions can help 
              increase your productivity and reduce costs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-white">
                Let's Start the Conversation
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                We're here to help you understand how automation can transform your business. 
                Reach out to us and let's explore the possibilities together.
              </p>

              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Phone</h4>
                    <p className="text-gray-400">(+27) 82 644 2575</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <p className="text-gray-400">automate.hub1@gmail.com</p>
                  </div>
                </div>

              </div>

              <div className="mt-16 p-8 bg-white/5 border border-white/20 rounded-2xl">
                <h4 className="text-lg font-medium text-white mb-4">What to Expect:</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>• Free consultation to understand your needs</li>
                  <li>• Custom automation recommendations</li>
                  <li>• Clear timeline and next steps</li>
                  <li>• No pressure, just helpful guidance</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all hover-pop-subtle"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-400 mb-3">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all"
                    placeholder="Your Business Name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your business and how we can help you automate your operations..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-100 px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover-pop-button flex items-center justify-center shadow-2xl"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </button>

                <p className="text-sm text-gray-500 text-center">
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