import { projects } from "@/data/projects";

const base = {
  "/": {
    title: "Janith Samarasinghe — Full Stack Software Engineer & DevOps Architect",
    description:
      "Full Stack Software Engineer & Systems Architect specializing in Go, PHP/Laravel, React 19, Next.js, and DevOps cloud infrastructure (Docker, CI/CD, Nginx). Enterprise systems in Sri Lanka.",
  },
  "/work": {
    title: "Selected Work | Janith Samarasinghe",
    description:
      "Explore 8 enterprise software projects across offline-first multi-tenant POS & ERP, HRMS, pharmaceutical ERP, AI travel automation, custom VPS telemetry, art e-commerce, and microfinance SaaS.",
  },
  "/about": {
    title: "About | Janith Samarasinghe",
    description:
      "Janith Samarasinghe — Full Stack Software Engineer & DevOps Architect with 3+ years experience building Go, PHP/Laravel, React, and Docker systems with 35% database speedups and 99.9% uptime.",
  },
  "/experience": {
    title: "Experience & Skills | Janith Samarasinghe",
    description:
      "Production timeline, verified skills matrix, and official curriculum vitae download for Janith Samarasinghe — Full Stack Software Engineer & DevOps Architect.",
  },
  "/contact": {
    title: "Contact | Janith Samarasinghe",
    description:
      "Connect with Janith Samarasinghe for full-stack engineering, DevOps pipelines, enterprise SaaS, and scalable cloud systems.",
  },
};

export function routeMetadata(path: string) {
  const clean = path.replace(/\/$/, "") || "/";
  if (clean in base) return base[clean as keyof typeof base];
  const project = projects.find((item) => `/work/${item.slug}` === clean);
  if (project)
    return {
      title: `${project.title} | Janith Samarasinghe`,
      description: project.summary,
    };
  return {
    title: "Page not found | Janith Samarasinghe",
    description:
      "This page could not be found. Explore Janith’s portfolio and selected software engineering projects.",
    noindex: true,
  };
}
