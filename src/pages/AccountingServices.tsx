import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccountingHero from "@/components/accounting/AccountingHero";
import AccountingStats from "@/components/accounting/AccountingStats";
import AccountingIntro from "@/components/accounting/AccountingIntro";
import AccountingServicesTabs from "@/components/accounting/AccountingServicesTabs";
import AccountingCta from "@/components/accounting/AccountingCta";
import AccountingContact from "@/components/accounting/AccountingContact";
import SEOHead from "@/components/SEOHead";

const accountingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Accounting Services",
  provider: { "@type": "Organization", name: "Contestor" },
  description: "Professional accounting, bookkeeping, payroll, and financial reporting services in Estonia.",
  areaServed: { "@type": "Country", name: "Estonia" },
  serviceType: "Accounting",
};

const AccountingServices = () => (
  <div className="min-h-screen flex flex-col">
    <SEOHead
      title="Accounting Services in Estonia"
      description="Professional accounting, bookkeeping, payroll, and financial reporting services in Estonia. 20+ years of local and international experience."
      canonical="/accounting-services"
      jsonLd={accountingJsonLd}
    />
    <Navbar />
    <main>
      <AccountingHero />
      <AccountingStats />
      <AccountingIntro />
      <AccountingCta />
      <AccountingServicesTabs />
      <AccountingContact />
    </main>
    <Footer />
  </div>
);

export default AccountingServices;
