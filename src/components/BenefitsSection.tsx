
import React from "react";
import { Check } from "lucide-react";

const BenefitsSection: React.FC = () => {
  const benefits = [
    "Entender como estruturar um projeto do jeito que a banca valoriza",
    "Parar de escrever no escuro — e começar a escrever com segurança e direção",
    "Saber como organizar suas ideias criativas sem perder sua essência",
    "Evitar os erros que reprovam bons projetos só por falta de clareza",
    "Sair com a cabeça mais leve e um plano claro pra continuar",
    "Ter uma justificativa que mostra impacto real, sem enrolação",
    "Ganhar tempo: menos retrabalho, menos dúvida, mais foco no que importa"
  ];

  return (
    <section className="bg-offwhite-warm py-16 md:py-24">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row lg:gap-16 items-start">
          <div className="w-full lg:w-7/12 mb-10 lg:mb-0">
            <h2 className="section-title mb-4">
              Depois dessa live, escrever projeto não vai mais ser um bicho de sete cabeças.
            </h2>
            
            <p className="text-xl mb-10">
              Você vai sair com mais clareza, leveza e confiança pra transformar suas ideias em um projeto competitivo — do seu jeito, mas sem achismos.
            </p>
            
            <h3 className="text-2xl font-serif font-semibold mb-6">
              No evento você vai:
            </h3>
            
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="check-item">
                  <Check className="text-coral flex-shrink-0 mt-1" size={24} strokeWidth={2.5} />
                  <span className="text-lg" dangerouslySetInnerHTML={{ __html: benefit.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold">$1</span>') }} />
                </div>
              ))}
            </div>
            
            <p className="mt-10 text-xl font-medium border-l-4 border-coral pl-4 bg-offwhite-warmer p-4 rounded-r-md">
              É pra você parar de se sentir sozinho nesse processo e começar a escrever com mais autonomia, confiança e estratégia — sem abrir mão da sua linguagem artística.
            </p>
          </div>
          
          <div className="w-full lg:w-5/12">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="Artista trabalhando em seu projeto cultural" 
                className="w-full h-full object-cover aspect-[3/4]" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
