import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ label, heading, subtext, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`mb-8 md:mb-12 ${align === "center" ? "text-center mx-auto" : ""}`}>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className={`flex items-center gap-3 mb-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <div className="w-[2px] h-4 bg-[#263866]" />
        <span className="text-xs uppercase tracking-[0.2em] text-[#263866] font-bold">
          {label}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1 }}
        className="mb-0"
      >
        {heading}
      </motion.h2>
      {subtext && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2 }}
          className={`text-[#6b7280] mt-4 text-base leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
        >
          {subtext}
        </motion.p>
      )}
    </div>
  );
}
