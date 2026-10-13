import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

// GitHub Pages can't send response headers, so the policy ships as a <meta> tag.
// Build-only because the dev server relies on inline scripts for React Refresh.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://firebase.googleapis.com https://firebaseinstallations.googleapis.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const cspMeta = (): Plugin => ({
  name: "csp-meta",
  apply: "build",
  transformIndexHtml: () => [
    {
      tag: "meta",
      attrs: { "http-equiv": "Content-Security-Policy", content: contentSecurityPolicy },
      injectTo: "head-prepend",
    },
  ],
});

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            /[\\/]node_modules[\\/](react|react-dom|scheduler|framer-motion)[\\/]/.test(id)
          ) {
            return "vendor";
          }
        },
      },
    },
  },
  plugins: [react(), tailwindcss(), cspMeta()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
    },
  },
});
