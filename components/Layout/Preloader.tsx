"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for window load
    const timer = setTimeout(() => {
        setLoading(false);
    }, 2500); // 2.5s simulated load

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} 
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
             {/* Abstract 3D-like Pulse Animation */}
             <div className="relative w-40 h-40">
                <motion.div
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="absolute inset-0 border-4 border-white/80 rounded-full blur-sm"
                />
                <motion.div
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        rotate: [360, 180, 0],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 0.2
                    }}
                    className="absolute inset-4 border-4 border-white rounded-full blur-sm"
                />
                
                {/* Center Text */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <span className="text-2xl font-bold font-syne text-white tracking-widest">
                        LOADING
                    </span>
                </motion.div>
             </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
