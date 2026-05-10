"use client";

import Link from "next/link";
import { User as UserIcon, MessageSquare, Briefcase, BarChart3, Database, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";

export default function ConsultancyPage() {
  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "Consultancy" }]}
        label="ACADEMIC & INDUSTRY SUPPORT"
        heading="Consultancy Services"
        subtext="Leveraging academic expertise to provide specialized solutions for industry, government, and society."
      />

      {/* Experts Grid */}
      <section className="page-section" style={{ background: "var(--c-surface-raised)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <p className="label mb-4">Experts</p>
            <h2 className="mb-12">Our Consultant Panel</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dr. C.K. Abdul Rabbi Nistar", dept: "Management", expertise: "Strategic Planning" },
              { name: "Prof. Anitha M.", dept: "Psychology", expertise: "Behavioral Analysis" },
              { name: "Dr. Rajesh K.", dept: "Computer Science", expertise: "AI/ML Solutions" },
              { name: "Mr. Sameer T.", dept: "Islamic Finance", expertise: "Sharia Banking" },
              { name: "Dr. Fathima S.", dept: "Microbiology", expertise: "Quality Control" },
              { name: "Prof. Haris P.", dept: "English", expertise: "Corp. Communication" }
            ].map((faculty, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="p-8 group h-full flex flex-col transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                  <div className="flex items-center gap-5 mb-8">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)" }}>
                      <UserIcon size={20} style={{ color: "var(--c-text-tertiary)" }} />
                    </div>
                    <div>
                      <h4 className="font-bold" style={{ color: "var(--c-text-primary)" }}>{faculty.name}</h4>
                      <p className="text-[10px] uppercase font-bold tracking-widest mt-1" style={{ color: "var(--c-primary)", fontFamily: "var(--font-mono)" }}>{faculty.dept}</p>
                    </div>
                  </div>
                  <div className="mb-8 flex-1">
                    <p className="text-[10px] uppercase font-bold tracking-widest mb-1" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>Core Expertise</p>
                    <p className="text-base font-medium" style={{ color: "var(--c-text-secondary)" }}>{faculty.expertise}</p>
                  </div>
                  <button className="btn-outline w-full py-3 text-xs tracking-widest font-bold">
                    REQUEST ADVISORY
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio & Form */}
      <section className="page-section" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Active Projects */}
            <ScrollReveal>
              <p className="label mb-4">Portfolio</p>
              <h2 className="mb-8">Ongoing Projects</h2>

              <div className="overflow-hidden mb-10" style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                <table className="w-full text-left text-sm">
                  <thead style={{ background: "var(--c-surface-raised)", borderBottom: "1px solid var(--c-border)" }}>
                    <tr>
                      <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>Project Title</th>
                      <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>Client</th>
                    </tr>
                  </thead>
                  <tbody style={{ background: "var(--c-surface)" }}>
                    {[
                      { title: "Behavior Analysis", client: "Retail Chain" },
                      { title: "Water Quality Testing", client: "Municipality" },
                      { title: "Finance Feasibility", client: "State Coop" }
                    ].map((p, i, arr) => (
                      <tr key={i} style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--c-border)" : "none" }}>
                        <td className="px-6 py-5 font-medium" style={{ color: "var(--c-text-primary)" }}>{p.title}</td>
                        <td className="px-6 py-5 font-bold" style={{ color: "var(--c-primary)" }}>{p.client}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-8 flex gap-5 items-start" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                <Database size={20} style={{ color: "var(--c-accent)" }} className="shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold mb-1" style={{ color: "var(--c-text-primary)" }}>UGC Norms Compliance</h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>All services adhere to UGC and University of Calicut guidelines for institutional consultancy.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Request Form */}
            <ScrollReveal delay={0.2}>
              <div className="p-10 card-base" style={{ background: "var(--c-surface-raised)" }}>
                <p className="label mb-4">Inquiry</p>
                <h3 className="text-2xl font-bold mb-8" style={{ color: "var(--c-text-primary)" }}>Submit a Proposal</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Organization</label>
                      <input type="text" className="input-base" style={{ background: "var(--c-surface)" }} />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Contact Person</label>
                      <input type="text" className="input-base" style={{ background: "var(--c-surface)" }} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Requirements</label>
                    <textarea rows={4} className="input-base" style={{ background: "var(--c-surface)" }} placeholder="Project scope and timeline..."></textarea>
                  </div>
                  <button type="button" className="btn-primary w-full py-4 tracking-widest">
                    SEND CONSULTANCY REQUEST
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
