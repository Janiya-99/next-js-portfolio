import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  FileDown,
  Layers3,
  Server,
  ShieldCheck,
  Cpu,
  ArrowRight,
  GraduationCap,
  Award,
} from "lucide-react";
import { ContactCTA } from "@/components/Footer";
import { SectionHeading } from "@/components/ui";
import { CinematicPageHero } from "@/components/CinematicPageHero";
import { site } from "@/data/site";
import { education, certifications } from "@/data/experience";

const approach = [
  {
    title: "Understand the enterprise domain.",
    text: "Start with the business process, regulatory constraints, and multi-tenant requirements that the system must support.",
    slug: "multi-tenant-enterprise-hrms",
    link: "See Multi-Tenant HRMS",
  },
  {
    title: "Model data & relational integrity.",
    text: "Give business rules a resilient structure through normalized relational schemas, transactional locking, and strict audit logs.",
    slug: "pharmaceutical-distribution-erp",
    link: "Explore Pharmaceutical ERP",
  },
  {
    title: "Engineer for concurrency & low latency.",
    text: "Eliminate resource bloat using Go worker pools, Server-Sent Events (SSE), and containerized microservices.",
    slug: "custom-vps-portal",
    link: "View VPS Control Nexus",
  },
  {
    title: "Deliver, containerize, and maintain.",
    text: "Carry solutions from local Docker stacks to resilient production droplets with automated backups and 99.9% uptime.",
    slug: "hasthi-restaurant-platform",
    link: "See Restaurant Platform",
  },
];

