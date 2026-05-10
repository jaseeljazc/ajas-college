"use client";

import PageHero from "@/components/PageHero";
import PremiumCard from "@/components/PremiumCard";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Book, Database, ExternalLink, User, Clock, Wifi, Printer,
  BookOpen, Search, Bell, FileText, ShieldCheck, ArrowRight
} from "lucide-react";

export default function LibraryPage() {
  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "Library" }]}
        label="KNOWLEDGE RESOURCE"
        heading="College Library"
        subtext="A gateway to a world of information, supporting the academic and research needs of the AJAS community."
        showImage={true}
        bgImage="/images/library_hero_new.png"
      />

      {/* Stats — Ink Banner */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--color-ink-gradient)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(26,58,107,0.4) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {[
              { label: "Printed Volumes", value: "15,000+", icon: Book },
              { label: "Journals", value: "50+", icon: FileText },
              { label: "E-Resources", value: "N-List", icon: Database },
              { label: "OPAC", value: "Available", icon: Search },
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

      {/* Overview — Editorial two-column */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <p className="label mb-4">About</p>
              <h2 className="mb-6">The Heart of<br />Academic Life</h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--c-text-secondary)" }}>
                The Central Library of Al Jamia Arts & Science College is a state-of-the-art facility designed to provide comprehensive information resources. With a vast collection of printed books, journals, and digital assets, it serves as the critical support system for teaching, learning, and research.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: BookOpen, label: "Open Stacks", desc: "Free access browsing" },
                  { icon: Database, label: "Digital Resources", desc: "INFLIBNET N-List access" },
                  { icon: Search, label: "OPAC System", desc: "Real-time catalogue" },
                  { icon: Wifi, label: "Wi-Fi Zone", desc: "High-speed campus Wi-Fi" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                    <div className="w-9 h-9 flex items-center justify-center shrink-0" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-sm)", color: "var(--c-primary)" }}>
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>{item.label}</p>
                      <p className="text-xs font-medium" style={{ color: "var(--c-text-secondary)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="aspect-[4/3] w-full overflow-hidden" style={{ borderRadius: "var(--radius-lg)", border: "1px solid var(--c-border)" }}>
                <img src="/images/library.png" alt="Library Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid — Programme Card style */}
      <section className="py-12 md:py-16 lg:py-20" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4">Services</p>
                <h2 className="m-0">What We Offer</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: BookOpen, name: "Circulation", desc: "Issue and return of books with a 14-day lending period for registered members.", tag: "Core Service" },
              { icon: Search, name: "Reference & Referral", desc: "Expert guidance in locating specific academic material and inter-library referrals.", tag: "Information" },
              { icon: Printer, name: "Reprographic Facility", desc: "Photocopying, printing, and scanning services available at subsidized rates.", tag: "Facility" },
              { icon: Database, name: "Digital Repository", desc: "Access to N-LIST and other INFLIBNET databases for e-journals and e-books.", tag: "Digital" },
              { icon: Bell, name: "Current Awareness", desc: "Regular updates on new arrivals, journals, and resources added to the collection.", tag: "Notification" },
              { icon: User, name: "User Orientation", desc: "Induction programmes for new students on how to effectively use the library.", tag: "Training" },
              { icon: FileText, name: "News Clips Service", desc: "Curated news clippings related to academic and career topics for students.", tag: "Research Aid" },
              { icon: Wifi, name: "Wi-Fi Connectivity", desc: "Seamless high-speed internet access within the library for all students.", tag: "Connectivity" },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={i} delay={(i % 4) * 0.06}>
                  <div
                    className="group relative flex flex-col gap-3 p-5 h-full overflow-hidden"
                    style={{
                      background: "linear-gradient(145deg, #1a3a6b 0%, #0f2d5c 40%, #0d1e3d 100%)",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Hover light fill */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: "var(--c-surface)", borderRadius: "var(--radius-lg)" }} />
                    <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }} />

                    {/* Icon + Tag */}
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="w-9 h-9 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-sm)" }}>
                        <Icon size={16} style={{ color: "var(--c-accent)" }} className="group-hover:text-[var(--c-primary)] transition-colors duration-300" />
                      </div>
                      <span
                        className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 transition-all duration-300 group-hover:!bg-[var(--c-surface-raised)] group-hover:!text-[var(--c-text-tertiary)] group-hover:!border-[var(--c-border)]"
                        style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "99px", color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-mono)" }}
                      >
                        {service.tag}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="relative z-10 flex-1">
                      <h4 className="font-bold mb-1.5 transition-colors duration-300 group-hover:!text-[var(--c-text-primary)]" style={{ fontSize: "0.85rem", color: "#fff" }} >
                        {service.name}
                      </h4>
                      <p className="text-[11px] leading-relaxed transition-colors duration-300 text-white/55 group-hover:text-[var(--c-text-secondary)]">
                        {service.desc}
                      </p>
                    </div>

                    <div className="relative z-10 mt-auto pt-3 flex items-center justify-end" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                      <ArrowRight size={12} className="opacity-30 group-hover:opacity-100 group-hover:text-[var(--c-primary)] transition-all duration-300 text-white" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPAC + Working Hours — Ink Theme */}
      <section
        className="py-12 md:py-16 lg:py-20 relative overflow-hidden"
        style={{ background: "var(--color-ink-gradient)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(26,58,107,0.3) 0%, transparent 70%)", filter: "blur(100px)" }} />
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* OPAC */}
            <ScrollReveal>
              <p className="label mb-4" style={{ color: "var(--c-accent)" }}>Access</p>
              <h2 className="mb-8" style={{ color: "white" }}>Digital Library & OPAC</h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                The Online Public Access Catalogue (OPAC) provides a comprehensive digital gateway to our extensive physical and digital collections. Students and faculty can perform advanced searches by title, author, subject, or ISBN from any device, ensuring a seamless research experience both on and off-campus.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { title: "Advanced Search", desc: "Filter by Author, ISBN, or Subject" },
                  { title: "Real-time Tracking", desc: "Check availability & shelf location" },
                  { title: "Remote Access", desc: "Browse the collection from anywhere" },
                  { title: "Status Updates", desc: "View current reservation status" },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "var(--c-accent)" }} />
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "white" }}>{f.title}</p>
                      <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius-lg)" }}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-sm)", color: "var(--c-accent)" }}>
                    <Database size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "white" }}>Library Catalogue</p>
                    <p className="text-[10px] font-mono mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>http://116.68.127.22</p>
                  </div>
                </div>
                <a
                  href="http://116.68.127.22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest px-5 py-3 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "var(--c-accent)", borderRadius: "var(--radius-sm)", color: "#0a0e1a", fontFamily: "var(--font-mono)" }}
                >
                  Access OPAC <ExternalLink size={11} />
                </a>
              </div>
            </ScrollReveal>

            {/* Working Hours */}
            <ScrollReveal delay={0.15}>
              <p className="label mb-4" style={{ color: "var(--c-accent)" }}>Schedule</p>
              <h2 className="mb-8" style={{ color: "white" }}>Working Hours</h2>
              <div className="overflow-x-auto no-scrollbar mb-6" style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      {["Day", "Opens", "Closes"].map(h => (
                        <th key={h} className="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)", color: "rgba(255,255,255,0.4)" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { day: "Monday – Friday", open: "08:30 AM", close: "05:00 PM" },
                      { day: "Saturday", open: "09:00 AM", close: "03:30 PM" },
                      { day: "Sunday & Holidays", open: "Closed", close: "—" },
                    ].map((row, i, arr) => (
                      <tr key={i} style={{ borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", background: "transparent" }}>
                        <td className="px-5 py-4 font-medium text-sm" style={{ color: "white" }}>{row.day}</td>
                        <td className="px-5 py-4 text-sm" style={{ color: row.open === "Closed" ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.6)" }}>{row.open}</td>
                        <td className="px-5 py-4 text-sm" style={{ color: row.close === "—" ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.6)" }}>{row.close}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Contact */}
              <div className="flex items-center gap-4 p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius-lg)" }}>
                <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "var(--c-accent)", borderRadius: "var(--radius-sm)", color: "#0a0e1a" }}>
                  <User size={18} />
                </div>
                <div>
                  <h5 className="text-sm font-semibold" style={{ color: "white" }}>Library Team</h5>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>Contact our librarian for assistance.</p>
                  <p className="text-xs font-semibold mt-1" style={{ color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}>librarian@ajascollege.ac.in</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Rules — White Theme */}
      <section
        className="py-12 md:py-16 lg:py-20"
        style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-baseline gap-8 mb-16">
              <div>
                <p className="label mb-4">Regulations</p>
                <h2 className="m-0">Library Rules</h2>
              </div>
              <div className="hidden md:block flex-1" style={{ borderTop: "1px solid var(--c-border)" }} />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, rule: "Identify cards are mandatory for entering and using the library premises at all times." },
              { icon: Bell, rule: "Maintain absolute silence within the library. Loud discussions are not permitted." },
              { icon: Clock, rule: "Books are issued for a period of 14 days. Overdue returns will incur a fine." },
              { icon: BookOpen, rule: "A fine will be charged for overdue books as per the college rules and regulations." },
              { icon: FileText, rule: "Personal belongings including bags must be deposited at the property counter." },
              { icon: Database, rule: "E-Library resources (N-LIST, OPAC) must be used for academic purposes only." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={i} delay={(i % 2) * 0.06}>
                  <div className="flex gap-4 p-5" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                    <div className="w-9 h-9 flex items-center justify-center shrink-0" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-sm)", color: "var(--c-primary)" }}>
                      <Icon size={15} />
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>{item.rule}</p>
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
