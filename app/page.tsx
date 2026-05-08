"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, X, FileText, Image as ImageIcon, User as UserIcon, Briefcase, Users, ClipboardCheck, Rocket, Heart, BookOpen, MessageSquare, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

/* Orchestrated stagger — anchors only, not everything */
const orchestrate = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
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
      <section className="min-h-screen flex flex-col lg:grid lg:grid-cols-2 relative overflow-hidden">
        {/* Left — Content */}
        <div className="flex-1 flex items-center px-6 md:px-16 lg:px-24 py-24 lg:py-0 relative z-10">
          <motion.div variants={orchestrate} initial="hidden" animate="show" className="max-w-2xl w-full">

            <motion.p variants={rise} className="label mb-8" style={{ color: 'var(--c-accent)' }}>
              Est. 2010 — University of Calicut
            </motion.p>

            <motion.h1 variants={rise} style={{ fontFamily: 'var(--font-display)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
              className="text-[clamp(2.5rem,6vw,5rem)] mb-8"
            >
              Al Jamia Arts &<br />
              <span style={{ color: 'var(--c-primary)' }}>Science College</span>
            </motion.h1>

            <motion.p variants={rise} className="text-lg leading-relaxed mb-12 max-w-lg" style={{ color: 'var(--c-text-secondary)' }}>
              Perinthalmanna, Malappuram, Kerala — a premier minority institution committed to academic excellence and holistic development.
            </motion.p>

            <motion.div variants={rise} className="flex flex-col sm:flex-row gap-4 w-full">
              <Link href="/admissions"
                className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 text-center"
                style={{ background: 'var(--c-primary)', borderRadius: 'var(--radius-md)' }}
              >
                Apply for Admission
              </Link>
              <Link href="/academics"
                className="group w-full sm:w-auto px-8 py-4 text-sm font-semibold flex justify-center items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-center"
                style={{ color: 'var(--c-text-primary)', border: '1px solid var(--c-border)', borderRadius: 'var(--radius-md)' }}
              >
                Explore Programmes
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Stats as typography, not tiles */}
            <motion.div variants={rise} className="flex gap-12 mt-16 pt-12" style={{ borderTop: '1px solid var(--c-border)' }}>
              {[
                { num: "2000+", label: "Students" },
                { num: "14", label: "Programmes" },
                { num: "80+", label: "Faculty" },
              ].map((s, i) => (
                <div key={i}>
                  <span className="text-3xl font-light" style={{ fontFamily: 'var(--font-display)', color: 'var(--c-primary)' }}>{s.num}</span>
                  <span className="block text-xs mt-1" style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-text-tertiary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right — Image, sharp editorial */}
        <div className="relative min-h-[50vh] lg:min-h-0 lg:h-full w-full">
          <div className="absolute inset-0 overflow-hidden">
            <img src="/images/hero.png" alt="Al Jamia College Campus" className="w-full h-full object-cover" />
          </div>

          {/* Admission badge — sharp */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 px-6 py-4 flex items-center gap-4 z-20"
            style={{ background: 'var(--c-surface-raised)', border: '1px solid var(--c-border)', borderRadius: '0' }}
          >
            <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: 'var(--c-accent)' }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--c-primary)' }}>Admissions Open 2026–27</span>
          </motion.div>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────── */}
      <div className="overflow-hidden py-4" style={{ borderTop: '1px solid var(--c-border)', borderBottom: '1px solid var(--c-border)' }}>
        <div className="animate-marquee">
          {[...Array(2)].map((_, rep) => (
            <span key={rep} className="inline-flex items-center gap-16 mr-16">
              {["Admissions Open 2026-27", "Convocation 2026 Held Successfully", "University Results Published", "ISO 9001:2015 Certified"].map((t, i) => (
                <span key={i} className="inline-flex items-center gap-3 text-sm" style={{ color: 'var(--c-text-secondary)' }}>
                  <span className="w-1 h-1 rounded-full" style={{ background: 'var(--c-accent)' }} />
                  {t}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────── */}
      <section id="about" className="py-24 lg:py-32 relative" style={{ background: 'var(--c-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left — content takes more space */}
            <ScrollReveal className="lg:col-span-7">
              <div>
                <p className="label mb-6">About the College</p>
                <hr className="divider-accent mb-10" />

                <h2 className="mb-10" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>
                  Where knowledge meets character, since 2010
                </h2>

                <div className="space-y-6 text-base leading-[1.8]" style={{ color: 'var(--c-text-secondary)', maxWidth: '560px' }}>
                  <p>
                    Established in 2010, Al Jamia Arts & Science College is a premier minority institution of higher learning in Kerala. We are committed to academic excellence, ethical values, and holistic development.
                  </p>
                  <p>
                    Our campus is a vibrant community with state-of-the-art infrastructure and dedicated faculty who nurture future leaders making meaningful contributions to society.
                  </p>
                </div>

                {/* Facts as editorial data, not icon cards */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-6 mt-14 pt-14" style={{ borderTop: '1px solid var(--c-border)' }}>
                  {[
                    { label: "Affiliation", value: "University of Calicut" },
                    { label: "Status", value: "Self Financing" },
                    { label: "Recognition", value: "UGC 2(f)" },
                    { label: "Certification", value: "ISO 9001:2015" },
                  ].map((f, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-[0.1em] mb-1" style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-text-tertiary)' }}>{f.label}</span>
                      <span className="text-sm font-medium" style={{ color: 'var(--c-text-primary)' }}>{f.value}</span>
                    </div>
                  ))}
                </div>

                <Link href="/about" className="group inline-flex items-center gap-2 mt-12 text-sm font-semibold transition-all duration-300" style={{ color: 'var(--c-primary)' }}>
                  About the institution
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Right — Principal & Quick Facts */}
            <ScrollReveal delay={0.2} className="lg:col-span-5 space-y-6">
              <div>
                {/* Principal */}
                <div className="p-8 relative overflow-hidden" style={{ background: 'var(--c-surface-raised)', border: '1px solid var(--c-border)', borderRadius: 'var(--radius-lg)' }}>
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0" style={{ border: '2px solid var(--c-border)' }}>
                      <img src="/images/principal.png" alt="Principal" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-base" style={{ color: 'var(--c-text-primary)' }}>Dr. C.K. Abdul Rabbi Nistar</p>
                      <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-text-tertiary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Principal</p>
                    </div>
                  </div>
                  <hr className="divider my-6" />
                  <p className="text-sm leading-relaxed italic" style={{ fontFamily: 'var(--font-display)', color: 'var(--c-text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                    "At AJAS, we strive to provide an environment that fosters intellectual curiosity and social responsibility."
                  </p>
                </div>

                {/* Quick Facts */}
                <div className="p-8" style={{ background: 'var(--c-primary)', borderRadius: 'var(--radius-lg)', color: 'var(--c-text-inverse)' }}>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] mb-8 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-mono)', opacity: 0.6 }}>Quick Facts</p>
                  <div className="space-y-5">
                    {[
                      { label: "Established", value: "2010" },
                      { label: "Affiliation", value: "University of Calicut" },
                      { label: "Accreditation", value: "In Progress" },
                      { label: "Recognition", value: "UGC 2(f)" },
                    ].map((fact, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span style={{ opacity: 0.5 }}>{fact.label}</span>
                        <span className="font-medium">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PROGRAMMES ────────────────────────── */}
      <section id="academics" className="py-24 lg:py-32 relative" style={{ background: 'var(--c-surface-raised)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
            <ScrollReveal className="lg:col-span-8">
              <p className="label mb-6">Academics</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>
                14 programmes across<br />arts, science & commerce
              </h2>
            </ScrollReveal>
            <div className="lg:col-span-4 flex items-end justify-end">
              <Link href="/academics" className="group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300" style={{ color: 'var(--c-primary)' }}>
                Full curriculum <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Programme table */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ border: '1px solid var(--c-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            {/* UG */}
            <ScrollReveal delay={0.1} className="h-full" style={{ borderRight: '1px solid var(--c-border)' }}>
              <div className="h-full">
                <div className="px-8 py-4" style={{ background: 'var(--c-primary)', color: 'var(--c-text-inverse)' }}>
                  <span className="text-xs font-medium uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-mono)', opacity: 0.7 }}>Undergraduate — 11 Programmes</span>
                </div>
                {[
                  { name: "B.Com (Honours)", dept: "Commerce" },
                  { name: "BBA", dept: "Business Administration" },
                  { name: "BCA", dept: "Computer Applications" },
                  { name: "BSc. Microbiology", dept: "Life Sciences" },
                  { name: "BA Islamic Studies", dept: "Islamic Studies" },
                  { name: "BA English", dept: "English" },
                  { name: "BSc. Geography", dept: "Geography" },
                  { name: "BSc. Psychology", dept: "Psychology" },
                  { name: "BSc. Food Technology", dept: "Life Sciences" },
                  { name: "BSc. Computer Science", dept: "Computer Science" },
                  { name: "BSc. Artificial Intelligence", dept: "AI & Data Science" },
                ].map((prog, i) => (
                  <Link key={i} href={`/academics/${prog.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group flex items-center justify-between px-8 py-4 transition-colors duration-200 hover:bg-[var(--c-primary)]/[0.03]"
                    style={{ borderBottom: '1px solid var(--c-border-subtle)' }}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-[11px] tabular-nums" style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-text-tertiary)' }}>{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <span className="text-sm font-medium block transition-colors duration-200" style={{ color: 'var(--c-text-primary)' }}>{prog.name}</span>
                        <span className="text-xs" style={{ color: 'var(--c-text-tertiary)' }}>{prog.dept}</span>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-200" style={{ color: 'var(--c-primary)' }} />
                  </Link>
                ))}
              </div>
            </ScrollReveal>

            {/* PG + Image */}
            <ScrollReveal delay={0.2} className="h-full">
              <div className="flex flex-col h-full">
                <div className="px-8 py-4" style={{ background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)' }}>
                  <span className="text-xs font-medium uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-text-tertiary)' }}>Postgraduate — 3 Programmes</span>
                </div>
                {[
                  { name: "MA Islamic Finance", dept: "Islamic Finance" },
                  { name: "MSc. Psychology", dept: "Psychology" },
                  { name: "MA Arabic", dept: "Arabic" },
                ].map((prog, i) => (
                  <Link key={i} href={`/academics/${prog.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group flex items-center justify-between px-8 py-4 transition-colors duration-200 hover:bg-[var(--c-primary)]/[0.03]"
                    style={{ borderBottom: '1px solid var(--c-border-subtle)' }}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-[11px] tabular-nums" style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-text-tertiary)' }}>{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <span className="text-sm font-medium block transition-colors duration-200" style={{ color: 'var(--c-text-primary)' }}>{prog.name}</span>
                        <span className="text-xs" style={{ color: 'var(--c-text-tertiary)' }}>{prog.dept}</span>
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-200" style={{ color: 'var(--c-primary)' }} />
                  </Link>
                ))}

                {/* Image */}
                <div className="flex-1 min-h-[240px] relative mt-auto">
                  <img src="/images/classroom.png" alt="Classroom" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--c-primary) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white text-lg" style={{ fontFamily: 'var(--font-display)' }}>Life at Al Jamia</p>
                    <Link href="/infrastructure" className="text-xs font-medium text-white/60 hover:text-white transition-colors mt-1 block">Explore Campus →</Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      {/* ── NEWS & EVENTS ─────────────────────── */}
      <section id="events" className="py-24 lg:py-32" style={{ background: 'var(--c-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
            <ScrollReveal className="lg:col-span-8">
              <p className="label mb-6">Campus Life</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>News & Events</h2>
            </ScrollReveal>
            <div className="lg:col-span-4 flex items-end justify-end">
              <Link href="/news" className="group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300" style={{ color: 'var(--c-primary)' }}>
                All updates <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Featured */}
          <ScrollReveal>
            <Link href="#" className="group block mb-10">
              <div className="relative w-full h-[380px] overflow-hidden" style={{ borderRadius: 'var(--radius-lg)' }}>
                <img src="/images/graduation_kerala.png" alt="Convocation 2026" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(11,17,32,0.85) 0%, rgba(11,17,32,0.3) 60%, transparent 100%)' }} />
                <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-14">
                  <span className="label mb-4" style={{ color: 'var(--c-accent)' }}>Upcoming · May 2, 2026</span>
                  <h3 className="text-3xl md:text-4xl text-white mb-3 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>Convocation 2026</h3>
                  <span className="text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors flex items-center gap-1">
                    View details <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Grid: events + news */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Events list */}
            <ScrollReveal className="lg:col-span-2 h-full">
              <div className="h-full" style={{ border: '1px solid var(--c-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <div className="px-6 py-4" style={{ background: 'var(--c-surface-raised)', borderBottom: '1px solid var(--c-border)' }}>
                  <span className="label">Upcoming Events</span>
                </div>
                {[
                  { month: "APR", day: "22", title: "World Earth Day" },
                  { month: "APR", day: "08", title: "Graduation Ceremony 2026" },
                  { month: "FEB", day: "03", title: "BIOCODEZ" },
                ].map((ev, i) => (
                  <Link key={i} href="#" className="group flex items-center gap-5 px-6 py-5 transition-colors duration-200 hover:bg-[var(--c-primary)]/[0.03]" style={{ borderBottom: '1px solid var(--c-border-subtle)' }}>
                    <div className="w-12 text-center shrink-0">
                      <p className="text-[10px] uppercase tracking-widest font-medium" style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-accent)' }}>{ev.month}</p>
                      <p className="text-2xl font-light" style={{ fontFamily: 'var(--font-display)', color: 'var(--c-text-primary)' }}>{ev.day}</p>
                    </div>
                    <div className="w-px h-10 shrink-0" style={{ background: 'var(--c-border)' }} />
                    <p className="text-sm font-medium flex-1 leading-snug transition-colors duration-200" style={{ color: 'var(--c-text-primary)' }}>{ev.title}</p>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-all shrink-0" style={{ color: 'var(--c-primary)' }} />
                  </Link>
                ))}
              </div>
            </ScrollReveal>

            {/* News cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { date: "Apr 22, 2026", title: "Earth Day celebrations foster environmental awareness", img: "/images/activities.png", latest: true },
                { date: "Apr 8, 2026", title: "AJAS Graduation Ceremony honours top achievers", img: "/images/graduation_kerala.png" },
                { date: "Apr 6, 2026", title: "LAUREATUS 2026: Honouring Achievers", img: "/images/seminar_new.png" },
              ].map((news, i) => (
                <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                  <Link href="#" className="group flex flex-col h-full overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ border: '1px solid var(--c-border)', borderRadius: 'var(--radius-md)' }}>
                    <div className="relative h-36 overflow-hidden">
                      <img src={news.img} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      {news.latest && (
                        <div className="absolute top-3 left-3 px-2.5 py-1 flex items-center gap-1.5" style={{ background: 'rgba(255,255,255,0.92)', borderRadius: 'var(--radius-sm)' }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                          <span className="text-[9px] font-semibold uppercase tracking-wide" style={{ color: 'var(--c-text-primary)' }}>Latest</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col flex-1 p-4" style={{ background: 'var(--c-surface-raised)' }}>
                      <span className="text-[10px] font-medium uppercase tracking-[0.08em] mb-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-accent)' }}>{news.date}</span>
                      <h5 className="text-sm font-medium leading-snug flex-1 transition-colors duration-200" style={{ color: 'var(--c-text-primary)' }}>{news.title}</h5>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NOTICES & DOWNLOADS ────────────────── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--c-surface-raised)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Notices */}
            <ScrollReveal className="h-full">
              <div className="p-6 sm:p-10 h-full" style={{ background: 'var(--c-primary)', borderRadius: 'var(--radius-lg)', color: 'var(--c-text-inverse)' }}>
                <p className="text-xs font-medium uppercase tracking-[0.12em] mb-2" style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-accent)' }}>Notices</p>
                <h2 className="mb-10" style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem' }}>Notifications</h2>
                <div className="flex flex-col gap-4">
                  {[
                    { title: "Admission Open for FYUG Programmes 2026-27", date: "May 5, 2026", isNew: true },
                    { title: "Counselling Desk Reviews Schedule Released", date: "May 1, 2026", isNew: true },
                    { title: "AJAS Prospectus 2026-27 Available", date: "Apr 28, 2026", isNew: true },
                    { title: "University Examination Notification May 2026", date: "Apr 15, 2026", isNew: false },
                  ].map((n, i) => (
                    <div key={i} className="pl-4 py-3 transition-colors duration-200" style={{ borderLeft: `2px solid ${n.isNew ? 'var(--c-accent)' : 'rgba(255,255,255,0.15)'}`, background: 'rgba(255,255,255,0.04)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-sm font-medium leading-relaxed">{n.title}</p>
                        {n.isNew && <span className="text-[10px] font-medium px-1.5 py-0.5 shrink-0 uppercase" style={{ color: 'var(--c-accent)', border: '1px solid var(--c-accent)', borderRadius: 'var(--radius-sm)' }}>New</span>}
                      </div>
                      <p className="text-xs mt-1" style={{ opacity: 0.4 }}>{n.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Downloads */}
            <ScrollReveal delay={0.2} className="h-full">
              <div className="h-full">
                <p className="label mb-2" style={{ color: 'var(--c-primary)' }}>Downloads</p>
                <h2 className="mb-10" style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem' }}>Documents</h2>
                <div style={{ border: '1px solid var(--c-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  {[
                    { name: "AJAS Prospectus 2026-27", year: "2026" },
                    { name: "Fee Details Structure", year: "2026" },
                    { name: "NIRF Report", year: "2025" },
                    { name: "AISHE Report", year: "2023-24" },
                    { name: "SSR Document", year: "Current" },
                    { name: "Strategic Plan", year: "2020-30" },
                  ].map((doc, i, arr) => (
                    <div key={i} className="flex items-center justify-between p-4 transition-colors duration-200 hover:bg-[var(--c-primary)]/[0.02]" style={{ borderBottom: i !== arr.length - 1 ? '1px solid var(--c-border-subtle)' : 'none' }}>
                      <div className="flex items-center gap-3">
                        <FileText size={16} style={{ color: 'var(--c-primary)' }} />
                        <span className="text-sm font-medium" style={{ color: 'var(--c-text-primary)' }}>{doc.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full hidden sm:inline-block" style={{ color: 'var(--c-text-tertiary)', background: 'var(--c-surface)' }}>{doc.year}</span>
                      </div>
                      <button className="text-xs px-3 py-1.5 font-medium transition-all duration-200 hover:-translate-y-0.5" style={{ border: '1px solid var(--c-border)', borderRadius: 'var(--radius-sm)', color: 'var(--c-text-secondary)' }}>
                        Download
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
      <section id="gallery" className="py-24 lg:py-32 relative" style={{ background: 'var(--c-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
            <ScrollReveal className="lg:col-span-8">
              <p className="label mb-6">Campus Life</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>
                A glimpse of our campus
              </h2>
            </ScrollReveal>
            <div className="lg:col-span-4 flex items-end justify-end">
              <p className="text-sm" style={{ color: 'var(--c-text-secondary)', maxWidth: '280px' }}>
                Explore our modern infrastructure designed to foster innovation and character.
              </p>
            </div>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 h-[400px] overflow-hidden" style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--c-border)' }}>
                <img src="/images/seminar_new.png" alt="Seminar Hall" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]" />
              </div>
              <div className="md:col-span-4 h-[400px] overflow-hidden" style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--c-border)' }}>
                <img src="/images/science_lab.png" alt="Science Lab" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]" />
              </div>
              <div className="md:col-span-4 h-[400px] overflow-hidden" style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--c-border)' }}>
                <img src="/images/library.png" alt="Library" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]" />
              </div>
              <div className="md:col-span-8 h-[400px] overflow-hidden" style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--c-border)' }}>
                <img src="/images/hero.png" alt="Campus View" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03]" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── RECOGNITIONS ───────────────────────── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--c-surface-raised)', borderTop: '1px solid var(--c-border)', borderBottom: '1px solid var(--c-border)' }}>
        <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="w-full">
              <div className="flex flex-wrap justify-center items-center gap-16">
                {[
                  { name: "University of Calicut", logo: "/logos/University-Logo.jpg" },
                  { name: "UGC", logo: "/logos/UGC-Logo.jpg" },
                  { name: "NAAC", logo: "/logos/Naac-logo.jpg" },
                  { name: "ISO Certified", logo: "/logos/ISO-Logo.jpg" },
                  { name: "AICTE", logo: "/logos/AICTE-Logo.jpg" },
                ].map((org) => (
                  <div key={org.name} className="flex flex-col items-center gap-3">
                    <div className="w-24 h-24 bg-white rounded-full overflow-hidden flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105" style={{ border: '1px solid var(--c-border)' }}>
                      <img src={org.logo} alt={org.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-mono)' }}>{org.name}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
        </div>
      </section>

      {/* ── INTEGRATED PORTAL ──────────────────── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--c-surface-raised)', borderTop: '1px solid var(--c-border)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="label mb-6">Services</p>
              <h2 className="mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,5vw,3.5rem)' }}>Everything in one place</h2>
              <p className="text-base mx-auto max-w-xl" style={{ color: 'var(--c-text-secondary)' }}>
                Access dedicated portals for placements, alumni networks, and campus services with a unified interface.
              </p>
            </div>
          </ScrollReveal>

            {/* The mapping of portals */}
            {/* Let's wrap each row or just the whole grid in ScrollReveal */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: "Placement Cell",
                    desc: "Career guidance & job opportunities",
                    icon: Briefcase,
                    href: "/placement",
                    actions: ["Job Listings", "Mock Interviews", "Recruiters"],
                  },
                  {
                    name: "Alumni",
                    desc: "Connect with our global network",
                    icon: Users,
                    href: "/alumni",
                    actions: ["Alumni Meet", "Directory", "Success Stories"],
                  },
                  {
                    name: "IQAC",
                    desc: "Quality assurance & NAAC details",
                    icon: ClipboardCheck,
                    href: "/iqac",
                    actions: ["AQAR Reports", "Minutes", "Quality Policy"],
                  },
                  {
                    name: "Incubation",
                    desc: "Innovation and startup support",
                    icon: Rocket,
                    href: "/incubation",
                    actions: ["Funding", "Mentorship", "Innovation Lab"],
                  },
                  {
                    name: "PTA",
                    desc: "Parent-Teacher Association portal",
                    icon: Heart,
                    href: "/pta",
                    actions: ["Schedule", "Executive Body", "Initiatives"],
                  },
                  {
                    name: "Consultancy",
                    desc: "Academic & industry consultancy",
                    icon: BookOpen,
                    href: "/consultancy",
                    actions: ["Service List", "Expertise", "Projects"],
                  },
                  {
                    name: "Feedback",
                    desc: "Share your valuable thoughts",
                    icon: MessageSquare,
                    href: "/feedback",
                    actions: ["Student Feedback", "Parent Surveys", "Reviews"],
                  },
                  {
                    name: "ABC Portal",
                    desc: "Academic Bank of Credits access",
                    icon: Award,
                    href: "#",
                    actions: ["ID Generation", "Credit Transfer", "DigiLocker"],
                  },
                ].map((module, i) => {
                  const Icon = module.icon;
                  return (
                    <Link key={i} href={module.href} className="group relative h-[280px] overflow-hidden" style={{ borderRadius: 'var(--radius-lg)', border: '1px solid var(--c-border)' }}>
                      <div className="p-8 h-full flex flex-col transition-all duration-500 group-hover:opacity-0" style={{ background: 'var(--c-surface)' }}>
                        <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ background: 'var(--c-surface-raised)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--c-border)', color: 'var(--c-primary)' }}>
                          <Icon size={24} />
                        </div>
                        <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--c-text-primary)' }}>{module.name}</h4>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--c-text-secondary)' }}>{module.desc}</p>
                        
                        <div className="mt-auto pt-6 flex items-center justify-between" style={{ borderTop: '1px solid var(--c-border-subtle)' }}>
                          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'var(--c-primary)' }}>Access Portal</span>
                          <ArrowRight size={14} style={{ color: 'var(--c-primary)' }} />
                        </div>
                      </div>

                      <div className="absolute inset-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-center" style={{ background: 'var(--c-primary)' }}>
                        <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                          <Icon size={20} style={{ color: 'var(--c-accent)' }} /> {module.name}
                        </h4>
                        <ul className="space-y-4">
                          {module.actions.map((act, j) => (
                            <li key={j} className="flex items-center gap-3 text-[11px] text-white/80 font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: `${j * 100}ms` }}>
                              <div className="w-1 h-1 rounded-full" style={{ background: 'var(--c-accent)' }} />
                              {act}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 pt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                          Click to open
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────── */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: 'var(--c-primary)', color: 'var(--c-text-inverse)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] mb-12" style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-accent)' }}>Student Voices</p>
            
            <div className="max-w-3xl mx-auto">
              <span className="text-6xl font-serif opacity-20 block mb-8" style={{ fontFamily: 'var(--font-display)' }}>"</span>
              <p className="text-2xl md:text-3xl leading-relaxed mb-12" style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}>
                At AJAS, I found an environment that doesn't just teach subjects, but cultivates the mind and character. It prepared me for the world with confidence.
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full mb-4 overflow-hidden" style={{ border: '2px solid var(--c-accent)' }}>
                  <img src="/images/principal.png" alt="Student" className="w-full h-full object-cover grayscale" />
                </div>
                <p className="font-semibold text-base">Safwan Ahmed</p>
                <p className="text-xs uppercase tracking-widest mt-1 opacity-50" style={{ fontFamily: 'var(--font-mono)' }}>BCA Graduate, Batch 2023</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CLUBS ──────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ background: 'var(--c-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="mb-16">
              <p className="label mb-6">Beyond Academics</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4vw,3rem)' }}>Clubs & Forums</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
              {[
                "Arts Club", "Health Club", "Nature Club", "Music Club", "Literary Club",
                "Women's Cell", "Coding Club", "Film Club", "Sports Club", "NSS", "IEDC", "Debate Club"
              ].map((club, i) => (
                <div key={i} className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider transition-colors duration-200 hover:bg-[var(--c-primary)] hover:text-white" style={{ border: '1px solid var(--c-border)', borderRadius: 'var(--radius-sm)', background: 'var(--c-surface-raised)', color: 'var(--c-text-secondary)' }}>
                  {club}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative h-[400px] overflow-hidden" style={{ borderRadius: 'var(--radius-lg)' }}>
              <img src="/images/activities.png" alt="Student Activities" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,17,32,0.7) 0%, transparent 50%)' }} />
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="text-2xl text-white font-medium" style={{ fontFamily: 'var(--font-display)' }}>Nurturing talent & leadership</h3>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────── */}
      <section id="admissions-cta" className="py-24 lg:py-32 text-center relative overflow-hidden" style={{ background: 'var(--c-ink)', color: 'var(--c-text-inverse)' }}>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, var(--c-accent) 0%, transparent 70%)' }} />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] mb-8" style={{ fontFamily: 'var(--font-mono)', color: 'var(--c-accent)' }}>Admissions 2026-27</p>
            <h2 className="mb-12" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,6vw,4.5rem)' }}>
              Ready to start your<br />future at AJAS?
            </h2>
            <p className="text-lg mb-12 opacity-70 max-w-xl mx-auto">
              Applications are now open for all undergraduate and postgraduate programmes. Join a community of excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/admissions" className="px-10 py-5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 shadow-2xl" style={{ background: 'var(--c-accent)', borderRadius: 'var(--radius-md)', color: 'var(--c-ink)' }}>
                Apply Online Now
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

