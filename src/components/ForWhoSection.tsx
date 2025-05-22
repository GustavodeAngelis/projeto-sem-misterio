
import React from "react";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ForWhoSection: React.FC = () => {
  const rightAudience = [
    "É artista da dança, música, teatro, circo ou produtora cultural",
    "Nunca escreveu um projeto cultural antes",
    "Já escreveu projetos antes, mas se sentiu travado(a), inseguro(a) ou perdido(a)",
    "Já teve projetos aprovados, mas quer escrever projetos ainda mais competitivos",
    "Quer aprender a escrever com mais clareza e estratégia, sem abrir mão da sua linguagem"
  ];

  const wrongAudience = [
    "Está buscando uma fórmula mágica de aprovação sem esforço",
    "Espera que alguém escreva tudo por você",
    "Não quer colocar a mão na massa pra estruturar seu projeto"
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById('subscription-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative py-16 md:py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/imagem-sessao-2.png')"
      }}
    >
      {/* Content wrapper with max-width and padding */}
      <div className="container-section relative z-10">
        <h2 className="section-title text-center text-white mb-12">
        Para quem é essa live?
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* For who it is */}
          <div className="w-full lg:w-1/2 bg-white/95 backdrop-blur-sm rounded-lg p-6 md:p-10 border-t-4 border-coral shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">
              Essa live é para você que...
            </h3>
            
            <div className="space-y-4">
              {rightAudience.map((item, index) => (
                <div key={index} className="check-item">
                  <Check className="text-coral flex-shrink-0 mt-1" size={22} strokeWidth={2.5} />
                  <span className="text-lg text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* For who it is not */}
          <div className="w-full lg:w-1/2 bg-white/95 backdrop-blur-sm rounded-lg p-6 md:p-10 border-t-4 border-graylight shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-6 text-gray-900">
              Essa live não é pra você se:
            </h3>
            
            <div className="space-y-4">
              {wrongAudience.map((item, index) => (
                <div key={index} className="cross-item">
                  <X className="text-textcolor-light flex-shrink-0 mt-1" size={22} strokeWidth={2.5} />
                  <span className="text-lg text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Final emotional quote */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto text-center">
          <p className="text-white text-xl md:text-2xl italic font-medium drop-shadow-sm">
            Se você tá cansado de fazer tudo sozinho, de escrever no escuro, e quer um caminho mais leve, claro e possível — essa live é o seu lugar.
          </p>
          
          <div className="mt-12">
            <Button onClick={scrollToForm} className="btn-primary mx-auto">
              Quero destravar meu projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
