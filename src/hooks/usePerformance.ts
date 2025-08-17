import { useEffect, useCallback } from 'react';
import { useState } from 'react';

// Hook para otimizações de performance
export const usePerformance = () => {
  // Medir métricas de performance
  const measurePerformance = useCallback(() => {
    if ('performance' in window) {
      // LCP (Largest Contentful Paint)
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      
      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });
      
      // CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((list) => {
        let cls = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            cls += entry.value;
          }
        });
        console.log('CLS:', cls);
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  // Preload de recursos críticos
  const preloadCriticalResources = useCallback(() => {
    const criticalImages = [
      '/images/imagem-sessao-sobre-ayumi.webp',
      '/images/imagem-beneficios.webp'
    ];
    
    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });
  }, []);

  // Otimizar scroll
  const optimizeScroll = useCallback(() => {
    let ticking = false;
    
    const updateScroll = () => {
      // Implementar otimizações de scroll aqui
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', requestTick);
    };
  }, []);

  useEffect(() => {
    measurePerformance();
    preloadCriticalResources();
    const cleanup = optimizeScroll();
    
    return cleanup;
  }, [measurePerformance, preloadCriticalResources, optimizeScroll]);
};

// Hook para lazy loading otimizado
export const useLazyLoad = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    
    return () => observer.disconnect();
  }, [threshold]);
  
  useEffect(() => {
    if (isVisible && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isVisible, hasLoaded]);
  
  return { isVisible, hasLoaded };
};
