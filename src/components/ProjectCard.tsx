import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article className={`project-card ${className}`} data-reveal>
      <Link
        to={`/work/${project.slug}`}
        className="project-card-link"
        aria-label={`Read case study: ${project.title}`}
      >
        <ProjectVisual theme={project.theme} />
        <div className="project-meta">
          <span className="eyebrow">
            {project.number} / {project.category}
          </span>
          <span className="project-open">
            <ArrowUpRight size={21} aria-hidden="true" />
          </span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.summary}</p>
        <div className="project-card-bottom">
          <div className="tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <span className="case-study-link">
            View case study <ArrowUpRight size={14} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
