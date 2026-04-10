import { Bot, Sparkles, ShieldCheck, BarChart3, Workflow, Brain } from "lucide-react";

const services = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Agents & Automation",
    description:
      "Imagine a teammate that works tirelessly, learns continuously, and adapts to your needs. We help you design, build, and deploy AI agents that streamline processes, drive insights, and augment human potential across your operations.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Generative AI",
    description:
      "Generative AI is transforming how businesses create content, analyse data, and interact with customers. We help you identify high-impact use cases and implement generative AI solutions that deliver measurable business value.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Responsible AI",
    description:
      "Our responsible AI consulting helps organisations execute a strategic approach to AI governance through a tailored programme covering ethics, transparency, fairness, privacy, and accountability.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: "AI Strategy & Roadmap",
    description:
      "We work with leadership teams to develop comprehensive AI strategies aligned with business objectives, identifying quick wins and long-term transformation opportunities across the organisation.",
  },
  {
    icon: <Workflow className="w-8 h-8 text-primary" />,
    title: "Process Optimisation with AI",
    description:
      "From finance and accounting to compliance and reporting, we apply AI to optimise critical business processes — reducing manual effort, improving accuracy, and accelerating decision-making.",
  },
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "AI Training & Adoption",
    description:
      "Technology alone is not enough. We provide tailored training programmes and change management support to ensure your teams adopt AI tools effectively and confidently.",
  },
];

const AIServicesCards = () => (
  <section className="bg-secondary py-12" id="ai-services">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-8">
        Our AI Services
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-background rounded-lg p-6 flex flex-col gap-4 border border-border hover:shadow-md transition-shadow"
          >
            {service.icon}
            <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AIServicesCards;
