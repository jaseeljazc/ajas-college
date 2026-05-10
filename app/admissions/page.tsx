"use client";

import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import ScrollReveal from "@/components/ScrollReveal";
import {
  CheckCircle2, Download, ExternalLink, Phone, Mail, MapPin,
  GraduationCap, ArrowRight, FileText, BookOpen, Users, Zap
} from "lucide-react";

const programmes = [
  { name: "B.Com Honours", type: "UG", duration: "4 Years", seats: "40", eligibility: "Plus Two Pass with 45% marks" },
  { name: "BBA", type: "UG", duration: "3 Years", seats: "50", eligibility: "Plus Two Pass" },
  { name: "BCA", type: "UG", duration: "3 Years", seats: "36", eligibility: "Plus Two Pass with Maths / CS" },
  { name: "BSc Microbiology", type: "UG", duration: "3 Years", seats: "36", eligibility: "Plus Two Pass in Biology group" },
  { name: "BA Islamic Studies", type: "UG", duration: "3 Years", seats: "40", eligibility: "Plus Two Pass" },
  { name: "BA English", type: "UG", duration: "3 Years", seats: "40", eligibility: "Plus Two Pass" },
  { name: "BSc Psychology", type: "UG", duration: "3 Years", seats: "36", eligibility: "Plus Two Pass" },
  { name: "BSc Food Technology", type: "UG", duration: "3 Years", seats: "36", eligibility: "Plus Two Pass in Science" },
  { name: "BSc Computer Science", type: "UG", duration: "3 Years", seats: "36", eligibility: "Plus Two Pass with Maths / CS" },
  { name: "BSc AI", type: "UG", duration: "3 Years", seats: "30", eligibility: "Plus Two Pass with Maths" },
  { name: "MA Islamic Finance", type: "PG", duration: "2 Years", seats: "20", eligibility: "Any Graduation with 45% marks" },
  { name: "MSc Psychology", type: "PG", duration: "2 Years", seats: "12", eligibility: "BSc Psychology with 50% marks" },
  { name: "MA Arabic", type: "PG", duration: "2 Years", seats: "20", eligibility: "BA Arabic / Afzal-ul-ulama" },
];

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "Admissions" }]}
        label="ADMISSIONS 2026–27"
        heading="Join the AJAS Family"
        subtext="Applications are now open for all undergraduate and postgraduate programmes for the upcoming academic year."
        showImage={true}
        bgImage="/images/admissions_hero.png"
      />

      {/* Stats — Ink Banner */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-ink-gradient)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(26,58,107,0.35) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {[
              { label: "Programmes Offered", value: "13+", icon: BookOpen },
              { label: "Total Seats", value: "482", icon: Users },
              { label: "Years of Excellence", value: "17+", icon: GraduationCap },
              { label: "Campus Acres", value: "6.5", icon: Zap },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="text-center py-10 px-6 flex flex-col items-center gap-2"
                    style={{ borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
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

      {/* How to Apply — Editorial steps */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4">Process</p>
                <h2 className="m-0">How to Apply</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { step: "01", icon: FileText, title: "CAP Registration", desc: "Register online at the University of Calicut CAP portal and obtain your unique CAP ID." },
              { step: "02", icon: ExternalLink, title: "Online Application", desc: "Apply directly to Al Jamia via the college admission portal at ajasc.embase.in." },
              { step: "03", icon: CheckCircle2, title: "Verification", desc: "Attend the campus interview with original documents based on the published merit list." },
              { step: "04", icon: GraduationCap, title: "Secure Your Seat", desc: "Pay the required fees and confirm your enrolment in the desired programme." },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="relative group flex flex-col gap-4 p-6 h-full overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 flex items-center justify-center" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-sm)", color: "var(--c-primary)" }}>
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-bold" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>{s.step}</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2" style={{ color: "var(--c-text-primary)", fontSize: "0.95rem" }}>{s.title}</h4>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>{s.desc}</p>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-end" style={{ borderTop: "1px solid var(--c-border)" }}>
                      <ArrowRight size={12} style={{ color: "var(--c-primary)" }} className="opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Apply CTA */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center gap-6 p-8"
              style={{ background: "linear-gradient(145deg, #1a3a6b 0%, #0f2d5c 40%, #0d1e3d 100%)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }} />
              <div className="w-14 h-14 flex items-center justify-center shrink-0" style={{ background: "rgba(200,160,60,0.15)", border: "1px solid rgba(200,160,60,0.25)", borderRadius: "var(--radius-md)" }}>
                <ExternalLink size={22} style={{ color: "var(--c-accent)" }} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="font-bold mb-1" style={{ color: "white", fontSize: "1.1rem" }}>Ready to apply?</h4>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>Complete your application on our unified online admission portal.</p>
              </div>
              <a href="https://ajasc.embase.in" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl whitespace-nowrap"
                style={{ background: "var(--c-accent)", borderRadius: "var(--radius-md)", color: "#0a0e1a", fontFamily: "var(--font-mono)" }}>
                Apply Now <ArrowRight size={12} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Programmes — Editorial Table — Ink Theme */}
      <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden" style={{ background: "var(--color-ink-gradient)" }}>
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(26,58,107,0.25) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4" style={{ color: "var(--c-accent)" }}>Eligibility</p>
                <h2 className="m-0" style={{ color: "white" }}>Available Programmes</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
            </div>
          </ScrollReveal>

          {/* UG Programmes */}
          <ScrollReveal delay={0.1}>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}>Undergraduate (UG)</p>
            <div className="overflow-x-auto no-scrollbar mb-10" style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)" }}>
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    {["Programme", "Duration", "Seats", "Eligibility"].map(h => (
                      <th key={h} className="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.4)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {programmes.filter(p => p.type === "UG").map((p, i, arr) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors duration-150"
                      style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                      <td className="px-5 py-4 font-semibold" style={{ color: "white" }}>{p.name}</td>
                      <td className="px-5 py-4" style={{ color: "rgba(255,255,255,0.5)" }}>{p.duration}</td>
                      <td className="px-5 py-4 font-bold" style={{ color: "var(--c-accent)" }}>{p.seats}</td>
                      <td className="px-5 py-4 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{p.eligibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* PG Programmes */}
          <ScrollReveal delay={0.15}>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}>Postgraduate (PG)</p>
            <div className="overflow-x-auto no-scrollbar" style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)" }}>
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                    {["Programme", "Duration", "Seats", "Eligibility"].map(h => (
                      <th key={h} className="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.4)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {programmes.filter(p => p.type === "PG").map((p, i, arr) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors duration-150"
                      style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                      <td className="px-5 py-4 font-semibold" style={{ color: "white" }}>{p.name}</td>
                      <td className="px-5 py-4" style={{ color: "rgba(255,255,255,0.5)" }}>{p.duration}</td>
                      <td className="px-5 py-4 font-bold" style={{ color: "var(--c-accent)" }}>{p.seats}</td>
                      <td className="px-5 py-4 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{p.eligibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Rules & Documents — White */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Rules */}
            <ScrollReveal>
              <p className="label mb-4">Guidelines</p>
              <h2 className="mb-8">Admission Rules</h2>
              <div className="space-y-3">
                {[
                  "Admission is strictly based on merit and University of Calicut regulations.",
                  "Candidates must have a valid CAP ID from the University of Calicut.",
                  "Reserved seats are available for Minority and SC/ST candidates as per Govt. norms.",
                  "Original documents must be produced at the time of the interview.",
                  "Fees once paid will not be refunded except under special conditions defined by the University.",
                ].map((rule, i) => (
                  <div key={i} className="flex gap-4 items-start p-4"
                    style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                      style={{ background: "var(--c-primary)", color: "white", fontFamily: "var(--font-mono)" }}>
                      {i + 1}
                    </div>
                    <span className="text-sm leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>{rule}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Documents */}
            <ScrollReveal delay={0.15}>
              <p className="label mb-4">Checklist</p>
              <h2 className="mb-8">Documents for Interview</h2>
              <PremiumCard className="p-8">
                <ul className="space-y-4 relative z-10">
                  {[
                    "Original SSLC / Equivalent Certificate",
                    "Original Plus Two / Equivalent Certificate",
                    "Transfer Certificate (TC) from previous institution",
                    "Conduct Certificate (within 6 months)",
                    "Caste Certificate (for reservation category)",
                    "Passport Size Photographs (4 Nos)",
                    "Copy of Aadhaar Card",
                    "University CAP Allotment Memo",
                  ].map((doc, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm pb-4" style={{ color: "rgba(255,255,255,0.65)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--c-accent)" }} />
                      {doc}
                    </li>
                  ))}
                </ul>
                <div className="relative z-10 mt-6">
                  <button className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-5 py-3 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: "var(--c-accent)", borderRadius: "var(--radius-sm)", color: "#0a0e1a", fontFamily: "var(--font-mono)" }}>
                    <Download size={13} /> Download Prospectus 2026–27
                  </button>
                </div>
              </PremiumCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Helpdesk — Integrated Portal Card Design */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="label mb-4">Get in Touch</p>
              <h2 className="mb-4">Admissions Helpdesk</h2>
              <p className="text-base max-w-lg mx-auto" style={{ color: "var(--c-text-secondary)" }}>Our admissions team is available to assist you with all your queries and guide you through the process.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Phone, 
                title: "Direct Phone Support", 
                lines: ["+91 7994 188918", "+91 04933 227318"], 
                desc: "Connect with our admissions officers during office hours for immediate clarification on admission criteria and procedures." 
              },
              { 
                icon: Mail, 
                title: "Official Admissions Email", 
                lines: ["admissions@ajascollege.ac.in", "mail@ajascollege.ac.in"], 
                desc: "For detailed queries or document-related questions, reach out via email. Our team typically responds within one business day." 
              },
              { 
                icon: MapPin, 
                title: "Campus Admissions Office", 
                lines: ["Perinthalmanna, Malappuram", "Kerala — 679325"], 
                desc: "Visit our campus during working hours for a guided tour and face-to-face consultation with our expert academic counsellors." 
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div
                    className="group relative block w-full h-[260px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                    style={{ borderRadius: "var(--radius-lg)", border: "1px solid var(--c-border)" }}
                  >
                    {/* Front Face (Light) */}
                    <div
                      className="p-6 h-full flex flex-col transition-all duration-500 group-hover:opacity-0"
                      style={{ background: "var(--c-surface)" }}
                    >
                      <div
                        className="w-10 h-10 flex items-center justify-center mb-5"
                        style={{
                          background: "var(--c-surface-raised)",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--c-border)",
                          color: "var(--c-primary)",
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <h4 className="text-base font-bold mb-2" style={{ color: "var(--c-text-primary)" }}>
                        {item.title}
                      </h4>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>
                        {item.desc}
                      </p>

                      <div className="mt-auto pt-4 flex items-center justify-between" style={{ borderTop: "1px solid var(--c-border-subtle)" }}>
                        <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "var(--c-primary)" }}>
                          View Details
                        </span>
                        <ArrowRight size={12} style={{ color: "var(--c-primary)" }} />
                      </div>
                    </div>

                    {/* Hover Face (Dark Gradient) */}
                    <div
                      className="absolute inset-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-center overflow-hidden"
                      style={{
                        background: "linear-gradient(145deg, var(--c-primary, #1a3a6b) 0%, #0f2d5c 40%, #162650 70%, #0d1e3d 100%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.09)",
                      }}
                    >
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 pointer-events-none"
                        style={{ background: "radial-gradient(circle, var(--c-accent) 0%, transparent 70%)", filter: "blur(20px)" }} />
                      
                      <div className="relative z-10">
                        <div className="w-9 h-9 flex items-center justify-center mb-4" style={{ background: "rgba(255,255,255,0.1)", borderRadius: "var(--radius-sm)" }}>
                          <Icon size={18} style={{ color: "var(--c-accent)" }} />
                        </div>
                        <h4 className="text-white font-bold mb-3 text-base">{item.title}</h4>
                        <div className="space-y-1.5">
                          {item.lines.map((line, j) => (
                            <p key={j} className="text-[13px] font-medium" style={{ color: j === 0 ? "white" : "rgba(255,255,255,0.6)" }}>
                              {line}
                            </p>
                          ))}
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest" style={{ color: "var(--c-accent)" }}>
                          Contact Now <ArrowRight size={11} />
                        </div>
                      </div>
                    </div>
                  </div>

                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
