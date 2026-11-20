import { useSearchParams } from "react-router-dom";
import { useSyncExternalStore } from "react";
import { categories, projects, type Category } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCTA } from "@/components/Footer";

const subscribe = () => () => {};
const serverCategory = () => "";

export function WorkPage() {
  const [params, setParams] = useSearchParams();
  const value = useSyncExternalStore(
    subscribe,
    () => params.get("category") || "",
    serverCategory,
  );
  const selected: Category =
    categories.find((category) => category === value) || "All";
  const visible = projects.filter(
    (project) => selected === "All" || project.category === selected,
  );

  return (
    <>
      <section className="work-editorial-hero">
        <div className="work-hero-glow" aria-hidden="true" />
        <div className="container work-hero-inner">
          <div className="work-hero-copy">
            <p className="eyebrow gold-rule" data-hero-copy>
              SELECTED WORK · PRODUCTION ARCHIVE
            </p>
            <h1 tabIndex={-1} className="work-hero-title" data-hero-line>
              Engineered Systems{" "}
              <span className="accent-text">&amp; Case Studies.</span>
            </h1>
            <p className="work-hero-subtitle" data-hero-copy>
              Full-stack architectures designed and shipped for real business
              operations — spanning offline-first POS platforms, multi-tenant
              HRMS, pharmaceutical ERPs, and cloud tooling.
            </p>
          </div>

          <div className="work-hero-stats" data-hero-copy aria-label="Portfolio summary">
            <div className="work-hero-stat-item">
              <strong className="mono">0{projects.length}</strong>
              <span>Shipped Systems</span>
            </div>
            <div className="work-hero-stat-item">
              <strong className="mono">0{categories.length - 1}</strong>
              <span>Core Domains</span>
            </div>
            <div className="work-hero-stat-item">
              <strong className="mono">99.9%</strong>
              <span>Production Uptime</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="work-directory container"
        aria-label="Project gallery"
      >
        <div className="work-toolbar">
          <div className="project-filters" aria-label="Filter projects">
            {categories.map((category) => {
              const count =
                category === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={selected === category}
                  onClick={() =>
                    setParams(category === "All" ? {} : { category }, {
                      preventScrollReset: true,
                    })
                  }
                >
                  {category}
                  <span>0{count}</span>
                </button>
              );
            })}
          </div>

          <p className="filter-status mono" role="status">
            {String(visible.length).padStart(2, "0")}{" "}
            {visible.length === 1 ? "PROJECT" : "PROJECTS"} ·{" "}
            {selected.toUpperCase()}
          </p>
        </div>

        <div
          className={`project-grid work-project-grid ${selected !== "All" ? "filtered-grid" : ""}`}
        >
          {visible.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              eager={index < 2}
            />
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
