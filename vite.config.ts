/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import { glob } from "glob";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["src"] })],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "@mui/material",
        // "@emotion/react",
        // "@emotion/styled",
        "@mui/icons-material",
      ],
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{ts,tsx}")
          .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
  test: {
    environment: "happy-dom",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
