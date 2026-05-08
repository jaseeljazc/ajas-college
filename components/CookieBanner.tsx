"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[100]"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-[#e5e7eb] rounded-3xl p-6 shadow-2xl shadow-navy-900/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#263866]/5 flex items-center justify-center">
                <ShieldCheck size={24} className="text-[#263866]" />
              </div>
              <div className="flex-grow">
                <h4 className="text-sm font-bold text-[#111827] mb-1">Privacy & Cookies</h4>
                <p className="text-xs text-[#6b7280] leading-relaxed mb-6">
                  We use cookies to improve your experience on our portal. By continuing, you agree to our privacy policy.
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={acceptCookies}
                    className="flex-grow bg-[#263866] text-white py-2.5 rounded-xl text-xs font-bold hover:bg-[#1e40af] transition"
                  >
                    Accept All
                  </button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#4b5563] hover:bg-[#f3f4f6] transition"
                  >
                    Manage
                  </button>
                </div>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-[#9ca3af] hover:text-[#263866]"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
