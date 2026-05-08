"use client";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import DataTable from "@/components/DataTable";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";
import { CheckCircle2, Download, ExternalLink, Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AdmissionsPage() {
  const programmes = [
    { name: "B.Com Honours", duration: "4 Years", seats: "40", eligibility: "Plus Two Pass with 45% marks" },
    { name: "BBA", duration: "3 Years", seats: "50", eligibility: "Plus Two Pass" },
    { name: "BCA", duration: "3 Years", seats: "36", eligibility: "Plus Two Pass with Maths/CS" },
    { name: "BSc Microbiology", duration: "3 Years", seats: "36", eligibility: "Plus Two Pass in Biology group" },
    { name: "BA Islamic Studies", duration: "3 Years", seats: "40", eligibility: "Plus Two Pass" },
    { name: "BA English", duration: "3 Years", seats: "40", eligibility: "Plus Two Pass" },
    { name: "BSc Psychology", duration: "3 Years", seats: "36", eligibility: "Plus Two Pass" },
    { name: "BSc Food Technology", duration: "3 Years", seats: "36", eligibility: "Plus Two Pass in Science" },
    { name: "BSc Computer Science", duration: "3 Years", seats: "36", eligibility: "Plus Two Pass with Maths/CS" },
    { name: "BSc AI", duration: "3 Years", seats: "30", eligibility: "Plus Two Pass with Maths" },
    { name: "MA Islamic Finance", duration: "2 Years", seats: "20", eligibility: "Any Graduation with 45% marks" },
    { name: "MSc Psychology", duration: "2 Years", seats: "12", eligibility: "BSc Psychology with 50% marks" },
    { name: "MA Arabic", duration: "2 Years", seats: "20", eligibility: "BA Arabic/Afzal-ul-ulama" }
  ];

  return (
    <div className="flex flex-col">
      <PageHero
        breadcrumbs={[{ label: "Admissions" }]}
        label="ADMISSIONS 2026-27"
        heading="Join the AJAS Family"
        subtext="Applications are now open for all undergraduate and postgraduate programmes for the upcoming academic year."
        showImage={true}
        bgImage="/images/admissions_hero.png"
      />

      {/* Overview & Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <ScrollReveal delay={0.1}>
              <div>
                <SectionHeader
                  label="PROCESS"
                  heading="How to Apply"
                />
                <div className="space-y-12">
                  <div className="relative flex flex-col gap-10">
                    <div className="absolute left-[19px] top-4 bottom-4 w-px bg-[#e5e7eb]"></div>
                    {[
                      { step: "01", title: "Registration", desc: "Register online at the University of Calicut CAP portal for the current year." },
                      { step: "02", title: "Application", desc: "Apply directly to Al Jamia Arts & Science College via our online admission portal." },
                      { step: "03", title: "Verification", desc: "Visit the campus for document verification and interview based on the merit list." },
                      { step: "04", title: "Admission", desc: "Pay the required fees and secure your seat in the desired programme." }
                    ].map((s, i) => (
                      <div key={i} className="flex gap-8 relative">
                        <div className="w-10 h-10 rounded-full bg-[#263866] text-white flex items-center justify-center font-bold text-xs shrink-0 z-10 ring-8 ring-white shadow-sm">
                          {s.step}
                        </div>
                        <div className="pt-1">
                          <h4 className="text-lg font-semibold text-[#111827] mb-2">{s.title}</h4>
                          <p className="text-sm text-[#6b7280] leading-relaxed max-w-md">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-[#fafafa] border border-[#e5e7eb] rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
                    <div className="shrink-0">
                        <ExternalLink size={48} className="text-[#263866]" />
                    </div>
                    <div className="text-center sm:text-left">
                        <h4 className="text-xl font-bold text-[#111827] mb-2">Ready to apply?</h4>
                        <p className="text-sm text-[#6b7280] mb-6">Complete your application on our unified admission portal.</p>
                        <a href="https://ajasc.embase.in" target="_blank" rel="noopener noreferrer" className="bg-[#263866] text-white px-8 py-3 rounded-xl font-bold text-sm inline-block hover:bg-[#1e40af] transition-all transform hover:scale-105">
                          Apply at ajasc.embase.in
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-12">
                <SectionHeader
                  label="ELIGIBILITY"
                  heading="Available Programmes"
                />
                  <DataTable
                    columns={[
                      { header: "Programme", accessor: "name" },
                      { header: "Seats", accessor: "seats", align: "center" },
                      { header: "Eligibility", accessor: "eligibility" },
                    ]}
                    rows={programmes}
                  />
                  <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-lg">
                    <img src="/images/hero.png" alt="Campus" className="w-full h-full object-cover" />
                  </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Rules & Requirements */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <ScrollReveal delay={0.1}>
                <div>
                  <SectionHeader
                    label="GUIDELINES"
                    heading="Admission Rules"
                  />
                  <ul className="space-y-4">
                      {[
                        "Admission is strictly based on merit and University of Calicut regulations.",
                        "Candidates must have a valid CAP ID from the University of Calicut.",
                        "Reserved seats are available for Minority and SC/ST candidates as per Govt. norms.",
                        "Original documents must be produced at the time of the interview.",
                        "Fees once paid will not be refunded except under special conditions defined by the University."
                      ].map((rule, i) => (
                        <li key={i} className="flex gap-4 items-start p-4 bg-white border border-[#e5e7eb] rounded-xl">
                          <CheckCircle2 size={20} className="text-[#263866] shrink-0" />
                          <span className="text-sm text-[#4b5563] font-medium">{rule}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <SectionHeader
                    label="CHECKLIST"
                    heading="Documents for Interview"
                  />
                  <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-sm">
                      <ul className="space-y-4">
                        {[
                          "Original SSLC/Equivalent Certificate",
                          "Original Plus Two/Equivalent Certificate",
                          "Transfer Certificate (TC) from previous institution",
                          "Conduct Certificate (within 6 months)",
                          "Caste Certificate (for reservation category)",
                          "Passport Size Photographs (4 Nos)",
                          "Copy of Aadhaar Card",
                          "University CAP Allotment Memo"
                        ].map((doc, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-[#4b5563]">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#263866]"></div>
                              {doc}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 pt-8 border-t border-[#f3f4f6]">
                        <button className="flex items-center gap-2 text-sm font-bold text-[#263866] hover:underline">
                            <Download size={18} /> Download Full Prospectus 2026-27
                        </button>
                      </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-16 md:py-24 bg-white border-t border-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <SectionHeader
             label="GET IN TOUCH"
             heading="Admissions Helpdesk"
             align="center"
           />
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <ScrollReveal delay={0.1}>
                <div className="p-8 border border-[#f3f4f6] rounded-2xl hover:border-[#263866]/30 transition h-full bg-white shadow-sm">
                  <Phone size={32} className="text-[#263866] mx-auto mb-4" />
                  <h4 className="font-semibold text-[#111827] mb-2">Phone</h4>
                  <p className="text-sm text-[#6b7280]">+91 7994 188918</p>
                  <p className="text-sm text-[#6b7280]">+91 04933 227318</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="p-8 border border-[#f3f4f6] rounded-2xl hover:border-[#263866]/30 transition h-full bg-white shadow-sm">
                  <Mail size={32} className="text-[#263866] mx-auto mb-4" />
                  <h4 className="font-semibold text-[#111827] mb-2">Email</h4>
                  <p className="text-sm text-[#6b7280]">admissions@ajascollege.ac.in</p>
                  <p className="text-sm text-[#6b7280]">mail@ajascollege.ac.in</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="p-8 border border-[#f3f4f6] rounded-2xl hover:border-[#263866]/30 transition h-full bg-white shadow-sm">
                  <MapPin size={32} className="text-[#263866] mx-auto mb-4" />
                  <h4 className="font-semibold text-[#111827] mb-2">Location</h4>
                  <p className="text-sm text-[#6b7280]">Perinthalmanna, Malappuram</p>
                  <p className="text-sm text-[#6b7280]">Kerala — 679325</p>
                </div>
              </ScrollReveal>
           </div>
        </div>
      </section>
    </div>
  );
}
