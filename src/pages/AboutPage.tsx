import { Link } from "react-router-dom";
import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { ContactCTA } from "@/components/Footer";
import { Timeline } from "@/components/Timeline";
import { SectionHeading } from "@/components/ui";
import { skills } from "@/data/experience";

const approach = [
  {
    title: "Understand the workflow.",
    text: "Start with the business process, the people involved, and the connections that the software needs to support.",
    slug: "pharmaceutical-distribution-erp",
    link: "See the ERP project",
  },
  {
    title: "Model the data carefully.",
    text: "Give business rules a clear structure through considered relationships, validation, and access controls.",
    slug: "saas-microfinance-platform",
    link: "Explore the microfinance platform",
  },
  {
    title: "Build clear interfaces.",
    text: "Connect applications and their services with purposeful APIs and maintainable backend logic.",
    slug: "bicycle-rental-backend",
    link: "Explore the bicycle backend",
  },
  {
    title: "Test, ship, and support.",
    text: "Carry the work beyond implementation, with testing, deployment support, and attention to the live application.",
    slug: "restaurant-ticketing-platform",
    link: "See the restaurant application",
  },
];

export function AboutPage() {
  return (
    <>
      <section className="page-intro container about-intro">
        <p className="eyebrow" data-hero-copy>
          A LITTLE ABOUT ME
        </p>
        <h1 tabIndex={-1} data-hero-line>
          I design the logic
          <br />
          <span className="accent-text">behind the experience.</span>
        </h1>
        <div className="about-story">
          <figure className="portrait" data-reveal>
            <img
              src={`${import.meta.env.BASE_URL}images/janith-portrait.webp`}
              alt="Janith Samarasinghe seated in a blue-lit studio"
              width="1122"
              height="1402"
              fetchPriority="high"
            />
            <figcaption>
              <span>JANITH SAMARASINGHE</span>
              <MapPin size={14} /> KANDY, LK
            </figcaption>
          </figure>
          <div className="about-story-copy" data-reveal>
            <p className="eyebrow">
              <span className="accent-dot" /> ENGINEER. PROBLEM SOLVER. ALWAYS
              CURIOUS.
            </p>
            <h2>
              Thoughtful systems.
              <br />A human perspective.
            </h2>
            <p>
              I’m Janith Samarasinghe, a software engineer based in Kandy, Sri
              Lanka. My work spans enterprise applications, ERP platforms,
              microfinance systems, backend APIs, and full-stack web
              development.
            </p>
            <p>
              I focus on translating complicated business processes into
              maintainable software. That means understanding the workflow,
              caring about the data, and making the pieces work well together.
            </p>
            <div className="about-signature">
              Janith<span>.</span>
            </div>
            <span className="mono">BUILDING WITH INTENT, EVERY DAY.</span>
          </div>
        </div>
      </section>
      <section className="section approach-section">
        <div className="container">
          <SectionHeading
            index="01"
            label="MY APPROACH"
            title={
              <>
                Good engineering
                <br />
                <span className="muted-heading">
                  starts with understanding.
                </span>
              </>
            }
          />
          <div className="approach-grid">
            {approach.map((item, i) => (
              <div data-reveal key={item.title}>
                <span className="mono approach-number">0{i + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to={`/work/${item.slug}`} className="text-link">
                  {item.link}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          index="02"
          label="EXPERIENCE"
          title={
            <>
              The work along
              <br />
              <span className="muted-heading">the way.</span>
            </>
          }
        >
          <p>
            Full-time engineering and freelance collaborations. The freelance
            role runs alongside my other work.
          </p>
        </SectionHeading>
        <Timeline />
      </section>
      <section id="skills" className="section skills-section">
        <div className="container">
          <SectionHeading
            index="03"
            label="THE TOOLKIT"
            title={
              <>
                The right tools.
                <br />
                <span className="muted-heading">A solid foundation.</span>
              </>
            }
          />
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-group" data-reveal key={group.title}>
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section container education">
        <p className="eyebrow">04 / EDUCATION & LEARNING</p>
        <div>
          <GraduationCap size={32} />
          <h2>
            Physics, ICT,
            <br />
            and a curious mind.
          </h2>
          <h3>BSc in Physics and ICT</h3>
          <p>University of Sri Jayewardenepura · 2020–2023</p>
          <div className="certifications">
            <p>Certificate in Computer Science</p>
            <p>Advanced Certificate in English Language — IBA Campus</p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
