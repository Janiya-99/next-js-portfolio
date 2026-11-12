import {
  Braces,
  Workflow,
  PanelsTopLeft,
  Cloud,
  ArrowUpRight,
  MapPin,
  Mail,
  Layers3,
  Coffee,
  ArrowRight,
  FileDown,
  Server,
  ShieldCheck,
  Activity,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  SiLaravel,
  SiReact,
  SiTypescript,
  SiGo,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiNginx,
  SiRedis,
} from "react-icons/si";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import {
  ButtonLink,
  SectionHeading,
  TextLink,
  ScrollCue,
} from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { SystemSculpture } from "@/components/SystemSculpture";
import { ContactCTA } from "@/components/Footer";
import { Timeline } from "@/components/Timeline";
import { Spotlight } from "@/components/Spotlight";

const capabilities = [
  {
    icon: Braces,
    title: "High-Concurrency Backend & APIs",
    copy: "Worker pools, microservices, and secure RESTful APIs processing over 5,000 daily transactions.",
  },
  {
    icon: Workflow,
    title: "Multi-Tenant SaaS & ERP Systems",
    copy: "Connecting workforce telemetry, FEFO batch tracking, and double-entry general ledger accounting.",
  },
  {
    icon: PanelsTopLeft,
    title: "Relational Schema & Query Optimization",
    copy: "Carefully indexed relational structures improving endpoint response times by 35%.",
  },
  {
    icon: Cloud,
    title: "Containerization & Cloud Infrastructure",
    copy: "Automated container stacks, reverse proxying, and cloud deployments maintaining 99.9% uptime.",
  },
];

