import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const ContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch within 24 hours.');
  };

  const handleContactClick = () => {
    if (location.pathname === '/contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <section id="contact" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-white heading-sophisticated">
              Let's Discuss Your Automation Needs
            </h2>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed text-sophisticated">
              Ready to increase productivity and reduce costs with AI automation? Book a free consultation 
              to discover how Automate Hub can help your business operate more efficiently.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <button onClick={handleContactClick} className="w-14 h-14 bg-white rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Phone className="w-6 h-6 text-black" />
                </button>
                <div>
                  <h4 className="text-lg font-medium text-white heading-sophisticated">Phone</h4>
                  <p className="text-gray-500 text-sophisticated">27+ 82 644 2575</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white heading-sophisticated">Email</h4>
                  <p className="text-gray-500 text-sophisticated">hello@automatehub.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white heading-sophisticated">Office</h4>
                  <p className="text-gray-500 text-sophisticated">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-white/5 border border-white/20 rounded-2xl">
              <h4 className="text-lg font-medium text-white mb-4 heading-sophisticated">What to Expect:</h4>
              <ul className="space-y-3 text-gray-500 text-sophisticated">
                <li>• 30-minute consultation</li>
                <li>• Custom automation recommendations</li>
                <li>• Clear next steps and timeline</li>
                <li>• No pressure, just helpful guidance</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h3 className="text-3xl font-light mb-8 text-white heading-sophisticated">Get Started Today</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-3 text-sophisticated">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all text-sophisticated"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-3 text-sophisticated">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all text-sophisticated"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-3 text-sophisticated">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all text-sophisticated"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-3 text-sophisticated">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all text-sophisticated"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-3 text-sophisticated">
                  Monthly Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white focus:border-white/40 focus:outline-none transition-all text-sophisticated"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-3 text-sophisticated">
                  Tell us about your goals *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all resize-none text-sophisticated"
                  placeholder="Describe your current challenges and what you'd like to achieve with AI automation..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-100 px-8 py-5 rounded-xl font-medium text-lg transition-all duration-500 transform hover:scale-105 flex items-center justify-center text-sophisticated"
              >
                <Send className="mr-2 w-5 h-5" />
                Book My Free Consultation
              </button>

              <p className="text-sm text-gray-600 text-center text-sophisticated">
                We'll respond within 2 hours during business hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;