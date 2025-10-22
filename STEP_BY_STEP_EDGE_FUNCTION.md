# 📝 Deploy Edge Function - Exact Steps

## Method 1: Using Supabase CLI (Recommended)

### Step 1: Install Supabase CLI

**On Windows (PowerShell):**
```powershell
npm install -g supabase
```

### Step 2: Login to Supabase

```powershell
supabase login
```

This will open your browser - login with your Supabase account.

### Step 3: Link to Your Project

```powershell
cd supabase
supabase link --project-ref vibevjzpdkvttbfdtive
```

### Step 4: Set the API Key Secret

```powershell
supabase secrets set RESEND_API_KEY=re_hGeGY2vP_71Q7o1ewJvE7L6gNHQmnx1sZ
```

### Step 5: Deploy the Function

```powershell
supabase functions deploy send-thank-you-email
```

✅ Done! The function is deployed!

---

## Method 2: Using Supabase Dashboard (Easier, No CLI)

### Step 1: Go to Supabase Dashboard

1. Open: https://supabase.com/dashboard
2. Click on your project: **vibevjzpdkvttbfdtive**

### Step 2: Go to Edge Functions

1. Click **"Edge Functions"** in the left sidebar
2. Click **"Create a new function"** button

### Step 3: Create the Function

1. **Function name:** `send-thank-you-email`
2. In the code editor, **delete all** the default code
3. Open your file: `supabase/functions/send-thank-you-email/index.ts`
4. **Copy ALL the code** from that file
5. **Paste it** into the Supabase editor
6. Click **"Deploy function"**

### Step 4: Add the API Key

1. In the Edge Functions page, click on your function name
2. Click **"Settings"** tab
3. Scroll to **"Secrets"**
4. Click **"Add new secret"**
5. **Name:** `RESEND_API_KEY`
6. **Value:** `re_hGeGY2vP_71Q7o1ewJvE7L6gNHQmnx1sZ`
7. Click **"Add secret"**

### Step 5: Get the Function URL

Your function URL will be:
```
https://vibevjzpdkvttbfdtive.supabase.co/functions/v1/send-thank-you-email
```

Save this - you'll need it for the database trigger!

---

## Method 3: Manual Setup (If Dashboard Doesn't Work)

### Create the files structure:

1. In your Supabase project, you need these files:
   ```
   supabase/
     functions/
       send-thank-you-email/
         index.ts
   ```

2. The `index.ts` file is already in your repo at:
   `supabase/functions/send-thank-you-email/index.ts`

3. Deploy using CLI as shown in Method 1

---

## ✅ After Deployment

### Test the Function

1. Go to Edge Functions in Supabase
2. Click on `send-thank-you-email`
3. Click **"Invoke function"**
4. Use this test payload:
   ```json
   {
     "type": "contact",
     "record": {
       "name": "Test User",
       "email": "your-email@example.com"
     }
   }
   ```
5. Click **"Invoke"**
6. Check your email inbox!

### Next: Set Up Database Triggers

After the Edge Function works, run the SQL from:
`supabase/migrations/send_thank_you_emails.sql`

---

## 🆘 Need Help?

If you're stuck, I recommend **Method 2** (Dashboard) - it's the easiest!

Just:
1. Copy the code
2. Paste in Supabase
3. Add the API key
4. Done!

---

**Choose Method 1 (CLI) or Method 2 (Dashboard) - both work!** 🚀

