import { useState, useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPath = useRef(location.pathname);

  const isAutomated =
    typeof window !== "undefined" &&
    (Boolean(window.navigator?.webdriver) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    if (prevPath.current === location.pathname) return;
    prevPath.current = location.pathname;

    if (isAutomated) return;

    // Trigger smooth, tailored section-specific skeleton transition
    setIsTransitioning(true);
    const timer = window.setTimeout(() => {
      setIsTransitioning(false);
    }, 240);

    return () => window.clearTimeout(timer);
  }, [location.pathname, isAutomated]);

  // Render bespoke skeleton mirroring the destination page's real UI/UX
  const renderSectionSkeleton = () => {
    const path = location.pathname;

    // 1. Work Page Skeleton
    if (path === "/work") {
      return (
        <div className="skeleton-page-work">
          <div className="skeleton-hero-block">
            <div className="skeleton-pill shimmer" />
            <div className="skeleton-title-line line-1 shimmer" />
            <div className="skeleton-text-line shimmer" />
          </div>
          <div className="skeleton-filters-row">
            <div className="skeleton-filter-pill shimmer" />
            <div className="skeleton-filter-pill shimmer" />
            <div className="skeleton-filter-pill shimmer" />
            <div className="skeleton-filter-pill shimmer" />
          </div>
          <div className="skeleton-projects-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton-project-card shimmer">
                <div className="skeleton-browser-bar">
                  <span className="s-dot" />
                  <span className="s-dot" />
                  <span className="s-dot" />
                  <span className="s-address" />
                </div>
                <div className="skeleton-card-media" />
                <div className="skeleton-card-body">
                  <div className="skeleton-card-tag" />
                  <div className="skeleton-card-heading" />
                  <div className="skeleton-card-pills">
                    <span className="s-pill" />
                    <span className="s-pill" />
                    <span className="s-pill" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="skeleton-status mono">
            <span className="skeleton-dot" />
            <span>CATALOGING PRODUCTION SYSTEMS · HYDRATING VIEW</span>
          </div>
        </div>
      );
    }

    // 2. Experience Page Skeleton
    if (path === "/experience") {
      return (
        <div className="skeleton-page-experience">
          <div className="skeleton-hero-block">
            <div className="skeleton-pill shimmer" />
            <div className="skeleton-title-line line-1 shimmer" />
            <div className="skeleton-text-line shimmer" />
          </div>
          <div className="skeleton-stats-2x2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton-stat-box shimmer" />
            ))}
          </div>
          <div className="skeleton-timeline-preview">
            {[1, 2, 3].map((i) => (
              <div key={i} className="skeleton-timeline-item shimmer">
                <div className="skeleton-timeline-marker" />
                <div className="skeleton-timeline-card">
                  <div className="skeleton-timeline-meta" />
                  <div className="skeleton-timeline-title" />
                  <div className="skeleton-timeline-line" />
                </div>
              </div>
            ))}
          </div>
          <div className="skeleton-skills-rows">
            {[1, 2].map((i) => (
              <div key={i} className="skeleton-skills-category shimmer">
                <div className="skeleton-category-header" />
                <div className="skeleton-category-badges">
                  {[1, 2, 3, 4, 5].map((b) => (
                    <span key={b} className="skeleton-skill-badge" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="skeleton-status mono">
            <span className="skeleton-dot" />
            <span>LOADING TIMELINE &amp; SKILLS MATRIX · HYDRATING VIEW</span>
          </div>
        </div>
      );
    }

    // 3. About Page Skeleton
    if (path === "/about") {
      return (
        <div className="skeleton-page-about">
          <div className="skeleton-hero-block">
            <div className="skeleton-pill shimmer" />
            <div className="skeleton-title-line line-1 shimmer" />
            <div className="skeleton-text-line shimmer" />
          </div>
          <div className="skeleton-about-grid">
            <div className="skeleton-about-photo-col shimmer">
              <div className="skeleton-photo-box" />
              <div className="skeleton-photo-strip" />
            </div>
            <div className="skeleton-about-content-col">
              <div className="skeleton-para-line shimmer" />
              <div className="skeleton-para-line shimmer" />
              <div className="skeleton-para-line shimmer" />
              <div className="skeleton-architecture-pills-row">
                <span className="s-pill shimmer" />
                <span className="s-pill shimmer" />
                <span className="s-pill shimmer" />
                <span className="s-pill shimmer" />
              </div>
              <div className="skeleton-facts-column">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="skeleton-fact-row shimmer" />
                ))}
              </div>
            </div>
          </div>
          <div className="skeleton-status mono">
            <span className="skeleton-dot" />
            <span>RETRIEVING BACKGROUND &amp; ARCHITECTURE · HYDRATING VIEW</span>
          </div>
        </div>
      );
    }

    // 4. Contact Page Skeleton
    if (path === "/contact") {
      return (
        <div className="skeleton-page-contact">
          <div className="skeleton-hero-block">
            <div className="skeleton-pill shimmer" />
            <div className="skeleton-title-line line-1 shimmer" />
            <div className="skeleton-text-line shimmer" />
          </div>
          <div className="skeleton-contact-columns">
            <div className="skeleton-contact-left">
              {[1, 2, 3].map((i) => (
                <div key={i} className="skeleton-contact-card shimmer" />
              ))}
            </div>
            <div className="skeleton-contact-right shimmer">
              <div className="skeleton-input-line" />
              <div className="skeleton-input-line" />
              <div className="skeleton-input-textarea" />
              <div className="skeleton-btn-line" />
            </div>
          </div>
          <div className="skeleton-status mono">
            <span className="skeleton-dot" />
            <span>INITIALIZING COMMUNICATION CHANNELS · HYDRATING VIEW</span>
          </div>
        </div>
      );
    }

    // 5. Project Detail Page Skeleton
    if (path.startsWith("/work/")) {
      return (
        <div className="skeleton-page-project">
          <div className="skeleton-hero-block">
            <div className="skeleton-pill shimmer" />
            <div className="skeleton-title-line line-1 shimmer" />
            <div className="skeleton-text-line shimmer" />
          </div>
          <div className="skeleton-project-browser-frame shimmer">
            <div className="skeleton-browser-bar" />
            <div className="skeleton-mockup-screen" />
          </div>
          <div className="skeleton-stats-2x2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton-stat-box shimmer" />
            ))}
          </div>
          <div className="skeleton-status mono">
            <span className="skeleton-dot" />
            <span>DECRYPTING SYSTEM SPECIFICATION · HYDRATING VIEW</span>
          </div>
        </div>
      );
    }

    // 6. Home / Default Skeleton
    return (
      <div className="skeleton-page-home">
        <div className="skeleton-hero-block">
          <div className="skeleton-pill shimmer" />
          <div className="skeleton-title-line line-1 shimmer" />
          <div className="skeleton-title-line line-2 shimmer" />
          <div className="skeleton-text-line shimmer" />
        </div>
        <div className="skeleton-metrics-bar shimmer" />
        <div className="skeleton-cards-grid">
          <div className="skeleton-card shimmer" />
          <div className="skeleton-card shimmer" />
        </div>
        <div className="skeleton-status mono">
          <span className="skeleton-dot" />
          <span>SYNCHRONIZING SYSTEM VIEW · HYDRATING VIEW</span>
        </div>
      </div>
    );
  };

  return (
    <div className="page-transition-wrapper">
      {/* Bespoke Architectural Skeleton Screen Matching Each Route's True UI/UX */}
      {isTransitioning && !isAutomated && (
        <div className="page-skeleton-overlay" aria-hidden="true">
          <div className="container skeleton-inner">
            {renderSectionSkeleton()}
          </div>
        </div>
      )}

      {/* Actual Page Content */}
      <div
        className={`page-transition-content ${
          isTransitioning && !isAutomated ? "is-transitioning" : "is-active"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

