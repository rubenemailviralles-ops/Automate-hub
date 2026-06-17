import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://zqhidpuxseyiqeirdymu.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxaGlkcHV4c2V5aXFlaXJkeW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2NzI5MzEsImV4cCI6MjA5NzI0ODkzMX0.z6yiOyhh1RysF2B8nuxqgpNYIwaHzAg9ob8ti29sXBw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
