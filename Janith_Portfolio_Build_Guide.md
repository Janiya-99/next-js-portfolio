# JANITH SAMARASINGHE — PORTFOLIO WEBSITE
## Complete design, content and implementation guide

**Deliverable:** A responsive, multi-page software engineering portfolio built with React + TypeScript, with polished editorial styling, Framer-inspired transitions, subtle parallax, and robust accessibility.

**Status of information:** The career history, project descriptions, skills, education, and contact details in this guide come from `Janith_CV(2).pdf` supplied for this project. Visual direction, architecture, sample copy, interaction patterns, and implementation recommendations are proposed design decisions—not claims made by the CV. Sections marked **[VERIFY]** or **[ASSET NEEDED]** require owner confirmation before publication.

---

## 1. Objective and positioning

Build a distinctive portfolio that shows **how Janith engineers real business software** rather than only showing attractive UI. A recruiter or engineering manager must be able to answer these questions within 30 seconds:

1. Who is Janith? A software engineer with a backend focus and full-stack delivery experience.
2. What does he build? ERP systems, SaaS microfinance platforms, APIs, inventory/finance workflows, and client-facing web applications.
3. What technologies does he work with? PHP/Laravel, Go, React, TypeScript, Java, MySQL, PostgreSQL, Docker, cloud deployment, and related tools.
4. Where is the proof? Clearly written project case studies explaining the domain, responsibilities, architecture, workflows, and engineering decisions.
5. How can someone contact him? Prominent email and LinkedIn actions, with a genuine résumé download.

**Primary audience:** Software engineering recruiters, engineering leads, and potential freelance clients.

**Brand personality:** precise, thoughtful, technically capable, contemporary, approachable. **Avoid:** generic AI illustrations, neon gradients everywhere, fake terminals, meaningless counters, fabricated testimonials, unsupported performance percentages, excessive animations, and presenting private client code as public.

**Suggested signature:** `JANITH / SOFTWARE ENGINEER` with a small monogram `JS.`. This is a design proposal, not an existing brand identity.

---

## 2. Information architecture and routes

Use actual client-side routes—not one long page pretending to be multi-page. Every route must work via direct navigation and browser back/forward. Render a shared navigation and footer across pages.

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Make the first impression, feature work, explain expertise, show availability/contact CTA. |
| `/work` | Selected Work | Filterable editorial project gallery with honest project statuses. |
| `/work/pharmaceutical-distribution-erp` | Case Study 01 | Integrated ERP, inventory, finance, and control center. |
| `/work/saas-microfinance-platform` | Case Study 02 | Loan, customer, transaction, and reporting workflows. |
| `/work/bicycle-rental-backend` | Case Study 03 | Authentication, stations, GPS, emergency handling, Firebase notifications. |
| `/work/restaurant-ticketing-platform` | Case Study 04 | Restaurant application, event ticketing, administration, and Stripe integration. |
| `/about` | About | Engineering approach, verified career timeline, education, and methods. |
| `/contact` | Contact | Email, LinkedIn, optional verified GitHub; simple contact options. |
| `*` | 404 | Branded, accessible not-found page with a home link. |

**Navigation:** Work · About · Contact; logo/wordmark returns home. Put `Résumé ↗` in the right-side navigation only when a valid résumé file exists. Use the case-study slugs above as internal, stable URLs; changing them later requires redirects.

**Page reading flow:** Hero → proof of work → engineering capabilities → experience snapshot → clear next action. A visitor must never have to hover to discover project names or clickable controls.

---

## 3. Art direction — premium, not template-like

### 3.1 Visual concept

**“Editorial engineering studio.”** Combine the restraint of a well-designed design-studio portfolio with the clarity of serious engineering documentation. Use spacious typography, immaculate layout, subtle warm surfaces, concise annotations, deep project imagery, and one vivid accent used sparingly. Framer is a *quality reference*, not a request to copy another site or use Framer as the technology.

**Color tokens (proposed):**

| Token | HEX | Role |
|---|---|---|
| `--bg` | `#F7F7F3` | Warm off-white page |
| `--surface` | `#FFFFFF` | Cards and image surfaces |
| `--ink` | `#171A1E` | Primary text |
| `--muted` | `#626970` | Secondary copy |
| `--line` | `#DCDDD8` | Subtle separators |
| `--accent` | `#4357E8` | Links, tiny accents, key CTA |
| `--accent-soft` | `#E9ECFF` | Tags and hover fills |
| `--dark` | `#171A1E` | One contrasting work/contact section |
| `--dark-ink` | `#F7F7F3` | Text on dark surfaces |

Target readable contrast; adjust token shades if automated WCAG checks reveal failures. Never use the muted token for very small text without verifying contrast.

### 3.2 Typography

- **Display/headings:** `Manrope` or `Space Grotesk`, variable if available. Pick *one*, not both.
- **Body:** `Inter`, with a system-sans fallback.
- **Metadata/code:** `IBM Plex Mono`, used only for tiny indices, dates, technology tags, and annotations.
- Desktop H1: `clamp(3.75rem, 8vw, 8rem)`, weight 550–700, line height 0.98–1.04, tight but legible tracking.
- H2: `clamp(2.4rem, 5vw, 5.25rem)`; H3: `clamp(1.5rem, 2.5vw, 2.6rem)`.
- Body: 16–18 px / 1.55–1.75 line height; long-form case-study text max ~68 characters per line.
- No forced text distortion, illegible ultra-thin body copy, or justified paragraphs.

### 3.3 Grids and spacing

