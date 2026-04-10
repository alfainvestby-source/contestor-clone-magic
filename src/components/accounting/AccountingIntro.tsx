const columns = [
  "Contestor's department of accounting services has extensive experience in assisting both domestic and international clients. To maintain our quality standard, we regularly train our team and adhere to the four-eyes principle in all our assignments. We provide our clients with tailor-made accounting and consulting services of the highest quality. Our services include day-to-day accounting, reporting, tax accounting and filing. We provide accounting and tax compliance services also to branches and permanent establishments.",
  "We are flexible in meeting our clients' wishes and needs. The financial statements prepared by us comply with International Financial Reporting Standards (IFRS) and/or Estonian Accounting Standards (RTJ). Thanks to the excellent knowledge of our colleagues specialising in auditing, tax and legal issues, we always keep abreast of the latest legislative changes and practices.",
  "The competitive advantage offered by Contestor is that we make available our top business consultancy professionals for you. They provide our day-to-day services with the highest quality and are able to swiftly and professionally resolve any issues that may arise in the course of your business activities. Contestor can thus take care of all issues related to accounting, while the client can focus on core business issues.",
];

const AccountingIntro = () => (
  <section className="bg-background py-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {columns.map((text, i) => (
          <p key={i} className="text-sm text-muted-foreground leading-relaxed">
            {text}
          </p>
        ))}
      </div>
    </div>
  </section>
);

export default AccountingIntro;
