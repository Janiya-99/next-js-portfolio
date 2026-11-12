import { useState, useEffect } from "react";

export function SiteLoader() {
  const [booted, setBooted] = useState(() => {
    if (typeof window !== "undefined") {
      if (
        window.navigator?.webdriver ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return true;
      }
      return false;
    }
    return true;
  });

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (booted) return;

    let frameId: number;
    const start = performance.now();
    const duration = 1700; // Cinematic, smooth pace (1.7s) to enjoy the motion details

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      // Fluid ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setPercent(Math.round(eased * 100));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          if (typeof window !== "undefined") {
            (window as unknown as { __PORTFOLIO_BOOTED__?: boolean }).__PORTFOLIO_BOOTED__ = true;
            window.dispatchEvent(new CustomEvent("portfolio:booted"));
          }
          setBooted(true);
        }, 320);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [booted]);

  if (booted) return null;

  return (
    <div
      className={`bearrow-loader-overlay ${percent >= 100 ? "is-exiting" : ""}`}
      aria-hidden="true"
    >
      <div className="bearrow-loader-stage">
        {/* Animated Brand Emblem */}
        <div className="bearrow-emblem-wrap">
          <svg
            className="bearrow-svg-emblem"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Architectural Framing Bracket */}
            <rect
              className="emblem-frame"
              x="12"
              y="12"
              width="96"
              height="96"
              rx="20"
              stroke="rgba(233, 188, 120, 0.4)"
              strokeWidth="2.5"
              strokeDasharray="360"
            />

            {/* Letter J: Architectural Hook */}
            <path
              className="emblem-path-j"
              d="M48 38 V66 C48 74 42 78 34 78 C28 78 24 74 24 69"
              stroke="#f5f2eb"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="120"
            />

            {/* Letter S: Fluid Sinuous Curve */}
            <path
              className="emblem-path-s"
              d="M78 44 C78 39 72 36 64 36 C56 36 52 40 52 46 C52 53 58 56 68 59 C78 62 84 66 84 74 C84 82 76 86 64 86 C54 86 48 81 48 75"
              stroke="#f5f2eb"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="160"
            />

            {/* Signature Amber Accent Dot with Bouncing Shockwave */}
            <circle
              className="emblem-dot"
              cx="92"
              cy="84"
              r="6.5"
              fill="#e9bc78"
            />
            <circle
              className="emblem-dot-ripple"
              cx="92"
              cy="84"
              r="6.5"
              stroke="#e9bc78"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Brand Identity Typography */}
        <div className="bearrow-brand-meta">
          <div className="brand-logotype">
            <span className="logotype-name">JANITH</span>
            <span className="logotype-accent">.</span>
          </div>
          <p className="brand-subtitle mono">SYSTEMS ARCHITECT</p>
        </div>

        {/* Precision Progress Track & Percentage */}
        <div className="bearrow-progress-block">
          <div className="bearrow-track">
            <div
              className="bearrow-fill"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="bearrow-counter mono">
            <span>INITIALIZING</span>
            <span>{percent}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
