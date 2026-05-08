"use client";

import { Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  date: string;
  category: string;
  description: string;
  imageLabel: string;
  muted?: boolean;
  imagePath?: string;
}

export default function EventCard({ title, date, category, description, imageLabel, muted = false, imagePath }: EventCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-lg transition-all duration-300 group ${muted ? "opacity-75 grayscale-[0.5]" : ""}`}
    >
      <div className="aspect-[4/3] bg-[#f3f4f6] relative flex items-center justify-center border-b border-[#e5e7eb]">
        {imagePath ? (
           <img src={imagePath} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
           <ImageIcon size={32} className="text-[#9ca3af]" />
        )}
        <p className="absolute bottom-4 text-[10px] font-medium text-[#9ca3af] bg-white/80 backdrop-blur px-3 py-1 rounded-full z-10">{imageLabel}</p>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-bold text-[#263866] bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wider">{category}</span>
          <span className="text-xs font-semibold text-[#6b7280]">{date}</span>
        </div>
        <h4 className="text-lg font-semibold text-[#111827] mb-3 group-hover:text-[#263866] transition-colors">{title}</h4>
        <p className="text-sm text-[#6b7280] leading-relaxed mb-6 flex-grow">{description}</p>
        <Link href="#" className="text-sm font-medium text-[#263866] hover:underline inline-flex items-center gap-1 mt-auto">
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}
