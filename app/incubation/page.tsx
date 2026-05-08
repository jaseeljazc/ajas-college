"use client";

import Link from "next/link";
import { Image as ImageIcon, Rocket, User as UserIcon } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function IncubationPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="bg-white border-b border-[#f3f4f6] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="text-xs text-[#9ca3af] mb-4">
                <Link href="/" className="hover:text-[#263866] transition">Home</Link> → Incubation
              </div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Innovation & Entrepreneurship</h3>
              <h1 className="text-4xl font-semibold text-[#111827] mb-4">Incubation Center</h1>
              <p className="text-[#6b7280]">Fostering innovation, supporting startups, and nurturing the entrepreneurial spirit among students.</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-[240px] bg-[#f3f4f6] rounded-2xl flex flex-col items-center justify-center border border-dashed border-[#d1d5db]">
                <Rocket size={36} className="text-[#9ca3af] mb-3" />
                <p className="text-sm text-[#9ca3af] font-medium">Incubation Lab — 800×480px</p>
                <p className="text-xs text-[#d1d5db]">Size recommendation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#fafafa] py-24 border-b border-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Process</h3>
          <h2 className="text-3xl font-semibold text-[#111827] mb-12">Application Timeline</h2>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-[#e5e7eb] -z-10"></div>
            {[
              { step: "1", title: "Idea Submission", desc: "Submit your startup idea" },
              { step: "2", title: "Screening", desc: "Evaluation by expert panel" },
              { step: "3", title: "Incubation", desc: "Access to lab & mentoring" },
              { step: "4", title: "Launch", desc: "Seed funding & market entry" }
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center max-w-[200px] mx-auto bg-[#fafafa] px-4">
                  <div className="w-12 h-12 rounded-full bg-[#263866] text-white flex items-center justify-center font-bold mb-4 shadow-sm">
                    {s.step}
                  </div>
                  <h4 className="font-semibold text-[#111827]">{s.title}</h4>
                  <p className="text-xs text-[#6b7280] mt-1">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Startups */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Resources</h3>
              <h2 className="text-3xl font-semibold text-[#111827] mb-8">Facilities Provided</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Co-working Space" },
                  { name: "High-speed Internet" },
                  { name: "Mentorship Network" },
                  { name: "Funding Assistance" }
                ].map((f, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="border border-[#e5e7eb] rounded-xl overflow-hidden hover:shadow-md transition bg-white h-full">
                      <div className="w-full h-24 bg-[#f3f4f6] flex items-center justify-center border-b border-[#e5e7eb]">
                        <ImageIcon size={20} className="text-[#9ca3af]" />
                      </div>
                      <div className="p-3 text-center">
                        <h4 className="text-sm font-semibold text-[#111827]">{f.name}</h4>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Portfolio</h3>
              <h2 className="text-3xl font-semibold text-[#111827] mb-8">Incubated Startups</h2>
              <div className="flex flex-col gap-4">
                {[
                  { name: "EduTech Solutions", stage: "Pre-seed" },
                  { name: "Green AI Labs", stage: "Prototype" },
                  { name: "FinTrack", stage: "Ideation" },
                  { name: "HealthConnect", stage: "Seed" }
                ].map((s, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="flex justify-between items-center border border-[#e5e7eb] rounded-xl p-4 bg-white hover:border-[#263866]/30 transition shadow-sm">
                      <div>
                        <h4 className="font-semibold text-[#111827]">{s.name}</h4>
                        <p className="text-xs text-[#6b7280]">Tech Startup</p>
                      </div>
                      <span className="text-[10px] font-medium text-[#263866] bg-blue-50 px-2 py-1 rounded-full uppercase tracking-wider border border-blue-100">{s.stage}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors & Form */}
      <section className="bg-[#fafafa] py-24 border-t border-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Mentors</h3>
              <h2 className="text-3xl font-semibold text-[#111827] mb-8">Expert Guidance</h2>
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((_, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#e5e7eb] shadow-sm">
                        <UserIcon size={20} className="text-[#9ca3af]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#111827]">Industry Expert</h4>
                        <p className="text-xs text-[#6b7280]">Startup Advisor</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal className="w-full lg:w-1/2" delay={0.2}>
              <div className="bg-white border border-[#e5e7eb] rounded-xl p-8 shadow-lg">
                <h4 className="text-lg font-semibold text-[#111827] mb-6">Apply for Incubation</h4>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-[#374151] mb-1.5 block">Team/Startup Name</label>
                    <input type="text" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-[#111827] focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" placeholder="e.g. InnovateX" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#374151] mb-1.5 block">Idea Description (Brief)</label>
                    <textarea rows={3} className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-[#111827] focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" placeholder="What problem are you solving?"></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#374151] mb-1.5 block">Contact Lead</label>
                      <input type="text" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-[#111827] focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" placeholder="Name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#374151] mb-1.5 block">Email</label>
                      <input type="email" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-[#111827] focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" placeholder="email@example.com" />
                    </div>
                  </div>
                  <button type="button" className="w-full bg-[#263866] text-white rounded-lg py-3 px-6 text-sm font-bold hover:bg-[#1e40af] transition mt-2 shadow-sm">
                    Submit Proposal
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
