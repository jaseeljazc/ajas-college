"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

interface StatsGridProps {
  stats: Stat[];
}

function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 divide-x divide-[#f3f4f6]">
      {stats.map((stat, i) => (
        <div key={i} className="text-center px-4">
          <div className="text-4xl font-bold text-[#111827]">
            <CountUp value={stat.value} suffix={stat.suffix} />
          </div>
          <div className="text-sm text-[#6b7280] mt-2 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
