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
 * Handles navigation to home page with smooth scroll to a specific section
 * @param navigate - React Router navigate function
 * @param sectionId - Optional section ID to scroll to (defaults to 'why-choose-automate-hub')
 */
export const navigateToHomeWithScroll = (navigate: (path: string) => void, sectionId: string = 'why-choose-automate-hub') => {
  navigate('/');
  // Use setTimeout to ensure navigation completes before scrolling
  setTimeout(() => {
    scrollToSection(sectionId);
  }, 100);
};
