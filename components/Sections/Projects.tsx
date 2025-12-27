"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Bicycle-Rent App",
    category: "Full Stack",
    src: "https://images.unsplash.com/photo-1505705694340-019e1e335916?q=80&w=1632&auto=format&fit=crop", 
  },
  {
    title: "Medical Info System",
    category: "Java Swing",
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Japura ICT App",
    category: "Mobile App",
    src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "ML Sales Dashboard",
    category: "Data Science",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

export function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} id="projects" className="relative h-[300vh] mt-20 backdrop-blur-sm">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]) }} className="flex gap-10 pl-10 md:pl-20">
          <div className="flex flex-col justify-center min-w-[50vw] md:min-w-[30vw]">
             <h2 className="text-6xl md:text-8xl font-syne font-bold text-white leading-none">
                Selected <br /> <span className="text-gray-500">Works</span>
             </h2>
             <p className="mt-6 text-gray-400 max-w-sm text-lg">
                A showcase of my latest projects, ranging from web applications to data science dashboards.
             </p>
          </div>
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Card({ project }: { project: any }) {
  return (
    <div className="relative h-[60vh] w-[80vw] md:w-[50vw] overflow-hidden rounded-3xl bg-gray-900 group">
      <div 
        className="absolute inset-0 opacity-20 bg-white/5 group-hover:opacity-10 transition-opacity duration-500" 
      />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
         <div className="flex justify-between items-start">
            <span className="px-4 py-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-md text-white/80 text-sm font-medium">
                {project.category}
            </span>
         </div>
         <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             <h3 className="text-3xl md:text-5xl font-bold text-white font-syne mb-2">{project.title}</h3>
         </div>
      </div>

      <motion.div 
        className="absolute inset-0 z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          fill
          src={project.src}
          alt={project.title}
          className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
        />
      </motion.div>
    </div>
  );
}
