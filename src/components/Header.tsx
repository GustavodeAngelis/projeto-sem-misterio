import React from "react";
import SubscriptionForm from "./subscription/SubscriptionForm";

const Header: React.FC = () => {
  return (
    <header className="critical-header">
      {/* Top bonus bar */}
      <div className="critical-bonus">
        <p>🎁 Bônus especiais para quem participar ao vivo</p>
      </div>

      {/* Main hero section */}
      <div className="critical-container">
        <div className="critical-content">
          {/* Text content and form */}
          <div className="critical-text">
            <p style={{ color: "#FF6B4A", fontWeight: 600, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
              INTENSIVÃO GRATUITO
            </p>
            <h1 className="critical-title">
            <strong>Projeto sem Mistério</strong>
            </h1>
            <h2 className="critical-subtitle">
              Escreva projetos mais competitivos em menos tempo:
              <br />
              <strong>
                entenda o que realmente importa, o que evitar e como apresentar
                seu valor com clareza.
              </strong>
            </h2>

            <div style={{ marginBottom: "1.5rem", fontSize: "1.125rem" }}>
              <p style={{ display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center" }}>
                <span style={{ color: "#FF6B4A" }}>📅</span>
                <span>
                  01, 02 e 03 de Setembro, às 19h47min • Online e gratuito
                </span>
              </p>
            </div>

            <div id="subscription-form">
              <SubscriptionForm buttonSize="large" />
            </div>
          </div>

          {/* Image - LCP element with optimized loading */}
          <div className="critical-image-container">
            <picture>
              <source srcSet="/images/imagem-sessao-sobre-ayumi.webp" type="image/webp" />
              <img
                src="/images/imagem-sessao-sobre-ayumi.webp"
                alt="Ayumi Hanada - Especialista em projetos culturais"
                className="critical-image"
                width={280}
                height={373}
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                style={{
                  aspectRatio: "280/373",
                  objectFit: "cover"
                }}
              />
            </picture>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
