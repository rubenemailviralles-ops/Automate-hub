import { supabase } from '../lib/supabase';
import { notifyNewContact, notifyNewConsultation } from './notifications';

let contactSubscription: any = null;
let consultationSubscription: any = null;

// Subscribe to new contact messages
export const subscribeToContacts = () => {
  console.log('🔄 Subscribing to contact messages...');
  
  contactSubscription = supabase
    .channel('contact-messages')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'contact_submissions',
      },
      (payload) => {
        console.log('🔔 NEW CONTACT MESSAGE:', payload.new);
        notifyNewContact(payload.new);
      }
    )
    .subscribe((status) => {
      console.log('Contact subscription status:', status);
    });
  
  return contactSubscription;
};

// Subscribe to new consultation bookings
export const subscribeToConsultations = () => {
  console.log('🔄 Subscribing to consultation bookings...');
  
  consultationSubscription = supabase
    .channel('consultation-bookings')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'consultation_bookings',
      },
      (payload) => {
        console.log('🔔 NEW CONSULTATION BOOKING:', payload.new);
        notifyNewConsultation(payload.new);
      }
    )
    .subscribe((status) => {
      console.log('Consultation subscription status:', status);
    });
  
  return consultationSubscription;
};

// Subscribe to all real-time updates
export const initRealtimeSubscriptions = () => {
  console.log('🚀 Initializing real-time subscriptions...');
  
  subscribeToContacts();
  subscribeToConsultations();
  
  console.log('✅ Real-time subscriptions active');
};

// Unsubscribe from all channels
export const unsubscribeAll = async () => {
  console.log('🛑 Unsubscribing from all channels...');
  
  if (contactSubscription) {
    await supabase.removeChannel(contactSubscription);
    contactSubscription = null;
  }
  
  if (consultationSubscription) {
    await supabase.removeChannel(consultationSubscription);
    consultationSubscription = null;
  }
  
  console.log('✅ Unsubscribed from all channels');
};

// Check connection status
export const checkRealtimeStatus = () => {
  return {
    contacts: contactSubscription !== null,
    consultations: consultationSubscription !== null,
  };
};
