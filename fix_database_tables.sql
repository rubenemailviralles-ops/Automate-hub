-- Fix Database Tables - Add Missing Columns
-- This script will add all missing columns to both tables

-- Fix contact_submissions table
-- Add missing columns if they don't exist
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS business_name text DEFAULT '',
ADD COLUMN IF NOT EXISTS message text DEFAULT '',
ADD COLUMN IF NOT EXISTS status text DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS email_sent boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS email_sent_at timestamptz,
ADD COLUMN IF NOT EXISTS admin_notes text DEFAULT '';

-- Add status constraint for contact_submissions
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.check_constraints 
        WHERE constraint_name = 'contact_submissions_status_check'
    ) THEN
        ALTER TABLE contact_submissions 
        ADD CONSTRAINT contact_submissions_status_check 
        CHECK (status IN ('pending', 'in_progress', 'completed', 'canceled'));
    END IF;
END $$;

-- Fix consultation_bookings table
-- Add missing columns if they don't exist
ALTER TABLE consultation_bookings 
ADD COLUMN IF NOT EXISTS company_name text DEFAULT '',
ADD COLUMN IF NOT EXISTS area_of_service text DEFAULT '',
ADD COLUMN IF NOT EXISTS status text DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS email_sent boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS email_sent_at timestamptz,
ADD COLUMN IF NOT EXISTS admin_notes text DEFAULT '';

-- Add status constraint for consultation_bookings
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.check_constraints 
        WHERE constraint_name = 'consultation_bookings_status_check'
    ) THEN
        ALTER TABLE consultation_bookings 
        ADD CONSTRAINT consultation_bookings_status_check 
        CHECK (status IN ('pending', 'confirmed', 'completed', 'canceled'));
    END IF;
END $$;

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS contact_submissions_status_idx 
  ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS contact_submissions_email_sent_idx 
  ON contact_submissions(email_sent);
CREATE INDEX IF NOT EXISTS consultation_bookings_status_idx 
  ON consultation_bookings(status);
CREATE INDEX IF NOT EXISTS consultation_bookings_email_sent_idx 
  ON consultation_bookings(email_sent);

-- Add UPDATE policies for admin management
DO $$ 
BEGIN
    -- Add policy for contact_submissions updates
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'contact_submissions' 
        AND policyname = 'Authenticated users can update submissions'
    ) THEN
        CREATE POLICY "Authenticated users can update submissions"
          ON contact_submissions
          FOR UPDATE
          TO authenticated
          USING (true)
          WITH CHECK (true);
    END IF;
    
    -- Add policy for consultation_bookings updates
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'consultation_bookings' 
        AND policyname = 'Authenticated users can update bookings'
    ) THEN
        CREATE POLICY "Authenticated users can update bookings"
          ON consultation_bookings
          FOR UPDATE
          TO authenticated
          USING (true)
          WITH CHECK (true);
    END IF;
END $$;

-- Add comments for documentation
COMMENT ON COLUMN contact_submissions.business_name IS 'Company name from contact form';
COMMENT ON COLUMN contact_submissions.message IS 'Message content from contact form';
COMMENT ON COLUMN contact_submissions.status IS 'Status of the contact submission: pending, in_progress, completed, or canceled';
COMMENT ON COLUMN contact_submissions.email_sent IS 'Whether a thank you email has been sent to the contact';
COMMENT ON COLUMN contact_submissions.email_sent_at IS 'Timestamp when the thank you email was sent';
COMMENT ON COLUMN contact_submissions.admin_notes IS 'Notes added by admin for internal tracking';

COMMENT ON COLUMN consultation_bookings.company_name IS 'Company name from consultation booking form';
COMMENT ON COLUMN consultation_bookings.area_of_service IS 'Service area of interest from consultation booking form';
COMMENT ON COLUMN consultation_bookings.status IS 'Status of the consultation booking: pending, confirmed, completed, or canceled';
COMMENT ON COLUMN consultation_bookings.email_sent IS 'Whether a confirmation email has been sent to the client';
COMMENT ON COLUMN consultation_bookings.email_sent_at IS 'Timestamp when the confirmation email was sent';
COMMENT ON COLUMN consultation_bookings.admin_notes IS 'Notes added by admin for internal tracking';

-- Verify tables have all required columns
SELECT 'contact_submissions columns:' as info;
SELECT column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_name = 'contact_submissions' 
ORDER BY ordinal_position;

SELECT 'consultation_bookings columns:' as info;
SELECT column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_name = 'consultation_bookings' 
ORDER BY ordinal_position;