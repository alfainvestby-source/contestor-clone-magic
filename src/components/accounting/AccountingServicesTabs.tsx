import { useState } from "react";

const services = [
  {
    title: "Day-to-day accounting and tax accounting",
    description: "We handle the entire day-to-day accounting of our clients from invoicing and payments to reporting. We are happy to take the accounting tasks off your hands, so that you can concentrate on the core activities in your area of operation and implementing your business plans.",
    items: [
      "We set up accounting, draw up internal accounting policies and create an account plan",
      "We organise either full or partial accounting (e.g. accounts payable and cost accounting, fixed assets accounting, accounting of bank transactions, etc.)",
      "We offer full or partial tax accounting, including preparation of VAT return, TSD return, report on intra-community supply",
      "We represent you in communication with the authorities and respond to inquiries from the authorities",
      "We advise you on complex accounting transactions and on their recognition",
      "We check the accounting and tax accounting of prior periods",
      "We restore your accounting",
      "We track invoice receipts and send out payment reminders and balance confirmations",
    ],
  },
  {
    title: "Reporting",
    description: "We exercise quality control over the reports we prepare to ensure that the reports comply with current legislative requirements and/or standards.",
    items: [
      "We prepare and submit financial statements (including consolidated financial statements)",
      "We represent clients in communication with auditors and respond to auditors' inquiries",
      "We create intrastat, central bank and statistics reports",
      "We prepare management reports pursuant to the client's requirements",
      "We produce financial analyses and forecasts according to the client's wishes and needs",
    ],
  },
  {
    title: "Payroll and related services",
    description: "We use modern payroll software for payroll processing, but we are willing to use your own payroll software, if you so require. Our response in payroll issues is always quick and flexible, and we guarantee the confidentiality of your data.",
    items: [
      "We perform monthly payroll (salaries, sick pay, holiday pay, overtime, bonuses, withholdings, final settlement)",
      "We keep payroll records for employees and ensure the availability of current and correct information",
      "We manage payroll documentation (tax-free income applications, sick leave certificates, etc.)",
      "We prepare monthly returns on income and social tax, statutory funded pension and unemployment insurance contributions (TSD)",
      "We produce statistical reports (e.g. wage statistics, labour turnover)",
      "We keep the employee register (adding and removing employees to the register)",
      "We communicate with the National Social Insurance Board on your behalf",
    ],
  },
  {
    title: "Accounting consultancy",
    description: "The increasingly complex issues of accounting and financial management require specialist knowledge that helps you make the best decisions. Resolution of such complex issues often makes it necessary to involve an independent expert.",
    items: [
      "We advise clients on the transition from the Estonian financial reporting standard to IFRS or vice versa",
      "We advise clients on the transition from other financial reporting standards to the Estonian financial reporting standard",
      "We provide tailor-made training (basics of accounting, new accounting standards, internal control, etc.)",
      "We assist clients in drafting or reviewing accounting charts, internal policies and harmonising accounting policies",
      "We assist you in accounting for corporate acquisitions, sales, mergers, divisions, options issues and other transactions",
      "We provide a one-stop-shop service for transactions and reporting",
      "We provide solutions for facilitating data collection and consolidation",
      "We help you analyse how to speed up the process of preparing financial statements",
    ],
  },
  {
    title: "Registration and other support services",
    description: "We assist our clients in obtaining the necessary registrations in Estonia and help them assess their need for registration. We also provide administrative support services.",
    items: [
      "VAT registration",
      "Registration of the permanent establishment",
      "Registration as a non-resident employer in Estonia",
      "Requesting an EORI Number",
      "Applying for access to the e-Tax Board and eSTAT",
      "Opening a bank account",
      "Inbox service — we receive, sort and register mail sent to your business",
      "Provision of a contact or legal address for companies established abroad",
      "Document management and organising translation of documents",
    ],
  },
];

const AccountingServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-xl lg:text-2xl font-semibold text-foreground mb-8">
          Our services
        </h2>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
          {/* Tab list */}
          <div className="flex flex-col gap-1">
            {services.map((service, i) => (
              <button
                key={service.title}
                onClick={() => setActiveTab(i)}
                className={`text-left px-4 py-3 rounded text-sm font-medium transition-colors ${
                  i === activeTab
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              {services[activeTab].title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {services[activeTab].description}
            </p>
            <ul className="space-y-2">
              {services[activeTab].items.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountingServicesTabs;
