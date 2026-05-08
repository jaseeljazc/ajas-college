"use client";

import Link from "next/link";
import { FileText, Download } from "lucide-react";

export default function IqacPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="bg-white border-b border-[#f3f4f6] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="text-xs text-[#9ca3af] mb-4">
                <Link href="/" className="hover:text-[#263866] transition">Home</Link> → IQAC
              </div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Internal Quality Assurance Cell</h3>
              <h1 className="text-4xl font-semibold text-[#111827] mb-4">Quality & Accreditation</h1>
              <p className="text-[#6b7280]">Ensuring continuous improvement in the entire operations of the institution.</p>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              {[
                { label: "NAAC Status", value: "In Progress" },
                { label: "ISO Certified", value: "Yes" },
                { label: "Programmes", value: "14" },
                { label: "Audit Reports", value: "Updated" }
              ].map((stat, i) => (
                <div key={i} className="border border-[#e5e7eb] rounded-xl p-4 bg-[#fafafa]">
                  <div className="text-xs text-[#6b7280] mb-1">{stat.label}</div>
                  <div className="text-xl font-semibold text-[#111827]">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NAAC Criteria */}
      <section className="bg-[#fafafa] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Assessment</h3>
          <h2 className="text-3xl font-semibold text-[#111827] mb-8">NAAC Criteria Progress</h2>
          
          <div className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Criterion No</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider w-1/4">Progress</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider text-right">Weightage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f4f6]">
                {[
                  { id: "I", name: "Curricular Aspects", w: "100", p: 80 },
                  { id: "II", name: "Teaching-Learning and Evaluation", w: "350", p: 75 },
                  { id: "III", name: "Research, Innovations and Extension", w: "120", p: 60 },
                  { id: "IV", name: "Infrastructure and Learning Resources", w: "100", p: 90 },
                  { id: "V", name: "Student Support and Progression", w: "130", p: 85 },
                  { id: "VI", name: "Governance, Leadership and Management", w: "100", p: 80 },
                  { id: "VII", name: "Institutional Values and Best Practices", w: "100", p: 95 },
                ].map((c, i) => (
                  <tr key={i} className="hover:bg-[#fafafa] transition">
                    <td className="px-6 py-4 text-sm font-medium text-[#111827]">Criterion {c.id}</td>
                    <td className="px-6 py-4 text-sm text-[#4b5563]">{c.name}</td>
                    <td className="px-6 py-4">
                      <div className="w-full bg-[#f3f4f6] rounded-full h-1.5">
                        <div className="bg-[#263866] h-1.5 rounded-full" style={{ width: `${c.p}%` }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#111827] text-right font-medium">{c.w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Reports</h3>
          <h2 className="text-3xl font-semibold text-[#111827] mb-8">IQAC Documents</h2>

          <div className="border border-[#e5e7eb] rounded-xl bg-white overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Document Name</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider hidden sm:table-cell">Type</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider hidden sm:table-cell">Year</th>
                  <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f3f4f6]">
                {[
                  { name: "AQAR Report", type: "PDF", year: "2023-24" },
                  { name: "Academic Audit Report", type: "PDF", year: "2023-24" },
                  { name: "Green Audit Report", type: "PDF", year: "2023" },
                  { name: "Energy Audit", type: "PDF", year: "2023" },
                  { name: "Feedback Analysis Report", type: "PDF", year: "2023-24" },
                ].map((doc, i) => (
                  <tr key={i} className="hover:bg-[#fafafa] transition">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <FileText size={16} className="text-[#263866]" />
                        <span className="text-sm font-medium text-[#111827]">{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#6b7280] hidden sm:table-cell">{doc.type}</td>
                    <td className="px-6 py-4 text-sm text-[#6b7280] hidden sm:table-cell">{doc.year}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="inline-flex items-center gap-2 border border-[#e5e7eb] text-[#374151] text-xs px-3 py-1.5 rounded hover:border-[#263866] hover:text-[#263866] transition">
                        <Download size={12} /> <span className="hidden sm:inline">Download</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