export function AboutPage() {
  return (
    <>
      <CinematicPageHero
        bgImage={`${import.meta.env.BASE_URL}images/janith-portrait.webp`}
        bgPosition="center 20%"
        badge="ABOUT JANITH"
        metaBadge="KANDY, SRI LANKA"
        title={
          <span data-hero-line>
            The Engineer Behind <span className="accent-text">the Architecture</span>
          </span>
        }
        subtitle="Full-stack software engineer building fast, intuitive web applications and reliable backends from Kandy, Sri Lanka."
        chips={[
          "Craftsmanship First",
          "React, Next.js & Go",
          "Docker & CI/CD",
          "3+ Years Shipping Code",
        ]}
      />

      <section className="about-story-section container">
        <div className="about-story">
          <figure className="portrait">
            <img
              src={`${import.meta.env.BASE_URL}images/janith-portrait.webp`}
              alt="Janith Samarasinghe seated in a studio"
              width="1122"
              height="1402"
              fetchPriority="high"
            />
            <figcaption>
              <span>JANITH SAMARASINGHE</span>
              <MapPin size={14} /> KANDY, LK
            </figcaption>
          </figure>
          <div className="about-story-copy">
            <div data-reveal>
              <p className="eyebrow">
                <span className="accent-dot" /> FULL-STACK SOFTWARE ENGINEER &amp; SYSTEMS BUILDER
              </p>
              <h2>
                Thoughtful code.
                <br />
                Built for people.
              </h2>
            </div>
            <div data-reveal>
              <p>
                I got into software engineering because I love building things that solve actual
                problems for real people. There is something genuinely rewarding about taking an idea
                all the way from a blank canvas to a fast, accessible frontend, down through a reliable
                backend, and into a production container that runs smoothly day in and day out.
              </p>
            </div>
            <div data-reveal>
              <p>
                Over the last three years, I&apos;ve worked across the full software lifecycle — from
                designing intuitive dashboards in React and Next.js to optimizing SQL queries in large
                databases and setting up automated Docker deployment pipelines. I care about writing clean,
                readable code and building systems that are a pleasure to maintain, both for myself and
                the teammates who work alongside me.
              </p>
            </div>
            <div className="about-actions-strip" data-reveal>
              <Link to="/experience" className="button button-primary">
                View Career &amp; Skills Matrix <ArrowRight size={15} />
              </Link>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                GitHub Profile <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="about-signature-wrap" data-reveal>
              <div className="about-signature">
                Janith<span>.</span>
              </div>
              <span className="about-signature-sub mono">BUILDING WITH INTENT, EVERY DAY.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quantitative Engineering Impact Highlights */}
      <section className="container section-sm">
        <div className="impact-grid" data-reveal>
          <div className="impact-card">
            <span className="impact-num mono">3+</span>
            <span className="impact-lbl">Years Engineering Experience</span>
            <p>Full-lifecycle development across Go, PHP/Laravel, React, and Docker.</p>
          </div>
          <div className="impact-card">
            <span className="impact-num mono">35%</span>
            <span className="impact-lbl">Query Speedup</span>
            <p>Relational query profiling and schema optimization across high-throughput endpoints.</p>
          </div>
          <div className="impact-card">
            <span className="impact-num mono">10K+</span>
            <span className="impact-lbl">SKUs Tracked</span>
            <p>FEFO inventory batch management across 3 major pharmaceutical distribution hubs.</p>
          </div>
          <div className="impact-card">
            <span className="impact-num mono">99.9%</span>
            <span className="impact-lbl">System Reliability</span>
            <p>Automated Docker container stacks, Nginx SSL, and rolling zero-downtime releases.</p>
          </div>
        </div>
      </section>

      {/* Engineering Approach Section */}
      <section className="section approach-section">
        <div className="container">
          <SectionHeading
            index="01"
            label="MY APPROACH"
            title={
              <>
                Engineered for resilience.
                <br />
                <span className="muted-heading">
                  From intuitive UX to production infrastructure.
                </span>
              </>
            }
          />
          <div className="approach-grid">
            {approach.map((item, i) => (
              <div data-reveal key={item.title}>
                <span className="mono approach-number">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to={`/work/${item.slug}`} className="text-link">
                  {item.link}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formal Academic Foundation & Verified Certifications */}
      <section className="section container education-section" id="education">
        <SectionHeading
          index="02"
          label="ACADEMIC &amp; CREDENTIALS"
          title="Formal foundation &amp; verified certifications."
        >
          <p>
            Academic degree and software engineering fundamentals from the University of Moratuwa, paired with verified full-stack and cloud credentials.
          </p>
        </SectionHeading>

        <div className="education-grid" data-reveal>
          {education.map((edu) => (
            <div className="education-card" key={edu.institution}>
              <div className="edu-icon-wrap" aria-hidden="true">
                <GraduationCap size={26} />
              </div>
              <div>
                <span className="mono edu-period">{edu.period}</span>
                <h3>{edu.degree}</h3>
                <p className="edu-institution">
                  {edu.institution} · {edu.location}
                </p>
                <p className="edu-desc">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-block" data-reveal>
          <p className="eyebrow">
            <Award size={16} aria-hidden="true" /> PROFESSIONAL CERTIFICATIONS &amp; VALIDATIONS
          </p>
          <div className="cert-list">
            {certifications.map((cert) => (
              <div className="cert-item" key={cert.title}>
                <div>
                  <strong>{cert.title}</strong>
                  <span>{cert.issuer}</span>
                </div>
                <span className="cert-status mono">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Bridge Banner to Experience Page */}
      <section className="container section-sm about-experience-bridge" data-reveal>
        <div className="bridge-card">
          <div className="bridge-copy">
            <p className="eyebrow gold-rule">
              PRODUCTION TRACK RECORD &amp; TOOLKIT
            </p>
            <h2>Want to inspect my complete career timeline &amp; technical skills matrix?</h2>
            <p>
              Explore verified roles at Asipiya International, in-depth proficiency ratings across Go, PHP/Laravel, React 19, and Docker, and download my official Curriculum Vitae.
            </p>
          </div>
          <div className="bridge-actions">
            <Link to="/experience" className="button button-primary">
              Explore Experience &amp; Skills Matrix
            </Link>
            <a
              href={site.cvUrl}
              download
              className="button button-secondary"
              aria-label="Download Official CV"
            >
              <FileDown size={16} aria-hidden="true" /> Download CV
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
