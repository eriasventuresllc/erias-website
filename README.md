# Erias Ventures Website

Marketing site for [eriasventures.com](https://eriasventures.com), built with Vite, React, TypeScript, Tailwind CSS, and Framer Motion.

## Development

Requires Node.js 20 or newer.

```sh
npm ci
npm run dev       # http://localhost:8080
npm run lint
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Project layout

- `src/pages/` — one component per route (`/`, `/about`, `/benefits`)
- `src/components/layout/Layout.tsx` — shared header, background, and footer
- `src/components/ui/` — reusable UI pieces
- `public/images/` — brand, customer, award, team, and social images

## Deployment

Pushing to the `prod` branch runs `.github/workflows/npm-gulp.yml`, which builds the site and publishes `dist/` to GitHub Pages. The custom domain is set in `CNAME`.

The production build injects a Content-Security-Policy `<meta>` tag (see `vite.config.ts`). If you add a new third-party script, font, image host, or API, add its origin to that policy.
