"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { useParams } from "next/navigation";
import { User as UserIcon, BookOpen, FlaskConical, Trophy } from "lucide-react";

export default function DepartmentPage() {
  const { slug } = useParams();

  const deptMap: Record<string, string> = {
    "commerce": "Commerce",
    "bba": "Business Administration",
    "bca": "Computer Applications",
    "life-sciences": "Life Sciences",
    "islamic-studies": "Islamic Studies",
    "english": "English",
    "geography": "Geography",
    "psychology": "Psychology",
    "computer-science": "Computer Science",
    "ai": "Artificial Intelligence",
    "islamic-finance": "Islamic Finance",
    "arabic": "Arabic"
  };

  const deptName = deptMap[slug as string] || "Department";

  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: deptName }
        ]}
        label="DEPARTMENT"
        heading={deptName}
        subtext={`Welcome to the Department of ${deptName} at Al Jamia Arts & Science College.`}
        showImage={true}
        bgImage="/images/department_placeholder.png"
      />

      {/* About Department */}
      <section className="page-section" style={{ background: "var(--c-surface)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal>
              <p className="label mb-6">Overview</p>
              <h2 className="mb-8">About the Department</h2>
              <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>
                <p>
                  The Department of {deptName} is committed to providing high-quality education and fostering a research-oriented atmosphere. Our curriculum is designed to balance theoretical knowledge with practical applications.
                </p>
                <p>
                  We focus on holistic development, encouraging students to participate in seminars, workshops, and extracurricular activities. Our state-of-the-art facilities and dedicated faculty create a nurturing environment.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="p-10 card-base" style={{ background: "var(--c-surface-raised)" }}>
                <h4 className="font-semibold mb-8 flex items-center gap-3" style={{ color: "var(--c-text-primary)" }}>
                  <BookOpen size={20} style={{ color: "var(--c-primary)" }} /> Programmes Offered
                </h4>
                <ul className="space-y-6">
                  {[
                    { name: `${deptName} (Honours)`, duration: "4 Years", seats: "40" },
                    { name: `${deptName} (General)`, duration: "3 Years", seats: "60" },
                  ].map((prog, i, arr) => (
                    <li key={i} className="flex justify-between items-center pb-6" style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--c-border)" : "none" }}>
                      <div>
                        <span className="block font-bold" style={{ color: "var(--c-text-primary)" }}>{prog.name}</span>
                        <span className="text-xs uppercase tracking-widest mt-1 block" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>Duration: {prog.duration}</span>
                      </div>
                      <span className="status-badge">
                        {prog.seats} Seats
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="page-section" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <p className="label mb-4">People</p>
            <h2 className="mb-12">Our Faculty</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 text-center card-base flex flex-col items-center transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--c-surface)" }}>
                  <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)" }}>
                     <UserIcon size={32} style={{ color: "var(--c-text-tertiary)" }} />
                  </div>
                  <h4 className="font-semibold mb-1" style={{ color: "var(--c-text-primary)" }}>Faculty Name</h4>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--c-primary)", fontFamily: "var(--font-mono)" }}>Designation</p>
                  <p className="text-xs mt-3 leading-relaxed" style={{ color: "var(--c-text-tertiary)" }}>Qualification & Specialization</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Activities */}
      <section className="page-section" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <p className="label mb-4">Infrastructure</p>
              <h2 className="mb-12">Department Facilities</h2>
              <div className="space-y-4">
                {[
                  { name: "Specialized Laboratory", desc: "Equipped with the latest tools and technology." },
                  { name: "Department Library", desc: "A collection of core textbooks and reference materials." },
                  { name: "Smart Classroom", desc: "Enabled with modern AV equipment for interactive learning." },
                ].map((f, i) => (
                  <div key={i} className="flex gap-6 p-6 transition-all duration-300 group" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                    <div className="icon-box group-hover:scale-110 transition-transform">
                      <FlaskConical size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold mb-1" style={{ color: "var(--c-text-primary)" }}>{f.name}</h5>
                      <p className="text-sm" style={{ color: "var(--c-text-secondary)" }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="label mb-4">Campus Life</p>
              <h2 className="mb-12">Department Activities</h2>
              <div className="space-y-2">
                {[
                  { name: "Annual Tech Fest", date: "Feb 2024" },
                  { name: "Industrial Visit", date: "Jan 2024" },
                  { name: "Expert Seminar Series", date: "Monthly" },
                ].map((a, i) => (
                  <div key={i} className="flex justify-between items-center p-6 border-b" style={{ borderColor: "var(--c-border)" }}>
                    <div>
                      <h5 className="font-bold" style={{ color: "var(--c-text-primary)" }}>{a.name}</h5>
                      <span className="text-[10px] font-bold uppercase tracking-widest mt-1 block" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>{a.date}</span>
                    </div>
                    <Link href="#" className="text-xs font-bold uppercase tracking-widest transition-colors hover:text-[var(--c-primary)]" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>View Photos</Link>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Achievements & Gallery */}
      <section className="page-section" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <ScrollReveal className="w-full lg:w-1/2">
              <p className="label mb-4">Success</p>
              <h2 className="mb-12">Recent Achievements</h2>
              <div className="space-y-6">
                {[
                  "100% Result in Final Year Examination 2023.",
                  "Student placement in Top Multi-National Companies.",
                  "Faculty recognition at University-level forums.",
                  "Winners in the Inter-College Tech Quiz 2024."
                ].map((ach, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <Trophy size={18} style={{ color: "var(--c-accent)", marginTop: "2px" }} className="shrink-0" />
                    <p className="text-sm font-medium leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>{ach}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="w-full lg:w-1/2">
              <p className="label mb-4">Gallery</p>
              <h2 className="mb-12">Life at Department</h2>
              <div className="grid grid-cols-2 gap-4">
                 {["classroom.png", "science_lab.png", "seminar_new.png", "activities.png"].map((img, i) => (
                   <div key={i} className="aspect-square overflow-hidden" style={{ borderRadius: "var(--radius-md)", border: "1px solid var(--c-border)" }}>
                      <img src={`/images/${img}`} alt="Department Life" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                   </div>
                 ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-24 pt-12 text-center" style={{ borderTop: "1px solid var(--c-border)" }}>
            <Link href="/academics" className="text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-200" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>
              ← Back to All Academics
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
