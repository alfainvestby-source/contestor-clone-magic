import { Link } from "react-router-dom";
import { Check, Globe, Shield, Building2, CreditCard, MapPin, Users, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import heroAbstract from "@/assets/hero-abstract.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const whyEstonia = [
  { icon: Users, title: "e-Residency Program", desc: "Simplifies company incorporation and management." },
  { icon: Globe, title: "Online Services", desc: "Complete everything online, including 95% of tax declarations." },
  { icon: Shield, title: "0% Corporate Tax", desc: "Enjoy 0% corporate tax on retained or reinvested profits." },
  { icon: Building2, title: "Convenient Regulation", desc: "Minimum share capital requirement as low as €0.01." },
  { icon: MapPin, title: "Location Independence", desc: "With an e-residency card, manage your company from anywhere in the world." },
  { icon: Globe, title: "EU Advantages", desc: "Gain access to the EU market and enhanced trust for your business." },
  { icon: CreditCard, title: "Global Payment Gateways", desc: "Access global payment providers like PayPal, Wise, and Revolut." },
  { icon: Users, title: "100% Foreign Ownership", desc: "Full control of your business without the need for local directors or shareholders." },
];

const packages = [
  {
    title: "One Year Package",
    desc: "For those seeking a legal address and authorized contact person.",
    price: "€124",
    period: "/ Year + VAT",
    features: [
      "Legal address in Estonia",
      "Contact person",
      "Digitizing and forwarding of incoming mail",
      "Includes detailed guide to make the change",
      "Includes 1 year contact person and legal address",
    ],
  },
  {
    title: "5-Year Loyalty & Price Protection",
    desc: "Our most popular package, offering exceptional value.",
    price: "€109",
    period: "/ Year + VAT",
    popular: true,
    features: [
      "Legal address in Estonia",
      "Contact person",
      "Digitizing and forwarding of incoming mail",
      "Includes detailed guide to make the change",
      "Includes 5 year contact person and legal address",
    ],
  },
  {
    title: "Company Formation with e-Residency",
    desc: "Ideal for both e-residents and Estonian ID card holders.",
    price: "€109-124",
    period: "/ Year + VAT",
    features: [
      "Includes 1 or 5 year contact person and legal address",
      "Assistance with the formation of your private limited company (OÜ)",
      "Detailed guide for registration documents in e-Business Register",
      "Pay state fee directly at business registry (265€)",
      "Articles of association",
      "Includes consultation and advice",
    ],
  },
];

const accountingServices = [
  "Organizing the current accounting of the company",
  "Income and social tax declaration (TSD)",
  "Value added tax return (KMD)",
  "Report on intra-Community supply (VD)",
  "Fixed asset accounting",
];

const additionalServices = [
  { name: "Payroll calculation", price: "€5 per employee/month" },
  { name: "Annual report", price: "from €75" },
  { name: "Company registry card with shareholders' names (English, apostilled)", price: "€150" },
  { name: "Articles of association (English, apostilled)", price: "€175" },
  { name: "Company liquidation", price: "from €250" },
];

const reviews = [
  { name: "Amir Memarian", text: "Excellent services! One of the best in the business. Efficiency, response time, and explanation of everything were top-notch." },
  { name: "Alex R", text: "Seamless, fast and good communication." },
  { name: "Aymen Bouchoucha", text: "Great Service - Quick - And also best price." },
  { name: "Wael Rashed", text: "Truly the best service! The support team is amazing and everything was set up easily within minutes." },
  { name: "Collins Joe Annan", text: "It was such a great experience! Quick responses to mails and professionalism is just super." },
  { name: "Muhammad Shoaib", text: "Excellent and amazing services. The CEO personally helped me and sorted my issues. The best in the business." },
];

