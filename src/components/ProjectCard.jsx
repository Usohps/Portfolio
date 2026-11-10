import Icon from "./Icon";
import { trackGlow } from "../lib/trackGlow";

function ProjectCard({ project, index, wide = false, detailed = false, eager = false }) {
  const { title, category, summary, description, tags, image, url, type } = project;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={trackGlow}
      aria-label={`${title} — open live site in a new tab`}
      className={`card card-glow group flex h-full cursor-pointer flex-col hover:-translate-y-1 ${
        wide ? "lg:grid lg:grid-cols-[1.35fr_1fr]" : ""
      }`}
    >
      <div
        className={`relative aspect-video overflow-hidden bg-ink-800 ${
          wide ? "lg:aspect-auto lg:h-full lg:min-h-[340px]" : ""
        }`}
      >
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={
            wide
              ? "(min-width: 1024px) 640px, 100vw"
              : "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          }
          width="1280"
          height="720"
          alt={`${title} interface screenshot`}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
      </div>

      <div className={`relative z-[2] flex flex-1 flex-col p-5 sm:p-6 ${wide ? "lg:justify-center lg:p-9" : ""}`}>
        <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em]">
          <span className="text-cyan">
            {String(index + 1).padStart(2, "0")} / {category}
          </span>
          <span className="text-muted">{type}</span>
        </div>

        <h3
          className={`mt-3 flex items-start justify-between gap-3 font-semibold tracking-tight ${
            wide ? "text-2xl lg:text-4xl" : "text-xl sm:text-2xl"
          }`}
        >
          <span className="link-line">{title}</span>
          <span className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line text-muted transition duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-cyan group-hover:bg-cyan group-hover:text-ink-950">
            <Icon name="arrowUpRight" size={16} />
          </span>
        </h3>

        <p className="mt-3 text-[0.95rem] leading-relaxed">
          {detailed ? description : summary}
        </p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default ProjectCard;
