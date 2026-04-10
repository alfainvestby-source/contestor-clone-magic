import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import DOTS from "vanta/dist/vanta.dots.min";

const AIHero = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<ReturnType<typeof DOTS> | null>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = DOTS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xf97316,
        color2: 0x1e293b,
        backgroundColor: 0x1a1f2e,
      });
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section ref={vantaRef} className="relative py-24 lg:py-36">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-sm text-primary-foreground/60 mb-4">
          <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
          {" > "}
          <span>AI Consulting</span>
        </div>
        <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground max-w-3xl mb-6">
          Artificial Intelligence Consulting & Strategy
        </h1>
        <p className="text-sm text-primary-foreground/80 max-w-2xl leading-relaxed">
          With artificial intelligence at a crucial inflection point, Contestor helps organisations weave together human and technological capabilities to maximise value, productivity, and innovation from AI.
        </p>
      </div>
    </section>
  );
};

export default AIHero;
