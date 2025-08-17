
import React, { useEffect, lazy, Suspense } from "react";
import Header from "../components/Header";

// Lazy load sections below the fold with optimized fallbacks
const BenefitsSection = lazy(() => 
  import("../components/BenefitsSection").then(module => ({ default: module.default }))
);
const PracticalSection = lazy(() => 
  import("../components/PracticalSection").then(module => ({ default: module.default }))
);
const ForWhoSection = lazy(() => 
  import("../components/ForWhoSection").then(module => ({ default: module.default }))
);
const AboutInstructorSection = lazy(() => 
  import("../components/AboutInstructorSection").then(module => ({ default: module.default }))
);
const TestimonialsSection = lazy(() => 
  import("../components/TestimonialsSection").then(module => ({ default: module.default }))
);
const FinalCTASection = lazy(() => 
  import("../components/FinalCTASection").then(module => ({ default: module.default }))
);
const Footer = lazy(() => 
  import("../components/Footer").then(module => ({ default: module.default }))
);

// Optimized fallback components to prevent layout shift
const SectionFallback = ({ height = "h-96" }: { height?: string }) => (
  <div 
    aria-hidden 
    className={`${height} bg-gradient-to-br from-gray-50 to-gray-100 animate-pulse rounded-lg`}
    style={{ containIntrinsicSize: "400px" }}
  />
);

const Index = () => {
  // Implement smooth scrolling
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || "");
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-w-full w-full overflow-x-hidden">
      {/* Header renderizado imediatamente - above the fold */}
      <Header />
      
      {/* Seções abaixo da dobra com lazy loading otimizado */}
      <Suspense fallback={<SectionFallback height="h-96" />}> 
        <PracticalSection />  
      </Suspense>
      
      <Suspense fallback={<SectionFallback height="h-96" />}> 
        <BenefitsSection />
      </Suspense>
      
      <Suspense fallback={<SectionFallback height="h-80" />}> 
        <ForWhoSection />
      </Suspense>
      
      <Suspense fallback={<SectionFallback height="h-96" />}> 
        <AboutInstructorSection />
      </Suspense>
      
      <Suspense fallback={<SectionFallback height="h-80" />}> 
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<SectionFallback height="h-64" />}> 
        <FinalCTASection />
      </Suspense>
      
      <Suspense fallback={<SectionFallback height="h-48" />}> 
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
