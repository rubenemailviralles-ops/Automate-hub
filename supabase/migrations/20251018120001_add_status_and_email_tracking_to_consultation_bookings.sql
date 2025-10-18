/*
  # Add Status and Email Tracking to Consultation Bookings

  1. New Columns
    - `status` (text) - Track booking state (pending/confirmed/completed/canceled)
    - `email_sent` (boolean) - Track if confirmation email was sent
    - `email_sent_at` (timestamptz) - Timestamp when email was sent
    - `admin_notes` (text) - Optional notes for admin management

  2. Indexes
    - Index on status for efficient filtering
    - Index on email_sent for tracking email delivery

  3. Security
    - Add UPDATE policy for authenticated users to manage bookings
*/

-- Add status and email tracking columns
ALTER TABLE consultation_bookings 
ADD COLUMN IF NOT EXISTS status text DEFAULT 'pending' 
  CHECK (status IN ('pending', 'confirmed', 'completed', 'canceled')),
ADD COLUMN IF NOT EXISTS email_sent boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS email_sent_at timestamptz,
ADD COLUMN IF NOT EXISTS admin_notes text DEFAULT '';

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS consultation_bookings_status_idx 
  ON consultation_bookings(status);
CREATE INDEX IF NOT EXISTS consultation_bookings_email_sent_idx 
  ON consultation_bookings(email_sent);

-- Add policy for authenticated users to update bookings (for admin app)
CREATE POLICY "Authenticated users can update bookings"
  ON consultation_bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add comment for documentation
COMMENT ON COLUMN consultation_bookings.status IS 'Status of the consultation booking: pending, confirmed, completed, or canceled';
COMMENT ON COLUMN consultation_bookings.email_sent IS 'Whether a confirmation email has been sent to the client';
COMMENT ON COLUMN consultation_bookings.email_sent_at IS 'Timestamp when the confirmation email was sent';
COMMENT ON COLUMN consultation_bookings.admin_notes IS 'Notes added by admin for internal tracking';

