import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Tax Services", href: "/tax-services" },
  { label: "Accounting", href: "/accounting-services" },
  { label: "AI Consulting", href: "/ai-consulting" },
  { label: "AI News", href: "/news" },
];

const NavLink = ({ item, onClick }: { item: typeof navItems[0]; onClick?: () => void }) => {
  const isInternal = item.href.startsWith("/");
  const className = "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors";

  if (isInternal) {
    return (
      <Link to={item.href} className={className} onClick={onClick}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={item.href} className={className} onClick={onClick}>
      {item.label}
    </a>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-foreground">
          contestor
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact us
          </Link>
          
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <div key={item.label} className="block">
              <NavLink item={item} onClick={() => setMobileOpen(false)} />
            </div>
          ))}
          <Link to="/contact" className="block text-sm font-medium text-muted-foreground hover:text-foreground">
            Contact us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
