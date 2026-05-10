"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumCard from "@/components/PremiumCard";
import Link from "next/link";
import { Award, Shield, Users, Landmark } from "lucide-react";

export default function AboutPage() {
  const adminRows = [
    { designation: "Principal", name: "Dr. C.K. Abdul Rabbi Nistar", details: "Lt.Cdr.Rtd." },
    { designation: "Vice Principal", name: "[Name Placeholder]", details: "Senior Faculty" },
    { designation: "Administrative Officer", name: "[Name Placeholder]", details: "Admin Office" },
    { designation: "Manager", name: "[Name Placeholder]", details: "Trust Office" },
  ];

  const committees = [
    "Internal Quality Assurance Cell (IQAC)", "College Council", "Anti-Ragging Committee",
    "Grievance Redressal Cell", "Internal Complaint Committee (ICC)", "SC/ST Cell",
    "Minority Cell", "OBC Cell", "Discipline Committee", "Purchase Committee",
  ];

  const disclosures = [
    { name: "University Affiliation Letter", year: "2024-25" },
    { name: "RTI Declaration & Disclosure", year: "2024" },
    { name: "Minority Institution Certificate", year: "Permanent" },
    { name: "ISO 9001:2015 Certificate", year: "Valid 2026" },
    { name: "Government NOC Documents", year: "2010" },
    { name: "UGC 2(F) Recognition Document", year: "Updated" },
    { name: "College Performance Audit (CPA)", year: "2024-25" },
  ];

  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "About" }]}
        label="ABOUT US"
        heading="Excellence in Education"
        subtext="Empowering minds since 2010. Al Jamia Arts & Science College is committed to academic rigor and ethical growth."
        showImage={true}
        bgImage="/images/about_hero_new.png"
      />

      {/* Vision & Mission */}
      <section
        id="vision"
        className="py-12 md:py-16 lg:py-20 relative overflow-hidden bg-ink text-white"
        style={{ background: "var(--color-ink-gradient)" }}
      >
        {/* Ambient background glow */}
        <div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--c-primary-rgb, 26,58,107),0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translate(50%, -30%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px" style={{ background: "var(--c-accent)" }} />
                <span className="label" style={{ color: "var(--c-accent)" }}>Our Vision</span>
              </div>
              <h3 className="mb-6 leading-relaxed" style={{ fontFamily: "var(--font-display)", color: "white" }}>
                To be a premier institution of higher learning, nurturing intellectual curiosity and moral character.
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                We strive to shape future-ready leaders who contribute to a just, equitable, and sustainable society through unwavering commitment to excellence.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px" style={{ background: "var(--c-accent)" }} />
                <span className="label" style={{ color: "var(--c-accent)" }}>Our Mission</span>
              </div>
              <h3 className="mb-6 leading-relaxed" style={{ fontFamily: "var(--font-display)", color: "white" }}>
                Providing quality education through innovative, research-oriented teaching.
              </h3>
              <ul className="space-y-4 text-base" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                {[
                  "Foster an environment driven by continuous research and academic rigor.",
                  "Instill profound ethical values and social responsibility in every student.",
                  "Empower communities through inclusive and innovative learning processes.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-semibold mt-1 text-sm flex-shrink-0" style={{ color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}>0{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Left — editorial content */}
            <ScrollReveal className="lg:col-span-7">
              <div>
                <p className="label mb-6">College Overview</p>
                <hr className="divider-accent mb-10" />

                <h2 className="mb-10">A Legacy of Quality Learning, Since 2010</h2>

                <div className="space-y-6 text-base leading-[1.8]" style={{ color: "var(--c-text-secondary)", maxWidth: "560px" }}>
                  <p>Al Jamia Arts & Science College (AJAS), established in 2010, is a premier self-financing minority institution affiliated with the University of Calicut. Nestled in Perinthalmanna, Malappuram, the college has emerged as a beacon of academic excellence in North Kerala, dedicated to nurturing the next generation of scholars and professionals.</p>
                  <p>Managed by the prestigious Al Jamia Al Islamia Trust, our institution combines six decades of educational legacy with modern pedagogical approaches. We offer a diverse range of undergraduate and postgraduate programmes meticulously designed to meet the dynamic demands of the global workforce.</p>
                  <p>Our campus is a vibrant ecosystem where state-of-the-art infrastructure meets intellectual rigour — advanced laboratories, a comprehensive digital library, and dedicated faculty who nurture future leaders making meaningful contributions to society.</p>
                </div>

                {/* Editorial data stats */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-6 mt-14 pt-14" style={{ borderTop: "1px solid var(--c-border)" }}>
                  {[
                    { label: "Affiliation", value: "University of Calicut" },
                    { label: "Status", value: "Minority Institution" },
                    { label: "Recognition", value: "UGC 2(f)" },
                    { label: "Certification", value: "ISO 9001:2015" },
                  ].map((f, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[11px] uppercase tracking-[0.1em] mb-1" style={{ fontFamily: "var(--font-mono)", color: "var(--c-text-tertiary)" }}>
                        {f.label}
                      </span>
                      <span className="text-sm font-medium" style={{ color: "var(--c-text-primary)" }}>
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Principal card + College Highlights */}
            <div className="lg:col-span-5">
              <div className="flex flex-col gap-6">

                {/* Principal card with quote */}
                <ScrollReveal delay={0}>
                  <PremiumCard className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-full overflow-hidden shrink-0" style={{ border: "2px solid rgba(255,255,255,0.1)" }}>
                        <img src="/images/principle-image.jpeg" alt="Principal" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-base text-white">Dr. C.K. Abdul Rabbi Nistar</p>
                        <p className="text-xs mt-1" style={{ fontFamily: "var(--font-mono)", color: "var(--c-accent)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                          Principal
                        </p>
                      </div>
                    </div>
                    <hr className="my-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />
                    <p className="text-sm leading-relaxed italic text-white/90" style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", lineHeight: 1.7 }}>
                      "At AJAS, we strive to provide an environment that fosters intellectual curiosity and social responsibility."
                    </p>
                  </PremiumCard>
                </ScrollReveal>

                {/* College Highlights */}
                <ScrollReveal delay={0.08}>
                  <PremiumCard className="p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] mb-8 pb-4 relative"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.09)", fontFamily: "var(--font-mono)", opacity: 0.5 }}>
                      College Highlights
                    </p>
                    <div className="space-y-5 relative">
                      {[
                        { label: "Established", value: "2010" },
                        { label: "Campus Area", value: "10+ Acres" },
                        { label: "Programmes", value: "UG & PG" },
                        { label: "Students", value: "1500+" },
                      ].map((item, i, arr) => (
                        <div key={i} className="flex justify-between items-center text-sm"
                          style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", paddingBottom: i < arr.length - 1 ? "1.25rem" : 0 }}>
                          <span style={{ opacity: 0.45 }}>{item.label}</span>
                          <span className="font-semibold" style={{ letterSpacing: "0.01em" }}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </PremiumCard>
                </ScrollReveal>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4">Guiding Principles</p>
                <h2 className="m-0">Our Core Values</h2>
              </div>
              <div className="flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "Upholding the highest ethical standards in all our academic and administrative pursuits." },
              { icon: Award, title: "Excellence", desc: "Striving for continuous improvement and superior performance in every aspect of education." },
              { icon: Users, title: "Inclusivity", desc: "Creating a welcoming environment that respects diversity and promotes equity for all." },
              { icon: Landmark, title: "Social Responsibility", desc: "Encouraging students to use their knowledge for the betterment of the community." },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={(i % 4) * 0.08} className="block h-full">
                <div
                  className="group relative flex flex-col items-center text-center gap-3 p-6 transition-all duration-300 overflow-hidden border border-[var(--c-primary)] shadow-lg shadow-blue-900/20 group-hover:shadow-2xl h-full w-full"
                  style={{
                    background:
                      "linear-gradient(145deg, var(--c-primary, #1a3a6b) 0%, #0f2d5c 40%, #162650 70%, #0d1e3d 100%)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  {/* Hover glow effect instead of white background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
                      borderRadius: "var(--radius-lg)",
                    }}
                  />

                  <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-xl transition-colors duration-300 bg-white/10 group-hover:bg-white/20 text-white mb-2">
                    <div className="transition-colors duration-300">
                      <value.icon size={24} />
                    </div>
                  </div>

                  <div className="relative z-10 flex-1">
                    <h4 className="mb-2 font-semibold text-base" style={{ color: "#ffffff" }}>
                      {value.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--c-accent)" }}>
                      {value.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Administration */}
      <section
        id="admin"
        className="py-12 md:py-16 lg:py-20 relative overflow-hidden bg-ink text-white"
        style={{ background: "var(--color-ink-gradient)" }}
      >
        {/* Ambient background glow */}
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(var(--c-primary-rgb, 26,58,107),0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translate(-50%, -30%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <ScrollReveal>
            <div className="mb-12">
              <p className="label mb-4" style={{ color: "var(--c-accent)" }}>Leadership</p>
              <h2 className="text-white">College Administration</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <ScrollReveal>
              <PremiumCard 
                className="p-8 text-center h-full"
                style={{ background: "#142038" }}
              >
                <div className="w-40 h-40 md:w-32 md:h-32 rounded-full mx-auto mb-6 overflow-hidden border-2 border-white/10 shadow-xl">
                  <img src="/images/principle-image.jpeg" alt="Principal" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-semibold text-white">Dr. C.K. Abdul Rabbi Nistar</h4>
                <p className="text-xs mt-2 uppercase tracking-[0.2em]" style={{ color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}>Principal</p>
              </PremiumCard>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="lg:col-span-2">
              <div className="overflow-hidden h-full" style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)", background: "rgba(255,255,255,0.03)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      {["Designation", "Name", "Details"].map(h => (
                        <th key={h} className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.4)" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {adminRows.map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        <td className="px-6 py-5 font-medium text-white">{row.designation}</td>
                        <td className="px-6 py-5 text-white/70">{row.name}</td>
                        <td className="px-6 py-5 text-white/40">{row.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="aspect-[4/3] md:aspect-[3/1] w-full overflow-hidden" style={{ borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <img src="/images/faculty_group_photo.png" alt="Administration Team" className="w-full h-full object-cover opacity-80 transition-opacity duration-500 hover:opacity-100" />
            </div>
          </ScrollReveal>
        </div>
      </section>

  {/* Committees */}
<section id="committees" className="py-12 md:py-16 lg:py-20" style={{ borderTop: "1px solid var(--c-border)" }}>
  <div className="max-w-7xl mx-auto px-6 md:px-16">
    <ScrollReveal>
      <div className="flex items-baseline gap-8 mb-10">
        <div>
          <p className="label mb-2">Governance</p>
          <h2 className="m-0">College Committees</h2>
        </div>
        <div className="flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
      </div>
    </ScrollReveal>

    <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-0">
      {/* Left column */}
      <div>
        {committees.slice(0, Math.ceil(committees.length / 2)).map((c, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div
              className="flex items-center gap-4 py-3.5"
              style={{ borderBottom: "1px solid var(--c-border)" }}
            >
              <span
                className="text-xs font-medium w-6 flex-shrink-0"
                style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm" style={{ color: "var(--c-text-primary)" }}>{c}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Vertical divider */}
      <div className="hidden md:block mx-8" style={{ background: "var(--c-border)" }} />

      {/* Right column */}
      <div>
        {committees.slice(Math.ceil(committees.length / 2)).map((c, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div
              className="flex items-center gap-4 py-3.5"
              style={{ borderBottom: "1px solid var(--c-border)" }}
            >
              <span
                className="text-xs font-medium w-6 flex-shrink-0"
                style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}
              >
                {String(Math.ceil(committees.length / 2) + i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm" style={{ color: "var(--c-text-primary)" }}>{c}</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </div>
</section>

{/* Mandatory Disclosure */}
<section id="disclosure" className="py-12 md:py-16 lg:py-20" style={{ borderTop: "1px solid var(--c-border)" }}>
  <div className="max-w-7xl mx-auto px-6 md:px-16">
    <ScrollReveal>
      <div className="flex items-baseline gap-8 mb-10">
        <div>
          <p className="label mb-2">Transparency</p>
          <h2 className="m-0">Mandatory Disclosure</h2>
        </div>
        <div className="flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
      </div>
    </ScrollReveal>

    <div>
      {disclosures.map((doc, i) => (
        <ScrollReveal key={i} delay={(i % 5) * 0.05}>
          <div
            className="grid items-center gap-6 py-4 group"
            style={{
              gridTemplateColumns: "1fr auto auto",
              borderBottom: i < disclosures.length - 1 ? "1px solid var(--c-border)" : "none",
            }}
          >
            {/* Name */}
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-semibold px-1.5 py-0.5 rounded flex-shrink-0"
                style={{
                  background: "var(--c-surface-raised)",
                  color: "var(--c-text-tertiary)",
                  border: "1px solid var(--c-border)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.04em",
                }}
              >
                PDF
              </span>
              <span className="text-sm" style={{ color: "var(--c-text-primary)" }}>
                {doc.name}
              </span>
            </div>

            {/* Year */}
            <span
              className="text-xs"
              style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}
            >
              {doc.year}
            </span>

            {/* Download */}
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
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>

      {/* Sister Institutions */}
      <section
        id="sister"
        className="py-12 md:py-16 lg:py-20"
        style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-12">
              <div>
                <p className="label mb-4">Network</p>
                <h2 className="m-0" style={{ color: "var(--c-text-primary)" }}>Sister Institutions</h2>
              </div>
              <div className="flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Al Jamia Al Islamia", location: "Santhapuram, Kerala" },
              { name: "AJAS School of Management", location: "Perinthalmanna, Kerala" },
              { name: "Al Jamia Preparatory School", location: "Malappuram, Kerala" },
            ].map((inst, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 0.08} className="block h-full">
                <PremiumCard className="p-8 h-full flex flex-col group transition-all duration-500 hover:-translate-y-2">
                  <div className="relative z-10">
                    <h4 className="mb-3 font-semibold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>{inst.name}</h4>
                    <p className="text-sm text-white/50 mb-8" style={{ fontFamily: "var(--font-body)" }}>{inst.location}</p>
                    <div className="mt-auto">
                      <Link 
                        href="#" 
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--c-accent)] hover:text-white transition-colors duration-300"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        Visit Site <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
