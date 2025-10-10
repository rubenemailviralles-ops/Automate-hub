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

