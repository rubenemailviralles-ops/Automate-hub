import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'number';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  min?: number;
  max?: number;
  step?: number;
}

/**
 * Accessible form field component with ARIA live regions for validation
 */
const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  placeholder,
  rows = 4,
  min,
  max,
  step,
}) => {
  const hasError = Boolean(error);
  const errorId = `${id}-error`;
  const helpId = `${id}-help`;

  const commonProps = {
    id,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
      onChange(e.target.value),
    className: `w-full bg-white/5 border ${
      hasError ? 'border-red-500' : 'border-white/10'
    } rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`,
    placeholder,
    required,
    'aria-required': required,
    'aria-invalid': hasError,
    'aria-describedby': hasError ? errorId : undefined,
  };

  return (
    <div className="mb-6">
      <label 
        htmlFor={id} 
        className="block text-white font-medium mb-2 text-sm"
      >
        {label}
        {required && (
          <span className="text-red-400 ml-1" aria-label="required">*</span>
        )}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          {...commonProps}
          rows={rows}
        />
      ) : (
        <input
          {...commonProps}
          type={type}
          min={min}
          max={max}
          step={step}
        />
      )}
      
      {/* ARIA live region for error messages */}
      {hasError && (
        <div
          id={errorId}
          role="alert"
          aria-live="polite"
          aria-atomic="true"
          className="mt-2 text-red-400 text-sm flex items-start"
        >
          <svg 
            className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path 
              fillRule="evenodd" 
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
              clipRule="evenodd" 
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default FormField;

