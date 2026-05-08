"use client";

import Link from "next/link";
import { User as UserIcon } from "lucide-react";

export default function ConsultancyPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="bg-white border-b border-[#f3f4f6] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-xs text-[#9ca3af] mb-4">
              <Link href="/" className="hover:text-[#263866] transition">Home</Link> → Consultancy
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Academic & Industry Support</h3>
            <h1 className="text-4xl font-semibold text-[#111827] mb-4">Consultancy Services</h1>
            <p className="text-[#6b7280]">Leveraging academic expertise to provide specialized solutions for industry, government, and society.</p>
          </div>
        </div>
      </section>

      {/* Expertise & Faculty */}
      <section className="bg-[#fafafa] py-24 border-b border-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Experts</h3>
          <h2 className="text-3xl font-semibold text-[#111827] mb-8">Our Consultants</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Dr. C.K. Abdul Rabbi Nistar", dept: "Management", expertise: "Strategic Planning, Leadership" },
              { name: "Prof. Anitha M.", dept: "Psychology", expertise: "Counseling, Behavioral Analysis" },
              { name: "Dr. Rajesh K.", dept: "Computer Science", expertise: "AI/ML, Data Analytics" },
              { name: "Mr. Sameer T.", dept: "Islamic Finance", expertise: "Sharia Banking, Microfinance" },
              { name: "Dr. Fathima S.", dept: "Microbiology", expertise: "Food Testing, Clinical Research" },
              { name: "Prof. Haris P.", dept: "English", expertise: "Corporate Communication, Translation" }
            ].map((faculty, i) => (
              <div key={i} className="bg-white border border-[#e5e7eb] rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#f3f4f6] flex items-center justify-center border border-[#e5e7eb] shrink-0">
                    <UserIcon size={20} className="text-[#9ca3af]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111827]">{faculty.name}</h4>
                    <p className="text-xs text-[#6b7280]">{faculty.dept}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-xs text-[#4b5563]">Expertise:</p>
                  <p className="text-sm font-medium text-[#111827]">{faculty.expertise}</p>
                </div>
                <button className="w-full py-2 border border-[#e5e7eb] rounded-lg text-sm text-[#374151] hover:border-[#263866] hover:text-[#263866] transition font-medium">
                  Request Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Form */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Active Projects */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Portfolio</h3>
              <h2 className="text-3xl font-semibold text-[#111827] mb-8">Ongoing Projects</h2>

              <div className="border border-[#e5e7eb] rounded-xl overflow-hidden mb-8">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                    <tr>
                      <th className="px-4 py-3 font-medium text-[#6b7280]">Project Title</th>
                      <th className="px-4 py-3 font-medium text-[#6b7280]">Client</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f3f4f6]">
                    <tr className="hover:bg-[#fafafa] transition">
                      <td className="px-4 py-4 text-[#111827] font-medium">Retail Customer Behavior Analysis</td>
                      <td className="px-4 py-4 text-[#4b5563]">Lulu Hypermarket</td>
                    </tr>
                    <tr className="hover:bg-[#fafafa] transition">
                      <td className="px-4 py-4 text-[#111827] font-medium">Water Quality Testing in Perinthalmanna</td>
                      <td className="px-4 py-4 text-[#4b5563]">Local Municipality</td>
                    </tr>
                    <tr className="hover:bg-[#fafafa] transition">
                      <td className="px-4 py-4 text-[#111827] font-medium">Islamic Microfinance Feasibility Study</td>
                      <td className="px-4 py-4 text-[#4b5563]">Kerala State Cooperative</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="border border-[#e5e7eb] rounded-lg p-4 bg-[#fafafa]">
                <h4 className="text-sm font-semibold text-[#111827] mb-2">UGC Guidelines</h4>
                <p className="text-xs text-[#6b7280] leading-relaxed">
                  All consultancy services are provided in adherence to University Grants Commission (UGC) and University of Calicut norms. Revenue sharing is strictly based on the institutional consultancy policy.
                </p>
              </div>
            </div>

            {/* Request Form */}
            <div>
              <div className="bg-[#fafafa] border border-[#e5e7eb] rounded-xl p-8 shadow-sm">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Inquiry</h3>
                <h2 className="text-2xl font-semibold text-[#111827] mb-6">Submit a Request</h2>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#374151] mb-1.5 block">Organization</label>
                      <input type="text" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#374151] mb-1.5 block">Contact Person</label>
                      <input type="text" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#374151] mb-1.5 block">Email</label>
                    <input type="email" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#374151] mb-1.5 block">Relevant Department</label>
                    <select className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm">
                      <option>Select Department</option>
                      <option>Computer Science / AI</option>
                      <option>Management / BBA / BCom</option>
                      <option>Microbiology / Food Tech</option>
                      <option>Psychology</option>
                      <option>Languages</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#374151] mb-1.5 block">Project Requirements</label>
                    <textarea rows={4} className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm"></textarea>
                  </div>
                  <button type="button" className="w-full bg-[#263866] text-white rounded-lg py-3 px-6 text-sm font-medium hover:bg-[#1e40af] transition mt-2">
                    Send Request
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
