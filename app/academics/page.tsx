"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumCard from "@/components/PremiumCard";
import Link from "next/link";
import { Download, Users, GraduationCap, BookOpen, Award, Calendar, ArrowRight, Rocket, Briefcase } from "lucide-react";

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const depts = [
    { name: "Commerce", hod: "Placeholder Name", programmes: ["B.Com Honours", "B.Com Finance"], slug: "commerce" },
    { name: "Business Administration", hod: "Placeholder Name", programmes: ["BBA"], slug: "bba" },
    { name: "Computer Applications", hod: "Placeholder Name", programmes: ["BCA"], slug: "bca" },
    { name: "Life Sciences", hod: "Placeholder Name", programmes: ["Microbiology", "Food Tech"], slug: "life-sciences" },
    { name: "Islamic Studies", hod: "Placeholder Name", programmes: ["BA Islamic Studies"], slug: "islamic-studies" },
    { name: "English", hod: "Placeholder Name", programmes: ["BA English"], slug: "english" },
    { name: "Geography", hod: "Placeholder Name", programmes: ["BSc Geography"], slug: "geography" },
    { name: "Psychology", hod: "Placeholder Name", programmes: ["BSc Psychology", "MSc Psychology"], slug: "psychology" },
    { name: "Computer Science", hod: "Placeholder Name", programmes: ["BSc Computer Science"], slug: "computer-science" },
    { name: "Artificial Intelligence", hod: "Placeholder Name", programmes: ["BSc AI"], slug: "ai" },
    { name: "Islamic Finance", hod: "Placeholder Name", programmes: ["MA Islamic Finance"], slug: "islamic-finance" },
    { name: "Arabic", hod: "Placeholder Name", programmes: ["MA Arabic"], slug: "arabic" },
  ];

  const facultyRows = [
    { name: "Dr. Thahiya Naushad", designation: "Associate Professor & IQAC Coordinator", dept: "Islamic Studies", qualification: "PhD (Islamic Finance), MA", experience: "12 Years", specialization: "Islamic Economics" },
    { name: "Mr. Abdul Ganiyy AP", designation: "Assistant Professor", dept: "Geography", qualification: "MSc Geography, BEd", experience: "9 Years", specialization: "GIS" },
    { name: "Ms. Sameeha Shirin KV", designation: "Assistant Professor", dept: "Food Technology", qualification: "MSc Food Technology, NET", experience: "7 Years", specialization: "Food Quality" },
    { name: "Ms. Jasira MK", designation: "Assistant Professor", dept: "Computer Science", qualification: "MCA, MPhil", experience: "8 Years", specialization: "Machine Learning" },
    { name: "Mr. Muhammed Shanif KT", designation: "Assistant Professor", dept: "English", qualification: "MA English, NET", experience: "6 Years", specialization: "Postcolonial Literature" },
    { name: "Ms. Asha Fathima PP", designation: "Assistant Professor", dept: "Commerce", qualification: "MCom, NET", experience: "5 Years", specialization: "Financial Management" },
  ];

  const filteredFaculty = activeTab === "All" ? facultyRows : facultyRows.filter((f) => f.dept === activeTab);

  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "Academics" }]}
        label="ACADEMICS"
        heading="Academic Excellence"
        subtext="Diverse programmes and dedicated faculty committed to shaping future-ready professionals through rigorous learning."
        showImage={true}
        bgImage="/images/classroom.png"
      />

      {/* Departments */}
      <section
        id="departments"
        className="py-12 md:py-16 lg:py-20"
        style={{ background: "var(--c-surface)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4">Departments</p>
                <h2 className="m-0">Explore Our Departments</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {depts.map((dept, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 0.08}>
                <Link
                  href={`/departments/${dept.slug}`}
                  className="group relative flex flex-col flex-1 gap-4 p-5 transition-all duration-300 overflow-hidden border border-[var(--c-primary)] shadow-lg shadow-blue-900/20 group-hover:border-transparent group-hover:shadow-2xl block h-full"
                  style={{
                    background: "linear-gradient(145deg, var(--c-primary, #1a3a6b) 0%, #0f2d5c 40%, #162650 70%, #0d1e3d 100%)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  {/* Hover fill — flips to white */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "var(--c-surface)", borderRadius: "var(--radius-lg)" }}
                  />

                  {/* Index + arrow */}
                  <div className="relative z-10 flex items-start justify-between">
                    <span
                      className="text-[10px] tabular-nums transition-colors duration-300 text-white/40 group-hover:text-[var(--c-text-tertiary)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowRight
                      size={14}
                      className="opacity-30 group-hover:opacity-100 transition-all duration-200 text-white group-hover:text-[var(--c-primary)]"
                    />
                  </div>

                  {/* Name + dept label */}
                  <div className="relative z-10 flex-1">
                    <p className="text-sm font-semibold leading-snug mb-1 transition-colors duration-300 text-white group-hover:text-[var(--c-text-primary)]">
                      {dept.name}
                    </p>
                    <p className="text-xs transition-colors duration-300 text-[var(--c-accent)] group-hover:text-[var(--c-text-tertiary)]">
                      HOD: {dept.hod}
                    </p>
                  </div>

                  {/* Programme pills */}
                  <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    {dept.programmes.map((p, j) => (
                      <span
                        key={j}
                        className="text-[9px] font-bold px-2.5 py-1 uppercase tracking-wider transition-colors duration-300"
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: "var(--radius-sm)",
                          color: "rgba(255,255,255,0.6)",
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-12">
              <div>
                <p className="label mb-4">Faculty</p>
                <h2 className="m-0">Our Expert Faculty</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
            {/* Filter tabs */}
            <div
              className="flex gap-0 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap"
              style={{ borderBottom: "2px solid var(--c-border)" }}
            >
              {["All", "Commerce", "Computer Science", "Geography", "Life Sciences"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-200 shrink-0"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: activeTab === tab ? "var(--c-primary)" : "var(--c-text-tertiary)",
                    borderBottom: activeTab === tab ? "2px solid var(--c-primary)" : "2px solid transparent",
                    marginBottom: "-2px",
                    background: "none",
                    border: "none",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <PremiumCard className="p-8 h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      <Users size={18} style={{ color: "rgba(255,255,255,0.5)" }} />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{f.name}</p>
                      <p
                        className="text-[10px] mt-1 uppercase tracking-[0.08em]"
                        style={{ color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}
                      >
                        {f.designation}
                      </p>
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    {[
                      { label: "Qualification", value: f.qualification },
                      { label: "Experience", value: f.experience },
                      { label: "Specialization", value: f.specialization },
                    ].map((row, j) => (
                      <div
                        key={j}
                        className="flex justify-between items-center py-3 text-sm"
                        style={{ borderBottom: j < 2 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                      >
                        <span style={{ opacity: 0.35, fontSize: "11px", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{row.label}</span>
                        <span className="text-white/70 text-right" style={{ fontSize: "12px", maxWidth: "55%" }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intake & Performance */}
      <section id="disclosure" className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-12">
              <div>
                <p className="label mb-4">Disclosure</p>
                <h2 className="m-0">Approved Intake & Performance</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Intake Table */}
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5 flex items-center gap-2" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>
                <GraduationCap size={14} /> Approved Intake Capacity
              </p>
              <div className="overflow-x-auto no-scrollbar" style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                <table className="w-full text-left text-sm min-w-[500px]">
                  <thead style={{ background: "var(--c-surface)", borderBottom: "1px solid var(--c-border)" }}>
                    <tr>
                      {["Programme", "Duration", "Intake"].map(h => (
                        <th key={h} className="px-5 py-4 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)", color: "var(--c-text-tertiary)" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { prog: "B.Com Honours", duration: "4 Years", intake: "40" },
                      { prog: "BBA", duration: "3 Years", intake: "60" },
                      { prog: "BCA", duration: "3 Years", intake: "40" },
                      { prog: "BSc Microbiology", duration: "3 Years", intake: "30" },
                      { prog: "BA Islamic Studies", duration: "3 Years", intake: "40" },
                      { prog: "BSc Psychology", duration: "3 Years", intake: "30" },
                    ].map((row, i, arr) => (
                      <tr key={i} style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--c-border)" : "none", background: "var(--c-surface-raised)" }}>
                        <td className="px-5 py-4 font-medium" style={{ color: "var(--c-text-primary)" }}>{row.prog}</td>
                        <td className="px-5 py-4" style={{ color: "var(--c-text-secondary)" }}>{row.duration}</td>
                        <td className="px-5 py-4 font-semibold" style={{ color: "var(--c-primary)" }}>{row.intake}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>

            {/* Pass % Table */}
            <ScrollReveal delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5 flex items-center gap-2" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>
                <Award size={14} /> Pass Percentage (3 Years)
              </p>
              <div className="overflow-x-auto no-scrollbar" style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                <table className="w-full text-left text-sm min-w-[500px]">
                  <thead style={{ background: "var(--c-surface)", borderBottom: "1px solid var(--c-border)" }}>
                    <tr>
                      {["Programme", "22-23", "23-24"].map(h => (
                        <th key={h} className="px-5 py-4 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)", color: "var(--c-text-tertiary)" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { prog: "B.Com Finance", y1: "91%", y2: "94%" },
                      { prog: "BBA", y1: "89%", y2: "92%" },
                      { prog: "BCA", y1: "93%", y2: "95%" },
                      { prog: "BSc Microbiology", y1: "90%", y2: "93%" },
                      { prog: "BA Islamic Studies", y1: "94%", y2: "96%" },
                      { prog: "BSc Computer Science", y1: "95%", y2: "97%" },
                    ].map((row, i, arr) => (
                      <tr key={i} style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--c-border)" : "none", background: "var(--c-surface-raised)" }}>
                        <td className="px-5 py-4 font-medium" style={{ color: "var(--c-text-primary)" }}>{row.prog}</td>
                        <td className="px-5 py-4 font-semibold" style={{ color: "var(--c-primary)" }}>{row.y1}</td>
                        <td className="px-5 py-4 font-semibold" style={{ color: "var(--c-primary)" }}>{row.y2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Syllabus & Calendar */}
      <section id="syllabus" className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Syllabus Downloads */}
            <ScrollReveal>
              <p className="label mb-4">Resources</p>
              <div className="flex items-baseline gap-8 mb-10">
                <h2 className="m-0">Syllabus Downloads</h2>
                <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
              </div>
              <div>
                {[
                  "B.Com Honours Syllabus 2024",
                  "BCA Syllabus 2024",
                  "BSc Computer Science Syllabus",
                  "BSc Psychology Syllabus",
                  "MA Islamic Finance Syllabus",
                ].map((name, i, arr) => (
                  <div
                    key={i}
                    className="grid items-center gap-6 py-4 group"
                    style={{ gridTemplateColumns: "1fr auto auto", borderBottom: "1px solid var(--c-border)" }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-semibold px-1.5 py-0.5 rounded flex-shrink-0"
                        style={{
                          background: "var(--c-surface-raised)",
                          color: "var(--c-text-tertiary)",
                          border: "1px solid var(--c-border)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        PDF
                      </span>
                      <span className="text-sm" style={{ color: "var(--c-text-primary)" }}>{name}</span>
                    </div>
                    <button
                      className="flex items-center gap-1.5 text-xs font-medium transition-opacity duration-150 opacity-60 group-hover:opacity-100"
                      style={{ color: "var(--c-text-primary)" }}
                    >
                      <Download size={13} /> Download
                    </button>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Academic Calendar */}
            <ScrollReveal delay={0.1}>
              <p className="label mb-4">Schedule</p>
              <div className="flex items-baseline gap-8 mb-10">
                <h2 className="m-0">Academic Calendar</h2>
                <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
              </div>
              <div>
                {[
                  { date: "June 03, 2024", event: "Commencement of Classes (III & V Sem)" },
                  { date: "June 24, 2024", event: "Commencement of I Sem Classes" },
                  { date: "Aug 15, 2024", event: "Independence Day Celebration" },
                  { date: "Sept 12, 2024", event: "Onam Holidays Begin" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-6 py-4 group"
                    style={{ borderBottom: "1px solid var(--c-border)" }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-widest pt-0.5 shrink-0"
                      style={{ color: "var(--c-primary)", fontFamily: "var(--font-mono)", width: "90px" }}
                    >
                      {item.date}
                    </span>
                    <span
                      className="text-sm leading-relaxed group-hover:translate-x-1 transition-transform duration-200"
                      style={{ color: "var(--c-text-secondary)" }}
                    >
                      {item.event}
                    </span>
                  </div>
                ))}
                <button className="btn-primary w-full mt-10 flex items-center justify-center gap-3">
                  <Download size={16} /> Full Academic Calendar
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skill Development */}
      <section
        id="addon"
        className="py-12 md:py-16 lg:py-20"
        style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4">Skill Development</p>
                <h2 className="m-0">Add-on & Certificate Courses</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { provider: "Keltron", name: "Computer Hardware & Networking", desc: "Master system assembly and advanced network infrastructure management.", duration: "6 Months", icon: Rocket, actions: ["Network Admin", "Hardware Lab", "Certifications"] },
              { provider: "G-Tec", name: "Advanced Accounting & Tally", desc: "Professional training in modern accounting software and financial reporting.", duration: "3 Months", icon: Briefcase, actions: ["Tally Prime", "GST Filing", "Audit Basics"] },
              { provider: "NPTEL/SWAYAM", name: "Online Certification Courses", desc: "Access world-class university courses and global credit transfer systems.", duration: "8–12 Weeks", icon: BookOpen, actions: ["IIT Mentors", "Global Credits", "Exam Centers"] },
              { provider: "ASAP", name: "Skill Enhancement Programme", desc: "Government-backed initiatives for developing industry-ready soft skills.", duration: "Varies", icon: Award, actions: ["Soft Skills", "Placement Aid", "Govt. Initiative"] },
            ].map((course, i) => {
              const Icon = course.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08} className="block h-full">
                  <div
                    className="group relative block w-full h-[240px] overflow-hidden"
                    style={{
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--c-border)",
                    }}
                  >
                    {/* Front Face */}
                    <div
                      className="p-5 h-full flex flex-col transition-all duration-500 group-hover:opacity-0"
                      style={{ background: "var(--c-surface-raised)" }}
                    >
                      <div
                        className="w-9 h-9 flex items-center justify-center mb-3"
                        style={{
                          background: "var(--c-surface)",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--c-border)",
                          color: "var(--c-primary)",
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <span
                        className="text-[8px] font-bold uppercase tracking-[0.2em] mb-1.5"
                        style={{ color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}
                      >
                        {course.provider}
                      </span>
                      <h4
                        className="text-[12px] font-bold leading-snug mb-1.5"
                        style={{ color: "var(--c-text-primary)" }}
                      >
                        {course.name}
                      </h4>
                      <p className="text-[10px] leading-relaxed line-clamp-2" style={{ color: "var(--c-text-secondary)" }}>
                        {course.desc}
                      </p>
                      <div
                        className="mt-auto pt-3 flex items-center justify-between"
                        style={{ borderTop: "1px solid var(--c-border-subtle)" }}
                      >
                        <span className="text-[8px] font-bold uppercase tracking-widest" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>
                          {course.duration}
                        </span>
                        <ArrowRight size={10} style={{ color: "var(--c-primary)" }} />
                      </div>
                    </div>

                    {/* Back Face (Hover) */}
                    <div
                      className="absolute inset-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-center overflow-hidden"
                      style={{
                        background: "linear-gradient(145deg, var(--c-primary, #1a3a6b) 0%, #0f2d5c 40%, #162650 70%, #0d1e3d 100%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.09)",
                      }}
                    >
                      {/* Decorative elements */}
                      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none opacity-20" style={{ background: "var(--c-accent)" }} />
                      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }} />

                      <h4 className="font-bold mb-6 flex items-center gap-2 relative z-10" style={{ color: "#fff", fontSize: "1rem" }}>
                        <Icon size={18} style={{ color: "var(--c-accent)" }} /> Key Features
                      </h4>
                      <ul className="space-y-4">
                        {course.actions.map((act, j) => (
                          <li
                            key={j}
                            className="flex items-center gap-3 text-[11px] text-white/80 font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                            style={{ transitionDelay: `${j * 80}ms` }}
                          >
                            <div className="w-1 h-1 rounded-full" style={{ background: "var(--c-accent)" }} />
                            {act}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 pt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                        {course.provider} Certified
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Toppers */}
      <section id="toppers" className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-12">
              <div>
                <p className="label mb-4">Achievements</p>
                <h2 className="m-0">Academic Toppers</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
            <div className="overflow-x-auto no-scrollbar" style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
              <table className="w-full text-left text-sm min-w-[600px]">
                <thead style={{ background: "var(--c-surface)", borderBottom: "1px solid var(--c-border)" }}>
                  <tr>
                    {["Name", "Programme", "Year", "Result", "Rank"].map(h => (
                      <th key={h} className="px-6 py-4 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)", color: "var(--c-text-tertiary)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Mohammed Azeer", prog: "MA Islamic Finance", year: "2018", result: "A+", rank: "1st Rank" },
                    { name: "SAFWA K", prog: "BSc Psychology", year: "2019", result: "9.8 CGPA", rank: "1st Rank" },
                    { name: "Fathima Hiba", prog: "BA English", year: "2020", result: "9.5 CGPA", rank: "2nd Rank" },
                    { name: "Ashraf Ali", prog: "BCA", year: "2018", result: "A", rank: "3rd Rank" },
                  ].map((row, i, arr) => (
                    <tr key={i} style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--c-border)" : "none", background: i % 2 === 0 ? "var(--c-surface-raised)" : "var(--c-surface)" }}>
                      <td className="px-6 py-5 font-bold" style={{ color: "var(--c-text-primary)" }}>{row.name}</td>
                      <td className="px-6 py-5" style={{ color: "var(--c-text-secondary)" }}>{row.prog}</td>
                      <td className="px-6 py-5" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>{row.year}</td>
                      <td className="px-6 py-5" style={{ color: "var(--c-text-secondary)" }}>{row.result}</td>
                      <td className="px-6 py-5 font-bold" style={{ color: "var(--c-primary)" }}>{row.rank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
