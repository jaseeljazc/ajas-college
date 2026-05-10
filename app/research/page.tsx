"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Download, FileText, ExternalLink, Activity, Award, BookOpen, FlaskConical, ArrowRight } from "lucide-react";

export default function ResearchPage() {
  const stats = [
    { label: "Total Publications", value: "47", icon: <BookOpen size={18} /> },
    { label: "Journal Papers", value: "31", icon: <FileText size={18} /> },
    { label: "National Conf.", value: "10", icon: <Activity size={18} /> },
    { label: "Intl. Conference", value: "6", icon: <ExternalLink size={18} /> },
    { label: "Patents Filed", value: "2", icon: <FlaskConical size={18} /> },
    { label: "Funded Projects", value: "3", icon: <Award size={18} /> },
  ];

  const featuredPublications = [
    { title: "Impact of Microfinance on Muslim Women Entrepreneurs in Malappuram", author: "Dr. Thahiya Naushad", journal: "Journal of Islamic Economics", year: "2023" },
    { title: "Satellite-Based Land Use Change Detection in Malappuram District", author: "Mr. Abdul Ganiyy AP", journal: "Indian Journal of Geography", year: "2022" },
    { title: "Bioactive Compounds in Traditional Kerala Fermented Foods", author: "Ms. Sameeha Shirin KV", journal: "Journal of Food Science and Technology", year: "2023" },
    { title: "Deep Learning Approaches for Regional Language Text Classification", author: "Ms. Jasira MK", journal: "Intl. Journal of Computer Applications", year: "2022" },
  ];

  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "Research & Publications" }]}
        label="RESEARCH"
        heading="Innovation & Discovery"
        subtext="Fostering a culture of academic inquiry and contributing to the global body of knowledge through impactful research."
        showImage={true}
        bgImage="/images/seminar_new.png"
      />

      {/* Official Records */}
      <section className="page-section" style={{ background: "var(--c-surface)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <p className="label mb-4">Documents</p>
            <h2 className="mb-12">Official Records</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="p-10 h-full flex flex-col" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                <div className="icon-box mb-8"><FileText size={20} /></div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--c-text-primary)" }}>Research & Publications Master List</h3>
                <p className="text-sm leading-relaxed mb-10 flex-grow" style={{ color: "var(--c-text-secondary)" }}>Comprehensive list of all peer-reviewed publications, book chapters, and conference proceedings by the faculty.</p>
                <button className="btn-primary flex items-center justify-center gap-3">
                  <Download size={18} /> Download (PDF)
                </button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="p-10 h-full flex flex-col" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                <div className="icon-box mb-8"><FlaskConical size={20} /></div>
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--c-text-primary)" }}>Patent Details & IP</h3>
                <p className="text-sm leading-relaxed mb-10 flex-grow" style={{ color: "var(--c-text-secondary)" }}>Detailed records of patents filed and granted to the institution and its faculty members.</p>
                <button className="btn-primary flex items-center justify-center gap-3">
                  <Download size={18} /> Download (PDF)
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="page-section" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="label mb-4">Impact</p>
              <h2>Research Highlights</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="p-6 text-center transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                  <div className="flex justify-center mb-4" style={{ color: "var(--c-primary)" }}>{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1" style={{ color: "var(--c-text-primary)", fontFamily: "var(--font-display)" }}>{stat.value}</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="page-section" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <p className="label mb-4">Latest Work</p>
            <h2 className="mb-12">Featured Publications</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPublications.map((pub, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 group h-full flex flex-col transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                  <h4 className="text-lg font-bold mb-6 transition-colors group-hover:text-[var(--c-primary)]" style={{ color: "var(--c-text-primary)" }}>{pub.title}</h4>
                  <div className="space-y-3 mb-8 flex-grow">
                    <p className="text-sm" style={{ color: "var(--c-text-secondary)" }}><span className="font-bold opacity-50 uppercase text-[10px] tracking-widest mr-2">Author</span> {pub.author}</p>
                    <p className="text-sm" style={{ color: "var(--c-text-secondary)" }}><span className="font-bold opacity-50 uppercase text-[10px] tracking-widest mr-2">Journal</span> {pub.journal}</p>
                    <p className="text-sm" style={{ color: "var(--c-text-secondary)" }}><span className="font-bold opacity-50 uppercase text-[10px] tracking-widest mr-2">Year</span> {pub.year}</p>
                  </div>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all hover:gap-3" style={{ color: "var(--c-primary)", fontFamily: "var(--font-mono)" }}>
                    View Abstract <ArrowRight size={14} />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations & MoUs */}
      <section className="page-section" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <p className="label mb-4">Partnerships</p>
            <h2 className="mb-12">Academic Collaborations & MoUs</h2>
            <p className="text-base leading-relaxed mb-10 max-w-3xl" style={{ color: "var(--c-text-secondary)" }}>
              Al Jamia Arts & Science College has established strategic Memorandums of Understanding (MoUs) with leading academic institutions, research centers, and industry bodies. These collaborations facilitate student exchange programs, joint research initiatives, and faculty development, significantly enhancing the academic ecosystem.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Kerala Forest Research Institute (KFRI)", type: "Research Collaboration" },
              { name: "National Institute of Technology, Calicut", type: "Academic MoU" },
              { name: "Edapt Innovation Council", type: "Industry Partnership" }
            ].map((mou, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-6 transition-all duration-300 hover:-translate-y-1" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                  <h4 className="text-sm font-bold mb-2" style={{ color: "var(--c-text-primary)" }}>{mou.name}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--c-primary)", fontFamily: "var(--font-mono)" }}>{mou.type}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
