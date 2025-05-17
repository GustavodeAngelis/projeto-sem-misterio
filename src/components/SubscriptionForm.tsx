
import React, { useState } from "react";

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
    agreeToTerms: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted with data:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          agreeToTerms: false,
        });
      }, 5000);
    }, 1500);
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
            <input
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
            <input
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
            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp"
              required
              className="form-input"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex items-start mt-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              id="agreeToTerms"
              required
              className="mt-1"
              checked={formData.agreeToTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeToTerms" className="ml-2 text-sm text-textcolor-light">
              Aceito receber comunicações conforme a LGPD.
            </label>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-primary w-full flex justify-center items-center ${
              buttonSize === "large" ? "text-lg py-5" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="inline-block animate-pulse">Enviando...</span>
            ) : (
              "Quero destravar meu projeto"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default SubscriptionForm;
