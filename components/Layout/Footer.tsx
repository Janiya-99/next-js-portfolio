import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50 bg-black/30 backdrop-blur-md border-t border-white/10 text-white pt-20 pb-10 overflow-hidden">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                
                {/* 1. Brand / Intro */}
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-syne font-bold mb-6">Janith.</h2>
                    <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                        Crafting immersive digital experiences with code and creativity. 
                        Let's build something extraordinary together.
                    </p>
                    <div className="flex gap-4">
                        <SocialLink href="http://www.linkedin.com/in/%20janith-samarasinghe" icon={<Linkedin size={20} />} />
                        <SocialLink href="https://github.com/Janiya-99" icon={<Github size={20} />} />
                        <SocialLink href="https://wa.me/94701267400" icon={<span className="font-bold text-sm">WA</span>} /> 
                    </div>
                </div>

                {/* 2. Navigation */}
                <div>
                     <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-6">Navigation</h3>
                     <ul className="space-y-4">
                        <FooterLink href="#home">Home</FooterLink>
                        <FooterLink href="#about">About</FooterLink>
                        <FooterLink href="#projects">Projects</FooterLink>
                        <FooterLink href="#contact">Contact</FooterLink>
                     </ul>
                </div>

                {/* 3. Services / Contact Info */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-6">Contact</h3>
                    <ul className="space-y-4 text-gray-400">
                        <li>Kandy, Sri Lanka</li>
                        <li>janithsamaharasinghe1999@gmail.com</li>
                        <li>+94 70 126 7400</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                    © {currentYear} Janith Samarasinghe. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm text-gray-500">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                {children}
            </Link>
        </li>
    );
}
