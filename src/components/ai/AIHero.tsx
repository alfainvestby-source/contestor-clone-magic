import { Link } from "react-router-dom";

const AIHero = () => (
  <section className="bg-hero text-hero-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="text-sm text-hero-foreground/60 mb-4">
        <Link to="/" className="hover:text-hero-foreground transition-colors">Services</Link>
        {" > "}
        <span>AI Consulting</span>
      </div>
      <h1 className="text-3xl lg:text-5xl font-bold text-hero-foreground max-w-3xl mb-6">
        Artificial Intelligence Consulting & Strategy
      </h1>
      <p className="text-sm text-hero-foreground/80 max-w-2xl leading-relaxed">
        With artificial intelligence at a crucial inflection point, Contestor helps organisations weave together human and technological capabilities to maximise value, productivity, and innovation from AI.
      </p>
    </div>
  </section>
);

export default AIHero;
