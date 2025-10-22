import { createClient } from '@supabase/supabase-js';

// Force use of real Supabase client with hardcoded credentials
const supabaseUrl = 'https://vibevjzpdkvttbfdtive.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYmV2anpwZGt2dHRiZmR0aXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4NzcwNTUsImV4cCI6MjA3NDQ1MzA1NX0.eA5mWnDKodvPwCvSYZvWaguiTizIKYnfTjQwRj_27dE';

console.log('🔗 Supabase URL:', supabaseUrl);
console.log('🔑 Supabase Key:', supabaseAnonKey ? 'Present' : 'Missing');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('✅ Supabase client created successfully');
