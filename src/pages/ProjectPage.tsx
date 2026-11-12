import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
  Maximize2,
  Layers3,
  Globe,
  Briefcase,
  SlidersHorizontal,
} from "lucide-react";
import { projects } from "@/data/projects";
import { resolveTechIcon } from "@/components/ProjectCard";
import { ProjectVisual } from "@/components/ProjectVisual";
import { GalleryModal } from "@/components/GalleryModal";
import { ContactCTA } from "@/components/Footer";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectPage() {
  const { slug } = useParams();
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];
  if (!project) return <NotFoundPage />;
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <article className="container modern-case-study">
        {/* Navigation & Breadcrumb Header */}
        <nav className="case-top-nav" aria-label="Project Navigation">
          <Link to="/work" className="case-back-link">
            <ArrowLeft size={15} aria-hidden="true" />
            <span>All Projects</span>
          </Link>
          <div className="case-top-meta">
            <span className="case-category-badge mono">
              {project.number} / {project.category}
            </span>
            {project.badge && (
              <span className="case-status-badge mono">
                <span className="live-pulse-dot" aria-hidden="true" />
                {project.badge}
              </span>
            )}
          </div>
        </nav>

        {/* Hero Title & Executive Lead */}
        <header className="case-hero-header">
          <h1 tabIndex={-1} data-hero-line className="case-display-title">
            {project.heading}
          </h1>

          <p className="case-lead-summary" data-hero-copy>
            {project.summary}
          </p>

          <div className="case-action-bar" data-hero-copy>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                <ExternalLink size={15} aria-hidden="true" /> Visit Live Platform
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View Repository
              </a>
            )}
            {project.metrics?.[0] && (
              <span className="case-metric-highlight mono">
                ⚡ {project.metrics[0].value} {project.metrics[0].label}
              </span>
            )}
          </div>
        </header>

        {/* High-Resolution Interactive Showcase Visual */}
        <section className="case-visual-wrapper">
          <ProjectVisual project={project} large />
        </section>

        {/* Architecture Dashboard Card (Role, Domain, Scale, Tech Stack, Metrics) */}
        <section className="case-dashboard-card" data-reveal>
          <div className="case-meta-quad">
            <div className="meta-quad-item">
              <span className="meta-quad-label mono">
                <Briefcase size={12} aria-hidden="true" /> ROLE &amp; OWNERSHIP
              </span>
              <p className="meta-quad-val">{project.role}</p>
            </div>
            <div className="meta-quad-item">
              <span className="meta-quad-label mono">
                <Globe size={12} aria-hidden="true" /> INDUSTRY &amp; DOMAIN
              </span>
              <p className="meta-quad-val">{project.domain}</p>
            </div>
            <div className="meta-quad-item">
              <span className="meta-quad-label mono">
                <SlidersHorizontal size={12} aria-hidden="true" /> PROJECT SCOPE
              </span>
              <p className="meta-quad-val">{project.title}</p>
            </div>
            <div className="meta-quad-item meta-tech-item">
              <span className="meta-quad-label mono">
                <Layers3 size={12} aria-hidden="true" /> TECHNOLOGY STACK
              </span>
              <div className="case-tech-badge-row">
                {project.technologies.map((tech) => {
                  const { Icon, color, label } = resolveTechIcon(tech);
                  return (
                    <span key={tech} className="tech-badge-pill" title={tech}>
                      <Icon style={{ color }} size={13} aria-hidden="true" />
                      <span className="tech-badge-name">{label}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <div className="case-metrics-strip">
              {project.metrics.map((m) => (
                <div key={m.label} className="case-metric-tile">
                  <span className="case-metric-num mono">{m.value}</span>
                  <span className="case-metric-desc">{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Structured 2-Card Technical Architecture Section */}
        <div className="case-cards-duo">
          {/* Card 1: Context & Challenge */}
          <section className="case-content-card" data-reveal>
            <p className="eyebrow gold-rule">01 / CONTEXT &amp; CHALLENGE</p>
            <h2>The challenge &amp; operational goals.</h2>
            <p className="case-card-body-text">{project.context}</p>
          </section>

          {/* Card 2: What I Built & Delivered */}
          <section className="case-content-card" data-reveal>
            <p className="eyebrow gold-rule">02 / WHAT I BUILT</p>
            <h2>Engineering ownership &amp; key deliverables.</h2>
            <div className="case-deliverables-list">
              {project.contributions.map((item, idx) => (
                <div key={idx} className="case-deliverable-item">
                  <div className="deliverable-icon-wrap" aria-hidden="true">
                    <Check size={14} />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* End-to-End Workflow Pipeline */}
        {project.workflow && project.workflow.length > 0 && (
          <section className="case-workflow-card" data-reveal>
            <div className="case-card-header">
              <p className="eyebrow gold-rule">03 / HOW IT WORKS</p>
              <h2>How the system functions under the hood.</h2>
            </div>
            <div className="case-pipeline-grid">
              {project.workflow.map((step, i) => (
                <div key={step} className="case-pipeline-step">
                  <div className="pipeline-step-top">
                    <span className="pipeline-step-num mono">0{i + 1}</span>
                    <span className="pipeline-connector-line" aria-hidden="true" />
                  </div>
                  <p className="pipeline-step-text">{step}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* System Interface Gallery */}
        {project.gallery && project.gallery.length > 1 && (
          <section className="case-gallery-card" data-reveal>
            <div className="case-gallery-header">
              <div>
                <p className="eyebrow gold-rule">04 / INTERFACE &amp; TELEMETRY VIEWS</p>
                <h2>Operational screens &amp; live views.</h2>
              </div>
              <span className="mono case-gallery-count">
                {project.gallery.length} High-Res Screens
              </span>
            </div>
            <div className="case-screens-grid">
              {project.gallery.slice(0, 6).map((item, idx) => (
                <button
                  type="button"
                  key={item.src}
                  className="case-screen-item"
                  onClick={() => setModalIndex(idx)}
                  aria-label={`Inspect ${item.tag}: ${item.caption}`}
                >
                  <div className="case-screen-thumb">
                    <img src={item.src} alt={item.caption} loading="lazy" />
                    <span className="case-screen-tag mono">{item.tag}</span>
                    <span className="case-screen-zoom" aria-hidden="true">
                      <Maximize2 size={13} />
                    </span>
                  </div>
                  <div className="case-screen-meta">
                    <span className="screen-idx mono">SCREEN 0{idx + 1}</span>
                    <p>{item.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Deep Dive Insights (if any) */}
        {project.sections && project.sections.length > 0 && (
          <div className="case-deep-dives-grid">
            {project.sections.map((section, i) => (
              <section key={section.title} className="case-deep-dive-card" data-reveal>
                <p className="eyebrow gold-rule">DEEP DIVE 0{i + 1}</p>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </section>
            ))}
          </div>
        )}

        {/* Next Project Navigation Strip */}
        <nav className="case-next-nav" data-reveal aria-label="Next Project">
          <Link to={`/work/${next.slug}`} className="next-project-link">
            <div className="next-project-copy">
              <span className="eyebrow">NEXT CASE STUDY</span>
              <h3 className="next-project-title">{next.title}</h3>
              <p className="next-project-cat mono">{next.category}</p>
            </div>
            <div className="next-project-arrow-wrap" aria-hidden="true">
              <ArrowRight size={24} />
            </div>
          </Link>
        </nav>
      </article>

      {modalIndex !== null && (
        <GalleryModal
          isOpen={true}
          onClose={() => setModalIndex(null)}
          screenshots={project.gallery}
          projectTitle={project.title}
          initialIndex={modalIndex}
        />
      )}

      <ContactCTA />
    </>
  );
}
