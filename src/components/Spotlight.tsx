import { useRef, type ReactNode } from "react";

// Pointer-local spotlight treatment inspired by React Bits' SpotlightCard.
// DOM content remains fully readable with keyboard, touch, and reduced motion.
export function Spotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={`spotlight ${className}`}
      onPointerMove={(event) => {
        if (
          event.pointerType !== "mouse" ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
          return;
        const bounds = event.currentTarget.getBoundingClientRect();
        ref.current?.style.setProperty(
          "--pointer-x",
          `${event.clientX - bounds.left}px`,
        );
        ref.current?.style.setProperty(
          "--pointer-y",
          `${event.clientY - bounds.top}px`,
        );
      }}
    >
      {children}
    </div>
  );
}
