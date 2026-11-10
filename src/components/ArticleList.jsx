import Icon from "./Icon";
import Reveal from "./Reveal";

function ArticleList({ articles }) {
  return (
    <ol className="border-t border-line">
      {articles.map((article, i) => (
        <Reveal as="li" key={article.url} delay={i * 60} className="border-b border-line">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-4 py-6 transition-[padding] duration-500 ease-out-expo hover:px-3 sm:gap-8 sm:py-8"
          >
            <span className="font-mono text-xs text-muted transition-colors group-hover:text-cyan sm:text-sm">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="block font-mono text-[0.7rem] uppercase tracking-[0.18em] text-cyan">
                {article.topic}
              </span>
              <span className="mt-1.5 block font-display text-lg font-medium leading-snug text-fg transition-colors group-hover:text-cyan-soft sm:text-2xl">
                {article.title}
              </span>
            </span>
            <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-line text-muted transition duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-cyan group-hover:bg-cyan group-hover:text-ink-950">
              <Icon name="arrowUpRight" size={16} />
              <span className="sr-only">Read on Medium (opens in a new tab)</span>
            </span>
          </a>
        </Reveal>
      ))}
    </ol>
  );
}

export default ArticleList;
