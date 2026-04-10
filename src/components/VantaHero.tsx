import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";

const services = [
  { label: "Tax Services", href: "/#services", description: "Expert tax consulting, compliance, and cross-border advisory." },
  { label: "Accounting", href: "/#accounting", description: "Full-service accounting, payroll, and financial reporting." },
  { label: "AI Consulting", href: "/#ai-consulting", description: "AI strategy, implementation, and digital transformation." },
  { label: "AI News", href: "/news", description: "Latest insights and trends in artificial intelligence." },
];

const VantaHero = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let effect: any = null;
    const loadVanta = async () => {
      try {
        const FOG = (await import("vanta/dist/vanta.fog.min")).default;
        if (vantaRef.current && !effect) {
          effect = FOG({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0xa08118,
            midtoneColor: 0x1a1a2e,
            lowlightColor: 0x0a0a1a,
            baseColor: 0x0f0f23,
            blurFactor: 0.63,
            speed: 2.2,
            zoom: 0.8,
          });
          setVantaEffect(effect);
        }
      } catch (e) {
        console.error("Vanta load error", e);
      }
    };
    loadVanta();
    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <section ref={vantaRef} className="relative min-h-[90vh] flex items-center justify-center">
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 text-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Contestor
        </h1>
        <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-12 drop-shadow">
          Expert tax advisory, accounting, and AI consulting services in Estonia and the Baltics.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <Link
              key={s.label}
              to={s.href}
              className="group rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-6 text-left hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                {s.label}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {s.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/#contact-section"
            className="inline-block px-8 py-3 rounded-lg bg-white/20 backdrop-blur border border-white/30 text-white font-semibold hover:bg-white/30 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VantaHero;
