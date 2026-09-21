import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { LargeArrow } from "./ui";

export function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container" data-reveal>
        <p className="eyebrow">
          <span className="accent-dot" /> HAVE A COMPLEX SYSTEM TO BUILD?
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
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <Link
            to="/"
            className="footer-brand"
            aria-label="Janith Samarasinghe home"
          >
            JS<span>.</span>
          </Link>
          <p>
            Thoughtful engineering.
            <br />
            <span>From Kandy, Sri Lanka.</span>
          </p>
          <nav aria-label="Footer navigation">
            <Link to="/work">Work</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <a className="footer-email" href={`mailto:${site.email}`}>
            Let’s connect <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Janith Samarasinghe</span>
          <span>DESIGNED WITH PURPOSE. BUILT WITH CARE.</span>
          <a href="#main">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
