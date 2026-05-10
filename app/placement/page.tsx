"use client";

import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Briefcase, ArrowRight, Users, Trophy, Zap, ChevronRight, TrendingUp, MapPin, Clock } from "lucide-react";

const jobs = [
  { company: "TCS", role: "Software Developer", dept: "BCA / CS", package: "4.5 LPA", location: "Bangalore", type: "Full-Time" },
  { company: "Infosys", role: "Business Analyst", dept: "BBA", package: "4.0 LPA", location: "Kochi", type: "Full-Time" },
  { company: "UST Global", role: "Data Analyst", dept: "BSc AI / CS", package: "5.0 LPA", location: "Trivandrum", type: "Full-Time" },
  { company: "Aster Medcity", role: "Lab Technician", dept: "BSc Microbiology", package: "3.5 LPA", location: "Kochi", type: "Full-Time" },
  { company: "Manorama Online", role: "Content Writer", dept: "BA English", package: "3.0 LPA", location: "Kottayam", type: "Full-Time" },
  { company: "Kerala IT Mission", role: "GIS Analyst", dept: "BSc Geography", package: "3.8 LPA", location: "Thiruvananthapuram", type: "Full-Time" },
];

const recruiters = ["TCS", "Infosys", "UST Global", "Aster", "KPMG", "Wipro", "HCL", "Manorama", "Kerala IT Mission", "Cyberpark"];

