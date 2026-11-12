import { useState, useRef, useEffect, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Images, ExternalLink } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiGo,
  SiLaravel,
  SiReact,
  SiTypescript,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiNodedotjs,
  SiRedis,
  SiVuedotjs,
  SiPhp,
  SiStripe,
  SiNginx,
  SiGooglecloud,
} from "react-icons/si";
import type { Project } from "@/data/projects";
import { GalleryModal } from "./GalleryModal";

export function resolveTechIcon(name: string): { Icon: IconType; color: string; label: string } {
  const lower = name.toLowerCase();
  if (lower.includes("go") && !lower.includes("google")) {
    return { Icon: SiGo, color: "#00add8", label: "Go" };
  }
  if (lower.includes("laravel") || lower.includes("php")) {
    return { Icon: SiLaravel, color: "#ff2d20", label: "Laravel" };
  }
  if (lower.includes("react")) {
    return { Icon: SiReact, color: "#61dafb", label: "React" };
  }
  if (lower.includes("typescript")) {
    return { Icon: SiTypescript, color: "#3178c6", label: "TypeScript" };
  }
  if (lower.includes("docker")) {
    return { Icon: SiDocker, color: "#2496ed", label: "Docker" };
  }
  if (lower.includes("mysql")) {
    return { Icon: SiMysql, color: "#4479a1", label: "MySQL" };
  }
  if (lower.includes("postgres")) {
    return { Icon: SiPostgresql, color: "#4169e1", label: "Postgres" };
  }
  if (lower.includes("tailwind")) {
    return { Icon: SiTailwindcss, color: "#38bdf8", label: "Tailwind" };
  }
  if (lower.includes("vue")) {
    return { Icon: SiVuedotjs, color: "#42b883", label: "Vue" };
  }
  if (lower.includes("redis")) {
    return { Icon: SiRedis, color: "#dc382d", label: "Redis" };
  }
  if (lower.includes("node")) {
    return { Icon: SiNodedotjs, color: "#68a063", label: "Node.js" };
  }
  if (lower.includes("stripe")) {
    return { Icon: SiStripe, color: "#635bff", label: "Stripe" };
  }
  if (lower.includes("nginx")) {
    return { Icon: SiNginx, color: "#009639", label: "Nginx" };
  }
  if (lower.includes("gemini") || lower.includes("cloud") || lower.includes("gcp")) {
    return { Icon: SiGooglecloud, color: "#4285f4", label: "Cloud" };
  }
  return { Icon: SiReact, color: "#a4a89f", label: name };
}

