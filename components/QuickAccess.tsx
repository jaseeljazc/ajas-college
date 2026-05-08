"use client";

import { Briefcase, Users, ClipboardCheck, GraduationCap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function QuickAccess() {
  const items = [
    { icon: Briefcase, label: "Placement", href: "/placement" },
    { icon: Users, label: "Alumni", href: "/alumni" },
    { icon: ClipboardCheck, label: "IQAC", href: "/iqac" },
    { icon: GraduationCap, label: "Admissions", href: "/admissions" },
  ];

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-1 pr-1">
      <div className="bg-white border border-[#e5e7eb] rounded-l-2xl shadow-xl flex flex-col p-1">
        {items.map((item, i) => (
          <Link key={i} href={item.href} className="group relative">
            <div className="w-12 h-12 flex items-center justify-center text-[#4b5563] hover:text-[#263866] hover:bg-[#f9fafb] rounded-xl transition-all duration-300">
               <item.icon size={20} />
            </div>
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#111827] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
               {item.label}
               <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#111827] rotate-45"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
