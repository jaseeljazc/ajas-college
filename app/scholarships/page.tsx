"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Download, CheckCircle, GraduationCap, Building2, School } from "lucide-react";

export default function ScholarshipsPage() {
  const scholarshipCategories = [
    {
      title: "Government of India",
      icon: <Building2 size={20} />,
      items: [
        "National Loan Scholarship",
        "National Merit Scholarship",
        "Scholarship for Physically Handicapped",
        "Scholarship for SC Students",
        "Scholarship for Lakshadweep Students",
        "Central Sector Scholarship",
        "Inspire Scholarship",
      ],
    },
    {
      title: "Kerala Government",
      icon: <School size={20} />,
      items: [
        "State Merit Scholarship",
        "Fisheries Scholarship",
        "Scholarships for Muslim/Nadar Girls",
        "Physically Handicapped Scholarship",
        "Proficiency in Sports",
      ],
    },
    {
      title: "University of Calicut",
      icon: <GraduationCap size={20} />,
      items: [
        "University Merit Scholarship",
        "Sports Incentive Scholarship",
        "Cultural Scholarship",
      ],
    },
  ];

  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "Scholarships" }]}
        label="FINANCIAL AID"
        heading="Scholarships & Support"
        subtext="Ensuring quality education is accessible to all deserving students through various financial assistance programs."
        showImage={true}
        bgImage="/images/seminar_new.png"
      />

      {/* Available Scholarships */}
      <section className="page-section" style={{ background: "var(--c-surface)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <p className="label mb-4">Schemes</p>
            <h2 className="mb-12">Available Scholarships</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {scholarshipCategories.map((cat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                  <div className="icon-box mb-6">{cat.icon}</div>
                  <h3 className="mb-6 font-semibold" style={{ color: "var(--c-text-primary)", fontSize: "1.2rem" }}>{cat.title}</h3>
                  <ul className="space-y-4">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex gap-3 text-sm" style={{ color: "var(--c-text-secondary)" }}>
                        <CheckCircle size={14} style={{ color: "var(--c-accent)", marginTop: "3px" }} className="shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="p-10 card-base" style={{ background: "var(--c-surface-raised)" }}>
              <h3 className="text-lg font-bold mb-4" style={{ color: "var(--c-text-primary)" }}>Management Scholarship</h3>
              <p className="text-base" style={{ color: "var(--c-text-secondary)" }}>
                <strong style={{ color: "var(--c-primary)" }}>Mammunhi Moulavi Foundation Scholarship:</strong> Distributed on the recommendation of the Principal to deserving students based on merit and financial need.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Policy & Application Process */}
      <section className="page-section" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <p className="label mb-4">Policy</p>
              <h2 className="mb-8">Institutional Policy</h2>
              <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>
                <p>
                  The college provides free education to up to <strong style={{ color: "var(--c-text-primary)" }}>20% of its total student strength</strong>. Applications are open to students of all categories regardless of religion or community.
                </p>
                <p>
                  A dedicated subcommittee evaluates all applications. To ensure continued support, department heads submit semester-wise progress reports of scholarship holders.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-10 card-base" style={{ background: "var(--c-surface)" }}>
                <h3 className="text-xl font-bold mb-8" style={{ color: "var(--c-text-primary)" }}>How to Apply</h3>
                <div className="space-y-8 relative">
                  {[
                    "Collect the scholarship application form from the college office.",
                    "Attach required documents (income, community, mark sheets).",
                    "Submit the filled form to the college office before the deadline.",
                    "The subcommittee will notify selected candidates within 30 days.",
                    "Scholarship amount will be credited directly to the bank account."
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 relative">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", color: "var(--c-primary)" }}>
                        {i + 1}
                      </div>
                      <p className="text-sm font-medium pt-1.5" style={{ color: "var(--c-text-secondary)" }}>{step}</p>
                    </div>
                  ))}
                </div>
                <button className="btn-primary w-full mt-12 flex items-center justify-center gap-3">
                  <Download size={18} /> Download Application Form
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
