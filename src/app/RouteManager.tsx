import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { routeMetadata } from "./metadata";
import { site } from "@/data/site";

const positions = new Map<string, number>();

export function RouteManager() {
  const location = useLocation();
  const navigation = useNavigationType();
  const previous = useRef(location);
  useEffect(() => {
    const old = history.scrollRestoration;
    history.scrollRestoration = "manual";
    return () => {
      history.scrollRestoration = old;
    };
  }, []);
  useEffect(() => {
    const metadata = routeMetadata(location.pathname);
    document.title = metadata.title;
    const metas: Record<string, string> = {
      description: metadata.description,
      "og:title": metadata.title,
      "og:description": metadata.description,
      "og:type": "website",
      "twitter:card": "summary_large_image",
      "twitter:title": metadata.title,
      "twitter:description": metadata.description,
      robots: "noindex" in metadata ? "noindex, follow" : "index, follow",
    };
    if (site.url) metas["og:url"] = `${site.url}${location.pathname}`;
    for (const [name, content] of Object.entries(metas)) {
      const attribute = name.startsWith("og:") ? "property" : "name";
      let tag = document.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${name}"]`,
      );
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        document.head.append(tag);
      }
      tag.content = content;
    }
    if (site.url) {
      let canonical = document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]',
      );
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.append(canonical);
      }
      canonical.href = `${site.url}${location.pathname}`;
    }
    const pathChanged = previous.current.pathname !== location.pathname;
    const frame = requestAnimationFrame(() => {
      window.dispatchEvent(new Event("portfolio:navigation"));
      if (location.hash)
        document
          .getElementById(decodeURIComponent(location.hash.slice(1)))
          ?.scrollIntoView();
      else if (navigation === "POP")
        window.scrollTo(0, positions.get(location.key) || 0);
      else if (pathChanged) window.scrollTo(0, 0);
      if (pathChanged)
        document
          .querySelector<HTMLElement>("h1")
          ?.focus({ preventScroll: true });
    });
    previous.current = location;
    const save = () => positions.set(location.key, window.scrollY);
    window.addEventListener("scroll", save, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", save);
    };
  }, [location, navigation]);
  return null;
}
