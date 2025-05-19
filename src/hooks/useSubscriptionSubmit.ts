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
  const usingDemoConfig = isUsingDemoConfig(); // Sempre será false agora

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

      // Save data to MailerLite
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
        
        console.log("Data sent successfully to MailerLite");
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
          console.warn("MailerLite error details:", mailerLiteError);
          toast({
            title: "Aviso",
            description: "Sua inscrição foi registrada, mas houve um problema com a integração de email.",
            variant: "default"
          });
        }
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
      
      // Redirect to thank you page
      setTimeout(() => {
        window.location.href = "https://evento-ayumi-projetos.lovable.app/obrigado";
      }, 1500);
      
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
