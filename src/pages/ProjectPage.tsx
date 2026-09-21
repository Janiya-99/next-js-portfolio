import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ContactCTA } from "@/components/Footer";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((project) => project.slug === slug);
  const project = projects[index];
  if (!project) return <NotFoundPage />;
  const next = projects[(index + 1) % projects.length];
  return (
    <>
      <article className="container case-study">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/work">
            <ArrowLeft size={15} /> Selected work
          </Link>
          <span>/</span>
          <span>Project {project.number}</span>
        </nav>
        <header className="case-header">
          <p className="eyebrow" data-hero-copy>
            {project.number} / {project.category}
          </p>
          <h1 tabIndex={-1} data-hero-line>
            {project.heading}
          </h1>
          <p data-hero-copy>{project.summary}</p>
        </header>
        <ProjectVisual theme={project.theme} large />
        <div className="project-facts">
          <div>
            <span className="eyebrow">PROJECT</span>
            <p>{project.title}</p>
          </div>
          <div>
            <span className="eyebrow">MY ROLE</span>
            <p>{project.role}</p>
          </div>
          <div>
            <span className="eyebrow">DOMAIN</span>
            <p>{project.domain}</p>
          </div>
          <div>
            <span className="eyebrow">TECHNOLOGIES</span>
            <div className="tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <section className="case-section" data-reveal>
          <p className="eyebrow">01 / THE CONTEXT</p>
          <div>
            <h2>
              The business behind
              <br />
              the software.
            </h2>
            <p>{project.context}</p>
          </div>
        </section>
        <section className="case-section" data-reveal>
          <p className="eyebrow">02 / MY CONTRIBUTION</p>
          <div>
            <h2>
              Where I put
              <br />
              the work in.
            </h2>
            <ul className="contribution-list">
              {project.contributions.map((item) => (
                <li key={item}>
                  <Check size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="workflow-section" data-reveal>
          <p className="eyebrow">03 / CONNECTING THE DOTS</p>
          <h2>A view of the workflow.</h2>
          <ol className="workflow">
            {project.workflow.map((step, i) => (
              <li key={step}>
                <span className="mono">0{i + 1}</span>
                <span>{step}</span>
                {i < project.workflow.length - 1 && (
                  <ArrowRight size={18} aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
          <p className="diagram-note">
            Conceptual workflow illustration. A high-level view of the project’s
            domain.
          </p>
        </section>
        {project.sections.map((section, i) => (
          <section className="case-section" data-reveal key={section.title}>
            <p className="eyebrow">0{i + 4} / ENGINEERING APPROACH</p>
            <div>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </section>
        ))}
        <div className="next-project" data-reveal>
          <span className="eyebrow">KEEP EXPLORING / NEXT PROJECT</span>
          <Link to={`/work/${next.slug}`}>
            <h2>{next.title}</h2>
            <ArrowRight size={35} />
          </Link>
        </div>
      </article>
      <ContactCTA />
    </>
  );
}
