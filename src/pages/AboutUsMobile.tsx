import React from 'react';
import { Target, Users, Lightbulb, Zap, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AboutUsMobile = () => {
  return (
    <>
      <SEO 
        title="About Us - Automate Hub"
        description="Learn about Automate Hub's mission to transform businesses through AI automation"
        canonicalUrl="https://automate-hub.com/about"
      />
      
      <section style={{ padding: '48px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
              About Automate Hub
            </h1>
            <p style={{ fontSize: '18px', color: '#9ca3af', maxWidth: '768px', margin: '0 auto' }}>
              We're on a mission to make AI automation accessible to businesses of all sizes
            </p>
          </div>

          {/* Mission */}
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))', 
            border: '1px solid rgba(59, 130, 246, 0.3)', 
            borderRadius: '16px', 
            padding: '32px',
            marginBottom: '32px'
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
              Why We Do What We Do
            </h2>
            <p style={{ fontSize: '16px', color: '#d1d5db', lineHeight: '1.7' }}>
              We believe every business deserves access to cutting-edge AI automation, not just large corporations. 
              Our mission is to level the playing field by providing affordable, powerful automation solutions 
              that help businesses save time, reduce costs, and scale efficiently.
            </p>
          </div>

          {/* Values */}
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '24px', textAlign: 'center' }}>
              Our Values
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
              
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' }}>
                <Target style={{ width: '32px', height: '32px', color: 'rgb(96, 165, 250)', marginBottom: '12px' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
                  Results-Driven
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '14px' }}>
                  We focus on delivering measurable results that directly impact your bottom line
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' }}>
                <Users style={{ width: '32px', height: '32px', color: 'rgb(34, 197, 94)', marginBottom: '12px' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
                  Customer-Centric
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '14px' }}>
                  Your success is our success. We're committed to understanding and meeting your unique needs
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' }}>
                <Lightbulb style={{ width: '32px', height: '32px', color: 'rgb(251, 191, 36)', marginBottom: '12px' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
                  Innovation
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '14px' }}>
                  We stay at the forefront of AI technology to bring you the most advanced solutions
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px' }}>
                <Shield style={{ width: '32px', height: '32px', color: 'rgb(139, 92, 246)', marginBottom: '12px' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
                  Transparency
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '14px' }}>
                  Clear communication, honest pricing, and no hidden fees - what you see is what you get
                </p>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link
              to="/book-consultation"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(147, 51, 234))',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '16px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)'
              }}
            >
              Start Your Automation Journey
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default AboutUsMobile;
