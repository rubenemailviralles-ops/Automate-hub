-- FINAL FIX - Run this in Supabase SQL Editor

-- 1. Disable RLS completely
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings DISABLE ROW LEVEL SECURITY;

-- 2. Make sure columns exist and are nullable
ALTER TABLE contact_submissions 
ALTER COLUMN full_name DROP NOT NULL,
ALTER COLUMN email DROP NOT NULL,
ALTER COLUMN message DROP NOT NULL;

ALTER TABLE consultation_bookings 
ALTER COLUMN full_name DROP NOT NULL,
ALTER COLUMN email DROP NOT NULL;

-- 3. Test insert
INSERT INTO contact_submissions (full_name, email, message) 
VALUES ('Final Test', 'final@test.com', 'Final test message');

INSERT INTO consultation_bookings (full_name, email, phone, company_name, area_of_service) 
VALUES ('Final Test', 'final@test.com', '123-456-7890', 'Final Company', 'website-creation');
