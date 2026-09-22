# Allan Binga — Portfolio

React and Vite portfolio adapted from the supplied Stitch design, with a burgundy and ivory palette. Tailwind CSS is compiled locally; Google Fonts supplies Hanken Grotesk, JetBrains Mono, and Material Symbols, with system font fallbacks.

## Local development

```sh
npm ci
npm run dev
```

## Validation and production preview

```sh
npm run lint
npm run build
npm run preview
```

Page sections and project cards live in `src/components`. Shared project disclosures use native keyboard-accessible details elements. Mobile navigation supports Escape and closes when a section is selected. Global accessibility and responsive styles live in `src/index.css`; design tokens are in `tailwind.config.js`.

## GitHub Actions and Vercel

`.github/workflows/action.yml` runs on pushes to `master`, pull requests targeting `master`, and manual dispatches. Pull requests run lint and build checks without deployment credentials. Pushes to `master` run lint, build with the Vercel production settings, and deploy the resulting artifacts. Manual runs deploy only when `master` is selected. Failed checks or builds stop deployment. The workflow reacts to your Git pushes; it does not commit or push source changes itself.

### One-time setup

1. Push this repository to GitHub with `master` as the default branch.
2. Create or link a Vercel project for this portfolio. Select the **Vite** framework preset, **Node.js 22.x**, build command `npm run build`, output directory `dist`, and repository root as the root directory. Set the production branch to `master` if using a Git connection.
3. Run `npx vercel@latest link` locally after signing in. The generated `.vercel/project.json` contains `orgId` and `projectId`; `.vercel` is ignored by Git.
4. In GitHub **Settings → Secrets and variables → Actions**, add these repository secrets:

   | Secret | Value |
   | --- | --- |
   | `VERCEL_TOKEN` | A Vercel access token with access to the project, created in your Vercel account settings. |
   | `VERCEL_ORG_ID` | The `orgId` from `.vercel/project.json`. |
   | `VERCEL_PROJECT_ID` | The `projectId` from `.vercel/project.json`. |

5. If the project also uses Vercel's automatic Git deployments, disable those deployments when using this workflow as the deployment gate, to avoid a separate deployment bypassing the checks.
6. Add `portfolio.skirill.org` in the Vercel project's domain settings and apply the exact DNS records Vercel supplies. Production deployments then serve the attached domain.
7. Commit and push to `master`, or select **Actions → Portfolio CI and Vercel deployment → Run workflow → master**.

No application environment variables or backend are required. The three secrets above authenticate the deployment pipeline. Do not commit tokens or `.vercel` files. The workflow installs the latest Vercel CLI, following Vercel's documented pattern; it can be pinned to a tested version later.

The workflow is configured locally; GitHub secrets, Vercel project linking, deployment, and DNS still require setup before it can publish the site.

Reference: [Vercel's GitHub Actions guide](https://vercel.com/kb/guide/how-can-i-use-github-actions-with-vercel).
