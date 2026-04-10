import { Link } from "react-router-dom";
import heroAbstract from "@/assets/hero-abstract.png";

const AccountingHero = () => (
  <section className="relative py-12 lg:py-20 overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroAbstract} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>
    <div className="container relative z-10 mx-auto px-4 lg:px-8">
      <div className="text-sm text-primary-foreground/60 mb-4">
        <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
        {" > "}
        <span>Accounting Services</span>
      </div>
      <h1 className="text-3xl lg:text-5xl font-bold text-primary-foreground max-w-2xl">
        Accounting Services
      </h1>
    </div>
  </section>
);

export default AccountingHero;
