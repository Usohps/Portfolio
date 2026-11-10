import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { trackGlow } from "../lib/trackGlow";
import ArticleList from "../components/ArticleList";
import { projects } from "../data/projects";
import { articles, capabilities, profile, socials, stack, stats } from "../data/site";
import portraitSm from "../assets/web/portrait-480.webp";
import portraitLg from "../assets/web/portrait-800.webp";

const featured = projects.filter((p) => p.featured);
const marqueeItems = stack.flatMap((s) => s.items);

/** Cycles through a few phrases; static for reduced-motion users. */
function Rotator({ words }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const id = window.setInterval(() => setI((v) => (v + 1) % words.length), 2600);
    return () => window.clearInterval(id);
  }, [words.length]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true" className="inline-flex overflow-hidden pb-1 align-bottom">
        <span key={i} className="text-gradient animate-swap">
          {words[i]}
        </span>
      </span>
    </>
  );
}

function Hero() {
  return (
    <section className="shell grid min-h-[100dvh] items-center gap-14 pb-16 pt-32 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10 lg:pt-28">
      <div>
        <p
          className="inline-flex animate-rise items-center gap-2.5 rounded-full border border-line bg-tint/[0.03] py-1.5 pl-3 pr-4 font-mono text-xs text-fg"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 animate-pulse-dot rounded-full bg-emerald-400" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for new projects
        </p>

        <h1
          className="mt-6 animate-rise text-[clamp(3rem,10vw,7rem)] font-semibold leading-[0.92] tracking-[-0.04em]"
          style={{ animationDelay: "90ms" }}
        >
          {profile.firstName}
          <br />
          <span className="text-gradient">{profile.lastName}</span>
        </h1>

        <p
          className="mt-6 animate-rise font-display text-xl text-fg sm:text-2xl"
          style={{ animationDelay: "180ms" }}
        >
          {profile.role} <span className="text-muted">building</span>
          <br className="sm:hidden" /> <Rotator words={profile.focus} />
        </p>

        <p
          className="mt-5 max-w-xl animate-rise text-lg leading-relaxed"
          style={{ animationDelay: "260ms" }}
        >
          {profile.intro}
        </p>

        <div
          className="mt-9 flex animate-rise flex-wrap items-center gap-3"
          style={{ animationDelay: "340ms" }}
        >
          <Link to="/pages/projects" className="btn btn-primary">
            View projects
            <Icon name="arrowRight" size={18} />
          </Link>
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="btn btn-ghost"
          >
            <Icon name="download" size={18} />
            Get résumé
          </a>
        </div>

        <ul
          className="mt-9 flex animate-rise items-center gap-3"
          style={{ animationDelay: "420ms" }}
        >
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.url}
                target={s.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.name}
                className="icon-btn"
              >
                <Icon name={s.icon} size={18} />
              </a>
            </li>
          ))}
          <li className="ml-2 hidden items-center gap-1.5 font-mono text-xs text-muted sm:flex">
            <Icon name="pin" size={14} />
            {profile.location}
          </li>
        </ul>
      </div>

      {/* Portrait */}
      <div
        className="relative mx-auto w-full max-w-[340px] animate-rise lg:max-w-[400px]"
        style={{ animationDelay: "200ms" }}
      >
        <div className="relative aspect-[4/5] rounded-[2rem]">
          <div className="ring-spin" aria-hidden="true" />
          <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-night">
            <img
              src={portraitSm}
              srcSet={`${portraitSm} 480w, ${portraitLg} 800w`}
              sizes="(min-width: 1024px) 400px, 340px"
              width="800"
              height="1000"
              alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
              fetchpriority="high"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night via-night/10 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between font-mono text-[0.68rem] uppercase tracking-[0.18em] text-snow">
              <span>
                {profile.firstName}.{profile.lastName}
              </span>
              <span className="text-[#22d3ee]">{profile.brand}~</span>
            </div>
          </div>
        </div>

        <div className="absolute -left-4 top-10 animate-float rounded-2xl border border-line bg-ink-900/90 px-4 py-3 shadow-2xl backdrop-blur sm:-left-10">
          <p className="font-display text-2xl font-semibold leading-none text-fg">
            {stats[0].value}
          </p>
          <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-muted">
            {stats[0].label}
          </p>
        </div>
        <div
          className="absolute -right-3 bottom-24 animate-float rounded-2xl border border-line bg-ink-900/90 px-4 py-3 shadow-2xl backdrop-blur sm:-right-8"
          style={{ animationDelay: "-3.5s" }}
        >
          <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">
            Core stack
          </p>
          <p className="mt-1 font-display text-sm font-medium text-cyan">
            React · Vue · Tailwind
          </p>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const row = (hidden) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex flex-none items-center gap-10 pr-10 font-display text-xl font-medium text-muted sm:gap-14 sm:pr-14 sm:text-2xl"
    >
      {marqueeItems.map((item) => (
        <li key={item} className="flex items-center gap-10 whitespace-nowrap sm:gap-14">
          {item}
          <span className="h-1.5 w-1.5 rotate-45 bg-cyan" />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className="overflow-hidden border-y border-line bg-tint/[0.015] py-6"
      style={{
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

function SectionHead({ eyebrow, title, children }) {
  return (
    <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" className="shell pt-24 sm:pt-32">
      <SectionHead eyebrow="01 — About" title="Engineering interfaces people enjoy using." />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <Reveal className="card p-7 sm:p-9 md:col-span-2">
          {profile.bio.map((para, i) => (
            <p
              key={para}
              className={i === 0 ? "text-xl leading-relaxed text-fg sm:text-2xl sm:leading-snug" : "mt-5 text-lg"}
            >
              {para}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100} className="card grid grid-cols-3 divide-x divide-line md:grid-cols-1 md:divide-x-0 md:divide-y">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col justify-center p-5 text-center md:px-9 md:text-left">
              <p className="text-gradient font-display text-4xl font-semibold tabular-nums sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-1.5 font-mono text-[0.65rem] uppercase tracking-widest sm:text-xs">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>

        {capabilities.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 90}
            className="card card-glow p-7"
            onPointerMove={trackGlow}
          >
            <span className="relative z-[2] inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
              <Icon name={c.icon} size={20} />
            </span>
            <h3 className="relative z-[2] mt-5 text-xl font-semibold">{c.title}</h3>
            <p className="relative z-[2] mt-2">{c.text}</p>
          </Reveal>
        ))}

        <Reveal className="card p-7 sm:p-9 md:col-span-3">
          <p className="eyebrow">Toolbox</p>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {stack.map((s) => (
              <div key={s.group}>
                <h3 className="text-lg font-semibold">{s.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-tint/[0.03] px-3.5 py-1.5 text-sm text-fg transition-colors duration-300 hover:border-cyan/50 hover:text-cyan-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="shell pt-24 sm:pt-32">
      <SectionHead eyebrow="02 — Selected work" title="Products shipped to real users.">
        <Link to="/pages/projects" className="btn btn-ghost self-start md:self-auto">
          All projects
          <Icon name="arrowRight" size={18} />
        </Link>
      </SectionHead>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.id} delay={i === 0 ? 0 : (i - 1) * 90} className={i === 0 ? "md:col-span-3" : ""}>
            <ProjectCard project={project} index={i} wide={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Writing() {
  return (
    <section id="writing" className="shell pt-24 sm:pt-32">
      <SectionHead eyebrow="03 — Writing" title="Notes on building for the web.">
        <Link to="/pages/blog" className="btn btn-ghost self-start md:self-auto">
          All articles
          <Icon name="arrowRight" size={18} />
        </Link>
      </SectionHead>

      <div className="mt-10">
        <ArticleList articles={articles.slice(0, 3)} />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="shell pt-24 sm:pt-32">
      <Reveal className="card relative px-6 py-16 text-center sm:px-12 sm:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 0%, rgb(var(--accent) / 0.16), transparent 70%), radial-gradient(50% 70% at 80% 100%, rgb(var(--violet) / 0.18), transparent 70%)",
          }}
        />
        <div className="relative">
          <p className="eyebrow">04 — Contact</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(2.25rem,7vw,5rem)] font-semibold leading-[1] tracking-tight">
            Have a product to build? <span className="text-gradient">Let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg">
            I&apos;m open to full-time roles, contracts and freelance work. Send a
            message and I&apos;ll get back to you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <Icon name="mail" size={18} />
              {profile.email}
            </a>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="btn btn-ghost"
            >
              <Icon name="download" size={18} />
              Get résumé
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Writing />
      <Contact />
    </>
  );
}

export default Home;
