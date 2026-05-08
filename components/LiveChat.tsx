"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User } from "lucide-react";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-6 right-6 z-[100] hidden md:block">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 bg-white rounded-3xl shadow-2xl border border-[#e5e7eb] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#263866] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <User size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold">AJAS Admissions</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-blue-200">Online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="h-80 p-4 bg-[#f8fafc] overflow-y-auto space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-[#263866]/10 shrink-0 flex items-center justify-center">
                   <User size={12} className="text-[#263866]" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-[#4b5563] leading-relaxed">
                  Welcome to Al Jamia! How can we help you with your admission process today?
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-[#f1f5f9] flex gap-2">
              <input 
                type="text" 
                placeholder="Type your question..." 
                className="flex-grow text-xs bg-[#f8fafc] rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#263866]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="w-10 h-10 bg-[#263866] text-white rounded-xl flex items-center justify-center hover:bg-[#1e40af] transition">
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#263866] text-white rounded-2xl shadow-2xl flex items-center justify-center hover:shadow-blue-900/40 transition-all group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full" />
      </motion.button>
    </div>
  );
}
