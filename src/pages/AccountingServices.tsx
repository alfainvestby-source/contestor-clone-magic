import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccountingHero from "@/components/accounting/AccountingHero";
import AccountingStats from "@/components/accounting/AccountingStats";
import AccountingIntro from "@/components/accounting/AccountingIntro";
import AccountingServicesTabs from "@/components/accounting/AccountingServicesTabs";
import AccountingCta from "@/components/accounting/AccountingCta";
import AccountingContact from "@/components/accounting/AccountingContact";

const AccountingServices = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <AccountingHero />
    <AccountingStats />
    <AccountingIntro />
    <AccountingCta />
    <AccountingServicesTabs />
    <AccountingContact />
    <Footer />
  </div>
);

export default AccountingServices;
