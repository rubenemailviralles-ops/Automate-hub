import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, ArrowRight, CheckCircle, X } from 'lucide-react';

const CTASection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: ''
  });

  const openModal = () => {
    setIsModalOpen(true);
    setIsAnimating(true);
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll contact you within 24 hours to schedule your consultation.');
    closeModal();
    setFormData({ name: '', email: '', phone: '', company: '', service: '' });
  };

  const handleContactClick = () => {
    if (location.pathname === '/contact') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/contact');
    }
  };

  return (
    <>
      <section className="py-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white animate-fade-in-up">
              Ready to Scale Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-up delay-200">
              Join businesses using Automate Hub to streamline their operations and increase productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 animate-slide-in-left delay-400">
              <div className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center text-white">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Custom automation solutions</span>
              </div>
            </div>

            <button 
              onClick={openModal}
              className="group bg-white text-black hover:bg-gray-100 px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 hover-pop-button flex items-center justify-center mx-auto shadow-2xl animate-scale-in delay-600"
            >
              <Calendar className="mr-3 w-6 h-6" />
              Book Your Free Consultation
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-sm text-gray-500 mt-6 animate-fade-in delay-800">
              Free 30-minute consultation • No commitment required
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`bg-black border border-white/20 rounded-2xl p-8 max-w-md w-full relative transform transition-all duration-300 ${isAnimating ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-white mb-6">Book Your Free Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-white/40 focus:outline-none transition-all"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-white/40 focus:outline-none transition-all"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-white/40 focus:outline-none transition-all"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:border-white/40 focus:outline-none transition-all"
                />
              </div>
              
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-white/40 focus:outline-none transition-all"
                >
                  <option value="">Select Service of Interest</option>
                  <option value="website-creation">Website Creation</option>
                  <option value="crm-integration">CRM Integration</option>
                  <option value="ai-chatbot">AI Chatbot</option>
                  <option value="customer-support">Customer Support</option>
                  <option value="appointment-setting">Appointment Setting</option>
                  <option value="phone-callers">AI Phone Callers</option>
                  <option value="email-outreach">Email Outreach</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover-pop-button"
              >
                Book My Consultation
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              We'll respond within 2 hours during business hours
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CTASection;