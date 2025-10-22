# 🚀 Deploy Email Automation - Quick Guide

## Your Resend API Key
```
re_hGeGY2vP_71Q7o1ewJvE7L6gNHQmnx1sZ
```

## 📋 Step-by-Step Setup (10 Minutes)

### Step 1: Deploy Edge Function to Supabase

1. Go to your Supabase dashboard: https://supabase.com/dashboard
2. Select your project: **vibevjzpdkvttbfdtive**
3. Click **"Edge Functions"** in left sidebar
4. Click **"Deploy new function"**
5. Function name: `send-thank-you-email`
6. Copy the code from `supabase/functions/send-thank-you-email/index.ts`
7. Paste it in the editor
8. Click **"Deploy function"**

### Step 2: Add API Key as Secret

1. In Edge Functions, click **"Settings"** or **"Secrets"**
2. Add new secret:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_hGeGY2vP_71Q7o1ewJvE7L6gNHQmnx1sZ`
3. Click **"Save"**

### Step 3: Run Database Migration

1. Go to **"SQL Editor"** in Supabase
2. Click **"New query"**
3. Copy ALL the SQL from `supabase/migrations/send_thank_you_emails.sql`
4. Paste it
5. Click **"Run"**
6. You should see: "Success. No rows returned"

### Step 4: Update Email "From" Address (Optional)

If you want to use your own domain instead of `noreply@automatehub.com`:

1. Go to Resend → **Domains**
2. Add your domain and verify DNS
3. Update the Edge Function code:
   ```typescript
   from: 'Automate Hub <noreply@yourdomain.com>',
   ```

### Step 5: Test It!

1. Go to your website
2. Submit a contact form or book a consultation
3. Check the email inbox
4. ✅ You should receive a beautiful thank you email!

## 🎯 What Happens

```
User submits form
      ↓
Saved to Supabase
      ↓
Trigger fires automatically
      ↓
Edge Function called
      ↓
Email sent via Resend
      ↓
User receives thank you email instantly!
```

## 📧 Email Templates

### Contact Form Email:
- Subject: "Thank You for Contacting Automate Hub!"
- Professional HTML design
- Your branding
- Response time expectation
- Link to book consultation

### Consultation Booking Email:
- Subject: "Your Consultation is Booked!"
- Confirmation message
- What to expect
- Your contact details

## 🔧 Troubleshooting

### Edge Function Not Working?

1. Check the Edge Function logs in Supabase
2. Verify API key is correct in Secrets
3. Make sure function is deployed

### Emails Not Sending?

1. Check Resend dashboard for delivery status
2. Verify "from" email is verified in Resend
3. Check spam folder

### Trigger Not Firing?

1. Verify SQL migration ran successfully
2. Check database triggers exist:
   ```sql
   SELECT * FROM pg_trigger WHERE tgname LIKE '%thank_you%';
   ```

## ✅ Done!

After setup, EVERY form submission will automatically send a professional thank you email to your leads!

**No manual work needed - 100% automated!** 🚀📧

---

**Cost:** FREE for 3,000 emails/month with Resend

