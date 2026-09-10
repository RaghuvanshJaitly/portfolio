# Raghuvansh Jaitly | Portfolio

A production-ready static portfolio built with React, TypeScript, Vite, and a custom responsive CSS system.

## Local development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The output is written to `dist/`. Preview it locally with `npm run preview`.

## Update the content

Personal links, contact information, projects, experience, and learning items are centralized in `src/data/portfolio.ts`. Replace the uppercase placeholders there with real URLs, email, organizations, and dates. Section copy lives in the relevant file under `src/sections/`.

## Deploy to Netlify

1. Push this project to a Git repository.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the repository. Netlify will read `netlify.toml` automatically.
4. Deploy. The configured build command is `npm run build` and the publish directory is `dist`.

Alternatively, run `npm run build` and drag the resulting `dist` folder into Netlify Drop.

No environment variables, backend, authentication, or database are required.

## Accessibility and performance

The site uses semantic sections, labeled controls, keyboard-accessible navigation, responsive layouts, good contrast, and a reduced-motion mode. The command menu opens with `/`, `⌘K`, or `Ctrl+K` and closes with Escape.
