import contactImg from "@/assets/contact-person.jpg";
import { Mail, Phone } from "lucide-react";

const AccountingContact = () => (
  <section className="bg-secondary py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-xl font-semibold text-foreground mb-6">Contact us</h2>
      <div className="flex items-start gap-6">
        <img
          src={contactImg}
          alt="Accounting Services Contact"
          loading="lazy"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">Anna Kask</p>
          <p className="text-sm text-muted-foreground">Head of Accounting Services, Contestor Estonia</p>
          <div className="flex items-center gap-4 mt-2">
            <a href="tel:+3725559876" className="flex items-center gap-1 text-sm text-primary hover:underline">
              <Phone className="w-3.5 h-3.5" /> +372 555 9876
            </a>
            <a href="mailto:anna@contestor.com" className="flex items-center gap-1 text-sm text-primary hover:underline">
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AccountingContact;
