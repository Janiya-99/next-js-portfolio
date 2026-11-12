import { useState } from "react";
import { ArrowUpRight, Check, Copy, Globe2, Mail, Phone, FileDown } from "lucide-react";
import { SiGithub as Github } from "react-icons/si";
import { FaLinkedin as Linkedin } from "react-icons/fa6";
import { site } from "@/data/site";
import { CinematicPageHero } from "@/components/CinematicPageHero";

export function ContactPage() {
  const [status, setStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setStatus("Email copied to clipboard.");
    } catch {
      setStatus(
        "Select the email address above to copy it, or use the email link.",
      );
    }
  }

  return (
    <>
      <CinematicPageHero
        bgImage={`${import.meta.env.BASE_URL}images/janith-working.webp`}
        bgPosition="center 35%"
        badge="DIRECT COMMUNICATION"
        metaBadge="TIMEZONE: GMT +5:30 (KANDY, LK)"
        title={
          <span data-hero-line>
            Let’s Build Systems <span className="accent-text">that Perform Under Load</span>
          </span>
        }
        subtitle="Available for full-stack engineering, DevOps architecture, and enterprise SaaS consultations. Fast direct response within 24 hours."
        chips={[
          "Response SLA: < 24 Hours",
          "Direct Email Available",
          "Full-Stack & DevOps Consulting",
        ]}
      />

      <section className="contact-page container">
        <div className="contact-details" data-hero-copy>
          <div className="email-block">
          <span className="eyebrow">DIRECT CONTACT</span>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
            <ArrowUpRight aria-hidden="true" />
          </a>

          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${site.email}`}>
              <Mail size={17} />
              Write an email
              <ArrowUpRight size={17} />
            </a>
            <button className="button button-secondary" onClick={copyEmail}>
              {status.startsWith("Email copied") ? (
                <Check size={16} />
              ) : (
                <Copy size={16} />
              )}
              Copy address
            </button>
          </div>

          <p className="copy-status" role="status">
            {status}
          </p>

          <div className="contact-meta-links">
            <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="meta-link-item">
              <Phone size={15} />
              <span>{site.phone}</span>
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="meta-link-item"
            >
              <Github size={15} aria-hidden="true" />
              <span>github.com/Janiya-99</span>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="meta-link-item"
            >
              <Linkedin size={15} aria-hidden="true" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-location">
        <Globe2 size={18} />
        <span>BASED IN KANDY, SRI LANKA</span>
        <span className="mono">AVAILABLE FOR GLOBAL & HYBRID ROLES.</span>
      </div>
    </section>
  </>
  );
}
