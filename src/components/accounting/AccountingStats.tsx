import { Users, Award, FileText, Calculator } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "More than 70 international companies advised annually",
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "30+ years of experience in local and international accounting",
  },
  {
    icon: <Calculator className="w-10 h-10 text-primary" />,
    title: "Over 50 accounting specialists across the Baltics",
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Over 1000 tax returns completed and 70 financial statements prepared annually",
  },
];

const AccountingStats = () => (
  <section className="bg-background py-10">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.title} className="flex flex-col items-center text-center gap-3 bg-secondary rounded-lg p-6">
            {s.icon}
            <span className="font-semibold text-foreground text-sm">{s.title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AccountingStats;
