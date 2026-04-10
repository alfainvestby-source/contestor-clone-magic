import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIHero from "@/components/ai/AIHero";
import AIStats from "@/components/ai/AIStats";
import AIIntro from "@/components/ai/AIIntro";
import AIServicesCards from "@/components/ai/AIServicesCards";
import AIApproach from "@/components/ai/AIApproach";
import AIContact from "@/components/ai/AIContact";
import SEOHead from "@/components/SEOHead";

const aiJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Consulting",
  provider: { "@type": "Organization", name: "Contestor" },
  description: "AI strategy, automation, generative AI, and responsible AI consulting for businesses in Estonia and the Baltics.",
  areaServed: [
    { "@type": "Country", name: "Estonia" },
    { "@type": "Place", name: "Baltics" },
  ],
  serviceType: "AI Consulting",
};

const AIConsulting = () => (
  <div className="min-h-screen flex flex-col">
    <SEOHead
      title="AI Consulting Services"
      description="AI strategy, automation, generative AI, and responsible AI consulting for businesses in Estonia and the Baltics."
      canonical="/ai-consulting"
      jsonLd={aiJsonLd}
    />
    <Navbar />
    <main>
      <AIHero />
      <AIStats />
      <AIIntro />
      <AIServicesCards />
      <AIApproach />
      <AIContact />
    </main>
    <Footer />
  </div>
);

export default AIConsulting;
