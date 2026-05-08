"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
import { motion } from "framer-motion";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  breadcrumbs: Breadcrumb[];
  label: string;
  heading: string;
  subtext?: string;
  showImage?: boolean;
  bgImage?: string;
}

export default function PageHero({ breadcrumbs, label, heading, subtext, showImage = false, bgImage }: PageHeroProps) {
  return (
    <section className="bg-[#f8fafc] border-b border-[#f1f5f9] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`w-full ${showImage ? "lg:w-1/2" : "w-full"}`}
          >
            <nav className="flex items-center gap-2 text-xs text-[#9ca3af] mb-4">
              <Link href="/" className="hover:text-[#263866] transition">Home</Link>
              {breadcrumbs.map((crumb, i) => (
                <div key={i} className="flex items-center gap-2">
                  <ChevronRight size={12} />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-[#263866] transition">{crumb.label}</Link>
                  ) : (
                    <span className="text-[#111827]">{crumb.label}</span>
                  )}
                </div>
              ))}
            </nav>
            <p className="label mb-3" style={{ color: 'var(--c-primary)' }}>{label}</p>
            <h1 className="mb-6">{heading}</h1>
            {subtext && <p className="text-[#6b7280] text-lg leading-relaxed max-w-2xl">{subtext}</p>}
          </motion.div>
          {showImage && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              {bgImage ? (
                <div className="aspect-[5/3] w-full rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-xl">
                   <img src={bgImage} alt={heading} className="w-full h-full object-cover" />
                </div>
              ) : (
                <ImagePlaceholder label={`${heading} Hero`} size="800×480px" />
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
