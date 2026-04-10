import { Mail, Phone } from "lucide-react";

const contacts = [
  {
    name: "Andrei Kovalev",
    role: "Head of AI & Digital Advisory",
    email: "andrei.kovalev@contestor.ee",
    phone: "+372 5123 4567",
  },
  {
    name: "Katrin Tamm",
    role: "Senior AI Consultant",
    email: "katrin.tamm@contestor.ee",
    phone: "+372 5234 5678",
  },
];

const AIContact = () => (
  <section className="bg-secondary py-12" id="contact">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-8">
        Meet Our AI Consulting Leaders
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((person) => (
          <div key={person.name} className="bg-background rounded-lg p-6 border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-lg font-bold text-primary">
                {person.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <h3 className="text-base font-semibold text-foreground">{person.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{person.role}</p>
            <div className="space-y-1">
              <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Mail className="w-4 h-4" /> {person.email}
              </a>
              <a href={`tel:${person.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <Phone className="w-4 h-4" /> {person.phone}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AIContact;
