import { experience } from "@/data/experience";

export function Timeline({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`timeline ${compact ? "timeline-compact" : ""}`}>
      {experience.map((item, index) => (
        <li
          className="timeline-entry"
          key={`${item.company}-${item.role}-${item.period}`}
          data-reveal
        >
          <div className="timeline-date">
            <span className={`timeline-dot ${index === 0 ? "current" : ""}`} />
            <span className="mono">{item.period}</span>
          </div>
          <div className="timeline-content">
            <div className="timeline-header-row">
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-company">
                  {item.company} · {item.location}
                </p>
              </div>
              <span className="role-tag">{item.kind}</span>
            </div>
            <p className="timeline-description">{item.detail}</p>
            {item.highlights && item.highlights.length > 0 && (
              <ul className="timeline-highlights">
                {(compact ? item.highlights.slice(0, 2) : item.highlights).map(
                  (h, i) => (
                    <li className="timeline-highlight-card" key={i}>
                      <span className="highlight-index mono">0{i + 1}</span>
                      <span>{h}</span>
                    </li>
                  ),
                )}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
