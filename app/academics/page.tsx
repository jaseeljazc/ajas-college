"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import DataTable from "@/components/DataTable";
import DocumentRow from "@/components/DocumentRow";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";
import { ChevronDown, Plus, Minus, FileText, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const depts = [
    {
      name: "Commerce",
      hod: "Placeholder Name",
      programmes: ["B.Com Honours", "B.Com Finance"],
      slug: "commerce",
    },
    {
      name: "Business Administration",
      hod: "Placeholder Name",
      programmes: ["BBA"],
      slug: "bba",
    },
    {
      name: "Computer Applications",
      hod: "Placeholder Name",
      programmes: ["BCA"],
      slug: "bca",
    },
    {
      name: "Life Sciences",
      hod: "Placeholder Name",
      programmes: ["Microbiology", "Food Tech"],
      slug: "life-sciences",
    },
    {
      name: "Islamic Studies",
      hod: "Placeholder Name",
      programmes: ["BA Islamic Studies"],
      slug: "islamic-studies",
    },
    {
      name: "English",
      hod: "Placeholder Name",
      programmes: ["BA English"],
      slug: "english",
    },
    {
      name: "Geography",
      hod: "Placeholder Name",
      programmes: ["BSc Geography"],
      slug: "geography",
    },
    {
      name: "Psychology",
      hod: "Placeholder Name",
      programmes: ["BSc Psychology", "MSc Psychology"],
      slug: "psychology",
    },
    {
      name: "Computer Science",
      hod: "Placeholder Name",
      programmes: ["BSc Computer Science"],
      slug: "computer-science",
    },
    {
      name: "Artificial Intelligence",
      hod: "Placeholder Name",
      programmes: ["BSc AI"],
      slug: "ai",
    },
    {
      name: "Islamic Finance",
      hod: "Placeholder Name",
      programmes: ["MA Islamic Finance"],
      slug: "islamic-finance",
    },
    {
      name: "Arabic",
      hod: "Placeholder Name",
      programmes: ["MA Arabic"],
      slug: "arabic",
    },
  ];

  const facultyColumns = [
    {
      header: "Name",
      accessor: "name",
      render: (row: any) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center shrink-0 border border-[#e5e7eb]">
            <span className="text-[10px] text-[#9ca3af]">Photo</span>
          </div>
          <span className="font-medium text-[#111827]">{row.name}</span>
        </div>
      ),
    },
    { header: "Department", accessor: "dept" },
    { header: "Qualification", accessor: "qualification" },
    { header: "Specialization", accessor: "specialization" },
    { header: "Experience", accessor: "experience" },
  ];

  const facultyRows = [
    {
      name: "Dr. C.K. Abdul Rabbi Nistar",
      dept: "Management",
      qualification: "PhD, MBA",
      specialization: "Management",
      experience: "25+ Years",
    },
    {
      name: "Prof. Anitha M.",
      dept: "Psychology",
      qualification: "PhD, MSc",
      specialization: "Clinical Psychology",
      experience: "15 Years",
    },
    {
      name: "Dr. Rajesh K.",
      dept: "Computer Science",
      qualification: "PhD, M.Tech",
      specialization: "AI & ML",
      experience: "12 Years",
    },
    {
      name: "Mr. Sameer T.",
      dept: "Islamic Finance",
      qualification: "M.Com, M.Phil",
      specialization: "Sharia Banking",
      experience: "10 Years",
    },
    {
      name: "Dr. Fathima S.",
      dept: "Life Sciences",
      qualification: "PhD, MSc",
      specialization: "Microbiology",
      experience: "8 Years",
    },
  ];

  const filteredFaculty =
    activeTab === "All"
      ? facultyRows
      : facultyRows.filter((f) => f.dept === activeTab);

  return (
    <div className="flex flex-col">
      <PageHero
        breadcrumbs={[{ label: "Academics" }]}
        label="ACADEMICS"
        heading="Academic Excellence"
        subtext="Diverse programmes and dedicated faculty committed to shaping future-ready professionals."
        showImage={true}
        bgImage="/images/classroom.png"
      />

      {/* Departments Grid */}
      <section id="departments" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="DEPARTMENTS"
            heading="Explore Our Departments"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {depts.map((dept, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div
                  className="bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group h-full"
                >
                  <div className="aspect-video bg-[#f3f4f6] flex items-center justify-center border-b border-[#e5e7eb] relative">
                    <span className="text-[10px] font-medium text-[#9ca3af]">
                      Department Photo Placeholder
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-semibold text-[#111827] mb-2">
                      {dept.name}
                    </h4>
                    <p className="text-xs text-[#9ca3af] mb-4">HOD: {dept.hod}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {dept.programmes.map((p, j) => (
                        <Link
                          key={j}
                          href={`/academics/${p.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <span className="text-[10px] font-medium text-[#4b5563] bg-[#fafafa] border border-[#e5e7eb] px-2 py-1 rounded hover:border-[#263866] hover:text-[#263866] transition-colors cursor-pointer">
                            {p}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href={`/departments/${dept.slug}`}
                      className="mt-auto text-sm font-semibold text-[#263866] hover:underline inline-flex items-center gap-1"
                    >
                      View Department Details →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="FACULTY" heading="Our Expert Faculty" />

          <ScrollReveal delay={0.1}>
            <div className="flex overflow-x-auto gap-2 mb-8 pb-2 custom-scrollbar">
              {[
                "All",
                "Commerce",
                "Management",
                "Computer Science",
                "Psychology",
                "Life Sciences",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full border transition ${
                    activeTab === tab
                      ? "bg-[#263866] text-white border-[#263866]"
                      : "bg-white text-[#6b7280] border-[#e5e7eb] hover:border-[#263866] hover:text-[#263866]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <DataTable columns={facultyColumns} rows={filteredFaculty} />
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="mt-12">
            <div>
              <ImagePlaceholder label="Faculty Group Photo" size="Wide View" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Syllabus & Resources */}
      <section id="syllabus" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <ScrollReveal delay={0.1}>
              <div>
                <SectionHeader label="RESOURCES" heading="Syllabus Downloads" />
                <div className="bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-sm">
                  {[
                    {
                      name: "B.Com Honours Syllabus 2024",
                      type: "PDF",
                      year: "2024-25",
                    },
                    { name: "BCA Syllabus 2024", type: "PDF", year: "2024-25" },
                    {
                      name: "BSc Computer Science Syllabus",
                      type: "PDF",
                      year: "2024-25",
                    },
                    {
                      name: "BSc Psychology Syllabus",
                      type: "PDF",
                      year: "2024-25",
                    },
                    {
                      name: "MA Islamic Finance Syllabus",
                      type: "PDF",
                      year: "2024",
                    },
                  ].map((doc, i) => (
                    <DocumentRow key={i} {...doc} />
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <SectionHeader label="SCHEDULE" heading="Academic Calendar" />
                <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-sm">
                  <div className="space-y-6">
                    {[
                      {
                        date: "June 03, 2024",
                        event: "Commencement of Classes (III & V Sem)",
                      },
                      {
                        date: "June 24, 2024",
                        event: "Commencement of I Sem Classes",
                      },
                      {
                        date: "Aug 15, 2024",
                        event: "Independence Day Celebration",
                      },
                      { date: "Sept 12, 2024", event: "Onam Holidays Begin" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-6 pb-6 border-b border-[#f3f4f6] last:border-0 last:pb-0"
                      >
                        <div className="text-sm font-bold text-[#263866] shrink-0 w-24">
                          {item.date}
                        </div>
                        <div className="text-sm text-[#4b5563]">{item.event}</div>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-8 flex items-center justify-center gap-2 bg-[#fafafa] border border-[#e5e7eb] py-3 rounded-xl text-sm font-semibold text-[#111827] hover:bg-[#f3f4f6] transition">
                    <Download size={16} /> Download Full Academic Calendar
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Add-on Courses */}
      <section id="addon" className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="SKILL DEVELOPMENT"
            heading="Add-on & Certificate Courses"
            subtext="Enhance your career prospects with our specialized certification programmes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                provider: "Keltron",
                name: "Computer Hardware & Networking",
                duration: "6 Months",
              },
              {
                provider: "G-Tec",
                name: "Advanced Accounting & Tally",
                duration: "3 Months",
              },
              {
                provider: "NPTEL/SWAYAM",
                name: "Online Certification Courses",
                duration: "8-12 Weeks",
              },
              {
                provider: "ASAP",
                name: "Skill Enhancement Programme",
                duration: "Varies",
              },
            ].map((course, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className="bg-white border border-[#e5e7eb] rounded-xl p-6 hover:shadow-md transition h-full"
                >
                  <div className="text-[10px] font-bold text-[#263866] uppercase tracking-widest mb-2">
                    {course.provider}
                  </div>
                  <h4 className="text-base font-semibold text-[#111827] mb-3">
                    {course.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#9ca3af]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Duration: {course.duration}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers List */}
      <section id="toppers" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader label="ACHIEVEMENTS" heading="Academic Toppers" />
          <ScrollReveal delay={0.1}>
            <DataTable
              columns={[
                { header: "Name", accessor: "name" },
                { header: "Programme", accessor: "prog" },
                { header: "Year", accessor: "year" },
                { header: "Result", accessor: "result" },
                {
                  header: "Rank",
                  accessor: "rank",
                  render: (row: any) => (
                    <span className="font-bold text-[#263866]">{row.rank}</span>
                  ),
                },
              ]}
              rows={[
                {
                  name: "Mohammed Azeer",
                  prog: "MA Islamic Finance",
                  year: "2018",
                  result: "A+",
                  rank: "1st Rank",
                },
                {
                  name: "SAFWA K",
                  prog: "BSc Psychology",
                  year: "2019",
                  result: "9.8 CGPA",
                  rank: "1st Rank",
                },
                {
                  name: "Fathima Hiba",
                  prog: "BA English",
                  year: "2020",
                  result: "9.5 CGPA",
                  rank: "2nd Rank",
                },
                {
                  name: "Ashraf Ali",
                  prog: "BCA",
                  year: "2018",
                  result: "A",
                  rank: "3rd Rank",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
