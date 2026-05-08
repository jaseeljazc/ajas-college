"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bell } from "lucide-react";

export default function NoticeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenNotice = localStorage.getItem("hasSeenNotice2026");
      if (!hasSeenNotice) {
        setIsOpen(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closeNotice = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenNotice2026", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl relative"
          >
            <button 
              onClick={closeNotice}
              className="absolute top-4 right-4 text-[#9ca3af] hover:text-[#263866] transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="bg-[#263866] p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Bell size={20} className="text-blue-300" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">Important Update</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 leading-tight">Admissions Open 2026–27</h3>
              <p className="text-blue-100 text-sm leading-relaxed opacity-80">
                Join Kerala's premier minority institution. Applications are now live for all UG and PG programmes.
              </p>
            </div>

            <div className="p-8">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-[#f1f5f9]">
                  <div className="w-2 h-2 rounded-full bg-[#263866]" />
                  <p className="text-sm font-medium text-[#4b5563]">Last date for registration: May 30, 2026</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#f8fafc] border border-[#f1f5f9]">
                  <div className="w-2 h-2 rounded-full bg-[#263866]" />
                  <p className="text-sm font-medium text-[#4b5563]">Download Prospectus from the portal</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a 
                  href="/admissions" 
                  onClick={closeNotice}
                  className="bg-[#263866] text-white py-4 rounded-xl font-bold text-center hover:bg-[#1e40af] transition shadow-lg shadow-blue-900/20"
                >
                  Apply Online Now
                </a>
                <button 
                  onClick={closeNotice}
                  className="text-[#6b7280] text-sm font-medium hover:text-[#263866] transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
