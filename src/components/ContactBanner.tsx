import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ContactBanner = () => (
  <Link to="/contact" className="block">
    <section className="bg-hero text-hero-foreground py-8 hover:opacity-90 transition-opacity cursor-pointer">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Mail className="w-8 h-8" />
        <div className="text-center sm:text-left">
          <p className="text-xs uppercase tracking-wider opacity-80 mb-1">Get in touch</p>
          <p className="text-lg font-semibold">
            Send a contact request and we will get back to you shortly. →
          </p>
        </div>
      </div>
    </section>
  </Link>
);

export default ContactBanner;
