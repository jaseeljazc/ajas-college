"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumCard from "@/components/PremiumCard";
import { Laptop, BookOpen, FlaskConical, Globe, Mic2, Building, Warehouse, ArrowRight } from "lucide-react";

const facilities = [
  { id: "seminar", icon: Mic2, heading: "Seminar Hall", desc: "A state-of-the-art air-conditioned seminar hall built for academic events, guest lectures, and cultural programmes. Fitted with full audiovisual integration and high-speed connectivity.", features: ["300+ Seating Capacity", "Full AV Integration", "Central Air Conditioning", "High-speed Wi-Fi"], imagePath: "/images/seminar_new.png" },
  { id: "computer-lab", icon: Laptop, heading: "Computer & AI Labs", desc: "Advanced computing facilities housing modern high-performance systems, AI workstations, and industry-standard software environments for next-generation learning.", features: ["100+ High-end PC Systems", "GPU-powered AI workstations", "Licensed Software Suite", "1 Gbps Leased Line"], imagePath: "/images/lab.png" },
  { id: "library", icon: BookOpen, heading: "Central Library", desc: "A comprehensive repository of knowledge with an extensive collection of printed volumes, e-resources, and an automated cataloguing system to support deep academic research.", features: ["15,000+ Printed Volumes", "N-List & E-Resources Access", "Automated OPAC System", "Spacious Reading Room"], imagePath: "/images/library.png" },
  { id: "life-science-labs", icon: FlaskConical, heading: "Life Science Laboratories", desc: "Specialized research-grade labs for Microbiology and Food Technology, equipped with modern instruments and strict safety protocols to support hands-on scientific inquiry.", features: ["Incubators & Autoclaves", "Microscopy Center", "Food Quality Testing Setup", "Strict Safety Protocols"], imagePath: "/images/science_lab.png" },
  { id: "geography-lab", icon: Globe, heading: "Geography Lab", desc: "A modern spatial analysis lab equipped with both traditional cartographic instruments and cutting-edge GIS software workstations for applied geographic research.", features: ["GIS Software Workstations", "Surveying Instruments", "Extensive Map Collection", "Weather Station Data"], imagePath: "/images/geography_lab.png" },
  { id: "hostel", icon: Building, heading: "Residential Facilities", desc: "Safe, comfortable, and well-supervised on-campus housing for boys and girls, designed to provide a supportive home-away-from-home for students throughout their academic journey.", features: ["24/7 Security & Surveillance", "Wholesome Mess Facilities", "Recreational Areas", "Dedicated Study Halls"], imagePath: "/images/hero.png" },
];

