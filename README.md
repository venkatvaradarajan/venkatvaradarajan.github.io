# venkatv.github.io

Personal site for Venkat Varadarajan, built with React + Vite + TypeScript + Tailwind CSS.

## Getting this into your existing repo

This was built outside your local git repo (in a sandboxed environment with no
filesystem/network access to your machine), so you'll need to move it in
yourself:

1. Copy every file in this folder into `/Users/vvaradarajan/projects/venkatv.github.io`
   (this README, `package.json`, `src/`, `public/`, `.github/`, config files —
   everything, including dotfiles like `.gitignore`).
2. If your repo already has old site files (old `.html` pages, etc.) at the
   root, remove or archive them first — a Vite build serves `index.html` from
   the root and old static files could conflict once we ask GitHub Pages to
   deploy from Actions instead of a raw branch.
3. From inside the repo:
   ```bash
   npm install
   npm run dev        # preview locally at http://localhost:5173
   ```
4. Commit and push:
   ```bash
   git add -A
   git commit -m "Modernize site: React/Vite/Tailwind rebuild"
   git push origin main
   ```
5. In the GitHub repo settings → **Pages**, set the source to **GitHub
   Actions** (not "Deploy from a branch"). The included workflow
   (`.github/workflows/deploy.yml`) builds and deploys automatically on every
   push to `main`.

## What's new in this version

- **Education** is now its own section, separate from Experience.
- **Experience** is intentionally short — the detail lives in **Projects**.
- **Projects** got expanded with real companion links (Oracle product pages,
  the SIGMOD/VLDB papers) wherever a public link exists.
- **Research & Publications**: every publication and patent title is now a
  live link (ACM DL, USENIX, Springer, Google Patents, etc.), sourced from
  DBLP/Google Scholar/USPTO.
- **Contact** replaces the old "Get in touch" framing.
- A **scroll-spy side navigation** (right edge, desktop only) tracks which
  section you're in as you scroll.
- A **dark/light mode toggle** sits in the header. It's driven entirely by
  CSS variables in `src/index.css` (`:root` vs `.dark`), so if you want to
  adjust the color palette later, that's the one place to do it.

## Things to finish before/after you push

- **Headshot**: your illustrated portrait is already in place at
  `public/headshot.jpg` and wired up in `src/components/Hero.tsx`. Replace
  that file (keeping the same name) any time you want to swap the image.
- **Google Scholar URL**: `src/data/content.ts` has a placeholder
  `scholar` URL — paste your actual profile link in.
- **Resume**: `public/resume.pdf` is already your uploaded Sept 2026 resume.
  Replace this file whenever you update your resume; the filename stays the
  same so the "Download resume" links keep working.
- Everything else (experience, projects, publications, patents, skills) lives
  in one place: `src/data/content.ts`. Edit text there rather than in the
  components.

## Local development

```bash
npm install
npm run dev      # dev server with hot reload
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```