- Max content width: `1320px`; wide feature media may extend to `1440px`.
- Desktop margin: 48–72 px, tablet 32 px, mobile 20–24 px.
- 12-column desktop grid / 6-column tablet / 4-column mobile.
- 8px spacing base; section padding desktop 112–160 px, mobile 72–96 px.
- Card radius 16–24 px, buttons 999 px, thin 1px borders. Avoid giant rounded rectangles on every element.
- Keep persistent navbar approximately 72–80 px high; translucent backdrop is optional and should not obscure text.

### 3.4 Signature visual assets

Generate *original, accurate* project visuals, or capture sanitized screens from real applications. A coherent set could include:

1. Pharma ERP: anonymized inventory dashboard, batch/expiry table, workflow chart (GRN → inventory → invoice → ledger).
2. Microfinance: anonymized loan schedule, repayment timeline, reporting/dashboard view.
3. Bicycle backend: original stylized route/station map illustration plus a real endpoint/workflow diagram (not a fabricated product screen).
4. Restaurant: sanitized ticketing/checkout screen and original device mockup.

If project UIs, logos, repositories, and permissions are missing, show **original diagrams labeled “Architecture illustration”** rather than misleading mock product screenshots. No invented company/client logos or fabricated testimonials. Use a real personal portrait only if supplied and approved; otherwise use a strong typography-only hero.

---

## 4. Page-by-page design and production copy

All copy below is suggested website copy based on the CV, not a verbatim résumé transcription. Preserve project confidentiality and confirm each unpublished technical detail with Janith.

### 4.1 HOME `/`

**A. Navigation:** Left `JS.` and `JANITH SAMARASINGHE`; center `Work / About / Contact`; right small `Résumé ↗` if downloadable. Mobile: real menu button with `aria-expanded`, accessible focus order, backdrop, and close behavior; never rely on hover.

**B. Hero: 90–100svh on desktop; natural minimum height on mobile.**

Eyebrow: `SOFTWARE ENGINEER  /  KANDY, SRI LANKA`

H1:

> Building the systems\n> behind better business.

Supporting copy:

> I’m Janith, a backend-focused software engineer building ERP platforms, SaaS products, APIs, and thoughtful full-stack experiences.

CTAs: `Explore selected work ↗` → `/work`; `Get in touch ↗` → `/contact`.

Hero composition: Left ~8 columns of typography; right ~4 columns for one abstract system/grid illustration or a carefully composed, real project preview. Add tiny marginalia `01 / ENGINEERED WITH INTENT`, a restrained vertical rule, and a project preview partially peeking below the fold. Keep the hero understandable with JavaScript disabled as far as the build allows.

**Hero motion:** reveal headline by lines (opacity 0→1, y 28→0; 0.75s, stagger 0.09s); supporting copy/CTAs follow; background abstract grid shifts 12–24 px in response to scroll on desktop only. No page-blocking loader.

**C. Selected work:** eyebrow `01 / SELECTED WORK`; H2 `Complex problems. Clear systems.`; short intro `A selection of products and platforms across enterprise operations, financial workflows, and connected services.` Use two large alternating feature cards (Pharma ERP, SaaS Microfinance) with real descriptions, indices `01 / 02`, technology metadata, project type, and `View case study`. Show 1–2 smaller cards below for Bicycle Rental Backend and Restaurant Ticketing Platform.

**D. Expertise strip:** `BACKEND & APIS / ENTERPRISE WORKFLOWS / FULL-STACK DELIVERY / CLOUD & DEPLOYMENT`. One sentence per item; no unsupported “expert in everything” claims.

**E. Career snapshot:** compact vertical timeline: Asipiya Soft Solution (Software Engineer, Dec 2025–Present); Pixandco (Freelance Software Engineer, Jun 2025–Present); Vital One (Associate Software Engineer, Dec 2024–Aug 2025; Trainee, Sep 2023–Dec 2024). Freelance and full-time roles overlap intentionally; do not imply they are sequential full-time positions.

**F. Final CTA:** dark section with `Have a complex system to build?` and `Let's talk about the problem.` Include email CTA and a smaller LinkedIn CTA.

**G. Footer:** wordmark, `Software Engineer • Kandy, Sri Lanka`, email, LinkedIn, current year, sitemap links. No fake “available for work” status unless confirmed.

### 4.2 WORK `/work`

Hero: `Selected work` / `Systems designed for real-world complexity.`

Card layout: first project full width, next two half width, fourth full-width editorial row. Filters: `All / ERP & Enterprise / SaaS & Finance / APIs & Platforms / Web Applications`. Filters must be real state with visible results and a reset option, not purely cosmetic. Define each project's category in one data file.

Each card contains: number, project title, one-sentence problem/domain, *actual* stack from CV, genuine project image/diagram, `Read case study` accessible link, and transparent visibility label where applicable, such as `Client project — details limited` **only after verification**. Do not display live links until checked.

### 4.3 CASE STUDY TEMPLATE `/work/:slug`

Reusable sections: top breadcrumb → category & title → meaningful summary → hero media (or clearly labeled illustration) → quick facts → project context → my contribution → system/workflow → engineering approach → challenges/trade-offs **[VERIFY]** → outcome/status **[VERIFY]** → next project → contact CTA.

Quick facts only use source-backed information: role, tech stack where stated, domain, and known responsibilities. Do not display invented user counts, revenue impacts, response-time improvements, team sizes, or delivery dates. Avoid implying ownership of an entire product when the CV states contributor/core developer.

#### Case study 01 — Pharmaceutical Distribution ERP

**Title:** `An integrated ERP for pharmaceutical distribution`

**Intro:** `Connecting inventory, invoicing, finance, and administration in a unified operational system.`

**Stack listed in selected-project section of CV:** React, TypeScript, Go, MySQL. **Important:** The freelance experience section also describes a pharmaceutical ERP; do not assume both references are separate systems. The exact role, engagement and tech combinations should be confirmed before launch.

