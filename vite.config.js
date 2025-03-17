import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import createSvgSpritePlugin from "vite-plugin-svg-sprite";

export default defineConfig({
  plugins: [
    react(),
    createSvgSpritePlugin({
      exportType: "react",
      include: "**/icons/*.svg",
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
  },
});
