import { Link } from "react-router-dom";
import {
  FileDown,
  ArrowUpRight,
  Terminal,
  Server,
  Database,
  Cpu,
  Layers3,
  ShieldCheck,
  Zap,
  Lock,
  Cloud,
  FileCode,
  Activity,
  CheckCircle2,
} from "lucide-react";
import {
  SiGo,
  SiPhp,
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiDocker,
  SiNginx,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiTailwindcss,
  SiVuedotjs,
  SiGit,
  SiLinux,
  SiDigitalocean,
  SiGithubactions,
  SiVite,
  SiPython,
} from "react-icons/si";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui";
import { Timeline } from "@/components/Timeline";
import { ContactCTA } from "@/components/Footer";
import { CinematicPageHero } from "@/components/CinematicPageHero";

const skillClusters = [
  {
    category: "Languages & Core",
    subtitle: "Runtime languages, strict types & SQL",
    icon: Terminal,
    items: [
      { name: "Go (Golang)", Icon: SiGo, color: "#00add8", badge: "Primary" },
      { name: "PHP 8.x", Icon: SiPhp, color: "#777bb4", badge: "Primary" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178c6", badge: "Primary" },
      { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e", badge: "ESNext" },
      { name: "SQL", Icon: Database, color: "#4479a1", badge: "Daily" },
      { name: "Python", Icon: SiPython, color: "#3776ab", badge: "Scripting" },
      { name: "HTML5 / CSS3", Icon: FileCode, color: "#e34f26", badge: "Semantic" },
    ],
  },
  {
    category: "Frontend & UI Engineering",
    subtitle: "Responsive, accessible interactive interfaces",
    icon: Layers3,
    items: [
      { name: "React 19", Icon: SiReact, color: "#61dafb", badge: "Primary" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#f5f2eb", badge: "SSR & Static" },
      { name: "Vue.js", Icon: SiVuedotjs, color: "#42b883", badge: "Production" },
      { name: "Vite", Icon: SiVite, color: "#646cff", badge: "Build Tool" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8", badge: "Styling" },
      { name: "Component Systems", Icon: Layers3, color: "#e9bc78", badge: "shadcn/ui" },
      { name: "Accessible UX", Icon: ShieldCheck, color: "#10b981", badge: "WCAG 2.1" },
    ],
  },
  {
    category: "Backend & Systems",
    subtitle: "High-throughput APIs, ledgers & async queues",
    icon: Cpu,
    items: [
      { name: "Laravel 11", Icon: SiLaravel, color: "#ff2d20", badge: "Framework" },
      { name: "Go Gin & HTTP", Icon: SiGo, color: "#00add8", badge: "Microservices" },
      { name: "RESTful API Design", Icon: Terminal, color: "#e9bc78", badge: "OpenAPI" },
      { name: "Multi-Tenant RLS", Icon: ShieldCheck, color: "#10b981", badge: "Strict Isolation" },
      { name: "Async Worker Pools", Icon: Cpu, color: "#f59e0b", badge: "Queues" },
      { name: "Server-Sent Events", Icon: Activity, color: "#06b6d4", badge: "Real-Time" },
      { name: "Double-Entry Accounting", Icon: Lock, color: "#ec4899", badge: "Compliant" },
    ],
  },
  {
    category: "Databases & Data Stores",
    subtitle: "Relational modeling, indexing & query speedups",
    icon: Database,
    items: [
      { name: "MySQL 8.0", Icon: SiMysql, color: "#4479a1", badge: "Clustered" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1", badge: "Production" },
      { name: "Redis 7", Icon: SiRedis, color: "#dc382d", badge: "In-Memory" },
      { name: "Schema Normalization", Icon: Database, color: "#e9bc78", badge: "3NF Design" },
      { name: "Query Optimization", Icon: Zap, color: "#f59e0b", badge: "35% Faster" },
      { name: "ACID Row Locks", Icon: Lock, color: "#10b981", badge: "Zero Drift" },
    ],
  },
  {
    category: "DevOps, Cloud & Tooling",
    subtitle: "Containerization, CI/CD pipelines & 99.9% uptime",
    icon: Server,
    items: [
      { name: "Docker & Compose", Icon: SiDocker, color: "#2496ed", badge: "Containers" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088ff", badge: "CI/CD" },
      { name: "Nginx SSL Reverse Proxy", Icon: SiNginx, color: "#009639", badge: "Gateway" },
      { name: "DigitalOcean Droplets", Icon: SiDigitalocean, color: "#0080ff", badge: "Cloud Compute" },
      { name: "Linux / Ubuntu", Icon: SiLinux, color: "#fcc624", badge: "Server OS" },
      { name: "Git Workflow", Icon: SiGit, color: "#f05032", badge: "VCS" },
      { name: "Zero-Downtime Deploys", Icon: Cloud, color: "#38bdf8", badge: "Automated" },
    ],
  },
];

export function ExperiencePage() {
  return (
    <>
      <CinematicPageHero
        bgImage={`${import.meta.env.BASE_URL}images/janith-working.webp`}
        bgPosition="center 30%"
        badge="CAREER &amp; BACKGROUND"
        metaBadge="3+ YEARS IN PRODUCTION"
        title={
          <span data-hero-line>
            Engineering Experience <span className="accent-text">&amp; Technical Background</span>
          </span>
        }
        subtitle="Over 3 years of building software that teams and customers rely on daily — combining fast backends, clean user interfaces, and dependable cloud deployments."
        chips={[
          "Full-Stack Development",
          "Go, Laravel & React",
          "Docker & CI/CD Pipelines",
          "Database Optimization",
        ]}
      />

      {/* 01: Production Career Timeline Section FIRST (as requested) */}
      <section className="section container experience-timeline-section" id="experience">
        <SectionHeading
          index="01"
          label="CAREER TIMELINE"
          title="Professional roles &amp; engineering journey."
        >
          <p>
            Full-time engineering roles at Asipiya International and Vital One, alongside
            enterprise architecture projects for businesses across Sri Lanka and abroad.
          </p>
        </SectionHeading>

        <Timeline />
      </section>

      {/* 02: Row-Based Technical Skills Matrix (Clean rows, no boxy cards) */}
      <section className="section container skills-matrix-section" id="skills">
        <SectionHeading
          index="02"
          label="TECHNICAL PROFICIENCY"
          title="Production toolkit &amp; engineering capabilities."
        >
          <p>
            An exhaustive inventory of technologies, frameworks, and deployment platforms engineered in active enterprise production environments.
          </p>
        </SectionHeading>

        <div className="skills-row-table" data-reveal>
          {skillClusters.map((cluster) => {
            const ClusterIcon = cluster.icon;
            return (
              <div className="skills-row-item" key={cluster.category}>
                <div className="skills-row-domain">
                  <div className="skills-row-domain-header">
                    <span className="skills-row-icon" aria-hidden="true">
                      <ClusterIcon size={16} />
                    </span>
                    <h3 className="skills-row-title">{cluster.category}</h3>
                  </div>
                  <p className="skills-row-subtitle">{cluster.subtitle}</p>
                </div>

                <div className="skills-row-badges">
                  {cluster.items.map((item) => {
                    const ItemIcon = item.Icon;
                    return (
                      <span className="skill-pill-item" key={item.name}>
                        <ItemIcon
                          size={15}
                          style={{ color: item.color }}
                          aria-hidden="true"
                          className="skill-pill-icon"
                        />
                        <span className="skill-pill-text">{item.name}</span>
                        <span className="skill-pill-badge mono">{item.badge}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 03: Official CV Download Hub */}
      <section className="section container cv-hub-section" id="cv" data-reveal>
        <SectionHeading
          index="03"
          label="VERIFIED CREDENTIALS"
          title="Curriculum Vitae &amp; verified documentation."
        />

        <div className="cv-hub-card">
          <div className="cv-hub-info">
            <div className="cv-hub-icon-wrap" aria-hidden="true">
              <FileDown size={28} />
            </div>
            <div className="cv-hub-text">
              <p className="eyebrow gold-rule">
                OFFICIAL DOCUMENTATION · VERIFIED RESUME
              </p>
              <h2>Janith Samarasinghe — Curriculum Vitae</h2>
              <p className="cv-hub-desc">
                Full-Stack Software Engineer &amp; DevOps Architect specializing in Go, PHP/Laravel, React 19, TypeScript, and Docker container stacks. Includes full employment verification, project metrics, and academic credentials.
              </p>
              <div className="cv-hub-meta mono">
                <span>FORMAT: PDF</span>
                <span>•</span>
                <span>SIZE: ~180 KB</span>
                <span>•</span>
                <span>UPDATED: OCT 2026</span>
                <span>•</span>
                <span>STATUS: VERIFIED</span>
              </div>
            </div>
          </div>

          <div className="cv-hub-actions">
            <a
              href={site.cvUrl}
              download
              className="button button-primary cv-primary-btn"
              aria-label="Download Official CV PDF"
            >
              <FileDown size={17} aria-hidden="true" />
              <span>Download Official CV (PDF)</span>
            </a>
            <div className="cv-hub-secondary-links">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
                aria-label="View LinkedIn Profile"
              >
                LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
                aria-label="View GitHub Profile"
              >
                GitHub <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
