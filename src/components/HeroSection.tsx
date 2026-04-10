import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt=""
        className="w-full h-full object-cover"
        aria-hidden="true"
      />
      
    </div>

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="max-w-2xl">
        {/* Tag */}
        <span className="inline-block border border-primary rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary mb-6">
          Elevate Your Business
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
          Help your Business Grow Quickly.
        </h1>

        {/* Subtext */}
        <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-lg">
          We provide expert tax advisory, accounting, and AI consulting services for businesses across Estonia and the Baltics.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-7 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book a Discovery Call
          </Link>
          <button className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
              <span className="text-lg">▶</span>
            </span>
            Watch the Video
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
