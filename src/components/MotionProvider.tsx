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
          duration: 1.15,
          anchors: { offset: -100 },
          prevent: (node) => node.tagName === "DIALOG",
        });
        const tick = (seconds: number) => lenis.raf(seconds * 1000);
        const update = () => ScrollTrigger.update();
        const interrupt = () => {
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

        // Smooth cursor ambient orb following
        const orb1 = document.querySelector<HTMLElement>(".orb-1");
        const orb2 = document.querySelector<HTMLElement>(".orb-2");
        const setOrb1X = orb1 ? gsap.quickSetter(orb1, "x", "px") : null;
        const setOrb1Y = orb1 ? gsap.quickSetter(orb1, "y", "px") : null;
        const setOrb2X = orb2 ? gsap.quickSetter(orb2, "x", "px") : null;
        const setOrb2Y = orb2 ? gsap.quickSetter(orb2, "y", "px") : null;

        const onMouseMove = (e: MouseEvent) => {
          if (setOrb1X && setOrb1Y) {
            setOrb1X(e.clientX * 0.35);
            setOrb1Y(e.clientY * 0.35);
          }
          if (setOrb2X && setOrb2Y) {
            setOrb2X(e.clientX * -0.25);
            setOrb2Y(e.clientY * -0.25);
          }
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("portfolio:navigation", interrupt);
        lenis.on("scroll", update);
        gsap.ticker.add(tick);

        return () => {
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("keydown", onKeyDown);
          window.removeEventListener("portfolio:navigation", interrupt);
          gsap.ticker.remove(tick);
          lenis.off("scroll", update);
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
        // Scroll progress bar
        gsap.fromTo(
          "[data-scroll-progress]",
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { start: 0, end: "max", scrub: 0.2 },
          },
        );

        // GSAP Waypoint HUD Rail Progress Fill
        const waypointFill = document.querySelector<HTMLElement>(
          "[data-waypoint-fill]",
        );
        if (waypointFill) {
          gsap.fromTo(
            waypointFill,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: { start: 0, end: "max", scrub: 0.25 },
            },
          );
        }

        // GSAP Section Waypoints Activation (Forward & Reverse Scroll)
        const waypointSections = gsap.utils.toArray<HTMLElement>(
          "[data-waypoint-section]",
        );
        const waypointDots =
          gsap.utils.toArray<HTMLElement>("[data-waypoint-dot]");
        const setActiveWaypoint = (id: string) => {
          waypointDots.forEach((dot) => {
            const isMatch = dot.getAttribute("data-waypoint-dot") === id;
            dot.classList.toggle("active", isMatch);
          });
        };
        waypointSections.forEach((sec) => {
          const id = sec.getAttribute("data-waypoint-section");
          if (!id) return;
          ScrollTrigger.create({
            trigger: sec,
            start: "top 55%",
            end: "bottom 45%",
            onEnter: () => setActiveWaypoint(id),
            onEnterBack: () => setActiveWaypoint(id),
          });
        });

        // GSAP Waypoint Connector Bars between sections
        gsap.utils
          .toArray<HTMLElement>("[data-waypoint-bar]")
          .forEach((bar) => {
            const lineProgress = bar.querySelector<HTMLElement>(
              ".waypoint-line-progress",
            );
            gsap.from(bar, {
              y: 18,
              opacity: 0,
              duration: 0.65,
              ease: "power3.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 92%",
                end: "bottom 10%",
                toggleActions: "play none none none",
                once: true,
              },
            });
            if (lineProgress) {
              gsap.fromTo(
                lineProgress,
                { scaleX: 0 },
                {
                  scaleX: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: bar,
                    start: "top 90%",
                    end: "top 35%",
                    scrub: 0.4,
                  },
                },
              );
            }
          });

        // Hero Entrance (Synchronized with SiteLoader so text animates visibly after boot)
        const playHeroAnimation = () => {
          gsap.fromTo(
            "[data-hero-line]",
            { y: 32, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.1,
              ease: "power3.out",
              clearProps: "all",
            },
          );

          gsap.fromTo(
            "[data-hero-copy]",
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: 0.2,
              ease: "power3.out",
              clearProps: "all",
            },
          );
        };

        const isBooted =
          typeof window !== "undefined" &&
          Boolean(
            (window as unknown as { __PORTFOLIO_BOOTED__?: boolean })
              .__PORTFOLIO_BOOTED__,
          );

        const onBooted = () => {
          playHeroAnimation();
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 150);
        };

        if (isBooted) {
          playHeroAnimation();
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
        } else {
          window.addEventListener("portfolio:booted", onBooted, {
            once: true,
          });
        }

        // Animated Numbers Counter for [data-count-to]
        const counterEls = gsap.utils.toArray<HTMLElement>("[data-count-to]");
        counterEls.forEach((el) => {
          const raw = el.getAttribute("data-count-to") || el.textContent || "";
          const hasComma = raw.includes(",");
          const hasPercent = raw.includes("%");
          const hasPlus = raw.includes("+");
          const hasK = raw.includes("K") || raw.includes("k");

          const cleanNum = raw.replace(/[^0-9.]/g, "");
          const targetNum = parseFloat(cleanNum);
          if (isNaN(targetNum)) return;

          const isDecimal = cleanNum.includes(".");
          const decimals = isDecimal ? cleanNum.split(".")[1]?.length || 1 : 0;

          let suffix = "";
          if (hasK && hasPlus) suffix = "K+";
          else if (hasK) suffix = "K";
          else if (hasPercent) suffix = "%";
          else if (hasPlus) suffix = "+";

          const counterObj = { val: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: "top 95%",
            once: true,
            onEnter: () => {
              gsap.to(counterObj, {
                val: targetNum,
                duration: 1.6,
                ease: "power2.out",
                onUpdate: () => {
                  let formatted = isDecimal
                    ? counterObj.val.toFixed(decimals)
                    : Math.round(counterObj.val).toString();
                  if (hasComma && !isDecimal) {
                    formatted = Number(formatted).toLocaleString();
                  }
                  el.textContent = formatted + suffix;
                },
              });
            },
          });
        });

        // Kinetic metrics items stagger & slide up
        const kineticItems = gsap.utils.toArray<HTMLElement>(".kinetic-metric-item");
        if (kineticItems.length) {
          gsap.from(kineticItems, {
            y: 28,
            opacity: 0,
            scale: 0.96,
            duration: 0.7,
            stagger: 0.08,
            ease: "back.out(1.2)",
            clearProps: "all",
            scrollTrigger: {
              trigger: ".kinetic-metrics-grid",
              start: "top 90%",
              once: true,
            },
          });
        }

        // About section entrance
        const aboutCard = document.querySelector<HTMLElement>(".home-about-card-container");
        if (aboutCard) {
          gsap.from(aboutCard, {
            y: 36,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: aboutCard,
              start: "top 90%",
              once: true,
            },
          });
        }

        // About pillar cards stagger
        const aboutPillars = gsap.utils.toArray<HTMLElement>(".about-pillar-card");
        if (aboutPillars.length) {
          gsap.from(aboutPillars, {
            y: 22,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: ".home-about-pillars-grid",
              start: "top 92%",
              once: true,
            },
          });
        }

        // Tech stack cards stagger
        const techCardList = gsap.utils.toArray<HTMLElement>(".tech-card");
        if (techCardList.length) {
          gsap.from(techCardList, {
            y: 20,
            opacity: 0,
            scale: 0.94,
            duration: 0.5,
            stagger: 0.035,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: ".tech-cards",
              start: "top 90%",
              once: true,
            },
          });
        }

        // Experience stat boxes
        const expStatBoxes = gsap.utils.toArray<HTMLElement>(".exp-stat-box");
        if (expStatBoxes.length) {
          gsap.from(expStatBoxes, {
            y: 24,
            opacity: 0,
            scale: 0.95,
            duration: 0.65,
            stagger: 0.08,
            ease: "back.out(1.2)",
            clearProps: "all",
            scrollTrigger: {
              trigger: ".experience-summary-grid",
              start: "top 90%",
              once: true,
            },
          });
        }

        // Generic data-reveal elements (Bidirectional Forward & Reverse Scroll)
        gsap.utils
          .toArray<HTMLElement>(
            "[data-reveal]:not(.compact-showcase-card):not(.section-heading):not(.experience-intro):not(.tech-heading):not(.kinetic-metric-item):not(.metric-box):not(.impact-card):not(.fact-card):not(.capability-card)",
          )
          .forEach((element) => {
            gsap.from(element, {
              y: 28,
              opacity: 0,
              duration: 0.75,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                end: "bottom 8%",
                toggleActions: "play none none none",
                once: true,
              },
            });
          });

        // Home Page 4-Card Featured Projects Row: Bidirectional Scroll Stagger
        const homeCards = gsap.utils.toArray<HTMLElement>(
          ".home-project-grid .compact-showcase-card",
        );
        if (homeCards.length) {
          gsap.from(homeCards, {
            y: 32,
            opacity: 0,
            scale: 0.96,
            duration: 0.65,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: ".home-project-grid",
              start: "top 88%",
              end: "bottom 10%",
              toggleActions: "play none none none",
              once: true,
            },
          });
        }

        // Project Detail Page Row Animations ([data-case-row])
        gsap.utils
          .toArray<HTMLElement>("[data-case-row]")
          .forEach((row) => {
            gsap.from(row, {
              y: 36,
              opacity: 0,
              scale: 0.985,
              duration: 0.8,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: row,
                start: "top 91%",
                end: "bottom 9%",
                toggleActions: "play none none none",
                once: true,
              },
            });
          });

        // Project Page Uniform Screen Cards Stagger
        gsap.utils
          .toArray<HTMLElement>(".uniform-screen-card")
          .forEach((card, i) => {
            gsap.from(card, {
              y: 28,
              opacity: 0,
              scale: 0.96,
              duration: 0.65,
              delay: (i % 3) * 0.08,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: card,
                start: "top 93%",
                end: "bottom 7%",
                toggleActions: "play none none none",
                once: true,
              },
            });
          });

        // Section Scroll Animations: Headings & Intro
        const sectionHeadings = gsap.utils.toArray<HTMLElement>(
          ".section-heading, .tech-heading, .experience-intro",
        );
        sectionHeadings.forEach((heading) => {
          gsap.from(heading, {
            y: 32,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: heading,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none none",
              once: true,
            },
          });
        });

        // Kinetic Metrics Box Stagger
        const metricBoxes = gsap.utils.toArray<HTMLElement>(
          ".kinetic-metric-item, .metric-box, .impact-card",
        );
        metricBoxes.forEach((box, i) => {
          gsap.from(box, {
            y: 24,
            opacity: 0,
            scale: 0.96,
            duration: 0.65,
            delay: (i % 4) * 0.07,
            ease: "back.out(1.2)",
            clearProps: "all",
            scrollTrigger: {
              trigger: box,
              start: "top 92%",
              end: "bottom 8%",
              toggleActions: "play none none none",
              once: true,
            },
          });
        });

        // Product Loading & Staggered Showcase Card Animation
        const showcaseCards = gsap.utils.toArray<HTMLElement>(
          ".modern-showcase-card",
        );
        showcaseCards.forEach((card, i) => {
          gsap.from(card, {
            y: 40,
            opacity: 0,
            scale: 0.97,
            duration: 0.75,
            delay: (i % 3) * 0.08,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: card,
              start: "top 93%",
              end: "bottom 7%",
              toggleActions: "play none none none",
              once: true,
            },
          });
        });

        // Home About section cards stagger
        const factCards = gsap.utils.toArray<HTMLElement>(
          ".home-about-facts .fact-card",
        );
        factCards.forEach((card, i) => {
          gsap.from(card, {
            x: 32,
            opacity: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: card,
              start: "top 91%",
              end: "bottom 9%",
              toggleActions: "play none none none",
              once: true,
            },
          });
        });

        // Dynamic Morphing Orbit in Background reacting to scroll depth
        const orb1 = document.querySelector<HTMLElement>(".orb-1");
        const orb2 = document.querySelector<HTMLElement>(".orb-2");
        if (orb1 && orb2) {
          gsap.to([orb1, orb2], {
            borderRadius: "60% 40% 70% 30% / 40% 60% 30% 70%",
            rotate: 360,
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });

          gsap.to(orb1, {
            yPercent: 120,
            scale: 1.3,
            ease: "none",
            scrollTrigger: {
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
            },
          });

          gsap.to(orb2, {
            yPercent: -100,
            scale: 0.9,
            ease: "none",
            scrollTrigger: {
              start: "top top",
              end: "bottom bottom",
              scrub: 1.2,
            },
          });
        }
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

          const technologyCards =
            gsap.utils.toArray<HTMLElement>(".tech-card");
          technologyCards.forEach((card, i) => {
            gsap.from(card, {
              y: 22,
              opacity: 0,
              scale: 0.95,
              duration: 0.6,
              delay: (i % 6) * 0.04,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: card,
                start: "top 93%",
                end: "bottom 7%",
                toggleActions: "play none none none",
                once: true,
              },
            });
          });

          const capabilityCards =
            gsap.utils.toArray<HTMLElement>(".capability-card");
          capabilityCards.forEach((card, i) => {
            gsap.from(card, {
              y: 30,
              opacity: 0,
              duration: 0.7,
              delay: (i % 4) * 0.08,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
                end: "bottom 8%",
                toggleActions: "play none none none",
                once: true,
              },
            });
          });

          gsap.utils
            .toArray<HTMLElement>(".timeline > li")
            .forEach((entry) => {
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
