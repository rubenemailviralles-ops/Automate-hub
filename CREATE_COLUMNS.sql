-- CREATE MISSING COLUMNS - Run this in Supabase SQL Editor

-- For contact_submissions table
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS full_name TEXT,
ADD COLUMN IF NOT EXISTS company TEXT,
ADD COLUMN IF NOT EXISTS budget TEXT;

-- For consultation_bookings table  
ALTER TABLE consultation_bookings 
ADD COLUMN IF NOT EXISTS full_name TEXT,
ADD COLUMN IF NOT EXISTS company_name TEXT,
ADD COLUMN IF NOT EXISTS area_of_service TEXT;

-- Disable RLS
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings DISABLE ROW LEVEL SECURITY;

-- Test inserts
INSERT INTO contact_submissions (full_name, email, message) 
VALUES ('Test User', 'test@example.com', 'Test message');

INSERT INTO consultation_bookings (full_name, email, phone, company_name, area_of_service) 
VALUES ('Test User', 'test@example.com', '123-456-7890', 'Test Company', 'website-creation');
