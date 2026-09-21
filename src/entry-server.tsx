import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { App } from "./app/App";
export { routeMetadata } from "./app/metadata";
export { projects } from "./data/projects";
export { site } from "./data/site";

export function render(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return renderToString(
    <StaticRouter basename={base || "/"} location={`${base}${path}`}>
      <App />
    </StaticRouter>,
  );
}
