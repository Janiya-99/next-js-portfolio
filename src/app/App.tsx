import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { HomePage } from "@/pages/HomePage";
import { WorkPage } from "@/pages/WorkPage";
import { ProjectPage } from "@/pages/ProjectPage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { RouteManager } from "./RouteManager";

export function App() {
  return (
    <>
      <div
        className="page-scroll-progress"
        data-scroll-progress
        aria-hidden="true"
      />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <RouteManager />
      <MotionProvider />
    </>
  );
}
