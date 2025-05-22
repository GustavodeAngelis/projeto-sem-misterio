import React from "react";
import SubscriptionForm from "./subscription/SubscriptionForm";

const Header: React.FC = () => {
  return (
    <header className="min-h-screen">
      {/* Top bonus bar */}
      <div className="bg-coral w-full py-2 text-center text-white">
        <p className="text-sm md:text-base">
          🎁 Bônus especial para quem participar ao vivo até o final da live
        </p>
      </div>

      {/* Main hero section */}
      <div className="container-section flex flex-col items-center lg:flex-row lg:items-start lg:gap-12">
        {/* Left column: Text content and form */}
        <div className="w-full lg:w-7/12 mb-10 lg:mb-0">
          <div className="max-w-2xl">
            <p className="text-coral uppercase font-medium tracking-wider mb-3">
              LIVE GRATUITA
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 font-serif leading-tight">
              Forma & Força: Destravando seu Projeto Cultural
            </h1>
            <h2 className="text-xl sm:text-2xl mb-6 font-medium">
              Escreva projetos mais competitivos em menos tempo:
              <br />
              <span className="font-bold ">
                entenda o que realmente importa, o que evitar e como apresentar
                seu valor com clareza.
              </span>
            </h2>

            <div className="mb-6 text-lg">
              <p className="flex items-center gap-2">
                <span className="text-coral">📅</span>
                <span>
                  10 de Junho (segunda-feira), às 20h • Online e gratuito
                </span>
              </p>
            </div>

            <div id="subscription-form">
              <SubscriptionForm buttonSize="large" />
            </div>
          </div>
        </div>

        {/* Right column: Image */}
        <div className="w-full lg:w-5/12 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -z-10 w-[90%] h-[90%] rounded-full bg-gradient-to-br from-coral-dark/10 to-coral/5 blur-2xl"></div>
            <img
              src="/images/imagem-sessao-sobre-ayumi.jpeg"
              alt="Ayumi Hanada - Especialista em projetos culturais"
              className="max-w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
