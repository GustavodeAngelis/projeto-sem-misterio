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
      <div className="container-section flex-1 flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 font-serif leading-tight">
            Você está quase lá, falta somente um passo...
          </h1>
          
          {/* Progress bar */}
          <div className="w-full max-w-xl mx-auto mb-12">
            <Progress value={80} />
          </div>
          
          {/* Explanation text */}
          <p className="text-lg mb-10">
            Clique no botão abaixo para confirmar a sua inscrição e receber os materiais de apoio no WhatsApp.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              className="btn-primary bg-green-500 hover:bg-green-400 py-7 px-12 text-xl font-medium flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("#", "_blank")} // Placeholder URL to be filled in later
            >
              <MessageCircle className="w-6 h-6" />
              Confirmar minha inscrição no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
