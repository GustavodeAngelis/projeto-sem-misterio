
import React from "react";
import SubscriptionForm from "./SubscriptionForm";

const FinalCTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-coral/10 to-offwhite">
      <div className="container-section">
        <h2 className="section-title text-center mb-8">
          Chega de escrever no escuro. <br className="hidden md:block" />
          Bora escrever com clareza, estrutura e leveza?
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-center mb-10">
          <p>
            Se você tá cansado(a) de tentar adivinhar o que escrever…
          </p>
          <p>
            Se já perdeu horas reescrevendo justificativa, sentindo que sempre falta algo…
          </p>
          <p>
            Se sente que escrever projeto virou um peso solitário — ou uma batalha contra o formulário…
          </p>
          <p className="font-bold">
            Essa live é pra você.
          </p>
          <p>
            Aqui, você vai descobrir um caminho possível. Um método que respeita sua linguagem, traz clareza pro seu processo e aumenta suas chances reais de aprovação.
          </p>
          <p>
            É gratuito, é ao vivo, e é feito pra quem quer parar de travar e começar a construir com segurança.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-lg shadow-xl border border-graylight p-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-6">
              Inscreva-se agora e venha dar forma & força ao seu projeto cultural.
            </h3>
            
            <div className="text-center mb-8">
              <p className="text-xl">
                📅 Dia 10 de junho • às 20h • Online e gratuito
              </p>
            </div>
            
            <SubscriptionForm buttonSize="large" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
