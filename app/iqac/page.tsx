"use client";

import Link from "next/link";
import { FileText, Download, ShieldCheck, ClipboardCheck, Users, BarChart3 } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export default function IqacPage() {
  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "IQAC" }]}
        label="INTERNAL QUALITY ASSURANCE CELL"
        heading="Quality & Accreditation"
        subtext="Ensuring continuous improvement in the entire operations of the institution through systematic quality assessment."
      />

      {/* Metrics Section */}
      <section className="page-section" style={{ background: "var(--c-surface-raised)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "NAAC Status", value: "Cycle 1", icon: <ShieldCheck size={20} /> },
              { label: "ISO Certified", value: "9001:2015", icon: <ClipboardCheck size={20} /> },
              { label: "Programmes", value: "14+", icon: <BarChart3 size={20} /> },
              { label: "Faculty", value: "85+", icon: <Users size={20} /> }
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 text-center card-base" style={{ background: "var(--c-surface)" }}>
                  <div className="flex justify-center mb-4" style={{ color: "var(--c-primary)" }}>{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1" style={{ color: "var(--c-text-primary)", fontFamily: "var(--font-display)" }}>{stat.value}</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NAAC Criteria */}
      <section className="page-section" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <p className="label mb-4">Assessment</p>
            <h2 className="mb-12">NAAC Criteria Progress</h2>
          </ScrollReveal>
          
          <div className="overflow-hidden" style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
            <table className="w-full text-left text-sm">
              <thead style={{ background: "var(--c-surface-raised)", borderBottom: "1px solid var(--c-border)" }}>
                <tr>
                  <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>Criterion</th>
                  <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>Name</th>
                  <th className="px-6 py-4 text-[10px] uppercase font-bold tracking-widest w-1/4" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>Completion</th>
                </tr>
              </thead>
              <tbody style={{ background: "var(--c-surface)" }}>
                {[
                  { id: "I", name: "Curricular Aspects", p: 80 },
                  { id: "II", name: "Teaching-Learning and Evaluation", p: 75 },
                  { id: "III", name: "Research, Innovations and Extension", p: 60 },
                  { id: "IV", name: "Infrastructure and Learning Resources", p: 90 },
                  { id: "V", name: "Student Support and Progression", p: 85 },
                  { id: "VI", name: "Governance, Leadership and Management", p: 80 },
                  { id: "VII", name: "Institutional Values and Best Practices", p: 95 },
                ].map((c, i, arr) => (
                  <tr key={i} style={{ borderBottom: i < arr.length - 1 ? "1px solid var(--c-border)" : "none" }}>
                    <td className="px-6 py-5 font-bold" style={{ color: "var(--c-primary)" }}>{c.id}</td>
                    <td className="px-6 py-5 font-medium" style={{ color: "var(--c-text-primary)" }}>{c.name}</td>
                    <td className="px-6 py-5">
                      <div className="w-full bg-[var(--c-surface-raised)] rounded-full h-1 overflow-hidden">
                        <div className="bg-[var(--c-primary)] h-full transition-all duration-1000" style={{ width: `${c.p}%` }}></div>
                      </div>
                      <span className="text-[10px] mt-1 block font-bold" style={{ color: "var(--c-text-tertiary)" }}>{c.p}% Complete</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Composition */}
      <section className="page-section" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <p className="label mb-4">Governance</p>
            <h2 className="mb-12">IQAC Composition</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Dr. C.K. Abdul Rabbi Nistar", role: "Chairperson" },
              { name: "Dr. Thahiya Naushad", role: "Coordinator" },
              { name: "Ms. Roshna Maneri", role: "Joint Coordinator" },
              { name: "Mr. Sharafudheen AT", role: "Management Rep." },
              { name: "Mr. Nassar Nalakath", role: "PTA Rep." },
              { name: "Ms. Hanna Fathima", role: "Student Rep." },
            ].map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="p-6 transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                  <h4 className="font-bold mb-1" style={{ color: "var(--c-text-primary)" }}>{m.name}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--c-primary)", fontFamily: "var(--font-mono)" }}>{m.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="page-section" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <p className="label mb-4">Reports</p>
              <h2 className="mb-10">IQAC Documents</h2>
              <div className="space-y-2">
                {[
                  { name: "AQAR Report 2023-24", year: "2024" },
                  { name: "Academic Audit Report", year: "2024" },
                  { name: "Green Audit Report", year: "2023" },
                  { name: "Energy Audit", year: "2023" },
                ].map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-5 transition-colors hover:bg-[var(--c-surface-raised)]" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-sm)" }}>
                    <div className="flex items-center gap-4">
                      <FileText size={16} style={{ color: "var(--c-text-tertiary)" }} />
                      <div>
                        <span className="text-sm font-bold" style={{ color: "var(--c-text-primary)" }}>{doc.name}</span>
                        <span className="text-[10px] block font-bold uppercase" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>{doc.year} Cycle</span>
                      </div>
                    </div>
                    <button className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--c-primary)", fontFamily: "var(--font-mono)" }}>
                      DOWNLOAD
                    </button>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="label mb-4">Archives</p>
              <h2 className="mb-10">Action Taken Reports</h2>
              <div className="p-10 card-base" style={{ background: "var(--c-surface-raised)" }}>
                <div className="space-y-6">
                  {[
                    "ATR 2021-22", "ATR 2022-23", "ATR 2023-24"
                  ].map((atr, i) => (
                    <div key={i} className="flex items-center justify-between pb-5 last:pb-0 last:border-0 border-b" style={{ borderColor: "var(--c-border)" }}>
                      <span className="text-sm font-bold" style={{ color: "var(--c-text-primary)" }}>{atr}</span>
                      <Download size={16} style={{ color: "var(--c-primary)" }} className="cursor-pointer" />
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-6 rounded-lg" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>The Minutes of IQAC meetings are maintained at the institution level and are available for review by authorized accreditation bodies.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
