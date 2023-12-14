import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        memory: resolve(__dirname, "src/memory/index.html"),
        trivia: resolve(__dirname, "src/trivia/index.html"),
        scores: resolve(__dirname, "src/scores/index.html")
      },
    },
  },
});