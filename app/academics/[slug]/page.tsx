"use client";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Book, Clock, Users, Award, CheckCircle, FileText, ArrowRight } from "lucide-react";

export default function ProgrammeDetailPage() {
  const { slug } = useParams();

  // Mock data for programmes
  const programmes: Record<string, any> = {
    "b.com-(honours)": {
      name: "B.Com (Honours)",
      dept: "Commerce",
      duration: "4 Years (FYUG)",
      eligibility: "Plus Two or equivalent with Commerce/Science stream.",
      overview: "The B.Com (Honours) programme is designed to provide students with a wide range of managerial skills while at the same time building competence in a particular area of business studies.",
      highlights: [
        "Advanced Accounting & Auditing",
        "GST & Income Tax Specialization",
        "Professional Certification Support (CMA/CA)",
        "Industry-aligned curriculum"
      ]
    },
    "bba": {
      name: "BBA",
      dept: "Business Administration",
      duration: "3 Years",
      eligibility: "Plus Two or equivalent in any stream with minimum 45% marks.",
      overview: "Bachelor of Business Administration (BBA) is a professional degree that focuses on developing leadership and management skills required in the corporate world.",
      highlights: [
        "Marketing & HR Management",
        "Entrepreneurship Development",
        "Regular Industry Visits",
        "Soft Skills Training"
      ]
    },
    "bca": {
      name: "BCA",
      dept: "Computer Applications",
      duration: "3 Years",
      eligibility: "Plus Two or equivalent with Mathematics/Computer Science/Computer Applications.",
      overview: "The BCA programme provides a sound academic base from which an advanced career in Computer Applications can be developed.",
      highlights: [
        "Web Development & Software Engineering",
        "Database Management Systems",
        "Mobile App Development",
        "Live Project Training"
      ]
    },
    "bsc.-microbiology": {
      name: "BSc. Microbiology",
      dept: "Life Sciences",
      duration: "3 Years",
      eligibility: "Plus Two or equivalent with Biology as a core subject.",
      overview: "Microbiology is the study of microscopic organisms, such as bacteria, viruses, archaea, fungi and protozoa.",
      highlights: [
        "Clinical & Industrial Microbiology",
        "Advanced Lab Facilities",
        "Research Projects",
        "Biotechnology Integration"
      ]
    },
    "ba-islamic-studies": {
      name: "BA Islamic Studies",
      dept: "Islamic Studies",
      duration: "3 Years",
      eligibility: "Plus Two or equivalent in any stream.",
      overview: "The programme offers a comprehensive study of Islamic history, culture, law, and theology in a modern context.",
      highlights: [
        "Classical & Modern Arabic",
        "Islamic Jurisprudence (Fiqh)",
        "History of Islamic Civilization",
        "Comparative Religion"
      ]
    },
    "ba-english": {
      name: "BA English",
      dept: "English",
      duration: "3 Years",
      eligibility: "Plus Two or equivalent in any stream.",
      overview: "The BA English programme focuses on literature, linguistics, and language skills, preparing students for careers in media, education, and writing.",
      highlights: [
        "British & World Literature",
        "Creative Writing Workshops",
        "Linguistics & Phonetics",
        "Media & Communication Studies"
      ]
    },
    "bsc.-geography": {
      name: "BSc. Geography",
      dept: "Geography",
      duration: "3 Years",
      eligibility: "Plus Two or equivalent in any stream.",
      overview: "BSc Geography involves the study of the Earth's landscapes, peoples, places and environments.",
      highlights: [
        "Cartography & GIS",
        "Environmental Geography",
        "Geomorphology",
        "Field Survey & Mapping"
      ]
    },
    "bsc.-psychology": {
      name: "BSc. Psychology",
      dept: "Psychology",
      duration: "3 Years",
      eligibility: "Plus Two or equivalent in any stream.",
      overview: "The programme provides a comprehensive understanding of human behavior and mental processes.",
      highlights: [
        "Clinical & Counseling Psychology",
        "Psychological Testing Lab",
        "Child & Adolescent Psychology",
        "Internship Opportunities"
      ]
    },
    "bsc.-food-technology": {
      name: "BSc. Food Technology",
      dept: "Life Sciences",
      duration: "3 Years",
      eligibility: "Plus Two or equivalent with Science stream (Biology/Mathematics).",
      overview: "Food Technology is a branch of food science that deals with the production, preservation, quality control and R&D of food products.",
      highlights: [
        "Food Processing & Preservation",
        "Quality Control & HACCP",
        "Food Microbiology",
        "Industry Internships"
      ]
    },
    "bsc.-computer-science": {
      name: "BSc. Computer Science",
      dept: "Computer Science",
      duration: "3 Years",
      eligibility: "Plus Two or equivalent with Mathematics as one of the subjects.",
      overview: "BSc Computer Science is an undergraduate programme which deals with the topics related to computer science, computer applications, and its services.",
      highlights: [
        "Programming in C++, Java, Python",
        "Data Structures & Algorithms",
        "Operating Systems",
        "Cloud Computing"
      ]
    },
    "bsc.-artificial-intelligence": {
      name: "BSc. Artificial Intelligence",
      dept: "AI & Data Science",
      duration: "3 Years",
      eligibility: "Plus Two or equivalent with Mathematics.",
      overview: "This programme focuses on the fundamentals of AI, machine learning, and data science to prepare students for the future of technology.",
      highlights: [
        "Machine Learning & Deep Learning",
        "Data Visualization",
        "Natural Language Processing",
        "AI Ethics & Policy"
      ]
    },
    "ma-islamic-finance": {
      name: "MA Islamic Finance",
      dept: "Islamic Finance",
      duration: "2 Years",
      eligibility: "Graduation in any stream with minimum 50% marks.",
      overview: "This postgraduate programme focuses on the principles of Islamic economics and banking systems.",
      highlights: [
        "Sharia-compliant Banking",
        "Islamic Insurance (Takaful)",
        "Micro-finance & Social Finance",
        "Ethical Investment Strategies"
      ]
    },
    "msc.-psychology": {
      name: "MSc. Psychology",
      dept: "Psychology",
      duration: "2 Years",
      eligibility: "BSc Psychology with minimum 50% marks.",
      overview: "MSc Psychology offers an advanced study of the human mind and behavior with a focus on clinical applications.",
      highlights: [
        "Advanced Clinical Psychology",
        "Research Methodology",
        "Psychotherapeutic Techniques",
        "Hospital Internships"
      ]
    },
    "ma-arabic": {
      name: "MA Arabic",
      dept: "Arabic",
      duration: "2 Years",
      eligibility: "BA Arabic or equivalent with 50% marks.",
      overview: "The programme provides advanced knowledge of Arabic literature, language, and translation skills.",
      highlights: [
        "Modern Arabic Literature",
        "Translation & Linguistics",
        "Classical Poetry",
        "Arabic Rhetoric"
      ]
    }
  };

  const prog = programmes[slug as string] || {
    name: "Programme Detail",
    dept: "Academic Department",
    duration: "Varies",
    eligibility: "Please contact admission office.",
    overview: "Programme information is being updated.",
    highlights: ["Academic excellence", "Expert faculty"]
  };

  return (
    <div className="flex flex-col">
      <PageHero
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: prog.name }
        ]}
        label="PROGRAMME"
        heading={prog.name}
        subtext={`Department of ${prog.dept}`}
        showImage={true}
        bgImage="/images/classroom.png"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <SectionHeader
                label="OVERVIEW"
                heading="Course Description"
              />
              <div className="text-[#4b5563] space-y-6 leading-relaxed text-lg">
                <p>{prog.overview}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                   <div className="flex items-start gap-4 p-6 bg-[#fafafa] rounded-2xl border border-[#e5e7eb]">
                      <Clock className="text-[#263866] mt-1" size={24} />
                      <div>
                         <h5 className="font-bold text-[#111827]">Duration</h5>
                         <p className="text-sm text-[#6b7280]">{prog.duration}</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4 p-6 bg-[#fafafa] rounded-2xl border border-[#e5e7eb]">
                      <Award className="text-[#263866] mt-1" size={24} />
                      <div>
                         <h5 className="font-bold text-[#111827]">Eligibility</h5>
                         <p className="text-sm text-[#6b7280]">{prog.eligibility}</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="mt-20">
                <SectionHeader
                  label="CURRICULUM"
                  heading="Programme Highlights"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prog.highlights.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white border border-[#e5e7eb] rounded-xl shadow-sm">
                      <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                      <span className="text-sm font-medium text-[#4b5563]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
               <div className="sticky top-32">
                  <div className="bg-[#263866] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <h4 className="text-xl font-bold mb-6">Interested in this Programme?</h4>
                    <p className="text-white/70 text-sm mb-8 leading-relaxed">Join Al Jamia Arts & Science College and build a successful career with our industry-aligned curriculum.</p>
                    <div className="space-y-4">
                       <Link href="/admissions" className="block w-full bg-white text-[#263866] py-4 rounded-xl font-bold text-center hover:bg-blue-50 transition">
                          Apply Now
                       </Link>
                       <Link href="/contact" className="block w-full border border-white/20 py-4 rounded-xl font-bold text-center hover:bg-white/10 transition">
                          Inquiry
                       </Link>
                    </div>
                    
                    <div className="mt-10 pt-8 border-t border-white/10">
                       <div className="flex items-center gap-4 mb-4">
                          <Users size={20} className="text-blue-300" />
                          <div>
                             <p className="text-xs text-white/50">Students Enrolled</p>
                             <p className="text-sm font-bold">40+ per batch</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-4">
                          <FileText size={20} className="text-blue-300" />
                          <div>
                             <p className="text-xs text-white/50">Syllabus</p>
                             <p className="text-sm font-bold underline cursor-pointer">Download PDF</p>
                          </div>
                       </div>
                    </div>
                  </div>

                  <div className="mt-8 p-8 border border-[#e5e7eb] rounded-3xl bg-[#fafafa]">
                     <h4 className="font-bold text-[#111827] mb-4">Need Help?</h4>
                     <p className="text-sm text-[#6b7280] mb-6">Contact our admission help desk for any queries regarding this programme.</p>
                     <p className="text-lg font-bold text-[#263866]">+91 7994 188918</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programmes */}
      <section className="py-24 bg-[#fafafa] border-t border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="EXPLORE MORE"
            heading="Other Related Programmes"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(programmes).slice(0, 3).map(([key, p]) => (
              <Link key={key} href={`/academics/${key}`} className="bg-white border border-[#e5e7eb] p-6 rounded-2xl hover:shadow-lg transition group">
                <div className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-widest mb-2">{p.dept}</div>
                <h4 className="text-lg font-bold text-[#111827] group-hover:text-[#263866] transition-colors flex items-center justify-between">
                  {p.name} <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
