import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ContactBanner from "@/components/ContactBanner";
import ServicesGrid from "@/components/ServicesGrid";
import TaxServicesDetail from "@/components/TaxServicesDetail";



import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <ContactBanner />
    <ServicesGrid />
    <TaxServicesDetail />
    
    
    
    <CtaBanner />
    <Footer />
  </div>
);

export default Index;
