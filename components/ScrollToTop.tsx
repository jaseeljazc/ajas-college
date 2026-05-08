"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 md:right-24 z-[90]"
        >
          <button
            onClick={scrollToTop}
            className="group relative w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-2xl border border-[#e5e7eb] hover:border-[#263866] transition-all"
          >
            {/* Progress Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 p-1">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="2"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="#263866"
                strokeWidth="2"
                strokeDasharray="100"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
            <ChevronUp size={20} className="text-[#263866] group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
