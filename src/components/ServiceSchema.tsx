import { useEffect } from 'react';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  serviceType: string;
  areaServed?: string;
  provider?: {
    name: string;
    url: string;
  };
  offers?: {
    name: string;
    description: string;
  }[];
}

const ServiceSchema = ({
  serviceName,
  description,
  serviceType,
  areaServed = 'Worldwide',
  provider = {
    name: 'Automate Hub',
    url: 'https://automate-hub.com',
  },
  offers = [],
}: ServiceSchemaProps) => {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': serviceName,
      'description': description,
      'serviceType': serviceType,
      'provider': {
        '@type': 'Organization',
        'name': provider.name,
        'url': provider.url,
        'logo': 'https://automate-hub.com/automate-hub-ai-platform-preview.png',
        'email': 'automate.hub1@gmail.com',
        'contactPoint': {
          '@type': 'ContactPoint',
          'email': 'automate.hub1@gmail.com',
          'contactType': 'customer service',
          'areaServed': areaServed,
          'availableLanguage': ['English'],
        },
      },
      'areaServed': {
        '@type': 'GeoShape',
        'name': areaServed,
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': `${serviceName} Features`,
        'itemListElement': offers.map((offer, index) => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': offer.name,
            'description': offer.description,
          },
        })),
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '87',
      },
    };

    // Add or update service structured data
    let script = document.getElementById('service-schema') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'service-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      // Clean up on unmount
      const existingScript = document.getElementById('service-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [serviceName, description, serviceType, areaServed, provider, offers]);

  return null;
};

export default ServiceSchema;

