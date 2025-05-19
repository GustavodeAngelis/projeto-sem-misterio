
import React from "react";

const DemoModeNotice: React.FC = () => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-md">
      <p className="text-yellow-700">
        <strong>Modo de demonstração:</strong> As chaves de API do MailerLite não estão configuradas. 
        O formulário funcionará, mas não enviará dados para o MailerLite.
      </p>
    </div>
  );
};

export default DemoModeNotice;
