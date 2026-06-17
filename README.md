# Von Castro Portfolio

Personal portfolio for Von Castro, built with React, TypeScript, and Vite.

## Local Development

```powershell
npm install
npm run dev
```

## Production Build

```powershell
npm run build
npm run preview
```

## Deployment

Recommended host: Vercel.

The project is configured for Vercel with:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

The expected production URL is:

```text
https://von-castro-portfolio.vercel.app/
```

If Vercel assigns a different production domain, update the canonical, `og:url`, `og:image`, and `twitter:image` values in `index.html`.

## Content Notes

- Replace the dvup marketing screenshots with real CSV import preview and validation captures once those private product screenshots are available.
- Keep Setlio screenshots current with the latest phone and Wear OS flows.
- Run `npm run build` before deploying.
