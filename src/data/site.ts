export const site = {
  name: "Janith Samarasinghe",
  role: "Full Stack Software Engineer & DevOps Architect",
  title: "Janith Samarasinghe — Full Stack Software Engineer & DevOps Architect",
  email: "janithsamarasinghe1999@gmail.com",
  phone: "+94 70 126 7400",
  location: "Kandy, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/janith-samarasinghe",
  github: "https://github.com/Janiya-99",
  cvUrl: "/Janith_CV.pdf",
  bio: "Full Stack Software Engineer & Systems Architect with 3+ years of experience engineering high-performance systems across Go, PHP/Laravel, React 19, Next.js, and TypeScript, backed by deep DevOps automation (Docker, CI/CD, Nginx, Linux). Architected scalable ERP platforms and multi-tenant SaaS microfinance systems processing thousands of daily transactions for enterprise clients. Proven record in full-lifecycle delivery — optimizing database architectures for 35% query latency reductions, containerizing workloads to slash deployment overhead by 40%, and maintaining 99.9% uptime.",
  metrics: [
    { value: "3+", label: "Years Experience" },
    { value: "35%", label: "Query Speedup" },
    { value: "10K+", label: "SKUs Managed" },
    { value: "5K+", label: "Daily Transactions" },
    { value: "99.9%", label: "System Uptime" },
  ],
  // Only set this to the verified public deployment URL (including any base path).
  url: import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") as string | undefined,
};
