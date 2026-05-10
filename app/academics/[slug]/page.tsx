"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import PremiumCard from "@/components/PremiumCard";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Clock, Award, Users, FileText, ArrowRight, ArrowUpRight,
  CheckCircle, BookOpen, Phone, Mail,
} from "lucide-react";

export default function ProgrammeDetailPage() {
  const { slug } = useParams();

  const programmes: Record<string, any> = {
    "b.com-(honours)": { name: "B.Com (Honours)", dept: "Commerce", duration: "4 Years (FYUG)", seats: "60 Seats", eligibility: "Plus Two or equivalent with Commerce/Science stream.", overview: "The B.Com (Honours) programme is designed to provide students with a wide range of managerial skills while at the same time building competence in a particular area of business studies. It bridges academic theory with real-world financial practice.", highlights: ["Advanced Accounting & Auditing", "GST & Income Tax Specialization", "Professional Certification Support", "Industry-aligned curriculum", "Business Analytics", "Financial Modelling"] },
    "bba": { name: "BBA", dept: "Business Administration", duration: "3 Years", seats: "40 Seats", eligibility: "Plus Two or equivalent in any stream with minimum 45% marks.", overview: "Bachelor of Business Administration (BBA) is a professional degree that focuses on developing leadership and management skills required in the corporate world. Students gain exposure to real business scenarios through case studies and internships.", highlights: ["Marketing & HR Management", "Entrepreneurship Development", "Regular Industry Visits", "Soft Skills Training", "Business Communication", "Leadership Workshops"] },
    "bca": { name: "BCA", dept: "Computer Applications", duration: "3 Years", seats: "40 Seats", eligibility: "Plus Two or equivalent with Mathematics/Computer Science/Computer Applications.", overview: "The BCA programme provides a sound academic base from which an advanced career in Computer Applications can be developed. It blends programming fundamentals with practical software engineering skills.", highlights: ["Web Development & Software Engineering", "Database Management Systems", "Mobile App Development", "Live Project Training", "Python & Java", "Cloud Technologies"] },
    "bsc.-microbiology": { name: "BSc. Microbiology", dept: "Life Sciences", duration: "3 Years", seats: "32 Seats", eligibility: "Plus Two or equivalent with Biology as a core subject.", overview: "Microbiology is the study of microscopic organisms, such as bacteria, viruses, archaea, fungi and protozoa. The programme blends classical microbiology with modern biotechnological applications.", highlights: ["Clinical & Industrial Microbiology", "Advanced Lab Facilities", "Research Projects", "Biotechnology Integration", "Environmental Microbiology", "Immunology"] },
    "ba-islamic-studies": { name: "BA Islamic Studies", dept: "Islamic Studies", duration: "3 Years", seats: "40 Seats", eligibility: "Plus Two or equivalent in any stream.", overview: "The programme offers a comprehensive study of Islamic history, culture, law, and theology in a modern context. It prepares students for careers in scholarship, education, and interfaith dialogue.", highlights: ["Classical & Modern Arabic", "Islamic Jurisprudence (Fiqh)", "History of Islamic Civilization", "Comparative Religion", "Hadith Sciences", "Islamic Ethics"] },
    "ba-english": { name: "BA English", dept: "English", duration: "3 Years", seats: "40 Seats", eligibility: "Plus Two or equivalent in any stream.", overview: "The BA English programme focuses on literature, linguistics, and language skills, preparing students for careers in media, education, and writing. It cultivates critical thinking through close engagement with diverse texts.", highlights: ["British & World Literature", "Creative Writing Workshops", "Linguistics & Phonetics", "Media & Communication Studies", "Translation Studies", "English for Research"] },
    "bsc.-geography": { name: "BSc. Geography", dept: "Geography", duration: "3 Years", seats: "32 Seats", eligibility: "Plus Two or equivalent in any stream.", overview: "BSc Geography involves the study of the Earth's landscapes, peoples, places and environments. Students develop spatial thinking and fieldwork skills alongside an understanding of environmental challenges.", highlights: ["Cartography & GIS", "Environmental Geography", "Geomorphology", "Field Survey & Mapping", "Climate Studies", "Urban Geography"] },
    "bsc.-psychology": { name: "BSc. Psychology", dept: "Psychology", duration: "3 Years", seats: "32 Seats", eligibility: "Plus Two or equivalent in any stream.", overview: "The programme provides a comprehensive understanding of human behavior and mental processes. It is designed to develop future psychologists, counselors, and researchers.", highlights: ["Clinical & Counseling Psychology", "Psychological Testing Lab", "Child & Adolescent Psychology", "Internship Opportunities", "Cognitive Psychology", "Research Methodology"] },
    "bsc.-food-technology": { name: "BSc. Food Technology", dept: "Life Sciences", duration: "3 Years", seats: "32 Seats", eligibility: "Plus Two or equivalent with Science stream (Biology/Mathematics).", overview: "Food Technology is a branch of food science that deals with the production, preservation, quality control and R&D of food products. It prepares students for the growing food processing industry.", highlights: ["Food Processing & Preservation", "Quality Control & HACCP", "Food Microbiology", "Industry Internships", "Packaging Technology", "Food Safety Regulations"] },
    "bsc.-computer-science": { name: "BSc. Computer Science", dept: "Computer Science", duration: "3 Years", seats: "40 Seats", eligibility: "Plus Two or equivalent with Mathematics as one of the subjects.", overview: "BSc Computer Science is an undergraduate programme which deals with the topics related to computer science, computer applications, and its services. It builds strong theoretical and practical foundations.", highlights: ["Programming in C++, Java, Python", "Data Structures & Algorithms", "Operating Systems", "Cloud Computing", "Software Engineering", "Cybersecurity Fundamentals"] },
    "bsc.-artificial-intelligence": { name: "BSc. Artificial Intelligence", dept: "AI & Data Science", duration: "3 Years", seats: "40 Seats", eligibility: "Plus Two or equivalent with Mathematics.", overview: "This programme focuses on the fundamentals of AI, machine learning, and data science to prepare students for the future of technology. Graduates are equipped for roles in research, tech, and innovation.", highlights: ["Machine Learning & Deep Learning", "Data Visualization", "Natural Language Processing", "AI Ethics & Policy", "Computer Vision", "Big Data Analytics"] },
    "ma-islamic-finance": { name: "MA Islamic Finance", dept: "Islamic Finance", duration: "2 Years", seats: "30 Seats", eligibility: "Graduation in any stream with minimum 50% marks.", overview: "This postgraduate programme focuses on the principles of Islamic economics and banking systems. It provides rigorous training in both the theory and practice of Sharia-compliant finance.", highlights: ["Sharia-compliant Banking", "Islamic Insurance (Takaful)", "Micro-finance & Social Finance", "Ethical Investment Strategies", "Zakat & Waqf Management", "Global Islamic Finance"] },
    "msc.-psychology": { name: "MSc. Psychology", dept: "Psychology", duration: "2 Years", seats: "20 Seats", eligibility: "BSc Psychology with minimum 50% marks.", overview: "MSc Psychology offers an advanced study of the human mind and behavior with a focus on clinical applications. It prepares graduates for professional practice and academic research.", highlights: ["Advanced Clinical Psychology", "Research Methodology", "Psychotherapeutic Techniques", "Hospital Internships", "Neuropsychology", "Psychometrics"] },
    "ma-arabic": { name: "MA Arabic", dept: "Arabic", duration: "2 Years", seats: "30 Seats", eligibility: "BA Arabic or equivalent with 50% marks.", overview: "The programme provides advanced knowledge of Arabic literature, language, and translation skills. It nurtures scholars capable of contributing to Arabic academia and cultural diplomacy.", highlights: ["Modern Arabic Literature", "Translation & Linguistics", "Classical Poetry", "Arabic Rhetoric", "Arabic for Media", "Comparative Literature"] },
  };

  const prog = programmes[slug as string] || {
    name: "Programme Detail", dept: "Academic Department", duration: "Varies", seats: "Varies",
    eligibility: "Please contact admission office.", overview: "Programme information is being updated.", highlights: ["Academic excellence", "Expert faculty"],
  };

  const relatedProgs = Object.entries(programmes)
    .filter(([key]) => key !== (slug as string))
    .slice(0, 3);

  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      {/* ── HERO ── */}
      <PageHero
        breadcrumbs={[{ label: "Academics", href: "/academics" }, { label: prog.name }]}
        label="PROGRAMME"
        heading={prog.name}
        subtext={`Department of ${prog.dept}`}
        showImage={true}
        bgImage="/images/classroom.png"
      />

      {/* ── INK STATS BAND ── */}
      <section style={{ background: "var(--color-ink-gradient)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
            {[
              { icon: Clock, label: "Duration", value: prog.duration },
              { icon: Users, label: "Intake", value: prog.seats },
              { icon: BookOpen, label: "Affiliation", value: "University of Calicut" },
              { icon: Award, label: "Status", value: "UGC Recognised" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex items-center gap-4 px-6 py-2 first:pl-0 last:pr-0">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(200,162,78,0.12)", border: "1px solid rgba(200,162,78,0.25)" }}>
                    <Icon size={16} style={{ color: "var(--c-accent)" }} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-mono)" }}>{stat.label}</p>
                    <p className="text-sm font-semibold text-white">{stat.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 md:py-20 lg:py-24" style={{ background: "var(--c-surface)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

            {/* ── LEFT — Main Editorial Content ── */}
            <div className="lg:col-span-8">

              {/* Overview */}
              <ScrollReveal>
                <p className="label mb-4">Overview</p>
                <hr className="divider-accent mb-8" />
                <h2 className="mb-6" style={{ color: "var(--c-text-primary)" }}>About This Programme</h2>
                <p className="text-lg leading-[1.85]" style={{ color: "var(--c-text-secondary)", maxWidth: "640px" }}>
                  {prog.overview}
                </p>
              </ScrollReveal>

              {/* Eligibility Card */}
              <ScrollReveal delay={0.08}>
                <div className="mt-12 p-8 flex gap-6 items-start"
                  style={{ background: "var(--color-ink-gradient)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg"
                    style={{ background: "rgba(200,162,78,0.15)", border: "1px solid rgba(200,162,78,0.3)" }}>
                    <Award size={18} style={{ color: "var(--c-accent)" }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}>Eligibility Criteria</p>
                    <p className="text-white/80 text-sm leading-relaxed">{prog.eligibility}</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Programme Highlights */}
              <div className="mt-20">
                <ScrollReveal>
                  <p className="label mb-4">Curriculum</p>
                  <hr className="divider-accent mb-8" />
                  <h2 className="mb-10" style={{ color: "var(--c-text-primary)" }}>Programme Highlights</h2>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {prog.highlights.map((item: string, i: number) => (
                    <ScrollReveal key={i} delay={i * 0.06}>
                      <div className="group flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                        style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                        <div className="w-7 h-7 shrink-0 rounded-md flex items-center justify-center"
                          style={{ background: "rgba(200,162,78,0.1)", border: "1px solid rgba(200,162,78,0.2)" }}>
                          <CheckCircle size={14} style={{ color: "var(--c-accent)" }} />
                        </div>
                        <span className="text-sm font-medium" style={{ color: "var(--c-text-primary)" }}>{item}</span>
                        <ArrowRight size={13} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--c-primary)" }} />
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Career Prospects — editorial strip */}
              <ScrollReveal delay={0.1}>
                <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--c-border)" }}>
                  <p className="label mb-4">After Graduation</p>
                  <hr className="divider-accent mb-8" />
                  <h2 className="mb-6" style={{ color: "var(--c-text-primary)" }}>Career Prospects</h2>
                  <p className="text-base leading-relaxed mb-8" style={{ color: "var(--c-text-secondary)" }}>
                    Graduates of this programme are well-equipped for a wide range of professional and academic paths. The curriculum is designed in alignment with current industry standards and university requirements.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Higher Education", "Research & Academia", "Government Services", "Private Sector", "Entrepreneurship"].map((tag, i) => (
                      <span key={i} className="text-xs font-semibold uppercase tracking-wider px-4 py-2"
                        style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "100px", color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ── RIGHT — Sticky Sidebar ── */}
            <div className="lg:col-span-4">
              <ScrollReveal className="sticky top-28 flex flex-col gap-6">

                {/* CTA Card */}
                <PremiumCard className="p-8">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-5 relative z-10" style={{ color: "var(--c-accent)", fontFamily: "var(--font-mono)" }}>
                    Apply for {new Date().getFullYear()}-{new Date().getFullYear() + 1}
                  </p>
                  <h4 className="text-xl font-semibold text-white mb-3 relative z-10" style={{ fontFamily: "var(--font-display)" }}>
                    Start Your Journey Here
                  </h4>
                  <p className="text-white/60 text-sm mb-8 leading-relaxed relative z-10">
                    Join Al Jamia Arts & Science College. Industry-aligned curriculum, expert faculty, and a legacy of academic excellence.
                  </p>
                  <div className="space-y-3 relative z-10">
                    <Link href="/admissions"
                      className="flex items-center justify-center gap-2 w-full py-3 px-5 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:opacity-90"
                      style={{ background: "var(--c-accent)", color: "#0a0e1a", borderRadius: "var(--radius-sm)" }}>
                      Apply Now <ArrowRight size={14} />
                    </Link>
                    <Link href="/contact"
                      className="flex items-center justify-center gap-2 w-full py-3 px-5 text-sm font-semibold transition-all duration-300 hover:bg-white/10"
                      style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", borderRadius: "var(--radius-sm)" }}>
                      Send Inquiry
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 relative z-10 grid grid-cols-2 gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    {[
                      { icon: Users, label: "Intake", val: prog.seats },
                      { icon: Clock, label: "Duration", val: prog.duration },
                    ].map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <div key={i} className="flex flex-col gap-1">
                          <Icon size={14} style={{ color: "rgba(255,255,255,0.35)" }} />
                          <p className="text-[9px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-mono)" }}>{s.label}</p>
                          <p className="text-sm font-bold text-white">{s.val}</p>
                        </div>
                      );
                    })}
                  </div>
                </PremiumCard>

                {/* Helpdesk Card */}
                <div className="p-6" style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                  <p className="label mb-4">Admission Helpdesk</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-md"
                        style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)" }}>
                        <Phone size={13} style={{ color: "var(--c-primary)" }} />
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-widest" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>Phone</p>
                        <p className="text-sm font-semibold" style={{ color: "var(--c-text-primary)" }}>+91 7994 188918</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-md"
                        style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)" }}>
                        <Mail size={13} style={{ color: "var(--c-primary)" }} />
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-widest" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>Email</p>
                        <p className="text-sm font-semibold" style={{ color: "var(--c-text-primary)" }}>admissions@ajascollege.ac.in</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-md"
                        style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)" }}>
                        <FileText size={13} style={{ color: "var(--c-primary)" }} />
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-widest" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>Syllabus</p>
                        <p className="text-sm font-semibold cursor-pointer hover:underline" style={{ color: "var(--c-primary)" }}>Download PDF</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── RELATED PROGRAMMES ── */}
      <section className="py-16 md:py-20" style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="flex items-end justify-between gap-6 mb-14 flex-wrap">
              <div>
                <p className="label mb-4">Explore More</p>
                <h2 style={{ color: "var(--c-text-primary)" }}>Other Programmes</h2>
              </div>
              <Link href="/academics"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-colors"
                style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>
                View All <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedProgs.map(([key, p], i) => (
              <ScrollReveal key={key} delay={i * 0.08}>
                <Link href={`/academics/${key}`}
                  className="group relative flex flex-col p-7 h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                  style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                  
                  <p className="text-[9px] font-bold uppercase tracking-widest mb-4 relative z-10"
                    style={{ color: "var(--c-primary)", fontFamily: "var(--font-mono)" }}>
                    {p.dept}
                  </p>
                  <h4 className="font-semibold mb-2 relative z-10 group-hover:text-[var(--c-primary)] transition-colors duration-300"
                    style={{ color: "var(--c-text-primary)", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>
                    {p.name}
                  </h4>
                  <p className="text-xs mb-6 relative z-10" style={{ color: "var(--c-text-secondary)" }}>
                    {p.duration} · {p.seats}
                  </p>
                  <div className="mt-auto flex items-center gap-2 relative z-10">
                    <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>
                      View Programme
                    </span>
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "var(--c-primary)" }} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
