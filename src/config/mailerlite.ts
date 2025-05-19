
// Validation mode for environment variables
const isProduction = import.meta.env.PROD;

// Check for required environment variables
const validateEnv = () => {
  const requiredEnvVars = ['VITE_MAILERLITE_API_KEY', 'VITE_MAILERLITE_GROUP_ID'];
  const missingVars = requiredEnvVars.filter(varName => !import.meta.env[varName]);
  
  if (missingVars.length > 0) {
    if (isProduction) {
      console.error(`Missing environment variables: ${missingVars.join(', ')}`);
      console.error('These variables are required for production. Please set them in your deployment settings.');
    } else {
      console.warn(`Missing environment variables: ${missingVars.join(', ')}`);
      console.warn('Using demo values for now. Set these in your .env file for development.');
    }
  }
};

// Validation of environment
validateEnv();

// Configuration with real values
export const mailerLiteConfig = {
  apiKey: import.meta.env.VITE_MAILERLITE_API_KEY || 'demo-api-key',
  groupId: import.meta.env.VITE_MAILERLITE_GROUP_ID || 'demo-group-id',
  baseUrl: 'https://connect.mailerlite.com/api',
  rateLimit: {
    maxRequests: 100, // maximum requests
    perMinute: 1, // per minute
  }
};

// Helper to check if we're using demo values
export const isUsingDemoConfig = () => {
  return !import.meta.env.VITE_MAILERLITE_API_KEY || 
         !import.meta.env.VITE_MAILERLITE_GROUP_ID || 
         mailerLiteConfig.apiKey === 'demo-api-key' || 
         mailerLiteConfig.groupId === 'demo-group-id';
};
