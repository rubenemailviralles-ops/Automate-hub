/**
 * Invisible Form Security Utilities
 * 
 * This file provides security validation for all forms
 * without any visual changes to the user experience.
 */

import { 
  validateFormInput, 
  validateEmail, 
  validatePhone, 
  sanitizeText, 
  detectSpam,
  generateFormToken,
  validateFormToken,
  logSecurityEvent,
  SECURITY_EVENTS 
} from './security';

// Form validation rules
const FORM_RULES = {
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s\-'\.]+$/
  },
  email: {
    maxLength: 254,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    minLength: 10,
    maxLength: 20,
    pattern: /^[\+]?[1-9][\d\s\-\(\)]{8,19}$/
  },
  message: {
    minLength: 10,
    maxLength: 1000
  },
  company: {
    minLength: 2,
    maxLength: 100,
    pattern: /^[a-zA-Z0-9\s\-'\.&,]+$/
  }
};

/**
 * Validate a single form field
 */
export const validateField = (fieldName: string, value: string): { isValid: boolean; error?: string } => {
  const rules = FORM_RULES[fieldName as keyof typeof FORM_RULES];
  if (!rules) return { isValid: true };

  // Check length
  if (rules.minLength && value.length < rules.minLength) {
    return { 
      isValid: false, 
      error: `${fieldName} must be at least ${rules.minLength} characters` 
    };
  }
  
  if (rules.maxLength && value.length > rules.maxLength) {
    return { 
      isValid: false, 
      error: `${fieldName} must be no more than ${rules.maxLength} characters` 
    };
  }

  // Check pattern
  if (rules.pattern && !rules.pattern.test(value)) {
    return { 
      isValid: false, 
      error: `Invalid ${fieldName} format` 
    };
  }

  // Security validation
  const securityCheck = validateFormInput(value);
  if (!securityCheck.isValid) {
    return { 
      isValid: false, 
      error: `Invalid characters in ${fieldName}` 
    };
  }

  return { isValid: true };
};

/**
 * Validate entire form with security checks
 */
export const validateForm = async (formData: Record<string, string>): Promise<{
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData: Record<string, string>;
}> => {
  const errors: Record<string, string> = {};
  const sanitizedData: Record<string, string> = {};

  // Check for spam
  if (detectSpam(formData)) {
    await logSecurityEvent(SECURITY_EVENTS.FORM_SPAM, {
      formData: Object.keys(formData)
    });
    return {
      isValid: false,
      errors: { general: 'Invalid submission detected' },
      sanitizedData: {}
    };
  }

  // Validate each field
  for (const [fieldName, value] of Object.entries(formData)) {
    const validation = validateField(fieldName, value);
    
    if (!validation.isValid) {
      errors[fieldName] = validation.error || 'Invalid input';
    } else {
      // Sanitize the value
      sanitizedData[fieldName] = sanitizeText(value);
    }
  }

  // Special validations
  if (formData.email && !validateEmail(formData.email)) {
    errors.email = 'Invalid email format';
  }

  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone = 'Invalid phone number format';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData
  };
};

/**
 * Add invisible security token to form
 */
export const addSecurityToken = (formData: Record<string, any>): Record<string, any> => {
  return {
    ...formData,
    _security_token: generateFormToken(),
    _timestamp: Date.now()
  };
};

/**
 * Validate security token
 */
export const validateSecurityToken = (token: string): boolean => {
  return validateFormToken(token);
};

/**
 * Rate limit check for forms
 */
export const checkFormRateLimit = async (formType: string): Promise<boolean> => {
  try {
    const isAllowed = await checkRateLimit(formType, 'client');
    if (!isAllowed) {
      await logSecurityEvent(SECURITY_EVENTS.RATE_LIMIT_EXCEEDED, {
        formType,
        endpoint: 'form_submission'
      });
    }
    return isAllowed;
  } catch (error) {
    console.error('Rate limit check failed:', error);
    return true; // Allow if check fails
  }
};

/**
 * Enhanced form submission with security
 */
export const secureFormSubmit = async (
  formType: string,
  formData: Record<string, string>,
  submitFunction: (data: Record<string, string>) => Promise<boolean>
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Check rate limiting
    const rateLimitOk = await checkFormRateLimit(formType);
    if (!rateLimitOk) {
      return { 
        success: false, 
        error: 'Too many requests. Please try again later.' 
      };
    }

    // Validate form
    const validation = await validateForm(formData);
    if (!validation.isValid) {
      return { 
        success: false, 
        error: 'Please check your input and try again.' 
      };
    }

    // Submit with sanitized data
    const success = await submitFunction(validation.sanitizedData);
    
    if (success) {
      // Log successful submission
      await logSecurityEvent('form_submission_success', {
        formType,
        fields: Object.keys(formData)
      });
    }

    return { success };
  } catch (error) {
    console.error('Form submission error:', error);
    return { 
      success: false, 
      error: 'An error occurred. Please try again.' 
    };
  }
};

/**
 * Check for suspicious form behavior
 */
export const detectSuspiciousFormBehavior = (formData: Record<string, string>): boolean => {
  // Check for rapid form submissions
  const lastSubmission = localStorage.getItem('last_form_submission');
  const now = Date.now();
  
  if (lastSubmission) {
    const timeDiff = now - parseInt(lastSubmission);
    if (timeDiff < 5000) { // Less than 5 seconds
      return true;
    }
  }
  
  // Update last submission time
  localStorage.setItem('last_form_submission', now.toString());
  
  // Check for suspicious patterns
  const allText = Object.values(formData).join(' ').toLowerCase();
  const suspiciousPatterns = [
    /test\s+test/i,
    /asdf/i,
    /qwerty/i,
    /123456/i,
    /password/i,
    /admin/i
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(allText));
};

/**
 * Initialize form security
 */
export const initializeFormSecurity = (): void => {
  // Clear old rate limit data
  const rateLimitKeys = Object.keys(localStorage).filter(key => 
    key.startsWith('rate_limit_')
  );
  
  const oneHourAgo = Date.now() - (60 * 60 * 1000);
  rateLimitKeys.forEach(key => {
    try {
      const data = JSON.parse(localStorage.getItem(key) || '{}');
      if (data.windowStart && data.windowStart < oneHourAgo) {
        localStorage.removeItem(key);
      }
    } catch {
      localStorage.removeItem(key);
    }
  });
};
