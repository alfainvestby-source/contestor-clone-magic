import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-hero-foreground/60 mb-4">
            <a href="/" className="hover:text-hero-foreground">Home</a> &gt; Contact us
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold">Contact us</h1>
          <p className="mt-4 text-hero-foreground/80 max-w-2xl text-sm leading-relaxed">
            Have a question or need expert advice? Get in touch with our team and we'll respond promptly.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl space-y-8">
          <h2 className="text-xl font-semibold text-foreground">Get in touch</h2>
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <a href="mailto:contestor@contestor.ee" className="text-sm text-primary hover:underline">
                  contestor@contestor.ee
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Phone</p>
                <a href="tel:+3725551234" className="text-sm text-primary hover:underline">
                  +372 555 1234
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Office</p>
                <p className="text-sm text-muted-foreground">Tallinn, Estonia</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary rounded-lg p-5">
            <h3 className="text-lg font-semibold text-foreground mb-2">Office hours</h3>
            <p className="text-sm text-muted-foreground">Monday – Friday: 9:00 – 18:00</p>
            <p className="text-sm text-muted-foreground">Saturday – Sunday: Closed</p>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
