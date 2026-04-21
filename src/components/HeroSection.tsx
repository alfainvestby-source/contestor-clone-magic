import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
      setScrollY(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const parallaxY = scrollY * 120;
  const videoScale = 1 + scrollY * 0.15;
  const overlayOpacity = 0.35 + scrollY * 0.3;
  const contentOpacity = 1 - scrollY * 1.8;
  const contentTranslateY = scrollY * 80;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Video background with parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0) scale(${videoScale})`,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dynamic gradient overlay */}
      <div
        className="absolute inset-0 bg-foreground/35 z-[1]"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      {/* Content with scroll fade-out */}
      <div
        className="container mx-auto px-4 lg:px-8 relative z-10"
        style={{
          opacity: Math.max(0, contentOpacity),
          transform: `translate3d(0, ${contentTranslateY}px, 0)`,
          willChange: "transform, opacity",
        }}
      >
        <div className="max-w-2xl">
          <span
            className="inline-block border border-primary-foreground/40 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary-foreground mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            Elevate Your Business
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
            }}
          >
            Help your Business Grow Quickly.
          </h1>

          <p
            className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-lg"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s",
            }}
          >
            We provide expert tax advisory, accounting, and AI consulting services for businesses across EU and the Baltics.
          </p>

          <div
            className="flex flex-wrap items-center gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
            }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Discovery Call
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{
          opacity: isVisible && scrollY < 0.1 ? 0.7 : 0,
          transition: "opacity 0.5s ease-out",
        }}
      >
        <span className="text-primary-foreground/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
