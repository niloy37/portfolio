# Deployment

This portfolio is configured for static deployment to GitHub Pages.

## Target

Production URL:

```text
https://niloy37.github.io/portfolio
```

The production `basePath` and `assetPrefix` are set to `/portfolio` in `next.config.js`.

## Build

```bash
npm install
npm run build
```

The project uses Next.js static export through `output: 'export'`.

## GitHub Pages

Use the repository's GitHub Actions workflow to build and publish the site. In GitHub repository settings, Pages should use GitHub Actions as the source.

## Before Publishing

- Confirm `data/personal.ts` has current contact, role, and resume details.
- Confirm `public/assets/resume.pdf` is the latest resume.
- Check all project links in `data/projects.ts`.
- Submit a test message through the contact form.
- Confirm `public/favicon.svg`, `public/favicon.ico`, and `public/og-image.svg` load from the deployed site.

## Troubleshooting

- If styles or assets 404 in production, check the `/portfolio` base path in `next.config.js`.
- If the contact form fails, verify the Formspree endpoint in `components/Contact.tsx`.
- If social previews look stale, refresh the Open Graph cache for the target platform after deployment.
