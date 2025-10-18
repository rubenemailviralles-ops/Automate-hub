/*
  # Add Status and Email Tracking to Contact Submissions

  1. New Columns
    - `status` (text) - Track message state (pending/in_progress/completed/canceled)
    - `email_sent` (boolean) - Track if thank you email was sent
    - `email_sent_at` (timestamptz) - Timestamp when email was sent
    - `admin_notes` (text) - Optional notes for admin management

  2. Indexes
    - Index on status for efficient filtering
    - Index on email_sent for tracking email delivery

  3. Security
    - Add UPDATE policy for authenticated users to manage submissions
*/

-- Add status and email tracking columns
ALTER TABLE contact_submissions 
ADD COLUMN IF NOT EXISTS status text DEFAULT 'pending' 
  CHECK (status IN ('pending', 'in_progress', 'completed', 'canceled')),
ADD COLUMN IF NOT EXISTS email_sent boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS email_sent_at timestamptz,
ADD COLUMN IF NOT EXISTS admin_notes text DEFAULT '';

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS contact_submissions_status_idx 
  ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS contact_submissions_email_sent_idx 
  ON contact_submissions(email_sent);

-- Add policy for authenticated users to update submissions (for admin app)
CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add comment for documentation
COMMENT ON COLUMN contact_submissions.status IS 'Status of the contact submission: pending, in_progress, completed, or canceled';
COMMENT ON COLUMN contact_submissions.email_sent IS 'Whether a thank you email has been sent to the contact';
COMMENT ON COLUMN contact_submissions.email_sent_at IS 'Timestamp when the thank you email was sent';
COMMENT ON COLUMN contact_submissions.admin_notes IS 'Notes added by admin for internal tracking';

