import React from "react";
import { Check } from "lucide-react";

const AboutInstructorSection: React.FC = () => {
  const credentials = [
    "+15 projetos aprovados para projetos próprios",
    "+R$ 1 milhão captados",
    "Criadora do Fluxo em Redes",
    "Artista, empreendedora e produtora independente",
    "Mais de 10 anos de experiência no setor cultural"
  ];

  return (
    <section className="bg-offwhite-warm py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-title text-center mb-16">
          Quem vai te guiar nesse intensivo
        </h2>
        
        <div className="flex flex-col lg:flex-row lg:gap-16 items-center">
          {/* Image column */}
          <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
            <div className="relative">
              <div className="absolute -z-10 w-[100%] h-[90%] rounded-full bg-gradient-to-br from-coral/20 to-coral-dark/5 blur-lg"></div>
              <picture>
                <source srcSet="/images/imagem-sessao-sobre-ayumi.webp" type="image/webp" />
                <img
                  src="/images/imagem-sessao-sobre-ayumi.jpeg"
                  alt="Ayumi Hanada - Especialista em projetos culturais"
                  className="rounded-lg shadow-lg max-w-full h-auto"
                  width={400}
                  height={533}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
          
          {/* Text column */}
          <div className="w-full lg:w-7/12">
            <h3 className="text-3xl font-serif font-bold mb-6">
              Ayumi Hanada
            </h3>
            
            <div className="space-y-4 text-lg mb-8">
              <p>
                Ayumi Hanada é artista da dança, produtora cultural e especialista na escrita de projetos culturais.
              </p>
              <p>
                Mas, antes de tudo, é como você: uma artista independente sedenta por tirar seus projetos só do campo das ideias, que já travou na frente de um edital, já escreveu justificativa meio na "enrolação", já se sentiu perdida sem saber por onde começar.
              </p>
              <p>
                Depois de bater muita cabeça, ela desenvolveu um método que já aprovou <strong>mais de 15 projetos próprios</strong> e captou <strong>mais de R$ 1 milhão</strong> em editais — tudo como artista atuante nos próprios projetos.
              </p>
              <p>
                Hoje, ela ensina outras pessoas a fazerem o mesmo: <strong>escrever com clareza, apresentar valor com segurança e aumentar suas chances reais de aprovação</strong>, sem abrir mão da sua linguagem artística.
              </p>
            </div>
            
            {/* Credentials */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-graylight">
              <h4 className="font-medium text-lg mb-4">Credenciais:</h4>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-0">
                {credentials.map((credential, index) => (
                  <div key={index} className="check-item">
                    <Check className="text-coral flex-shrink-0 mt-1" size={18} />
                    <span>{credential}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quote */}
            <div className="mt-8 border-l-4 border-coral pl-4 italic">
              <p className="text-lg">
                "Escrever projeto não precisa ser solitário, nem doloroso. Dá pra fazer com estratégia, com leveza e com a sua cara. Eu vou te mostrar como."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstructorSection;
