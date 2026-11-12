import { useSearchParams } from "react-router-dom";
import { useSyncExternalStore } from "react";
import { categories, projects, type Category } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCTA } from "@/components/Footer";
import { CinematicPageHero } from "@/components/CinematicPageHero";

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
      <CinematicPageHero
        bgImage={`${import.meta.env.BASE_URL}images/janith-hero.webp`}
        bgPosition="center 30%"
        badge="ENGINEERING DIRECTORY"
        metaBadge={`0${projects.length} PRODUCTION SYSTEMS`}
        title={
          <span data-hero-line>
            Enterprise Platforms <span className="accent-text">&amp; Production Systems</span>
          </span>
        }
        subtitle="A curated showcase of distributed backends, multi-tenant SaaS architectures, statutory compliance payroll engines, and containerized cloud systems."
        chips={[
          "Zero-Downtime Releases",
          "Multi-Tenant RLS",
          "Async Worker Pools",
          "LKAS Statutory Compliance",
        ]}
      />

      <section
        className="work-directory container"
        aria-label="Project gallery"
      >
        <div className="project-filters" aria-label="Filter projects">
          {categories.map((category) => {
            const count =
              category === "All"
                ? projects.length
                : projects.filter((p) => p.category === category).length;
            return (
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
                <span>0{count}</span>
              </button>
            );
          })}
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
