"use client";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import DataTable from "@/components/DataTable";
import { Book, Library as LibraryIcon, Database, ExternalLink, Clock, Info, User } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function LibraryPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        breadcrumbs={[{ label: "Library" }]}
        label="KNOWLEDGE RESOURCE"
        heading="College Library"
        subtext="A gateway to a world of information, supporting the academic and research needs of the AJAS community."
        showImage={true}
        bgImage="/images/library_hero_new.png"
      />

      {/* Overview & Image */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <ScrollReveal className="w-full lg:w-1/2">
              <div>
                <SectionHeader
                  label="ABOUT"
                  heading="The Heart of Academic Life"
                />
                <div className="text-[#4b5563] space-y-6 leading-relaxed mb-8">
                  <p>
                    The Central Library of Al Jamia Arts & Science College is a state-of-the-art facility designed to provide comprehensive information resources. With a vast collection of printed books, journals, and digital assets, it serves as a critical support system for teaching, learning, and research.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Book, label: "Printed Volumes", value: "15,000+" },
                      { icon: Database, label: "E-Resources", value: "Yes (N-List)" },
                      { icon: LibraryIcon, label: "Journals", value: "50+" },
                      { icon: Info, label: "OPAC", value: "Available" }
                    ].map((stat, i) => (
                      <div key={i} className="flex gap-4 p-4 border border-[#f3f4f6] rounded-xl shadow-sm bg-white">
                        <stat.icon size={20} className="text-[#263866] shrink-0" />
                        <div>
                            <p className="text-[10px] uppercase font-bold text-[#9ca3af]">{stat.label}</p>
                            <p className="text-sm font-bold text-[#111827]">{stat.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="w-full lg:w-1/2">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-xl">
                  <img src="/images/library.png" alt="Library Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services & OPAC */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <ScrollReveal className="w-full">
                <div>
                  <SectionHeader
                    label="ACCESS"
                    heading="Digital Library & OPAC"
                  />
                  <div className="bg-white border border-[#e5e7eb] rounded-3xl p-10 shadow-sm">
                    <h4 className="text-xl font-bold text-[#111827] mb-4">Online Public Access Catalogue</h4>
                    <p className="text-sm text-[#6b7280] leading-relaxed mb-8">
                       Search our library collection from anywhere in the world. Our automated system helps you locate books and check availability in real-time.
                    </p>
                    <div className="p-6 bg-[#fafafa] rounded-2xl border border-[#e5e7eb] flex flex-col sm:flex-row items-center justify-between gap-6">
                       <div className="flex items-center gap-4">
                          <Database size={32} className="text-[#263866]" />
                          <div>
                             <p className="text-xs font-bold">Library Catalogue</p>
                             <p className="text-[10px] text-[#9ca3af]">http://116.68.127.22</p>
                          </div>
                       </div>
                       <a href="http://116.68.127.22" target="_blank" rel="noopener noreferrer" className="bg-[#263866] text-white px-8 py-3 rounded-xl font-bold text-xs flex items-center gap-2 hover:bg-[#1e40af] transition-all">
                          Access OPAC <ExternalLink size={14} />
                       </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="w-full">
                <div>
                  <SectionHeader
                    label="SERVICES"
                    heading="Library Services Offered"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Circulation Services (Issue/Return)",
                      "Reference & Referral Service",
                      "Reprographic Facility",
                      "Digital Repository Access",
                      "Current Awareness Service",
                      "User Orientation Programmes",
                      "News Clips Service",
                      "Wi-Fi Connectivity"
                    ].map((s, i) => (
                      <div key={i} className="flex gap-3 items-center p-4 bg-white border border-[#f3f4f6] rounded-xl shadow-sm hover:shadow-md transition">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#263866]"></div>
                        <span className="text-xs font-medium text-[#4b5563]">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
           </div>
        </div>
      </section>

      {/* Rules & Timings */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <ScrollReveal className="w-full">
                <div>
                  <SectionHeader
                    label="RULES"
                    heading="Library Regulations"
                  />
                  <ul className="space-y-4">
                    {[
                      "Identify cards are mandatory for entering and using the library.",
                      "Maintain absolute silence within the library premises.",
                      "Books are issued for a period of 14 days for students.",
                      "A fine will be charged for overdue books as per college rules.",
                      "Personal belongings like bags must be kept in the property counter.",
                      "E-Library resources should be used for academic purposes only."
                    ].map((rule, i) => (
                      <li key={i} className="flex gap-4 items-start p-4 bg-[#fafafa] rounded-xl text-sm text-[#4b5563] font-medium border border-[#f3f4f6] shadow-sm">
                        <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#263866] font-bold text-[10px] shrink-0 border border-[#f3f4f6]">{i+1}</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="w-full">
                <div className="space-y-12">
                  <div>
                    <SectionHeader
                      label="SCHEDULE"
                      heading="Working Hours"
                    />
                    <DataTable
                      columns={[
                        { header: "Day", accessor: "day" },
                        { header: "Opening Time", accessor: "open" },
                        { header: "Closing Time", accessor: "close" }
                      ]}
                      rows={[
                        { day: "Monday - Friday", open: "08:30 AM", close: "05:00 PM" },
                        { day: "Saturday", open: "09:00 AM", close: "03:30 PM" },
                        { day: "Sunday & Holidays", open: "Closed", close: "Closed" }
                      ]}
                    />
                  </div>
                  <div className="bg-[#fafafa] border border-[#e5e7eb] rounded-2xl p-8 flex items-center gap-6 shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-[#e5e7eb] shrink-0 shadow-sm">
                      <User size={24} className="text-[#9ca3af]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#111827]">Library Team</h4>
                      <p className="text-sm text-[#6b7280]">Contact our librarian for assistance.</p>
                      <p className="text-xs text-[#263866] mt-1 font-semibold">librarian@ajascollege.ac.in</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
           </div>
        </div>
      </section>
    </div>
  );
}
