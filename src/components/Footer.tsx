import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Tax Services", href: "/#services" },
  { label: "Accounting", href: "/accounting-services" },
  { label: "AI Consulting", href: "/ai-consulting" },
  { label: "AI News", href: "/news" },
  { label: "Contact us", href: "/contact" },
];

const Footer = () => (
  <footer className="bg-hero text-hero-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="flex flex-wrap gap-6">
        {footerLinks.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="text-sm text-hero-foreground/60 hover:text-hero-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="border-t border-hero-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="text-2xl font-extrabold tracking-tight">contestor</span>
        <p className="text-xs text-hero-foreground/40 max-w-xl">
          © 2025 Contestor. All rights reserved. Contestor refers to the Estonian member firm, and may sometimes refer to the Contestor network.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