const technologies = [
  { name: "Go (Golang)", Icon: SiGo, color: "#00add8" },
  { name: "PHP / Laravel", Icon: SiLaravel, color: "#ff2d20" },
  { name: "React 19", Icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "Docker", Icon: SiDocker, color: "#2496ed" },
  { name: "MySQL 8.0", Icon: SiMysql, color: "#4479a1" },
  { name: "Redis 7", Icon: SiRedis, color: "#dc382d" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
  { name: "Nginx", Icon: SiNginx, color: "#009639" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Git / CI-CD", Icon: SiGit, color: "#f05032" },
  { name: "Java / Spring", Icon: Coffee, color: "#e76f51" },
];

const featuredProjectSlugs = [
  "ai-travel-product-management",
  "binaare-art-gallery",
  "multi-tenant-enterprise-hrms",
  "pharmaceutical-distribution-erp",
];

const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is (typeof projects)[number] => Boolean(p));

export function HomePage() {
  return (
    <>
      <section
        className="cinematic-hero"
        id="hero"
      >
        <img
          className="hero-backdrop"
          src={`${import.meta.env.BASE_URL}images/janith-hero.webp`}
          width="1672"
          height="941"
          alt="Janith Samarasinghe sitting on a wooden staircase"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="container cinematic-hero-inner">
          <div className="cinematic-copy">
            <p className="eyebrow gold-rule" data-hero-copy>
              FULL-STACK SOFTWARE ENGINEER · DEVOPS &amp; SYSTEMS ARCHITECTURE
            </p>
            <h1 tabIndex={-1} className="hero-modern-title">
              <span data-hero-line>Architecting</span>
              <span data-hero-line>full-stack scale &amp;</span>
              <span data-hero-line>
                <em>cloud resilience.</em>
              </span>
            </h1>
            <p className="cinematic-description" data-hero-copy>
              I engineer end-to-end applications: responsive modern interfaces in React 19 &amp; Next.js, high-concurrency Go &amp; Laravel backends, and automated DevOps container pipelines built to scale under production load. Based in Kandy, Sri Lanka.
            </p>
            <div className="cinematic-actions" data-hero-copy>
              <ButtonLink href="/work">View Selected Work</ButtonLink>
              <a
                href={site.cvUrl}
                download
                className="button button-secondary cv-download-btn"
                aria-label="Download Janith's CV"
              >
                <FileDown size={16} aria-hidden="true" /> Download CV
              </a>
            </div>
            <div className="hero-personal" data-hero-copy>
              <span>
                <MapPin size={16} aria-hidden="true" />
                Kandy, Sri Lanka
              </span>
              <span className="personal-divider" />
              <a href={`mailto:${site.email}`} aria-label="Email Janith">
                <Mail size={18} aria-hidden="true" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Janith's GitHub Profile"
              >
                GitHub <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-right-symmetrical">
            <div className="hero-handwriting" aria-hidden="true">
              <span className="hw-line">Architect</span>
              <span className="hw-line">Scale</span>
              <span className="hw-line">Optimize</span>
              <span className="hw-line">Deploy</span>
              <i className="hw-underline" />
            </div>
            <div className="hero-experience glass">
              <span className="experience-icon" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </span>
              <div>
                <strong>
                  3<span>+</span>
                </strong>
                <p>Years of Engineering</p>
              </div>
            </div>
          </div>

          <ScrollCue />
        </div>
      </section>

      {/* Kinetic Engineering Metrics Bar */}
      <section className="container kinetic-metrics-section">
        <div className="kinetic-metrics-grid" data-reveal>
          {site.metrics.map((m) => (
            <div className="kinetic-metric-item" key={m.label}>
              <strong className="mono" data-count-to={m.value}>{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section: Full-Bleed Modern Architecture with Curved Bottom-Right Corner & Full Image with Fade */}
      <section className="home-about-section" id="about">
        <div className="home-about-card-container" data-reveal>
          <div className="home-about-visual">
            <img
              src={`${import.meta.env.BASE_URL}images/janith-working.webp`}
              alt="Janith Samarasinghe at desk with laptop"
              width="1046"
              height="1308"
              loading="lazy"
              className="home-about-photo"
            />
            <div className="home-about-visual-fade" aria-hidden="true" />
            <div className="home-about-photo-pill mono">
              <span className="live-status-dot" aria-hidden="true" />
              <span>Janith Samarasinghe</span>
              <span className="pill-sep">·</span>
              <span className="photo-loc">
                <MapPin size={11} aria-hidden="true" /> KANDY, LK
              </span>
            </div>
          </div>

          <div className="home-about-content">
            <p className="eyebrow gold-rule">
              CRAFTSMANSHIP · FULL-STACK &amp; DEVOPS ARCHITECTURE
            </p>
            <h2>
              Resilient code.
              <br />
              <span className="accent-text">End-to-end impact.</span>
            </h2>
            <p className="home-about-lead">
              Hi, I&apos;m Janith — a full stack software engineer and systems architect from Kandy, Sri
              Lanka with deep DevOps experience. I build end-to-end applications: from responsive,
              accessible frontends in React 19 and Next.js to high-throughput Go and Laravel microservices,
              strictly isolated relational schemas, and automated CI/CD container workflows.
            </p>
            <p className="home-about-body">
              Over the past 3+ years, I&apos;ve architected multi-tenant payroll
              and statutory compliance engines, modeled high-volume financial
              amortization systems, and streamlined 10,000+ SKU distribution
              platforms. I bridge the complete product lifecycle — pairing intuitive user interfaces
              with sub-second query performance and automated zero-downtime containerization.
            </p>

            <div
              className="about-architecture-pills"
              aria-label="Core architecture domains"
            >
              <span>
                <Layers3 size={13} aria-hidden="true" /> Full-Stack React &amp; Go
              </span>
              <span>
                <Server size={13} aria-hidden="true" /> Docker &amp; CI/CD Pipelines
              </span>
              <span>
                <ShieldCheck size={13} aria-hidden="true" /> Multi-Tenant RLS
              </span>
              <span>
                <Cpu size={13} aria-hidden="true" /> Async Worker Pools
              </span>
            </div>

            <div className="home-about-pillars-grid">
              <div className="about-pillar-card">
                <span className="pillar-icon" aria-hidden="true">
                  <PanelsTopLeft size={19} strokeWidth={1.8} />
                </span>
                <div className="pillar-text">
                  <strong>Full-Stack Applications</strong>
                  <span>React 19 &amp; Next.js UX</span>
                </div>
              </div>
              <div className="about-pillar-card">
                <span className="pillar-icon" aria-hidden="true">
                  <Braces size={19} strokeWidth={1.8} />
                </span>
                <div className="pillar-text">
                  <strong>Distributed Backends &amp; SaaS</strong>
                  <span>Go, PHP/Laravel, RLS</span>
                </div>
              </div>
              <div className="about-pillar-card">
                <span className="pillar-icon" aria-hidden="true">
                  <Server size={19} strokeWidth={1.8} />
                </span>
                <div className="pillar-text">
                  <strong>DevOps &amp; Cloud Systems</strong>
                  <span>Docker &amp; 99.9% Uptime</span>
                </div>
              </div>
            </div>

            <div className="home-about-actions">
              <TextLink href="/about">
                Read full engineering background
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-section container">
        <div className="tech-heading">
          <div>
            <p className="eyebrow gold-rule">02 / TECH STACK &amp; TOOLING</p>
            <h2>Core production ecosystem</h2>
          </div>
          <TextLink href="/about#skills">View full stack matrix</TextLink>
        </div>
        <div className="tech-cards">
          {technologies.map(({ name, Icon, color }) => (
            <div className="tech-card" key={name}>
              <Icon aria-hidden="true" style={{ color }} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work Section with 4 Flagship Showcase Cards in Modern 2x2 Grid */}
      <section
        id="selected-work"
        className="section container selected-work"
      >
        <SectionHeading
          index="01"
          label="FLAGSHIP SYSTEMS"
          title={
            <>
              Enterprise platforms.
              <br />
              <span className="accent-text">Engineered for scale.</span>
            </>
          }
        >
          <p>
            A curated showcase of 4 flagship systems engineered for real-world
            operations — featuring travel catalog AI, virtual art exhibition,
            multi-tenant HRMS, and pharmaceutical ERP distribution.
          </p>
          <TextLink href="/work">Explore all 0{projects.length} flagship systems</TextLink>
        </SectionHeading>
        <div className="project-grid home-project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </section>

      <section
        className="expertise-section section"
        data-waypoint-section="capabilities"
      >
        <div className="container">
          <div className="expertise-heading">
            <SectionHeading
              index="02"
              label="CORE CAPABILITIES"
              title={
                <>
                  Built with intention.
                  <br />
                  <span className="muted-heading">From the inside out.</span>
                </>
              }
            />
            <div className="expertise-sculpture">
              <SystemSculpture />
            </div>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, copy }, index) => (
              <Spotlight className="capability-card" key={title}>
                <div data-reveal>
                  <div className="capability-top">
                    <Icon size={27} strokeWidth={1.4} aria-hidden="true" />
                    <span className="mono">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </Spotlight>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="section container experience-section"
        data-waypoint-section="experience"
      >
        <div className="experience-intro">
          <p className="eyebrow">03 / THE JOURNEY</p>
          <h2>
            Professional experience.
            <br />
            <span className="muted-heading">Proven track record.</span>
          </h2>
          <p>
            Full-time software engineering at Asipiya International and Vital
            One, alongside concurrent enterprise ERP architecture contracts.
          </p>
          <div className="experience-summary-grid">
            <div className="exp-stat-box">
              <strong className="mono" data-count-to="5,000+">5,000+</strong>
              <span>Daily Loan Txns</span>
            </div>
            <div className="exp-stat-box">
              <strong className="mono" data-count-to="35%">35%</strong>
              <span>SQL Query Speedup</span>
            </div>
            <div className="exp-stat-box">
              <strong className="mono" data-count-to="10,000+">10,000+</strong>
              <span>Active ERP SKUs</span>
            </div>
            <div className="exp-stat-box">
              <strong className="mono" data-count-to="40%">40%</strong>
              <span>Faster CI/CD Deploys</span>
            </div>
          </div>
          <TextLink href="/experience">Explore complete experience &amp; skills matrix</TextLink>
        </div>
        <Timeline compact />
      </section>

      <div className="about-note container">
        <span className="mono">A LITTLE ABOUT THE WAY I WORK</span>
        <p>
          Understand the workflow. Model the data.
          <br />
          Build with care. Keep improving.
        </p>
        <Link
          to="/about"
          className="circle-icon"
          aria-label="Read about my engineering approach"
        >
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>

      <ContactCTA />
    </>
  );
}
