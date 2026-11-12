import type { ReactNode } from "react";

export interface CinematicPageHeroProps {
  badge: string;
  metaBadge?: string;
  title: ReactNode;
  subtitle: string;
  chips?: string[];
  bgImage?: string;
  bgPosition?: string;
  action?: ReactNode;
  className?: string;
}

export function CinematicPageHero({
  badge,
  metaBadge,
  title,
  subtitle,
  chips = [],
  bgImage,
  bgPosition = "center 30%",
  action,
  className = "",
}: CinematicPageHeroProps) {
  return (
    <section className={`cinematic-page-hero ${className}`}>
      {bgImage && (
        <div className="page-hero-backdrop-wrap" aria-hidden="true">
          <img
            src={bgImage}
            alt=""
            className="page-hero-backdrop-img"
            style={{ objectPosition: bgPosition }}
            fetchPriority="high"
          />
          <div className="page-hero-backdrop-overlay" />
        </div>
      )}
      <div className="container page-hero-content">
        <div className="page-hero-meta" data-hero-copy>
          <span className="page-hero-badge mono">
            <span className="live-pulse-dot" /> {badge}
          </span>
          {metaBadge && <span className="page-hero-stat mono">{metaBadge}</span>}
        </div>

        <h1 tabIndex={-1} className="page-hero-title">
          {title}
        </h1>

        <p className="page-hero-copy" data-hero-copy>
          {subtitle}
        </p>

        {chips.length > 0 && (
          <div className="page-hero-chips" data-hero-copy>
            {chips.map((chip) => (
              <span className="hero-chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        )}

        {action && (
          <div className="page-hero-actions" data-hero-copy>
            {action}
          </div>
        )}
      </div>
    </section>
  );
}

