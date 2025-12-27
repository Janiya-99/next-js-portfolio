"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, User, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-20 max-w-7xl mx-auto relative z-10">
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <span className="text-cyan-400 uppercase tracking-widest font-bold mb-4 block text-sm">Get in Touch</span>
        <h2 className="text-4xl md:text-5xl font-syne font-bold text-white mb-6">
            Let's Start a Conversation
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Fill out the form below or reach out directly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Contact Info */}
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
        >
            <ContactCard 
                icon={<Mail size={24} />}
                title="Email Us"
                value="janithsamaharasinghe1999@gmail.com"
                href="mailto:janithsamaharasinghe1999@gmail.com"
            />
            <ContactCard 
                icon={<Phone size={24} />}
                title="Call Us"
                value="+94 70 126 7400"
                href="tel:+94701267400"
            />
            <ContactCard 
                icon={<MapPin size={24} />}
                title="Location"
                value="Kandy, Sri Lanka"
                href="#"
            />
        </motion.div>

        {/* Right: Modern Form */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden group"
        >
            {/* Gradient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10 group-hover:bg-cyan-500/20 transition-all duration-700" />

            <form className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input 
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input 
                            type="email" 
                            placeholder="john@example.com" 
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Message</label>
                    <div className="relative">
                        <MessageSquare className="absolute left-4 top-6 text-gray-500" size={18} />
                        <textarea 
                            rows={4}
                            placeholder="Tell me about your project..." 
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                        />
                    </div>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transform active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
                >
                    <Send size={20} />
                    Send Message
                </button>
            </form>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href: string }) {
    return (
        <a 
            href={href}
            className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group"
        >
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
                <p className="text-white font-syne text-lg font-bold">{value}</p>
            </div>
        </a>
    )
}
