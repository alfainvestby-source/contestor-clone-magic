import { ArrowUpRight } from "lucide-react";

const links = [
  "Contestor Baltic employment portal MIND-MERG",
  "Contestor Lithuania tax and legal services →",
  "Contestor Finland tax and legal services →",
  "EU AI Act live Advisory alert →",
];

const RegionalInfo = () => (
  <section className="bg-background py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-xl font-semibold text-foreground mb-6">Regional tax information</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors py-3 border-b border-border"
          >
            {link}
            <ArrowUpRight className="w-4 h-4 text-primary flex-shrink-0" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default RegionalInfo;
