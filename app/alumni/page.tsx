"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { User as UserIcon } from "lucide-react";

const alumni = [
  { name: "Mohammed Azeer", batch: "2016-18", dept: "Islamic Finance", company: "Finance Consultant", city: "Dubai" },
  { name: "Mohammed Shabeel K.", batch: "2016-19", dept: "BBA Finance", company: "Senior Analyst", city: "Bangalore" },
  { name: "SAFWA K", batch: "2016-19", dept: "Psychology", company: "Clinical Psychologist", city: "Kochi" },
  { name: "Fathima Hiba", batch: "2017-20", dept: "English", company: "Content Strategist", city: "Chennai" },
  { name: "Ashraf Ali", batch: "2015-18", dept: "BCA", company: "Software Engineer at TCS", city: "Trivandrum" },
  { name: "Zainab T", batch: "2018-21", dept: "Microbiology", company: "Research Assistant", city: "Mumbai" },
];

export default function AlumniPage() {
  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "Alumni" }]}
        label="ALUMNI ASSOCIATION"
        heading="Global Network"
        subtext="Connecting graduates across the globe. Stay in touch, give back, and grow with your alma mater."
        showImage={true}
        bgImage="/images/alumni_hero.png"
      />

      {/* Notable Alumni Directory */}
      <section className="page-section" style={{ background: "var(--c-surface-raised)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <p className="label mb-4">Directory</p>
            <h2 className="mb-12">Notable Alumni</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="overflow-hidden hidden md:block" style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
              <table className="w-full text-left">
                <thead>
                  <tr style={{ background: "var(--c-surface)", borderBottom: "1px solid var(--c-border)" }}>
                    {["Name", "Batch", "Dept", "Company/Role", "City"].map(h => (
                      <th key={h} className="px-6 py-4 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)", color: "var(--c-text-tertiary)" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody style={{ background: "var(--c-surface-raised)" }}>
                  {alumni.map((p, i) => (
                    <tr key={i} className="hover:bg-[var(--c-surface)] transition-colors duration-200" style={{ borderBottom: i < alumni.length - 1 ? "1px solid var(--c-border)" : "none" }}>
                      <td className="px-6 py-4 text-sm font-medium" style={{ color: "var(--c-text-primary)" }}>{p.name}</td>
                      <td className="px-6 py-4 text-sm" style={{ color: "var(--c-text-secondary)" }}>{p.batch}</td>
                      <td className="px-6 py-4 text-sm" style={{ color: "var(--c-text-secondary)" }}>{p.dept}</td>
                      <td className="px-6 py-4 text-sm" style={{ color: "var(--c-text-primary)" }}>{p.company}</td>
                      <td className="px-6 py-4 text-sm" style={{ color: "var(--c-text-secondary)" }}>{p.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {alumni.slice(0, 3).map((p, i) => (
                <div key={i} className="p-5 card-base">
                  <div className="flex justify-between items-start mb-2">
                    <h4 style={{ color: "var(--c-text-primary)" }}>{p.name}</h4>
                    <span className="status-badge">{p.batch}</span>
                  </div>
                  <p className="text-sm" style={{ color: "var(--c-text-secondary)" }}>{p.dept}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--c-text-tertiary)" }}>{p.company}, {p.city}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Success Stories */}
      <section className="page-section" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <p className="label mb-4">Spotlight</p>
            <h2 className="mb-12">Success Stories</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Fathima Hiba", info: "BA English, Batch of 2020", quote: "The supportive environment at AJAS gave me the confidence to pursue a career in media and content creation at a global level." },
              { name: "Mohammed Azeer", info: "MA Islamic Finance, Batch 2018", quote: "The academic environment at AJAS provided me with a strong foundation. The curriculum played a crucial role in shaping my career." },
              { name: "SAFWA K", info: "BSc Psychology, 1st Rank 2019", quote: "Achieving the 1st rank was possible because of the continuous support from my professors. The psychology department is excellent." },
            ].map((story, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 h-full flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1" style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)", background: "var(--c-surface-raised)" }}>
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-5 flex-shrink-0"
                    style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)" }}
                  >
                    <UserIcon size={24} style={{ color: "var(--c-text-tertiary)" }} />
                  </div>
                  <h4 className="mb-1" style={{ color: "var(--c-text-primary)" }}>{story.name}</h4>
                  <p className="text-xs mb-5" style={{ color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}>{story.info}</p>
                  <p className="text-sm leading-relaxed italic" style={{ color: "var(--c-text-secondary)" }}>"{story.quote}"</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="page-section" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <ScrollReveal>
                <p className="label mb-6">Join Network</p>
                <h2 className="mb-6">Alumni Registration</h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: "var(--c-text-secondary)" }}>
                  Are you an AJAS graduate? Register yourself to stay connected with batchmates, participate in alumni events, and contribute to the college.
                </p>
                <div className="aspect-video w-full overflow-hidden" style={{ borderRadius: "var(--radius-lg)", border: "1px solid var(--c-border)" }}>
                  <img src="/images/graduation_kerala.png" alt="Campus Memories" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2">
              <ScrollReveal delay={0.2}>
                <div className="p-8 card-base">
                  <form className="space-y-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Full Name</label>
                      <input type="text" className="input-base" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Batch Year</label>
                        <select className="input-base">
                          <option>2010</option><option>2015</option><option>2020</option><option>2024</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Department</label>
                        <select className="input-base">
                          <option>BBA</option><option>BCA</option><option>English</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Current Profession/Company</label>
                      <input type="text" className="input-base" />
                    </div>
                    <button type="button" className="btn-primary">Register as Alumni</button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