export default function PlacementPage() {
  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "Placement Cell" }]}
        label="CAREER & PLACEMENT"
        heading="Your Career Starts Here"
        subtext="Empowering students with industry connections, career guidance, and campus recruitment opportunities across top companies."
        showImage={true}
        bgImage="/images/placement_hero.png"
      />

      {/* Stats — Ink Theme Banner */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--color-ink-gradient)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(26,58,107,0.4) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {[
              { label: "Placed Students", value: "85%", icon: TrendingUp },
              { label: "Partner Companies", value: "40+", icon: Briefcase },
              { label: "Average Package", value: "4.2 LPA", icon: Trophy },
              { label: "Internships Offered", value: "120+", icon: Zap },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div
                    className="text-center py-10 px-6 flex flex-col items-center gap-2"
                    style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
                  >
                    <Icon size={16} style={{ color: "var(--c-accent)" }} />
                    <div className="text-3xl font-light" style={{ color: "white", fontFamily: "var(--font-display)" }}>{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)" }}>{stat.label}</div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Placements — Editorial Table */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4">Opportunities</p>
                <h2 className="m-0">Recent Placements & Offers</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto no-scrollbar" style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
              <table className="w-full text-left min-w-[640px]">
                <thead>
                  <tr style={{ background: "var(--c-surface-raised)", borderBottom: "1px solid var(--c-border)" }}>
                    {["Company", "Role", "Department", "Location", "Package", ""].map(h => (
                      <th key={h} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "var(--c-text-tertiary)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, i) => (
                    <tr key={i} className="group transition-colors duration-200 hover:bg-[var(--c-surface-raised)]" style={{ borderBottom: i < jobs.length - 1 ? "1px solid var(--c-border)" : "none" }}>
                      <td className="px-6 py-4 font-semibold text-sm" style={{ color: "var(--c-text-primary)" }}>{job.company}</td>
                      <td className="px-6 py-4 text-sm" style={{ color: "var(--c-text-secondary)" }}>{job.role}</td>
                      <td className="px-6 py-4 text-sm" style={{ color: "var(--c-text-secondary)" }}>{job.dept}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="flex items-center gap-1.5" style={{ color: "var(--c-text-tertiary)" }}>
                          <MapPin size={10} /> {job.location}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold" style={{ color: "var(--c-primary)" }}>{job.package}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 transition-colors duration-200"
                          style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius-sm)", color: "var(--c-primary)", fontFamily: "var(--font-mono)" }}>
                          Apply <ArrowRight size={10} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Internship Programs — Programme Card style */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4">Experience</p>
                <h2 className="m-0">Internship Programs</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { company: "Cyberpark Calicut", role: "Summer Tech Intern", duration: "2 Months", stipend: "₹5,000 / mo", tags: ["Full Stack", "Web Dev"] },
              { company: "KSIDC", role: "Business Development Intern", duration: "3 Months", stipend: "₹4,000 / mo", tags: ["B2B Sales", "Research"] },
              { company: "Manorama Online", role: "Digital Media Intern", duration: "6 Weeks", stipend: "₹3,500 / mo", tags: ["Content", "SEO"] },
            ].map((intern, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div
                  className="group relative flex flex-col gap-4 p-6 overflow-hidden border transition-all duration-300"
                  style={{ background: "linear-gradient(145deg, #1a3a6b 0%, #0f2d5c 40%, #0d1e3d 100%)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)", borderRadius: "var(--radius-sm)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <Briefcase size={18} style={{ color: "var(--c-accent)" }} />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1" style={{ background: "rgba(200,160,60,0.15)", border: "1px solid rgba(200,160,60,0.25)", borderRadius: "var(--radius-sm)", color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}>
                      Internship
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ fontSize: "1rem", color: "#ffffff" }}>{intern.role}</h4>
                    <p className="text-[11px] font-semibold" style={{ color: "var(--c-accent)" }}>{intern.company}</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex items-center gap-1.5 text-[10px]" style={{ color: "rgba(255,255,255,0.5)" }}>
                      <Clock size={9} /> {intern.duration}
                    </span>
                    <span className="text-[10px] font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>{intern.stipend}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    {intern.tags.map((tag, j) => (
                      <span key={j} className="text-[9px] font-bold px-2.5 py-1 uppercase tracking-wider"
                        style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-sm)", color: "rgba(255,255,255,0.55)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Recruiters — Ticker / Grid */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4">Partners</p>
                <h2 className="m-0">Our Recruiters</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {recruiters.map((name, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                  style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)", color: "var(--c-text-secondary)", background: "var(--c-surface-raised)" }}>
                  {name}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us — Two column editorial */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <p className="label mb-4">Recruiters</p>
              <h2 className="mb-6">Partner With Us</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--c-text-secondary)" }}>
                Looking for fresh talent? Register your company to participate in our campus recruitment drives and connect with highly motivated graduates.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Users, text: "Pre-placement talks and presentations" },
                  { icon: Briefcase, text: "Dedicated interview rooms and testing facilities" },
                  { icon: TrendingUp, text: "End-to-end recruitment support from our team" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-9 h-9 flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-sm)", color: "var(--c-primary)" }}>
                      <item.icon size={16} />
                    </div>
                    <p className="text-sm leading-relaxed pt-2" style={{ color: "var(--c-text-secondary)" }}>{item.text}</p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <PremiumCard className="p-8">
                <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--c-accent)" }}>Registration</p>
                <h3 className="text-white mb-8" style={{ fontSize: "1.4rem" }}>Company Sign-Up</h3>
                <form className="space-y-4 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)" }}>Company Name</label>
                      <input type="text" placeholder="Acme Corp" className="w-full px-4 py-3 text-sm outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-md)", color: "white" }} />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)" }}>Industry</label>
                      <input type="text" placeholder="IT Services" className="w-full px-4 py-3 text-sm outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-md)", color: "white" }} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)" }}>HR Contact Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 text-sm outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-md)", color: "white" }} />
                  </div>
                  <div>
                    <label className="text-[9px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)" }}>Email Address</label>
                    <input type="email" placeholder="hr@company.com" className="w-full px-4 py-3 text-sm outline-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-md)", color: "white" }} />
                  </div>
                  <button type="button" className="w-full py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    style={{ background: "var(--c-accent)", borderRadius: "var(--radius-md)", color: "#0a0e1a", fontFamily: "var(--font-mono)" }}>
                    Submit Request
                  </button>
                </form>
              </PremiumCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
