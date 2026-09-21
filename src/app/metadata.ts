import { projects } from "@/data/projects";

const base = {
  "/": {
    title: "Janith Samarasinghe — Software Engineer",
    description:
      "Backend-focused software engineer in Kandy, Sri Lanka. ERP platforms, microfinance systems, APIs, and thoughtful full-stack experiences.",
  },
  "/work": {
    title: "Selected Work | Janith Samarasinghe",
    description:
      "Explore four software engineering projects across pharmaceutical distribution, microfinance, bicycle rental, and restaurant ticketing.",
  },
  "/about": {
    title: "About | Janith Samarasinghe",
    description:
      "Meet Janith Samarasinghe. Engineering approach, experience, technical skills, and education of a backend-focused software engineer in Sri Lanka.",
  },
  "/contact": {
    title: "Contact | Janith Samarasinghe",
    description:
      "Get in touch with Janith Samarasinghe for engineering roles, product collaboration, and your next software project.",
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
