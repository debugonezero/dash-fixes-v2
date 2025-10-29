/**
 * Generate a unique service request number
 * Format: Simple 6-digit numeric code (e.g., "123456")
 * Easy to type and remember for customers
 */
export function generateServiceNumber(): string {
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
}

/**
 * Validate service number format
 * 6-digit numeric code
 */
export function isValidServiceNumber(serviceNumber: string): boolean {
  if (!serviceNumber || typeof serviceNumber !== 'string') {
    return false;
  }

  // Remove spaces for validation
  const cleanNumber = serviceNumber.replace(/\s/g, '');

  // Check length
  if (cleanNumber.length !== 6) {
    return false;
  }

  // Check pattern (exactly 6 digits)
  const pattern = /^\d{6}$/;
  return pattern.test(cleanNumber);
}

/**
 * Normalize service number (remove spaces and invalid chars)
 */
export function normalizeServiceNumber(serviceNumber: string): string {
  if (!serviceNumber || typeof serviceNumber !== 'string') {
    return '';
  }

  return serviceNumber
    .replace(/[^\d]/g, '') // Remove non-digits
    .slice(0, 6); // Limit to 6 digits
}

/**
 * Format service number for display
 */
export function formatServiceNumber(serviceNumber: string): string {
  const normalized = normalizeServiceNumber(serviceNumber);
  // Format as XXX-XXX for readability
  return normalized.replace(/(\d{3})(\d{3})/, '$1-$2');
}