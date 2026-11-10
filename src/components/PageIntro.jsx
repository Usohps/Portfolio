/** Shared heading block for the Projects and Blog pages. */
function PageIntro({ eyebrow, title, accent, children }) {
  return (
    <header className="shell pt-36 sm:pt-44">
      <p className="eyebrow animate-rise">{eyebrow}</p>
      <h1
        className="mt-4 animate-rise text-[clamp(2.6rem,7.5vw,5.5rem)] font-semibold leading-[1] tracking-tight"
        style={{ animationDelay: "80ms" }}
      >
        {title} <span className="text-gradient">{accent}</span>
      </h1>
      <p
        className="mt-6 max-w-2xl animate-rise text-lg"
        style={{ animationDelay: "160ms" }}
      >
        {children}
      </p>
    </header>
  );
}

export default PageIntro;
