import complianceImg from "@/assets/service-compliance.jpg";
import advisoryImg from "@/assets/service-advisory.jpg";
import consultingImg from "@/assets/service-consulting.jpg";

const images = [
  { src: complianceImg, alt: "Contestor tax and accounting advisory by people in Estonia", label: "Contestor Estonia tax and accounting advisory by people in 2025" },
  { src: advisoryImg, alt: "Contestor Estonia tax advisory analytics", label: "Contestor Estonia tax advisory data analytics in 2025" },
  { src: consultingImg, alt: "Contestor Estonia tax consulting team", label: "Contestor Estonia tax and accounting advisory team in 2025" },
];

const ServicesGrid = () => (
  <section className="bg-background py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img) => (
          <div key={img.alt} className="group">
            <div className="overflow-hidden rounded-lg">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-3">{img.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
