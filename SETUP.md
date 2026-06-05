# Portfolio Maintenance Notes

This file tracks the small upkeep tasks for Niloy Rahman's portfolio.

## Common Updates

- Update role, education, and availability copy in `data/personal.ts`.
- Add or reorder case studies in `data/projects.ts`.
- Refresh skills and working-style notes in `data/skills.ts`.
- Refresh `public/assets/resume.pdf` when the resume changes.
- Keep `siteUrl` and Open Graph metadata aligned with the deployed URL.

## Contact Form

The contact form currently posts to a Formspree endpoint in `components/Contact.tsx`.

If the endpoint changes:

1. Update the `fetch` URL in `components/Contact.tsx`.
2. Submit a test message from the deployed site.
3. Confirm success and failure messages still display correctly.

## Project Proof

Current project proof is handled through:

- GitHub links
- Live demos
- LinkedIn walkthrough embeds

If project screenshots are added later, store real screenshots in `public/assets/projects/` and reference them from the project data or components.

## Pre-Deploy Check

```bash
npm run build
```

After deployment, verify:

- The homepage loads at `https://niloy37.github.io/portfolio`.
- The resume download works.
- External project links open correctly.
- The contact form accepts a test submission.
- Favicon and Open Graph preview assets load.
