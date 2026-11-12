import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, ShieldCheck, ArrowUp } from "lucide-react";
import { site } from "@/data/site";
import { LargeArrow } from "./ui";

export function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container">
        <p className="eyebrow">
          <span className="accent-dot" /> HAVE A PROJECT IN MIND?
        </p>
        <Link className="cta-heading" to="/contact">
          <h2>
            Let’s talk about
            <br />
            <span>the problem.</span>
          </h2>
          <LargeArrow />
        </Link>
        <div className="cta-bottom">
          <p>Good software starts with a good conversation.</p>
          <a href={`mailto:${site.email}`} className="text-link">
            Say hello <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer modern-compact-footer">
      <div className="container">
        <div className="compact-footer-row">
          {/* Brand & Status */}
          <div className="compact-footer-identity">
            <Link
              to="/"
              className="compact-footer-brand"
              aria-label="Janith Samarasinghe home"
            >
              JS<span>.</span>
            </Link>
            <div className="compact-status-chip mono">
              <span className="live-pulse-dot" aria-hidden="true" />
              <span>Available for New Opportunities</span>
            </div>
          </div>

          {/* Inline Navigation Links */}
          <nav className="compact-footer-nav" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Social Profiles & Back to Top */}
          <div className="compact-footer-actions">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="compact-footer-link"
              aria-label="GitHub profile"
            >
              GitHub <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="compact-footer-link"
              aria-label="LinkedIn profile"
            >
              LinkedIn <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="compact-footer-link"
              aria-label="Email Janith"
            >
              Email <ArrowUpRight size={12} aria-hidden="true" />
            </a>
            <a href="#main" className="footer-top-btn" aria-label="Back to top">
              <span>Back to top</span>
              <ArrowUp size={12} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Minimal Subline */}
        <div className="compact-footer-subline">
          <span className="compact-copy-text">
            © {new Date().getFullYear()} Janith Samarasinghe · Systems Architecture · Kandy, Sri Lanka
          </span>
          <span className="mono compact-copy-meta">
            DESIGNED &amp; ENGINEERED FOR RESILIENCE
          </span>
        </div>
      </div>
    </footer>
  );
}
