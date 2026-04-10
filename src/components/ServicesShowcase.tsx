import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Tax Advisory Services",
    tags: ["Tax", "Compliance", "Strategy"],
    description:
      "Expert tax consulting to help businesses manage risk, ensure compliance, and optimize their tax position across Estonia and the Baltics.",
    href: "/tax-services",
    featured: false,
  },
  {
    title: "Accounting & Financial Reporting",
    tags: ["Accounting", "Reporting", "Accuracy"],
    description:
      "Reliable accounting and smart financial strategies that improve accuracy, control costs, and maintain regulatory compliance.",
    href: "/accounting-services",
    featured: true,
  },
  {
    title: "AI Consulting & Automation",
    tags: ["AI", "Automation", "Innovation"],
    description:
      "Clear guidance on adopting AI and automation to streamline operations, reduce costs, and support confident decision-making.",
    href: "/ai-consulting",
    featured: false,
  },
];

const ServicesShowcase = () => (
  <section className="py-16 lg:py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-3">
            <span className="w-5 h-5 rounded bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
              C
            </span>
            Our Expertise
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            Solutions Designed to Move
            <br />
            Your Business Forward
          </h2>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full border border-foreground px-5 py-2.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors self-start sm:self-auto"
        >
          View All Services
        </Link>
      </div>

      {/* Service cards */}
      <div className="flex flex-col gap-5">
        {services.map((service) => (
          <Link
            key={service.title}
            to={service.href}
            className={`group flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-xl border p-5 transition-colors ${
              service.featured
                ? "bg-primary border-primary"
                : "bg-background border-border hover:border-primary/40"
            }`}
          >
            {/* Tags + text */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-2 mb-3">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium rounded-full px-3 py-1 border ${
                      service.featured
                        ? "border-primary-foreground/30 text-primary-foreground/90"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3
                className={`text-lg font-semibold mb-1.5 ${
                  service.featured ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  service.featured
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>
            </div>

            {/* Arrow */}
            <span
              className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                service.featured
                  ? "border-primary-foreground/30 text-primary-foreground group-hover:bg-primary-foreground/10"
                  : "border-border text-foreground group-hover:bg-secondary"
              }`}
            >
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesShowcase;
