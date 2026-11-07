# Surya Aketi — Portfolio

A responsive portfolio for Surya Aketi's projects, research, experience, skills, and résumé. Profile content is based on the supplied résumé and can be expanded with additional project context and achievements.

The same page supports two deployment targets:

- **Sites:** the Vinext application, with its existing hosting configuration and private access settings.
- **GitHub Pages:** a static React build for a public portfolio, including an automated deployment workflow.

Publishing to one target does not publish to the other or change its access settings.

## Run locally

Install Node.js 22.13 or newer, then open this project directory in a terminal:

```sh
npm run install:ci
npm run dev
```

Open the local URL printed by the development server. Stop it with Ctrl+C. The lockfile is included for reproducible installation; use `npm run install:ci` after changing computers or downloading a fresh copy.

To preview the exact static GitHub Pages version:

```sh
npm run build:github
npm run preview:github
```

## Update the portfolio

Edit `data/portfolio.ts` to update the profile, experience, project details, skills, and links. The starting content includes Penn State education, research and Wyntek experience, and the LocalScribe and TaskBridge projects. Keep any unconfigured links empty until the real destination is available. A GitHub account URL has not been assumed.

Expand each experience entry with responsibilities and achievements. Expand each project with the problem, personal contribution, outcome, and source or demo links that can be shared. Add numbers only when they can be substantiated.

| File | Purpose |
| --- | --- |
| `data/portfolio.ts` | Editable profile and portfolio content |
| `app/page.tsx` | Sections, expandable content, and interactions |
| `app/globals.css` | Typography, spacing, colors, and mobile layouts |
| `app/layout.tsx` | Sites page title and description |
| `github/index.html` | GitHub Pages title, description, and browser theme color |
| `public/favicon.svg` | Browser icon |
| `public/Surya_Aketi_Resume.pdf` | Downloadable résumé |
| `public/` | Images and other public files |

Use relative public-asset paths such as `./Surya_Aketi_Resume.pdf` so files work under a GitHub repository URL as well as the site root. The GitHub build rewrites its favicon and generated script/style links to relative paths automatically.

Update the title and description in both `app/layout.tsx` and `github/index.html` when they change. Review the résumé PDF and all public content before publication.

## Publish on GitHub Pages

This setup is ready to place in a GitHub repository. It does not create a GitHub repository or publish to GitHub by itself.

1. Create a repository and upload the contents of this project directory, including the hidden `.github/` directory and `package-lock.json`. Keep `node_modules/`, generated build directories, and local runtime files out of Git.
2. Use `main` as the deployment branch, or change `.github/workflows/deploy.yml` to match your branch name.
3. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
4. Push a commit to `main`, or open **Actions → Publish portfolio to GitHub Pages → Run workflow**.
5. Open the URL shown by the completed deployment. GitHub also shows it in **Settings → Pages**.

The workflow installs the locked dependencies, runs `npm run build:github`, uploads `dist-github/`, and deploys that output with the official Pages actions. It uses GitHub's built-in workflow token; no personal access token or Sites credential is required. Repository and organization rules may require approval of the `github-pages` environment.

The static build uses relative URLs and works for both a repository site and an account site without hardcoding a username or repository name. This is a single-page portfolio with in-page section links. Future server routes, private data, authentication, or form processing will require separate hosting; GitHub Pages serves static files only.

Treat a GitHub Pages publication as public: include only information and files intended for visitors. GitHub repository visibility and Pages visibility are separate settings.

Official setup reference: [Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Sites build and hosting

`npm run build` preserves the Vinext/Sites build. `npm start` previews its built Worker locally; it does not deploy to production. The GitHub build uses `vite.github.config.ts` and writes to `dist-github/`, leaving the Sites `dist/` output separate.

When editing or publishing through the Sites plugin, follow its maintained workflow. The existing `.openai/hosting.json` binds this checkout to its Site: preserve the project ID when updating that Site. Publishing an update preserves its audience; a private Site remains private until its access settings are explicitly changed.

Keep `vite.config.ts`, `worker/`, and `scripts/` intact for the Sites target. A fresh checkout defaults to the portable execution profile. Local `.sites-runtime/` and `.wrangler/` state is disposable and must not be committed.

## Commands

| Command | Result |
| --- | --- |
| `npm run install:ci` | Install the versions in the lockfile |
| `npm run dev` | Start the local Vinext development server |
| `npm run build` | Build the Sites/Vinext application |
| `npm start` | Preview the built Sites Worker locally |
| `npm run build:github` | Create the static site in `dist-github/` |
| `npm run preview:github` | Preview the static GitHub Pages build locally |

No API keys are required for the portfolio. Do not commit `.env*`, `.dev.vars*`, keys, access tokens, or local tool state.
