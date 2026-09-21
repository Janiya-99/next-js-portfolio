import { experience } from "@/data/experience";

export function Timeline({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`timeline ${compact ? "timeline-compact" : ""}`}>
      {experience.map((item, index) => (
        <li key={`${item.company}-${item.role}`} data-reveal>
          <div className="timeline-date">
            <span className={`timeline-dot ${index === 0 ? "current" : ""}`} />
            <span className="mono">{item.period}</span>
          </div>
          <div className="timeline-content">
            <h3>{item.role}</h3>
            <p>{item.company}</p>
            {!compact && <p className="timeline-description">{item.detail}</p>}
          </div>
          <span className="role-tag">{item.kind}</span>
        </li>
      ))}
    </ol>
  );
}
