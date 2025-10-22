import React, { useState } from 'react';
import { Calendar, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const ConsultationBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🔥 CONSULTATION FORM SUBMITTED! Form data:', formData);
    
    setIsSubmitting(true);
    
    try {
      console.log('🚀 Submitting consultation booking to Supabase...', formData);
      console.log('🔗 Supabase client:', supabase);
      console.log('🔗 Supabase URL:', supabase.supabaseUrl);
      
      // Submit to Supabase - match exact working contact form pattern
      const { data, error } = await supabase
        .from('consultation_bookings')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.service
          }
        ]);

      console.log('📊 Supabase response:', { data, error });

      if (error) {
        console.error('❌ Supabase error:', error);
        console.error('❌ Error message:', error.message);
        console.error('❌ Error details:', error.details);
        console.error('❌ Error hint:', error.hint);
        alert(`Supabase Error: ${error.message}`);
        throw error;
      }

      console.log('✅ Consultation booking submitted to Supabase successfully');
      alert('Thank you! We will contact you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: ''
      });
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error('❌ Error submitting consultation:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Free Consultation
          </h1>
          <p className="text-xl text-gray-400">
            Let's discuss how AI automation can transform your business
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          {submitSuccess ? (
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Consultation Booked!</h3>
              <p className="text-gray-400 mb-6">
                Thank you! We'll contact you within 24 hours to confirm your appointment time.
              </p>
              <Link
                to="/"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Return to Home Page
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all"
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
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white placeholder-gray-600 focus:border-white/40 focus:outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
                  Area of Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-xl text-white focus:border-white/40 focus:outline-none transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="website-creation">Website Creation</option>
                  <option value="crm-integration">CRM Integration</option>
                  <option value="ai-phone-callers">AI Phone Callers</option>
                  <option value="email-outreach">Email Outreach</option>
                  <option value="full-automation">Full Automation</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-100'} text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center`}
              >
                <Calendar className="mr-2 w-5 h-5" />
                {isSubmitting ? 'Booking...' : 'Book Free Consultation'}
              </button>

              <p className="text-sm text-gray-600 text-center">
                We'll contact you within 24 hours to confirm your appointment
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;

