/**
 * Utility functions for form input validation.
 */

/**
 * Validates the patient's full name.
 * Name must not be empty, must be at least 3 characters long, and must not contain digits.
 * @param name Full name to validate
 * @returns Error message if invalid, empty string if valid
 */
export function validateName(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) {
    return 'Full Name is required.';
  }
  if (trimmed.length < 3) {
    return 'Full Name must be at least 3 characters.';
  }
  if (/\d/.test(trimmed)) {
    return 'Name must not contain numbers.';
  }
  return '';
}

/**
 * Validates that the input is a valid 10-digit Indian mobile number or valid international number.
 * Allows optional country prefixes like +91, 91, or 0, and strips spaces, hyphens, dots, slashes, and parentheses.
 * Provides clear, actionable error feedback indicating digit counts.
 * @param phone Contact number to validate
 * @returns Error message if invalid, empty string if valid
 */
export function validatePhone(phone: string): string {
  const trimmed = phone.trim();
  if (!trimmed) {
    return 'Contact Number is required.';
  }
  
  // Strip spaces, hyphens, dots, slashes, and parentheses
  const cleanPhone = trimmed.replace(/[\s\-.()/]/g, '');
  
  // Ensure the string contains only digits (with optional leading +)
  if (!/^\+?[\d]+$/.test(cleanPhone)) {
    return 'Please enter a valid contact number containing only digits.';
  }

  // Support international phone numbers with country code (e.g. +1, +44, +971)
  if (cleanPhone.startsWith('+') && !cleanPhone.startsWith('+91')) {
    const digits = cleanPhone.slice(1);
    if (digits.length < 7) {
      return 'International number is too short (minimum 7 digits required).';
    }
    if (digits.length > 15) {
      return 'International number is too long (maximum 15 digits allowed).';
    }
    return '';
  }

  // Extract the core 10-digit Indian national number
  let nationalDigits = cleanPhone;
  if (nationalDigits.startsWith('+91')) {
    nationalDigits = nationalDigits.slice(3);
  } else if (nationalDigits.startsWith('91') && nationalDigits.length > 10) {
    nationalDigits = nationalDigits.slice(2);
  } else if (nationalDigits.startsWith('0') && nationalDigits.length > 10) {
    nationalDigits = nationalDigits.slice(1);
  }

  // Verify digit count for Indian mobile numbers
  if (nationalDigits.length < 10) {
    return `Phone number is too short (${nationalDigits.length} digits entered). Please enter a 10-digit Indian mobile number (e.g. +91 98765 43210).`;
  }
  if (nationalDigits.length > 10) {
    return `Phone number has too many digits (${nationalDigits.length} digits). Please enter a 10-digit mobile number.`;
  }

  // Indian mobile numbers must start with 6, 7, 8, or 9
  if (!/^[6-9]/.test(nationalDigits)) {
    return 'Indian mobile numbers must start with 6, 7, 8, or 9.';
  }

  return '';
}
