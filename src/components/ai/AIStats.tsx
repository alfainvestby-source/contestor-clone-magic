import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: <TrendingUp className="w-8 h-8 text-primary" />, title: "70% of AI value comes from people & processes" },
  { icon: <Users className="w-8 h-8 text-primary" />, title: "Cross-functional teams of AI & domain experts" },
  { icon: <Globe className="w-8 h-8 text-primary" />, title: "Serving clients across the Baltics & Nordics" },
  { icon: <Award className="w-8 h-8 text-primary" />, title: "Proven track record in regulated industries" },
];

const AIStats = () => (
  <section className="bg-hero text-hero-foreground py-10">
    <div className="container mx-auto px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.title} className="flex items-start gap-3">
          {stat.icon}
          <p className="text-sm font-medium text-hero-foreground">{stat.title}</p>
        </div>
      ))}
    </div>
  </section>
);

export default AIStats;
