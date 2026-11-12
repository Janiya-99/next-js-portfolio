export const categories = [
  "All",
  "ERP & Enterprise",
  "SaaS & Finance",
  "APIs & Platforms",
  "Web Applications",
] as const;

export type Category = (typeof categories)[number];

export type ProjectScreenshot = {
  src: string;
  caption: string;
  tag: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle?: string;
  heading: string;
  category: Exclude<Category, "All">;
  summary: string;
  technologies: string[];
  theme: "hr" | "erp" | "vps" | "binaare" | "restaurant" | "finance" | "travel";
  domain: string;
  role: string;
  badge: string;
  coverImage: string;
  gallery: ProjectScreenshot[];
  metrics: ProjectMetric[];
  githubUrl?: string;
  liveUrl?: string;
  context: string;
  contributions: string[];
  workflow: string[];
  sections: { title: string; text: string }[];
};

export const projects: Project[] = [
  {
    slug: "multi-tenant-enterprise-hrms",
    number: "01",
    title: "Multi-Tenant Enterprise HRMS & SaaS Platform",
    shortTitle: "Enterprise HRMS & SaaS",
    heading: "Automated payroll, workforce management & custom document design.",
    category: "ERP & Enterprise",
    summary:
      "A complete multi-tenant workforce platform built to simplify complex payroll, statutory tax compliance, biometric attendance tracking, and drag-and-drop document generation for multiple companies.",
    technologies: [
      "React 19",
      "Go (Golang 1.23)",
      "TypeScript",
      "Tailwind CSS",
      "MySQL 8.0",
      "Docker",
    ],
    theme: "hr",
    domain: "Enterprise Human Capital Management & Statutory Payroll",
    role: "Lead Systems Architect & Core Backend Engineer",
    badge: "Multi-Tenant / Production",
    coverImage: "/projects/hr/01_split_screen_login_focused.png",
    gallery: [
      {
        src: "/projects/hr/01_split_screen_login_focused.png",
        caption:
          "Enterprise SSO portal featuring tenant subdomain discovery, multi-factor authentication, and dark glass aesthetics",
        tag: "Authentication",
      },
      {
        src: "/projects/hr/07_print_studio_canva_editor.png",
        caption:
          "Canva-grade visual document artboard with dynamic token hydration and cryptographic QR stamps",
        tag: "Print Studio",
      },
      {
        src: "/projects/hr/05_super_admin_slideover_drawer.png",
        caption:
          "Super-Admin workspace with cross-tenant quotas, Go worker pool status, and slide-over audit reason capture",
        tag: "Super Admin",
      },
      {
        src: "/projects/hr/09_gratuity_calculator_settlement_waterfall.png",
        caption:
          "LKAS 19 / IAS 19 statutory gratuity calculator with formula-locked settlement waterfall",
        tag: "Gratuity Engine",
      },
      {
        src: "/projects/hr/14_payroll_engine_statutory_taxes.png",
        caption:
          "Parallel payroll engine computing multi-bracket progressive tax slabs (EPF/ETF/APIT) in milliseconds",
        tag: "Payroll Engine",
      },
      {
        src: "/projects/hr/13_attendance_biometric_telemetry.png",
        caption:
          "Real-time biometric NFC hardware sync with 2x8 hourly check-in matrices and shift boundary logic",
        tag: "Biometric Shift",
      },
      {
        src: "/projects/hr/11_employee_directory_queue.png",
        caption:
          "Tenant-scoped employee directory queue with field-level access control and lifecycle tracking",
        tag: "Directory",
      },
      {
        src: "/projects/hr/04_super_admin_tenants_table.png",
        caption:
          "Platform administration control center managing tenant provisioning, plans, and database pools",
        tag: "Platform Admin",
      },
    ],
    metrics: [
      { label: "Worker Concurrency", value: "Sub-ms Pools" },
      { label: "Active Telemetry", value: "Real-Time 2x8" },
      { label: "Statutory Rules", value: "LKAS 19 & Tax" },
      { label: "Architecture", value: "Multi-Tenant RLS" },
    ],
    context:
      "Managing thousands of employees across geographically separated factories and offices required eliminating manual spreadsheets and brittle batch jobs. I architected this multi-tenant HRMS to bridge physical hardware (biometric turnstiles) with statutory legal rules (LKAS 19 actuarial gratuity, progressive APIT taxes), guaranteeing data isolation between competing tenant organizations.",
    contributions: [
      "Engineered high-concurrency Go worker pool backend managing asynchronous background job execution for bulk payroll batches and document generation.",
      "Designed statutory gratuity calculation engine adhering to LKAS 19 / IAS 19 actuarial standards with immutable approval waterfalls.",
      "Built a Canva-style visual print studio supporting millimeter-accurate page layouts, drag-and-drop HR blocks, and dynamic token interpolation ({{employee.name}}, {{salary.net}}).",
      "Engineered biometric attendance synchronization handling overnight shift bindings and discrete 2x8 hourly presence matrices.",
      "Implemented multi-tenant Super-Admin control center with plan quotas, tenant database connection pooling, and ISO 27001 audit logging.",
    ],
    workflow: [
      "Biometric Telemetry",
      "Shift Boundary Sync",
      "Payroll & Tax Engine",
      "Gratuity Actuarial Calc",
      "Canva Vector PDF",
    ],
    sections: [
      {
        title: "Actuarial Gratuity & Statutory Tax Engines",
        text: "Financial compliance allows zero room for rounding errors. We engineered the payroll and gratuity engines using minor-unit integer arithmetic to prevent floating-point drift. The system dynamically validates five-year statutory qualification thresholds, tracks monthly liability accruals, and calculates exit settlements with automated loan deductions.",
      },
      {
        title: "Canva-Grade Visual Print Studio & Document Artboard",
        text: "Rather than relying on static HTML-to-PDF templates that break when layouts change, we built a scene-graph canvas with millimeter precision. Administrators can visually drag and position salary components, stamp dynamic QR verification hashes, and render vector PDFs ready for bank dispatch.",
      },
    ],
  },
  {
    slug: "pharmaceutical-distribution-erp",
    number: "02",
    title: "Pharmaceutical Distribution ERP & POS System",
    shortTitle: "PharmaCore Distribution ERP",
    heading: "Batch inventory tracking, point of sale & general ledger accounting.",
    category: "ERP & Enterprise",
    summary:
      "A distribution and POS platform built with Go and React/TypeScript to handle pharmaceutical warehouse logistics, FIFO lot allocation, fast invoicing, and double-entry accounting across 3 major branches.",
    technologies: [
      "Go (Gin)",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "MySQL 8.0",
      "Redis",
      "Docker",
    ],
    theme: "erp",
    domain: "Pharmaceutical Distribution & Healthcare Supply Chain",
    role: "Full-Stack Systems Architect & Lead Engineer",
    badge: "10,000+ SKUs / 3 Hubs",
    coverImage: "/projects/erp/01_Live_Login_Portal.png",
    gallery: [
      {
        src: "/projects/erp/01_Live_Login_Portal.png",
        caption:
          "Enterprise Pharmaceutical Platform portal with multi-branch authentication and module orchestration",
        tag: "Enterprise Portal",
      },
      {
        src: "/projects/erp/03_Live_Control_Center_Dashboard.png",
        caption:
          "Live ERP Control Center dashboard displaying real-time revenue, active purchase orders, and stock telemetry",
        tag: "Control Center",
      },
      {
        src: "/projects/erp/02_Live_Module_Selection_Hub.png",
        caption:
          "Live module selection hub coordinating billing terminals, inventory vaults, and finance ledgers",
        tag: "Module Hub",
      },
      {
        src: "/projects/erp/04_Live_Inventory_FEFO_Dashboard.png",
        caption:
          "Live FEFO (First-Expired, First-Out) warehouse inventory dashboard monitoring batch expiration countdowns",
        tag: "FEFO Inventory",
      },
      {
        src: "/projects/erp/05_Live_Invoice_Center_Billing_Dashboard.png",
        caption:
          "Live billing terminal featuring customer credit limit verification and instant receipt generation",
        tag: "Billing Center",
      },
      {
        src: "/projects/erp/06_Live_Finance_General_Ledger_Dashboard.png",
        caption:
          "Live double-entry General Ledger dashboard managing journals, payables, receivables, and trial balance",
        tag: "Finance Ledger",
      },
      {
        src: "/projects/erp/07_Live_Compliance_Recalls_Dashboard.png",
        caption:
          "Live regulatory compliance and batch recall tracking for pharmaceutical distribution safety",
        tag: "Compliance",
      },
      {
        src: "/projects/erp/08_Live_Platform_Admin_Portal.png",
        caption:
          "Live administrative console managing multi-warehouse permissions and distribution center nodes",
        tag: "Admin Portal",
      },
      {
        src: "/projects/erp/09_Live_Sales_Invoices_Ledger.png",
        caption:
          "Live real-time sales invoice ledger with aging status and payment receipt status",
        tag: "Sales Ledger",
      },
      {
        src: "/projects/erp/10_Live_Finance_Chart_of_Accounts.png",
        caption:
          "Live Chart of Accounts displaying real-time balance sheet and income statement ledger hierarchies",
        tag: "Chart of Accounts",
      },
      {
        src: "/projects/erp/11_Live_Inventory_Batches_FEFO_Queue.png",
        caption:
          "Live batch expiry inspection matrix organizing medications by shortest remaining shelf-life",
        tag: "Batch Matrix",
      },
      {
        src: "/projects/erp/12_Live_RBAC_Permission_Matrix.png",
        caption:
          "Live granular role-based permissions matrix locking warehouse operations and ledger approvals",
        tag: "RBAC Matrix",
      },
    ],
    metrics: [
      { label: "Catalog Scale", value: "10,000+ SKUs" },
      { label: "Distribution Hubs", value: "3 Major Centers" },
      { label: "Inventory Processing", value: "50% Faster" },
      { label: "Accounting Audit", value: "Double-Entry" },
    ],
    context:
      "Distributing pharmaceuticals requires zero tolerance for expired medications or inventory discrepancy. I architected a full-scale ERP and POS platform unifying 10,000+ active pharmaceutical SKUs across three major regional distribution centers, enforcing strict FEFO (First-Expired, First-Out) batch dispatch.",
    contributions: [
      "Architected Go backend services using Gin and MySQL 8.0, handling high-throughput catalog searches across 10,000+ medication SKUs.",
      "Engineered automated FEFO inventory queue algorithm routing warehouse pickers to batches with the closest expiration dates.",
      "Constructed double-entry general ledger engine automatically posting journals on invoice issuance and supplier payments.",
      "Developed high-speed POS billing terminal with offline-resilient local caching and Redis-backed stock locking.",
      "Implemented regulatory recall module capable of tracing any batch number back to its supplier shipment and downstream customer receipts in seconds.",
    ],
    workflow: [
      "Purchase Order Ingestion",
      "Batch Expiry Labeling",
      "FEFO Stock Allocation",
      "POS Dispatch & Invoice",
      "GL Ledger Reconciliation",
    ],
    sections: [
      {
        title: "Automated FEFO Inventory Allocation",
        text: "To protect patient safety and eliminate medication write-offs, the dispatch algorithm strictly enforces FEFO ordering. Warehouse staff cannot accidentally pick newer stock while older batches remain on shelves. The system triggers visual warnings 90, 60, and 30 days prior to batch expiration.",
      },
      {
        title: "Automated Double-Entry Accounting",
        text: "Every inventory transaction writes balanced debits and credits across the General Ledger. When an order is billed, cost of goods sold, revenue, and tax liabilities are calculated and posted synchronously, eliminating end-of-month reconciliation discrepancies between logistics and finance teams.",
      },
    ],
  },
  {
    slug: "saas-microfinance-platform",
    number: "03",
    title: "Apex Core SaaS Microfinance Platform",
    shortTitle: "Microfinance Core SaaS",
    heading: "5,000+ daily loan transactions, pawning, and automated payment ledgers.",
    category: "SaaS & Finance",
    summary:
      "Enterprise multi-tenant microfinance SaaS engineered at Asipiya International. Handles 5,000+ daily loan transactions across 5 core financial modules (including cheque discounting and pawning), automated repayment schedules, loan disbursements, and Docker-orchestrated deployments on DigitalOcean.",
    technologies: [
      "Laravel 11",
      "PHP",
      "Go",
      "Docker",
      "MySQL 8.0",
      "DigitalOcean Droplets",
    ],
    theme: "finance",
    domain: "FinTech & Microfinance Banking SaaS",
    role: "Software Engineer · Core Contributor (Asipiya International)",
    badge: "5,000+ Daily Transactions",
    coverImage: "/projects/microfinance/03_apex_operations_dashboard.png",
    gallery: [
      {
        src: "/projects/microfinance/03_apex_operations_dashboard.png",
        caption:
          "Live operations dashboard monitoring cashier approval requests, daily branch expenses, and loan disbursement tickets",
        tag: "Operations Hub",
      },
      {
        src: "/projects/microfinance/01_apex_login_portal.png",
        caption:
          "Enterprise account center login portal with single sign-on and multi-system navigation",
        tag: "Account Center",
      },
      {
        src: "/projects/microfinance/02_apex_module_selector.png",
        caption:
          "Central module selection portal for Account Center, Microfinance lending, Pawning Center, and SMS notification gateways",
        tag: "Module Selector",
      },
      {
        src: "/projects/microfinance/04_apex_microfinance_portfolio.png",
        caption:
          "Real-time loan portfolio telemetry tracking active disbursements, total arrears, today's collection progress, and repayment charts",
        tag: "Portfolio Analytics",
      },
    ],
    metrics: [
      { label: "Daily Volume", value: "5,000+ Transactions" },
      { label: "Core Modules", value: "5 Financial Engines" },
      { label: "Query Speedup", value: "35% Optimization" },
      { label: "Delivery Cycle", value: "4 Months" },
    ],
    context:
      "Microfinance lending demands stringent audit trails, complex amortization schedules, and high reliability across branch networks. At Asipiya International (PVT) Ltd., I served as a core backend engineer within a 5-person engineering squad, delivering core financial modules that process thousands of daily loan transactions.",
    contributions: [
      "Led backend development of 5 core financial modules within an intensive 4-month cycle, including cheque discounting and pawning systems.",
      "Engineered secure RESTful APIs in Go and PHP/Laravel processing over 5,000 daily multi-tier loan transactions.",
      "Optimized complex MySQL relational database queries and indexing strategies, achieving a 35% reduction in endpoint response times.",
      "Constructed automated amortization payment schedules, penalty interest calculations, and transaction settlement ledgers.",
      "Automated staging and production deployment pipelines utilizing Docker container stacks, reducing deployment overhead by 40%.",
    ],
    workflow: [
      "Customer Onboarding",
      "Loan Underwriting",
      "Amortization Schedule",
      "Repayment Processing",
      "General Ledger Reconciliation",
    ],
    sections: [
      {
        title: "High-Volume Transaction Processing & Concurrency",
        text: "To process over 5,000 daily financial entries without database contention, the backend utilizes transaction-level isolation, optimized composite indices, and Go-backed asynchronous worker queues. Automated end-of-day reconciliation batches settle interest accruals and loan aging balances accurately.",
      },
      {
        title: "Modular Financial Engines & Amortization",
        text: "The platform's modular financial core supports diverse lending structures: reducing balance loans, flat-rate schedules, cheque discounting, and gold pawning advances. Relational integrity constraints ensure that all repayments reflect immediately in customer ledgers, branch cash accounts, and regulatory audit reports.",
      },
    ],
  },
  {
    slug: "custom-vps-portal",
    number: "04",
    title: "VPS Telemetry & Container Orchestration Nexus",
    shortTitle: "Cloud VPS Orchestration",
    heading: "Sub-second Linux socket telemetry, Docker API hooks, and terminal security.",
    category: "APIs & Platforms",
    summary:
      "High-performance virtualization and container management portal built with Go and Vue.js. Provides sub-second CPU/memory socket streaming, Docker container daemon lifecycle management, and fine-grained access control across private cloud nodes.",
    technologies: [
      "Go (Golang 1.22)",
      "Vue.js 3",
      "Docker Engine API",
      "Linux cgroups",
      "WebSockets",
      "Tailwind CSS",
    ],
    theme: "vps",
    domain: "Cloud Infrastructure, Containerization & Systems Monitoring",
    role: "Sole Backend & Systems Engineer",
    badge: "Sub-second Streaming / Docker",
    githubUrl: "https://github.com/Janiya-99/vps-portal",
    coverImage: "/projects/vps/02_host_telemetry_and_monitoring.png",
    gallery: [
      {
        src: "/projects/vps/02_host_telemetry_and_monitoring.png",
        caption:
          "Real-time host telemetry and monitoring interface streaming CPU, RAM, and network socket metrics",
        tag: "Host Telemetry",
      },
      {
        src: "/projects/vps/03_docker_orchestration_and_logs.png",
        caption:
          "Docker container orchestration nexus managing daemon lifecycles, cgroup memory ceilings, and live logs",
        tag: "Docker Nexus",
      },
      {
        src: "/projects/vps/04_database_redis_and_reverse_proxy.png",
        caption:
          "Database, Redis cache cluster, and reverse proxy routing management console",
        tag: "DB & Reverse Proxy",
      },
      {
        src: "/projects/vps/05_automated_backups_security_and_ops.png",
        caption:
          "Automated snapshot backups, firewall security matrix, and operational audit logs",
        tag: "Security & Backups",
      },
      {
        src: "/projects/vps/01_fiverr_gig_cover_hero.png",
        caption:
          "Architecture overview of the VPS Telemetry & Container Orchestration Nexus",
        tag: "Platform Overview",
      },
    ],
    metrics: [
      { label: "Socket Latency", value: "<15ms Stream" },
      { label: "Container Daemon", value: "Docker API" },
      { label: "Engine Memory", value: "<18MB RAM" },
      { label: "Open Source", value: "Janiya-99/vps-portal" },
    ],
    context:
      "Standard cloud control panels often incur heavy runtime overhead and slow metric refresh intervals. I engineered this lightweight, daemon-level management portal in Go to directly query Linux procfs and the Docker socket, delivering instantaneous telemetry and container management with minimal host resource consumption.",
    contributions: [
      "Wrote native Go agent interfacing directly with the Docker Unix socket and Linux cgroups to monitor container metrics.",
      "Engineered bidirectional WebSocket server streaming CPU, RAM, and disk I/O metrics at 60 FPS under sub-15ms latency.",
      "Implemented secure VT100 terminal emulation in the browser with ANSI escape code parsing and granular command execution gates.",
      "Designed an obsidian & charm red industrial HUD with zero heavy charting libraries, optimizing render performance on low-spec client machines.",
    ],
    workflow: [
      "procfs Polling",
      "Docker Engine Socket",
      "WebSocket Ingress",
      "Browser VT100 Stream",
      "cgroup Enforcement",
    ],
    sections: [
      {
        title: "Direct Kernel & Daemon Socket Integration",
        text: "By bypassing heavyweight intermediary daemons, the Go agent communicates directly with the Docker engine API via local UNIX domain sockets. It polls `/proc/stat`, `/proc/meminfo`, and cgroup v2 controllers to report physical node saturation in near real-time.",
      },
      {
        title: "Sub-Second WebSocket Telemetry Streaming",
        text: "The telemetry pipeline broadcasts system state across compact binary and JSON frames over multiplexed WebSocket channels. In-memory circular ring buffers store historical performance data, eliminating disk I/O overhead on the monitored host.",
      },
    ],
  },
  {
    slug: "ai-travel-product-management",
    number: "05",
    title: "AI Travel Product Management System",
    shortTitle: "TravelOps AI Platform",
    heading: "AI itinerary creation, smart catalog search & modern booking workflows.",
    category: "SaaS & Finance",
    summary:
      "A travel operations platform that uses the Gemini API to turn ideas into structured tour itineraries, complete with conversational catalog search, inventory tracking, and clean booking administration.",
    technologies: [
      "Laravel 11",
      "React 18",
      "TypeScript",
      "Gemini AI API",
      "MySQL 8.0",
      "Tailwind CSS",
      "Docker",
    ],
    theme: "travel",
    domain: "Travel Tech, Catalog Management & Generative AI",
    role: "Full-Stack Software Engineer & AI System Architect",
    badge: "AI Powered / Open Source",
    githubUrl: "https://github.com/Janiya-99/Travel-Product-Management-",
    coverImage: "/projects/travel/Product-List.png",
    gallery: [
      {
        src: "/projects/travel/Product-List.png",
        caption:
          "Live travel product catalog featuring conversational natural language AI search, category filters, and live availability cards",
        tag: "Product Catalog",
      },
      {
        src: "/projects/travel/Dashboard.png",
        caption:
          "TravelOps executive operations dashboard displaying total catalog counts, active offers, auto-expired packages, and recent inventory",
        tag: "Operations Dashboard",
      },
      {
        src: "/projects/travel/Create-Product.png",
        caption:
          "Structured Gemini AI product draft generator converting conversational prompts into validated database schemas with automated cover imagery",
        tag: "AI Draft Studio",
      },
    ],
    metrics: [
      { label: "Inference Speed", value: "1.1s - 1.7s" },
      { label: "Cached Queries", value: "<100ms Redis" },
      { label: "Architecture", value: "Service-Repo" },
      { label: "Repository", value: "Janiya-99/Travel-Product-Management-" },
    ],
    context:
      "Travel agencies manage extensive inventories of seasonal packages, excursions, and hotel allotments where manual data entry causes stale prices and expired offerings. I built this AI-driven management platform to convert conversational operator prompts into structured, validated product catalog entries and enable natural language customer searches.",
    contributions: [
      "Architected clean layered Laravel 11 backend utilizing Service Layer, Repository Pattern, and Query Objects for clear separation of concerns.",
      "Integrated Gemini AI API with strict JSON schema decoding, generating complete travel package drafts from conversational prompts in 1.1s-1.7s.",
      "Engineered natural language search pipeline translating user queries like 'under $500 in Bali next week' into optimized Eloquent database filters.",
      "Implemented multi-tier caching (Cache::remember) to deliver sub-100ms responses on repeated AI queries while respecting inventory expiration.",
      "Packaged full-stack environment into multi-container Docker compose orchestration with automated database migrations and seeders.",
    ],
    workflow: [
      "Natural Language Prompt",
      "Gemini JSON Schema",
      "Draft Validation & Review",
      "Database Persistence",
      "Natural Search & Invalidation",
    ],
    sections: [
      {
        title: "Structured AI Draft Generation with Bounded Decoding",
        text: "The generation pipeline employs strict system prompt partitioning and low temperature decoding to guarantee that the LLM outputs conform exactly to the application's Data Transfer Objects (DTOs). Travel agents review pre-filled forms before saving, combining the speed of AI generation with human verification.",
      },
      {
        title: "Conversational Search with Sub-100ms Multi-Tier Caching",
        text: "Customer searches are parsed into structured query criteria (price thresholds, destination tags, validity dates). By hashing extracted search criteria and storing parsed filter trees in cache, identical queries bypass model inference entirely, achieving sub-100ms response times on MySQL.",
      },
    ],
  },
  {
    slug: "binaare-art-gallery",
    number: "06",
    title: "Binaare Virtual Art Gallery & E-Commerce Platform",
    shortTitle: "Binaare Virtual Art Gallery",
    heading: "Virtual viewing rooms, high-res canvas delivery & smooth e-commerce.",
    category: "Web Applications",
    summary:
      "A digital fine art gallery and online store combining immersive virtual viewing spaces, high-resolution artwork delivery, an easy-to-use curator CMS, and seamless Stripe payments.",
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Stripe API",
      "WebP Optimization",
    ],
    theme: "binaare",
    domain: "Luxury Art E-Commerce & Virtual Exhibitions",
    role: "Full-Stack Web Architect",
    badge: "Live · Art E-Commerce",
    liveUrl: "https://binaareartgallery.com/",
    coverImage: "/projects/binaare/01_project_cover_binaare_gallery_desktop.png",
    gallery: [
      {
        src: "/projects/binaare/01_project_cover_binaare_gallery_desktop.png",
        caption:
          "Hero exhibition space with fluid typography, featured artist showcase, and modern editorial styling",
        tag: "Gallery Showcase",
      },
      {
        src: "/projects/binaare/02_interactive_virtual_art_gallery.png",
        caption:
          "Interactive Virtual Viewing Room simulating physical gallery scale and wall hangings for prospective art collectors",
        tag: "Virtual Rooms",
      },
      {
        src: "/projects/binaare/03_ecommerce_shop_artwork_catalog.png",
        caption:
          "Curated fine art e-commerce catalog with multi-dimensional filtering by medium, style, and dimensions",
        tag: "Art Catalog",
      },
      {
        src: "/projects/binaare/04_artwork_detail_page_and_specs.png",
        caption:
          "High-definition artwork detail page with pigment provenance, canvas dimensions, and collector acquisition flow",
        tag: "Artwork Detail",
      },
      {
        src: "/projects/binaare/06_client_shopping_cart_and_checkout.png",
        caption:
          "Seamless collector cart and Stripe-powered international art shipping checkout",
        tag: "Collector Checkout",
      },
      {
        src: "/projects/binaare/07_custom_cms_artworks_inventory.png",
        caption:
          "Custom administrative CMS managing artist rosters, pricing tiers, and inventory status",
        tag: "Curator CMS",
      },
      {
        src: "/projects/binaare/08_custom_cms_media_library_and_webp_converter.png",
        caption:
          "Automated image transformation pipeline optimizing high-resolution artwork files to responsive WebP",
        tag: "WebP Media Engine",
      },
    ],
    metrics: [
      { label: "Platform Status", value: "Live Production" },
      { label: "Media Pipeline", value: "Automated WebP" },
      { label: "Experience", value: "Virtual 3D Room" },
      { label: "Checkout", value: "Stripe Powered" },
    ],
    context:
      "Traditional fine art websites often fail to convey the tactile depth, scale, and provenance of physical paintings. For Binaare Art Gallery (live at binaareartgallery.com), I engineered an immersive digital gallery pairing virtual viewing rooms with a tailored curator management system.",
    contributions: [
      "Engineered responsive React and TypeScript frontend with immersive editorial typography and fluid motion transitions.",
      "Developed interactive virtual exhibition module allowing collectors to view artwork in scaled simulated room environments.",
      "Built custom administrative CMS with full artwork metadata editor, exhibition assignment, and inventory status tracking.",
      "Implemented automated server-side image processing pipeline converting high-resolution RAW uploads to optimized WebP assets.",
      "Created frictionless e-commerce cart drawer and secure Stripe-backed checkout flow with automated invoice generation.",
    ],
    workflow: [
      "Artist Curation",
      "Automated WebP Pipeline",
      "Virtual 3D Room",
      "Collector Inquiries",
      "Stripe Checkout",
    ],
    sections: [
      {
        title: "Immersive Virtual Exhibition Space",
        text: "The platform features interactive virtual viewing rooms where collectors can examine artworks hung against modern gallery walls. Dynamic lighting controls and dimensional scaling give collectors an accurate sense of scale and visual texture before completing high-value purchases.",
      },
      {
        title: "Museum-Grade Media & Provenance CMS",
        text: "A dedicated administrative portal allows gallery curators to manage artwork provenance records, certificates of authenticity, and artist biographical notes. An automated asset pipeline compresses high-resolution photographs into fast-loading WebP images without sacrificing fine brushwork fidelity.",
      },
    ],
  },
  {
    slug: "hasthi-restaurant-platform",
    number: "07",
    title: "Hasthi Restaurant & Event Ticketing Platform",
    shortTitle: "Hasthi Multi-Outlet ERP",
    heading: "Live table booking, event ticketing, and dining administration.",
    category: "Web Applications",
    summary:
      "Full-stack hospitality and entertainment platform developed with Laravel, Blade, MySQL, and Stripe API. Unifies dining menus, dynamic event ticketing with seat limits, reservation workflows, email notifications, and an intuitive administrative operations dashboard.",
    technologies: [
      "Laravel 11",
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap 5",
      "Stripe API",
    ],
    theme: "restaurant",
    domain: "Hospitality, Food & Event Ticketing",
    role: "Full-Stack Laravel Engineer",
    badge: "Open Source / Production",
    githubUrl: "https://github.com/Janiya-99/Hasthi-Web",
    coverImage: "/projects/hasthi/hasthi-dinner-dance.png",
    gallery: [
      {
        src: "/projects/hasthi/hasthi-dinner-dance.png",
        caption:
          "Live event ticketing and VIP dinner dance registration system with dynamic seating quotas",
        tag: "Event Ticketing",
      },
      {
        src: "/projects/hasthi/valentineevent.png",
        caption:
          "Seasonal dining events and couples dinner ticket reservation interface with tiered adult/child pricing",
        tag: "Dinner Passes",
      },
      {
        src: "/projects/hasthi/event1.jpg",
        caption:
          "Live entertainment and musical night promotions integrated with email confirmations and ticket passes",
        tag: "Live Showcase",
      },
    ],
    metrics: [
      { label: "Framework", value: "Laravel 11" },
      { label: "Payment Gateway", value: "Stripe API" },
      { label: "Ticketing", value: "Dynamic Seats" },
      { label: "Repository", value: "Janiya-99/Hasthi-Web" },
    ],
    context:
      "Hasthi is a premier Sri Lankan restaurant and event venue in Newcastle, Australia. The business required an integrated web presence capable of handling restaurant dining discovery, dynamic seasonal menus, and automated ticket sales for high-demand cultural dinner dances and live concerts.",
    contributions: [
      "Developed end-to-end web application using Laravel 11 MVC architecture, Blade templating, and MySQL.",
      "Engineered dynamic event ticketing engine with tiered pricing (adult vs. child tickets) and automated inventory decrement.",
      "Integrated Stripe API for secure credit card checkout with automated digital ticket issuance via SMTP email.",
      "Built comprehensive administrative dashboard allowing venue staff to manage categories, menu items, prices, and event bookings.",
      "Implemented transactional email triggers sending verifiable booking confirmations and receipts upon successful payment.",
    ],
    workflow: [
      "Event & Menu Discovery",
      "Tiered Ticket Selection",
      "Customer Details Form",
      "Stripe Payment Hook",
      "Ticket Email & Check-in",
    ],
    sections: [
      {
        title: "Dynamic Event Ticketing & Tiered Pricing",
        text: "The ticketing subsystem allows administrators to schedule events, upload promotional media, and establish differential adult and child pricing tiers with strict seating capacities. Live availability counters prevent overbooking during peak ticket releases, and attendees receive automated PDF booking summaries via email.",
      },
      {
        title: "Operations Management & Menu Catalog",
        text: "Behind the public experience is a complete administrative control panel. Restaurant staff can update food items, manage spice level indicators, toggle vegetarian/halal tags, and view real-time reservation lists with instant CSV exports for venue door check-in.",
      },
    ],
  },
];
