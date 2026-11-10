import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";
import { profile } from "../data/site";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/pages/projects", label: "Projects" },
  { to: "/pages/blog", label: "Blog" },
];

const desktopLink = ({ isActive }) =>
  `relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
    isActive ? "bg-white/[0.07] text-fg" : "text-muted hover:text-fg"
  }`;

function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-6xl animate-fade rounded-2xl border border-line bg-ink-900/80 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
      >
        <div className="flex h-14 items-center justify-between pl-5 pr-2 sm:h-16 sm:pr-3">
          <Link
            to="/"
            aria-label={`${profile.brand} home`}
            className="font-display text-lg font-bold tracking-tight text-fg"
          >
            <span className="text-gradient">{profile.brand}</span>
            <span className="text-cyan">~</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={desktopLink}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/#contact"
              className="btn btn-primary hidden !min-h-[40px] !px-5 text-sm sm:inline-flex"
            >
              Hire me
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-fg transition-colors hover:bg-white/[0.07] md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile menu: grid-rows trick animates height without layout thrash */}
        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows] duration-500 ease-out-expo md:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden" inert={open ? undefined : ""}>
            <ul className="flex flex-col gap-1 border-t border-line p-3">
              {links.map((l, i) => (
                <li
                  key={l.to}
                  className={`transition duration-500 ease-out-expo ${
                    open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
                >
                  <NavLink
                    to={l.to}
                    end={l.end}
                    className={({ isActive }) =>
                      `flex min-h-[48px] items-center justify-between rounded-xl px-4 font-display text-lg ${
                        isActive ? "bg-white/[0.06] text-cyan" : "text-fg"
                      }`
                    }
                  >
                    {l.label}
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/#contact" className="btn btn-primary w-full">
                  Hire me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
