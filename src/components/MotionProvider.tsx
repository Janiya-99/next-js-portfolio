"use client";

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
