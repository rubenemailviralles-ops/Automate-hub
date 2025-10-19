import React, { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';

const ContactMobile = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            full_name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            company_name: formData.businessName || null,
            message: formData.message,
            source: 'Contact Page Mobile',
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessName: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us - Automate Hub"
        description="Get in touch with Automate Hub to discuss your automation needs"
        canonicalUrl="https://automate-hub.com/contact"
      />
      
      <section style={{ padding: '48px 0', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
              {t('contact.title')}
            </h1>
            <p style={{ fontSize: '18px', color: '#d1d5db', marginBottom: '32px' }}>
              {t('contact.subtitle')}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Contact Info */}
            <div>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    background: 'linear-gradient(135deg, rgb(99, 102, 241), rgb(139, 92, 246))', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                  }}>
                    <Phone style={{ width: '32px', height: '32px', color: 'white' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>Phone</h3>
                    <p style={{ color: '#9ca3af' }}>(+27) 82 644 2575</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    background: 'linear-gradient(135deg, rgb(236, 72, 153), rgb(244, 63, 94))', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                  }}>
                    <Mail style={{ width: '32px', height: '32px', color: 'white' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'white', marginBottom: '4px' }}>Email</h3>
                    <p style={{ color: '#9ca3af' }}>automate.hub1@gmail.com</p>
                  </div>
                </div>
              </div>

              <div style={{ 
                backgroundColor: 'rgba(31, 41, 55, 0.5)', 
                borderRadius: '16px', 
                padding: '24px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: 'white', marginBottom: '16px' }}>What to Expect:</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#d1d5db' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#10b981', marginTop: '2px' }}>✓</span>
                    <span>Response within 24 hours</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#10b981', marginTop: '2px' }}>✓</span>
                    <span>Personalized consultation</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#10b981', marginTop: '2px' }}>✓</span>
                    <span>Custom automation strategy</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#10b981', marginTop: '2px' }}>✓</span>
                    <span>No obligation or pressure</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div style={{ 
              backgroundColor: 'rgba(31, 41, 55, 0.3)', 
              borderRadius: '24px', 
              padding: '32px',
              border: '1px solid rgba(55, 65, 81, 0.5)'
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
                    <Send style={{ width: '32px', height: '32px', color: '#10b981' }} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>Thank you for the message!</h3>
                  <p style={{ color: '#9ca3af', marginBottom: '24px' }}>You will be hearing from us soon.</p>
                  <Link
                    to="/book-consultation"
                    style={{ 
                      display: 'inline-block', 
                      backgroundColor: 'rgb(59, 130, 246)', 
                      color: 'white', 
                      padding: '12px 24px', 
                      borderRadius: '12px', 
                      fontWeight: '600',
                      textDecoration: 'none'
                    }}
                  >
                    Book a Consultation
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>
                    {t('contact.sendMessage')}
                  </h2>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                        {t('contact.name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: '#000',
                          border: errors.name ? '1px solid rgb(239, 68, 68)' : '1px solid rgba(255,255,255,0.2)',
                          borderRadius: '12px',
                          color: 'white',
                          fontSize: '16px'
                        }}
                        placeholder="John Doe"
                      />
                      {errors.name && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.name}</p>}
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                        {t('contact.email')} *
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
                        {t('contact.phone')}
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
                        {t('contact.company')}
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
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
                        {t('contact.message')} *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: '#000',
                          border: errors.message ? '1px solid rgb(239, 68, 68)' : '1px solid rgba(255,255,255,0.2)',
                          borderRadius: '12px',
                          color: 'white',
                          fontSize: '16px',
                          minHeight: '120px'
                        }}
                        placeholder="Tell us about your automation needs..."
                        rows={5}
                      />
                      {errors.message && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '4px' }}>{errors.message}</p>}
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
                      {isSubmitting ? 'Sending...' : t('contact.sendMessage')}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMobile;
