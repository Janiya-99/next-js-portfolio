"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Globe, 
  Layout, 
  Server, 
  Smartphone, 
  Terminal, 
  Cpu,
  Layers,
  GitBranch,
  Figma,
  Container
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    title: "Backend Engineering",
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Laravel", "Java", "Python", "GraphQL", "REST APIs"],
  },
  {
    title: "Database & Cloud",
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL", "PostgreSQL", "Firebase", "AWS", "Docker", "Redis"],
  },
  {
    title: "Mobile & Tools",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["React Native", "Flutter", "Git", "Figma", "Linux", "CI/CD"],
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-40 px-4 md:px-20 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <span className="text-white/60 uppercase tracking-widest font-bold mb-4 block">Expertise</span>
        <h2 className="text-4xl md:text-6xl font-syne font-bold text-white mb-6">
          Technical Arsenal
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A curated set of technologies I use to build high-performance digital solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all group hover:-translate-y-2"
          >
            <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 border border-white/10`}>
              {category.icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 font-syne">{category.title}</h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 text-gray-300 border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
