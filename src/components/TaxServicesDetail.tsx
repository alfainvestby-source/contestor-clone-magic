const services = [
  {
    tag: "Corporate income tax advice",
    color: "bg-primary text-primary-foreground",
    title: "Corporate Income Tax Advice",
    description:
      "Whether you need help with tax planning, restructuring, or cross-border investments, we guide you through complex corporate tax matters. Our specialists advise on corporate income tax, transfer pricing, M&A tax due diligence, and help ensure compliance with local and international regulations.",
    bullets: [
      "Tax efficient structuring",
      "Transfer pricing documentation",
      "Tax risk management",
    ],
  },
  {
    tag: "Tax compliance",
    color: "bg-primary text-primary-foreground",
    title: "Tax Compliance",
    description:
      "Our compliance team handles all tax reporting, filing, and submissions so you can maintain full confidence in your tax position.",
    bullets: [
      "Corporate tax compliance (CIT) and transaction tax support",
      "Tax audit management",
      "Tax and duty filings",
      "Mandatory disclosure (DAC6) compliance",
    ],
  },
];

const TaxServicesDetail = () => (
  <section id="services" className="bg-background py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-10">Tax Services</h2>
      <div className="space-y-12">
        {services.map((s) => (
          <div key={s.tag} className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded mb-4 ${s.color}`}>
                {s.tag}
              </span>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TaxServicesDetail;
