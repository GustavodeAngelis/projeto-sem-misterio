import React from "react";

interface ImageOptimizedProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "sync" | "async" | "auto";
}

const ImageOptimized: React.FC<ImageOptimizedProps> = ({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "auto"
}) => {
  // Determinar loading baseado na prioridade
  const finalLoading = priority ? "eager" : loading;
  const finalFetchPriority = priority ? "high" : fetchPriority;
  const finalDecoding = priority ? "sync" : decoding;

  return (
    <picture>
      {/* WebP com fallback para formatos suportados */}
      <source srcSet={src.replace(/\.[^/.]+$/, '.webp')} type="image/webp" />
      <source srcSet={src} type="image/jpeg" />
      
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={finalLoading}
        fetchPriority={finalFetchPriority}
        decoding={finalDecoding}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
          objectFit: "cover"
        }}
        onLoad={(e) => {
          // Adicionar classe para animações após carregamento
          const target = e.target as HTMLImageElement;
          target.classList.add('image-loaded');
        }}
      />
    </picture>
  );
};

export default ImageOptimized;