const faqs = [
  {
    q: "What is a legal address in Estonia?",
    a: "A legal address is a mandatory registered address for your Estonian company in the Business Register. It's where official correspondence is received.",
  },
  {
    q: "Do I need an e-Residency card?",
    a: "Yes, an e-Residency digital ID card allows you to manage your Estonian company fully online from anywhere in the world.",
  },
  {
    q: "How long does company formation take?",
    a: "Company formation typically takes 1-2 business days once all documents are prepared.",
  },
  {
    q: "Can I switch from another service provider?",
    a: "Yes! We handle the registry update for you when you switch to our services.",
  },
  {
    q: "What is the corporate tax rate in Estonia?",
    a: "Estonia has 0% corporate tax on retained or reinvested profits. Tax is only applied when profits are distributed as dividends.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Remote EU Company Formation",
  provider: { "@type": "Organization", name: "Contestor" },
  description: "Start and manage your EU company remotely from Estonia. Legal address, contact person, and company formation services.",
  areaServed: { "@type": "Country", name: "Estonia" },
  serviceType: "Company Formation",
};

const RemoteEUCompany = () => (
  <div className="min-h-screen flex flex-col">
    <SEOHead
      title="Remote EU Company – Legal Address & Formation in Estonia"
      description="Start your EU company remotely in Estonia. Legal address, contact person, company formation, and accounting services. Official e-Residency partner."
      canonical="/remote-eu-company"
      jsonLd={jsonLd}
    />
    <Navbar />
    <main>
      {/* Hero – same image as accounting, 2x height */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroAbstract} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="text-sm text-primary-foreground/60 mb-4">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            {" > "}
            <span>Remote EU Company</span>
          </div>
          <span className="inline-block border border-primary-foreground/30 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary-foreground/80 mb-6">
            Official e-Residency Partner
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground max-w-3xl mb-6">
            Licensed Legal Address Service in Tallinn, Estonia
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
            Secure your company's mandatory presence in the Estonian Business Register with transparent, professional support.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#packages"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Choose Your Package
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 text-primary-foreground px-7 py-3 text-sm font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Open EU Company Remotely
            </Link>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> Formation in 1-2 business days</li>
            <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> 100% remote with e-Residency</li>
            <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-primary" /> Switch to us and save</li>
          </ul>
        </div>
      </section>

      {/* Why Estonia */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            Why Estonia is Ideal for Starting a Company
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Estonia's highly digitalized business environment makes it easy to set up and manage a company online with a favorable tax system and minimal bureaucracy.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyEstonia.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">About Us in Numbers</h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-extrabold text-primary">2018</p>
              <p className="text-muted-foreground mt-1">Serving e-Residents since</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-primary">1000+</p>
              <p className="text-muted-foreground mt-1">Active clients</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-primary">110+</p>
              <p className="text-muted-foreground mt-1">5★ reviews on marketplace</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="packages" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm font-semibold text-primary text-center mb-2 uppercase tracking-widest">Flexible Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
            Choose a Plan That Fits Your Needs
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            We offer a range of business services to help support your company's financial and administrative needs.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className={`bg-card border rounded-xl p-8 flex flex-col ${
                  pkg.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <span className="inline-block self-start bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-opacity ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "bg-secondary text-foreground hover:opacity-80"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accounting Services */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-widest">Flexible Pricing</p>
          <h2 className="text-3xl font-bold text-foreground mb-8">Accounting Services</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-2">Monthly Bookkeeping</h3>
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-foreground">From €59</span>
                <span className="text-muted-foreground text-sm ml-1">/ month + 24% VAT</span>
              </div>
              <ul className="space-y-3 mb-6">
                {accountingServices.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Get Quote
              </Link>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Additional Services</h3>
              <ul className="space-y-4">
                {additionalServices.map((s) => (
                  <li key={s.name} className="flex justify-between items-start gap-4 text-sm">
                    <span className="text-muted-foreground">{s.name}</span>
                    <span className="font-semibold text-foreground whitespace-nowrap">{s.price}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-6">All prices exclude 24% VAT.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="text-3xl font-bold text-foreground text-center mb-2">Excellent</h2>
          <p className="text-muted-foreground text-center mb-12">Based on 51 reviews</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">"{r.text}"</p>
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Your Questions Answered</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
                <AccordionTrigger className="text-foreground font-medium text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-widest mb-4">Launch with ease</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Boost your business with our services like a legal address in Estonia and company formation. Contact us today to see how we can help you succeed.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-background text-foreground px-8 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Write to Us
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default RemoteEUCompany;
