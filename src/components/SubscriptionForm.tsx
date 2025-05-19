import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { createOrUpdateSubscriber } from "@/integrations/mailerlite/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";

interface SubscriptionFormProps {
  className?: string;
  buttonSize?: "normal" | "large";
  showHeadline?: boolean;
}

const SubscriptionForm: React.FC<SubscriptionFormProps> = ({ 
  className = "", 
  buttonSize = "normal", 
  showHeadline = false
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{email?: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear errors when user types in the field
    if (name === 'email' && errors.email) {
      setErrors({...errors, email: undefined});
    }
  };

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
      } catch (mailerLiteError: any) {
        console.error("Error submitting form to MailerLite:", mailerLiteError);
        
        // Tratamento específico para erros de rate limit
        if (mailerLiteError.message?.includes('Rate limit exceeded')) {
          toast({
            title: "Aviso",
            description: "O sistema está com muitas requisições. Sua inscrição foi registrada, mas pode demorar um pouco para receber as comunicações.",
            variant: "default"
          });
        } else {
          // Para outros erros do MailerLite, apenas logamos mas não interrompemos o fluxo
          console.warn("MailerLite error details:", mailerLiteError);
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
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
      });
      
      // Redirect to the thank you page after a short delay
      setTimeout(() => {
        window.location.href = "https://obrigado-evento-ayumi.lovable.app";
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

  return (
    <div className={`w-full ${className}`}>
      {showHeadline && (
        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
          Inscreva-se agora para garantir sua vaga
        </h3>
      )}
      
      {isSubmitted ? (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-md animate-fade-in">
          <p className="text-green-700 font-medium">Inscrição realizada com sucesso!</p>
          <p className="text-green-600 mt-1">
            Redirecionando para a página de agradecimento...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Nome completo"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              className={`form-input ${errors.email ? 'border-red-500' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          
          <div>
            <Input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp"
              className="form-input"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center items-center ${
              buttonSize === "large" ? "text-lg py-5" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="inline-block animate-pulse">Enviando...</span>
            ) : (
              "Quero destravar meu projeto"
            )}
          </Button>

          <p className="text-sm text-textcolor-light text-center mt-2">
            Ao clicar no botão, você aceita nossos Termos de Uso e Política de Privacidade, incluindo cookies e envio de comunicações.
          </p>
        </form>
      )}
    </div>
  );
};

export default SubscriptionForm;
