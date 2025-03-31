import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  define: {
    global: "window", // Ajoute un polyfill pour `global`
  },
  resolve: {
    alias: {
      buffer: "buffer", // Ajoute un alias pour `buffer`
    },
  },
});
