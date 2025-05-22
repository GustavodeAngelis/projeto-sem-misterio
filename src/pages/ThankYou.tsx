import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-offwhite">
      {/* Top bonus bar */}
      <div className="bg-coral w-full py-4 text-center text-white">
        <p className="text-sm md:text-base">
        📅 Forma & Força: 10 de Junho (terça-feira), às 20h • Online e gratuito
        </p>
      </div>

      {/* Main content section */}
      <div 
        className="w-full h-full flex-1 flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: "url(/images/imagem-obrigado.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Filtro de desfoque e sombra clara */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm shadow-2xl shadow-white z-0" />
        <div className="relative z-10 w-full">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-serif leading-tight">
              Você está quase lá...
            </h1>
            {/* Subtítulo em azul */}
            <p className="text-base md:text-lg mb-4 text-orange-600 font-medium">
              Faltam apenas dois passos para você garantir o seu acesso ao evento
            </p>
            {/* Progress bar */}
            <div className="w-full max-w-xl mx-auto mb-8">
              <Progress value={80} />
            </div>
            {/* Instruções */}
            <div className="text-left max-w-xl mx-auto mb-10 space-y-4">
              <p className="text-lg">
                <span className="font-bold text-blue-700">1</span>. <span className="font-bold">Clique no botão abaixo </span> para confirmar a sua inscrição e receber os detalhes importantes da live <span className="font-bold">no WhatsApp </span>.
              </p>
              <hr className="border-t border-gray-400 my-4" />

              <p className="text-lg">
                <span className="font-bold text-blue-700">2</span> Depois de confirmar sua inscrição, <span className="font-bold">abra o e-mail que eu acabei de te mandar e responda à pesquisa rápida que está lá dentro</span>. Assim, você me ajuda a preparar melhor as aulas e, de quebra, eu conheço você melhor. É bem importante!
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center">
              <a 
                href="https://api.whatsapp.com/send?phone=5519995752437&text=Quero%20confirmar%20minha%20inscrição"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-green-500 hover:bg-green-400 py-7 px-12 text-xl font-medium flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 rounded-md"
              >
                <MessageCircle className="w-6 h-6" />
                Confirmar minha inscrição no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
