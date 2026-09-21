import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MotionProvider() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference) and (pointer: fine)",
      () => {
        const lenis = new Lenis({
          duration: 1.05,
          anchors: { offset: -100 },
          prevent: (node) => node.tagName === "DIALOG",
        });
        const tick = (seconds: number) => lenis.raf(seconds * 1000);
        const update = () => ScrollTrigger.update();
        const interrupt = () => {
          // Yield an in-flight wheel/anchor animation to native keyboard and routing.
          lenis.stop();
          lenis.start();
        };
        const onKeyDown = (event: KeyboardEvent) => {
          if (
            [
              "PageDown",
              "PageUp",
              "Home",
              "End",
              "ArrowDown",
              "ArrowUp",
              " ",
            ].includes(event.key) &&
            !(
              event.target instanceof HTMLElement &&
              event.target.closest(
                'input, textarea, select, [contenteditable="true"]',
              )
            )
          ) {
            interrupt();
          }
        };
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("portfolio:navigation", interrupt);
        lenis.on("scroll", update);
        gsap.ticker.add(tick);
        return () => {
          window.removeEventListener("keydown", onKeyDown);
          window.removeEventListener("portfolio:navigation", interrupt);
          gsap.ticker.remove(tick);
          lenis.off("scroll", update);
          // Reset first so an already scheduled native-scroll velocity callback
          // cannot re-add Lenis classes after the instance is destroyed.
          lenis.stop();
          lenis.destroy();
        };
      },
    );
    return () => media.revert();
  }, []);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-scroll-progress]",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { start: 0, end: "max", scrub: 0.2 },
          },
        );
        gsap.from("[data-hero-line]", {
          y: 28,
          opacity: 0,
          duration: 0.8,
          stagger: 0.09,
          ease: "power3.out",
          clearProps: "all",
        });
        gsap.from("[data-hero-copy]", {
          y: 16,
          opacity: 0,
          duration: 0.7,
          delay: 0.2,
          ease: "power3.out",
          clearProps: "all",
        });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: { trigger: element, start: "top 94%", once: true },
          });
        });
      });
      media.add(
        "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
        () => {
          const heroPhoto =
            document.querySelector<HTMLElement>(".hero-backdrop");
          if (heroPhoto) {
            gsap.fromTo(
              heroPhoto,
              { yPercent: -3, scale: 1.12 },
              {
                yPercent: 6,
                scale: 1.12,
                ease: "none",
                scrollTrigger: {
                  trigger: ".cinematic-hero",
                  start: "top top",
                  end: "bottom top",
                  scrub: 0.6,
                },
              },
            );
          }
          gsap.utils
            .toArray<HTMLElement>(".home-about-photo img, .portrait img")
            .forEach((photo) => {
              gsap.fromTo(
                photo,
                { yPercent: -5, scale: 1.14 },
                {
                  yPercent: 5,
                  scale: 1.14,
                  ease: "none",
                  scrollTrigger: {
                    trigger: photo.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.7,
                  },
                },
              );
            });
          const technologyCards = gsap.utils.toArray<HTMLElement>(".tech-card");
          if (technologyCards.length) {
            gsap.from(technologyCards, {
              y: 22,
              opacity: 0,
              duration: 0.6,
              stagger: 0.045,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: ".tech-cards",
                start: "top 92%",
                once: true,
              },
            });
          }
          gsap.utils.toArray<HTMLElement>(".timeline li").forEach((entry) => {
            gsap.fromTo(
              entry,
              { "--entry-progress": 0 },
              {
                "--entry-progress": 1,
                ease: "none",
                scrollTrigger: {
                  trigger: entry,
                  start: "top 85%",
                  end: "bottom 55%",
                  scrub: 0.4,
                },
              },
            );
          });
          gsap.utils
            .toArray<HTMLElement>("[data-parallax]")
            .forEach((element) => {
              gsap.fromTo(
                element,
                { y: 16 },
                {
                  y: -16,
                  ease: "none",
                  scrollTrigger: {
                    trigger: element.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                  },
                },
              );
            });
        },
      );
      let alive = true;
      document.fonts.ready.then(() => {
        if (alive) ScrollTrigger.refresh();
      });
      return () => {
        alive = false;
        media.revert();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  useEffect(() => {
    if (previousPath.current !== pathname) {
      document.querySelector<HTMLElement>("h1")?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);

  return null;
}
