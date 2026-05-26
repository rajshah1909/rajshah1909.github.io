import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For a user site (username.github.io), the base path is "/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});

