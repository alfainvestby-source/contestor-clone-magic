import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

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
      <HeroSection />
    </main>
    <Footer />
  </div>
);

export default Index;
