import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: loadEnv(mode, process.cwd(), "VITE_").VITE_BASE_PATH || "/",
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  ssr: { noExternal: ["gsap", "@gsap/react"] },
  build: { chunkSizeWarningLimit: 650 },
}));
