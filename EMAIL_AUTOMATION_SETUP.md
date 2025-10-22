# 📧 Automatic Thank You Email Setup

## ✨ What This Does

When someone submits a form on your website, they automatically receive a beautiful thank you email:

**Contact Form:**
- ✉️ "Thank You for Contacting Automate Hub!"
- ⏰ "We'll respond within 2 hours"
- 🔗 Link to book a consultation

**Consultation Booking:**
- ✉️ "Your Consultation is Booked!"
- 📅 What to expect in the consultation
- ✅ Confirmation of their details

## 🚀 Setup Steps

### Step 1: Sign Up for Resend (FREE)

1. Go to https://resend.com/
2. Sign up for free account
3. Verify your email
4. Add your domain (or use their test domain)

### Step 2: Get API Key

1. Go to Resend dashboard → **API Keys**
2. Click **"Create API Key"**
3. Copy the key (starts with `re_...`)

### Step 3: Add to Supabase

1. Go to your Supabase dashboard
2. Click **"Edge Functions"** in left sidebar
3. Click **"Deploy new function"**
4. Upload `supabase/functions/send-thank-you-email/index.ts`
5. Add environment variable:
   - Key: `RESEND_API_KEY`
   - Value: Your Resend API key

### Step 4: Run Database Migration

1. Go to **SQL Editor** in Supabase
2. Copy the contents of `supabase/migrations/send_thank_you_emails.sql`
3. Paste and click **Run**
4. ✅ Triggers created!

### Step 5: Configure Your Email

In the Edge Function, update the "from" address:

```typescript
from: 'Automate Hub <noreply@yourdomain.com>',
```

## 📧 Email Templates

### Contact Form Email

```
Subject: Thank You for Contacting Automate Hub!

Hi [Name],

Thank you for contacting Automate Hub! We've received your message 
and we're excited to help you transform your business with AI automation.

What happens next?
• Our team will review your message within 2 hours
• We'll reach out to you with a personalized response
• We'll discuss how we can help achieve your automation goals

[Book Free Consultation Button]

Looking forward to working with you!
The Automate Hub Team
```

### Consultation Booking Email

```
Subject: Your Consultation is Booked - Automate Hub

Hi [Name],

🎉 Your free AI automation consultation with Automate Hub has been 
successfully booked!

📅 What to Expect:
• We'll contact you within 24 hours to confirm your appointment time
• 30-minute personalized consultation
• Custom automation recommendations
• Clear next steps and timeline
• No pressure, just helpful guidance

We're excited to help you automate and scale your business!
The Automate Hub Team
```

## 🔧 Alternative: Use Supabase Email (Simpler)

If you don't want to use Resend, you can use Supabase's built-in email:

1. Go to Supabase → **Authentication** → **Email Templates**
2. Create custom templates
3. Send via Supabase Auth

## 🆘 Troubleshooting

### Emails Not Sending?

1. Check Resend API key is correct
2. Verify Edge Function is deployed
3. Check Edge Function logs in Supabase
4. Make sure triggers are created in database

### Emails Going to Spam?

1. Add SPF and DKIM records to your domain
2. Use your own domain instead of Resend's
3. Warm up your email sending (start slow)

## ✅ Testing

1. Submit a contact form on your website
2. Check the email inbox
3. Should receive thank you email within seconds!

## 💡 Cost

**Resend FREE Plan:**
- ✅ 3,000 emails/month FREE
- ✅ Perfect for small businesses
- ✅ No credit card required

**Supabase Edge Functions:**
- ✅ 500,000 invocations/month FREE
- ✅ More than enough for most businesses

## 📝 Next Steps

1. Sign up for Resend
2. Get API key
3. Deploy Edge Function to Supabase
4. Run SQL migration
5. Test it!

---

**Your customers will love the instant confirmation emails!** 📧✨

