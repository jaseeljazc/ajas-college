"use client";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import DocumentRow from "@/components/DocumentRow";
import ScrollReveal from "@/components/ScrollReveal";
import { Laptop, BookOpen, FlaskConical, Globe, Mic2, Users, Building, Warehouse } from "lucide-react";

export default function InfrastructurePage() {
  const facilities = [
    {
      id: "seminar",
      icon: Mic2,
      heading: "Seminar Hall",
      desc: "A state-of-the-art air-conditioned seminar hall for academic and cultural events.",
      features: ["300+ Seating Capacity", "Full AV Integration", "Central Air Conditioning", "High-speed Wi-Fi"],
      imageLabel: "Seminar Hall Interior",
      imagePath: "/images/seminar_new.png"
    },
    {
      id: "computer-lab",
      icon: Laptop,
      heading: "Computer & AI Labs",
      desc: "Advanced computing facilities with modern systems and specialized software.",
      features: ["100+ High-end PC Systems", "GPU-powered AI workstations", "Licensed Software Suite", "1 Gbps Leased Line"],
      imageLabel: "Computer Lab Setup",
      imagePath: "/images/lab.png"
    },
    {
      id: "library",
      icon: BookOpen,
      heading: "Central Library",
      desc: "A repository of knowledge with an extensive collection of books and journals.",
      features: ["15,000+ Printed Volumes", "N-List & E-Resources Access", "Automated OPAC System", "Spacious Reading Room"],
      imageLabel: "Library Stacks & Reading Area",
      imagePath: "/images/library.png"
    },
    {
      id: "life-science-labs",
      icon: FlaskConical,
      heading: "Life Science Laboratories",
      desc: "Specialized labs for Microbiology and Food Technology with modern equipment.",
      features: ["Incubators & Autoclaves", "Microscopy Center", "Food Quality Testing Setup", "Strict Safety Protocols"],
      imageLabel: "Microbiology Lab",
      imagePath: "/images/science_lab.png"
    },
    {
      id: "geography-lab",
      icon: Globe,
      heading: "Geography Lab",
      desc: "Equipped with traditional and modern tools for spatial analysis.",
      features: ["GIS Software Workstations", "Surveying Instruments", "Extensive Map Collection", "Weather Station Data"],
      imageLabel: "Geography Mapping Lab"
    },
    {
      id: "hostel",
      icon: Building,
      heading: "Residential Facilities",
      desc: "Safe and comfortable on-campus housing for boys and girls.",
      features: ["24/7 Security & Surveillance", "Wholesome Mess Facilities", "Recreational Areas", "Study Halls"],
      imageLabel: "Student Hostel Building",
      imagePath: "/images/hero.png"
    }
  ];

  return (
    <div className="flex flex-col">
      <PageHero
        breadcrumbs={[{ label: "Infrastructure" }]}
        label="FACILITIES"
        heading="Campus Infrastructure"
        subtext="Modern, well-equipped, and technology-driven infrastructure designed to support academic and personal growth."
        showImage={true}
        bgImage="/images/infrastructure_hero_new.png"
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <ScrollReveal>
               <SectionHeader
                 label="CAMPUS"
                 heading="Environment for Growth"
               />
               <div className="text-[#4b5563] space-y-6 leading-relaxed mb-8">
                 <p>
                    Al Jamia Arts & Science College campus is spread across a serene landscape in Perinthalmanna, providing an ideal atmosphere for academic pursuits. Our infrastructure is designed to provide students with a holistic learning experience.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Building, label: "Campus Area", value: "Multi-acre" },
                      { icon: Warehouse, label: "Built-up Area", value: "Modern Block" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-[#e5e7eb] shadow-sm">
                         <item.icon size={24} className="text-[#263866]" />
                         <div>
                            <p className="text-[10px] uppercase font-bold text-[#9ca3af]">{item.label}</p>
                            <p className="text-sm font-bold text-[#111827]">{item.value}</p>
                         </div>
                      </div>
                    ))}
                 </div>
               </div>
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2">
               <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-xl">
                  <img src="/images/hero.png" alt="Campus View" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-24">
            {facilities.map((facility, i) => (
              <ScrollReveal key={i}>
                <div id={facility.id} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}>
                  <div className="w-full lg:w-1/2">
                     {facility.imagePath ? (
                       <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-lg">
                          <img src={facility.imagePath} alt={facility.heading} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                       </div>
                     ) : (
                       <ImagePlaceholder label={facility.imageLabel} size="800×500px" aspect="aspect-video" />
                     )}
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="w-12 h-12 rounded-2xl bg-[#f3f4f6] flex items-center justify-center text-[#263866] mb-6">
                       <facility.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#111827] mb-4">{facility.heading}</h3>
                    <p className="text-[#6b7280] leading-relaxed mb-8">{facility.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {facility.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-3 text-sm text-[#4b5563] font-medium">
                           <span className="w-1.5 h-1.5 rounded-full bg-[#263866]"></span>
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
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="FUTURE GROWTH"
            heading="Upcoming Projects"
            subtext="We are continuously expanding our campus to provide more opportunities and better facilities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Academic Block - Phase II", status: "In Progress", desc: "A new multi-storey building featuring 12 smart classrooms and a dedicated research wing." },
              { name: "Sports Complex", status: "Proposed", desc: "An indoor stadium with facilities for badminton, basketball, and a modern gymnasium." },
            ].map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8 hover:shadow-md transition group h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-[#111827]">{p.name}</h4>
                    <span className="text-[10px] font-bold text-[#263866] bg-blue-50 px-2 py-1 rounded border border-blue-100 uppercase tracking-widest">{p.status}</span>
                  </div>
                  <p className="text-sm text-[#6b7280] leading-relaxed mb-6">{p.desc}</p>
                  <div className="w-full h-32 bg-[#f3f4f6] rounded-xl flex items-center justify-center border border-[#e5e7eb]">
                    <Warehouse size={24} className="text-[#9ca3af] opacity-50" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Details */}
      <section id="fees" className="py-16 md:py-24 bg-white border-t border-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="ADMISSIONS INFO"
            heading="Fee Structure"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            <ScrollReveal className="lg:col-span-2">
               <div className="bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-sm h-full">
                 <DocumentRow name="UG Programmes Fee Schedule 2024-25" type="PDF" year="2024" size="1.2 MB" />
                 <DocumentRow name="PG Programmes Fee Schedule 2024-25" type="PDF" year="2024" size="1.1 MB" />
                 <DocumentRow name="Hostel Fee & Refund Policy" type="PDF" year="2024" size="800 KB" />
               </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-[#fafafa] border border-[#e5e7eb] rounded-2xl p-8 shadow-sm h-full">
                <h4 className="font-semibold text-[#111827] mb-6">Summary Table</h4>
                <ul className="space-y-4">
                  {[
                    { label: "UG Arts (Avg/Sem)", value: "₹9,500" },
                    { label: "UG Science (Avg/Sem)", value: "₹18,500" },
                    { label: "PG (Avg/Sem)", value: "₹22,000" },
                    { label: "Hostel (Avg/Month)", value: "₹4,500" },
                  ].map((f, i) => (
                    <li key={i} className="flex justify-between items-center text-sm border-b border-[#e5e7eb] pb-3 last:border-0">
                      <span className="text-[#6b7280]">{f.label}</span>
                      <span className="font-bold text-[#111827]">{f.value}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-[#9ca3af] mt-6 italic">Note: Fees are subject to University of Calicut and Kerala Govt. regulations.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
