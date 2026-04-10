const footerColumns = [
  {
    title: "Solutions",
    links: ["Audit", "Advisory", "Tax Services", "Legal Services", "Deals"],
  },
  {
    title: "About",
    links: ["Company Profile", "Diversity & Inclusion", "Global Network", "Corporate Responsibility"],
  },
  {
    title: "Press Room",
    links: ["News Releases", "Media Contacts", "Annual Report"],
  },
  {
    title: "Contacts",
    links: ["Email Us", "Find an Office", "Client Portal"],
  },
];

const Footer = () => (
  <footer className="bg-hero text-hero-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-12">

      <div className="border-t border-hero-foreground/10 pt-8">
        <p className="text-xs text-hero-foreground/50 mb-6">
          Tax Services &gt; Estonia &gt; Tax Services
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-hero-foreground/60 hover:text-hero-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
