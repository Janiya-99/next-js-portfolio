import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import {
  render,
  routeMetadata,
  projects,
  site as siteConfig,
} from "../.ssr/entry-server.js";

const root = resolve("dist");
const template = await readFile(resolve(root, "index.html"), "utf8");
const routes = [
  "/",
  "/work",
  "/about",
  "/contact",
  ...projects.map((project) => `/work/${project.slug}`),
];
const site = siteConfig.url;
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

for (const route of [...routes, "/404"]) {
  const meta = routeMetadata(route);
  const head = [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    '<meta property="og:type" content="website" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escape(meta.title)}" />`,
    `<meta name="twitter:description" content="${escape(meta.description)}" />`,
    ...(meta.noindex
      ? ['<meta name="robots" content="noindex, follow" />']
      : []),
    ...(site
      ? [
          `<link rel="canonical" href="${escape(site + route)}" />`,
          `<meta property="og:url" content="${escape(site + route)}" />`,
          `<meta property="og:image" content="${escape(site)}/social-preview.png" />`,
          `<meta name="twitter:image" content="${escape(site)}/social-preview.png" />`,
        ]
      : []),
  ].join("\n    ");
  const output = template
    .replace("<!--page-head-->", head)
    .replace("<!--app-html-->", render(route));
  const destination =
    route === "/404"
      ? resolve(root, "404.html")
      : resolve(root, `.${route}`, "index.html");
  await mkdir(resolve(destination, ".."), { recursive: true });
  await writeFile(destination, output);
  console.log(`Prerendered ${route}`);
}

await writeFile(resolve(root, ".nojekyll"), "");
await writeFile(
  resolve(root, "robots.txt"),
  `User-agent: *\nAllow: /\n${site ? `\nSitemap: ${site}/sitemap.xml\n` : ""}`,
);
if (site) {
  const urls = routes
    .map(
      (route) =>
        `<url><loc>${escape(site + (route === "/" ? "/" : `${route}/`))}</loc></url>`,
    )
    .join("\n");
  await writeFile(
    resolve(root, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
} else
  console.log(
    "Set VITE_SITE_URL for canonical URLs, social image URLs, and sitemap generation.",
  );
