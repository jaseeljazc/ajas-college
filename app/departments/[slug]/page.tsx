"use client";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import Link from "next/link";
import { useParams } from "next/navigation";
import { User as UserIcon, BookOpen, FlaskConical, Trophy } from "lucide-react";

export default function DepartmentPage() {
  const { slug } = useParams();

  // Mapping slug to department name for demonstration
  const deptMap: Record<string, string> = {
    "commerce": "Commerce",
    "bba": "Business Administration",
    "bca": "Computer Applications",
    "life-sciences": "Life Sciences",
    "islamic-studies": "Islamic Studies",
    "english": "English",
    "geography": "Geography",
    "psychology": "Psychology",
    "computer-science": "Computer Science",
    "ai": "Artificial Intelligence",
    "islamic-finance": "Islamic Finance",
    "arabic": "Arabic"
  };

  const deptName = deptMap[slug as string] || "Department";

  return (
    <div className="flex flex-col">
      <PageHero
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: deptName }
        ]}
        label="DEPARTMENT"
        heading={deptName}
        subtext={`Welcome to the Department of ${deptName} at Al Jamia Arts & Science College.`}
        showImage={true}
      />

      {/* About Department */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <SectionHeader
                label="OVERVIEW"
                heading={`About the Department`}
              />
              <div className="text-[#4b5563] space-y-4 leading-relaxed">
                <p>
                  The Department of {deptName} is committed to providing high-quality education and fostering a research-oriented atmosphere. Our curriculum is designed to balance theoretical knowledge with practical applications, ensuring that our students are well-prepared for both higher studies and professional careers.
                </p>
                <p>
                  We focus on holistic development, encouraging students to participate in seminars, workshops, and extracurricular activities. Our state-of-the-art facilities and dedicated faculty create a nurturing environment for academic excellence.
                </p>
              </div>
            </div>
            <div className="bg-[#fafafa] border border-[#e5e7eb] rounded-2xl p-8">
              <h4 className="font-semibold text-[#111827] mb-6 flex items-center gap-2">
                <BookOpen size={20} className="text-[#1d4ed8]" /> Programmes Offered
              </h4>
              <ul className="space-y-4">
                {[
                  { name: `${deptName} (Honours)`, duration: "4 Years", seats: "40" },
                  { name: `${deptName} (General)`, duration: "3 Years", seats: "60" },
                ].map((prog, i) => (
                  <li key={i} className="flex justify-between items-center pb-4 border-b border-[#e5e7eb] last:border-0 last:pb-0">
                    <div>
                      <span className="block font-medium text-[#111827]">{prog.name}</span>
                      <span className="text-xs text-[#6b7280]">Duration: {prog.duration}</span>
                    </div>
                    <span className="text-xs font-semibold text-[#1d4ed8] bg-blue-50 px-2 py-1 rounded">
                      {prog.seats} Seats
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="PEOPLE"
            heading="Our Faculty"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="bg-white border border-[#e5e7eb] rounded-2xl p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-[#f3f4f6] mx-auto mb-4 border border-[#e5e7eb] flex items-center justify-center overflow-hidden">
                   <UserIcon size={32} className="text-[#9ca3af]" />
                </div>
                <h4 className="font-semibold text-[#111827]">Faculty Name</h4>
                <p className="text-xs text-[#1d4ed8] font-medium mt-1">Designation</p>
                <p className="text-[10px] text-[#6b7280] mt-2">Qualification & Specialization</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Activities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <SectionHeader
                label="INFRASTRUCTURE"
                heading="Department Facilities"
              />
              <div className="space-y-4">
                {[
                  { name: "Specialized Laboratory", desc: "Equipped with the latest tools and technology." },
                  { name: "Department Library", desc: "A collection of core textbooks and reference materials." },
                  { name: "Smart Classroom", desc: "Enabled with modern AV equipment for interactive learning." },
                ].map((f, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-[#f3f4f6] rounded-xl hover:border-[#1d4ed8]/30 transition group">
                    <div className="w-10 h-10 rounded-lg bg-[#f3f4f6] flex items-center justify-center shrink-0 group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors">
                      <FlaskConical size={18} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#111827]">{f.name}</h5>
                      <p className="text-xs text-[#6b7280]">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                label="CAMPUS LIFE"
                heading="Department Activities"
              />
              <div className="space-y-4">
                {[
                  { name: "Annual Tech Fest", date: "Feb 2024" },
                  { name: "Industrial Visit", date: "Jan 2024" },
                  { name: "Expert Seminar Series", date: "Monthly" },
                ].map((a, i) => (
                  <div key={i} className="flex justify-between items-center p-4 border-b border-[#f3f4f6] last:border-0">
                    <div>
                      <h5 className="font-medium text-[#111827]">{a.name}</h5>
                      <span className="text-xs text-[#9ca3af]">{a.date}</span>
                    </div>
                    <Link href="#" className="text-xs text-[#1d4ed8] font-semibold hover:underline">View Photos</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Gallery */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <SectionHeader
                label="SUCCESS"
                heading="Recent Achievements"
              />
              <div className="space-y-4">
                {[
                  "100% Result in Final Year Examination 2023.",
                  "Student placement in Top Multi-National Companies.",
                  "Faculty recognition at University-level academic forums.",
                  "Winners in the Inter-College Tech Quiz 2024."
                ].map((ach, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <Trophy size={18} className="text-amber-500 shrink-0 mt-1" />
                    <p className="text-sm text-[#4b5563]">{ach}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <SectionHeader
                label="GALLERY"
                heading="Life at Department"
              />
              <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-square rounded-xl overflow-hidden border border-[#e5e7eb]">
                    <img src="/images/classroom.png" alt="Classroom" className="w-full h-full object-cover" />
                 </div>
                 <div className="aspect-square rounded-xl overflow-hidden border border-[#e5e7eb]">
                    <img src="/images/science_lab.png" alt="Laboratory" className="w-full h-full object-cover" />
                 </div>
                 <div className="aspect-square rounded-xl overflow-hidden border border-[#e5e7eb]">
                    <img src="/images/seminar_new.png" alt="Seminar" className="w-full h-full object-cover" />
                 </div>
                 <div className="aspect-square rounded-xl overflow-hidden border border-[#e5e7eb]">
                    <img src="/images/activities.png" alt="Activities" className="w-full h-full object-cover" />
                 </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-[#e5e7eb] flex justify-center">
            <Link href="/academics" className="text-sm font-semibold text-[#6b7280] hover:text-[#1d4ed8] transition">
              ← Back to All Academics
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
