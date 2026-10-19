# Put Taste Translator on Vercel

This is the browser saved demo. No terminal commands, database or API keys are required for publishing through GitHub and Vercel.

1. Unzip this download on your computer.
2. Sign into GitHub. Choose New repository, name it taste-translator, and create it. A private repository is fine.
3. Choose uploading an existing file. Upload the CONTENTS of the taste-translator-vercel folder, not the ZIP and not the enclosing folder. package.json, index.html, public, components and src must be at the repository root. Commit the files. The .gitignore file is recommended but hidden files may need separate uploading.
4. Sign into https://vercel.com with GitHub.
5. Choose Add New > Project. Import that repository and grant Vercel access to it.
6. Framework should be Vite. Build command is npm run build. Output directory is dist. The included vercel.json supplies these settings. No environment variables are needed.
7. Click Deploy. Open the production URL when the build succeeds. The URL ends in vercel.app and contains no ChatGPT branding. Your preferred project name is subject to availability.
8. Send that URL to friends. Each browser keeps its own room. Changing and committing files in GitHub triggers another build.

## What works

Interactive 3D room preview, room measurements and furniture footprints, profiles and avatar customization, switching members, manual inspiration, sample Pinterest boards and editable keyword observations, CSV import and export, explainable matching, votes, disagreements, deterministic budget totals, plan and shopping exports, and browser persistence.

## What stays visible but needs a backend

Live Pinterest authorization, room photo uploads, AI service recommendations, and cross device shared room invitations. Pending features are labeled. Entering an invitation email does not send an email or grant access. Profiles and votes can be demonstrated by switching the current member in one browser.

## Saving and privacy

There is no account or cloud database in this version. Saved data stays in this browser's local storage. Someone using the same browser profile can see it. Private browsing or clearing site data can delete it. Save/export the plan before switching devices. Existing private photos, tokens and saved cloud room data are not included in this download.

The sibling illustration and sample assets are public website assets once deployed. No secrets are included. Images are illustrative and prices are estimates. Photography is not proof of furniture fit.

## Local development, optional

Install Node.js 22.13 or newer, then run npm ci and npm run dev. Run npm test for planner checks, and npm run build for TypeScript and the production bundle.

## Troubleshooting

If Vercel cannot find package.json, move the folder contents to the repository root or set Root Directory to the folder that contains package.json. Do not upload node_modules or dist. This package is separate from the Cloudflare export and does not change the existing hosted site.
