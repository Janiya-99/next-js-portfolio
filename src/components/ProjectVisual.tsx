import { useState, useRef, useEffect } from "react";
import { Maximize2, ShieldCheck, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { GalleryModal } from "./GalleryModal";

export function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const mainImgRef = useRef<HTMLImageElement | null>(null);

  const gallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [{ src: project.coverImage, caption: project.title, tag: "Overview" }];

  const currentScreenshot = gallery[activeImageIndex] || gallery[0];

  useEffect(() => {
    setIsLoaded(false);
    if (mainImgRef.current && mainImgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [currentScreenshot.src]);

  const mockDomain =
    project.theme === "hr"
      ? "https://hr.enterprise-platform.io/telemetry"
      : project.theme === "erp"
        ? "https://erp.pharmacore-nexus.io/workspaces"
        : project.theme === "vps"
          ? "https://vps.portal.io:8080/dashboard"
          : project.theme === "travel"
            ? "https://travelops.luxury-ai.io/catalog"
            : project.theme === "binaare"
              ? "https://binaareartgallery.com/curation"
              : project.theme === "restaurant"
                ? "https://hasthi.restaurant.au/events"
                : "https://apex.microfinance-core.io/operations";

  return (
    <>
      <div
        className={`project-showcase-visual ${large ? "visual-large" : ""}`}
        data-reveal
      >
        {/* Browser Mockup Container */}
        <div className="showcase-browser-frame">
          <div className="showcase-browser-header">
            <div className="browser-traffic-lights" aria-hidden="true">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>

            <div className="browser-url-pill mono">
              <ShieldCheck
                size={13}
                className="text-emerald-400"
                aria-hidden="true"
              />
              <span>{mockDomain}</span>
            </div>

            <div className="showcase-controls">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-icon-btn"
                  title="Visit Live Website"
                  aria-label="Visit Live Website"
                >
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-icon-btn"
                  title="View GitHub Repository"
                  aria-label="GitHub Repository"
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
                </a>
              )}
              <button
                type="button"
                className="showcase-icon-btn"
                onClick={() => setIsModalOpen(true)}
                title="Fullscreen Image"
                aria-label="View Fullscreen"
              >
                <Maximize2 size={14} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Screenshot viewport */}
          <div
            className={`showcase-viewport ${isLoaded ? "is-loaded" : "is-loading"}`}
            onClick={() => setIsModalOpen(true)}
            title="Click to view full resolution"
          >
            {!isLoaded && (
              <div className="skeleton-shimmer" aria-hidden="true" />
            )}
            <img
              ref={mainImgRef}
              src={currentScreenshot.src}
              alt={currentScreenshot.caption}
              className="showcase-screen-img"
              loading="eager"
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsLoaded(true)}
            />
            <div className="showcase-hover-hint mono">
              <Maximize2 size={14} aria-hidden="true" /> Click to expand full
              resolution (1920×1080)
            </div>
            <div className="showcase-badge-pill mono">
              {currentScreenshot.tag}
            </div>
          </div>

          {/* Screenshot Thumbnails & Caption Strip */}
          <div className="showcase-gallery-strip">
            <p className="showcase-caption mono">
              {activeImageIndex + 1}/{gallery.length} —{" "}
              {currentScreenshot.caption}
            </p>

            {gallery.length > 1 && (
              <div className="showcase-thumbs">
                {gallery.map((item, idx) => (
                  <button
                    key={item.src}
                    type="button"
                    className={`thumb-button ${idx === activeImageIndex ? "active" : ""}`}
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`View ${item.tag}`}
                    title={item.tag}
                  >
                    <img src={item.src} alt="" loading="lazy" />
                    <span className="thumb-label mono">{item.tag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <GalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        screenshots={gallery}
        projectTitle={project.title}
        initialIndex={activeImageIndex}
      />
    </>
  );
}
