export const categories = [
  "All",
  "ERP & Enterprise",
  "SaaS & Finance",
  "APIs & Platforms",
  "Web Applications",
] as const;
export type Category = (typeof categories)[number];
export type Project = {
  slug: string;
  number: string;
  title: string;
  heading: string;
  category: Exclude<Category, "All">;
  summary: string;
  technologies: string[];
  theme: "erp" | "finance" | "bicycle" | "restaurant";
  domain: string;
  role: string;
  context: string;
  contributions: string[];
  workflow: string[];
  sections: { title: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "pharmaceutical-distribution-erp",
    number: "01",
    title: "Pharmaceutical Distribution ERP",
    heading: "Connecting the moving parts of distribution.",
    category: "ERP & Enterprise",
    summary:
      "Inventory, invoicing, finance, and administration. One connected operational system.",
    technologies: ["React", "TypeScript", "Go", "MySQL"],
    theme: "erp",
    domain: "Pharmaceutical distribution",
    role: "Full-stack development",
    context:
      "Pharmaceutical distribution brings together product records, batches, warehouses, sales, and accounting. The ERP connects these business processes so that operational workflows can be managed within an integrated system.",
    contributions: [
      "A control center for companies, branches, users, roles, permissions, settings, and audit logs.",
      "Product and warehouse workflows, batch and expiry tracking, GRNs, stock transfers, adjustments, and ledgers.",
      "Finance workflows covering journals, general ledger, accounts payable and receivable, payments, receipts, and reporting.",
      "Connections between sales orders, invoicing, stock movements, and accounting entries.",
    ],
    workflow: [
      "Goods received",
      "Batch registered",
      "Warehouse stock",
      "Sales invoice",
      "Stock & ledger",
    ],
    sections: [
      {
        title: "Modules that work together.",
        text: "The Control Center, Inventory, Invoice Center, and Finance modules address different parts of the same business. My work connects their data and workflows through REST APIs, normalized relational structures, and reusable responsive interfaces.",
      },
      {
        title: "Attention to inventory integrity.",
        text: "Inventory work includes batch tracking, expiry monitoring, stock transfers, and stock ledger management. Validation rules and audit trails support these workflows, while role-based access controls define access to the system.",
      },
    ],
  },
  {
    slug: "saas-microfinance-platform",
    number: "02",
    title: "SaaS Microfinance Platform",
    heading: "Clarity across the lending lifecycle.",
    category: "SaaS & Finance",
    summary:
      "Customer records, lending, repayments, and reporting, built around connected financial workflows.",
    technologies: ["Laravel", "PHP", "Go", "Docker"],
    theme: "finance",
    domain: "Microfinance SaaS",
    role: "Software Engineer · core contributor",
    context:
      "At Asipiya Soft Solution, I contribute as a core developer to a SaaS microfinance platform. The work brings customer management, loan workflows, repayment schedules, transaction handling, and reporting into a connected platform.",
    contributions: [
      "Backend modules and relational database structures for customer records and loan workflows.",
      "Payment schedules, repayment tracking, transaction ledgers, and reporting functions.",
      "Access controls, validation, and structured API workflows.",
      "Application containerization and cloud deployment support using Docker.",
    ],
    workflow: [
      "Customer",
      "Loan workflow",
      "Payment schedule",
      "Transaction ledger",
      "Reporting",
    ],
    sections: [
      {
        title: "Financial workflows, carefully connected.",
        text: "My responsibilities span the backend modules and business logic behind customer management, lending, and repayment tracking. Relational data accuracy and validation are central to how these connected records are handled.",
      },
      {
        title: "From implementation to delivery.",
        text: "The engineering work uses PHP/Laravel, Go services, relational databases, and structured APIs. Alongside building core functionality, I support containerization and deployment pipelines with Docker and cloud infrastructure tools.",
      },
    ],
  },
  {
    slug: "bicycle-rental-backend",
    number: "03",
    title: "Bicycle Rental Backend",
    heading: "The systems behind the next ride.",
    category: "APIs & Platforms",
    summary:
      "Backend APIs connecting riders, bicycles, stations, and essential notifications.",
    technologies: ["Laravel", "REST APIs", "Firebase"],
    theme: "bicycle",
    domain: "Connected mobility",
    role: "Backend development",
    context:
      "A bicycle rental experience depends on more than a list of available bicycles. The backend supports authentication, station-based discovery, GPS data, emergency handling, and the operational records that connect them.",
    contributions: [
      "Backend APIs for user authentication and bicycle listings by station.",
      "GPS tracking, emergency handling, and operational data management.",
      "Firebase push notification integration.",
      "Database structures for users, bicycles, employees, stations, weather data, and activity records.",
    ],
    workflow: [
      "Rider app",
      "Authentication",
      "Station & bicycle APIs",
      "Operational data",
      "Notifications",
    ],
    sections: [
      {
        title: "Connecting riders and operations.",
        text: "The APIs cover both user-facing actions and operational data. Authentication establishes access, station-based listings help with bicycle discovery, and GPS and activity records support the rental workflow.",
      },
      {
        title: "Notifications with a purpose.",
        text: "Firebase push notifications form part of the backend integration, alongside emergency handling and operational records. The data model spans riders, bicycles, employees, stations, weather data, and activity.",
      },
    ],
  },
  {
    slug: "restaurant-ticketing-platform",
    number: "04",
    title: "Restaurant & Event Ticketing",
    heading: "Good experiences, from booking to checkout.",
    category: "Web Applications",
    summary:
      "Restaurant workflows and event ticketing with administration and Stripe-backed payments.",
    technologies: ["Laravel", "JavaScript", "Blade", "Stripe API"],
    theme: "restaurant",
    domain: "Hospitality & events",
    role: "Web application development",
    context:
      "Developed as part of my freelance work at Pixandco, this web application brings restaurant functionality, event ticketing, user workflows, and administration together with Stripe payment integration.",
    contributions: [
      "Restaurant web application development using Laravel and JavaScript.",
      "Event ticketing and supporting user workflows.",
      "Administrative management functionality.",
      "Secure payment integration using the Stripe API.",
    ],
    workflow: [
      "Restaurant & events",
      "Ticket selection",
      "User workflow",
      "Stripe checkout",
      "Administration",
    ],
    sections: [
      {
        title: "A connected web experience.",
        text: "The application combines restaurant and event-ticketing functionality with the administrative tools needed to manage the experience. Laravel Blade and JavaScript support the web interface and user workflows.",
      },
      {
        title: "Integrating payments.",
        text: "My work includes the Stripe API integration within the application. The project brings together the user-facing journey, server-side Laravel functionality, and administrative management.",
      },
    ],
  },
];
