/**
 * Smoothly scrolls to the top of the page
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Smoothly scrolls to a specific section by ID
 * @param sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

/**
 * Handles context-aware navigation back to home page
 * Scrolls to the section user came from, or top if they came from elsewhere
 * @param navigate - React Router navigate function
 * @param navigationState - The location state from React Router (contains fromSection)
 */
export const navigateBackToHome = (
  navigate: (path: string) => void, 
  navigationState: any
) => {
  // Check which section user came from
  const fromSection = navigationState?.fromSection;
  const cameFromWhyChoose = fromSection === 'why-choose-automate-hub';
  const cameFromServices = fromSection === 'services';
  
  navigate('/');
  
  // Use setTimeout to ensure navigation completes before scrolling
  setTimeout(() => {
    if (cameFromWhyChoose) {
      // Return to the "Why Choose Automate Hub" section
      scrollToSection('why-choose-automate-hub');
    } else if (cameFromServices) {
      // Return to the "Our AI Solutions" section
      scrollToSection('services');
    } else {
      // Go to top if they came from menu or direct URL
      scrollToTop();
    }
  }, 100);
};
