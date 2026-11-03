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
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
