# ⚠️ CORRECT ORDER - Don't Mix These Up!

## 🎯 Two Different Steps - Don't Confuse Them!

### Step A: Deploy Edge Function (TypeScript Code)
### Step B: Run SQL Migration (SQL Code)

---

## 📋 STEP A: Deploy Edge Function First

### 1. Go to Edge Functions Page
https://supabase.com/dashboard/project/vibevjzpdkvttbfdtive/functions

### 2. Create New Function
- Click **"Create a new function"**
- Name: `send-thank-you-email`

### 3. Copy the TYPESCRIPT Code
- Open file: `supabase/functions/send-thank-you-email/index.ts`
- Copy ALL the code (all 149 lines)
- Paste into Supabase editor
- Click **"Deploy function"**

### 4. Add API Key Secret
- In function settings → Secrets
- Add: `RESEND_API_KEY` = `re_hGeGY2vP_71Q7o1ewJvE7L6gNHQmnx1sZ`

✅ Edge Function deployed!

---

## 📋 STEP B: Run SQL Migration (AFTER Edge Function)

### 1. Go to SQL Editor
https://supabase.com/dashboard/project/vibevjzpdkvttbfdtive/sql

### 2. Create New Query
- Click **"New query"**

### 3. Copy the SQL Code
- Open file: `supabase/migrations/send_thank_you_emails.sql`
- Copy ALL the SQL code
- Paste into SQL Editor
- Click **"Run"**

✅ Database triggers created!

---

## 🚨 Common Mistakes

### ❌ WRONG: Running TypeScript in SQL Editor
```typescript
// Supabase Edge Function to send thank you emails  ← This is TypeScript!
import { serve } from ...
```
**ERROR:** Syntax error - SQL doesn't understand TypeScript!

### ✅ CORRECT: Running SQL in SQL Editor
```sql
-- Create function to send thank you email  ← This is SQL!
CREATE OR REPLACE FUNCTION send_contact_thank_you()
```
**SUCCESS:** Triggers created!

---

## 📁 Which File Goes Where?

### Edge Functions Page:
**File:** `supabase/functions/send-thank-you-email/index.ts`
- This is TypeScript code
- Starts with `import { serve }`
- 149 lines
- Deploy in Edge Functions section

### SQL Editor:
**File:** `supabase/migrations/send_thank_you_emails.sql`  
- This is SQL code
- Starts with `-- Create function`
- Creates triggers
- Run in SQL Editor

---

## ✅ Quick Checklist

- [ ] Step A: Edge Function deployed (TypeScript file)
- [ ] Step A: API key added as secret
- [ ] Step B: SQL migration run (SQL file)
- [ ] Test: Submit a form, check email

---

**Do Step A first (Edge Function), then Step B (SQL)!** 🚀

