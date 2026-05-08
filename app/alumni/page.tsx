"use client";

import Link from "next/link";
import { Image as ImageIcon, User as UserIcon } from "lucide-react";

export default function AlumniPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="bg-white border-b border-[#f3f4f6] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="text-xs text-[#9ca3af] mb-4">
                <Link href="/" className="hover:text-[#263866] transition">Home</Link> → Alumni
              </div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">ALUMNI ASSOCIATION</h3>
              <h1 className="text-4xl font-semibold text-[#111827] mb-4">Global Network</h1>
              <p className="text-[#6b7280]">Connecting graduates across the globe. Stay in touch, give back, and grow with your alma mater.</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-[240px] bg-[#f3f4f6] rounded-2xl flex flex-col items-center justify-center border border-dashed border-[#d1d5db]">
                <ImageIcon size={36} className="text-[#9ca3af] mb-3" />
                <p className="text-sm text-[#9ca3af] font-medium">Alumni Meet — 800×480px</p>
                <p className="text-xs text-[#d1d5db]">Size recommendation</p>
              </div>
              <p className="text-xs text-[#9ca3af] mt-2 text-center">[Replace with actual photo]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="bg-[#fafafa] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Directory</h3>
          <h2 className="text-3xl font-semibold text-[#111827] mb-8">Notable Alumni</h2>
          
          <div className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden hidden md:block">
            <table className="w-full text-left">
              <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Batch</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Dept</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Company/Role</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">City</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f4f6]">
                {[
                  { name: "Mohammed Azeer", batch: "2016-18", dept: "Islamic Finance", company: "Finance Consultant", city: "Dubai" },
                  { name: "Mohammed Shabeel K.", batch: "2016-19", dept: "BBA Finance", company: "Senior Analyst", city: "Bangalore" },
                  { name: "SAFWA K", batch: "2016-19", dept: "Psychology", company: "Clinical Psychologist", city: "Kochi" },
                  { name: "Fathima Hiba", batch: "2017-20", dept: "English", company: "Content Strategist", city: "Chennai" },
                  { name: "Ashraf Ali", batch: "2015-18", dept: "BCA", company: "Software Engineer at TCS", city: "Trivandrum" },
                  { name: "Zainab T", batch: "2018-21", dept: "Microbiology", company: "Research Assistant", city: "Mumbai" },
                ].map((person, i) => (
                  <tr key={i} className="hover:bg-[#fafafa] transition">
                    <td className="px-6 py-4 text-sm font-medium text-[#111827]">{person.name}</td>
                    <td className="px-6 py-4 text-sm text-[#4b5563]">{person.batch}</td>
                    <td className="px-6 py-4 text-sm text-[#4b5563]">{person.dept}</td>
                    <td className="px-6 py-4 text-sm text-[#111827]">{person.company}</td>
                    <td className="px-6 py-4 text-sm text-[#6b7280]">{person.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-white border border-[#e5e7eb] rounded-xl p-4 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-[#111827]">Mohammed Azeer</h4>
                  <span className="text-xs bg-[#f3f4f6] px-2 py-1 rounded">2016-18</span>
                </div>
                <div className="text-sm text-[#4b5563]">Islamic Finance</div>
                <div className="text-xs text-[#6b7280]">Finance Consultant, Dubai</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white py-24 border-b border-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Spotlight</h3>
          <h2 className="text-3xl font-semibold text-[#111827] mb-8">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="border border-[#e5e7eb] rounded-xl p-8 bg-white flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#f3f4f6] flex items-center justify-center border border-[#e5e7eb] mb-4">
                  <UserIcon size={24} className="text-[#9ca3af]" />
                </div>
                <h4 className="font-semibold text-[#111827]">Fathima Hiba</h4>
                <p className="text-xs text-[#6b7280] mb-4">BA English, Batch of 2020</p>
                <p className="text-sm text-[#4b5563] italic">"The supportive environment at AJAS gave me the confidence to pursue a career in media and content creation at a global level."</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Join Network</h3>
              <h2 className="text-3xl font-semibold text-[#111827] mb-4">Alumni Registration</h2>
              <p className="text-[#6b7280] mb-6">
                Are you an AJAS graduate? Register yourself to stay connected with batchmates, participate in alumni events, and contribute to the college.
              </p>
              <div className="w-full h-[200px] bg-[#f3f4f6] rounded-xl flex flex-col items-center justify-center border border-[#e5e7eb]">
                <ImageIcon size={24} className="text-[#9ca3af] mb-2" />
                <p className="text-sm text-[#9ca3af] font-medium">Campus Memories Photo</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="border border-[#e5e7eb] rounded-xl p-8 bg-[#fafafa]">
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-[#374151] mb-1.5 block">Full Name</label>
                    <input type="text" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-[#111827] bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#374151] mb-1.5 block">Batch Year</label>
                      <select className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-[#111827] bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm">
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2024</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#374151] mb-1.5 block">Department</label>
                      <select className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-[#111827] bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm">
                        <option>BBA</option>
                        <option>BCA</option>
                        <option>English</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#374151] mb-1.5 block">Current Profession/Company</label>
                    <input type="text" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-[#111827] bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" />
                  </div>
                  <button type="button" className="w-full bg-[#263866] text-white rounded-lg py-2.5 px-6 text-sm font-medium hover:bg-[#1e40af] transition mt-2">
                    Register as Alumni
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
