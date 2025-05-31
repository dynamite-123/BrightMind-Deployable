
/**
 * API utilities for making requests to backend
 */

// Get API URL from environment variables, with fallback
export const API_URL = 
  process.env.NEXT_PUBLIC_API_URL || 'https://brightmind-deployable.onrender.com';

/**
 * Helper function to construct API endpoints
 * @param path - The endpoint path (should start with '/')
 * @returns Full API URL with path
 */
export const getApiUrl = (path: string): string => {
  // Make sure path starts with '/'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_URL}${normalizedPath}`;
};

/**
 * Creates default headers for API requests
 * @param token - Optional auth token
 * @returns Headers object with Content-Type and optional Authorization
 */
export const createHeaders = (token?: string | null) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return headers;
};
