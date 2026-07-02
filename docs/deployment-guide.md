# Deployment Guide

## Cloudflare Pages

```txt
Build command: npm run build
Output directory: dist
Environment variables: VITE_GOOGLE_SCRIPT_URL, VITE_SITE_URL, VITE_ADMIN_EMAIL
```

## Vercel

```txt
Framework preset: Vite
Build command: npm run build
Output directory: dist
Environment variables: VITE_GOOGLE_SCRIPT_URL, VITE_SITE_URL, VITE_ADMIN_EMAIL
```

## GitHub Pages

For a custom domain or root deployment:

```bash
npm run build
```

Deploy the `dist/` folder with GitHub Actions or a Pages deployment tool. If deploying under a repository subpath, set the Vite `base` option in `vite.config.js`.

This project includes `public/404.html` to help React Router recover deep links on GitHub Pages.
