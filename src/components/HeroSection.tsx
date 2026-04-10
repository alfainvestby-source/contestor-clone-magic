const HeroSection = () => (
  <section className="relative bg-secondary">
    <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="text-sm text-muted-foreground mb-4">
        <span>Tax Services</span> &gt; <span>Estonia</span> &gt; <span>Tax Services</span>
      </div>
      <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 max-w-2xl">
        Tax Services
      </h1>
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Contestor is a advisory firms in Estonia, providing expert tax consulting services to businesses of all sizes. Our team combines deep technical knowledge with practical industry experience to deliver tailored tax solutions that help clients manage risk, ensure compliance, and optimize their tax position.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our integrated approach enables us to provide comprehensive, cross-border tax advice while maintaining the highest standards of quality and professional ethics.
          </p>
        </div>
        <div className="relative rounded overflow-hidden shadow-lg">
          <img
            src="https://www.pwc.com/ee/en/services/assets/Group-34_banner_1600x900.png"
            alt="Contestor tax advisors working together"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-4 right-4 bg-primary w-12 h-12 rounded flex items-center justify-center">
            <span className="text-primary-foreground text-lg">▶</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
