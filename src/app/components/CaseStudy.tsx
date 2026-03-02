import { useState, useEffect } from "react";
import { Hero } from "./sections/Hero";
import { Challenge } from "./sections/Challenge";
import { Objective } from "./sections/Objective";
import { Audience } from "./sections/Audience";
import { Persona } from "./sections/Persona";
import { UserJourney } from "./sections/UserJourney";
import { QuantitativeResearch } from "./sections/QuantitativeResearch";
import { QualitativeResearch } from "./sections/QualitativeResearch";
import { Ideation } from "./sections/Ideation";
import { Solution } from "./sections/Solution";
import { Wireframes } from "./sections/Wireframes";
import { StyleGuide } from "./sections/StyleGuide";
import { UsabilityTests } from "./sections/UsabilityTests";
import { PrototypeLink } from "./sections/PrototypeLink";
import { Navigation } from "./Navigation";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export function CaseStudy() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="challenge">
          <Challenge />
        </section>
        
        <section id="objective">
          <Objective />
        </section>
        
        <section id="audience">
          <Audience />
        </section>
        
        <section id="persona">
          <Persona />
        </section>
        
        <section id="journey">
          <UserJourney />
        </section>
        
        <section id="quantitative">
          <QuantitativeResearch />
        </section>
        
        <section id="qualitative">
          <QualitativeResearch />
        </section>
        
        <section id="ideation">
          <Ideation />
        </section>
        
        <section id="solution">
          <Solution />
        </section>
        
        <section id="wireframes">
          <Wireframes />
        </section>
        
        <section id="styleguide">
          <StyleGuide />
        </section>
        
        <section id="tests">
          <UsabilityTests />
        </section>
        
        <section id="prototype">
          <PrototypeLink />
        </section>
      </main>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 rounded-full w-12 h-12 shadow-lg bg-blue-600 hover:bg-blue-700 text-white z-50"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2026 e-Docs Case Study — Product Design Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
}