# Portfolio development workflow

The user wants this portfolio maintained through terminal Git commits and pushes to `suryaaketi/suryaaketi.github.io`, with `main` as the publishing branch.

- Check the working tree before edits and preserve unrelated user changes.
- Make each commit represent a coherent, real improvement. Use descriptive messages and preserve the existing history.
- Review the diff, stage the intended files, and run checks appropriate to the change before committing.
- For portfolio changes, use `npm run build:github`; check TypeScript for TypeScript changes and `node scripts/check-reliability.mjs` for caching, fallback, or error-handling changes.
- Push authorized portfolio changes with normal terminal Git commands. The GitHub Pages workflow publishes pushes to `main`.
- Keep credentials out of source and never create filler or empty commits to inflate activity.
- The existing `.openai/hosting.json` belongs to the separate private Sites deployment. Preserve its project ID and audience. Its source helper pushes to a direct URL and does not replace the GitHub `origin` remote.
