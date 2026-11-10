import { useCallback, useEffect, useState } from "react";

const KEY = "theme";
const META = { dark: "#05070d", light: "#f5f7fc" };

const systemTheme = () =>
  window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

function savedTheme() {
  try {
    const value = localStorage.getItem(KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null; // storage can be blocked (private mode, strict settings)
  }
}

function apply(theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", META[theme]);
}

/**
 * Light/dark theme. The inline script in index.html sets the initial value
 * before first paint; this hook keeps React in sync and handles toggling.
 * Until the visitor picks a theme, the site follows the system setting.
 */
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || savedTheme() || systemTheme(),
  );

  useEffect(() => apply(theme), [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      if (!savedTheme()) setTheme(systemTheme());
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggle = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* preference just won't persist */
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (document.startViewTransition && !reduceMotion) {
      // Apply synchronously inside the transition so the snapshot is correct
      document.startViewTransition(() => {
        apply(next);
        setTheme(next);
      });
    } else {
      setTheme(next);
    }
  }, [theme]);

  return { theme, toggle };
}
