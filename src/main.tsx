import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@fontsource/ibm-plex-mono/latin-400.css";
import "./styles/fonts.css";
import "./styles/globals.css";
import "./styles/dark-theme.css";
import { App } from "./app/App";

const element = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter
      basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}
    >
      <App />
    </BrowserRouter>
  </StrictMode>
);
if (element.querySelector("main")) hydrateRoot(element, app);
else createRoot(element).render(app);
