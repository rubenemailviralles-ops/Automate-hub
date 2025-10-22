# 🔔 Alternative: Use Supabase Database Webhooks

If `pg_net` extension doesn't work, use Supabase's built-in webhooks instead!

## 🚀 Setup (5 Minutes)

### Step 1: Go to Database Webhooks

1. Open Supabase dashboard: https://supabase.com/dashboard/project/vibevjzpdkvttbfdtive
2. Click **"Database"** in left sidebar
3. Click **"Webhooks"** tab
4. Click **"Create a new hook"**

### Step 2: Create Webhook for Contact Submissions

**Settings:**
- **Name:** `contact-thank-you-email`
- **Table:** `contact_submissions`
- **Events:** Check only **"Insert"**
- **Type:** `HTTP Request`
- **Method:** `POST`
- **URL:** `https://vibevjzpdkvttbfdtive.supabase.co/functions/v1/send-thank-you-email`
- **Headers:**
  ```
  Content-Type: application/json
  Authorization: Bearer YOUR_SUPABASE_ANON_KEY
  ```
- **Payload:**
  ```json
  {
    "type": "contact",
    "record": {
      "name": "{{ record.name }}",
      "email": "{{ record.email }}",
      "phone": "{{ record.phone }}",
      "company": "{{ record.company }}",
      "message": "{{ record.message }}"
    }
  }
  ```

Click **"Create webhook"**

### Step 3: Create Webhook for Consultations

**Settings:**
- **Name:** `consultation-thank-you-email`
- **Table:** `consultation_bookings`
- **Events:** Check only **"Insert"**
- **Type:** `HTTP Request`
- **Method:** `POST`
- **URL:** `https://vibevjzpdkvttbfdtive.supabase.co/functions/v1/send-thank-you-email`
- **Headers:**
  ```
  Content-Type: application/json
  Authorization: Bearer YOUR_SUPABASE_ANON_KEY
  ```
- **Payload:**
  ```json
  {
    "type": "consultation",
    "record": {
      "full_name": "{{ record.full_name }}",
      "email": "{{ record.email }}",
      "phone": "{{ record.phone }}",
      "company_name": "{{ record.company_name }}",
      "area_of_service": "{{ record.area_of_service }}"
    }
  }
  ```

Click **"Create webhook"**

### Step 4: Get Your Anon Key

Your anon key is:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpYmV2anpwZGt2dHRiZmR0aXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4NzcwNTUsImV4cCI6MjA3NDQ1MzA1NX0.eA5mWnDKodvPwCvSYZvWaguiTizIKYnfTjQwRj_27dE
```

Use this in the webhook headers.

## ✅ Test It

1. Submit a form on your website
2. Check your email
3. Should receive thank you email instantly!

## 📊 Monitor Webhooks

In Supabase → Database → Webhooks:
- See delivery status
- View logs
- Check for errors

---

**This method is EASIER and doesn't require SQL triggers!** 🚀

Just create 2 webhooks and you're done!

