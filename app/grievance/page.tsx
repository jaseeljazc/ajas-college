"use client";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function GrievancePage() {
  return (
    <div className="flex flex-col">
      <PageHero
        breadcrumbs={[{ label: "Grievance Redressal" }]}
        label="STUDENT WELFARE"
        heading="Grievance Redressal Cell"
        subtext="Ensuring a safe, respectful, and supportive campus environment for every student."
        showImage={true}
        bgImage="/images/activities.png"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <ScrollReveal>
                <div className="mb-12">
                  <SectionHeader label="ABOUT" heading="Vision & Mission" />
                  <div className="prose prose-sm text-[#4b5563] max-w-none">
                    <p className="text-lg font-medium text-[#111827] mb-6 border-l-4 border-[#263866] pl-4">
                      <strong>Vision:</strong> To ensure a campus free from ragging and harassment, fostering an environment of mutual respect, safety, and dignity for all students.
                    </p>
                    <h4 className="text-[#111827] font-semibold mt-8 mb-4">Our Mission Includes:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Conducting regular awareness programs for students and staff.</li>
                      <li>Providing confidential counselling support.</li>
                      <li>Strict enforcement of UGC regulations against ragging and harassment.</li>
                      <li>Maintaining a secure and accessible safe reporting mechanism.</li>
                      <li>Continuous faculty training on handling grievances effectively.</li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-[#fafafa] border border-[#e5e7eb] rounded-2xl p-8">
                  <SectionHeader label="PROCESS" heading="Grievance Submission Procedure" />
                  {/* MOCK DATA - Replace with real college data before go-live */}
                  <div className="space-y-8 mt-8">
                    {[
                      { title: "Submit Complaint", desc: "The student submits a written complaint to the Grievance Redressal Cell or via the online complaint portal on this website." },
                      { title: "Acknowledgement", desc: "The cell acknowledges receipt of the complaint within 3 working days." },
                      { title: "Preliminary Enquiry", desc: "The coordinator conducts a preliminary review within 7 working days." },
                      { title: "Committee Meeting", desc: "If the complaint requires further action, a committee meeting is convened within 15 working days." },
                      { title: "Resolution", desc: "The resolution or decision is communicated to the complainant in writing within 30 working days." },
                      { title: "Appeal", desc: "If unsatisfied, the student may escalate the matter to the Principal or the University Grievance Cell." },
                    ].map((step, i) => (
                      <div key={i} className="flex gap-6 relative">
                        {i !== 5 && <div className="absolute left-4 top-10 bottom-0 w-px bg-[#e5e7eb]" />}
                        <div className="w-8 h-8 rounded-full bg-[#263866] text-white flex items-center justify-center shrink-0 text-sm font-bold ring-4 ring-[#fafafa] z-10">
                          {i + 1}
                        </div>
                        <div className="pb-8">
                          <h4 className="text-base font-semibold text-[#111827] mb-2">{step.title}</h4>
                          <p className="text-sm text-[#4b5563]">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-[#263866] text-white rounded-2xl p-8 text-center shadow-lg">
                  <ShieldCheck size={48} className="mx-auto mb-6 text-[#C8A24E]" />
                  <h3 className="text-xl font-bold mb-4">Register a Complaint</h3>
                  <p className="text-sm text-white/80 mb-8">
                    Your identity will be kept strictly confidential. We are here to help and support you.
                  </p>
                  <Link href="https://ajascollege.ac.in/register-a-complaint/" className="inline-flex items-center justify-center w-full gap-2 bg-[#C8A24E] text-[#111827] py-12 md:py-16 rounded-xl font-bold hover:bg-white transition">
                    Submit Online Form <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="border border-[#e5e7eb] rounded-2xl p-8 bg-white shadow-sm">
                  <h3 className="text-base font-bold text-[#111827] mb-6 uppercase tracking-wider text-xs">Cell Coordinator</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#f3f4f6] border border-[#e5e7eb]"></div>
                    <div>
                      <h4 className="font-semibold text-[#111827]">Ms. Sameeha Shirin KV</h4>
                      <p className="text-xs text-[#6b7280]">Department of Food Technology</p>
                    </div>
                  </div>
                  
                  <hr className="border-[#e5e7eb] my-6" />
                  
                  <h3 className="text-base font-bold text-[#111827] mb-6 uppercase tracking-wider text-xs">Contact Information</h3>
                  {/* MOCK DATA - Replace with real college data before go-live */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-[#4b5563]">
                      <Mail size={16} className="text-[#263866]" />
                      <a href="mailto:grievance@ajascollege.ac.in" className="hover:text-[#263866] hover:underline">grievance@ajascollege.ac.in</a>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#4b5563]">
                      <Clock size={16} className="text-[#263866]" />
                      <span>Mon - Fri, 9:00 AM – 4:00 PM</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

