
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-textcolor text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm mb-2">
          © {currentYear} Projeto sem Mistério. Todos os direitos reservados.
        </p>
        <p className="text-xs text-gray-400">
          Este é um evento online independente para artistas. 
          Ao se inscrever, você concorda em receber comunicações relacionadas ao evento.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
