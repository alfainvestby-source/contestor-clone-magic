import Navbar from "@/components/Navbar";
import VantaHero from "@/components/VantaHero";
import StatsSection from "@/components/StatsSection";
import ContactBanner from "@/components/ContactBanner";
import ServicesGrid from "@/components/ServicesGrid";
import TaxServicesDetail from "@/components/TaxServicesDetail";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

// Accounting sections
import AccountingStats from "@/components/accounting/AccountingStats";
import AccountingIntro from "@/components/accounting/AccountingIntro";
import AccountingServicesTabs from "@/components/accounting/AccountingServicesTabs";
import AccountingCta from "@/components/accounting/AccountingCta";
import AccountingContact from "@/components/accounting/AccountingContact";

// AI sections
import AIStats from "@/components/ai/AIStats";
import AIIntro from "@/components/ai/AIIntro";
import AIServicesCards from "@/components/ai/AIServicesCards";
import AIApproach from "@/components/ai/AIApproach";
import AIContact from "@/components/ai/AIContact";

// Contact
import { Mail, Phone, MapPin } from "lucide-react";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Contestor",
  url: "https://contestor-clone-magic.lovable.app",
  logo: "https://contestor-clone-magic.lovable.app/placeholder.svg",
  description: "Expert tax advisory, accounting, and AI consulting services in Estonia and the Baltics.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tatari 1",
    addressLocality: "Tallinn",
    postalCode: "10116",
    addressCountry: "EE",
  },
  telephone: "+372 50 72600",
  email: "contestor@contestor.ee",
  areaServed: [
    { "@type": "Country", name: "Estonia" },
    { "@type": "Place", name: "Baltics" },
  ],
  serviceType: ["Tax Advisory", "Accounting Services", "AI Consulting"],
  geo: {
    "@type": "GeoCoordinates",
    latitude: 59.437,
    longitude: 24.7536,
  },
};

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <SEOHead
      title="Tax, Accounting & AI Consulting in Estonia"
      description="Contestor provides expert tax advisory, accounting, and AI consulting services in Estonia and the Baltics. 20+ years of experience."
      canonical="/"
      jsonLd={organizationJsonLd}
    />
    <Navbar />
    <main>
      {/* Hero */}
      <VantaHero />

      {/* Tax Services */}
      <TaxServicesDetail />
      <StatsSection />
      <ContactBanner />

      {/* Accounting Services */}
      <section id="accounting">
        <div className="bg-hero text-hero-foreground py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Accounting Services</h2>
          </div>
        </div>
        <AccountingStats />
        <AccountingIntro />
        <AccountingCta />
        <AccountingServicesTabs />
        <AccountingContact />
      </section>

      {/* AI Consulting */}
      <section id="ai-consulting">
        <div className="bg-hero text-hero-foreground py-12 lg:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Artificial Intelligence Consulting & Strategy
            </h2>
            <p className="text-sm text-hero-foreground/80 max-w-2xl leading-relaxed mt-4">
              With artificial intelligence at a crucial inflection point, Contestor helps organisations weave together human and technological capabilities to maximise value, productivity, and innovation from AI.
            </p>
          </div>
        </div>
        <AIStats />
        <AIIntro />
        <AIServicesCards />
        <AIApproach />
        <AIContact />
      </section>

      {/* AI News */}
      <ServicesGrid />

      {/* Contact */}
      <section id="contact-section" className="bg-background py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Contact us</h2>
          <address className="not-italic space-y-5">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <a href="mailto:contestor@contestor.ee" className="text-sm text-primary hover:underline">
                  contestor@contestor.ee
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <a href="tel:+3725072600" className="text-sm text-primary hover:underline">
                  +372 50 72600
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-foreground">Office</p>
                <p className="text-sm text-muted-foreground">Tatari 1, Tallinn<br />Estonia, 10116</p>
              </div>
            </div>
          </address>
        </div>
      </section>

      <CtaBanner />
    </main>
    <Footer />
  </div>
);

export default Index;
