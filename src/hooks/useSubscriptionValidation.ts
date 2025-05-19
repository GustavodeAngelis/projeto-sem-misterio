
import { useState } from "react";
import { z } from "zod";

export interface FormData {
  name: string;
  email: string;
  whatsapp: string;
}

export interface FormErrors {
  email?: string;
}

export const useSubscriptionValidation = (formData: FormData) => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const emailSchema = z.string().email("Por favor, forneça um e-mail válido");
    try {
      emailSchema.parse(formData.email);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrors({email: err.errors[0].message});
      }
      return false;
    }
  };

  const clearEmailError = () => {
    if (errors.email) {
      setErrors({...errors, email: undefined});
    }
  };

  return {
    errors,
    validateForm,
    clearEmailError
  };
};