export function ProjectCard({
  project,
  className = "",
  compact = false,
}: {
  project: Project;
  className?: string;
  compact?: boolean;
}) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsImageLoaded(true);
    }
  }, [project.coverImage]);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height - 0.5) * -4).toFixed(2);
    const ry = ((x / rect.width - 0.5) * 4).toFixed(2);
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  // Derive domain label for browser chrome mockup
  const mockDomain =
    project.theme === "hr"
      ? "hr.enterprise-platform.io"
      : project.theme === "erp"
        ? "erp.pharmacore-nexus.io"
        : project.theme === "vps"
          ? "vps.portal.io:8080"
          : project.theme === "travel"
            ? "travelops.luxury-ai.io"
            : project.theme === "binaare"
              ? "binaareartgallery.com"
              : project.theme === "restaurant"
                ? "hasthi.restaurant.au"
                : "apex.microfinance-core.io";

  // Compact card mode (for Home page featured projects showcase - UI/UX Pro Max 2x2 Showcase)
  if (compact) {
    return (
      <article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`project-card compact-showcase-card ${className}`}
        data-reveal
      >
        <Link
          to={`/work/${project.slug}`}
          className="project-card-link compact-card-link"
          aria-label={`Open case study for ${project.title}`}
        >
          {/* Browser Chrome Header Mockup */}
          <div className="card-browser-bar compact-browser-bar">
            <div className="browser-dots" aria-hidden="true">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="browser-address mono" title={mockDomain}>
              <span className="lock-icon" aria-hidden="true">
                🔒
              </span>
              {mockDomain}
            </div>
            <div className="browser-tag mono">
              <span className="live-pulse-dot" aria-hidden="true" />
              <span>LIVE</span>
            </div>
          </div>

          <div
            className={`compact-image-wrap ${isImageLoaded ? "is-loaded" : "is-loading"}`}
          >
            {!isImageLoaded && (
              <div className="skeleton-shimmer" aria-hidden="true" />
            )}
            <img
              ref={imgRef}
              src={project.coverImage}
              alt={project.title}
              className="compact-preview-image"
              loading="lazy"
              width="1280"
              height="720"
              onLoad={() => setIsImageLoaded(true)}
              onError={() => setIsImageLoaded(true)}
            />
            <div className="compact-image-overlay" />
            <div className="compact-hover-indicator" aria-hidden="true">
              <span className="compact-hover-badge mono">
                Explore Architecture <ArrowUpRight size={14} />
              </span>
            </div>
          </div>

          <div className="compact-card-content">
            <div className="compact-card-topline">
              <span className="compact-category-tag mono">{project.category}</span>
              <span className="compact-arrow-chip" aria-hidden="true">
                <ArrowUpRight size={14} />
              </span>
            </div>

            <h3 className="compact-card-title" title={project.shortTitle || project.title}>
              {project.shortTitle || project.title}
            </h3>

            <div className="compact-tech-logos" aria-label="Technologies used">
              {project.technologies.slice(0, 4).map((tech) => {
                const { Icon, color, label } = resolveTechIcon(tech);
                return (
                  <span key={tech} className="tech-badge-pill" title={tech}>
                    <Icon style={{ color }} size={13} aria-hidden="true" />
                    <span className="tech-badge-name">{label}</span>
                  </span>
                );
              })}
              {project.technologies.length > 4 && (
                <span
                  className="tech-badge-pill more-pill mono"
                  title={`+${project.technologies.length - 4} more tools`}
                >
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <>
      <article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`project-card modern-showcase-card ${className}`}
        data-reveal
      >
        {/* Mockup browser chrome frame */}
        <div className="card-mockup-frame">
          <div className="card-browser-bar">
            <div className="browser-dots" aria-hidden="true">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <div className="browser-address mono" title={mockDomain}>
              <span className="lock-icon" aria-hidden="true">
                🔒
              </span>
              {mockDomain}
            </div>
            <div className="browser-tag mono">
              <span className="live-pulse-dot" aria-hidden="true" />
              {project.badge}
            </div>
          </div>

          <div
            className={`card-image-wrap ${isImageLoaded ? "is-loaded" : "is-loading"}`}
          >
            {!isImageLoaded && (
              <div className="skeleton-shimmer" aria-hidden="true" />
            )}
            <img
              ref={imgRef}
              src={project.coverImage}
              alt={project.title}
              className="card-preview-image"
              loading="lazy"
              width="1280"
              height="720"
              onLoad={() => setIsImageLoaded(true)}
              onError={() => setIsImageLoaded(true)}
            />
            <div className="card-image-overlay" />

            {/* Quick Actions overlay */}
            <div className="card-image-actions">
              {project.gallery && project.gallery.length > 0 && (
                <button
                  type="button"
                  className="quick-gallery-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsGalleryOpen(true);
                  }}
                  aria-label={`Open screenshot gallery for ${project.title}`}
                >
                  <Images size={14} aria-hidden="true" />
                  <span>{project.gallery.length} Screens</span>
                </button>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-live-btn"
                  aria-label={`Visit live site: ${project.title}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={13} aria-hidden="true" />
                  <span>Live Site</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-github-btn"
                  aria-label={`View code repository on GitHub for ${project.title}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Content body */}
        <div className="card-body-content">
          <div className="project-meta">
            <span className="eyebrow">
              {project.number} / {project.category}
            </span>
            <Link
              to={`/work/${project.slug}`}
              className="project-open"
              aria-label={`Open case study for ${project.title}`}
            >
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <h3>
            <Link to={`/work/${project.slug}`} className="project-card-link">
              {project.title}
            </Link>
          </h3>

          <p className="project-description">{project.summary}</p>

          {/* Key Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div
              className="project-metrics-strip"
              aria-label="Key system metrics"
            >
              {project.metrics.slice(0, 3).map((metric) => (
                <div className="metric-pill" key={metric.label}>
                  <span className="metric-val mono">{metric.value}</span>
                  <span className="metric-lbl">{metric.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Technologies & Footer */}
          <div className="project-card-bottom">
            <div className="tags">
              {project.technologies.slice(0, 4).map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
              {project.technologies.length > 4 && (
                <span className="more-tag">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
            <Link to={`/work/${project.slug}`} className="case-study-link">
              Explore Architecture <ArrowUpRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>

      {/* Fullscreen Lightbox Modal */}
      {project.gallery && (
        <GalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          screenshots={project.gallery}
          projectTitle={project.title}
        />
      )}
    </>
  );
}
