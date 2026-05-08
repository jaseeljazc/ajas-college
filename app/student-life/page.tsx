"use client";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import ClubCard from "@/components/ClubCard";
import DataTable from "@/components/DataTable";
import Link from "next/link";
import { HeartPulse, Briefcase, GraduationCap, MessageSquare, ShieldAlert, Users, Trophy } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function StudentLifePage() {
  const scholarships = [
    { name: "Post Metric Scholarship", eligibility: "Minority Community, Annual Income < 2.5L", amount: "₹3000 - ₹5000 / Year", provider: "Govt. of India" },
    { name: "Suvarna Jubilee Merit Scholarship", eligibility: "BPL/Low Income, Merit-based", amount: "₹10,000 / Year", provider: "DCE Kerala" },
    { name: "CH Mohammed Koya Scholarship", eligibility: "Minority Girls students only", amount: "₹5,000 / Year", provider: "Govt. of Kerala" },
    { name: "E-Grantz", eligibility: "SC/ST/OEC students", amount: "Full Fee Waiver", provider: "Govt. of Kerala" },
    { name: "AJAS Merit Award", eligibility: "College Toppers", amount: "Cash Prize & Trophy", provider: "AJAS College" }
  ];

  const clubs = [
    { name: "Arts Club", advisor: "Prof. Haris P.", description: "Nurturing creative talents in fine arts, performance, and cultural activities.", activities: ["Annual Arts Fest", "Painting Competitions", "Theater Workshops"] },
    { name: "Coding Club", advisor: "Dr. Rajesh K.", description: "A platform for tech enthusiasts to explore programming and software development.", activities: ["Hackathons", "Tech Talks", "Project Showcase"] },
    { name: "Nature Club", advisor: "Dr. Fathima S.", description: "Focusing on environmental awareness and sustainable campus initiatives.", activities: ["Tree Plantation", "Eco-walks", "Waste Management Awareness"] },
    { name: "Health Club", advisor: "Prof. Anitha M.", description: "Promoting physical and mental wellness among the student community.", activities: ["Yoga Sessions", "Blood Donation Camps", "Health Checkups"] },
    { name: "Literature Club", advisor: "Ms. Laila B.", description: "Celebrating language and literature through reading and writing.", activities: ["Poetry Slams", "Book Discussions", "Writing Contests"] },
    { name: "Women's Cell", advisor: "Prof. Anitha M.", description: "Empowering female students and addressing gender-related concerns.", activities: ["Self-defense Training", "Empowerment Seminars", "Counseling"] },
  ];

  return (
    <div className="flex flex-col">
      <PageHero
        breadcrumbs={[{ label: "Student Life" }]}
        label="CAMPUS EXPERIENCE"
        heading="Vibrant Student Life"
        subtext="Beyond academics, AJAS offers a rich ecosystem for personal growth, social responsibility, and cultural expression."
        showImage={true}
        bgImage="/images/student_life_hero_new.png"
      />

      {/* NSS Section */}
      <section id="nss" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <ScrollReveal className="w-full lg:w-1/2">
              <div>
                <SectionHeader
                  label="EXTENSION"
                  heading="National Service Scheme (NSS)"
                />
                <div className="text-[#4b5563] space-y-6 leading-relaxed mb-8">
                  <p>
                    The NSS unit of Al Jamia Arts & Science College (Unit No. 191) is a vibrant platform for students to engage in community service. We believe in the motto "Not Me, But You."
                  </p>
                  <p>
                    Our volunteers actively participate in rural development projects, health awareness campaigns, and environmental protection initiatives. The NSS experience helps students develop leadership qualities and a sense of social responsibility.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {["7-Day Special Camp", "Blood Donation", "Literacy Campaigns", "Village Adoption"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#263866]"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 border border-[#e5e7eb] rounded-xl bg-[#fafafa] inline-flex items-center gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center border border-[#e5e7eb]">
                      <Users size={18} className="text-[#9ca3af]" />
                  </div>
                  <div>
                      <h5 className="text-sm font-semibold text-[#111827]">Mr. Ibrahim Khaleel</h5>
                      <p className="text-[10px] text-[#6b7280] uppercase tracking-widest font-bold">Programme Officer</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="w-full lg:w-1/2">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-xl">
                  <img src="/images/activities.png" alt="NSS Activities" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-[#fafafa] border-y border-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Briefcase, title: "Career & Placements", desc: "Access the Placement Cell for career guidance.", href: "/placement" },
                { icon: Trophy, title: "Arts & Sports", desc: "Showcase your talents in annual meets.", href: "#" },
                { icon: GraduationCap, title: "Skill Development", desc: "Certification courses by Keltron, G-Tec.", href: "/academics#addon" }
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Link href={item.href} className="bg-white p-6 rounded-2xl border border-[#e5e7eb] hover:border-[#263866]/30 transition group h-full block shadow-sm">
                    <item.icon size={28} className="text-[#263866] mb-4" />
                    <h4 className="text-lg font-semibold text-[#111827] group-hover:text-[#263866] transition-colors">{item.title}</h4>
                    <p className="text-sm text-[#6b7280] mt-2">{item.desc}</p>
                  </Link>
                </ScrollReveal>
              ))}
           </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <SectionHeader
             label="SUPPORT"
             heading="Scholarships & Financial Aid"
             subtext="We ensure that deserving students are not deprived of education due to financial constraints."
           />
           <ScrollReveal delay={0.1}>
             <DataTable
               columns={[
                 { header: "Scholarship Name", accessor: "name" },
                 { header: "Eligibility", accessor: "eligibility" },
                 { header: "Provider", accessor: "provider" },
                 { header: "Amount / Benefit", accessor: "amount", align: "right", render: (row: any) => (
                   <span className="font-semibold text-[#111827]">{row.amount}</span>
                 ) },
               ]}
               rows={scholarships}
             />
           </ScrollReveal>
        </div>
      </section>

      {/* Counselling Center */}
      <section id="counselling" className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <ScrollReveal className="w-full lg:w-3/5">
              <div>
                <SectionHeader
                  label="WELLNESS"
                  heading="Counselling & Support Center"
                />
                <div className="text-[#4b5563] space-y-6 leading-relaxed mb-8">
                  <p>
                    AJAS provides professional counselling services to help students manage academic stress, personal issues, and career anxieties. Our trained counsellors offer a safe and confidential space for students to talk.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex gap-4 p-4 bg-white border border-[#e5e7eb] rounded-xl shadow-sm">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#263866] shrink-0"><HeartPulse size={20} /></div>
                        <div><h5 className="font-semibold text-sm">Personal Support</h5><p className="text-xs">Individual therapy sessions.</p></div>
                    </div>
                    <div className="flex gap-4 p-4 bg-white border border-[#e5e7eb] rounded-xl shadow-sm">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#263866] shrink-0"><MessageSquare size={20} /></div>
                        <div><h5 className="font-semibold text-sm">Career Guidance</h5><p className="text-xs">Vocational interest mapping.</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="w-full lg:w-2/5">
              <div className="bg-white border border-[#e5e7eb] rounded-2xl p-8 shadow-sm">
                <h4 className="font-semibold text-[#111827] mb-6">Book an Appointment</h4>
                <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-sm focus:border-[#263866] outline-none" />
                    <input type="email" placeholder="Email Address" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-sm focus:border-[#263866] outline-none" />
                    <textarea rows={3} placeholder="Briefly mention your concern (optional)" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-sm focus:border-[#263866] outline-none"></textarea>
                    <button className="w-full bg-[#263866] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#1e40af] transition">Submit Request</button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Clubs Detailed Grid */}
      <section id="clubs" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <SectionHeader
             label="FORUMS"
             heading="Clubs & Cells"
             subtext="Discover your passion and connect with like-minded peers through our diverse student organizations."
           />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clubs.map((club, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <ClubCard {...club} />
                </ScrollReveal>
              ))}
           </div>
        </div>
      </section>

      {/* Register a Complaint */}
      <section id="complaint" className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-white border border-[#e5e7eb] rounded-3xl p-10 shadow-lg">
                <div className="text-center mb-10">
                  <ShieldAlert size={48} className="text-[#263866] mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold text-[#111827]">Grievance Redressal</h2>
                  <p className="text-sm text-[#6b7280] mt-2">Submit your complaints or concerns to the college administration.</p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Full Name" className="w-full border border-[#e5e7eb] rounded-xl px-5 py-3 text-sm focus:border-[#263866] outline-none" />
                      <input type="text" placeholder="Roll Number" className="w-full border border-[#e5e7eb] rounded-xl px-5 py-3 text-sm focus:border-[#263866] outline-none" />
                  </div>
                  <select className="w-full border border-[#e5e7eb] rounded-xl px-5 py-3 text-sm focus:border-[#263866] outline-none">
                      <option>Select Category</option>
                      <option>Academic</option>
                      <option>Infrastructure</option>
                      <option>Examination</option>
                      <option>Disciplinary</option>
                      <option>Others</option>
                  </select>
                  <textarea rows={5} placeholder="Describe your grievance in detail..." className="w-full border border-[#e5e7eb] rounded-xl px-5 py-3 text-sm focus:border-[#263866] outline-none"></textarea>
                  <button type="button" className="w-full bg-[#111827] text-white py-4 rounded-xl font-bold hover:bg-black transition">Submit Grievance</button>
                </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
