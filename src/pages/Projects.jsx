import { useState } from "react";
import PageIntro from "../components/PageIntro";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const filters = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
].map((f) => ({
  ...f,
  count: f.id === "all" ? projects.length : projects.filter((p) => p.type === f.id).length,
}));

function Projects() {
  const [active, setActive] = useState("all");
  const activeIndex = filters.findIndex((f) => f.id === active);
  const visible = active === "all" ? projects : projects.filter((p) => p.type === active);

  return (
    <>
      <PageIntro eyebrow="Projects" title="Work that's" accent="live in production.">
        A selection of web and mobile products I&apos;ve helped build — from fintech
        platforms to health dashboards. Every card links to the live product.
      </PageIntro>

      <section className="shell mt-12">
        {/* Segmented filter with a sliding indicator */}
        <div
          role="group"
          aria-label="Filter projects by platform"
          className="relative inline-grid animate-rise grid-cols-3 rounded-full border border-line bg-ink-900/70 p-1"
          style={{ animationDelay: "240ms" }}
        >
          <span
            aria-hidden="true"
            className="absolute bottom-1 left-1 top-1 w-[calc((100%-0.5rem)/3)] rounded-full bg-cyan transition-transform duration-500 ease-out-expo"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          />
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={active === f.id}
              onClick={() => setActive(f.id)}
              className={`relative z-10 min-h-[44px] cursor-pointer rounded-full px-4 font-display text-sm font-medium transition-colors duration-300 sm:px-7 ${
                active === f.id ? "text-ink-950" : "text-muted hover:text-fg"
              }`}
            >
              {f.label}
              <span className="ml-1.5 font-mono text-xs opacity-70">{f.count}</span>
            </button>
          ))}
        </div>

        <ul key={active} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <li
              key={project.id}
              className="animate-rise"
              style={{ animationDelay: `${Math.min(i, 8) * 60}ms` }}
            >
              <ProjectCard project={project} index={i} detailed eager={i < 3} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Projects;
