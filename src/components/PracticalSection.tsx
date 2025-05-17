
import React, { useState } from "react";
import { Plus } from "lucide-react";

const PracticalSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const practicalItems = [
    {
      title: "Método simples e replicável",
      content: "Testar na prática um método que você pode aplicar imediatamente em seus projetos, seguindo passos claros e objetivos para criar propostas competitivas."
    },
    {
      title: "Justificativa forte com impacto real",
      content: "Aprender como montar uma justificativa que realmente convence a banca, mostrando o impacto e relevância do seu projeto sem usar linguagem vazia."
    },
    {
      title: "Guia prático de estruturação",
      content: "Descobrir por onde começar, o que evitar e como seguir no desenvolvimento do seu projeto, com dicas práticas e exemplos reais."
    },
    {
      title: "Base sólida sem travamentos",
      content: "Sair com uma base sólida para continuar seu projeto sem travar, com ferramentas que você pode aplicar imediatamente após a live."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-title text-center mb-6">
          Na live, a gente não vai só falar — vai fazer junto.
        </h2>
        
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg md:text-xl">
            Nessa live, você vai botar a mão na massa com a Ayumi.
          </p>
          <p className="text-lg md:text-xl mt-4">
            Ela vai te guiar por exercícios práticos, mostrar o método que ela mesma usa pra aprovar projetos, e revelar os pilares que fazem a banca dizer "sim".
          </p>
          <p className="text-lg md:text-xl mt-4">
            Nada de teoria solta, nada de enrolação: é direção real pra tirar seu projeto do caos e colocar ele no caminho da aprovação — com estrutura, clareza e leveza.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-semibold mb-8 text-center">
            O que você vai vivenciar:
          </h3>
          
          <div className="space-y-4">
            {practicalItems.map((item, index) => (
              <div 
                key={index} 
                className="border border-graylight rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <button
                  className={`w-full flex items-center justify-between p-4 md:p-6 text-left font-medium ${openItem === index ? 'bg-coral-dark text-white' : 'bg-white'}`}
                  onClick={() => toggleItem(index)}
                >
                  <span className="text-lg font-serif">{item.title}</span>
                  <Plus 
                    size={24} 
                    className={`transform transition-transform ${openItem === index ? 'rotate-45' : ''}`}
                  />
                </button>
                
                {openItem === index && (
                  <div className="p-4 md:p-6 bg-offwhite-warm animate-fade-in">
                    <p className="text-lg">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl italic font-medium">
              É pra parar de escrever no escuro e começar a construir com segurança. Juntxs, do jeito certo — e do seu jeito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalSection;
