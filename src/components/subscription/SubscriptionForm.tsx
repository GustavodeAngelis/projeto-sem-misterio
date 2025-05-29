
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSubscriptionValidation } from "@/hooks/useSubscriptionValidation";
import { useSubscriptionSubmit } from "@/hooks/useSubscriptionSubmit";
import DemoModeNotice from "./DemoModeNotice";
import SuccessMessage from "./SuccessMessage";

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
  
  const { errors, validateForm, clearEmailError } = useSubscriptionValidation(formData);
  
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
    });
  };
  
  const { 
    isSubmitting, 
    isSubmitted, 
    handleSubmit, 
    usingDemoConfig 
  } = useSubscriptionSubmit(formData, validateForm, resetForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear errors when user types in the field
    if (name === 'email') {
      clearEmailError();
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {showHeadline && (
        <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
          Inscreva-se agora para garantir sua vaga
        </h3>
      )}
      
      {usingDemoConfig && <DemoModeNotice />}
      
      {isSubmitted ? (
        <SuccessMessage usingDemoConfig={usingDemoConfig} />
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
              "Quero participar!"
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
