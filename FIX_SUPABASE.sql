-- FIX SUPABASE - Run this in your Supabase SQL Editor

-- Step 1: Disable Row Level Security on both tables
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings DISABLE ROW LEVEL SECURITY;

-- Step 2: Make sure the tables have the right columns
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS name TEXT,
ADD COLUMN IF NOT EXISTS company TEXT,
ADD COLUMN IF NOT EXISTS budget TEXT;

ALTER TABLE consultation_bookings 
ADD COLUMN IF NOT EXISTS name TEXT,
ADD COLUMN IF NOT EXISTS company TEXT,
ADD COLUMN IF NOT EXISTS service TEXT;

-- Step 3: Test insert (this should work after running the above)
INSERT INTO contact_submissions (name, email, message) 
VALUES ('Test User', 'test@example.com', 'Test message');

INSERT INTO consultation_bookings (name, email, phone, company, service) 
VALUES ('Test User', 'test@example.com', '123-456-7890', 'Test Company', 'website-creation');
