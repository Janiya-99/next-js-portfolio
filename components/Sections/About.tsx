"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-40 px-4 md:px-20 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col items-center text-center">
        {/* Bio */}
        <motion.div 
            className="md:w-3/4 lg:w-2/3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
          <span className="text-white/60 uppercase tracking-widest font-bold mb-4 block">About Me</span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold text-white mb-8 leading-tight">
            Designing & Building <br/> Digital Experiences.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a passionate Software Engineer based in Sri Lanka, specializing in building robust, scalable web and mobile applications. 
            With a strong foundation in <span className="text-white">Full Stack Development</span>, I love solving complex problems and turning ideas into reality.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
             Whether it's a sleek frontend interface or a powerful backend architecture, I bring dedication and attention to detail to every project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
