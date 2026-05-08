import Link from "next/link";
import { Image as ImageIcon, Briefcase } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function PlacementPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="bg-white border-b border-[#f3f4f6] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="text-xs text-[#9ca3af] mb-4">
                <Link href="/" className="hover:text-[#263866] transition">Home</Link> → Placement
              </div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Placement Cell</h3>
              <h1 className="text-4xl font-semibold text-[#111827] mb-4">Career & Placement</h1>
              <p className="text-[#6b7280]">Empowering students with industry connections, career guidance, and campus recruitment opportunities.</p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-[240px] bg-[#f3f4f6] rounded-2xl flex flex-col items-center justify-center border border-dashed border-[#d1d5db]">
                <ImageIcon size={36} className="text-[#9ca3af] mb-3" />
                <p className="text-sm text-[#9ca3af] font-medium">Placement Hero — 800×480px</p>
                <p className="text-xs text-[#d1d5db]">Size recommendation</p>
              </div>
              <p className="text-xs text-[#9ca3af] mt-2 text-center">[Replace with actual photo]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-white border-b border-[#f3f4f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 divide-x divide-[#f3f4f6]">
            {[
              { label: "Placed Students", value: "85%" },
              { label: "Partner Companies", value: "40+" },
              { label: "Average Package", value: "4.2 LPA" },
              { label: "Internships Offered", value: "120+" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center px-4">
                  <div className="text-3xl font-bold text-[#111827]">{stat.value}</div>
                  <div className="text-xs text-[#6b7280] mt-1">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="bg-[#fafafa] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Opportunities</h3>
          <h2 className="text-3xl font-semibold text-[#111827] mb-8">Recent Placements & Offers</h2>
          
          <ScrollReveal delay={0.1}>
            <div className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden hidden md:block shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Company</th>
                    <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Department</th>
                    <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider">Package</th>
                    <th className="px-6 py-4 text-xs font-semibold text-[#6b7280] uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f3f4f6]">
                  {[
                    { company: "TCS", role: "Software Dev", dept: "BCA/CS", package: "4.5 LPA" },
                    { company: "Infosys", role: "Business Analyst", dept: "BBA", package: "4.0 LPA" },
                    { company: "UST Global", role: "Data Analyst", dept: "BSc AI/CS", package: "5.0 LPA" },
                    { company: "Aster Medcity", role: "Lab Tech", dept: "BSc Microbiology", package: "3.5 LPA" },
                    { company: "Manorama Online", role: "Content Writer", dept: "BA English", package: "3.0 LPA" },
                    { company: "Kerala IT Mission", role: "GIS Analyst", dept: "BSc Geography", package: "3.8 LPA" },
                  ].map((job, i) => (
                    <tr key={i} className="hover:bg-[#fafafa] transition">
                      <td className="px-6 py-4 text-sm font-medium text-[#111827]">{job.company}</td>
                      <td className="px-6 py-4 text-sm text-[#4b5563]">{job.role}</td>
                      <td className="px-6 py-4 text-sm text-[#4b5563]">{job.dept}</td>
                      <td className="px-6 py-4 text-sm text-[#111827] font-medium">{job.package}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-xs text-[#263866] font-medium hover:underline">Apply</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 md:hidden">
            {[
              { company: "TCS", role: "Software Dev", dept: "BCA/CS", package: "4.5 LPA" },
              { company: "Infosys", role: "Business Analyst", dept: "BBA", package: "4.0 LPA" },
              { company: "UST Global", role: "Data Analyst", dept: "BSc AI/CS", package: "5.0 LPA" },
            ].map((job, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white border border-[#e5e7eb] rounded-xl p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-[#111827]">{job.company}</h4>
                      <p className="text-sm text-[#4b5563]">{job.role}</p>
                    </div>
                    <span className="text-xs font-semibold bg-[#f3f4f6] px-2 py-1 rounded">{job.package}</span>
                  </div>
                  <div className="text-xs text-[#6b7280]">{job.dept}</div>
                  <button className="mt-2 text-xs text-[#263866] font-medium w-full text-center border border-[#e5e7eb] rounded py-2">Apply Now</button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Experience</h3>
          <h2 className="text-3xl font-semibold text-[#111827] mb-8">Internship Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border border-[#e5e7eb] rounded-xl p-6 bg-white hover:shadow-md transition h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#f3f4f6] flex items-center justify-center border border-[#e5e7eb]">
                      <Briefcase size={20} className="text-[#9ca3af]" />
                    </div>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Internship</span>
                  </div>
                  <h4 className="font-semibold text-[#111827] mb-1">Summer Tech Intern</h4>
                  <p className="text-sm text-[#4b5563] mb-4">Cyberpark Calicut</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-[10px] text-[#6b7280] border border-[#e5e7eb] px-2 py-1 rounded">2 Months</span>
                    <span className="text-[10px] text-[#6b7280] border border-[#e5e7eb] px-2 py-1 rounded">Stipend: ₹5000</span>
                  </div>
                  <button className="w-full mt-auto py-2 border border-[#e5e7eb] rounded-lg text-sm text-[#374151] hover:border-[#263866] hover:text-[#263866] transition">
                    View Details
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Registration */}
      <section className="bg-[#fafafa] border-t border-[#f3f4f6] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <ScrollReveal className="w-full lg:w-1/2">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Recruiters</h3>
                <h2 className="text-3xl font-semibold text-[#111827] mb-4">Partner With Us</h2>
                <p className="text-[#6b7280] mb-6">
                  Looking for fresh talent? Register your company to participate in our campus recruitment drives and hire our top graduates.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-[#4b5563]">
                  <li className="flex gap-2 items-start"><span className="text-[#263866]">✓</span> Pre-placement talks and presentations</li>
                  <li className="flex gap-2 items-start"><span className="text-[#263866]">✓</span> Dedicated interview rooms and testing facilities</li>
                  <li className="flex gap-2 items-start"><span className="text-[#263866]">✓</span> End-to-end recruitment support</li>
                </ul>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} className="w-full lg:w-1/2">
              <div className="bg-white border border-[#e5e7eb] rounded-xl p-8 shadow-sm">
                <h4 className="text-lg font-semibold text-[#111827] mb-6">Company Registration</h4>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#374151] mb-1.5 block">Company Name</label>
                      <input type="text" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#263866] focus:ring-1 focus:ring-[#263866] bg-white text-sm" placeholder="e.g. Acme Corp" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#374151] mb-1.5 block">Industry</label>
                      <input type="text" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#263866] focus:ring-1 focus:ring-[#263866] bg-white text-sm" placeholder="e.g. IT Services" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#374151] mb-1.5 block">HR Contact Name</label>
                    <input type="text" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#263866] focus:ring-1 focus:ring-[#263866] bg-white text-sm" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#374151] mb-1.5 block">Email Address</label>
                    <input type="email" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#263866] focus:ring-1 focus:ring-[#263866] bg-white text-sm" placeholder="hr@company.com" />
                  </div>
                  <button type="button" className="w-full bg-[#263866] text-white rounded-lg py-2.5 px-6 text-sm font-medium hover:bg-[#1e40af] transition mt-2">
                    Submit Request
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
