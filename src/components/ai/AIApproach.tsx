import { Target, Layers, Lightbulb } from "lucide-react";

const plays = [
  {
    icon: <Target className="w-10 h-10 text-primary" />,
    number: "01",
    title: "Deploy AI in Everyday Tools",
    description:
      "Integrate AI capabilities into your existing workflows and tools to boost productivity across the organisation. Start with high-impact, low-risk use cases that deliver quick wins.",
  },
  {
    icon: <Layers className="w-10 h-10 text-primary" />,
    number: "02",
    title: "Reshape Critical Functions",
    description:
      "Transform key business functions — from finance and compliance to customer service — by embedding AI-driven automation, analytics, and decision support at their core.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    number: "03",
    title: "Invent New Business Models",
    description:
      "Leverage AI to create entirely new products, services, and revenue streams. We help you identify breakthrough opportunities and build the capabilities to bring them to life.",
  },
];

const AIApproach = () => (
  <section className="bg-background py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
        Our Approach to AI at Scale
      </h2>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-10">
        We treat every AI transformation as a unique journey, shaped around your starting point, circumstances, and goals. Our approach emphasises algorithms (10%), technology & data (20%), and people & processes (70%) — because sustainable AI value comes from organisational change, not just technology.
      </p>

      <h3 className="text-lg font-semibold text-foreground mb-6">
        Three Strategic Plays to Maximise AI Value
      </h3>
      <div className="grid sm:grid-cols-3 gap-6">
        {plays.map((play) => (
          <div key={play.number} className="bg-secondary rounded-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              {play.icon}
              <span className="text-2xl font-bold text-primary">{play.number}</span>
            </div>
            <h4 className="text-base font-semibold text-foreground">{play.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{play.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AIApproach;
