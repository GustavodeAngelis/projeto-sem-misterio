
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save data to Supabase
      const { error } = await supabase
        .from('leads')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            whatsapp: formData.whatsapp,
            source: "lp_forma_forca_evento_jun_25"
          }
        ]);
      
      if (error) {
        console.error("Error submitting form:", error);
        toast({
          title: "Erro ao enviar formulário",
          description: "Por favor, tente novamente mais tarde.",
          variant: "destructive"
        });
        setIsSubmitting(false);
        return;
      }
      
      console.log("Form submitted successfully to Supabase");
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Enviamos um e-mail de confirmação com os detalhes da live.",
      });
      
      // Reset after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
        });
      }, 5000);
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
            Enviamos um e-mail de confirmação com os detalhes da live.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Nome completo"
              required
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
              className="form-input"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <Input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp"
              required
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
