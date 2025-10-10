import { useEffect } from 'react';

interface StructuredDataProps {
  type?: 'Organization' | 'WebSite' | 'Service' | 'Article';
  data?: Record<string, any>;
}

const StructuredData = ({ type = 'Organization', data }: StructuredDataProps) => {
  useEffect(() => {
    // Default structured data for the organization
    const defaultData = {
      '@context': 'https://schema.org',
      '@type': type,
      name: 'Automate Hub',
      url: 'https://automate-hub.com',
      logo: 'https://automate-hub.com/Screenshot 2025-09-16 123406.png',
      description: 'AI automation solutions for businesses including website creation, CRM integration, AI phone agents, and email outreach.',
      email: 'automate.hub1@gmail.com',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'automate.hub1@gmail.com',
        contactType: 'Customer Service',
        availableLanguage: 'English',
      },
      sameAs: [
        // Add social media links here when available
      ],
      areaServed: 'Worldwide',
      serviceType: [
        'AI Automation',
        'Website Creation',
        'CRM Integration',
        'AI Phone Agents',
        'Email Automation',
      ],
    };

    // Merge with custom data if provided
    const structuredData = data ? { ...defaultData, ...data } : defaultData;

    // Create or update script tag
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(structuredData, null, 2);

    return () => {
      // Cleanup on unmount
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [type, data]);

  return null;
};

export default StructuredData;

