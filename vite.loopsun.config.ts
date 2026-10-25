import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Standalone build of the Loopsun landing page for static hosting (loopsun.com).
export default defineConfig({
  root: path.resolve(__dirname, "sites/loopsun"),
  publicDir: path.resolve(__dirname, "sites/loopsun/public"),
  css: {
    postcss: path.resolve(__dirname),
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    fs: { allow: [path.resolve(__dirname)] },
  },
  build: {
    outDir: path.resolve(__dirname, "dist-loopsun"),
    emptyOutDir: true,
  },
});
