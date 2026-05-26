/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        chromeFrom: "#646973",
        chromeTo: "#BBCCD7",
      },
      backgroundImage: {
        chrome: "linear-gradient(180deg, #646973 0%, #BBCCD7 100%)",
        accent: "linear-gradient(90deg, #a855f7 0%, #ec4899 45%, #f97316 100%)",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(0,0,0,.55)",
      },
    },
  },
  plugins: [],
};

