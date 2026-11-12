import { Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";
import { SiteLoader } from "@/components/SiteLoader";
import { PageTransition } from "@/components/PageTransition";
import { HomePage } from "@/pages/HomePage";
import { WorkPage } from "@/pages/WorkPage";
import { ProjectPage } from "@/pages/ProjectPage";
import { AboutPage } from "@/pages/AboutPage";
import { ExperiencePage } from "@/pages/ExperiencePage";
import { ContactPage } from "@/pages/ContactPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { RouteManager } from "./RouteManager";

export function App() {
  return (
    <>
      {/* Bearrow-Style Motion Logo Animation Site Loader */}
      <SiteLoader />

      {/* Dynamic Morphing Background Ambient Orbs */}
      <div className="ambient-morph-orb orb-1" aria-hidden="true" />
      <div className="ambient-morph-orb orb-2" aria-hidden="true" />

      <div
        className="page-scroll-progress"
        data-scroll-progress
        aria-hidden="true"
      />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<ProjectPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <RouteManager />
      <MotionProvider />
    </>
  );
}
