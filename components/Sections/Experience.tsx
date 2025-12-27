"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Vital One (Pvt) Ltd",
    role: "Associate Software Engineer",
    period: "December 2024 – August 2025",
    description: [
      "Assisted in the development and maintenance of web applications using Laravel.",
      "Collaborated with the team to design and implement databases in MySQL and PostgreSQL.",
      "Gained hands-on experience with Docker for containerization.",
    ],
  },
  {
    company: "Vital One (Pvt) Ltd",
    role: "Trainee Software Engineer",
    period: "September 2023 – December 2024",
    description: [
      "Participated in code reviews, debugging, and testing.",
      "Worked closely with senior engineers to enhance understanding of software development best practices.",
    ],
  },
  {
    company: "Pixandco (Pvt) Ltd",
    role: "Software Engineer (Freelance)",
    period: "Freelance",
    description: [
      "Developing custom applications and system integration.",
    ],
  },
];

export function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="experience" ref={containerRef} className="py-40 px-4 md:px-20 max-w-7xl mx-auto relative z-10">
      <motion.h2
        className="text-4xl md:text-6xl font-syne font-bold text-white mb-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="space-y-12 border-l border-white/10 pl-8 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: index * 0.15 }}
            className="relative"
          >
             <span className="absolute -left-[41px] top-6 w-5 h-5 bg-black border-2 border-white/60 rounded-full" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white hover:text-gray-300 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-lg text-gray-400">{exp.company}</p>
              </div>
              <span className="text-sm font-mono text-gray-500 mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                {exp.period}
              </span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
