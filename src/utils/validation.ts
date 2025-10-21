/**
 * Form Validation Utilities
 * Provides validation functions with descriptive error messages
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validate email format
 */
export const validateEmail = (email: string): ValidationResult => {
  if (!email || email.trim() === '') {
    return { isValid: false, error: 'Email address is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  return { isValid: true };
};

/**
 * Validate required text field
 */
export const validateRequired = (value: string, fieldName: string): ValidationResult => {
  if (!value || value.trim() === '') {
    return { isValid: false, error: `${fieldName} is required` };
  }

  if (value.trim().length < 2) {
    return { isValid: false, error: `${fieldName} must be at least 2 characters` };
  }

  return { isValid: true };
};

/**
 * Validate phone number
 */
export const validatePhone = (phone: string): ValidationResult => {
  if (!phone || phone.trim() === '') {
    return { isValid: false, error: 'Phone number is required' };
  }

  // Remove all non-digit characters for validation
  const digitsOnly = phone.replace(/\D/g, '');
  
  if (digitsOnly.length < 10) {
    return { isValid: false, error: 'Phone number must be at least 10 digits' };
  }

  return { isValid: true };
};

/**
 * Validate message/textarea
 */
export const validateMessage = (message: string, minLength = 10): ValidationResult => {
  if (!message || message.trim() === '') {
    return { isValid: false, error: 'Message is required' };
  }

  if (message.trim().length < minLength) {
    return { 
      isValid: false, 
      error: `Message must be at least ${minLength} characters (currently ${message.trim().length})` 
    };
  }

  return { isValid: true };
};

/**
 * Validate number range
 */
export const validateNumber = (
  value: string | number,
  fieldName: string,
  min?: number,
  max?: number
): ValidationResult => {
  const num = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(num)) {
    return { isValid: false, error: `${fieldName} must be a valid number` };
  }

  if (min !== undefined && num < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min}` };
  }

  if (max !== undefined && num > max) {
    return { isValid: false, error: `${fieldName} must be at most ${max}` };
  }

  return { isValid: true };
};

/**
 * Validate company name
 */
export const validateCompany = (company: string): ValidationResult => {
  if (!company || company.trim() === '') {
    return { isValid: false, error: 'Company name is required' };
  }

  if (company.trim().length < 2) {
    return { isValid: false, error: 'Company name must be at least 2 characters' };
  }

  return { isValid: true };
};

/**
 * Validate full form and return all errors
 */
export interface FormErrors {
  [key: string]: string;
}

export const validateForm = (
  fields: { [key: string]: any },
  validators: { [key: string]: (value: any) => ValidationResult }
): FormErrors => {
  const errors: FormErrors = {};

  Object.keys(validators).forEach((fieldName) => {
    const validator = validators[fieldName];
    const value = fields[fieldName];
    const result = validator(value);

    if (!result.isValid && result.error) {
      errors[fieldName] = result.error;
    }
  });

  return errors;
};

/**
 * Check if form has any errors
 */
export const hasFormErrors = (errors: FormErrors): boolean => {
  return Object.keys(errors).length > 0;
};

/**
 * Sanitize user input to prevent XSS attacks
 * Removes potentially dangerous characters and HTML tags
 */
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  return input
    .trim()
    // Remove HTML tags
    .replace(/<[^>]*>/g, '')
    // Remove script tags and content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove event handlers
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
    // Remove javascript: protocol
    .replace(/javascript:/gi, '')
    // Limit length to prevent DoS
    .substring(0, 10000);
};

/**
 * Sanitize all fields in a form object
 */
export const sanitizeFormData = <T extends Record<string, any>>(formData: T): T => {
  const sanitized = { ...formData };
  
  Object.keys(sanitized).forEach((key) => {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitizeInput(sanitized[key]);
    }
  });
  
  return sanitized;
};

/**
 * Validate URL format
 */
export const validateURL = (url: string): ValidationResult => {
  if (!url || url.trim() === '') {
    return { isValid: false, error: 'URL is required' };
  }

  try {
    new URL(url);
    // Only allow http and https protocols
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return { isValid: false, error: 'URL must start with http:// or https://' };
    }
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Please enter a valid URL' };
  }
};

/**
 * Rate limiting helper - Check if too many requests
 * Usage: Store timestamps in localStorage and check intervals
 */
export const checkRateLimit = (
  key: string,
  maxAttempts: number,
  timeWindowMs: number
): boolean => {
  try {
    const now = Date.now();
    const attemptsKey = `ratelimit_${key}`;
    const stored = localStorage.getItem(attemptsKey);
    const attempts: number[] = stored ? JSON.parse(stored) : [];
    
    // Remove old attempts outside time window
    const recentAttempts = attempts.filter(
      timestamp => now - timestamp < timeWindowMs
    );
    
    // Check if limit exceeded
    if (recentAttempts.length >= maxAttempts) {
      return false; // Rate limit exceeded
    }
    
    // Add current attempt
    recentAttempts.push(now);
    localStorage.setItem(attemptsKey, JSON.stringify(recentAttempts));
    
    return true; // Within rate limit
  } catch {
    // If localStorage fails, allow the action
    return true;
  }
};

