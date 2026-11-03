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
        ground: "#1B2230",
        panel: "#232B3B",
        surface: "#212938",
        surfaceHover: "#283142",
        rule: "#344055",
        ink: "#F1F4F8",
        inkMuted: "#BAC3D1",
        inkFaint: "#8F9BAD",
        signal: "#FFB000",
        signalSoft: "#FFB00022",
        cool: "#7FA8CC",
        warn: "#E2735E",
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
