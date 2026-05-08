"use client";

import { FileText, Download } from "lucide-react";
import { motion } from "framer-motion";

interface DocumentRowProps {
  name: string;
  type: string;
  year?: string;
  size?: string;
  downloadUrl?: string;
}

export default function DocumentRow({ name, type, year, size, downloadUrl = "#" }: DocumentRowProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-between p-4 bg-white hover:bg-[#fafafa] transition border-b border-[#f3f4f6] last:border-0"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-[#f3f4f6] flex items-center justify-center text-[#263866]">
          <FileText size={18} />
        </div>
        <div>
          <h4 className="text-sm font-medium text-[#111827]">{name}</h4>
          <div className="flex items-center gap-3 mt-0.5">
            <span className="text-[10px] uppercase font-semibold text-[#9ca3af]">{type}</span>
            {year && <span className="text-[10px] text-[#d1d5db]">|</span>}
            {year && <span className="text-[10px] text-[#9ca3af]">{year}</span>}
            {size && <span className="text-[10px] text-[#d1d5db]">|</span>}
            {size && <span className="text-[10px] text-[#9ca3af]">{size}</span>}
          </div>
        </div>
      </div>
      <a
        href={downloadUrl}
        className="flex items-center gap-2 border border-[#e5e7eb] text-[#374151] text-xs px-3 py-1.5 rounded-lg hover:border-[#263866] hover:text-[#263866] transition font-medium"
      >
        <Download size={14} />
        <span className="hidden sm:inline">Download</span>
      </a>
    </motion.div>
  );
}
