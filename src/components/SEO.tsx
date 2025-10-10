import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = 'Automate Hub - AI Automation Solutions for Business Growth',
  description = 'Transform your business with AI automation. Professional website creation, CRM integration, AI phone agents, and email outreach solutions. Increase productivity, reduce costs, and scale efficiently.',
  keywords = 'AI automation, business automation, AI chatbots, CRM integration, AI phone agents, email automation',
  ogImage = 'https://automate-hub.com/automate-hub-ai-platform-preview.png',
  ogImageAlt = 'Automate Hub AI Automation Platform - Dashboard showing website creation, CRM integration, AI phone agents, and email automation services',
  ogImageWidth = '1200',
  ogImageHeight = '630',
  ogType = 'website',
  canonicalUrl = 'https://automate-hub.com/',
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update meta description
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:alt', ogImageAlt, true);
    updateMetaTag('og:image:width', ogImageWidth, true);
    updateMetaTag('og:image:height', ogImageHeight, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonicalUrl, true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', ogImageAlt);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [title, description, keywords, ogImage, ogImageAlt, ogImageWidth, ogImageHeight, ogType, canonicalUrl]);

  return null;
};

export default SEO;

