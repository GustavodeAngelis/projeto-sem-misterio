
import React, { useEffect, lazy, Suspense } from "react";
import Header from "../components/Header";
const BenefitsSection = lazy(() => import("../components/BenefitsSection"));
const PracticalSection = lazy(() => import("../components/PracticalSection"));
const ForWhoSection = lazy(() => import("../components/ForWhoSection"));
const AboutInstructorSection = lazy(() => import("../components/AboutInstructorSection"));
const TestimonialsSection = lazy(() => import("../components/TestimonialsSection"));
const FinalCTASection = lazy(() => import("../components/FinalCTASection"));
const Footer = lazy(() => import("../components/Footer"));

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
      <Suspense fallback={<div aria-hidden className="h-24" />}> 
        <BenefitsSection />
      </Suspense>
      <Suspense fallback={<div aria-hidden className="h-24" />}> 
        <PracticalSection />
      </Suspense>
      <Suspense fallback={<div aria-hidden className="h-24" />}> 
        <ForWhoSection />
      </Suspense>
      <Suspense fallback={<div aria-hidden className="h-24" />}> 
        <AboutInstructorSection />
      </Suspense>
      <Suspense fallback={<div aria-hidden className="h-24" />}> 
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div aria-hidden className="h-24" />}> 
        <FinalCTASection />
      </Suspense>
      <Suspense fallback={<div aria-hidden className="h-24" />}> 
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