export default function InfrastructurePage() {
  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      {/* <PageHero
        breadcrumbs={[{ label: "Infrastructure" }]}
        label="FACILITIES"
        heading="Campus Infrastructure"
        subtext="Modern, well-equipped, and technology-driven infrastructure designed to support academic and personal growth."
        showImage={true}
        bgImage="/images/infrastructure_hero_new.png"
      /> */}

      {/* Overview — Ink Theme */}
      <section
        className="py-12 md:py-16 lg:py-20 relative overflow-hidden"
        style={{ background: "var(--color-ink-gradient)" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(26,58,107,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translate(-50%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(200,160,60,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left */}
            <ScrollReveal className="lg:col-span-7">
              <div>
                <p className="label mb-6" style={{ color: "var(--c-accent)" }}>Campus</p>
                <hr className="mb-10" style={{ borderColor: "rgba(255,255,255,0.1)" }} />
                <h2 className="mb-10" style={{ color: "white" }}>Built for Excellence, Designed for Growth</h2>
                <div className="space-y-6 text-base leading-[1.8] text-white/60" style={{ color: "", maxWidth: "560px" }}>
                  <p>Al Jamia Arts & Science College campus is spread across a serene, multi-acre landscape in Perinthalmanna, providing the ideal atmosphere for rigorous academic pursuits and vibrant campus life.</p>
                  <p>Our infrastructure is purpose-built to provide students with a holistic, world-class learning experience — from advanced research laboratories and a comprehensive digital library to modern residential facilities and cultural spaces.</p>
                </div>
                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-14 pt-14" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  {[
                    { label: "Campus Area", value: "10+ Acres" },
                    { label: "Facilities", value: "12+" },
                    { label: "Lab Systems", value: "100+" },
                    { label: "Library Volumes", value: "15,000+" },
                  ].map((s, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-[0.1em] mb-1" style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.35)" }}>
                        {s.label}
                      </span>
                      <span className="text-sm font-semibold text-white">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right — campus image */}
            <ScrollReveal delay={0.1} className="lg:col-span-5 flex items-center">
              <div className="w-full aspect-[4/5] overflow-hidden" style={{ borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src="/images/hero.png" alt="Campus View" className="w-full h-full object-cover opacity-90" />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Facilities — alternating editorial rows */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">

          {/* Section header */}
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4">Facilities</p>
                <h2 className="m-0">Our Key Facilities</h2>
              </div>
              <div className="flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-20 md:gap-28">
            {facilities.map((facility, i) => (
              <ScrollReveal key={i}>
                <div
                  id={facility.id}
                  className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className="aspect-[4/3] w-full overflow-hidden group"
                      style={{ borderRadius: "var(--radius-lg)", border: "1px solid var(--c-border)" }}
                    >
                      <img
                        src={facility.imagePath}
                        alt={facility.heading}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    {/* Icon + index */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-12 h-12 flex items-center justify-center rounded-xl"
                        style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", color: "var(--c-primary)" }}
                      >
                        <facility.icon size={20} />
                      </div>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}
                      >
                        {String(i + 1).padStart(2, "0")} / {String(facilities.length).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mb-4" style={{ color: "var(--c-text-primary)", fontFamily: "var(--font-display)" }}>
                      {facility.heading}
                    </h3>
                    <p className="text-base leading-relaxed mb-10" style={{ color: "var(--c-text-secondary)", maxWidth: "460px" }}>
                      {facility.desc}
                    </p>

                    {/* Feature list as editorial rows */}
                    <div style={{ borderTop: "1px solid var(--c-border)" }}>
                      {facility.features.map((feature, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-4 py-3 text-sm"
                          style={{ borderBottom: "1px solid var(--c-border)", color: "var(--c-text-secondary)" }}
                        >
                          <span
                            className="text-xs font-medium flex-shrink-0"
                            style={{ color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}
                          >
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section
        className="py-12 md:py-16 lg:py-20"
        style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4">Future Growth</p>
                <h2 className="m-0" style={{ color: "var(--c-text-primary)" }}>Upcoming Projects</h2>
              </div>
              <div className="flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Academic Block — Phase II", status: "In Progress", desc: "A new multi-storey building featuring 12 smart classrooms, a dedicated research wing, and modern faculty offices to meet growing enrollment." },
              { name: "Sports Complex", status: "Proposed", desc: "An indoor stadium with world-class facilities for badminton, basketball, and a fully-equipped modern gymnasium for holistic student well-being." },
            ].map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="block h-full">
                <PremiumCard className="p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h4 className="font-semibold text-white leading-snug" style={{ fontFamily: "var(--font-display)" }}>{p.name}</h4>
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.1em] flex-shrink-0 px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "var(--c-accent)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.55)" }}>{p.desc}</p>
                  <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <button
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
                      style={{ color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}
                    >
                      Learn more <ArrowRight size={12} />
                    </button>
                  </div>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fees" className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-12">
              <div>
                <p className="label mb-4">Admissions Info</p>
                <h2 className="m-0">Fee Structure</h2>
              </div>
              <div className="flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Document list */}
            <ScrollReveal className="lg:col-span-2">
              <div>
                {[
                  { name: "UG Programmes Fee Schedule 2024-25", size: "1.2 MB" },
                  { name: "UG Arts & Humanities Fee Breakdown", size: "980 KB" },
                  { name: "UG Science & Technology Fee Breakdown", size: "1.0 MB" },
                  { name: "UG Commerce Fee Breakdown", size: "870 KB" },
                  { name: "PG Programmes Fee Schedule 2024-25", size: "1.1 MB" },
                  { name: "Hostel Fee & Refund Policy", size: "800 KB" },
                  { name: "Scholarship & Financial Aid Guide", size: "640 KB" },
                ].map((doc, i, arr) => (
                  <div
                    key={i}
                    className="grid items-center gap-6 py-4 group"
                    style={{
                      gridTemplateColumns: "1fr auto auto",
                      borderBottom: "1px solid var(--c-border)",
                    }}
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
                      <span className="text-sm" style={{ color: "var(--c-text-primary)" }}>{doc.name}</span>
                    </div>
                    <span className="text-xs" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>{doc.size}</span>
                    <button
                      className="flex items-center gap-1.5 text-xs font-medium transition-opacity duration-150 opacity-60 group-hover:opacity-100"
                      style={{ color: "var(--c-text-primary)" }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Summary Card */}
            <ScrollReveal delay={0.2}>
              <PremiumCard className="p-8 h-full">
                <p
                  className="text-xs font-medium uppercase tracking-[0.12em] mb-8 pb-4"
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.09)",
                    fontFamily: "var(--font-mono)",
                    opacity: 0.5,
                  }}
                >
                  Summary Table
                </p>
                <div className="space-y-5">
                  {[
                    { label: "UG Arts (Avg/Sem)", value: "₹9,500" },
                    { label: "UG Science (Avg/Sem)", value: "₹18,500" },
                    { label: "PG (Avg/Sem)", value: "₹22,000" },
                    { label: "Hostel (Avg/Month)", value: "₹4,500" },
                  ].map((f, i, arr) => (
                    <div
                      key={i}
                      className="flex justify-between items-center text-sm"
                      style={{
                        borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                        paddingBottom: i < arr.length - 1 ? "1.25rem" : 0,
                      }}
                    >
                      <span style={{ opacity: 0.45 }}>{f.label}</span>
                      <span className="font-semibold" style={{ letterSpacing: "0.01em" }}>{f.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] mt-8 italic" style={{ color: "rgba(255,255,255,0.25)" }}>
                  Note: Fees are subject to University of Calicut and Kerala Govt. regulations.
                </p>
              </PremiumCard>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </div>
  );
}
