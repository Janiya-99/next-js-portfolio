"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [active, setActive] = useState("Home");
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto"
    >
      <nav className="flex items-center gap-2 px-2 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl shadow-lg shadow-black/10 ">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              setActive(item.name);
              const element = document.querySelector(item.href);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full",
              active === item.name
                ? "text-black"
                : "text-white/70 hover:text-white"
            )}
          >
            {active === item.name && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white rounded-full -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {item.name}
          </button>
        ))}
      </nav>
    </motion.div>
  );
}
