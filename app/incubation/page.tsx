"use client";

import Link from "next/link";
import { Rocket, User as UserIcon, Lightbulb, TrendingUp, Building2, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";

export default function IncubationPage() {
  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "Incubation" }]}
        label="INNOVATION & ENTREPRENEURSHIP"
        heading="Incubation Center"
        subtext="Fostering innovation, supporting startups, and nurturing the entrepreneurial spirit among students."
      />

      {/* Timeline */}
      <section className="page-section" style={{ background: "var(--c-surface-raised)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <p className="label mb-4">Process</p>
            <h2 className="mb-16">Application Timeline</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "Idea Submission", desc: "Submit your startup idea for initial review.", icon: <Lightbulb size={20} /> },
              { step: "02", title: "Screening", desc: "Evaluation by our expert panel for feasibility.", icon: <UserIcon size={20} /> },
              { step: "03", title: "Incubation", desc: "Access to lab, office space & mentoring.", icon: <Rocket size={20} /> },
              { step: "04", title: "Launch", desc: "Seed funding and global market entry.", icon: <TrendingUp size={20} /> }
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-start p-8 h-full transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="icon-box">{s.icon}</div>
                    <span className="text-2xl font-bold opacity-10" style={{ color: "var(--c-primary)", fontFamily: "var(--font-display)" }}>{s.step}</span>
                  </div>
                  <h4 className="font-bold mb-3" style={{ color: "var(--c-text-primary)" }}>{s.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Startups */}
      <section className="page-section" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <ScrollReveal>
                <p className="label mb-4">Resources</p>
                <h2 className="mb-8">Facilities Provided</h2>
              </ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Co-working Space", icon: <Building2 size={18} /> },
                  { name: "High-speed Internet", icon: <Globe size={18} /> },
                  { name: "Mentorship Network", icon: <UserIcon size={18} /> },
                  { name: "Funding Assistance", icon: <TrendingUp size={18} /> }
                ].map((f, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="p-6 transition-all duration-300 group hover:border-[var(--c-primary)]" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                      <div className="icon-box mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                      <h4 className="text-sm font-bold" style={{ color: "var(--c-text-primary)" }}>{f.name}</h4>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div>
              <ScrollReveal>
                <p className="label mb-4">Portfolio</p>
                <h2 className="mb-8">Incubated Startups</h2>
              </ScrollReveal>
              <div className="space-y-3">
                {[
                  { name: "EduTech Solutions", stage: "Pre-seed" },
                  { name: "Green AI Labs", stage: "Prototype" },
                  { name: "FinTrack", stage: "Ideation" },
                  { name: "HealthConnect", stage: "Seed" }
                ].map((s, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="flex justify-between items-center p-6 transition-all duration-300 hover:translate-x-1" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-sm)" }}>
                      <div>
                        <h4 className="font-bold" style={{ color: "var(--c-text-primary)" }}>{s.name}</h4>
                        <p className="text-[10px] uppercase font-bold tracking-widest mt-1" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>Tech Startup</p>
                      </div>
                      <span className="status-badge" style={{ padding: "0.25rem 0.75rem" }}>{s.stage}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="page-section" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <ScrollReveal className="text-center mb-12">
            <p className="label mb-4">Inquiry</p>
            <h2>Apply for Incubation</h2>
          </ScrollReveal>
          
          <div className="p-10 card-base" style={{ background: "var(--c-surface)" }}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Team/Startup Name</label>
                  <input type="text" className="input-base" placeholder="e.g. InnovateX" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Contact Lead</label>
                  <input type="text" className="input-base" placeholder="Full Name" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Idea Description</label>
                <textarea rows={4} className="input-base" placeholder="Describe your innovative solution..."></textarea>
              </div>
              <button type="button" className="btn-primary w-full py-4 text-sm tracking-widest">
                SUBMIT PROPOSAL
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
