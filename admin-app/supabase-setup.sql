-- Add missing columns to your Supabase tables for the admin app

-- For contact_submissions table
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS is_read BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS archived_at TIMESTAMP WITH TIME ZONE;

-- For consultation_bookings table  
ALTER TABLE consultation_bookings 
ADD COLUMN IF NOT EXISTS is_booked BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS archived_at TIMESTAMP WITH TIME ZONE;

-- Optional: Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_is_read ON contact_submissions(is_read);
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_is_booked ON consultation_bookings(is_booked);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_created_at ON consultation_bookings(created_at);
