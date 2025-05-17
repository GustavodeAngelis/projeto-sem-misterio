
import React from "react";
import { Check, X } from "lucide-react";
import SubscriptionForm from "./SubscriptionForm";

const ForWhoSection: React.FC = () => {
  const rightAudience = [
    "É artista da dança, música, teatro, circo ou cultura popular",
    "Já tentou escrever projeto, mas se sentiu travado(a), inseguro(a) ou perdido(a)",
    "Tem ideias boas, mas não sabe como transformar isso num projeto coeso",
    "Se frustra com os editais, porque parece que sempre falta \"alguma coisa\"",
    "Quer aprender a escrever com mais clareza e estratégia, sem abrir mão da sua linguagem"
  ];

  const wrongAudience = [
    "Está buscando uma fórmula mágica de aprovação sem esforço",
    "Espera que alguém escreva tudo por você",
    "Não quer colocar a mão na massa pra estruturar seu projeto"
  ];

  return (
    <section className="py-16 md:py-24 bg-cover bg-center bg-fixed" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://source.unsplash.com/random/1200x800/?artists,performance,dance')"}}>
      <div className="container-section">
        <h2 className="section-title text-center text-white mb-12">
          Essa live é pra você que...
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* For who it is */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-6 md:p-10 border-t-4 border-coral shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-6">
              Identidade e momento
            </h3>
            
            <div className="space-y-4">
              {rightAudience.map((item, index) => (
                <div key={index} className="check-item">
                  <Check className="text-coral flex-shrink-0 mt-1" size={22} strokeWidth={2.5} />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* For who it is not */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-6 md:p-10 border-t-4 border-graylight shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-6">
              Essa live não é pra você se:
            </h3>
            
            <div className="space-y-4">
              {wrongAudience.map((item, index) => (
                <div key={index} className="cross-item">
                  <X className="text-textcolor-light flex-shrink-0 mt-1" size={22} strokeWidth={2.5} />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Final emotional quote */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto text-center">
          <p className="text-white text-xl md:text-2xl italic">
            Se você tá cansado de fazer tudo sozinho, de escrever no escuro, e quer um caminho mais leve, claro e possível — essa live é o seu lugar.
          </p>
          
          <div className="mt-12">
            <button className="btn-primary mx-auto">
              Quero destravar meu projeto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
