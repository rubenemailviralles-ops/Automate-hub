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
 * @param navigationState - The location state from React Router (contains fromSection if user came from Why Choose section)
 */
export const navigateBackToHome = (
  navigate: (path: string) => void, 
  navigationState: any
) => {
  // Check if user came from the "Why Choose" section
  const cameFromWhyChoose = navigationState?.fromSection === 'why-choose-automate-hub';
  
  navigate('/');
  
  // Use setTimeout to ensure navigation completes before scrolling
  setTimeout(() => {
    if (cameFromWhyChoose) {
      // Return to the section they came from
      scrollToSection('why-choose-automate-hub');
    } else {
      // Go to top if they came from menu or direct URL
      scrollToTop();
    }
  }, 100);
};
