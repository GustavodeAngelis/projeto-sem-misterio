// Validação das variáveis de ambiente
const validateEnv = () => {
  const requiredEnvVars = ['VITE_MAILERLITE_API_KEY', 'VITE_MAILERLITE_GROUP_ID'];
  const missingVars = requiredEnvVars.filter(varName => !import.meta.env[varName]);
  
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
};

// Validação do ambiente
validateEnv();

// Configuração do MailerLite
export const mailerLiteConfig = {
  apiKey: import.meta.env.VITE_MAILERLITE_API_KEY as string,
  groupId: import.meta.env.VITE_MAILERLITE_GROUP_ID as string,
  baseUrl: 'https://connect.mailerlite.com/api',
  rateLimit: {
    maxRequests: 100, // máximo de requisições
    perMinute: 1, // por minuto
  }
}; 