import { Link } from "react-router-dom";

const AICta = () => (
  <section className="bg-hero text-hero-foreground py-12">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h2 className="text-xl lg:text-2xl font-semibold text-hero-foreground mb-4">
        Ready to transform your business with AI?
      </h2>
      <p className="text-sm text-hero-foreground/80 max-w-xl mx-auto mb-6 leading-relaxed">
        Whether you're just beginning your AI journey or looking to scale existing initiatives, our team is ready to help you unlock real business value.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center rounded bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        Contact the team
      </Link>
    </div>
  </section>
);

export default AICta;