**Supported contribution highlights:** control center for companies, branches, users, roles, permissions, designations, settings, and audit logs; product and warehouse workflows; batch/expiry monitoring; GRNs, stock transfers, adjustments and ledgers; finance including journals, general ledger, AP/AR, payments, receipts and reporting; connections among sales, invoices, stock movements and accounting entries; normalized relational structures, REST APIs, RBAC, validation and responsive interfaces.

**Suggested visual narrative:** `Product received → batch registered → warehouse stock tracked → sale invoiced → stock and accounting updated`. Mark as *conceptual workflow illustration* pending validation of precise transaction behavior.

**Potential sections:** `01 / The operational challenge`; `02 / Modules working together`; `03 / Inventory integrity`; `04 / Linking commercial and financial workflows`; `05 / What I contributed`. Do not claim regulatory certification or legal compliance approval; the CV says regulatory compliance workflows, not certified compliance.

**Outcome block:** `[VERIFY: current build status, what shipped, screenshots approved for public use, specific measurable outcome if evidence exists]`.

#### Case study 02 — SaaS Microfinance Platform

**Title:** `Core engineering for a microfinance SaaS platform`

**Intro:** `Customer records, lending workflows, repayments, transaction handling, and reporting in a connected platform.`

**Company:** Asipiya Soft Solution. **Role:** Software Engineer / core developer (respect the contribution wording). **Stack:** PHP/Laravel, Go services, relational databases (specific engine for this particular project **[VERIFY]**).

**Supported contribution highlights:** backend modules, relational schemas, customer management, loan workflows, repayment tracking and payment schedules, transaction ledgers, access controls, reporting, validation, and Docker/cloud deployment support. The CV describes delivery of core functionality within a focused four-month development timeline; do not convert this into a claim that the entire product shipped in four months.

**Suggested diagram:** `Customer → Loan → Repayment schedule → Transaction ledger → Reports`, labeled conceptual pending validation.

**Outcome:** `[VERIFY: what was deployed, current status, outcomes, permissions]`.

#### Case study 03 — Bicycle Rental App Backend

**Title:** `The backend powering a bicycle rental experience`

**Intro:** `APIs and operational data for authentication, bicycle discovery, station management, GPS tracking, and critical notifications.`

**Stack from CV:** Laravel; MySQL/PostgreSQL (confirm which is used in this deployment); Firebase.

**Supported contribution highlights:** user authentication, bicycle listings by station, GPS tracking, emergency handling, operational data, Firebase push notifications, schemas covering users, bicycles, employees, stations, weather data, and activity records.

**Visuals:** map-inspired original illustration; technical flow `App → API → Database / Firebase` identified as a high-level conceptual diagram, not a confirmed architecture map. Do not claim real-time geospatial capabilities, route optimization, or app-store availability without proof.

#### Case study 04 — Restaurant & Event Ticketing Application

**Title:** `Restaurant experiences, event ticketing, and secure checkout`

**Intro:** `A web application combining restaurant workflows, event tickets, administration, and Stripe-backed payments.`

**Stack from CV:** Laravel, JavaScript, Laravel Blade, Stripe API.

**Supported contribution highlights:** restaurant web app; event ticketing; admin management; user workflows; secure Stripe payment integration. The CV does not specify payment methods, purchase volumes, payment architecture, refunds, or deployment URL—leave those out until verified.

**Visuals:** original booking-to-checkout flow and approved sanitized UI/screenshots if available.

### 4.4 ABOUT `/about`

Hero: `I design the logic behind the experience.`

Suggested opening:

> I’m Janith Samarasinghe, a software engineer based in Kandy, Sri Lanka. My work spans enterprise applications, ERP platforms, microfinance systems, backend APIs, and full-stack web development. I focus on translating complicated business processes into maintainable software.

**Engineering approach (supported themes, copy proposed):** `Understand the workflow`; `Model the data carefully`; `Build clear interfaces between systems`; `Test, ship, and support`. Cite or link examples from the case studies; do not claim methodologies not in the CV.

**Career timeline:**

| Period | Position | Organization |
|---|---|---|
| Dec 2025–Present | Software Engineer | Asipiya Soft Solution |
| Jun 2025–Present | Freelance Software Engineer | Pixandco (Pvt) Ltd |
| Dec 2024–Aug 2025 | Associate Software Engineer | Vital One (Pvt) Ltd |
| Sep 2023–Dec 2024 | Trainee Software Engineer | Vital One (Pvt) Ltd |

**Skills:** render categorically rather than a hundred spinning icons. Languages: PHP, Java, Go, TypeScript, JavaScript, Python, SQL, C. Frameworks/UI: Laravel, React, Vite, Vue.js, Next.js, Tailwind CSS, shadcn/ui, Laravel Blade, Java Swing; Spring Boot *exposure* only. Data: MySQL, PostgreSQL, schema design/normalization, query optimization. Engineering: REST, MVC, OOP, SOLID, RBAC, validation, testing and auditing. Delivery: Docker, DigitalOcean Droplets/VPS, cPanel, GitHub Actions, CI/CD, Git and Nginx.

**Education:** BSc in Physics and ICT, University of Sri Jayewardenepura (2020–2023). Certificate in Computer Science; Advanced Certificate in English Language — IBA Campus. Do not turn the degree into a Software Engineering degree or add institutions for unspecified certificates.

**Optional personal portrait and personal interests:** only with consent and supplied content.

### 4.5 CONTACT `/contact`

Headline: `Let's build something that works.`

Copy: `For engineering roles, product collaboration, or a thoughtful conversation about your next system, reach out directly.`

Primary email: `janithsamarasinghe1999@gmail.com` → mailto link.

