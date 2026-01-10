/**
 * Validators génériques
 */

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};

export const isValidImage = (url: string): boolean => {
  return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url);
};

export const sanitizeString = (str: string): string => {
  return str.trim().replace(/\s+/g, ' ');
};