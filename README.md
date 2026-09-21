# Janith Samarasinghe — Portfolio

A React + TypeScript portfolio built with Vite, React Router, Tailwind CSS, GSAP, Lenis, and an optional React Three Fiber illustration. **No Next.js.** The design follows the supplied dark, warm-gold portrait reference. Eight public routes and a branded 404 are pre-rendered into HTML, then hydrated by React.

## Run locally

Use Node 22.18 or newer.

```sh
npm ci
npm run dev
```

Production preview:

```sh
npm run build
npm run preview
```

The production preview runs at `http://localhost:4173`. The deployable output is `dist/`; `.ssr/` is only a build intermediate. The preview server serves genuine route HTML and returns HTTP 404 for unknown URLs.

## Checks

```sh
npm run typecheck
npm run lint
npm run build
npm run test:browser
```

Browser tests cover all eight routes, static HTML, hydration, metadata, filters and direct filtered reloads, back navigation, mobile menus, clipboard/email contact, native keyboard and smooth scrolling, reduced motion, 404s, WCAG checks, and overflow at 320/390/768/1024/1440 px. Set `CHROME_PATH` if Chrome is not installed at `/usr/bin/google-chrome`.

## Content and assets

- Project data: `src/data/projects.ts`. Categories, cards, case studies, next-project links, and metadata share this source.
- Experience and skills: `src/data/experience.ts`.
- Name, email, and canonical origin: `src/data/site.ts`.
- Original layout tokens and responsive components: `src/styles/globals.css`.
- Current dark/gold visual direction: `src/styles/dark-theme.css`.
- The owner's supplied studio portrait is used on About. Two additional photo compositions were created from `images/profile.jpg` using the built-in image generation tool, with the owner's permission. Provenance and prompts: `docs/image-assets.md`.
- Project graphics are original HTML/SVG conceptual architecture illustrations, explicitly labeled. No client screenshots or invented product metrics are used.
- The original résumé and phone number are **not included in public assets**, following the owner's instruction to hide the résumé. The input PDF remains an unmodified local source.
- LinkedIn/GitHub profile links and product deployment links are omitted until exact public URLs are confirmed.

## Motion and accessibility

Lenis uses the GSAP ticker as its only animation clock. Native keyboard scrolling interrupts any in-progress smooth animation. Touch and reduced-motion users use native scrolling. GSAP adds scroll-linked hero/About photo parallax, staggered technology cards, project illustration movement, timeline accents, and a page-progress indicator. Scoped contexts clean up on route changes; the small 3D ornament is fetched only near its section on capable desktop devices, stops rendering offscreen, and has a static fallback. Page copy never depends on WebGL or animations to render.

Mobile navigation uses a native modal dialog with Escape handling, focus containment, and scroll restoration. Filters use buttons with pressed states, preserve query state in browser history, and hydrate safely on shared filtered URLs. Email links open the user's mail app; the copy action reports clipboard success or a useful fallback.

## Deployment

Copy `.env.example` to `.env.local` and configure the actual public URL before the production build:

```dotenv
VITE_SITE_URL=https://your-verified-domain.example
VITE_BASE_PATH=/
```

For a repository subdirectory, include the path in both settings, e.g. `VITE_SITE_URL=https://your-host.example/portfolio` and `VITE_BASE_PATH=/portfolio/`. The Vite client, static renderer, image paths, links, canonical tags, and sitemap support this base path. Environment values are public and must not contain secrets.

Deploy only `dist/` to a static host with directory index support. Every route has its own `index.html`; no blanket SPA rewrite is necessary. Configure the host's unknown-route handler to serve `404.html` with status 404. Enable HTTPS. When a site URL is configured, the build writes `sitemap.xml`, references it from `robots.txt`, and generates canonical and social image URLs. Without a verified domain, those absolute URLs are deliberately omitted.

The GitHub Pages workflow builds Vite and uploads `dist/`; the old Next.js deployment was replaced. CI checks TypeScript, lint, the build, and browser tests. Deployment occurs only through the repository's existing main-branch push/manual workflow; nothing was pushed or published as part of implementation. Roll back by deploying a prior successful Pages artifact or reverting the release commit and rebuilding with the same environment settings.

## Remaining owner checks before public launch

- Confirm the final domain, exact social profile URLs, and current career dates.
- Confirm project status, public attribution, and any client-approved screenshots before adding those details.
- Confirm the bicycle project's database engine before naming one; it is intentionally omitted from that project's stack.
- Validate social previews on the final public URL and test on physical mobile devices and with a screen reader. Automated accessibility results do not replace those checks.

## Design and implementation references

- [React Bits](https://reactbits.dev/): spotlight and restrained reveal interaction inspiration; custom local implementation.
- [GSAP](https://gsap.com/resources/React/): scoped reveals and scroll effects.
- [Lenis](https://github.com/darkroomengineering/lenis): smooth scrolling with native/reduced-motion fallbacks.
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber): optional lazy-loaded systems ornament.
- [Liquid Glass JS](https://github.com/dashersw/liquid-glass-js): visual reference for translucent panels. The site uses native CSS backdrop filters rather than capturing the document into WebGL.
- The user's supplied portfolio build guide and final visual reference define the content and art direction.
