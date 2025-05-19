
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-offwhite">
      {/* Top bonus bar */}
      <div className="bg-coral w-full py-2 text-center text-white">
        <p className="text-sm md:text-base">
          🎁 Bônus especial para quem participar ao vivo até o final da live
        </p>
      </div>

      {/* Main content section */}
      <div className="container-section flex-1 flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">
            Você está quase lá, falta somente um passo para a sua inscrição ser confirmada
          </h1>
          
          {/* Progress bar */}
          <div className="w-full max-w-md mx-auto mb-8">
            <Progress value={80} className="h-3" />
            <div className="flex justify-between mt-2 text-sm text-textcolor-light">
              <span>Inscrição</span>
              <span>Confirmação</span>
            </div>
          </div>
          
          {/* Explanation text */}
          <p className="text-lg mb-10">
            Clique no botão abaixo para confirmar a sua inscrição e receber os materiais de apoio no WhatsApp.
          </p>
          
          {/* CTA Button */}
          <Button 
            className="btn-primary bg-green-600 hover:bg-green-500 py-4 px-8 text-lg font-medium"
            onClick={() => window.open("#", "_blank")} // Placeholder URL to be filled in later
          >
            Confirmar minha inscrição no WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
