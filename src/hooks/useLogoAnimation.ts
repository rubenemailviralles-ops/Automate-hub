import { useState, useCallback } from 'react';

export const useLogoAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = useCallback(() => {
    if (isAnimating) return; // Prevent multiple animations

    console.log('🎬 Starting NEW easter egg animation...');
    setIsAnimating(true);

    // Get all header elements
    const header = document.querySelector('header');
    const logoIcon = document.getElementById('logo-icon');
    const navItems = document.querySelectorAll('.nav-item');
    const mobileMenuButton = document.querySelector('[data-mobile-menu]');
    
    if (!header || !logoIcon) {
      console.log('❌ Header or logo not found');
      setIsAnimating(false);
      return;
    }

    // Create rolling elements array
    const rollingElements: HTMLElement[] = [];
    
    // Clone logo for rolling
    const rollingLogo = logoIcon.cloneNode(true) as HTMLElement;
    rollingLogo.id = 'rolling-logo';
    rollingLogo.style.position = 'fixed';
    rollingLogo.style.zIndex = '10000';
    rollingLogo.style.pointerEvents = 'none';
    rollingLogo.style.transition = 'none';
    
    // Clone nav items for rolling
    navItems.forEach((item, index) => {
      const clonedItem = item.cloneNode(true) as HTMLElement;
      clonedItem.id = `rolling-nav-${index}`;
      clonedItem.style.position = 'fixed';
      clonedItem.style.zIndex = '10000';
      clonedItem.style.pointerEvents = 'none';
      clonedItem.style.transition = 'none';
      rollingElements.push(clonedItem);
    });

    // Position rolling elements at their original locations
    const logoRect = logoIcon.getBoundingClientRect();
    rollingLogo.style.left = `${logoRect.left}px`;
    rollingLogo.style.top = `${logoRect.top}px`;
    rollingLogo.style.width = `${logoRect.width}px`;
    rollingLogo.style.height = `${logoRect.height}px`;
    
    rollingElements.forEach((element, index) => {
      const originalItem = navItems[index] as HTMLElement;
      const rect = originalItem.getBoundingClientRect();
      element.style.left = `${rect.left}px`;
      element.style.top = `${rect.top}px`;
      element.style.width = `${rect.width}px`;
      element.style.height = `${rect.height}px`;
    });

    // Add rolling elements to page
    document.body.appendChild(rollingLogo);
    rollingElements.forEach(element => document.body.appendChild(element));

    // Hide original elements
    logoIcon.style.opacity = '0';
    navItems.forEach(item => {
      (item as HTMLElement).style.opacity = '0';
    });

    // Start rolling animation (2 seconds)
    setTimeout(() => {
      rollingLogo.style.transition = 'transform 2s cubic-bezier(0.4, 0, 0.2, 1)';
      rollingLogo.style.transform = 'translateX(100vw) rotate(720deg)';
      
      rollingElements.forEach((element, index) => {
        setTimeout(() => {
          element.style.transition = 'transform 2s cubic-bezier(0.4, 0, 0.2, 1)';
          element.style.transform = `translateX(100vw) rotate(${360 + (index * 45)}deg)`;
        }, index * 100);
      });
    }, 100);

    // Start return animation (2 seconds)
    setTimeout(() => {
      // Remove rolling elements
      rollingLogo.remove();
      rollingElements.forEach(element => element.remove());

      // Show original elements with return animation
      logoIcon.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      logoIcon.style.opacity = '1';
      logoIcon.style.transform = 'translateX(-50px)';
      
      setTimeout(() => {
        logoIcon.style.transform = 'translateX(0)';
      }, 50);

      navItems.forEach((item, index) => {
        setTimeout(() => {
          const element = item as HTMLElement;
          element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
          element.style.opacity = '1';
          element.style.transform = 'translateX(-30px)';
          
          setTimeout(() => {
            element.style.transform = 'translateX(0)';
          }, 50);
        }, index * 100);
      });

      // Reset animation state
      setTimeout(() => {
        navItems.forEach(item => {
          const element = item as HTMLElement;
          element.style.transition = '';
          element.style.transform = '';
        });
        logoIcon.style.transition = '';
        logoIcon.style.transform = '';
        setIsAnimating(false);
        console.log('✅ Animation completed');
      }, 1000);
    }, 2000);
  }, [isAnimating]);

  return { isAnimating, triggerAnimation };
};