import React from "react";
import { Check } from "lucide-react";

const BenefitsSection: React.FC = () => {
  const benefits = [
    "Entender como estruturar um projeto do jeito que a banca valoriza",
    "Parar de escrever no escuro — e começar a escrever com segurança e direção",
    "Saber como organizar suas ideias criativas sem perder sua essência",
    "Evitar os erros que reprovam bons projetos",
    "Sair com a cabeça mais leve e um plano claro pra continuar",
    "Ter uma justificativa que mostra impacto real, sem enrolação",
    "Ganhar tempo: menos retrabalho, menos dúvida, mais foco no que importa"
  ];

  return (
    <section className="bg-offwhite-warm py-16 md:py-24">
      {/* Full-width header section */}
      <div className="w-full px-4 md:px-8 mb-16 md:mb-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title mb-6">
            Depois dessa live, escrever projeto não vai mais ser um bicho de sete cabeças.
          </h2>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Você vai sair com mais clareza, leveza e confiança pra transformar suas ideias em um projeto competitivo — do seu jeito, mas sem achismos.
          </p>
        </div>
      </div>

      {/* Two-column grid section */}
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column: Benefits list */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-serif font-semibold mb-8">
              No evento você vai:
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="check-item">
                  <Check className="text-coral flex-shrink-0 mt-1" size={24} strokeWidth={2.5} />
                  <span className="text-lg" dangerouslySetInnerHTML={{ __html: benefit.replace(/\*\*(.*?)\*\*/g, '<span class="font-semibold">$1</span>') }} />
                </div>
              ))}
            </div>
            
            <p className="mt-12 text-xl font-medium border-l-4 border-coral pl-4 bg-offwhite-warmer p-4 rounded-r-md">
              É pra você parar de se sentir sozinho nesse processo e começar a escrever com mais autonomia, confiança e estratégia — sem abrir mão da sua linguagem artística.
            </p>
          </div>
          
          {/* Right column: Image */}
          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="rounded-lg overflow-hidden shadow-lg max-w-md mx-auto lg:mx-0">
              <picture>
                <source srcSet="/images/imagem-beneficios.jpg" />
                <img 
                  src="/images/imagem-beneficios.jpg" 
                  alt="Artista trabalhando em seu projeto cultural" 
                  className="w-full h-full object-cover aspect-[3/4]" 
                  width={400}
                  height={533}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
