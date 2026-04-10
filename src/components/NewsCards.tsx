import complianceImg from "@/assets/service-compliance.jpg";
import advisoryImg from "@/assets/service-advisory.jpg";
import consultingImg from "@/assets/service-consulting.jpg";

const articles = [
  {
    image: complianceImg,
    category: "Articles",
    title: "Residence certificates, reporting & Tax Rulings: Tax compliance for established businesses",
    excerpt:
      "Operating an international business requires ongoing compliance. Our experts help you navigate reporting obligations, securing tax rulings, and maintaining proper documentation across jurisdictions.",
  },
  {
    image: advisoryImg,
    category: "Articles",
    title: "Corrections of deposit refund amounts: Tax specialist insights on tax impact",
    excerpt:
      "Changes in deposit return schemes may have unexpected tax consequences. Our specialists analyze the implications and provide guidance on mitigating potential risks.",
  },
  {
    image: consultingImg,
    category: "Articles",
    title: "Value added tax and transfer pricing: related OECD implementation rules shortly",
    excerpt:
      "The latest OECD guidance on VAT and transfer pricing brings changes that could significantly impact cross-border operations. We summarize key developments.",
  },
];

const NewsCards = () => (
  <section className="bg-secondary py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-xl font-semibold text-foreground mb-8">Tax news and articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((a) => (
          <article key={a.title} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src={a.image}
              alt={a.title}
              loading="lazy"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{a.category}</span>
              <h3 className="text-sm font-semibold text-foreground mt-2 mb-2 line-clamp-2">{a.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">{a.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default NewsCards;
