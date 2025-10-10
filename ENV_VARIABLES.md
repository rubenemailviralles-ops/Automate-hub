# Environment Variables

Copy these to your `.env` file or set them in your deployment environment (Render).

## Sentry Error Tracking

Get these values from [sentry.io](https://sentry.io) after creating your project:

```env
VITE_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
SENTRY_AUTH_TOKEN=your-sentry-auth-token-here
SENTRY_ORG=your-sentry-org-name
SENTRY_PROJECT=your-sentry-project-name
```

## Application Version

```env
VITE_APP_VERSION=1.0.0
```

## Google Analytics (Optional)

Replace with your actual GA4 Measurement ID from analytics.google.com:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## Setting Up in Render

1. Go to your service in Render dashboard
2. Click "Environment" tab
3. Add each environment variable as a key-value pair
4. Click "Save Changes"
5. Redeploy

---

## Local Development

Create a `.env` file in the project root:

```env
# .env
VITE_SENTRY_DSN=https://your-dsn@sentry.io/123456
VITE_APP_VERSION=1.0.0
```

**Note:** `.env` is gitignored - never commit it to the repository!

