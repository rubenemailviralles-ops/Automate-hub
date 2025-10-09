import React, { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';
import TypeWriter from '../components/TypeWriter';
import ScrollReveal from '../components/ScrollReveal';

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
      {/* Contact Section */}
      <section className="py-12 seamless-section relative overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info - Left Side */}
            <div className="lg:pr-8">
              <TypeWriter 
                text="Get In" 
                as="h1"
                className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight"
                delay={100}
              >
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </TypeWriter>
              <ScrollReveal delay={200}>
                <p className="text-base text-gray-400 mb-8 leading-relaxed">
                  Ready to automate your business operations? Let's discuss how our AI solutions can help
                  increase your productivity and reduce costs.
                </p>
              </ScrollReveal>

              <div className="space-y-4">
                <ScrollReveal delay={300}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Phone</h4>
                      <p className="text-gray-400">(+27) 82 644 2575</p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Email</h4>
                      <p className="text-gray-400">automate.hub1@gmail.com</p>
                    </div>
                  </div>
                </ScrollReveal>

              </div>

              <ScrollReveal delay={500}>
                <div 
                  className="mt-8 p-6 bg-white/5 border border-white/20 rounded-2xl mobile-3d-tilt relative"
                  style={{
                    transformStyle: 'preserve-3d',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.1s ease-out, border-color 0.3s',
                    perspective: '1000px',
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 20;
                    const rotateY = (centerX - x) / 20;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                  }}
                >
                  <h4 className="text-lg font-medium text-white mb-4" style={{ transform: 'translateZ(15px)' }}>What to Expect:</h4>
                  <ul className="space-y-2 text-gray-400 text-sm" style={{ transform: 'translateZ(10px)' }}>
                    <li>• Free consultation to understand your needs</li>
                    <li>• Custom automation recommendations</li>
                    <li>• Clear timeline and next steps</li>
                    <li>• No pressure, just helpful guidance</li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form - Right Side */}
            <ScrollReveal delay={100}>
              <div 
                className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:sticky lg:top-24 mobile-3d-popup relative"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                  transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
                  perspective: '1000px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) translateZ(20px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 2px 16px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) translateZ(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)';
                }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white" style={{ transform: 'translateZ(10px)' }}>Send Us a Message</h3>
                
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

                <div 
                  style={{ perspective: '1000px' }}
                >
                  <button
                    type="submit"
                    className="w-full bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-base hover-pop-button flex items-center justify-center shadow-2xl relative"
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(0, 0, 0, 0.2)',
                      transition: 'transform 0.1s ease-out, background-color 0.3s',
                    }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateX = (y - centerY) / 15;
                      const rotateY = (centerX - x) / 15;
                      e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
                    }}
                  >
                    <Send className="mr-2 w-4 h-4" style={{ transform: 'translateZ(5px)' }} />
                    <span style={{ transform: 'translateZ(5px)' }}>Send Message</span>
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  We'll respond within 24 hours during business hours
                </p>
              </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;