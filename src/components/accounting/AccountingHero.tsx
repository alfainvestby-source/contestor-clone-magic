import { Link } from "react-router-dom";

const AccountingHero = () => (
  <section className="bg-secondary">
    <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="text-sm text-muted-foreground mb-4">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        {" > "}
        <span>Accounting Services</span>
      </div>
      <h1 className="text-3xl lg:text-5xl font-bold text-foreground max-w-2xl">
        Accounting Services
      </h1>
    </div>
  </section>
);

export default AccountingHero;
