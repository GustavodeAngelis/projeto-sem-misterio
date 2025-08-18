
import axios from 'axios';
import { mailerLiteConfig } from '@/config/mailerlite';

// Simple rate limiter implementation
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

    // Remove old requests
    this.requests = this.requests.filter(time => time > oneMinuteAgo);

    // Check if limit reached
    if (this.requests.length >= this.maxRequests) {
      return false;
    }

    // Add new request
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

// Subscriber data validation
const validateSubscriber = (subscriber: MailerLiteSubscriber): void => {
  if (!subscriber.email) {
    throw new Error('Email is required');
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(subscriber.email)) {
    throw new Error('Invalid email format');
  }

  // Field length validation
  if (subscriber.fields?.name && subscriber.fields.name.length > 100) {
    throw new Error('Name is too long');
  }
  if (subscriber.fields?.whatsapp && subscriber.fields.whatsapp.length > 20) {
    throw new Error('WhatsApp number is too long');
  }
};

export const createOrUpdateSubscriber = async (subscriber: MailerLiteSubscriber) => {
  try {
    // Validate data
    validateSubscriber(subscriber);

    // Check rate limit
    const canProceed = await rateLimiter.checkLimit();
    if (!canProceed) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }

    console.log('Sending data to MailerLite with production API key');
    
    const response = await mailerLiteClient.post('/subscribers', {
      ...subscriber,
      groups: [mailerLiteConfig.groupId],
      // Ensure existing contacts are re-subscribed without error
      resubscribe: true
    });
    
    console.log('MailerLite API response:', response.status);
    return response.data;
  } catch (error: any) {
    // If subscriber already exists, treat as non-fatal when resubscribing
    const status = error?.response?.status;
    if (status === 409) {
      console.warn('Subscriber already exists in MailerLite; treating as success.');
      return { ok: true, status };
    }
    console.error('Error creating/updating MailerLite subscriber:', error?.response?.data || error?.message || error);
    throw error;
  }
};

export default mailerLiteClient;

