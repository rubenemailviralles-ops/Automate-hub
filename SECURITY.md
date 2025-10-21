# Security Policy

## Security Measures

This website implements multiple layers of security to protect user data and prevent common web attacks.

### 1. HTTP Security Headers

We implement strict security headers via `netlify.toml`:

- **Strict-Transport-Security (HSTS)**: Forces HTTPS for 2 years, including subdomains
- **X-Content-Type-Options**: Prevents MIME type sniffing attacks
- **X-Frame-Options**: Prevents clickjacking by denying iframe embedding
- **X-XSS-Protection**: Enables browser XSS protection (legacy browsers)
- **Content-Security-Policy (CSP)**: Restricts resource loading to trusted sources only
- **Referrer-Policy**: Controls referrer information sent to other sites
- **Permissions-Policy**: Restricts browser features (camera, geolocation, etc.)

### 2. Input Validation & Sanitization

All user inputs are:
- **Validated** using strict regex patterns and length limits
- **Sanitized** to remove HTML tags, scripts, and event handlers
- **Length-limited** to prevent DoS attacks (max 10,000 characters per field)
- **Type-checked** for expected data types

See `src/utils/validation.ts` for implementation details.

###3. Rate Limiting

Contact forms implement client-side rate limiting:
- **Maximum 3 submissions per 5 minutes** per user
- Prevents spam and brute force attacks
- Uses localStorage to track submission attempts

### 4. Form Security

Contact forms include:
- Required field validation with descriptive error messages
- Email format validation
- Phone number format validation
- Message length validation (minimum 20 characters)
- XSS attack prevention through input sanitization
- ARIA attributes for accessibility and security
- Maximum input lengths on all fields

### 5. HTTPS Enforcement

- All HTTP traffic is redirected to HTTPS
- WWW subdomain redirects to non-WWW
- Forced HTTPS via Netlify redirects and HSTS header

### 6. Content Security Policy (CSP)

Our CSP allows only:
- Scripts from: self, Google Analytics, Vapi.ai
- Styles from: self, Google Fonts
- Connections to: self, Supabase, Vapi.ai, Google Analytics
- No inline scripts (except whitelisted)
- No eval() or similar dangerous functions
- Frame ancestors: none (prevents clickjacking)

### 7. Privacy Protection

- No DNS prefetching (prevents DNS leakage)
- Strict referrer policy
- Minimal data collection
- No third-party cookies

## Reporting Security Issues

If you discover a security vulnerability, please email us at:
**security@automate-hub.com**

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

**Do not** publicly disclose security issues until they have been addressed.

## Security Best Practices for Developers

### When Adding New Features:

1. **Always sanitize user input** using `sanitizeInput()` or `sanitizeFormData()`
2. **Validate all inputs** using the validation functions in `src/utils/validation.ts`
3. **Use prepared statements** if querying databases (prevents SQL injection)
4. **Never trust client-side data** - always validate on the server
5. **Keep dependencies updated** - run `npm audit` regularly
6. **Use HTTPS for all API calls**
7. **Don't store sensitive data** in localStorage or cookies
8. **Implement rate limiting** for all user-facing endpoints

### Environment Variables:

Never commit sensitive data to the repository. Use environment variables for:
- API keys
- Database credentials
- Authentication secrets
- Third-party service tokens

See `.env.example` for the template.

## Security Checklist

- [x] HTTPS enforced site-wide
- [x] Security headers implemented
- [x] Content Security Policy (CSP)
- [x] Input validation on all forms
- [x] XSS protection via sanitization
- [x] Rate limiting on forms
- [x] No sensitive data in client-side code
- [x] Regular dependency updates
- [x] Accessibility features (ARIA)
- [x] Privacy-focused (minimal tracking)

## Updates

This security policy is reviewed and updated quarterly. Last update: October 2025.

## Compliance

This website follows:
- OWASP Top 10 security guidelines
- GDPR privacy requirements (where applicable)
- WCAG 2.1 accessibility standards
- Industry best practices for web security

## Technical Stack Security

### Frontend:
- React 18+ (latest security patches)
- Vite (secure build tool)
- TypeScript (type safety)

### Backend/Services:
- Supabase (secure database with RLS)
- Netlify (SOC 2 compliant hosting)
- Google Analytics (privacy-focused configuration)

### Dependencies:
- Regular security audits with `npm audit`
- Automated dependency updates via Dependabot
- Manual review of all dependency changes

## Contact

For security questions or concerns:
- Email: security@automate-hub.com
- Response time: Within 24 hours for critical issues

