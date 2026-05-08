"use client";

import { Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface NewsCardProps {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  imageLabel: string;
  imagePath?: string;
}

export default function NewsCard({ title, date, category, excerpt, imageLabel, imagePath }: NewsCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden group hover:shadow-md transition-all duration-300 h-full flex flex-col"
    >
      <div className="aspect-video bg-[#f3f4f6] relative flex items-center justify-center border-b border-[#e5e7eb]">
        {imagePath ? (
           <img src={imagePath} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
           <ImageIcon size={32} className="text-[#9ca3af]" />
        )}
        <p className="absolute bottom-4 text-[10px] font-medium text-[#9ca3af] bg-white/80 backdrop-blur px-3 py-1 rounded-full z-10">{imageLabel}</p>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-semibold text-[#263866] uppercase tracking-widest">{category}</span>
          <span className="w-1 h-1 rounded-full bg-[#d1d5db]"></span>
          <span className="text-xs text-[#9ca3af]">{date}</span>
        </div>
        <h4 className="text-lg font-semibold text-[#111827] mb-3 group-hover:text-[#263866] transition-colors leading-snug">
          {title}
        </h4>
        <p className="text-sm text-[#6b7280] leading-relaxed line-clamp-3 mb-6 flex-grow">
          {excerpt}
        </p>
        <Link href="#" className="text-xs font-semibold text-[#111827] hover:text-[#263866] transition-colors inline-flex items-center gap-1 mt-auto">
          Read More →
        </Link>
      </div>
    </motion.div>
  );
}
