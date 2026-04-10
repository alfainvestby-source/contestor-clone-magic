import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Mail, Phone, MapPin } from "lucide-react";

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Contestor",
  description: "Get in touch with Contestor for tax, accounting, and AI consulting services in Estonia.",
  mainEntity: {
    "@type": "Organization",
    name: "Contestor",
    telephone: "+372 50 72600",
    email: "contestor@contestor.ee",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tatari 1",
      addressLocality: "Tallinn",
      postalCode: "10116",
      addressCountry: "EE",
    },
  },
};

const Contact = () => (
  <>
    <SEOHead
      title="Contact Us"
      description="Get in touch with Contestor for expert tax, accounting, and AI consulting services in Tallinn, Estonia."
      canonical="/contact"
      jsonLd={contactJsonLd}
    />
    <Navbar />
    <main>
      <section className="bg-hero text-hero-foreground py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <nav aria-label="Breadcrumb">
            <p className="text-sm text-hero-foreground/60 mb-4">
              <a href="/" className="hover:text-hero-foreground">Home</a> &gt; Contact us
            </p>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-bold">Contact us</h1>
          <p className="mt-4 text-hero-foreground/80 max-w-2xl text-sm leading-relaxed">
            Have a question or need expert advice? Get in touch with our team and we'll respond promptly.
          </p>
        </div>
      </section>

      <section className="bg-background py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl space-y-8">
          <h2 className="text-xl font-semibold text-foreground">Get in touch</h2>
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
    </main>
    <Footer />
  </>
);

export default Contact;
