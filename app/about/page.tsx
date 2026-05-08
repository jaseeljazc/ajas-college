"use client";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import DataTable from "@/components/DataTable";
import DocumentRow from "@/components/DocumentRow";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { Eye, Target, Award, Shield, Users, Landmark } from "lucide-react";

export default function AboutPage() {
  const adminColumns = [
    { header: "Designation", accessor: "designation" },
    { header: "Name", accessor: "name" },
    { header: "Details", accessor: "details" },
  ];

  const adminRows = [
    { designation: "Principal", name: "Dr. C.K. Abdul Rabbi Nistar", details: "Lt.Cdr.Rtd." },
    { designation: "Vice Principal", name: "[Name Placeholder]", details: "Senior Faculty" },
    { designation: "Administrative Officer", name: "[Name Placeholder]", details: "Admin Office" },
  ];

  const committees = [
    "Internal Quality Assurance Cell (IQAC)",
    "College Council",
    "Anti-Ragging Committee",
    "Grievance Redressal Cell",
    "Internal Complaint Committee (ICC)",
    "SC/ST Cell",
    "Minority Cell",
    "OBC Cell",
    "Discipline Committee",
    "Purchase Committee",
  ];

  return (
    <div className="flex flex-col">
      <PageHero
        breadcrumbs={[{ label: "About" }]}
        label="ABOUT US"
        heading="Excellence in Education"
        subtext="Empowering minds since 2010. Al Jamia Arts & Science College is committed to academic rigor and ethical growth."
        showImage={true}
        bgImage="/images/hero.png"
      />

      {/* Vision & Mission — Editorial Redesign */}
      <section id="vision" className="py-32" style={{ background: 'var(--c-surface-raised)', borderBottom: '1px solid var(--c-border)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            
            {/* Vision */}
            <ScrollReveal>
              <div className="relative">
                <span className="absolute -top-12 -left-6 text-[120px] leading-none opacity-[0.03] select-none" style={{ fontFamily: 'var(--font-display)' }}>V</span>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-px" style={{ background: 'var(--c-accent)' }} />
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--c-primary)' }}>Our Vision</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl leading-relaxed mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--c-text-primary)' }}>
                    To be a premier institution of higher learning, nurturing intellectual curiosity and moral character.
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--c-text-secondary)' }}>
                    We strive to shape future-ready leaders who contribute to a just, equitable, and sustainable society through unwavering commitment to excellence.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <span className="absolute -top-12 -left-6 text-[120px] leading-none opacity-[0.03] select-none" style={{ fontFamily: 'var(--font-display)' }}>M</span>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-8 h-px" style={{ background: 'var(--c-accent)' }} />
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--c-primary)' }}>Our Mission</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl leading-relaxed mb-6" style={{ fontFamily: 'var(--font-display)', color: 'var(--c-text-primary)' }}>
                    Providing quality education through innovative, research-oriented teaching.
                  </h3>
                  <ul className="space-y-4 text-base" style={{ color: 'var(--c-text-secondary)' }}>
                    <li className="flex gap-4">
                      <span className="font-serif mt-1 text-sm font-semibold" style={{ color: 'var(--c-accent)' }}>01</span>
                      <span>Foster an environment driven by continuous research and academic rigor.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-serif mt-1 text-sm font-semibold" style={{ color: 'var(--c-accent)' }}>02</span>
                      <span>Instill profound ethical values and social responsibility in every student.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-serif mt-1 text-sm font-semibold" style={{ color: 'var(--c-accent)' }}>03</span>
                      <span>Empower communities through inclusive and innovative learning processes.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* College Overview */}
      <section id="overview" className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-3/5">
              <ScrollReveal>
                <SectionHeader
                  label="COLLEGE OVERVIEW"
                  heading="A Legacy of Quality Learning"
                />
                <div className="text-[#4b5563] space-y-6 leading-relaxed">
                  <p>
                    Al Jamia Arts & Science College (AJAS), established in 2010, is a self-financing institution affiliated to the University of Calicut. Located in the serene environment of Perinthalmanna, Malappuram district, the college has rapidly grown into a prominent centre of higher education in North Kerala.
                  </p>
                  <p>
                    Our institution is managed by the Al Jamia Al Islamia Trust, which has decades of experience in the educational sector. We offer a wide range of undergraduate and postgraduate programmes designed to meet the evolving needs of the modern world while staying rooted in our core values.
                  </p>
                  <p>
                    With state-of-the-art infrastructure, highly qualified faculty, and a vibrant campus life, AJAS provides an ideal platform for students to explore their potential and achieve their career goals.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-2/5 flex flex-col gap-6">
              <ScrollReveal delay={0.2}>
                <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-sm mb-6">
                  <h4 className="font-semibold text-[#111827] mb-6">College Highlights</h4>
                  <ul className="space-y-4">
                    {[
                      { label: "Established", value: "2010" },
                      { label: "Affiliation", value: "University of Calicut" },
                      { label: "Certification", value: "ISO 9001:2015" },
                      { label: "Status", value: "Minority Institution" },
                      { label: "Campus Area", value: "10+ Acres" },
                    ].map((item, i) => (
                      <li key={i} className="flex justify-between items-center text-sm border-b border-[#f3f4f6] pb-3 last:border-0 last:pb-0">
                        <span className="text-[#6b7280]">{item.label}</span>
                        <span className="font-medium text-[#111827]">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-md">
                   <img src="/images/hero.png" alt="College Building" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="GUIDING PRINCIPLES"
            heading="Our Core Values"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Integrity", desc: "Upholding the highest ethical standards in all our academic and administrative pursuits." },
              { icon: Award, title: "Excellence", desc: "Striving for continuous improvement and superior performance in every aspect of education." },
              { icon: Users, title: "Inclusivity", desc: "Creating a welcoming environment that respects diversity and promotes equity for all." },
              { icon: Landmark, title: "Social Responsibility", desc: "Encouraging students to use their knowledge for the betterment of the community." },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-[#f3f4f6] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#263866] group-hover:text-white transition-all duration-300 shadow-sm">
                    <value.icon size={28} />
                  </div>
                  <h4 className="text-lg font-semibold text-[#111827] mb-3">{value.title}</h4>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Administration */}
      <section id="admin" className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="LEADERSHIP"
            heading="College Administration"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <ScrollReveal className="lg:col-span-1">
              <div className="bg-white border border-[#e5e7eb] rounded-2xl p-6 text-center shadow-sm h-full">
                <div className="w-32 h-32 rounded-full bg-[#f3f4f6] mx-auto mb-4 overflow-hidden border border-[#e5e7eb]">
                   <img src="/images/principal.png" alt="Principal" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-lg font-semibold text-[#111827]">Dr. C.K. Abdul Rabbi Nistar</h4>
                <p className="text-xs text-[#263866] font-medium uppercase tracking-widest mt-1">Principal</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="lg:col-span-2">
              <DataTable columns={adminColumns} rows={adminRows} />
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="aspect-[3/1] w-full rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-md">
               <img src="/images/team.png" alt="Administration Team" className="w-full h-full object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Committees */}
      <section id="committees" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="GOVERNANCE"
            heading="College Committees"
            subtext="Various statutory and non-statutory committees working towards institutional development and student welfare."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {committees.map((committee, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-center gap-4 p-5 border border-[#f3f4f6] rounded-xl hover:border-[#263866]/30 transition group bg-white shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#263866] group-hover:scale-150 transition-transform"></div>
                  <span className="text-sm font-medium text-[#4b5563] group-hover:text-[#111827]">{committee}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mandatory Disclosure */}
      <section id="disclosure" className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="TRANSPARENCY"
            heading="Mandatory Disclosure"
          />
          <ScrollReveal>
            <div className="bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-sm">
              {[
                { name: "University Affiliation Letter", type: "PDF", year: "2024-25" },
                { name: "RTI Declaration & Disclosure", type: "PDF", year: "2024" },
                { name: "Minority Institution Certificate", type: "PDF", year: "Permanent" },
                { name: "ISO 9001:2015 Certificate", type: "PDF", year: "Valid 2026" },
                { name: "Government NOC Documents", type: "PDF", year: "2010" },
                { name: "UGC 2(F) Recognition Document", type: "PDF", year: "Updated" },
                { name: "College Performance Audit (CPA)", type: "PDF", year: "2024-25" },
              ].map((doc, i) => (
                <DocumentRow key={i} {...doc} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sister Institutions */}
      <section id="sister" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="NETWORK"
            heading="Sister Institutions"
            subtext="AJAS is part of a larger educational family committed to excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Al Jamia Al Islamia", location: "Santhapuram, Kerala" },
              { name: "AJAS School of Management", location: "Perinthalmanna, Kerala" },
              { name: "Al Jamia Preparatory School", location: "Malappuram, Kerala" },
            ].map((inst, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border border-[#e5e7eb] rounded-2xl p-8 hover:shadow-md transition bg-white h-full shadow-sm">
                  <h4 className="text-lg font-semibold text-[#111827] mb-2">{inst.name}</h4>
                  <p className="text-sm text-[#6b7280]">{inst.location}</p>
                  <div className="mt-6">
                    <Link href="#" className="text-xs font-semibold text-[#263866] hover:underline">Visit Site →</Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
