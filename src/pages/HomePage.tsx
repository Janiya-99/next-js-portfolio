import {
  Braces,
  Workflow,
  PanelsTopLeft,
  Cloud,
  ArrowUpRight,
  MapPin,
  Mail,
  Layers3,
  Coffee,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  SiLaravel,
  SiReact,
  SiTypescript,
  SiGo,
  SiMysql,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiPhp,
  SiNginx,
} from "react-icons/si";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { ButtonLink, SectionHeading, TextLink } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { SystemSculpture } from "@/components/SystemSculpture";
import { ContactCTA } from "@/components/Footer";
import { Timeline } from "@/components/Timeline";
import { Spotlight } from "@/components/Spotlight";

const capabilities = [
  {
    icon: Braces,
    title: "Backend & APIs",
    copy: "Clear contracts, considered data models, and business logic that holds up.",
  },
  {
    icon: Workflow,
    title: "Enterprise workflows",
    copy: "Connecting inventory, finance, and operations into coherent systems.",
  },
  {
    icon: PanelsTopLeft,
    title: "Full-stack delivery",
    copy: "Bringing thoughtful interfaces and dependable services together.",
  },
  {
    icon: Cloud,
    title: "Cloud & deployment",
    copy: "Supporting the journey from local development to live applications.",
  },
];
const technologies = [
  { name: "Laravel", Icon: SiLaravel, color: "#ff443a" },
  { name: "React", Icon: SiReact, color: "#35c7ed" },
  { name: "TypeScript", Icon: SiTypescript, color: "#319ee8" },
  { name: "Go", Icon: SiGo, color: "#00b9d9" },
  { name: "Java", Icon: Coffee, color: "#e96d43" },
  { name: "MySQL", Icon: SiMysql, color: "#4b9eba" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#729fd0" },
  { name: "Docker", Icon: SiDocker, color: "#2496ed" },
  { name: "PHP", Icon: SiPhp, color: "#9d9bd7" },
  { name: "Nginx", Icon: SiNginx, color: "#72b66d" },
  { name: "Git", Icon: SiGit, color: "#f57855" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#3cc8e5" },
];

export function HomePage() {
  return (
    <>
      <section className="cinematic-hero">
        <img
          className="hero-backdrop"
          src={`${import.meta.env.BASE_URL}images/janith-hero.webp`}
          width="1672"
          height="941"
          alt="Janith Samarasinghe sitting on a wooden staircase"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="container cinematic-hero-inner">
          <div className="cinematic-copy">
            <p className="eyebrow gold-rule" data-hero-copy>
              SOFTWARE ENGINEER
            </p>
            <h1 tabIndex={-1}>
              <span data-hero-line>Building</span>
              <span data-hero-line>scalable solutions</span>
              <span data-hero-line>
                for <em>a better tomorrow.</em>
              </span>
            </h1>
            <p className="cinematic-description" data-hero-copy>
              Backend-focused Software Engineer with experience
              <br className="desktop-break" /> in ERP systems, web applications,
              and modern technologies.
              <br className="desktop-break" /> I build systems that solve
              real-world problems.
            </p>
            <div className="cinematic-actions" data-hero-copy>
              <ButtonLink href="/work">View my work</ButtonLink>
              <ButtonLink href="/about" secondary>
                More about me
              </ButtonLink>
            </div>
            <div className="hero-personal" data-hero-copy>
              <span>
                <MapPin size={16} />
                Kandy, Sri Lanka
              </span>
              <span className="personal-divider" />
              <a href={`mailto:${site.email}`} aria-label="Email Janith">
                <Mail size={19} />
              </a>
              <Link to="/contact">
                Let’s connect <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <div className="hero-handwriting" aria-hidden="true">
            Code
            <br />
            <span>Build</span>
            <br />
            <span>Improve</span>
            <br />
            <span>Repeat</span>
            <i />
          </div>
          <div className="hero-experience glass">
            <span className="experience-icon">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </span>
            <div>
              <strong>
                3<span>+</span>
              </strong>
              <p>Years of experience</p>
            </div>
          </div>
          <a
            className="hero-scroll scroll-cue"
            href="#home-about"
            aria-label="Scroll to about me"
          >
            <span />
            SCROLL TO EXPLORE
          </a>
        </div>
      </section>
      <section className="home-about" id="home-about">
        <div className="home-about-photo">
          <img
            src={`${import.meta.env.BASE_URL}images/janith-working.webp`}
            alt="Janith working thoughtfully at a laptop"
            width="1122"
            height="1402"
            loading="lazy"
          />
        </div>
        <div className="container home-about-inner">
          <div className="home-about-copy" data-reveal>
            <p className="eyebrow gold-rule">ABOUT ME</p>
            <h2>
              Passionate about
              <br />
              building scalable
              <br />
              <em>solutions.</em>
            </h2>
            <p>
              I’m Janith Samarasinghe, a Software Engineer with experience in
              backend development, ERP systems, and enterprise applications. I
              enjoy solving real-world problems through clean code, thoughtful
              architecture, and modern technologies.
            </p>
            <Link
              to="/about"
              className="personal-signature"
              aria-label="More about Janith Samarasinghe"
            >
              Janith Samarasinghe<span>JANITH SAMARASINGHE</span>
            </Link>
          </div>
          <div className="home-about-facts" data-reveal>
            <Spotlight className="fact-card">
              <span className="fact-icon">
                <Braces />
              </span>
              <div>
                <strong>Backend</strong>
                <p>Focused. Full-stack capable.</p>
              </div>
            </Spotlight>
            <Spotlight className="fact-card">
              <span className="fact-icon">
                <Layers3 />
              </span>
              <div>
                <strong>ERP & SaaS</strong>
                <p>Real business systems</p>
              </div>
            </Spotlight>
            <Spotlight className="fact-card">
              <span className="fact-icon">
                <Coffee />
              </span>
              <div>
                <strong>3+ years</strong>
                <p>Building with purpose</p>
              </div>
            </Spotlight>
          </div>
          <span className="vertical-note">ALWAYS LEARNING</span>
        </div>
      </section>
      <section className="tech-section container">
        <div className="tech-heading">
          <div>
            <p className="eyebrow gold-rule">TECH STACK</p>
            <h2>Technologies I work with</h2>
          </div>
          <TextLink href="/about#skills">View all skills</TextLink>
        </div>
        <div className="tech-cards">
          {technologies.map(({ name, Icon, color }) => (
            <div className="tech-card" key={name}>
              <Icon aria-hidden="true" style={{ color }} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="selected-work" className="section container selected-work">
        <SectionHeading
          index="01"
          label="SELECTED WORK"
          title={
            <>
              Complex problems.
              <br />
              <span className="muted-heading">Clear systems.</span>
            </>
          }
        >
          <p>
            A selection of platforms built around real business workflows and
            the people behind them.
          </p>
          <TextLink href="/work">View all work</TextLink>
        </SectionHeading>
        <div className="project-grid home-project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="expertise-section section">
        <div className="container">
          <div className="expertise-heading">
            <SectionHeading
              index="02"
              label="WHAT I BRING"
              title={
                <>
                  Built with intention.
                  <br />
                  <span className="muted-heading">From the inside out.</span>
                </>
              }
            />
            <div className="expertise-sculpture">
              <SystemSculpture />
            </div>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, copy }, index) => (
              <Spotlight className="capability-card" key={title}>
                <div data-reveal>
                  <div className="capability-top">
                    <Icon size={27} strokeWidth={1.4} />
                    <span className="mono">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </Spotlight>
            ))}
          </div>
        </div>
      </section>
      <section id="experience" className="section container experience-section">
        <div className="experience-intro" data-reveal>
          <p className="eyebrow">03 / THE JOURNEY</p>
          <h2>
            Always building.
            <br />
            <span className="muted-heading">Always learning.</span>
          </h2>
          <p>
            Hands-on experience across enterprise software, financial systems,
            and freelance product development.
          </p>
          <TextLink href="/about">More about me</TextLink>
        </div>
        <Timeline compact />
      </section>
      <div className="about-note container">
        <span className="mono">A LITTLE ABOUT THE WAY I WORK</span>
        <p>
          Understand the workflow. Model the data.
          <br />
          Build with care. Keep improving.
        </p>
        <Link
          to="/about"
          className="circle-icon"
          aria-label="Read about my engineering approach"
        >
          <ArrowRight />
        </Link>
      </div>
      <ContactCTA />
    </>
  );
}
