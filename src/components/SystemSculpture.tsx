"use client";

import {
  Component,
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Box, Database, Braces } from "lucide-react";

const Scene = lazy(() => import("./SystemScene"));

class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export function SystemSculpture() {
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let nearby = false;
    const media = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const update = () => {
      const canvas = document.createElement("canvas");
      const context =
        media.matches && nearby ? canvas.getContext("webgl2") : null;
      setEnabled(!!context);
      if (context) context.getExtension("WEBGL_lose_context")?.loseContext();
    };
    const observer = new IntersectionObserver(
      (entries) => {
        nearby = entries[0].isIntersecting;
        update();
      },
      { rootMargin: "200px" },
    );
    if (wrapper.current) observer.observe(wrapper.current);
    media.addEventListener("change", update);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", update);
    };
  }, []);

  return (
    <div
      ref={wrapper}
      className="system-sculpture"
      aria-hidden="true"
      data-parallax
    >
      <div className="sculpture-grid" />
      <div className="sculpture-orbit orbit-one" />
      <div className="sculpture-orbit orbit-two" />
      <div
        className={`sculpture-fallback ${ready && enabled ? "scene-ready" : ""}`}
      >
        <div className="sculpture-ring ring-silver" />
        <div className="sculpture-ring ring-blue" />
        <div className="sculpture-sphere" />
      </div>
      {enabled && (
        <SceneBoundary>
          <Suspense fallback={null}>
            <Scene onReady={() => setReady(true)} />
          </Suspense>
        </SceneBoundary>
      )}
      <span className="sculpture-cross cross-one">+</span>
      <span className="sculpture-cross cross-two">+</span>
      <div className="system-label label-api glass">
        <Braces size={19} />
        <span>
          <small>CONNECTED BY DESIGN</small>Clean interfaces
        </span>
      </div>
      <div className="system-label label-data glass">
        <Database size={19} />
        <span>
          <small>STRUCTURED WITH CARE</small>Reliable foundations
        </span>
      </div>
      <div className="sculpture-caption">
        <Box size={14} />
        <span>SYSTEMS, IN HARMONY</span>
        <span className="caption-line" />
        001
      </div>
    </div>
  );
}
