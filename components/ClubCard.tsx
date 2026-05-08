"use client";

import { motion } from "framer-motion";

interface ClubCardProps {
  name: string;
  advisor: string;
  description: string;
  activities: string[];
}

export default function ClubCard({ name, advisor, description, activities }: ClubCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-[#e5e7eb] rounded-xl p-6 hover:shadow-md transition-all duration-300 flex flex-col h-full"
    >
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-[#111827] mb-1">{name}</h4>
        <p className="text-xs text-[#263866] font-medium">Faculty Advisor: {advisor}</p>
      </div>
      <p className="text-sm text-[#6b7280] leading-relaxed mb-6 flex-grow">{description}</p>
      <div className="pt-4 border-t border-[#f3f4f6]">
        <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">Key Activities</p>
        <ul className="grid grid-cols-1 gap-2">
          {activities.map((activity, i) => (
            <li key={i} className="text-xs text-[#4b5563] flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#263866]"></span>
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