LinkedIn: **[VERIFY exact profile URL]**. GitHub: **[VERIFY actual account URL]**. CV PDF: link to actual copied file under `/public/resume/Janith_Samarasinghe_CV.pdf` only after it is placed there.

**Contact form:** Optional; build it only with a real endpoint such as a provider or secured serverless API, server-side validation, spam protection, rate limits, and an actual delivery test. The default MVP should use reliable email and LinkedIn links instead of a form that pretends to send messages. Display a confirmation only after confirmed server success.

**Privacy:** A public portfolio may expose contact information from the CV; confirm that Janith wants his phone number published. Default to email/LinkedIn and omit his phone from UI until approved.

### 4.6 404

Display `404 / Page not found`, a one-sentence explanation, an obvious home link, and standard navigation/footer. Make direct deep links work via proper hosting fallback or pre-rendering.

---

## 5. Motion direction and interaction storyboard

**Principle:** Motion should make reading and navigation feel deliberate, not hide information or cause vertigo. Parallax is not synonymous with moving the entire page. Apply restrained transforms to decorative imagery and overlapping media, never essential copy.

| Element | Desktop behavior | Mobile/reduced-motion fallback |
|---|---|---|
| Hero headline | One-time sequential line reveal (0.65–0.85s) | Static or quick opacity only |
| Hero media | Scroll-linked `y: 0 → -28px` | Static |
| Project cards | Subtle image crop/zoom, arrow translates ~4px on hover | Persistent arrow, no hover dependency |
| Section headers | `opacity: 0→1`, `y: 20→0`, once | Immediate or fade only |
| Wide project image | Internal image moves ~30–48px under fixed crop as section scrolls | No parallax |
| Career timeline | Active progress accent on scroll | Static timeline |
| Page transitions | Short fade + ~12px translation, route-keyed | Instant if reduced motion |
| Mobile menu | Quick overlay reveal; lock body scroll while open | Keep transitions short |

**Avoid:** scroll hijacking, forced horizontal scroll, pinning major content for several viewport heights, constant text morphing, aggressive cursor followers, scroll progress blocking touch gestures, and autoplay audio/video. If building a magnetic button, enhance pointer devices only and keep the click target stationary enough to remain usable.

**Suggested easing:** `power3.out` for GSAP entrances; `[0.22, 1, 0.36, 1]` for CSS/Motion. Aim for 0.2–0.35s UI microinteractions and 0.6–0.85s initial reveals. Use a single owner per property: GSAP owns scroll-driven transforms; Motion owns route opacity/translation; CSS owns ordinary hover/focus colors. Never animate the same element's `transform` concurrently using three systems.

---

## 6. Recommended implementation stack

| Requirement | Selection | Why |
|---|---|---|
| App | React + TypeScript | Requested stack, typed reusable components |
| Tooling | Vite `react-ts` | Fast local workflow and standard production build |
| Routing | React Router | Multiple pages and shareable case study URLs |
| Styling | Tailwind CSS + CSS custom properties | Responsive utilities with consistent token system |
| Components | Small bespoke accessible components | Editorial portfolio should not resemble an admin dashboard |
| Scroll animation | GSAP + ScrollTrigger + `@gsap/react` | Controlled, scoped scroll effects |
| Smooth scrolling | Lenis, **optional enhancement** | Refined scroll experience with a native-scroll fallback |
| Route transitions | Motion (`motion/react`) | Mount/exit animations with route keys |
| Icons | Lucide React | Consistent small utility icons |
| SEO metadata | React Helmet Async **only if compatible with installed React**, or a small route metadata mechanism | Titles, canonical URL, Open Graph; evaluate pre-rendering for crawlable project pages |
| Quality | TypeScript checking, ESLint, Vitest, Playwright, Lighthouse | Catch regressions before release |

**Important trade-off:** A purely client-rendered Vite SPA is simple to deploy, but crawlers and social-card bots can be inconsistent about page-specific rendered content and metadata. For a public recruiter-facing portfolio, pre-render the stable routes or move to a React framework with static generation if reliable per-page SEO/OG previews are essential. Do not assume that changing a document title client-side guarantees accurate social previews. Static hosting needs an SPA fallback for direct `/work/...` requests; pre-rendering also needs correct asset/routing configuration.

**Current-docs references (review before installing):**
- Vite official guide: https://vite.dev/guide/
- Tailwind CSS installation: https://tailwindcss.com/docs/installation/using-vite
- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- GSAP React guide: https://gsap.com/resources/React/
- Lenis and GSAP integration: https://github.com/darkroomengineering/lenis
- Motion route enter/exit API: https://motion.dev/docs/react-animate-presence
- React Router: https://reactrouter.com/

**Dependency policy:** Install maintained versions compatible with the project's actual React and Node versions; do not force old version numbers from a sample. Choose a supported Node LTS that satisfies Vite's current requirements. Commit the lockfile.

---

## 7. Repository blueprint

