import { useSearchParams } from "react-router-dom";
import { useSyncExternalStore } from "react";
import { categories, projects, type Category } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCTA } from "@/components/Footer";

const subscribe = () => () => {};
const serverCategory = () => "";

export function WorkPage() {
  const [params, setParams] = useSearchParams();
  // Static HTML always contains all projects. Match it on hydration, then apply
  // a shared/deep-linked query filter without replacing the server-rendered tree.
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
      <section className="page-intro container">
        <p className="eyebrow" data-hero-copy>
          THE PORTFOLIO / SELECTED WORK
        </p>
        <h1 tabIndex={-1} data-hero-line>
          Real problems.
          <br />
          <span className="accent-text">Thoughtful solutions.</span>
        </h1>
        <div className="page-intro-bottom" data-hero-copy>
          <p>
            Systems designed for real-world complexity.
            <br />A closer look at the work and the thinking behind it.
          </p>
          <span className="mono">04 SELECTED PROJECTS</span>
        </div>
      </section>
      <section
        className="work-directory container"
        aria-label="Project gallery"
      >
        <div className="project-filters" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category}
              aria-pressed={selected === category}
              onClick={() =>
                setParams(category === "All" ? {} : { category }, {
                  preventScrollReset: true,
                })
              }
            >
              {category}
              {category === "All" && <span>04</span>}
            </button>
          ))}
        </div>
        <p className="filter-status mono" role="status">
          {visible.length} {visible.length === 1 ? "PROJECT" : "PROJECTS"} /{" "}
          {selected.toUpperCase()}
        </p>
        <div
          className={`project-grid work-project-grid ${selected !== "All" ? "filtered-grid" : ""}`}
        >
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
