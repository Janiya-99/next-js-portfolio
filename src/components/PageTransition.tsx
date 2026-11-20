import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <div className="page-transition-wrapper">
      <div className="page-transition-content is-active">{children}</div>
    </div>
  );
}

