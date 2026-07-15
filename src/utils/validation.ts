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
 * Validates that the input is a valid 10-digit Indian mobile number.
 * Allows optional country prefixes like +91, 91, or 0, and strips spaces/hyphens/parentheses.
 * @param phone Contact number to validate
 * @returns Error message if invalid, empty string if valid
 */
export function validatePhone(phone: string): string {
  const trimmed = phone.trim();
  if (!trimmed) {
    return 'Contact Number is required.';
  }
  
  // Strip spaces, hyphens, and parentheses
  const cleanPhone = trimmed.replace(/[\s\-()]/g, '');
  
  // Indian mobile numbers start with 6, 7, 8, or 9 and are exactly 10 digits
  const indianMobileRegex = /^(?:\+91|91|0)?([6-9]\d{9})$/;
  
  if (!indianMobileRegex.test(cleanPhone)) {
    return 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210 or +91 98765 43210).';
  }
  
  return '';
}
