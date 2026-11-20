import { useState } from "react";
import { ArrowUpRight, Check, Copy, Globe2, Mail, Phone } from "lucide-react";
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
        badge="GET IN TOUCH"
        metaBadge="KANDY, SRI LANKA · GMT+5:30"
        title={
          <span data-hero-line>
            Let’s Build Something <span className="accent-text">Great Together</span>
          </span>
        }
        subtitle="Whether you have an upcoming project, need full-stack engineering support, or just want to chat through an idea — my inbox is always open."
        chips={[
          "Quick Friendly Response",
          "Full-Time & Contract Openings",
          "Direct Collaboration",
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
