import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TaxServicesDetail from "@/components/TaxServicesDetail";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const taxJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tax Advisory Services",
  provider: { "@type": "Organization", name: "Contestor" },
  description:
    "Expert tax consulting, corporate income tax advice, and compliance services for businesses in Estonia and the Baltics.",
  areaServed: { "@type": "Country", name: "Estonia" },
  serviceType: "Tax Advisory",
};

const TaxServices = () => (
  <div className="min-h-screen flex flex-col">
    <SEOHead
      title="Tax Advisory Services in Estonia"
      description="Expert tax consulting, corporate income tax advice, transfer pricing, and compliance services in Estonia. 20+ years of experience."
      canonical="/tax-services"
      jsonLd={taxJsonLd}
    />
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-secondary py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground">Home</Link>
            {" > "}
            <span>Tax Services</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 max-w-2xl">
            Tax Advisory Services
          </h1>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Contestor is one of the leading advisory firms in Estonia, providing expert tax consulting services to businesses of all sizes. Our team combines deep technical knowledge with practical industry experience to deliver tailored tax solutions.
          </p>
        </div>
      </section>

      <TaxServicesDetail />

      {/* CTA */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">
            Need tax advice?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Get in touch with our tax specialists today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded bg-background text-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default TaxServices;
