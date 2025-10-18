# Supabase Email Automation Setup

This guide explains how to set up automated thank you emails for contact form submissions and consultation bookings using Supabase Edge Functions.

## Overview

Your Supabase database now has email tracking capabilities:
- ✅ Status tracking (pending/completed/canceled)
- ✅ Email sent tracking
- ✅ Email timestamp recording
- ✅ Admin notes for management

## Database Structure

### Contact Submissions Table
```sql
contact_submissions (
  id uuid,
  name text,
  email text,
  phone text,
  business_name text,
  message text,
  status text DEFAULT 'pending',  -- NEW
  email_sent boolean DEFAULT false,  -- NEW
  email_sent_at timestamptz,  -- NEW
  admin_notes text,  -- NEW
  created_at timestamptz,
  updated_at timestamptz
)
```

### Consultation Bookings Table
```sql
consultation_bookings (
  id uuid,
  full_name text,
  email text,
  phone text,
  company_name text,
  area_of_service text,
  status text DEFAULT 'pending',  -- NEW
  email_sent boolean DEFAULT false,  -- NEW
  email_sent_at timestamptz,  -- NEW
  admin_notes text,  -- NEW
  created_at timestamptz,
  updated_at timestamptz
)
```

## Email Service Options

### Option 1: Resend (Recommended - Easy & Affordable)
- ✅ Simple API
- ✅ Generous free tier (100 emails/day)
- ✅ Great deliverability
- 🌐 https://resend.com

### Option 2: SendGrid
- ✅ Popular choice
- ✅ Free tier (100 emails/day)
- 🌐 https://sendgrid.com

### Option 3: Mailgun
- ✅ Developer-friendly
- ✅ Free tier available
- 🌐 https://mailgun.com

## Setup Steps

### Step 1: Apply Database Migrations

Run these migrations in your Supabase SQL Editor:

1. Go to your Supabase Dashboard → SQL Editor
2. Run migration: `supabase/migrations/20251018120000_add_status_and_email_tracking_to_contact_submissions.sql`
3. Run migration: `supabase/migrations/20251018120001_add_status_and_email_tracking_to_consultation_bookings.sql`

Or if you have Supabase CLI installed:
```bash
supabase db push
```

### Step 2: Sign Up for Email Service

Using **Resend** (recommended):

1. Go to https://resend.com and sign up
2. Verify your email
3. Get your API Key from Settings → API Keys
4. Add your domain (or use their testing domain)

### Step 3: Create Supabase Edge Function

Create a new Edge Function to send emails automatically when rows are inserted.

#### 3.1 Install Supabase CLI (if not installed)
```bash
npm install -g supabase
```

#### 3.2 Initialize Supabase in Your Project
```bash
supabase login
supabase init
```

#### 3.3 Create Edge Function
```bash
supabase functions new send-thank-you-email
```

#### 3.4 Add the Function Code

