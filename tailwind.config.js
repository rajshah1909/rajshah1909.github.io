/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ground: "#0E1114",
        panel: "#171C21",
        surface: "#151A1F",
        surfaceHover: "#1B2128",
        rule: "#262E36",
        ink: "#E6EAED",
        inkMuted: "#A8B2BA",
        inkFaint: "#7C868E",
        signal: "#FFB000",
        signalSoft: "#FFB00022",
        cool: "#6E97B8",
        warn: "#D9604A",
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "6px",
        lg: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.4), 0 8px 24px -12px rgba(0,0,0,0.5)",
        glow: "0 0 0 1px rgba(255,176,0,0.16), 0 8px 32px -8px rgba(255,176,0,0.14)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 60% 50% at 20% 0%, rgba(255,176,0,0.08), transparent 70%)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
