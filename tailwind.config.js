/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Every colour reads a CSS variable so light/dark is a single switch
      // (values live in src/index.css).
      colors: {
        ink: {
          950: "rgb(var(--bg) / <alpha-value>)",
          900: "rgb(var(--surface) / <alpha-value>)",
          800: "rgb(var(--surface-2) / <alpha-value>)",
          700: "rgb(var(--surface-3) / <alpha-value>)",
        },
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        cyan: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          soft: "rgb(var(--accent-soft) / <alpha-value>)",
        },
        violet: {
          DEFAULT: "rgb(var(--violet) / <alpha-value>)",
          soft: "rgb(var(--violet-soft) / <alpha-value>)",
        },
        "on-accent": "rgb(var(--on-accent) / <alpha-value>)",
        tint: "rgb(var(--tint) / <alpha-value>)",
        line: "rgb(var(--line) / var(--line-alpha))",
        // Fixed colours for content that sits on the (always dark) portrait
        night: "#05070d",
        snow: "#e8edf7",
      },
      fontFamily: {
        sans: ['"DM Sans Variable"', "system-ui", "-apple-system", "sans-serif"],
        display: ['"Space Grotesk Variable"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono Variable"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translate3d(0, 28px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        fade: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        swap: {
          from: { opacity: "0", transform: "translate3d(0, 70%, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        marquee: {
          to: { transform: "translate3d(-50%, 0, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -10px, 0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(4%, 6%, 0) scale(1.12)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        pulseDot: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        fade: "fade 0.5s ease-out both",
        swap: "swap 0.55s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 36s linear infinite",
        float: "float 7s ease-in-out infinite",
        drift: "drift 22s ease-in-out infinite",
        "spin-slow": "spin 9s linear infinite",
        "pulse-dot": "pulseDot 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};
