# Google Analytics 4 Setup Guide

## ✅ Analytics Already Installed!

Google Analytics 4 tracking code has been added to your website. You just need to replace the placeholder tracking ID with your actual one.

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Start measuring"** or **"Admin"** (bottom left)
3. Click **"Create Account"**
   - Account name: `Automate Hub`
   - Check all data sharing settings (optional but recommended)
4. Click **"Next"**

### Step 2: Create Property

1. Property name: `Automate Hub Website`
2. Reporting time zone: Your timezone
3. Currency: USD (or your currency)
4. Click **"Next"**

### Step 3: Add Business Information

1. Industry: `Technology` or `Business Services`
2. Business size: Select your size
3. How you plan to use Analytics: Check relevant boxes
4. Click **"Create"**
5. Accept Terms of Service

### Step 4: Set Up Data Stream

1. Choose **"Web"**
2. Website URL: `https://automate-hub.com` (or your actual domain)
3. Stream name: `Automate Hub Main Site`
4. Click **"Create stream"**

### Step 5: Get Your Measurement ID

After creating the stream, you'll see:
- **Measurement ID**: `G-XXXXXXXXXX` (looks like G-ABC1234567)

**Copy this ID!**

---

## 📝 Step 6: Update Your Website

### Option A: Update in Your Code

Open `index.html` and replace **BOTH** instances of `G-XXXXXXXXXX` with your actual Measurement ID:

```html
<!-- Line 51: Replace G-XXXXXXXXXX -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ACTUAL-ID"></script>

<!-- Line 58: Replace G-XXXXXXXXXX -->
gtag('config', 'G-YOUR-ACTUAL-ID', {
```

### Option B: Use Find & Replace

1. Open your code editor
2. Press `Ctrl+H` (Windows) or `Cmd+H` (Mac)
3. Find: `G-XXXXXXXXXX`
4. Replace with: Your actual Measurement ID (e.g., `G-ABC1234567`)
5. Replace all (should be 2 replacements in `index.html`)

---

## ✅ Step 7: Deploy & Test

1. **Commit your changes:**
   ```bash
   git add index.html
   git commit -m "Add Google Analytics tracking ID"
   git push origin main
   ```

2. **Wait for deployment** (~2-3 minutes on Render)

3. **Test Analytics:**
   - Visit your live site
   - Go back to Google Analytics
   - Click **"Realtime"** in the left sidebar
   - You should see yourself as an active user!

---

## 📊 What's Being Tracked

Your site automatically tracks:

✅ **Page Views** - Every page visit
✅ **User Sessions** - How long users stay
✅ **Traffic Sources** - Where visitors come from
✅ **Device Types** - Desktop, mobile, tablet
✅ **Geographic Data** - Where users are located
✅ **User Behavior** - Navigation paths

---

## 🎯 Custom Event Tracking (Optional)

We've created utility functions for tracking custom events. Here's how to use them:

### Track Button Clicks

```typescript
import { trackButtonClick } from './utils/analytics';

// In your component:
<button onClick={() => {
  trackButtonClick('Book Consultation', 'hero');
  // ... rest of your logic
}}>
  Book Consultation
</button>
```

### Track Form Submissions

```typescript
import { trackFormSubmit } from './utils/analytics';

const handleSubmit = (e) => {
  e.preventDefault();
  // ... your form logic
  trackFormSubmit('contact_form', true);
};
```

### Track CTA Clicks

```typescript
import { trackCTAClick } from './utils/analytics';

<Link 
  to="/book-consultation"
  onClick={() => trackCTAClick('Free Consultation', 'header')}
>
  Get Started
</Link>
```

### All Available Functions

See `src/utils/analytics.ts` for:
- `trackEvent()` - Generic event tracking
- `trackPageView()` - Manual page view tracking
- `trackButtonClick()` - Button clicks
- `trackFormSubmit()` - Form submissions
- `trackCTAClick()` - CTA clicks
- `trackServiceView()` - Service page views
- `trackConsultationBooking()` - Consultation bookings
- `trackEmailContact()` - Email contact attempts
- `trackScrollDepth()` - How far users scroll

---

## 🔍 Where to View Analytics

### Real-Time Data
- **Realtime** → See current visitors

### Key Reports
- **Reports** → **Life cycle** → **Acquisition** → Where traffic comes from
- **Reports** → **Life cycle** → **Engagement** → How users interact
- **Reports** → **User** → **Demographics** → Who your users are

### Important Metrics to Watch
- 📊 **Users** - Total visitors
- 📄 **Page Views** - Total page loads
- ⏱️ **Average Session Duration** - How long people stay
- 📱 **Device Breakdown** - Desktop vs Mobile
- 🌍 **Top Countries** - Geographic distribution
- 🔝 **Top Pages** - Most visited pages

---

## 🛡️ Privacy & GDPR Compliance

Your Analytics is configured with:
- ✅ **IP Anonymization** - User IPs are anonymized
- ✅ **Secure Cookies** - SameSite=None;Secure flags
- ✅ **Auto Page Views** - Tracks navigation automatically

**Note:** Consider adding a cookie consent banner if you have EU traffic. Popular options:
- [Cookiebot](https://www.cookiebot.com/)
- [OneTrust](https://www.onetrust.com/)
- [Termly](https://termly.io/)

---

## 🎯 Goals & Conversions (Advanced)

Once you have your Measurement ID set up, you can track conversions:

1. Go to **Admin** → **Events**
2. Click **"Create event"**
3. Name it (e.g., `consultation_booking`)
4. Set conditions based on tracked events
5. Mark as conversion

---

## 🆘 Troubleshooting

### "No data showing up"
- ✅ Check you replaced `G-XXXXXXXXXX` with your actual ID
- ✅ Clear browser cache and reload
- ✅ Wait 24 hours (historical data takes time)
- ✅ Check "Realtime" for immediate validation

### "Tracking blocked"
- ✅ Disable ad blockers when testing
- ✅ Try in incognito/private mode
- ✅ Check browser console for errors

### "Multiple tracking IDs"
- ✅ Make sure you replaced BOTH instances in index.html

---

## 📚 Resources

- [Google Analytics Help Center](https://support.google.com/analytics)
- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Analytics Academy](https://analytics.google.com/analytics/academy/)

---

## ✨ You're All Set!

Once you add your Measurement ID and deploy, you'll start collecting valuable data about your visitors!

**Questions?** Check the [Google Analytics Help Center](https://support.google.com/analytics) or ask me!

