import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs = () => {
  const location = useLocation();

  // Map routes to breadcrumb labels
  const routeLabels: { [key: string]: string } = {
    '/': 'Home',
    '/website-creation': 'Website Creation',
    '/crm-integration': 'CRM Integration',
    '/phone-callers': 'AI Phone Callers',
    '/email-outreach': 'Email Outreach',
    '/about': 'About Us',
    '/contact': 'Contact',
    '/book-consultation': 'Book Consultation',
    '/email-contact': 'Email Contact',
    '/privacy-policy': 'Privacy Policy',
    '/terms-of-service': 'Terms of Service',
    '/cookie-policy': 'Cookie Policy',
  };

  // Generate breadcrumb items from current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];

    if (paths.length > 0) {
      const currentPath = `/${paths.join('/')}`;
      const label = routeLabels[currentPath] || paths[paths.length - 1].replace(/-/g, ' ');
      breadcrumbs.push({ label, path: currentPath });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Generate structured data for BreadcrumbList
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': crumb.label,
        'item': `https://automate-hub.com${crumb.path}`,
      })),
    };

    // Add or update breadcrumb structured data
    let script = document.getElementById('breadcrumb-schema') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'breadcrumb-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      // Clean up on unmount
      const existingScript = document.getElementById('breadcrumb-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [breadcrumbs]);

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="py-4 bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.path} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-500 mx-2" aria-hidden="true" />
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="flex items-center text-white font-medium" aria-current="page">
                  {index === 0 && <Home className="w-4 h-4 mr-1" aria-hidden="true" />}
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" aria-hidden="true" />}
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;

