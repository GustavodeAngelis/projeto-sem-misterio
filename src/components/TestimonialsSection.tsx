
import React from "react";

interface Testimonial {
  quote: string;
  name: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Realmente a aula de justificativa é uma querida 😂🥹 Foi minha aula favorita por um ponto muito específico que mudou completamente o jeito de entender essa parte do projeto. Nunca tinha pensado na urgência, minha cabeça fez assim 🤯",
      name: "Gabriella Alison"
    },
    {
      quote: "Atravessar o desafio me faz reacender o desejo e a motivação de fazer, me faz pensar: 'nossa, eu tenho tantas ideias e tantas coisas legais que quero colocar no mundo, por que não tentar?'",
      name: "Ana Carol Yamamoto"
    },
    {
      quote: "Entendi que a escrita de projetos não precisa ser um bicho de 7 cabeças, desde que você tenha as ferramentas e metodologias pra deixar tudo mais tranquilo.",
      name: "Livia Porto"
    },
    {
      quote: "Ayumi me permitiu ver que é menos ficar idealizando algo, e mais sobre saber comunicar sua ideia com clareza, bons argumentos e valores reais dos serviços. Tornou mais acessível buscar por essa fonte de fomento (editais culturais).",
      name: "Sabrina Barros"
    },
    {
      quote: "Me encantou muito o seu cuidado com o lado humano! ❤️",
      name: "Mirza Ferreira"
    },
    {
      quote: "Sentimento mais forte que fica é o de ter meu projeto mais concreto e definido",
      name: "Camila Yoshimura Munhoz"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-title text-center mb-12">
          O que dizem artistas que já experimentaram o método
        </h2>
        
        
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
