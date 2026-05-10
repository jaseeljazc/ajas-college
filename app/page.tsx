"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  X,
  FileText,
  Image as ImageIcon,
  User as UserIcon,
  Briefcase,
  Users,
  ClipboardCheck,
  Rocket,
  Heart,
  BookOpen,
  MessageSquare,
  Award,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CampusParallaxGallery from "@/components/CampusParallaxGallery";
import Link from "next/link";
import PremiumCard from "@/components/PremiumCard";

/* Orchestrated stagger — anchors only, not everything */
const orchestrate: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Mohammed Azeer",
      course: "MA Islamic Finance",
      batch: "2016-18",
      quote:
        "The academic environment at AJAS provided me with a strong foundation in Islamic Finance. The dedicated faculty and comprehensive curriculum played a crucial role in shaping my career.",
    },
    {
      name: "Mohammed Shabeel K.",
      course: "BBA Finance",
      batch: "2016-19",
      quote:
        "My three years at AJAS were transformative. The college not only focuses on academic rigor but also encourages participation in extracurricular activities, building overall confidence.",
    },
    {
      name: "SAFWA K",
      course: "BSc Psychology",
      batch: "1st Rank 2016-19",
      quote:
        "Achieving the 1st rank was possible because of the continuous support from my professors. The psychology department labs and resources are excellent.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="flex flex-col relative">
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform">
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* ── HERO ─────────────────────────────── */}
      <section className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-6rem)] flex flex-col lg:grid lg:grid-cols-2 relative overflow-hidden">
        {/* Left — Content */}
        <div className="flex-1 flex items-center px-6 md:px-16 lg:px-24 pt-12 pb-16 md:py-32 lg:py-0 relative z-10">
          {/* Mobile Background Image & Overlay */}
          <div className="absolute inset-0 lg:hidden z-[-1] bg-[url('/images/hero.png')] bg-cover bg-center" />
          <div className="absolute inset-0 lg:hidden z-[-1] bg-white/90" />

          <motion.div
            variants={orchestrate}
            initial="hidden"
            animate="show"
            className="max-w-2xl w-full"
          >
            <motion.p
              variants={rise}
              className="label mb-4 md:mb-8"
              style={{ color: "var(--c-accent)" }}
            >
              Est. 2010 — University of Calicut
            </motion.p>

            <motion.h1 variants={rise} className="mb-4 md:mb-8">
              Al Jamia Arts &<br />
              <span style={{ color: "var(--c-primary)" }}>Science College</span>
            </motion.h1>

            <motion.p
              variants={rise}
              className="text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-lg"
              style={{ color: "var(--c-text-secondary)" }}
            >
              Perinthalmanna, Malappuram, Kerala — a premier minority
              institution committed to academic excellence and holistic
              development.
            </motion.p>

            <motion.div
              variants={rise}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <Link
                href="/admissions"
                className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 text-center"
                style={{
                  background: "var(--c-primary)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                Apply for Admission
              </Link>
              <Link
                href="/academics"
                className="group w-full sm:w-auto px-8 py-4 text-sm font-semibold flex justify-center items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-center"
                style={{
                  color: "var(--c-text-primary)",
                  border: "2px solid var(--c-border)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                Explore Programmes
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Stats as typography, not tiles */}
            <motion.div
              variants={rise}
              className="grid grid-cols-2 lg:flex gap-x-12 gap-y-6 lg:gap-12 mt-10 lg:mt-16 pt-5"
              style={{ borderTop: "1px solid var(--c-border)" }}
            >
              {[
                { num: "B++", label: "NAAC Grade" },
                { num: "2000+", label: "Students" },
                { num: "80+", label: "Faculty" },
                { num: "14", label: "Programmes" },
              ].map((s, i) => (
                <div key={i} className={`items-center gap-3 ${i === 2 ? "flex lg:hidden" : "flex"}`}>
                  <span
                    className="text-3xl font-light"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--c-primary)",
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-[10px] leading-tight"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--c-text-tertiary)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginTop: "4px",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right — Image, sharp editorial (Hidden on mobile as it's now a background) */}
        <div className="relative min-h-[50vh] lg:min-h-0 lg:h-full w-full hidden lg:flex items-center p-4 lg:pr-12 lg:pl-0 lg:mt-2">
          <div className="w-full h-[92%] relative rounded-2xl lg:rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="/images/hero.png"
              alt="Al Jamia College Campus"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Admission badge — sharp */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
            className="absolute bottom-10 left-6 lg:bottom-16 lg:-left-6 px-6 py-4 flex items-center gap-4 z-20 shadow-2xl"
            style={{
              background: "var(--c-surface-raised)",
              border: "1px solid var(--c-border)",
              borderRadius: "var(--radius-md)",
            }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{ background: "var(--c-accent)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--c-primary)" }}
            >
              Admissions Open 2026–27
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────── */}
      <div
        className="overflow-hidden py-4"
        style={{
          borderTop: "1px solid var(--c-border)",
          borderBottom: "1px solid var(--c-border)",
        }}
      >
        <div className="animate-marquee">
          {[...Array(2)].map((_, rep) => (
            <span
              key={rep}
              className="inline-flex items-center gap-8 lg:gap-16 mr-16"
            >
              {[
                "Admissions Open 2026-27",
                "Convocation 2026 Held Successfully",
                "University Results Published",
                "ISO 9001:2015 Certified",
              ].map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-3 text-sm"
                  style={{ color: "var(--c-text-secondary)" }}
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: "var(--c-accent)" }}
                  />
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────── */}
      <section
        id="about"
        className="py-12 md:py-16 lg:py-20 relative"
        style={{ background: "var(--c-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left — content takes more space */}
            <ScrollReveal className="lg:col-span-7">
              <div>
                <p className="label mb-6">About the College</p>
                <hr className="divider-accent mb-10" />

                <h2 className="mb-10">
                  Where knowledge meets character, since 2010
                </h2>

                <div
                  className="space-y-6 text-base leading-[1.8]"
                  style={{
                    color: "var(--c-text-secondary)",
                    maxWidth: "560px",
                  }}
                >
                  <p>
                    Established in 2010, Al Jamia Arts & Science College is a
                    premier minority institution of higher learning in Kerala.
                    We are committed to academic excellence, ethical values, and
                    holistic development.
                  </p>
                  <p>
                    Our campus is a vibrant community with state-of-the-art
                    infrastructure and dedicated faculty who nurture future
                    leaders making meaningful contributions to society.
                  </p>
                </div>

                {/* Facts as editorial data, not icon cards */}
                <div
                  className="grid grid-cols-2 gap-x-12 gap-y-6 mt-14 pt-14"
                  style={{ borderTop: "1px solid var(--c-border)" }}
                >
                  {[
                    { label: "Affiliation", value: "University of Calicut" },
                    { label: "Status", value: "Self Financing" },
                    { label: "Recognition", value: "UGC 2(f)" },
                    { label: "Certification", value: "ISO 9001:2015" },
                  ].map((f, i) => (
                    <div key={i} className="flex flex-col">
                      <span
                        className="text-[11px] uppercase tracking-[0.1em] mb-1"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--c-text-tertiary)",
                        }}
                      >
                        {f.label}
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--c-text-primary)" }}
                      >
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 mt-12 text-sm font-semibold transition-all duration-300"
                  style={{ color: "var(--c-primary)" }}
                >
                  About the institution
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </ScrollReveal>

            {/* Right — Principal & Quick Facts */}
            <div className="lg:col-span-5">
              <div className="flex flex-col gap-6">
                {/* Principal */}
                <ScrollReveal delay={0}>
                  <PremiumCard className="p-8">
                  <div className="flex items-start gap-5">
                    <div
                      className="w-16 h-16 rounded-full overflow-hidden shrink-0"
                      style={{ border: "2px solid rgba(255,255,255,0.1)" }}
                    >
                      <img
                        src="/images/principle-image.jpeg"
                        alt="Principal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-base text-white">
                        Dr. C.K. Abdul Rabbi Nistar
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{
                          fontFamily: "var(--font-mono)",
                          color: "var(--c-accent)",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        Principal
                      </p>
                    </div>
                  </div>
                  <hr
                    className="my-6"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                  />
                  <p
                    className="text-sm leading-relaxed italic text-white/90"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      lineHeight: 1.7,
                    }}
                  >
                    "At AJAS, we strive to provide an environment that fosters
                    intellectual curiosity and social responsibility."
                  </p>
                  </PremiumCard>
                </ScrollReveal>

                {/* Quick Facts */}
                <ScrollReveal delay={0.08}>
                  <PremiumCard className="p-8">
                  <p
                    className="text-xs font-medium uppercase tracking-[0.12em] mb-8 pb-4 relative"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.09)",
                      fontFamily: "var(--font-mono)",
                      opacity: 0.5,
                    }}
                  >
                    Quick Facts
                  </p>
                  <div className="space-y-5 relative">
                    {[
                      { label: "Established", value: "2010" },
                      { label: "Affiliation", value: "University of Calicut" },
                      { label: "Accreditation", value: "In Progress" },
                      { label: "Recognition", value: "UGC 2(f)" },
                    ].map((fact, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center text-sm"
                        style={{
                          borderBottom:
                            i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                          paddingBottom: i < 3 ? "1.25rem" : 0,
                        }}
                      >
                        <span style={{ opacity: 0.45 }}>{fact.label}</span>
                        <span
                          className="font-semibold"
                          style={{ letterSpacing: "0.01em" }}
                        >
                          {fact.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  </PremiumCard>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMMES ────────────────────────── */}
      <section
        id="academics"
        className="py-12 md:py-16 lg:py-20 relative"
        style={{ background: "var(--c-surface-raised)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
            <ScrollReveal className="lg:col-span-8">
              <p className="label mb-6">Academics</p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem,4vw,3rem)",
                }}
              >
                14 programmes across
                <br />
                arts, science & commerce
              </h2>
            </ScrollReveal>
            <div className="lg:col-span-4 flex items-end justify-end">
              <Link
                href="/academics"
                className="group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                style={{ color: "var(--c-primary)" }}
              >
                Full curriculum{" "}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Tab header */}
          <div
            className="flex gap-0 mb-8"
            style={{ borderBottom: "2px solid var(--c-border)" }}
          >
            {["Undergraduate — 11", "Postgraduate — 3"].map((tab, i) => (
              <button
                key={i}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 relative"
                style={{
                  fontFamily: "var(--font-mono)",
                  color:
                    i === 0 ? "var(--c-primary)" : "var(--c-text-tertiary)",
                  borderBottom: i === 0 ? "2px solid var(--c-primary)" : "none",
                  marginBottom: "-2px",
                  background: "none",
                  border: "none",
                  borderBottom:
                    i === 0
                      ? "2px solid var(--c-primary)"
                      : "2px solid transparent",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* UG Programme Cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[
                {
                  name: "B.Com (Honours)",
                  dept: "Commerce",
                  slug: "b-com-honours",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <rect
                        x="6"
                        y="8"
                        width="16"
                        height="20"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M10 13h8M10 17h8M10 21h5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="26"
                        cy="24"
                        r="5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M24.5 24h3M26 22.5v3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  name: "BBA",
                  dept: "Business Administration",
                  slug: "bba",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path
                        d="M7 26V18l11-9 11 9v8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <rect
                        x="14"
                        y="20"
                        width="8"
                        height="6"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M11 14v-3h14v3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  ),
                },
                {
                  name: "BCA",
                  dept: "Computer Applications",
                  slug: "bca",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <rect
                        x="6"
                        y="9"
                        width="24"
                        height="15"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M13 27h10M18 24v3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 15l3 3-3 3M17 21h5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  name: "BSc. Microbiology",
                  dept: "Life Sciences",
                  slug: "bsc-microbiology",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <circle
                        cx="18"
                        cy="17"
                        r="7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle
                        cx="18"
                        cy="17"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M18 8V6M18 28v-2M8 17H6M30 17h-2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 24v4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  name: "BA Islamic Studies",
                  dept: "Islamic Studies",
                  slug: "ba-islamic-studies",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path
                        d="M18 7C13 7 9 11 9 16c0 3.5 1.8 6.5 4.5 8.2L18 29l4.5-4.8C25.2 22.5 27 19.5 27 16c0-5-4-9-9-9z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 16h6M18 13v6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  name: "BA English",
                  dept: "English",
                  slug: "ba-english",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path
                        d="M10 8h11l5 5v15H10V8z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 8v5h5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M14 17h8M14 21h6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M14 13h4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  name: "BSc. Geography",
                  dept: "Geography",
                  slug: "bsc-geography",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <circle
                        cx="18"
                        cy="18"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M8 18h20M18 8c-3 3-3 14 0 20M18 8c3 3 3 14 0 20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  name: "BSc. Psychology",
                  dept: "Psychology",
                  slug: "bsc-psychology",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path
                        d="M18 8c-5 0-9 4-9 9 0 3 1.5 5.5 3.8 7L14 28h8l1.2-4c2.3-1.5 3.8-4 3.8-7 0-5-4-9-9-9z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 28h6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 13v2M16 15c0 1.1.9 2 2 2s2-.9 2-2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  name: "BSc. Food Technology",
                  dept: "Life Sciences",
                  slug: "bsc-food-technology",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path
                        d="M12 8v6c0 2.2 1.8 4 4 4h4c2.2 0 4-1.8 4-4V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M18 18v10M14 28h8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M14 8v4M18 8v4M22 8v4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  name: "BSc. Computer Science",
                  dept: "Computer Science",
                  slug: "bsc-computer-science",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <rect
                        x="8"
                        y="10"
                        width="20"
                        height="13"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M14 27h8M18 23v4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M13 16.5l2.5 2.5-2.5 2.5M17 19h5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  name: "BSc. Artificial Intelligence",
                  dept: "AI & Data Science",
                  slug: "bsc-artificial-intelligence",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <circle
                        cx="18"
                        cy="18"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle
                        cx="9"
                        cy="12"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle
                        cx="27"
                        cy="12"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle
                        cx="9"
                        cy="24"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <circle
                        cx="27"
                        cy="24"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                      <path
                        d="M11.2 13.5L15 16M20.8 13.8L24.8 11.5M11.2 22.5L15 20M20.8 22.2L24.8 24.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
              ].map((prog, i) => (
                <ScrollReveal 
                  key={i} 
                  delay={(i % 4) * 0.08}
                  className="flex-[1_1_100%] sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33.333%-1rem)] xl:flex-[0_0_calc(25%-1rem)] flex"
                >
                  <Link
                    href={`/academics/${prog.slug}`}
                    className="group relative flex flex-row md:flex-col flex-1 items-center md:items-start gap-2 py-3 px-5 md:p-6 transition-all duration-300 overflow-hidden border border-[var(--c-primary)] shadow-lg shadow-blue-900/20 group-hover:border-transparent group-hover:shadow-2xl min-h-[90px] md:min-h-[130px]"
                    style={{
                      background:
                        "linear-gradient(145deg, var(--c-primary, #1a3a6b) 0%, #0f2d5c 40%, #162650 70%, #0d1e3d 100%)",
                      borderRadius: "var(--radius-lg)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: "var(--c-surface)",
                        borderRadius: "var(--radius-lg)",
                      }}
                    />

                    <div className="relative z-10 w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl transition-colors duration-300 bg-white/10 group-hover:bg-[var(--c-surface-raised)] text-white group-hover:text-[var(--c-primary)]">
                      <div className="transition-colors duration-300">
                        {prog.icon}
                      </div>
                    </div>

                    <span
                      className="hidden md:block absolute top-6 right-6 text-[10px] tabular-nums transition-colors duration-300 text-white/40 group-hover:text-[var(--c-text-tertiary)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10 flex-1 min-w-0 md:mt-0.5">
                      <p className="text-sm font-semibold leading-snug mb-0.5 transition-colors duration-300 text-white group-hover:text-[var(--c-text-primary)]">
                        {prog.name}
                      </p>
                      <p className="text-xs transition-colors duration-300 text-[var(--c-accent)] group-hover:text-[var(--c-text-tertiary)]">
                        {prog.dept}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={14}
                      className="relative md:absolute md:bottom-6 md:right-6 z-10 opacity-40 group-hover:opacity-100 transition-all duration-200 text-white group-hover:text-[var(--c-primary)] flex-shrink-0"
                    />
                  </Link>
                </ScrollReveal>
              ))}
            </div>

          {/* PG Section */}
          <div className="mt-10 mb-2">
              <span
                className="text-xs font-semibold uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--c-text-tertiary)",
                }}
              >
                Postgraduate — 3 Programmes
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {[
                {
                  name: "MA Islamic Finance",
                  dept: "Islamic Finance",
                  slug: "ma-islamic-finance",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path
                        d="M9 26V18l9-8 9 8v8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M15 26v-6h6v6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M13 12V9h10v3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M18 18v2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  name: "MSc. Psychology",
                  dept: "Psychology",
                  slug: "msc-psychology",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path
                        d="M18 7c-5.5 0-10 4.5-10 10 0 3.5 1.8 6.6 4.5 8.4L13 29h10l.5-3.6C26.2 23.6 28 20.5 28 17c0-5.5-4.5-10-10-10z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 29h6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M15 17c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  ),
                },
                {
                  name: "MA Arabic",
                  dept: "Arabic",
                  slug: "ma-arabic",
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                      <path
                        d="M8 24c2-2 4-3 6-2s3 3 6 3 5-2 8-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M8 18c2-2 4-3 6-2s3 3 6 3 5-2 8-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M14 12h2M20 12h2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 9v5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
              ].map((prog, i) => (
                <ScrollReveal 
                  key={i} 
                  delay={(i % 3) * 0.08}
                  className="flex-[1_1_100%] sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33.333%-1rem)] flex"
                >
                  <Link
                    href={`/academics/${prog.slug}`}
                    className="group relative flex flex-row md:flex-col flex-1 items-center md:items-start gap-2 py-3 px-5 md:p-6 transition-all duration-300 overflow-hidden border border-[var(--c-primary)] shadow-lg shadow-blue-900/20 group-hover:border-transparent group-hover:shadow-2xl min-h-[90px] md:min-h-[130px]"
                    style={{
                      background:
                        "linear-gradient(145deg, var(--c-primary, #1a3a6b) 0%, #0f2d5c 40%, #162650 70%, #0d1e3d 100%)",
                      borderRadius: "var(--radius-lg)",
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: "var(--c-surface)",
                        borderRadius: "var(--radius-lg)",
                      }}
                    />

                    <div className="relative z-10 w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl transition-colors duration-300 bg-white/10 group-hover:bg-[var(--c-surface-raised)] text-white group-hover:text-[var(--c-primary)]">
                      <div className="transition-colors duration-300">
                        {prog.icon}
                      </div>
                    </div>

                    <span
                      className="hidden md:block absolute top-6 right-6 text-[10px] tabular-nums transition-colors duration-300 text-white/40 group-hover:text-[var(--c-text-tertiary)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10 flex-1 min-w-0 md:mt-0.5">
                      <p className="text-sm font-semibold leading-snug mb-0.5 transition-colors duration-300 text-white group-hover:text-[var(--c-text-primary)]">
                        {prog.name}
                      </p>
                      <p className="text-xs transition-colors duration-300 text-[var(--c-accent)] group-hover:text-[var(--c-text-tertiary)]">
                        {prog.dept}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={14}
                      className="relative md:absolute md:bottom-6 md:right-6 z-10 opacity-40 group-hover:opacity-100 transition-all duration-200 text-white group-hover:text-[var(--c-primary)] flex-shrink-0"
                    />
                  </Link>
                </ScrollReveal>
              ))}
            </div>

          <ScrollReveal delay={0.2} className="mt-10">
            <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
              <img
                src="/images/classroom.png"
                alt="Classroom"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, var(--c-primary) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <div className="relative z-10">
                  <p
                    className="text-white text-2xl md:text-3xl font-semibold mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Life at Al Jamia
                  </p>
                  <Link
                    href="/infrastructure"
                    className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-2"
                  >
                    Explore our campus <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* ── NEWS & EVENTS ─────────────────────── */}
      <section
        id="events"
        className="py-12 md:py-16 lg:py-20 relative overflow-hidden bg-ink text-white"
        style={{ background: "var(--color-ink-gradient)" }}
      >
        {/* Ambient background glow */}
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--c-primary-rgb, 26,58,107),0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translate(-50%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--c-accent-rgb, 200,160,60),0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <span
                  className="w-5 h-px"
                  style={{ background: "var(--c-accent)" }}
                />
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--c-accent)",
                  }}
                >
                  Campus Life
                </p>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem,4vw,3rem)",
                  color: "#fff",
                  lineHeight: 1.15,
                }}
              >
                News &{" "}
                <span
                // style={{
                //   color: "var(--c-primary, #3a6bc4)",
                //   WebkitTextStroke: "1px rgba(255,255,255,0.1)",
                // }}
                >
                  Events
                </span>
              </h2>
            </div>
            <Link
              href="/news"
              className="group self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "100px",
                color: "rgba(255,255,255,0.6)",
                fontFamily: "var(--font-mono)",
              }}
            >
              All updates{" "}
              <ArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Main layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* ── Featured hero ── */}
            <ScrollReveal className="lg:col-span-7">
              <Link
                href="#"
                className="group block relative overflow-hidden h-full min-h-[440px]"
                style={{ borderRadius: "20px" }}
              >
                <img
                  src="/images/graduation_kerala.png"
                  alt="Convocation 2026"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Layered gradients */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 20%, rgba(5,10,25,0.6) 60%, rgba(5,10,25,0.97) 100%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(5,10,25,0.5) 0%, transparent 60%)",
                  }}
                />

                {/* Top badge */}
                <div
                  className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "100px",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: "var(--c-accent)" }}
                  />
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Upcoming · May 2, 2026
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3
                        className="text-3xl md:text-4xl font-semibold text-white mb-3 leading-tight"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        Convocation
                        <br />
                        2026
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 group-hover:text-white transition-colors">
                        View details <ArrowRight size={11} />
                      </span>
                    </div>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <ArrowUpRight size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            {/* ── Right column ── */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Upcoming Events */}
              <ScrollReveal delay={0.1} className="flex-1">
                <div
                  className="h-full flex flex-col overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    className="px-6 py-4 flex items-center justify-between"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.12em]"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--c-accent)",
                      }}
                    >
                      Upcoming Events
                    </span>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.4)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      4 events
                    </span>
                  </div>

                  <div className="flex-1">
                    {[
                      {
                        month: "MAY",
                        day: "15",
                        title: "Tech-Quest 2026: Annual IT Fest",
                        tag: "Technology",
                      },
                      {
                        month: "APR",
                        day: "22",
                        title: "World Earth Day",
                        tag: "Environment",
                      },
                      {
                        month: "APR",
                        day: "08",
                        title: "Graduation Ceremony 2026",
                        tag: "Ceremony",
                      },
                      {
                        month: "FEB",
                        day: "03",
                        title: "BIOCODEZ",
                        tag: "Science",
                      },
                    ].map((ev, i, arr) => (
                      <Link
                        key={i}
                        href="#"
                        className="group/item flex items-center gap-4 px-6 py-4 transition-all duration-200"
                        style={{
                          borderBottom:
                            i < arr.length - 1
                              ? "1px solid rgba(255,255,255,0.05)"
                              : "none",
                        }}
                      >
                        {/* Date block */}
                        <div
                          className="w-12 shrink-0 text-center py-2 px-1 rounded-xl"
                          style={{ background: "rgba(255,255,255,0.05)" }}
                        >
                          <p
                            className="text-[9px] uppercase tracking-widest font-semibold"
                            style={{
                              fontFamily: "var(--font-mono)",
                              color: "var(--c-accent)",
                            }}
                          >
                            {ev.month}
                          </p>
                          <p
                            className="text-xl font-light text-white leading-tight"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {ev.day}
                          </p>
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white/90 group-hover/item:text-white transition-colors leading-snug truncate">
                            {ev.title}
                          </p>
                          <span
                            className="text-[10px] font-medium px-1.5 py-0.5 rounded mt-1 inline-block"
                            style={{
                              background: "rgba(255,255,255,0.06)",
                              color: "rgba(255,255,255,0.4)",
                              fontFamily: "var(--font-mono)",
                            }}
                          >
                            {ev.tag}
                          </span>
                        </div>

                        <ArrowUpRight
                          size={13}
                          className="opacity-0 group-hover/item:opacity-60 transition-all shrink-0 text-white"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* ── News strip ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
            {[
              {
                date: "Apr 22, 2026",
                title: "Earth Day celebrations foster environmental awareness",
                desc: "AJAS Nature Club organized a mega plantation drive and awareness seminar to promote sustainable living.",
                img: "/images/activities.png",
                latest: true,
              },
              {
                date: "Apr 8, 2026",
                title: "AJAS Graduation Ceremony honours top achievers",
                desc: "A momentous occasion as students from various departments were awarded degrees by distinguished guests.",
                img: "/images/graduation_kerala.png",
              },
              {
                date: "Apr 6, 2026",
                title: "LAUREATUS 2026: Honouring Achievers",
                desc: "An annual award ceremony recognizing outstanding academic performance and leadership contributions.",
                img: "/images/seminar_new.png",
              },
            ].map((news, i) => (
              <ScrollReveal key={i} delay={i * 0.08} className="h-full">
                <Link
                  href="#"
                  className="group flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                  }}
                >
                  {/* Image */}
                  <div
                    className="relative h-40 overflow-hidden"
                    style={{ borderRadius: "16px 16px 0 0" }}
                  >
                    <img
                      src={news.img}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 40%, rgba(5,10,25,0.6) 100%)",
                      }}
                    />
                    {news.latest && (
                      <div
                        className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1"
                        style={{
                          background: "rgba(255,255,255,0.92)",
                          borderRadius: "100px",
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span
                          className="text-[9px] font-bold uppercase tracking-wide"
                          style={{ color: "#0a0e1a" }}
                        >
                          Latest
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-5">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.1em] mb-2.5 block"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--c-accent)",
                      }}
                    >
                      {news.date}
                    </span>
                    <h5
                      className="text-sm font-semibold leading-snug mb-2 text-white/90 group-hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {news.title}
                    </h5>
                    <p
                      className="text-xs leading-relaxed mt-auto pt-3"
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {news.desc}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTICES & DOWNLOADS ────────────────── */}
      <section
        className="py-12 md:py-16 lg:py-20"
        style={{ background: "var(--c-surface-raised)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Notices */}
            <ScrollReveal className="h-full">
              <PremiumCard className="p-6 sm:p-10 h-full">
                <p
                  className="text-xs font-medium uppercase tracking-[0.12em] mb-2 relative z-10"
                  style={{
                    fontFamily: "var(--font-mono)",
                    opacity: 0.8,
                    color: "var(--c-accent)",
                  }}
                >
                  Notices
                </p>
                <h2
                  className="mb-10 relative z-10"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    color: "var(--c-text-inverse)",
                  }}
                >
                  Notifications
                </h2>
                <div className="flex flex-col gap-4 relative z-10">
                  {[
                    {
                      title: "Admission Open for FYUG Programmes 2026-27",
                      date: "May 5, 2026",
                      isNew: true,
                    },
                    {
                      title: "Orientation Programme for New Batches: June 10",
                      date: "May 3, 2026",
                      isNew: true,
                    },
                    {
                      title: "Counselling Desk Reviews Schedule Released",
                      date: "May 1, 2026",
                      isNew: true,
                    },
                    {
                      title: "AJAS Prospectus 2026-27 Available",
                      date: "Apr 28, 2026",
                      isNew: true,
                    },
                    {
                      title: "University Examination Notification May 2026",
                      date: "Apr 15, 2026",
                      isNew: false,
                    },
                  ].map((n, i) => (
                    <div
                      key={i}
                      className="pl-4 py-3 transition-colors duration-200"
                      style={{
                        borderLeft: `2px solid ${n.isNew ? "var(--c-accent)" : "rgba(255,255,255,0.15)"}`,
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-sm font-medium leading-relaxed">
                          {n.title}
                        </p>
                        {n.isNew && (
                          <span
                            className="text-[10px] font-medium px-1.5 py-0.5 shrink-0 uppercase"
                            style={{
                              color: "var(--c-accent)",
                              border: "1px solid var(--c-accent)",
                              borderRadius: "var(--radius-sm)",
                            }}
                          >
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-xs mt-1" style={{ opacity: 0.4 }}>
                        {n.date}
                      </p>
                    </div>
                  ))}
                </div>
              </PremiumCard>
            </ScrollReveal>

            {/* Downloads */}
            <ScrollReveal delay={0.2} className="h-full">
              <div
                className="p-6 sm:p-10 h-full flex flex-col border transition-all duration-300 hover:shadow-xl"
                style={{
                  background: "var(--c-surface-raised)",
                  borderColor: "var(--c-border)",
                  borderRadius: "var(--radius-lg)",
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.18em] mb-3"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--c-primary)",
                  }}
                >
                  Downloads
                </p>
                <h2
                  className="mb-10"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    color: "var(--c-text-primary)",
                    lineHeight: 1.2,
                  }}
                >
                  Documents
                </h2>

                <div className="flex-1">
                  {[
                    { name: "AJAS Prospectus 2026-27", year: "2026" },
                    { name: "Fee Details Structure", year: "2026" },
                    { name: "NIRF Report", year: "2025" },
                    { name: "AISHE Report", year: "2023-24" },
                    { name: "SSR Document", year: "Current" },
                    { name: "Strategic Plan", year: "2020-30" },
                  ].map((doc, i, arr) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-4 transition-colors duration-200"
                      style={{
                        borderBottom:
                          i !== arr.length - 1
                            ? "1px solid var(--c-border-subtle)"
                            : "none",
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            background: "var(--c-primary)",
                            color: "white",
                          }}
                        >
                          <FileText size={14} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-[var(--c-text-primary)]">
                            {doc.name}
                          </span>
                          <span
                            className="text-[10px] font-medium"
                            style={{
                              color: "var(--c-text-tertiary)",
                              fontFamily: "var(--font-mono)",
                            }}
                          >
                            Released {doc.year}
                          </span>
                        </div>
                      </div>
                      <button
                        className="group/btn flex items-center gap-2 text-[10px] px-4 py-2 font-bold uppercase tracking-widest transition-all duration-300"
                        style={{
                          background: "var(--c-primary)",
                          color: "white",
                          borderRadius: "100px",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        PDF
                        <ArrowRight
                          size={10}
                          className="transition-transform group-hover/btn:translate-x-1"
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CAMPUS GALLERY ───────────────────── */}
      <CampusParallaxGallery />

      {/* ── RECOGNITIONS ───────────────────────── */}
      <section
        className="py-12 md:py-16 lg:py-20"
        style={{
          background: "var(--c-surface-raised)",
          borderTop: "1px solid var(--c-border)",
          borderBottom: "1px solid var(--c-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="w-full">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-16">
              {/* Primary: University */}
              {[
                {
                  name: "University of Calicut",
                  logo: "/logos/University-Logo.jpg",
                },
              ].map((org) => (
                <div
                  key={org.name}
                  className="flex flex-col items-center gap-3"
                >
                  <div
                    className="w-24 h-24 bg-white rounded-full overflow-hidden flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
                    style={{ border: "1px solid var(--c-border)" }}
                  >
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span
                    className="text-[10px] font-medium uppercase tracking-[0.15em]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {org.name}
                  </span>
                </div>
              ))}

              {/* Secondary: Other recognitions */}
              <div className="grid grid-cols-2 lg:flex lg:items-center gap-8 md:gap-12 lg:gap-16">
                {[
                  { name: "UGC", logo: "/logos/UGC-Logo.jpg" },
                  { name: "NAAC", logo: "/logos/Naac-logo.jpg" },
                  { name: "ISO Certified", logo: "/logos/ISO-Logo.jpg" },
                  { name: "AICTE", logo: "/logos/AICTE-Logo.jpg" },
                ].map((org) => (
                  <div
                    key={org.name}
                    className="flex flex-col items-center gap-3"
                  >
                    <div
                      className="w-20 h-20 bg-white rounded-full overflow-hidden flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
                      style={{ border: "1px solid var(--c-border)" }}
                    >
                      <img
                        src={org.logo}
                        alt={org.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span
                      className="text-[10px] font-medium uppercase tracking-[0.15em]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {org.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── INTEGRATED PORTAL ──────────────────── */}
      <section
        className="py-12 md:py-16 lg:py-20"
        style={{
          background: "var(--c-surface-raised)",
          borderTop: "1px solid var(--c-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="label mb-6">Services</p>
              <h2 className="mb-6">Everything in one place</h2>
              <p
                className="text-base mx-auto max-w-xl"
                style={{ color: "var(--c-text-secondary)" }}
              >
                Access dedicated portals for placements, alumni networks, and
                campus services with a unified interface.
              </p>
            </div>
          </ScrollReveal>

          {/* The mapping of portals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Placement Cell",
                  desc: "Comprehensive career guidance, skill development workshops, and premium job opportunities with leading recruiters.",
                  icon: Briefcase,
                  href: "/placement",
                  actions: ["Job Listings", "Mock Interviews", "Recruiters"],
                },
                {
                  name: "Alumni",
                  desc: "Stay connected with our global network of graduates and participate in institutional growth through a dedicated portal.",
                  icon: Users,
                  href: "/alumni",
                  actions: ["Alumni Meet", "Directory", "Success Stories"],
                },
                {
                  name: "IQAC",
                  desc: "Ensuring internal quality assurance through regular monitoring and documentation in line with NAAC accreditation standards.",
                  icon: ClipboardCheck,
                  href: "/iqac",
                  actions: ["AQAR Reports", "Minutes", "Quality Policy"],
                },
                {
                  name: "Incubation",
                  desc: "A platform dedicated to fostering innovation, providing mentorship, and supporting startup ideas through expert guidance.",
                  icon: Rocket,
                  href: "/incubation",
                  actions: ["Funding", "Mentorship", "Innovation Lab"],
                },
                {
                  name: "PTA",
                  desc: "Connecting parents and teachers to ensure the holistic development and academic progress of every student on campus.",
                  icon: Heart,
                  href: "/pta",
                  actions: ["Schedule", "Executive Body", "Initiatives"],
                },
                {
                  name: "Consultancy",
                  desc: "Bridging academic expertise with industry needs through specialized consultancy projects and professional services.",
                  icon: BookOpen,
                  href: "/consultancy",
                  actions: ["Service List", "Expertise", "Projects"],
                },
                {
                  name: "Feedback",
                  desc: "A transparent channel for students and parents to share valuable insights and suggestions for continuous institutional improvement.",
                  icon: MessageSquare,
                  href: "/feedback",
                  actions: ["Student Feedback", "Parent Surveys", "Reviews"],
                },
                {
                  name: "ABC Portal",
                  desc: "Seamlessly manage and transfer your academic credits through the national Academic Bank of Credits integrated portal.",
                  icon: Award,
                  href: "#",
                  actions: ["ID Generation", "Credit Transfer", "DigiLocker"],
                },
              ].map((module, i) => {
                const Icon = module.icon;
                return (
                  <ScrollReveal key={i} delay={(i % 4) * 0.08}>
                    <Link
                      href={module.href}
                      className="group relative block w-full h-[280px] overflow-hidden"
                    style={{
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--c-border)",
                    }}
                  >
                    <div
                      className="p-8 h-full flex flex-col transition-all duration-500 group-hover:opacity-0"
                      style={{ background: "var(--c-surface)" }}
                    >
                      <div
                        className="w-12 h-12 flex items-center justify-center mb-6"
                        style={{
                          background: "var(--c-surface-raised)",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--c-border)",
                          color: "var(--c-primary)",
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      <h4
                        className="text-lg font-bold mb-2"
                        style={{ color: "var(--c-text-primary)" }}
                      >
                        {module.name}
                      </h4>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--c-text-secondary)" }}
                      >
                        {module.desc}
                      </p>

                      <div
                        className="mt-auto pt-6 flex items-center justify-between"
                        style={{
                          borderTop: "1px solid var(--c-border-subtle)",
                        }}
                      >
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest"
                          style={{ color: "var(--c-primary)" }}
                        >
                          Access Portal
                        </span>
                        <ArrowRight
                          size={14}
                          style={{ color: "var(--c-primary)" }}
                        />
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-center overflow-hidden"
                      style={{
                        background:
                          "linear-gradient(145deg, var(--c-primary, #1a3a6b) 0%, #0f2d5c 40%, #162650 70%, #0d1e3d 100%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.09)",
                      }}
                    >
                      {/* Decorative orbs */}
                      <div
                        className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                      />
                      <div
                        className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full pointer-events-none"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      />
                      {/* Top shimmer line */}
                      <div
                        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
                        }}
                      />

                      <h4
                        className="font-bold mb-6 flex items-center gap-2 relative z-10"
                        style={{ color: "#fff", fontSize: "1.125rem" }}
                      >
                        <Icon size={20} style={{ color: "var(--c-accent)" }} />{" "}
                        {module.name}
                      </h4>
                      <ul className="space-y-4">
                        {module.actions.map((act, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-3 text-[11px] text-white/80 font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                            style={{ transitionDelay: `${j * 100}ms` }}
                          >
                            <div
                              className="w-1 h-1 rounded-full"
                              style={{ background: "var(--c-accent)" }}
                            />
                            {act}
                          </li>
                        ))}
                      </ul>
                      <div
                        className="mt-8 pt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
                        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
                      >
                        Click to open
                      </div>
                    </div>
                  </Link>
                  </ScrollReveal>
                );
              })}
            </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────── */}
      <section
        className="py-12 md:py-16 lg:py-20 relative overflow-hidden"
        style={{
          background: "var(--c-primary)",
          color: "var(--c-text-inverse)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <ScrollReveal>
            <p
              className="text-xs font-medium uppercase tracking-[0.2em] mb-12"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--c-accent)",
              }}
            >
              Student Voices
            </p>

            <div className="max-w-3xl mx-auto">
              <span
                className="text-6xl font-serif opacity-20 block mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                "
              </span>
              <p
                className="text-2xl md:text-3xl leading-relaxed mb-12"
                style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
              >
                At AJAS, I found an environment that doesn't just teach
                subjects, but cultivates the mind and character. It prepared me
                for the world with confidence.
              </p>
              <div className="flex flex-col items-center">
                <div
                  className="w-16 h-16 rounded-full mb-4 overflow-hidden flex items-center justify-center bg-white/10"
                  style={{ border: "2px solid var(--c-accent)" }}
                >
                  <UserIcon size={32} className="text-white/40" />
                </div>
                <p className="font-semibold text-base">Safwan Ahmed</p>
                <p
                  className="text-xs uppercase tracking-widest mt-1 opacity-50"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  BCA Graduate, Batch 2023
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CLUBS ──────────────────────────────── */}
      <section
        className="py-12 md:py-16 lg:py-20"
        style={{ background: "var(--c-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="mb-16">
              <p className="label mb-6">Beyond Academics</p>
              <h2>Clubs & Forums</h2>
            </div>
          </ScrollReveal>

          <div className="mb-16">
              {[
                { name: "Arts Club", tag: "Creative" },
                { name: "Health Club", tag: "Wellness" },
                { name: "Nature Club", tag: "Environment" },
                { name: "Music Club", tag: "Creative" },
                { name: "Literary Club", tag: "Academics" },
                { name: "Women's Cell", tag: "Community" },
                { name: "Coding Club", tag: "Technology" },
                { name: "Film Club", tag: "Creative" },
                { name: "Sports Club", tag: "Athletics" },
                { name: "NSS", tag: "Social" },
                { name: "IEDC", tag: "Entrepreneurship" },
                { name: "Debate Club", tag: "Academics" },
              ].map((club, i, arr) => (
                <ScrollReveal key={i}>
                  <div
                    className={`group flex items-center border-t ${i === arr.length - 1 ? 'border-b' : ''} transition-colors duration-200 hover:bg-[var(--c-surface-raised)] overflow-hidden`}
                    style={{ borderColor: "var(--c-border)" }}
                  >
                    {/* Hover accent bar */}
                  <div className="w-0 group-hover:w-[3px] self-stretch bg-[var(--c-primary)] transition-all duration-200 flex-shrink-0" />

                  {/* Index number */}
                  <span
                    className="text-[11px] font-medium tracking-wide opacity-40 group-hover:opacity-100 transition-opacity duration-200 w-12 text-right px-4 flex-shrink-0"
                    style={{ color: "var(--c-text-secondary)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Club name */}
                  <span
                    className="flex-1 py-4 text-[15px] font-medium tracking-tight transition-colors duration-200"
                    style={{ color: "var(--c-text-secondary)" }}
                  >
                    {club.name}
                  </span>

                  {/* Category tag */}
                  <span
                    className="text-[11px] font-medium uppercase tracking-widest px-3 py-1 mr-5 flex-shrink-0"
                    style={{
                      border: "1px solid var(--c-border)",
                      borderRadius: "99px",
                      color: "var(--c-text-secondary)",
                    }}
                  >
                    {club.tag}
                  </span>

                  {/* Arrow */}
                  <span
                    className="mr-5 text-sm opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0"
                    style={{ color: "var(--c-text-secondary)" }}
                  >
                    →
                  </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          <ScrollReveal delay={0.2}>
            <div
              className="relative h-[400px] overflow-hidden"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              <img
                src="/images/activities.png"
                alt="Student Activities"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,17,32,0.7) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-0 left-0 p-10">
                <h3
                  className="text-white font-medium"
                  style={{ color: "#FFFFFF" }}
                >
                  Nurturing talent & leadership
                </h3>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────── */}
      <section
        className="py-12 md:py-16 lg:py-20"
        style={{ background: "var(--c-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <PremiumCard
              id="admissions-cta"
              className="p-12 md:p-24 text-center"
              shadowSize="2xl"
              orbPrimarySize="w-[400px] h-[400px]"
              orbSecondarySize="w-[500px] h-[500px]"
            >
              <div className="relative z-10 max-w-3xl mx-auto">
                <p
                  className="text-xs font-medium uppercase tracking-[0.3em] mb-6"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--c-accent)",
                  }}
                >
                  Admissions 2026-27
                </p>
                <h2 className="mb-8 text-white">
                  Ready to start your future at AJAS?
                </h2>
                <p className="text-base md:text-lg mb-10 text-white/80 max-w-xl mx-auto leading-relaxed">
                  Applications are now open for all undergraduate and
                  postgraduate programmes. Join a community of excellence.
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/admissions"
                    className="px-10 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 shadow-xl"
                    style={{
                      background: "var(--c-accent)",
                      borderRadius: "var(--radius-md)",
                      color: "var(--c-ink)",
                    }}
                  >
                    Apply Online Now
                  </Link>
                </div>
              </div>
            </PremiumCard>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
