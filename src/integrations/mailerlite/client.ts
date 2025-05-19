import axios from 'axios';
import { mailerLiteConfig } from '@/config/mailerlite';

// Implementação simples de rate limiting
class RateLimiter {
  private requests: number[] = [];
  private readonly maxRequests: number;
  private readonly perMinute: number;

  constructor(maxRequests: number, perMinute: number) {
    this.maxRequests = maxRequests;
    this.perMinute = perMinute;
  }

  async checkLimit(): Promise<boolean> {
    const now = Date.now();
    const oneMinuteAgo = now - 60000;

    // Remove requisições antigas
    this.requests = this.requests.filter(time => time > oneMinuteAgo);

    // Verifica se atingiu o limite
    if (this.requests.length >= this.maxRequests) {
      return false;
    }

    // Adiciona nova requisição
    this.requests.push(now);
    return true;
  }
}

const rateLimiter = new RateLimiter(
  mailerLiteConfig.rateLimit.maxRequests,
  mailerLiteConfig.rateLimit.perMinute
);

const mailerLiteClient = axios.create({
  baseURL: mailerLiteConfig.baseUrl,
  headers: {
    'Authorization': `Bearer ${mailerLiteConfig.apiKey}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export interface MailerLiteSubscriber {
  email: string;
  fields?: {
    name?: string;
    last_name?: string;
    whatsapp?: string;
    country?: string;
    source?: string;
  };
  groups?: string[];
}

// Validação dos dados do subscriber
const validateSubscriber = (subscriber: MailerLiteSubscriber): void => {
  if (!subscriber.email) {
    throw new Error('Email is required');
  }

  // Validação básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(subscriber.email)) {
    throw new Error('Invalid email format');
  }

  // Validação do tamanho dos campos
  if (subscriber.fields?.name && subscriber.fields.name.length > 100) {
    throw new Error('Name is too long');
  }
  if (subscriber.fields?.whatsapp && subscriber.fields.whatsapp.length > 20) {
    throw new Error('WhatsApp number is too long');
  }
};

export const createOrUpdateSubscriber = async (subscriber: MailerLiteSubscriber) => {
  try {
    // Validação dos dados
    validateSubscriber(subscriber);

    // Verifica rate limit
    const canProceed = await rateLimiter.checkLimit();
    if (!canProceed) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }

    const response = await mailerLiteClient.post('/subscribers', {
      ...subscriber,
      groups: [mailerLiteConfig.groupId]
    });
    return response.data;
  } catch (error) {
    console.error('Error creating/updating MailerLite subscriber:', error);
    throw error;
  }
};

export default mailerLiteClient; 