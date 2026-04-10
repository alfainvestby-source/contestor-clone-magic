import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ContactCta = ({ heading = "Get in touch", description = "Have questions? We'd love to hear from you." }: { heading?: string; description?: string }) => (
  <section className="bg-secondary py-12">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h2 className="text-xl font-semibold text-foreground mb-4">{heading}</h2>
      <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">{description}</p>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Contact us <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </section>
);

export default ContactCta;
