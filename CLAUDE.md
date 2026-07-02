# Addison Hwang Portfolio

## Scope

This is Addison's personal portfolio site: a single page (`index.html`) built for internship applications across AI, finance, marketing, and UX design. It links out to two other personal projects and hosts a template for a future one.

- **PM System**: a personal project management tool, linked from the Projects section
- **PRD Template**: a reusable product requirements doc template, linked from the Projects section
- **Marketing Campaign**: not built yet. The "Coming Soon" card links to `case-study-template.html`, a working layout template with placeholder content, meant to be filled in once that project exists

Plain HTML, CSS, and JS, no framework or build step. Shared styling lives in `styles.css` and shared behavior (nav, reveal animations, mobile menu) lives in `script.js`, both linked from every page. Design tokens (colors, fonts) are CSS variables at the top of `styles.css`, edit those instead of hardcoding new colors.

## Accounts

- **GitHub**: `adhwang-gh`
- **Vercel**: adhwang@ucsd.edu, team `adhwang`

A fresh session needs its own login to both: `gh auth login` for GitHub and `vercel login` (or `npx vercel login`) for Vercel. Credentials do not carry over between environments.

## Related repos

All under `adhwang-gh` on GitHub, all public:

| Project | Repo | Live URL |
|---|---|---|
| Portfolio | github.com/adhwang-gh/portfolio | portfolio-eta-ten-ul362jood6.vercel.app |
| PM System | github.com/adhwang-gh/pm-system | pm-system-xi.vercel.app |
| PRD Template | github.com/adhwang-gh/duolingo-prd | duolingo-prd.vercel.app |

## Deploying changes

From inside this folder, after editing:

```
git add -A && git commit -m "describe the change"
git push
npx vercel --prod --yes
```

The same pattern applies in the other two repos once cloned.

## Conventions

- No dashes or em dashes in any written copy on the site. Rewrite with periods, colons, or "and"/"or" instead. Grammatical hyphens in compound words (like "cross-functional") are fine.
- Don't add a resume, cover letter, or contact form with a fake backend. Contact section only, pointing to email and LinkedIn (and eventually a resume PDF link, still pending).
- New components should go in `styles.css` as reusable classes, not inline styles, so they can be reused across pages the way `.polaroid-card` and `.stat-callout` already are.