```text
janith-portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-default.jpg                 # [ASSET NEEDED]
│   ├── robots.txt
│   ├── sitemap.xml                    # generate from published routes
│   ├── resume/
│   │   └── Janith_Samarasinghe_CV.pdf # place real, approved PDF here
│   └── images/
│       └── projects/                 # approved optimized screenshots/diagrams
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── routes.tsx
│   │   └── ScrollManager.tsx
│   ├── components/
│   │   ├── layout/{Navbar,Footer,PageShell,MobileMenu}.tsx
│   │   ├── ui/{Button,Container,SectionHeading,ProjectCard,Tag}.tsx
│   │   ├── motion/{Reveal,ParallaxMedia,PageTransition,SmoothScroll}.tsx
│   │   └── projects/{ProjectHero,ProjectFacts,ProjectSection,NextProject}.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   └── site.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── WorkPage.tsx
│   │   ├── ProjectPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── hooks/{usePrefersReducedMotion,useDocumentTitle}.ts
│   ├── styles/{index,tokens}.css
│   └── main.tsx
├── tests/
│   ├── project-data.test.ts
│   └── navigation.spec.ts
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

Adjust file grouping for the generated Vite template; keep components small, named semantically, and typed. **Single source of truth** for project data: cards, detail pages, next-project links, navigation, and metadata all read from `src/data/projects.ts`.

---

## 8. Setup and working commands

```bash
npm create vite@latest janith-portfolio -- --template react-ts
cd janith-portfolio
npm install
npm install react-router-dom gsap @gsap/react lenis motion lucide-react
npm install tailwindcss @tailwindcss/vite
npm install -D vitest @testing-library/react @testing-library/jest-dom \
  @playwright/test
```

Adapt testing dependencies to the project's chosen test runner and Vite version; install Playwright browser binaries if running its browser tests. `react-router-dom` re-exports the APIs used here; check current Router packaging before starting. For a lean MVP, defer Motion until the core site works; GSAP already covers scroll animations.

`vite.config.ts` (merge with the generated configuration rather than replacing useful defaults):

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

`src/styles/index.css`:

```css
@import 'tailwindcss';

:root {
  --bg: #f7f7f3;
  --surface: #ffffff;
  --ink: #171a1e;
  --muted: #626970;
  --line: #dcddd8;
  --accent: #4357e8;
  --accent-soft: #e9ecff;
}

