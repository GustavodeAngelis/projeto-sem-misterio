
import React from "react";
import { CalendarDays } from "lucide-react";

const days = [
  {
    day: "Dia 1",
    title: "Destravando a Escrita",
    description: "Descubra por que tantos travam e vire a chave: transforme bloqueio em confiança para tirar seu projeto do papel.",
    value: "Você vai sair com uma ideia e um resumo potente",
  },
  {
    day: "Dia 2",
    title: "Os 5 Erros Fatais",
    description: "Enxergue (e evite!) os erros que derrubam até boas ideias. Dê força ao seu projeto ao aprender a fazer uma justificativa forte.",
    value: "Você vai sair com uma justificativa forte.",
  },
  {
    day: "Dia 3",
    title: "Do Caos à Estrutura",
    description: "Monte, junto comigo, o esqueleto do seu projeto. Clareza, direção e confiança para apresentar sua ideia de verdade.",
    value: "Você vai sair com um plano concreto do seu projeto",
  },
];

const PracticalSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-title text-center mb-6">
          A gente não vai só falar — vai fazer junto.
        </h2>
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg md:text-xl">
            Nesse intensivo, você vai botar a mão na massa comigo.
          </p>
          <p className="text-lg md:text-xl mt-4">
            Vou te guiar por exercícios práticos, mostrar o método que eu mesma uso pra aprovar projetos, e revelar os pilares que fazem a banca dizer "sim".
          </p>
          <p className="text-lg md:text-xl mt-4">
            Nada de teoria solta, nada de enrolação: é direção real pra tirar seu projeto do caos e colocar ele no caminho certo — com estrutura, clareza e leveza.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-serif font-semibold mb-8 text-center">
            O que você vai vivenciar em cada dia:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {days.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-graylight rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow min-h-[320px]"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-coral-dark mb-4">
                  <CalendarDays size={32} className="text-white" />
                </div>
                <span className="text-coral-dark font-bold text-lg mb-2">{item.day}</span>
                <h4 className="font-serif text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-base text-gray-700 leading-relaxed mb-2">{item.description}</p>
                <p className="text-base font-bold text-gray-700 leading-relaxed mt-4">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl italic font-medium">
              É pra parar de escrever no escuro e começar a construir com segurança. Juntos, do jeito certo — e do seu jeito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalSection;
