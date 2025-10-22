// Push Notification Utilities for Admin App

interface NotificationOptions {
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  tag?: string;
  data?: any;
}

// Request notification permission
export const requestNotificationPermission = async (): Promise<boolean> => {
  if (!('Notification' in window)) {
    console.warn('This browser does not support notifications');
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
};

// Show notification
export const showNotification = (options: NotificationOptions) => {
  if (Notification.permission === 'granted') {
    const notification = new Notification(options.title, {
      body: options.body,
      icon: options.icon || '/icon-192x192.png',
      badge: options.badge || '/icon-96x96.png',
      tag: options.tag || 'automate-hub-admin',
      vibrate: [200, 100, 200],
      requireInteraction: true, // Keep notification visible until user interacts
      data: options.data,
    });

    // Play notification sound
    playNotificationSound();

    // Handle notification click
    notification.onclick = () => {
      window.focus();
      notification.close();
      
      // Navigate to appropriate page based on notification type
      if (options.data?.type === 'contact') {
        window.location.href = '/contact';
      } else if (options.data?.type === 'consultation') {
        window.location.href = '/consultations';
      }
    };

    return notification;
  }
};

// Play notification sound
const playNotificationSound = () => {
  try {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZUQ4PVKvn77BbFw1Lpeaz'));
    audio.volume = 0.5;
    audio.play().catch(() => {
      // Ignore errors if audio fails to play
    });
  } catch (error) {
    console.warn('Could not play notification sound:', error);
  }
};

// Show new contact message notification
export const notifyNewContact = (contactData: any) => {
  showNotification({
    title: '🔔 New Contact Message!',
    body: `${contactData.name} sent a message`,
    tag: `contact-${contactData.id}`,
    data: {
      type: 'contact',
      id: contactData.id,
      ...contactData,
    },
  });
};

// Show new consultation booking notification
export const notifyNewConsultation = (consultationData: any) => {
  showNotification({
    title: '📅 New Consultation Booking!',
    body: `${consultationData.name} booked a consultation`,
    tag: `consultation-${consultationData.id}`,
    data: {
      type: 'consultation',
      id: consultationData.id,
      ...consultationData,
    },
  });
};

// Check notification permission status
export const getNotificationPermission = (): NotificationPermission => {
  if (!('Notification' in window)) {
    return 'denied';
  }
  return Notification.permission;
};

// Initialize notifications on app load
export const initNotifications = async () => {
  const hasPermission = await requestNotificationPermission();
  
  if (hasPermission) {
    console.log('✅ Notifications enabled');
    
    // Show test notification
    showNotification({
      title: '✅ Notifications Enabled',
      body: 'You will receive instant alerts for new leads!',
      tag: 'init-notification',
    });
  } else {
    console.warn('⚠️ Notifications disabled or not supported');
  }
  
  return hasPermission;
};