html { scroll-padding-top: 5.5rem; }
body { margin: 0; background: var(--bg); color: var(--ink); }
body, button, input, textarea { font-family: Inter, system-ui, sans-serif; }
::selection { background: var(--accent-soft); color: var(--ink); }
:focus-visible { outline: 3px solid var(--accent); outline-offset: 4px; }
img, video { max-width: 100%; height: auto; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Use `font-display: swap`, locally hosted licensed webfont files if possible, and responsive image sources. Do not ship huge uncompressed portfolio screenshots or use a GIF for a decorative hero.

---

## 9. Typed project data model

Start with verifiable, non-hyped data. Keep prose and tags in structured data rather than duplicating them in components.

```ts
// src/data/projects.ts
export type ProjectCategory =
  | 'erp-enterprise'
  | 'saas-finance'
  | 'apis-platforms'
  | 'web-applications';

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  technologies: string[];
  heroImage?: string; // only approved real screenshot/original illustration
  heroAlt?: string;
  imageKind?: 'approved-screenshot' | 'conceptual-illustration';
  externalUrl?: string; // only verified public URL
  repositoryUrl?: string; // only verified, approved public repository
  context: string;
  contributions: string[];
  status?: string; // verified wording only
};

export const projects: Project[] = [
  {
    slug: 'pharmaceutical-distribution-erp',
    title: 'Pharmaceutical Distribution ERP',
    category: 'erp-enterprise',
    summary: 'An integrated platform for inventory, finance, invoicing and administration.',
    technologies: ['React', 'TypeScript', 'Go', 'MySQL'],
    context: 'Pharmaceutical distribution operations involve tightly connected business workflows.',
    contributions: [
      'Designed a control center covering companies, branches, users, roles and audit logs.',
      'Developed inventory workflows including batch and expiry tracking, GRNs and stock movements.',
      'Worked on financial workflows and integration between invoicing, inventory and accounting.',
    ],
  },
  {
    slug: 'saas-microfinance-platform',
    title: 'SaaS Microfinance Platform',
    category: 'saas-finance',
    summary: 'Backend workflows for customers, loans, repayments, transactions and reporting.',
    technologies: ['PHP', 'Laravel', 'Go'],
    context: 'A SaaS platform supporting microfinance operations.',
    contributions: [
      'Developed backend modules, relational schemas and business logic.',
      'Worked on customer records, loan and repayment workflows, and transaction ledgers.',
      'Supported validation, reporting and Docker/cloud deployment workflows.',
    ],
  },
  {
    slug: 'bicycle-rental-backend',
    title: 'Bicycle Rental App Backend',
    category: 'apis-platforms',
    summary: 'APIs supporting bicycle availability, stations, GPS tracking and notifications.',
    technologies: ['Laravel', 'Firebase'],
    context: 'Backend and operational data for a bicycle rental application.',
    contributions: [
      'Built authentication and station-based bicycle listing APIs.',
      'Worked on GPS tracking and emergency-handling functions.',
      'Integrated Firebase push notifications and designed operational data structures.',
    ],
  },
  {
    slug: 'restaurant-ticketing-platform',
    title: 'Restaurant & Event Ticketing Application',
    category: 'web-applications',
    summary: 'Restaurant workflows, event ticketing, administration and Stripe payments.',
    technologies: ['Laravel', 'JavaScript', 'Laravel Blade', 'Stripe API'],
    context: 'A restaurant-focused web application with event ticketing.',
    contributions: [
      'Developed web application and user workflows.',
      'Built event ticketing and administration features.',
      'Integrated payments with the Stripe API.',
    ],
  },
];
```

**Data quality note:** The bicycle project's CV lists `MySQL/PostgreSQL`, which is ambiguous for a single deployment; it is intentionally omitted from the concrete project card above pending confirmation. The microfinance project is described as using relational databases without identifying one specific engine. The drug-distribution project's relationship to the freelance engagement should be confirmed before publishing a company attribution.

---

## 10. React routing and page transition patterns

The following is a **starting pattern**, not a complete copy-paste application. Use standard routing semantics and ensure each route has its own title and description. This version uses an explicit case-study route and a not-found fallback.

```tsx
// src/app/routes.tsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import HomePage from '../pages/HomePage';
import WorkPage from '../pages/WorkPage';
import ProjectPage from '../pages/ProjectPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

export function AppRoutes() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
        transition={{ duration: reduceMotion ? 0 : 0.24 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
```

**Important:** Use exactly one persistent `<main id="main-content">` in `App.tsx`, with the route-keyed `motion.div` above inside it. During transitions the outgoing and incoming route views can briefly coexist; mark the outgoing view inert/hidden from assistive technology if necessary, and focus the arriving page heading after the transition completes. Do not duplicate page landmarks or query globally for elements that temporarily coexist.

`App.tsx` should provide a persistent `<Navbar />`, one persistent main region, `AppRoutes`, `<Footer />`, route scroll restoration, and optional smooth scroll. On route change, send ordinary navigation to top, preserve hash navigation, and focus the new page heading after the transition. Use `Link`/`NavLink`, not click handlers on generic divs.

Project lookup: `projects.find((project) => project.slug === slug)`; if missing, render the 404 page. The case study template must be the same for all projects but conditional sections should disappear cleanly when data is absent. Avoid placeholder text in production.

---

## 11. GSAP parallax: production-safe example

Install GSAP, ScrollTrigger, and `@gsap/react`. Register plugins once in the module. Scope animations to component refs; clean them up on unmount. Respect reduced-motion settings and disable decorative parallax on small screens.

```tsx
// src/components/motion/ParallaxMedia.tsx
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  src: string;
  alt: string;
  className?: string;
};

export function ParallaxMedia({ src, alt, className = '' }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      if (!wrapperRef.current || !imageRef.current) return;
      gsap.fromTo(
        imageRef.current,
        { yPercent: -4 },
        {
          yPercent: 4,
          ease: 'none',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    });
    return () => mm.revert();
  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block h-full w-full scale-[1.10] object-cover"
      />
    </div>
  );
}
```

**Media requirements:** caller must provide an explicit height or aspect ratio; don't collapse the frame. The `scale-[1.10]` is intentional to conceal the small parallax edge reveal; verify visually at all breakpoints. For an important hero/LCP image, use eager loading with `fetchPriority="high"` and do not use this lazy-loading wrapper unmodified.

**Do not:** globally call `ScrollTrigger.killAll()` in every component cleanup—it can destroy triggers owned by other components. Don't animate a ScrollTrigger-pinned wrapper itself. Refresh triggers after fonts and imagery have changed layout when necessary.

---

## 12. Optional Lenis integration

Implement **native scroll first**. Add Lenis only after navigation, hash links, keyboard behavior, and all ScrollTriggers work. For a single authoritative animation clock, coordinate Lenis with GSAP as recommended in Lenis documentation. The code below uses the manual instance approach; do not also mount `<ReactLenis>` or enable Lenis `autoRaf`.

```tsx
// src/components/motion/SmoothScroll.tsx
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const touch = window.matchMedia('(pointer: coarse)');
    if (reduced.matches || touch.matches) return;

    const lenis = new Lenis({ duration: 1.05 });
    const update = () => ScrollTrigger.update();
    const tick = (seconds: number) => lenis.raf(seconds * 1000);

    lenis.on('scroll', update);
    gsap.ticker.add(tick);

    return () => {
      lenis.off('scroll', update);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
```

Place `<SmoothScroll />` once at the app root; do not mount a new Lenis instance on every route. Keep keyboard scrolling functional and allow native scrolling for nested menus/modals. If scrolling or anchor restoration becomes fragile, disable Lenis rather than compromising navigation. There is no need to globally change GSAP ticker lag smoothing for this first version; test for synchronization issues before changing a global setting.

---

## 13. Reusable components and UI states

**Core components:** `Container`, `SectionHeading`, `ButtonLink`, `ProjectCard`, `TechTag`, `Timeline`, `Breadcrumbs`, `ProjectFacts`, `NextProject`, `Navbar`, `Footer`, `MobileMenu`, `ParallaxMedia`, `Reveal`.

**Button variants:** primary dark rounded pill; secondary text link with arrow; tertiary outlined pill. All must use real `<a>` or React Router `<Link>` destinations. Provide visible focus rings and never use `href="#"` as a dummy CTA.

**Project card states:** default; keyboard focus; pointer hover; image unavailable; long title; reduced motion; touch interaction. Place essential titles and links outside the hover-only layer.

**Mobile navigation states:** closed/open, Escape to close, return focus to menu trigger, body scroll restored on close/unmount, proper button semantics and accessible labels. Prefer a standard drawer pattern over writing a complicated focus trap incorrectly.

**Optional dark mode:** Not a launch requirement. If added later, implement full semantic tokens and persist preference responsibly; don't build a color-toggle that makes diagrams and images unreadable.

---

## 14. Responsive layouts

| Width | Layout expectations |
|---|---|
| ≥ 1440 px | Large editorial type, comfortable margins, split hero, featured project imagery |
| 1024–1439 px | 12-col grid, moderate hero typography, mixed project grid |
| 768–1023 px | 6-col grid, hero image below copy if needed, reduced media animation |
| 390–767 px | 4-col grid, 20–24 px gutters, single-column work cards, prominent CTA |
| 320–389 px | No horizontal overflow, wrap project titles and technology chips, minimum 44×44 px touch targets |

Test landscape phones, large text (200% browser zoom), long emails, and narrow browsers. Do not put the primary CTA beneath a full-screen animation on mobile. Project imagery must preserve intended crop without distorting screenshots; use `object-contain` for full UI captures and `object-cover` only for appropriate editorial/illustrative compositions.

---

## 15. Accessibility, performance, SEO and security

### Accessibility

- One logical H1 per page; correctly ordered headings; skip-to-content link; semantic `nav`, `main`, `section`, `footer`.
- Keyboard access to menu, filters, cards, and contact links; no pointer-only navigation.
- Accessible names for icon buttons, meaningful alt text, empty alt for purely decorative graphics.
- Respect OS reduced-motion preference in GSAP, Motion, Lenis, and CSS. Disable scroll scrub/pin effects in this mode.
- Focus visibility, 44×44 px comfortable targets, appropriate color contrast, and no content disappearing before animation fires.
- Test with keyboard only and at least one screen reader/browser combination.

### Performance

- Target Core Web Vitals in field conditions; use Lighthouse as a diagnostic, not a guarantee.
- Prefer AVIF/WebP with fallbacks; crop and compress images; explicit width/height or aspect ratio to reduce CLS.
- Prioritize hero image, lazy-load below-the-fold images; do not lazy-load hero media.
- Self-host/subset fonts when licensing permits; avoid loading every font weight separately.
- Lazy-load large case-study routes; avoid unnecessary animation libraries and heavy WebGL.
- Audit bundle output, long tasks, route navigation, image sizing, and animation frame stability on actual mid-range mobile hardware.

### SEO / distribution

- Unique title and description per route; canonical URLs; meaningful social preview image per case study when available.
- Semantic case-study text should be indexable without relying on a canvas or image of text.
- Generate sitemap from published routes, correct robots file, and a branded favicon.
- Configure deployment for deep-link refreshes; validate metadata with actual social preview/debugging tools.
- If SEO matters materially, select a pre-render/static-generation approach **before** wiring production OG tags.

### Security and privacy

- Do not publish private code, client datasets, names, customer information, financial records, or API keys in screenshots/repos.
- Never put a private email-sending service secret in Vite client env vars (`VITE_*` values are exposed in the browser bundle).
- If adding a form, use a server-side endpoint with validation, anti-spam and rate limiting; show success only on verified receipt.
- Use HTTPS, dependency updates, minimal third-party trackers, safe external links, and explicit consent for analytics if applicable.
- Do not upload a résumé containing phone/address details without Janith approving what will become public.

---

## 16. Verification checklist before launch

**Content:**

- [ ] Name, role and location match approved CV.
- [ ] Dates and overlapping freelance role match approved CV.
- [ ] Pharma ERP company attribution, project status and exact stack verified.
- [ ] SaaS contribution wording does not imply sole developer or whole product shipped in four months.
- [ ] Bicycle database engine verified before claiming a specific one.
- [ ] Restaurant application screenshots/Stripe references are approved for disclosure.
- [ ] Exact LinkedIn URL, optional GitHub URL, site domain and CV download path verified.
- [ ] All screenshots anonymized; all diagrams labeled when conceptual.
- [ ] No invented quantitative impact, fake testimonials, made-up case-study challenges or unsupported certifications.

**Functional / design:**

- [ ] `/`, `/work`, all four case studies, `/about`, `/contact`, and 404 render correctly.
- [ ] Direct refresh on nested routes works on target host.
- [ ] Navigation, filters, anchors, mailto and PDF download work.
- [ ] Browser back/forward scroll and focus behave sensibly.
- [ ] At 320 px, 390 px, 768 px, 1024 px, 1440 px there is no horizontal overflow.
- [ ] Keyboard-only journey works; reduced motion disables decorative parallax/smooth scrolling.
- [ ] Project cards do not depend on hover to reveal labels or CTAs.
- [ ] All images have genuine provenance, correct alt text and optimized sizes.
- [ ] Page titles, meta descriptions, canonical URLs and preview images work as deployed.
- [ ] `npm run build` and type-check/test commands pass; browser smoke tests pass.

---

## 17. Implementation phases with exact coding-agent prompts

**Agent working rule:** complete and test one phase at a time; show changed file paths, build/test results, and any pending verification. No imaginary assets, links, credentials, metrics, or case-study outcomes. Use the content in this document as the source of truth, but verify details flagged `[VERIFY]` instead of assuming them.

### Phase 1 — Scaffold and architecture

**Goal:** running Vite React TS site with Tailwind, routing, folder structure, strict typing, linting, layout shell, and meaningful 404.

**Prompt 1:**

> Build Phase 1 from `Janith_Portfolio_Build_Guide.md`. Set up a Vite React + TypeScript application with Tailwind's current Vite integration and React Router. Implement the folder structure, shared Navbar/Footer, typed route definitions, basic page shells, and a real 404 route. Use semantic elements and responsive containers. Do not implement animations or use placeholder product claims. Run type-check and production build, fix all failures, and report exact changed files and test results.

**Acceptance:** All routes mount; nav works; responsive shell; TypeScript/build clean.

### Phase 2 — Tokens, typography and home page

**Goal:** complete high-fidelity editorial visual system and polished home layout without scroll effects.

**Prompt 2:**

> Implement the visual design system and Home page using Sections 3 and 4.1 of the guide. Match the specified colors, responsive editorial typography, grid/margins, hero, selected work, expertise, overlapping career timeline, contact CTA and footer. Use meaningful text from the guide. Implement responsive project-card components with working links. If no approved image exists, use a clearly labeled original diagram or elegant CSS composition, not a counterfeit UI screenshot. Prioritize 320/390/768/1440 px correctness. Test keyboard navigation and build.

**Acceptance:** Home looks intentional before animations; no fake imagery, no horizontal overflow.

### Phase 3 — Work directory and reusable case studies

**Goal:** create single-source-of-truth project data, project filters, and four differentiated detail pages.

**Prompt 3:**

> Implement the `/work` index and all `/work/:slug` project pages using the typed project model and CV-grounded copy in Sections 4.2–4.3 and 9. Build reusable ProjectHero, ProjectFacts, ProjectSection, Breadcrumbs and NextProject components. Filters must update actual results. Show exactly the technologies and contributions supported by the guide. Add no outcomes, deployment links or metrics without verification. Handle unknown slugs with 404. Ensure every project has a distinct readable story even when images are unavailable. Run type-check, build and route tests.

**Acceptance:** All four case studies work via direct links and browser history; no invented claims.

### Phase 4 — About, contact and résumé

**Goal:** complete professional narrative and conversion path.

**Prompt 4:**

> Build `/about` and `/contact` per the guide, including verified career timeline, grouped skills, education and accessible contact actions. Do not invent LinkedIn/GitHub URLs or publish the phone number by default. Check whether the actual PDF exists in `public/resume` before rendering a résumé link; otherwise display no dead link. Do not add a nonfunctional contact form. Implement meaningful footer and 404. Check mobile layout and keyboard access.

**Acceptance:** No dead or deceptive actions; career dates/education correct.

### Phase 5 — Animation and parallax

**Goal:** add premium but restrained motion to a fully working site.

**Prompt 5:**

> Add motion to the completed portfolio following Section 5 and GSAP patterns in Sections 10–12. Use GSAP/ScrollTrigger for scoped scroll-driven decoration, Motion only for route transitions and small UI effects, and optional Lenis only after native scrolling works. Clean up ScrollTriggers and ticker callbacks on unmount. Respect `prefers-reduced-motion`, disable decorative parallax on small/touch devices, and do not animate the same CSS property simultaneously through competing libraries. Test route changes, browser back/forward, hash links, mobile menu, and reduced-motion behavior before calling this phase complete.

**Acceptance:** Motion adds polish without disrupting reading, scroll behavior, navigation, or performance.

### Phase 6 — Assets and content validation

**Goal:** replace illustrations/placeholders with truthful approved assets.

**Prompt 6:**

> Audit every public claim, case-study image, outbound URL and résumé file against the guide's `[VERIFY]` and `[ASSET NEEDED]` markers. Keep conceptual diagrams clearly labeled; anonymize client and financial data. Optimize approved screenshots for responsive delivery. Remove unsupported metrics, claims, empty screenshot blocks and dead links. Produce a short outstanding-approvals checklist if facts or assets remain unavailable; do not silently fabricate them.

**Acceptance:** Every published claim and link is supported; all assets are permitted for public use.

### Phase 7 — QA, SEO and deployment

**Goal:** ship a robust production site.

**Prompt 7:**

> Perform a production audit of the portfolio. Add unique titles/descriptions and appropriate social metadata, a sitemap, robots.txt and a branded 404. Explain and implement the chosen static pre-rendering or SPA fallback plan for the actual hosting provider; test deep-link refreshes. Run TypeScript check, lint, production build, automated route/navigation tests, Lighthouse diagnostics and manual keyboard/reduced-motion/mobile checks. Fix issues and report measured findings, not assumed scores. Provide a deployment README describing build command, output folder, hosting rewrites, HTTPS and rollback.

**Acceptance:** Build passes; direct routes work on production host; no critical accessibility or navigation defects.

---

## 18. Useful completion criteria: what “finished” means

This is finished only when the **site is functional and publishable**, not when an agent generates an attractive home page. The minimum acceptable release has six top-level page patterns (home, work, case study, about, contact, 404), four truthful project entries with routed detail pages, accessible navigation, responsive typography, real contact links, correctly served résumé if approved, restrained reduced-motion-aware animation, and a successful production build. A portfolio with anonymous technical diagrams and excellent writing is more credible than one full of invented dashboards and unverified numbers.

**Recommended construction order:** structure → content → design → functional navigation → animations → accessibility/performance → deployment. Do not start with an elaborate loader, WebGL scene, or parallax before building readable case studies.

---

## 19. Content approval and asset collection sheet

Before launching, collect these from Janith:

| Item | What is required | Launch treatment until received |
|---|---|---|
| Portrait | Approved image and permission to publish | Typography-only hero |
| LinkedIn | Exact current profile URL | Show email only; no dummy link |
| GitHub | Exact profile and public repos approved to share | Omit repository button |
| Resume | Current approved downloadable PDF | Hide résumé CTA |
| Pharma ERP | Confirm status, client/project attribution, tech and publishable visuals | CV-grounded case study + conceptual diagrams |
| Microfinance | Approved deployment/status and screenshots, if any | Contribution-based story, no outcome claim |
| Bicycle app | Confirm MySQL vs PostgreSQL and diagram accuracy | Don't assert one engine |
| Restaurant app | Approved screenshots/live URL and public Stripe mention | CV-grounded text, no invented screen |
| Domain | Final domain and hosting provider | Configure canonical/OG at deployment |
| Phone | Explicit consent to publish | Omit from contact page |
| Metrics | Evidence, period, attribution and public-release permission | Publish none |

---

### Source and technical references

**Primary career source:** `Janith_CV(2).pdf`, 2 pages, supplied by Janith. All role dates, project scopes, technical skills, contact details and education in this specification are derived from that CV; where details are ambiguous, this guide flags them for verification.

**Implementation reference material:** Vite documentation (`https://vite.dev/guide/`); GSAP ScrollTrigger and React guides (`https://gsap.com/docs/v3/Plugins/ScrollTrigger/`, `https://gsap.com/resources/React/`); Lenis project documentation (`https://github.com/darkroomengineering/lenis`); Motion AnimatePresence documentation (`https://motion.dev/docs/react-animate-presence`). Consult the current official versions during implementation.