Edit `supabase/functions/send-thank-you-email/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

serve(async (req) => {
  try {
    const { record, table } = await req.json()
    
    // Initialize Supabase client with service role
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!)
    
    let emailSubject = ''
    let emailHtml = ''
    
    // Generate email based on table type
    if (table === 'contact_submissions') {
      emailSubject = 'Thank you for contacting Automate Hub!'
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #3b82f6;">Thank You for Reaching Out! 🎉</h2>
            <p>Hi ${record.name},</p>
            <p>Thank you for contacting Automate Hub! We've received your message and our team will get back to you within 24 hours.</p>
            
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1f2937;">Your Message Details:</h3>
              <p><strong>Name:</strong> ${record.name}</p>
              <p><strong>Email:</strong> ${record.email}</p>
              <p><strong>Phone:</strong> ${record.phone}</p>
              <p><strong>Company:</strong> ${record.business_name}</p>
            </div>
            
            <p>We're excited to discuss how we can help automate your business operations!</p>
            
            <p style="margin-top: 30px;">
              Best regards,<br>
              <strong>The Automate Hub Team</strong><br>
              📧 automate.hub1@gmail.com<br>
              📞 (+27) 82 644 2575
            </p>
          </div>
        </body>
        </html>
      `
    } else if (table === 'consultation_bookings') {
      emailSubject = 'Your Free Consultation is Booked! 🎉'
      emailHtml = `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #3b82f6;">Your Consultation is Booked! 🎉</h2>
            <p>Hi ${record.full_name},</p>
            <p>Thank you for booking a consultation with Automate Hub! We've received your request for a strategy session.</p>
            
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1f2937;">Booking Details:</h3>
              <p><strong>Name:</strong> ${record.full_name}</p>
              <p><strong>Email:</strong> ${record.email}</p>
              <p><strong>Phone:</strong> ${record.phone}</p>
              <p><strong>Company:</strong> ${record.company_name}</p>
              <p><strong>Service Interest:</strong> ${record.area_of_service}</p>
            </div>
            
            <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #1e40af;">Next Steps:</h3>
              <p>✓ We'll contact you within 24 hours to confirm your appointment time</p>
              <p>✓ The session will be 30 minutes focused on your automation needs</p>
              <p>✓ You'll receive a custom automation roadmap</p>
            </div>
            
            <p>We look forward to helping you transform your business!</p>
            
            <p style="margin-top: 30px;">
              Best regards,<br>
              <strong>The Automate Hub Team</strong><br>
              📧 automate.hub1@gmail.com<br>
              📞 (+27) 82 644 2575
            </p>
          </div>
        </body>
        </html>
      `
    }
    
    // Send email using Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Automate Hub <noreply@yourdomain.com>', // Update with your domain
        to: [record.email],
        subject: emailSubject,
        html: emailHtml
      })
    })
    
    const data = await res.json()
    
    if (res.ok) {
      // Update the record to mark email as sent
      await supabase
        .from(table)
        .update({ 
          email_sent: true, 
          email_sent_at: new Date().toISOString() 
        })
        .eq('id', record.id)
      
      return new Response(JSON.stringify({ success: true, data }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
      })
    } else {
      throw new Error(data.message || 'Failed to send email')
    }
    
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500
    })
  }
})
```

#### 3.5 Deploy the Edge Function
```bash
supabase functions deploy send-thank-you-email --no-verify-jwt
```

#### 3.6 Set Environment Variables
```bash
supabase secrets set RESEND_API_KEY=your_resend_api_key_here
```

### Step 4: Create Database Triggers

Create triggers to automatically call the Edge Function when new rows are inserted.

Run this SQL in your Supabase SQL Editor:

```sql
-- Create trigger function for contact submissions
CREATE OR REPLACE FUNCTION trigger_send_contact_email()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://your-project-ref.supabase.co/functions/v1/send-thank-you-email',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key')
    ),
    body := jsonb_build_object(
      'record', row_to_json(NEW),
      'table', 'contact_submissions'
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for contact submissions
CREATE TRIGGER on_contact_submission_created
  AFTER INSERT ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION trigger_send_contact_email();

-- Create trigger function for consultation bookings
CREATE OR REPLACE FUNCTION trigger_send_consultation_email()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://your-project-ref.supabase.co/functions/v1/send-thank-you-email',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key')
    ),
    body := jsonb_build_object(
      'record', row_to_json(NEW),
      'table', 'consultation_bookings'
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for consultation bookings
CREATE TRIGGER on_consultation_booking_created
  AFTER INSERT ON consultation_bookings
  FOR EACH ROW
  EXECUTE FUNCTION trigger_send_consultation_email();
```

## Alternative: Client-Side Email Sending

If you prefer simpler setup without Edge Functions, you can send emails directly from your React app:

### Install Resend in Your Project
```bash
npm install resend
```

### Update Contact Form (`src/pages/Contact.tsx`)

Add after line 78 (after successful Supabase insert):

```typescript
// Send thank you email
try {
  await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'contact',
      data: formData
    })
  });
} catch (emailError) {
  console.error('Failed to send email:', emailError);
  // Continue even if email fails
}
```

### Update Consultation Booking (`src/pages/ConsultationBooking.tsx`)

Similar implementation after line 130.

## Admin App Features

Your Bolt admin app can now:

### Query All Submissions
```typescript
// Get all pending contact submissions
const { data, error } = await supabase
  .from('contact_submissions')
  .select('*')
  .eq('status', 'pending')
  .order('created_at', { ascending: false });
```

### Update Status
```typescript
// Mark as completed
await supabase
  .from('consultation_bookings')
  .update({ 
    status: 'completed',
    admin_notes: 'Called and confirmed'
  })
  .eq('id', bookingId);
```

### Resend Email
```typescript
// Mark email as not sent to trigger resend
await supabase
  .from('contact_submissions')
  .update({ 
    email_sent: false,
    email_sent_at: null
  })
  .eq('id', submissionId);
```

### Get Statistics
```typescript
// Get counts by status
const { data: stats } = await supabase
  .from('consultation_bookings')
  .select('status, count')
  .group('status');
```

## Testing

### Test Email Sending
1. Submit a form on your website
2. Check your email inbox
3. Verify the record in Supabase has `email_sent = true`

### Test Admin Updates
1. Log into Supabase dashboard
2. Update a record's status
3. Verify changes in your admin app

## Troubleshooting

### Emails Not Sending
- Check Resend API key is correct
- Verify Edge Function is deployed
- Check Supabase function logs
- Ensure email domain is verified

### Database Errors
- Run migrations in correct order
- Check RLS policies allow updates
- Verify service role key has permissions

## Cost Estimates

### Resend Free Tier
- 100 emails/day
- 3,000 emails/month
- Perfect for starting out

### Supabase Free Tier
- 500MB database
- 50,000 monthly active users
- 2GB file storage
- Plenty for most use cases

## Next Steps

1. ✅ Apply migrations to Supabase
2. ✅ Sign up for Resend
3. ✅ Deploy Edge Function
4. ✅ Test email sending
5. ✅ Build admin app in Bolt
6. ✅ Monitor and iterate

---

Need help? Check Supabase docs: https://supabase.com/docs/guides/functions

