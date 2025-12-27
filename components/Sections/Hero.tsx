"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between relative overflow-hidden px-6 md:px-20 pt-20">
      {/* Background Elements - Removed color blobs as requested */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {/* We can add subtle white gradients if needed, but keeping it clean for now */}
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-left md:w-1/2"
      >
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
        >
             <div className="h-[2px] w-12 bg-white/50" />
             <span className="text-xl md:text-2xl font-medium text-gray-300">Hello, I'm Janith</span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold font-syne text-white leading-tight mb-8">
          <span className="block">Software</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Developer
          </span>
        </h1>

        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-white hover:bg-gray-200 text-black font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-white/10">
            Get a project?
          </button>
          <a href="/resume.pdf" download="Janith_Samarasinghe_Resume.pdf" className="px-8 py-4 border border-white/20 hover:border-white text-white font-medium rounded-lg transition-all hover:bg-white/5 flex items-center justify-center">
            My resume
          </a>
        </div>
      </motion.div>

      {/* Image Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
      >
        <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
          {/* Circular Glow/Background */}
          <div className="absolute inset-0 rounded-full border border-white/20 scale-110" />
          <div className="absolute inset-0 rounded-full border border-white/10 scale-125" />
          
          <div className="absolute inset-4 rounded-full bg-white/5 blur-3xl opacity-20" />
          
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
             <Image
              src="/images/profile.jpg"
              alt="Janith Samarasinghe"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Elements (Decorative) */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-20 h-20 border-t-2 border-r-2 border-white/20 rounded-tr-3xl"
          />
           <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-5 -left-5 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-3xl"
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
}
