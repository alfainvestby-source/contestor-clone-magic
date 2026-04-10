import ctaImg from "@/assets/cta-banner.jpg";
import { Button } from "@/components/ui/button";

const CtaBanner = () => (
  <section className="relative h-64 lg:h-80 overflow-hidden">
    <img
      src={ctaImg}
      alt="City skyline"
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-hero/70" />
    <div className="relative z-10 container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
      <p className="text-hero-foreground/80 text-sm mb-2">We unite expertise and tech</p>
      <h2 className="text-2xl lg:text-4xl font-bold text-hero-foreground mb-4 max-w-lg leading-tight">
        so you can outthink, outpace and outperform
      </h2>
      <Button variant="hero" className="w-fit">
        Find out more →
      </Button>
    </div>
  </section>
);

export default CtaBanner;
