-- Fix Row Level Security (RLS) issues for your tables

-- Option 1: Disable RLS completely (simplest for admin app)
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings DISABLE ROW LEVEL SECURITY;

-- Option 2: If you want to keep RLS enabled, create policies instead:
-- (Uncomment these if you prefer to keep RLS enabled)

-- -- Allow anonymous users to insert into contact_submissions
-- CREATE POLICY "Allow anonymous insert on contact_submissions" ON contact_submissions
-- FOR INSERT TO anon
-- WITH CHECK (true);

-- -- Allow anonymous users to insert into consultation_bookings  
-- CREATE POLICY "Allow anonymous insert on consultation_bookings" ON consultation_bookings
-- FOR INSERT TO anon
-- WITH CHECK (true);

-- -- Allow anonymous users to select from contact_submissions
-- CREATE POLICY "Allow anonymous select on contact_submissions" ON contact_submissions
-- FOR SELECT TO anon
-- USING (true);

-- -- Allow anonymous users to select from consultation_bookings
-- CREATE POLICY "Allow anonymous select on consultation_bookings" ON consultation_bookings
-- FOR SELECT TO anon
-- USING (true);

-- -- Allow anonymous users to update contact_submissions
-- CREATE POLICY "Allow anonymous update on contact_submissions" ON contact_submissions
-- FOR UPDATE TO anon
-- USING (true)
-- WITH CHECK (true);

-- -- Allow anonymous users to update consultation_bookings
-- CREATE POLICY "Allow anonymous update on consultation_bookings" ON consultation_bookings
-- FOR UPDATE TO anon
-- USING (true)
-- WITH CHECK (true);
