import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown, MoveUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  secondary = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      to={href}
      className={`button ${secondary ? "button-secondary" : "button-primary"} ${className}`}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        <p className="eyebrow">
          <span>{index}</span> / {label}
        </p>
        <h2>{title}</h2>
      </div>
      {children && <div className="section-heading-side">{children}</div>}
    </div>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" to={href}>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}

export function ScrollCue() {
  return (
    <a className="scroll-cue" href="#selected-work">
      <span className="circle-icon">
        <ArrowDown size={17} aria-hidden="true" />
      </span>
      <span>SCROLL TO EXPLORE</span>
    </a>
  );
}

export function LargeArrow() {
  return (
    <MoveUpRight strokeWidth={1} className="large-arrow" aria-hidden="true" />
  );
}
