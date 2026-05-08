"use client";

import Link from "next/link";
import { User as UserIcon } from "lucide-react";

export default function PtaPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="bg-white border-b border-[#f3f4f6] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-xs text-[#9ca3af] mb-4">
              <Link href="/" className="hover:text-[#263866] transition">Home</Link> → PTA
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Parent Teacher Association</h3>
            <h1 className="text-4xl font-semibold text-[#111827] mb-4">Collaborative Growth</h1>
            <p className="text-[#6b7280]">Fostering a strong partnership between parents and teachers for the holistic development of our students.</p>
          </div>
        </div>
      </section>

      {/* Committee */}
      <section className="bg-[#fafafa] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Leadership</h3>
          <h2 className="text-3xl font-semibold text-[#111827] mb-8">PTA Committee</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { role: "President", name: "Mr. Abdul Kareem" },
              { role: "Secretary", name: "Dr. Aisha Rahman" },
              { role: "Treasurer", name: "Prof. Mohammed Ali" }
            ].map((member, i) => (
              <div key={i} className="bg-white border border-[#e5e7eb] rounded-xl p-6 flex flex-col items-center text-center border-t-4 border-t-[#263866] shadow-sm">
                <div className="w-20 h-20 rounded-full bg-[#f3f4f6] flex items-center justify-center border border-[#e5e7eb] mb-4">
                  <UserIcon size={24} className="text-[#9ca3af]" />
                </div>
                <h4 className="text-lg font-semibold text-[#111827] mb-1">{member.name}</h4>
                <p className="text-sm text-[#263866] font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meetings & Announcements */}
      <section className="bg-white py-16 md:py-24 border-y border-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Meetings */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Schedule</h3>
              <h2 className="text-3xl font-semibold text-[#111827] mb-8">PTA Meetings</h2>
              
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-[#111827] mb-4">Upcoming Meetings</h4>
                <div className="flex flex-col gap-3">
                  <div className="border border-[#e5e7eb] rounded-xl p-4 bg-[#fafafa] flex justify-between items-center">
                    <div>
                      <h5 className="font-semibold text-[#111827]">Annual General Body Meeting</h5>
                      <p className="text-xs text-[#6b7280]">Main Auditorium</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-sm font-bold text-[#263866]">June 10, 2026</span>
                      <span className="text-xs text-[#6b7280]">10:00 AM</span>
                    </div>
                  </div>
                  <div className="border border-[#e5e7eb] rounded-xl p-4 bg-[#fafafa] flex justify-between items-center">
                    <div>
                      <h5 className="font-semibold text-[#111827]">Executive Committee</h5>
                      <p className="text-xs text-[#6b7280]">Conference Room</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-sm font-bold text-[#263866]">May 25, 2026</span>
                      <span className="text-xs text-[#6b7280]">02:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[#111827] mb-4">Past Archives</h4>
                <table className="w-full text-left text-sm border border-[#e5e7eb] rounded-xl overflow-hidden block sm:table">
                  <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                    <tr>
                      <th className="px-4 py-3 font-medium text-[#6b7280]">Meeting Type</th>
                      <th className="px-4 py-3 font-medium text-[#6b7280]">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f3f4f6]">
                    <tr><td className="px-4 py-3 text-[#111827]">First Year Orientation PTA</td><td className="px-4 py-3 text-[#4b5563]">Aug 2025</td></tr>
                    <tr><td className="px-4 py-3 text-[#111827]">Mid-term Review Meeting</td><td className="px-4 py-3 text-[#4b5563]">Nov 2025</td></tr>
                    <tr><td className="px-4 py-3 text-[#111827]">Pre-Exam Counselling</td><td className="px-4 py-3 text-[#4b5563]">Feb 2026</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Announcements */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Updates</h3>
              <h2 className="text-3xl font-semibold text-[#111827] mb-8">Announcements</h2>
              
              <div className="flex flex-col gap-4">
                {[
                  "Fund allocation for the new smart classroom approved.",
                  "PTA Meritorious Student Award 2026 applications open.",
                  "Requesting parents to update their contact details in the portal.",
                  "Volunteers required for the upcoming Cultural Fest.",
                  "New transportation guidelines finalized by the committee."
                ].map((text, i) => (
                  <div key={i} className="border-l-4 border-[#263866] pl-4 py-3 bg-[#fafafa] rounded-r-lg border-y border-r border-[#e5e7eb]">
                    <p className="text-sm text-[#111827] leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white border border-[#e5e7eb] rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-[#111827] mb-4">Parent Feedback Form</h4>
                <form className="space-y-3">
                  <input type="text" placeholder="Parent Name" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2 text-sm focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none" />
                  <input type="text" placeholder="Student Name & Batch" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2 text-sm focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none" />
                  <textarea rows={3} placeholder="Your Feedback/Suggestion" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2 text-sm focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none"></textarea>
                  <button type="button" className="w-full bg-[#263866] text-white rounded-lg py-2 text-sm font-medium hover:bg-[#1e40af] transition">
                    Submit Feedback
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
