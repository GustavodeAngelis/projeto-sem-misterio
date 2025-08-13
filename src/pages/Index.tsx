
import React, { useEffect, lazy, Suspense } from "react";
import Header from "../components/Header";

// Lazy load all sections below the fold for better performance
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
      <Header />
      <Suspense fallback={<div aria-hidden className="h-8" />}> 
        <PracticalSection />  
      </Suspense>
      <Suspense fallback={<div aria-hidden className="h-8" />}> 
        <BenefitsSection />
      </Suspense>
      <Suspense fallback={<div aria-hidden className="h-8" />}> 
        <ForWhoSection />
      </Suspense>
      <Suspense fallback={<div aria-hidden className="h-8" />}> 
        <AboutInstructorSection />
      </Suspense>
      <Suspense fallback={<div aria-hidden className="h-8" />}> 
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div aria-hidden className="h-8" />}> 
        <FinalCTASection />
      </Suspense>
      <Suspense fallback={<div aria-hidden className="h-8" />}> 
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
