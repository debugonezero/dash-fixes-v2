/**
 * Generate a unique service request number
 * Format: Simple 8-character alphanumeric code (e.g., "A1B2C3D4")
 * Similar to airline reservation codes - easy to type and remember
 */
export function generateServiceNumber(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Removed confusing chars like 0,O,I,1
  let result = '';

  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
}

/**
 * Validate service number format
 * 8-character alphanumeric code using safe characters
 */
export function isValidServiceNumber(serviceNumber: string): boolean {
  if (!serviceNumber || typeof serviceNumber !== 'string') {
    return false;
  }

  // Remove spaces and convert to uppercase for validation
  const cleanNumber = serviceNumber.replace(/\s/g, '').toUpperCase();

  // Check length
  if (cleanNumber.length !== 8) {
    return false;
  }

  // Check pattern (letters A-H, J-K, M-N, P-Z and numbers 2-9)
  const pattern = /^[A-HJ-KMNP-Z2-9]{8}$/;
  return pattern.test(cleanNumber);
}

/**
 * Normalize service number (convert to uppercase, remove spaces and invalid chars)
 */
export function normalizeServiceNumber(serviceNumber: string): string {
  if (!serviceNumber || typeof serviceNumber !== 'string') {
    return '';
  }

  return serviceNumber
    .toUpperCase()
    .replace(/[^A-HJ-KMNP-Z2-9]/g, '') // Remove spaces and invalid characters
    .slice(0, 8); // Limit to 8 characters
}

/**
 * Format service number for display
 */
export function formatServiceNumber(serviceNumber: string): string {
  const normalized = normalizeServiceNumber(serviceNumber);
  // Add spaces for readability: ABCD EFGH
  return normalized.replace(/(.{4})(.{4})/, '$1 $2');
}