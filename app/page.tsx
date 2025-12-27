import { Scene } from "@/components/Canvas/Scene";
import { Hero } from "@/components/Sections/Hero";
import { About } from "@/components/Sections/About";
import { Skills } from "@/components/Sections/Skills";
import { Experience } from "@/components/Sections/Experience";
import { Projects } from "@/components/Sections/Projects";
import { Contact } from "@/components/Sections/Contact";
import { SectionWrapper } from "@/components/UI/SectionWrapper";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Scene />
      
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      
      <SectionWrapper>
        <About />
      </SectionWrapper>
      
      <SectionWrapper>
        <Skills />
      </SectionWrapper>
      
      <SectionWrapper>
        <Experience />
      </SectionWrapper>
      
      {/* Projects has its own scroll logic, wrapping it might break sticky positioning */}
      <Projects />
      
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
    </main>
  );
}
