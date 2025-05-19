
import React from "react";

interface SuccessMessageProps {
  usingDemoConfig: boolean;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ usingDemoConfig }) => {
  return (
    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-md animate-fade-in">
      <p className="text-green-700 font-medium">Preenchimento realizado com sucesso!</p>
      <p className="text-green-600 mt-1">
        {usingDemoConfig 
          ? "Este é o modo de demonstração. Em produção, você seria redirecionado para a página de agradecimento."
          : "Redirecionando para a página de agradecimento..."}
      </p>
    </div>
  );
};

export default SuccessMessage;
