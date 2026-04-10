import { Link } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import DOTS from "vanta/dist/vanta.dots.min";

const AIHero = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<ReturnType<typeof DOTS> | null>(null);

  useLayoutEffect(() => {
    const target = backgroundRef.current;

    if (!target || vantaEffect.current) {
      return;
    }

    const effect = DOTS({
      el: target,
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

    vantaEffect.current = effect;

    return () => {
      if (!vantaEffect.current) {
        return;
      }

      try {
        vantaEffect.current.destroy();
      } catch {
        const canvas = vantaEffect.current.renderer?.domElement;

        if (canvas?.parentNode) {
          canvas.parentNode.removeChild(canvas);
        }

        vantaEffect.current.renderer = null;
        vantaEffect.current.scene = null;
      } finally {
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section className="relative isolate w-full min-h-[400px] overflow-hidden py-24 lg:py-36">
      <div ref={backgroundRef} className="absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-foreground/10" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mb-4 text-sm text-primary-foreground/60">
          <Link to="/" className="transition-colors hover:text-primary-foreground">
            Home
          </Link>
          {" > "}
          <span>AI Consulting</span>
        </div>
        <h1 className="mb-6 max-w-3xl text-3xl font-bold text-primary-foreground lg:text-5xl">
          Artificial Intelligence Consulting & Strategy
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-primary-foreground/80">
          With artificial intelligence at a crucial inflection point, Contestor helps organisations weave together human and technological capabilities to maximise value, productivity, and innovation from AI.
        </p>
      </div>
    </section>
  );
};

export default AIHero;
