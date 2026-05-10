"use client";

import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import Link from "next/link";
import { HeartPulse, Briefcase, GraduationCap, MessageSquare, ShieldAlert, Users, Trophy, ArrowRight, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function StudentLifePage() {
  const scholarships = [
    { name: "Post Metric Scholarship", eligibility: "Minority Community, Annual Income < 2.5L", amount: "₹3,000 – ₹5,000 / Year", provider: "Govt. of India" },
    { name: "Suvarna Jubilee Merit Scholarship", eligibility: "BPL/Low Income, Merit-based", amount: "₹10,000 / Year", provider: "DCE Kerala" },
    { name: "CH Mohammed Koya Scholarship", eligibility: "Minority Girls students only", amount: "₹5,000 / Year", provider: "Govt. of Kerala" },
    { name: "E-Grantz", eligibility: "SC/ST/OEC students", amount: "Full Fee Waiver", provider: "Govt. of Kerala" },
    { name: "AJAS Merit Award", eligibility: "College Toppers", amount: "Cash Prize & Trophy", provider: "AJAS College" },
  ];

  const clubs = [
    { name: "Arts Club", advisor: "Prof. Haris P.", description: "Nurturing creative talents in fine arts, performance, and cultural activities.", activities: ["Annual Arts Fest", "Painting Competitions", "Theater Workshops"] },
    { name: "Coding Club", advisor: "Dr. Rajesh K.", description: "A platform for tech enthusiasts to explore programming and software development.", activities: ["Hackathons", "Tech Talks", "Project Showcase"] },
    { name: "Nature Club", advisor: "Dr. Fathima S.", description: "Focusing on environmental awareness and sustainable campus initiatives.", activities: ["Tree Plantation", "Eco-walks", "Waste Management Awareness"] },
    { name: "Health Club", advisor: "Prof. Anitha M.", description: "Promoting physical and mental wellness among the student community.", activities: ["Yoga Sessions", "Blood Donation Camps", "Health Checkups"] },
    { name: "Literature Club", advisor: "Ms. Laila B.", description: "Celebrating language and literature through reading and writing.", activities: ["Poetry Slams", "Book Discussions", "Writing Contests"] },
    { name: "Women's Cell", advisor: "Prof. Anitha M.", description: "Empowering female students and addressing gender-related concerns.", activities: ["Self-defense Training", "Empowerment Seminars", "Counseling"] },
  ];

  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "Student Life" }]}
        label="CAMPUS EXPERIENCE"
        heading="Vibrant Student Life"
        subtext="Beyond academics, AJAS offers a rich ecosystem for personal growth, social responsibility, and cultural expression."
        showImage={true}
        bgImage="/images/student_life_hero_new.png"
      />

      {/* Quick Overview — Portal Card Style */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4">Discover</p>
                <h2 className="m-0">Life Beyond the Classroom</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Briefcase, name: "Career & Placements", desc: "Access the Placement Cell for career guidance, job listings, and mock interviews.", href: "/placement", actions: ["Job Listings", "Mock Interviews", "Recruiters"] },
              { icon: Trophy, name: "Arts & Sports", desc: "Showcase your talent in annual cultural meets, sports tournaments and competitions.", href: "#", actions: ["Arts Fest", "Sports Meet", "Inter-College Events"] },
              { icon: GraduationCap, name: "Skill Development", desc: "Earn government-backed certifications from Keltron, G-Tec and NPTEL platforms.", href: "/academics#addon", actions: ["Keltron", "G-Tec", "NPTEL/SWAYAM"] },
            ].map((module, i) => {
              const Icon = module.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <Link
                    href={module.href}
                    className="group relative block w-full h-[260px] overflow-hidden"
                    style={{ borderRadius: "var(--radius-lg)", border: "1px solid var(--c-border)" }}
                  >
                    {/* Front */}
                    <div className="p-8 h-full flex flex-col transition-all duration-500 group-hover:opacity-0" style={{ background: "var(--c-surface-raised)" }}>
                      <div className="w-12 h-12 flex items-center justify-center mb-6" style={{ background: "var(--c-surface)", borderRadius: "var(--radius-sm)", border: "1px solid var(--c-border)", color: "var(--c-primary)" }}>
                        <Icon size={24} />
                      </div>
                      <h4 className="text-base font-bold leading-snug mb-2" style={{ color: "var(--c-text-primary)" }}>{module.name}</h4>
                      <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--c-text-secondary)" }}>{module.desc}</p>
                      <div className="mt-auto pt-4 flex items-center justify-between" style={{ borderTop: "1px solid var(--c-border-subtle)" }}>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--c-primary)", fontFamily: "var(--font-mono)" }}>Explore</span>
                        <ArrowRight size={13} style={{ color: "var(--c-primary)" }} />
                      </div>
                    </div>
                    {/* Back (hover) */}
                    <div
                      className="absolute inset-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-center overflow-hidden"
                      style={{ background: "linear-gradient(145deg, var(--c-primary, #1a3a6b) 0%, #0f2d5c 40%, #162650 70%, #0d1e3d 100%)" }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }} />
                      <h4 className="font-bold mb-6 flex items-center gap-2 relative z-10" style={{ color: "#fff", fontSize: "1rem" }}>
                        <Icon size={18} style={{ color: "var(--c-accent)" }} /> {module.name}
                      </h4>
                      <ul className="space-y-4">
                        {module.actions.map((act, j) => (
                          <li key={j} className="flex items-center gap-3 text-[11px] text-white/80 font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" style={{ transitionDelay: `${j * 80}ms` }}>
                            <div className="w-1 h-1 rounded-full" style={{ background: "var(--c-accent)" }} />
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* NSS Section — Editorial two-column */}
      <section id="nss" className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <p className="label mb-4">Extension</p>
              <h2 className="mb-6">National Service<br />Scheme (NSS)</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--c-text-secondary)" }}>
                The NSS unit of Al Jamia Arts & Science College (Unit No. 191) is a vibrant platform for students to engage in community service under the motto <em>"Not Me, But You."</em>
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--c-text-secondary)" }}>
                Our volunteers actively participate in rural development projects, health awareness campaigns, and environmental protection initiatives.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {["7-Day Special Camp", "Blood Donation", "Literacy Campaigns", "Village Adoption"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 px-4" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--c-accent)" }} />
                    <span className="text-sm font-medium" style={{ color: "var(--c-text-primary)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-4 p-4" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                <div className="w-10 h-10 flex items-center justify-center" style={{ background: "var(--c-primary)", borderRadius: "var(--radius-sm)", color: "white" }}>
                  <Users size={18} />
                </div>
                <div>
                  <h5 className="text-sm font-semibold" style={{ color: "var(--c-text-primary)" }}>Mr. Ibrahim Khaleel</h5>
                  <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>Programme Officer</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="aspect-[4/3] w-full overflow-hidden" style={{ borderRadius: "var(--radius-lg)", border: "1px solid var(--c-border)" }}>
                <img src="/images/activities.png" alt="NSS Activities" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scholarships — Ink Theme Editorial Table */}
      <section
        id="scholarships"
        className="py-12 md:py-16 lg:py-20 relative overflow-hidden"
        style={{ background: "var(--color-ink-gradient)" }}
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(26,58,107,0.2) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4" style={{ color: "var(--c-accent)" }}>Support</p>
                <h2 className="m-0" style={{ color: "white" }}>Scholarships & Financial Aid</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto no-scrollbar" style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius-lg)" }}>
              <table className="w-full text-sm min-w-[600px]">
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    {["Scholarship Name", "Eligibility", "Provider", "Amount / Benefit"].map((h) => (
                      <th key={h} className="px-6 py-4 text-left text-[10px] font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.4)" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {scholarships.map((s, i) => (
                    <tr key={i} style={{ borderBottom: i < scholarships.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", background: "rgba(255,255,255,0.02)" }}>
                      <td className="px-6 py-4 font-medium text-white/90">{s.name}</td>
                      <td className="px-6 py-4" style={{ color: "rgba(255,255,255,0.5)" }}>{s.eligibility}</td>
                      <td className="px-6 py-4" style={{ color: "rgba(255,255,255,0.5)" }}>{s.provider}</td>
                      <td className="px-6 py-4 font-semibold" style={{ color: "var(--c-accent)" }}>{s.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Clubs Grid — Programme Card Style */}
      <section id="clubs" className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4">Forums</p>
                <h2 className="m-0">Clubs & Cells</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clubs.map((club, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 0.08} className="h-full">
                <div
                  className="group relative flex flex-col gap-4 p-5 overflow-hidden border border-[var(--c-primary)] shadow-lg shadow-blue-900/20 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full"
                  style={{ background: "linear-gradient(145deg, var(--c-primary, #1a3a6b) 0%, #0f2d5c 40%, #162650 70%, #0d1e3d 100%)", borderRadius: "var(--radius-lg)" }}
                >
                  {/* Hover fill */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "var(--c-surface)", borderRadius: "var(--radius-lg)" }} />
                  {/* Index */}
                  <div className="relative z-10 flex items-start justify-between">
                    <span className="text-[10px] tabular-nums transition-colors duration-300 text-white/40 group-hover:text-[var(--c-text-tertiary)]" style={{ fontFamily: "var(--font-mono)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight size={13} className="opacity-30 group-hover:opacity-100 transition-all duration-200 text-white group-hover:text-[var(--c-primary)]" />
                  </div>
                  {/* Name */}
                  <div className="relative z-10 flex-1">
                    <p className="text-sm font-semibold leading-snug mb-1 transition-colors duration-300 text-white group-hover:text-[var(--c-text-primary)]">{club.name}</p>
                    <p className="text-xs transition-colors duration-300 text-[var(--c-accent)] group-hover:text-[var(--c-text-tertiary)]">Advisor: {club.advisor}</p>
                    <p className="text-[11px] leading-relaxed mt-2 transition-colors duration-300 text-white/60 group-hover:text-[var(--c-text-secondary)] line-clamp-2">{club.description}</p>
                  </div>
                  {/* Activities */}
                  <div 
                    className="relative z-10 flex flex-wrap gap-2 mt-auto pt-3 transition-colors duration-300 group-hover:!border-t-[var(--c-border)]" 
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {club.activities.map((act, j) => (
                      <span
                        key={j}
                        className="text-[9px] font-bold px-2.5 py-1 uppercase tracking-wider transition-all duration-300 group-hover:!bg-[var(--c-surface-raised)] group-hover:!text-[var(--c-text-tertiary)] group-hover:!border-[var(--c-border)]"
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: "var(--radius-sm)",
                          color: "rgba(255,255,255,0.6)",
                        }}
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Counselling — Light editorial two-column */}
      <section id="counselling" className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal>
              <p className="label mb-4">Wellness</p>
              <h2 className="mb-6">Counselling &<br />Support Center</h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: "var(--c-text-secondary)" }}>
                AJAS provides professional counselling services to help students manage academic stress, personal issues, and career anxieties. Our trained counsellors offer a safe and confidential space for students to talk.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: HeartPulse, title: "Personal Support", desc: "Individual therapy and personal development sessions." },
                  { icon: MessageSquare, title: "Career Guidance", desc: "Vocational interest mapping and counselling." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                    <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "var(--c-primary)", borderRadius: "var(--radius-sm)", color: "white" }}>
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm mb-1" style={{ color: "var(--c-text-primary)" }}>{item.title}</h5>
                      <p className="text-xs" style={{ color: "var(--c-text-secondary)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <PremiumCard className="p-8 h-full">
                <p className="text-xs font-bold uppercase tracking-[0.15em] mb-2" style={{ fontFamily: "var(--font-mono)", color: "var(--c-accent)" }}>Appointment</p>
                <h3 className="text-white mb-8" style={{ fontSize: "1.4rem" }}>Book a Session</h3>
                <form className="space-y-4 relative z-10">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 text-sm outline-none transition-colors" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-md)", color: "white" }} />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 text-sm outline-none transition-colors" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-md)", color: "white" }} />
                  <textarea rows={3} placeholder="Briefly mention your concern (optional)" className="w-full px-4 py-3 text-sm outline-none transition-colors resize-none" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-md)", color: "white" }} />
                  <button type="button" className="w-full py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: "var(--c-accent)", borderRadius: "var(--radius-md)", color: "#0a0e1a", fontFamily: "var(--font-mono)" }}>
                    Submit Request
                  </button>
                </form>
              </PremiumCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Grievance — Light Theme */}
      <section
        id="complaint"
        className="py-12 md:py-16 lg:py-20 relative overflow-hidden"
        style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}
      >
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="label mb-4">Redressal</p>
              <h2 className="m-0">Grievance Submission</h2>
              <p className="text-sm mt-4" style={{ color: "var(--c-text-secondary)" }}>Submit your complaints or concerns to the college administration securely and confidentially.</p>
            </div>
            <div className="p-8 md:p-10" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 text-sm outline-none transition-colors" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)", color: "var(--c-text-primary)" }} />
                  <input type="text" placeholder="Roll Number" className="w-full px-4 py-3 text-sm outline-none transition-colors" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)", color: "var(--c-text-primary)" }} />
                </div>
                <select className="w-full px-4 py-3 text-sm outline-none transition-colors" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)", color: "var(--c-text-secondary)" }}>
                  <option value="">Select Category</option>
                  <option>Academic</option>
                  <option>Infrastructure</option>
                  <option>Examination</option>
                  <option>Disciplinary</option>
                  <option>Others</option>
                </select>
                <textarea rows={5} placeholder="Describe your grievance in detail..." className="w-full px-4 py-3 text-sm outline-none transition-colors resize-none" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)", color: "var(--c-text-primary)" }} />
                <button type="button" className="w-full py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: "var(--c-primary)", borderRadius: "var(--radius-md)", color: "white", fontFamily: "var(--font-mono)" }}>
                  Submit Grievance
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
