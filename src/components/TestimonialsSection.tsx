
import React from "react";

interface Testimonial {
  quote: string;
  name: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Eu achei que justificativa era um texto bonito e poético... agora entendi que é estratégia. Finalmente fez sentido.",
      name: "Lívia"
    },
    {
      quote: "Senti que minha cabeça era uma gaveta bagunçada… e em 3 dias, consegui colocar tudo no lugar com leveza.",
      name: "Gabi"
    },
    {
      quote: "Agora entendi o que é um projeto pra edital. Eu só sabia fazer ideia, agora sei montar proposta.",
      name: "Mirza"
    },
    {
      quote: "Voltei pra essência. Consegui organizar o que de fato me move num projeto.",
      name: "Gabi"
    },
    {
      quote: "Nunca entendi edital com tanta leveza. Pela primeira vez, tô com vontade de continuar escrevendo.",
      name: "Roberta"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-title text-center mb-6">
          O que dizem artistas que já passaram pelo método
        </h2>
        
        <p className="text-xl text-center max-w-3xl mx-auto mb-12">
          Mais de 100 artistas já destravaram sua escrita com esse método. Olha o que eles sentiram depois:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-graylight flex flex-col"
            >
              <div className="flex-1">
                <svg 
                  className="text-coral/20 h-8 w-8 mb-2" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.26 8.06C10.19 7.47 9.03 7 7.15 7c-1.2 0-2.33.26-2.33.26v4.16h1.67c.76 0 1.36.62 1.36 1.38a1.37 1.37 0 0 1-1.36 1.38h-1.67v6.28h7.43V15.3a6.16 6.16 0 0 0-1-3.9c0-.1-.01-.21-.01-.31l.02-3.03zm9.82 0C20 7.47 18.85 7 16.96 7c-1.2 0-2.33.26-2.33.26v4.16h1.67c.76 0 1.36.62 1.36 1.38a1.37 1.37 0 0 1-1.36 1.38h-1.67v6.28h7.43V15.3a6.16 6.16 0 0 0-1-3.9c0-.1-.01-.21-.01-.31l.02-3.03z" />
                </svg>
                <p className="text-lg mb-4 italic">
                  {testimonial.quote}
                </p>
              </div>
              <div className="mt-auto">
                <p className="font-bold">— {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg">
            Essas falas não são de profissionais da escrita.
          </p>
          <p className="text-lg mt-2">
            São de artistas como você, que só precisavam de um caminho claro e respeitoso com sua linguagem pra seguir com confiança.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
