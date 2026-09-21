import { useState } from "react";
import { ArrowUpRight, Check, Copy, Globe2, Mail } from "lucide-react";
import { site } from "@/data/site";

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
    <section className="contact-page container">
      <div className="contact-page-top">
        <p className="eyebrow" data-hero-copy>
          GOOD THINGS START WITH A CONVERSATION
        </p>
        <span className="contact-asterisk" aria-hidden="true">
          ✳
        </span>
      </div>
      <h1 tabIndex={-1}>
        <span data-hero-line>Let’s build</span>
        <span data-hero-line>something</span>
        <span className="accent-text" data-hero-line>
          that works.
        </span>
      </h1>
      <div className="contact-details" data-hero-copy>
        <p>
          For engineering roles, product collaboration, or a thoughtful
          conversation about your next system, reach out directly.
        </p>
        <div className="email-block">
          <span className="eyebrow">DROP ME A LINE</span>
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
        </div>
      </div>
      <div className="contact-location">
        <Globe2 size={18} />
        <span>BASED IN KANDY, SRI LANKA</span>
        <span className="mono">OPEN TO GOOD CONVERSATIONS.</span>
      </div>
    </section>
  );
}
