
import React, { useEffect } from "react";
import Header from "../components/Header";
import BenefitsSection from "../components/BenefitsSection";
import ForWhoSection from "../components/ForWhoSection";
import PracticalSection from "../components/PracticalSection";
import AboutInstructorSection from "../components/AboutInstructorSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FinalCTASection from "../components/FinalCTASection";
import Footer from "../components/Footer";

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
    <div className="min-w-full overflow-x-hidden">
      <Header />
      <BenefitsSection />
      <ForWhoSection />
      <PracticalSection />
      <AboutInstructorSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
