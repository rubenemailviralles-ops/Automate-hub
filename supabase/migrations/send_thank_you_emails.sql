-- Create function to send thank you email for contact submissions
CREATE OR REPLACE FUNCTION send_contact_thank_you()
RETURNS TRIGGER AS $$
BEGIN
  -- Call Edge Function to send email
  PERFORM
    net.http_post(
      url := 'https://vibevjzpdkvttbfdtive.supabase.co/functions/v1/send-thank-you-email',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
      ),
      body := jsonb_build_object(
        'type', 'contact',
        'record', row_to_json(NEW)
      )
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for contact submissions
DROP TRIGGER IF EXISTS contact_thank_you_trigger ON contact_submissions;
CREATE TRIGGER contact_thank_you_trigger
  AFTER INSERT ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION send_contact_thank_you();

-- Create function to send thank you email for consultation bookings
CREATE OR REPLACE FUNCTION send_consultation_thank_you()
RETURNS TRIGGER AS $$
BEGIN
  -- Call Edge Function to send email
  PERFORM
    net.http_post(
      url := 'https://vibevjzpdkvttbfdtive.supabase.co/functions/v1/send-thank-you-email',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
      ),
      body := jsonb_build_object(
        'type', 'consultation',
        'record', row_to_json(NEW)
      )
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for consultation bookings
DROP TRIGGER IF EXISTS consultation_thank_you_trigger ON consultation_bookings;
CREATE TRIGGER consultation_thank_you_trigger
  AFTER INSERT ON consultation_bookings
  FOR EACH ROW
  EXECUTE FUNCTION send_consultation_thank_you();

