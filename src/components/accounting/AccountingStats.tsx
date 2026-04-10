import { Award } from "lucide-react";

const AccountingStats = () => (
  <section className="bg-background py-10">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex justify-center">
        <div className="flex flex-col items-center text-center gap-3 bg-secondary rounded-lg p-6 max-w-md">
          <Award className="w-10 h-10 text-primary" />
          <span className="font-semibold text-foreground text-sm">20+ years of experience in local and international accounting</span>
        </div>
      </div>
    </div>
  </section>
);

export default AccountingStats;
