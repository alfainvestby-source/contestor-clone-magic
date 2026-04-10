import { Award, Users } from "lucide-react";

const stats = [
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "20+ years of providing tax advice in Estonia",
  },
];

const StatsSection = () => (
  <section className="bg-background py-10">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-6">
        Our specialists provide assistance with:
      </h2>
      <ul className="text-muted-foreground space-y-2 mb-10 text-sm leading-relaxed">
        <li>• Corporate tax advisory, including transfer pricing and compliance</li>
        <li>• Mergers and acquisitions, restructuring</li>
        <li>• Income tax returns, VAT and customs and excise duties</li>
        <li>• International tax planning and cross-border transactions, including transfer pricing documentation, accounting special situations</li>
      </ul>
      <div className="grid sm:grid-cols-2 gap-6">
        {stats.map((s) => (
          <div key={s.title} className="flex items-center gap-4 bg-secondary rounded-lg p-5">
            {s.icon}
            <span className="font-semibold text-foreground">{s.title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
