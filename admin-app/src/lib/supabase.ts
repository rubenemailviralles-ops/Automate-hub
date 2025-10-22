import { createClient } from '@supabase/supabase-js'

// Supabase configuration - using your existing setup
const supabaseUrl = 'https://vibevjzpdkvttbfdtive.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYmV2anpwZGt2dHRiZmR0aXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4NzcwNTUsImV4cCI6MjA3NDQ1MzA1NX0.eA5mWnDKodvPwCvSYZvWaguiTizIKYnfTjQwRj_27dE'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Database types - matching your Supabase structure
export interface ContactMessage {
  id: string
  name: string
  email: string
  phone?: string
  message?: string
  company?: string
  budget?: string
  created_at: string
  is_read?: boolean
  archived_at?: string
}

export interface ConsultationBooking {
  id: string
  name: string
  email: string
  phone?: string
  service?: string
  created_at: string
  is_booked?: boolean
  archived_at?: string
}
