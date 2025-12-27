"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-40 px-4 md:px-20 max-w-5xl mx-auto relative z-10 text-center">
       <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-white/60 uppercase tracking-widest font-bold mb-4 block">Contact</span>
        <h2 className="text-4xl md:text-6xl font-syne font-bold text-white mb-8">
            Let's Work Together
        </h2>
        <p className="text-gray-400 mb-16 text-xl max-w-2xl mx-auto">
            Have a project in mind or want to discuss a new idea? I'm always open to new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <a href="mailto:janithsamaharasinghe1999@gmail.com" className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 transition-transform">
                    <Mail size={28} />
                </div>
                <h3 className="text-white font-bold mb-2">Email</h3>
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">janithsamaharasinghe1999@gmail.com</span>
            </a>

            <a href="tel:+94701267400" className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                </div>
                <h3 className="text-white font-bold mb-2">Phone</h3>
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">+94 70 126 7400</span>
            </a>

            <div className="group flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-2">
                 <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white border border-white/10 group-hover:scale-110 transition-transform">
                    <MapPin size={28} />
                </div>
                <h3 className="text-white font-bold mb-2">Location</h3>
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors">Kandy, Sri Lanka</span>
            </div>
        </div>

        <div className="flex justify-center space-x-8">
            <a
                href="https://www.linkedin.com/in/janith-chathuranga-647564202"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform"
                aria-label="LinkedIn"
            >
                <Linkedin size={32} />
            </a>
            <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform"
                  aria-label="GitHub"
            >
                <Github size={32} />
            </a>
        </div>
      </motion.div>

      <footer className="mt-24 pt-8 border-t border-white/5 text-gray-600 text-sm flex justify-between items-center">
        <p>© {new Date().getFullYear()} Janith Samarasinghe.</p>
        <p>Built with Next.js & Framer Motion</p>
      </footer>
    </section>
  );
}
