
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { createOrUpdateSubscriber } from "@/integrations/mailerlite/client";
import { isUsingDemoConfig } from "@/config/mailerlite";

export interface FormData {
  name: string;
  email: string;
  whatsapp: string;
}

export const useSubscriptionSubmit = (
  formData: FormData, 
  validateForm: () => boolean,
  resetForm: () => void
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const usingDemoConfig = isUsingDemoConfig();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Save data to Supabase
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            whatsapp: formData.whatsapp,
            source: "lp_forma_forca"
          }
        ]);
      
      if (supabaseError) {
        console.error("Error submitting form to Supabase:", supabaseError);
        toast({
          title: "Erro ao enviar formulário",
          description: "Por favor, tente novamente mais tarde.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }

      // Save data to MailerLite if not using demo config
      if (!usingDemoConfig) {
        try {
          await createOrUpdateSubscriber({
            email: formData.email,
            fields: {
              name: formData.name,
              whatsapp: formData.whatsapp,
              country: "Brazil",
              source: "evento_forma_forca_jun_25"
            }
          });
        } catch (mailerLiteError: any) {
          console.error("Error submitting form to MailerLite:", mailerLiteError);
          
          // Handle rate limit errors
          if (mailerLiteError.message?.includes('Rate limit exceeded')) {
            toast({
              title: "Aviso",
              description: "O sistema está com muitas requisições. Sua inscrição foi registrada, mas pode demorar um pouco para receber as comunicações.",
              variant: "default"
            });
          } else {
            // For other MailerLite errors, we log but don't interrupt the flow
            console.warn("MailerLite error details:", mailerLiteError);
          }
        }
      } else {
        // Log when using demo config
        console.log("Using demo MailerLite config - would have sent:", {
          email: formData.email,
          fields: {
            name: formData.name,
            whatsapp: formData.whatsapp,
            country: "Brazil",
            source: "evento_forma_forca_jun_25"
          }
        });
      }
      
      console.log("Form submitted successfully");
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Redirecionando para a página de agradecimento...",
      });
      
      // Clear form data
      resetForm();
      
      // In demo mode, don't redirect
      if (!usingDemoConfig) {
        // Redirect to the thank you page after a short delay
        setTimeout(() => {
          window.location.href = "https://obrigado-evento-ayumi.lovable.app";
        }, 1500);
      } else {
        // Just show a message in demo mode
        toast({
          title: "Modo de demonstração",
          description: "Em produção, você seria redirecionado para a página de agradecimento.",
          duration: 5000,
        });
      }
      
    } catch (err) {
      console.error("Error:", err);
      setIsSubmitting(false);
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive"
      });
    }
  };

  return {
    isSubmitting,
    isSubmitted,
    handleSubmit,
    usingDemoConfig
  };
};
