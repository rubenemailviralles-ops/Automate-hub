import React, { useState } from 'react';
import { Calendar, Send, CheckCircle, Globe, Database, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';

const ConsultationBookingMobile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    areaOfService: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const serviceOptions = [
    { value: 'website-creation', label: 'Website Creation', icon: Globe },
    { value: 'crm-integration', label: 'CRM Integration', icon: Database },
    { value: 'ai-phone-callers', label: 'AI Phone Callers', icon: Phone },
    { value: 'email-outreach', label: 'Email Outreach', icon: Mail },
    { value: 'multiple-services', label: 'Multiple Services', icon: CheckCircle }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.areaOfService) newErrors.areaOfService = 'Please select a service';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('consultation_bookings')
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone || null,
          company_name: formData.companyName || null,
          area_of_service: formData.areaOfService,
          source: 'Consultation Page Mobile',
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        areaOfService: ''
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Book Free Consultation - Automate Hub"
        description="Schedule a free strategy session to discuss your automation needs"
        canonicalUrl="https://automate-hub.com/book-consultation"
      />
      
      <section style={{ padding: '48px 0', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          
          <div style={{ marginBottom: '32px' }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              padding: '8px 16px', 
              background: 'linear-gradient(to right, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))', 
              border: '1px solid rgba(59, 130, 246, 0.3)', 
              borderRadius: '9999px', 
              marginBottom: '24px'
            }}>
              <Calendar style={{ width: '16px', height: '16px', color: 'rgb(96, 165, 250)', marginRight: '8px' }} />
              <span style={{ color: 'rgb(96, 165, 250)', fontWeight: '500', fontSize: '14px' }}>Free Consultation</span>
            </div>
            
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '24px', color: 'white' }}>
              Book Your Free<br />
              <span style={{ color: 'rgb(96, 165, 250)' }}>Strategy Session</span>
            </h1>
            
            <p style={{ fontSize: '16px', color: '#9ca3af', marginBottom: '32px' }}>
              Ready to transform your business with AI automation? Schedule a personalized consultation.
            </p>
          </div>

          {/* Form */}
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.05)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '24px', 
            padding: '32px'
          }}>
            {submitSuccess ? (
              <div style={{ textAlign: 'center', padding: '32px' }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: 'rgba(16, 185, 129, 0.2)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 16px'
                }}>
                  <CheckCircle style={{ width: '32px', height: '32px', color: '#10b981' }} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>Consultation Booked!</h3>
                <p style={{ color: '#9ca3af' }}>We'll contact you within 24 hours to schedule your session.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>
                  Schedule Your Consultation
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: '#000',
                        border: errors.fullName ? '1px solid rgb(239, 68, 68)' : '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '16px'
                      }}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.fullName}</p>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: '#000',
                        border: errors.email ? '1px solid rgb(239, 68, 68)' : '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '16px'
                      }}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.email}</p>}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: '#000',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '16px'
                      }}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: '#000',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        color: 'white',
                        fontSize: '16px'
                      }}
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                      Area of Service *
                    </label>
                    <select
                      name="areaOfService"
                      value={formData.areaOfService}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        backgroundColor: '#000',
                        border: errors.areaOfService ? '1px solid rgb(239, 68, 68)' : '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        color: formData.areaOfService ? 'white' : '#6b7280',
                        fontSize: '16px'
                      }}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map(option => (
                        <option key={option.value} value={option.value} style={{ color: 'black' }}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.areaOfService && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.areaOfService}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '16px 24px',
                      borderRadius: '12px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      marginTop: '24px',
                      backgroundColor: isSubmitting ? 'rgb(75, 85, 99)' : 'white',
                      color: isSubmitting ? 'rgb(209, 213, 219)' : 'black',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      border: 'none',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                      fontSize: '16px'
                    }}
                  >
                    <Send style={{ width: '16px', height: '16px' }} />
                    {isSubmitting ? 'Booking...' : 'Book Consultation'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Why Book */}
          <div style={{ 
            marginTop: '64px', 
            background: 'linear-gradient(to right, rgba(34, 197, 94, 0.1), rgba(37, 99, 235, 0.1))', 
            border: '1px solid rgba(34, 197, 94, 0.3)', 
            borderRadius: '16px', 
            padding: '32px', 
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
              Why Book a Consultation?
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', textAlign: 'left' }}>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#9ca3af' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle style={{ width: '20px', height: '20px', color: '#10b981', marginTop: '2px', flexShrink: 0 }} />
                  <span>Get expert insights into your automation potential</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle style={{ width: '20px', height: '20px', color: '#10b981', marginTop: '2px', flexShrink: 0 }} />
                  <span>Understand exactly how AI can help your specific business</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle style={{ width: '20px', height: '20px', color: '#10b981', marginTop: '2px', flexShrink: 0 }} />
                  <span>Learn about ROI and cost savings opportunities</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle style={{ width: '20px', height: '20px', color: '#10b981', marginTop: '2px', flexShrink: 0 }} />
                  <span>Receive a custom automation roadmap</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle style={{ width: '20px', height: '20px', color: '#10b981', marginTop: '2px', flexShrink: 0 }} />
                  <span>No pressure sales - just helpful guidance</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle style={{ width: '20px', height: '20px', color: '#10b981', marginTop: '2px', flexShrink: 0 }} />
                  <span>Connect with automation experts who understand your industry</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ConsultationBookingMobile;
