-- COMPLETE DATABASE RECREATION SCRIPT
-- This will delete everything and recreate all tables with proper structure
-- Run this ONCE to fix all form submission issues

-- ===========================================
-- STEP 1: DROP ALL EXISTING TABLES
-- ===========================================

-- Drop existing tables and all related objects
DROP TABLE IF EXISTS contact_submissions CASCADE;
DROP TABLE IF EXISTS consultation_bookings CASCADE;

-- ===========================================
-- STEP 2: CREATE CONTACT SUBMISSIONS TABLE
-- ===========================================

CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  business_name text DEFAULT '',
  message text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'canceled')),
  email_sent boolean DEFAULT false,
  email_sent_at timestamptz,
  admin_notes text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policies for contact_submissions
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Indexes for contact_submissions
CREATE INDEX contact_submissions_created_at_idx ON contact_submissions(created_at DESC);
CREATE INDEX contact_submissions_status_idx ON contact_submissions(status);
CREATE INDEX contact_submissions_email_sent_idx ON contact_submissions(email_sent);

-- ===========================================
-- STEP 3: CREATE CONSULTATION BOOKINGS TABLE
-- ===========================================

CREATE TABLE consultation_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  company_name text DEFAULT '',
  area_of_service text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'canceled')),
  email_sent boolean DEFAULT false,
  email_sent_at timestamptz,
  admin_notes text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Policies for consultation_bookings
CREATE POLICY "Anyone can submit consultation booking"
  ON consultation_bookings
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read bookings"
  ON consultation_bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update bookings"
  ON consultation_bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Indexes for consultation_bookings
CREATE INDEX consultation_bookings_created_at_idx ON consultation_bookings(created_at DESC);
CREATE INDEX consultation_bookings_status_idx ON consultation_bookings(status);
CREATE INDEX consultation_bookings_email_sent_idx ON consultation_bookings(email_sent);

-- ===========================================
-- STEP 4: ADD DOCUMENTATION
-- ===========================================

-- Comments for contact_submissions
COMMENT ON TABLE contact_submissions IS 'Contact form submissions from the website';
COMMENT ON COLUMN contact_submissions.id IS 'Unique identifier for each submission';
COMMENT ON COLUMN contact_submissions.name IS 'Contact person full name';
COMMENT ON COLUMN contact_submissions.email IS 'Contact email address';
COMMENT ON COLUMN contact_submissions.phone IS 'Contact phone number';
COMMENT ON COLUMN contact_submissions.business_name IS 'Company name from contact form';
COMMENT ON COLUMN contact_submissions.message IS 'Message content from contact form';
COMMENT ON COLUMN contact_submissions.status IS 'Status: pending, in_progress, completed, or canceled';
COMMENT ON COLUMN contact_submissions.email_sent IS 'Whether thank you email was sent';
COMMENT ON COLUMN contact_submissions.email_sent_at IS 'Timestamp when email was sent';
COMMENT ON COLUMN contact_submissions.admin_notes IS 'Admin notes for internal tracking';
COMMENT ON COLUMN contact_submissions.created_at IS 'When submission was created';
COMMENT ON COLUMN contact_submissions.updated_at IS 'When submission was last updated';

-- Comments for consultation_bookings
COMMENT ON TABLE consultation_bookings IS 'Consultation booking submissions from the website';
COMMENT ON COLUMN consultation_bookings.id IS 'Unique identifier for each booking';
COMMENT ON COLUMN consultation_bookings.full_name IS 'Client full name';
COMMENT ON COLUMN consultation_bookings.email IS 'Client email address';
COMMENT ON COLUMN consultation_bookings.phone IS 'Client phone number';
COMMENT ON COLUMN consultation_bookings.company_name IS 'Company name from booking form';
COMMENT ON COLUMN consultation_bookings.area_of_service IS 'Service area of interest';
COMMENT ON COLUMN consultation_bookings.status IS 'Status: pending, confirmed, completed, or canceled';
COMMENT ON COLUMN consultation_bookings.email_sent IS 'Whether confirmation email was sent';
COMMENT ON COLUMN consultation_bookings.email_sent_at IS 'Timestamp when email was sent';
COMMENT ON COLUMN consultation_bookings.admin_notes IS 'Admin notes for internal tracking';
COMMENT ON COLUMN consultation_bookings.created_at IS 'When booking was created';
COMMENT ON COLUMN consultation_bookings.updated_at IS 'When booking was last updated';

-- ===========================================
-- STEP 5: VERIFY TABLES ARE CREATED CORRECTLY
-- ===========================================

-- Show contact_submissions structure
SELECT 'CONTACT_SUBMISSIONS TABLE STRUCTURE:' as info;
SELECT 
  column_name, 
  data_type, 
  is_nullable, 
  column_default,
  character_maximum_length
FROM information_schema.columns 
WHERE table_name = 'contact_submissions' 
ORDER BY ordinal_position;

-- Show consultation_bookings structure
SELECT 'CONSULTATION_BOOKINGS TABLE STRUCTURE:' as info;
SELECT 
  column_name, 
  data_type, 
  is_nullable, 
  column_default,
  character_maximum_length
FROM information_schema.columns 
WHERE table_name = 'consultation_bookings' 
ORDER BY ordinal_position;

-- Show policies
SELECT 'ROW LEVEL SECURITY POLICIES:' as info;
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename IN ('contact_submissions', 'consultation_bookings')
ORDER BY tablename, policyname;

-- Show indexes
SELECT 'INDEXES CREATED:' as info;
SELECT 
  indexname,
  tablename,
  indexdef
FROM pg_indexes 
WHERE tablename IN ('contact_submissions', 'consultation_bookings')
ORDER BY tablename, indexname;

-- ===========================================
-- STEP 6: TEST DATA INSERTION
-- ===========================================

-- Test contact form insertion
INSERT INTO contact_submissions (name, email, phone, business_name, message)
VALUES ('Test User', 'test@example.com', '+1234567890', 'Test Company', 'This is a test message');

-- Test consultation booking insertion
INSERT INTO consultation_bookings (full_name, email, phone, company_name, area_of_service)
VALUES ('Test User', 'test@example.com', '+1234567890', 'Test Company', 'website-creation');

-- Show test data
SELECT 'TEST DATA INSERTED:' as info;
SELECT 'Contact submissions:' as table_name, count(*) as record_count FROM contact_submissions;
SELECT 'Consultation bookings:' as table_name, count(*) as record_count FROM consultation_bookings;

-- Clean up test data
DELETE FROM contact_submissions WHERE email = 'test@example.com';
DELETE FROM consultation_bookings WHERE email = 'test@example.com';

SELECT 'DATABASE RECREATION COMPLETE!' as status;
SELECT 'Your forms should now work correctly!' as message;
