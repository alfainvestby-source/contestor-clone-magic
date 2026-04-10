import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIHero from "@/components/ai/AIHero";
import AIStats from "@/components/ai/AIStats";
import AIIntro from "@/components/ai/AIIntro";
import AIServicesCards from "@/components/ai/AIServicesCards";
import AIApproach from "@/components/ai/AIApproach";
import AICta from "@/components/ai/AICta";
import AIContact from "@/components/ai/AIContact";

const AIConsulting = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <AIHero />
    <AIStats />
    <AIIntro />
    <AIServicesCards />
    <AIApproach />
    <AICta />
    <AIContact />
    <Footer />
  </div>
);

export default AIConsulting;
