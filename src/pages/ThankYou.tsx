import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="h-screen flex flex-col justify-center bg-offwhite">
      {/* Top bonus bar */}
      <div className="bg-coral w-full py-3 md:py-4 text-center text-white px-4">
        <p className="text-sm md:text-base">
        📅 Projeto sem Mistério: De 01 a 03 de Setembro, às 19h47min • Online e gratuito
        </p>
      </div>


        <div className="w-full flex-1 px-4 py-8 md:py-12 bg-white flex items-center justify-center">
          <div className="max-w-3xl mx-auto text-center w-full">
            {/* Main heading */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 font-serif leading-tight">
              Você está quase lá...
            </h1>
            {/* Subtítulo em azul */}
            <p className="text-sm sm:text-base md:text-lg mb-4 text-orange-600 font-medium">
              Faltam apenas dois passos para você garantir o seu acesso ao evento
            </p>
            {/* Progress bar */}
            <div className="w-full max-w-xl mx-auto mb-6 md:mb-8">
              <Progress value={80} />
            </div>
            {/* Instruções */}
            <div className="text-left max-w-xl mx-auto mb-8 md:mb-10 space-y-4">
              <p className="text-base md:text-lg">
                <span className="font-bold text-blue-700">1</span>. <span className="font-bold">Clique no botão abaixo </span> para confirmar a sua inscrição e receber os detalhes importantes da live <span className="font-bold">no WhatsApp </span>.
              </p>
              <hr className="border-t border-gray-400 my-3 md:my-4" />

              <p className="text-base md:text-lg">
                <span className="font-bold text-blue-700">2</span> Depois de confirmar sua inscrição, <span className="font-bold">abra o e-mail que eu acabei de te mandar e responda à pesquisa rápida que está lá dentro</span>. Assim, você me ajuda a preparar melhor as aulas e, de quebra, eu conheço você melhor. É bem importante! (Cheque na aba de promoções do seu e-mail e no spam)
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <a 
                href="https://api.whatsapp.com/send?phone=5519995752437&text=Quero%20confirmar%20minha%20inscrição"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-green-500 hover:bg-green-400 py-4 md:py-7 px-6 md:px-12 text-base md:text-xl font-medium flex items-center gap-2 md:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 rounded-md w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                Confirmar minha inscrição no WhatsApp
              </a>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ThankYou;
