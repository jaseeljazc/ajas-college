"use client";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import NewsCard from "@/components/NewsCard";
import { Search, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
  const newsItems = [
    { title: "AJAS Students Shine in Calicut University Inter-College Arts Fest", date: "Apr 25, 2026", category: "Achievements", excerpt: "Our students secured multiple positions in various events at the recently concluded university arts festival.", imageLabel: "Arts Fest Winners", imagePath: "/images/activities.png" },
    { title: "Department of AI organizes Workshop on Generative Modeling", date: "Apr 18, 2026", category: "Academic", excerpt: "A three-day hands-on workshop focused on the latest trends in Generative AI and Large Language Models.", imageLabel: "AI Workshop", imagePath: "/images/lab.png" },
    { title: "New Academic Block Construction Reaches Final Phase", date: "Apr 12, 2026", category: "Campus", excerpt: "The Phase II expansion project is on track for inauguration in the coming academic year.", imageLabel: "Construction Site", imagePath: "/images/building_evening.png" },
    { title: "World Earth Day: AJAS Campus Goes Plastic-Free", date: "Apr 22, 2026", category: "Extension", excerpt: "College administration announces new guidelines to minimize plastic usage on campus.", imageLabel: "Green Campus", imagePath: "/images/hero.png" },
    { title: "Placement Cell records 85% success in Phase 1 Recruitment", date: "Apr 5, 2026", category: "Placement", excerpt: "Over 200 students received offers from leading multinational companies during the initial drive.", imageLabel: "Recruitment Day", imagePath: "/images/seminar_new.png" },
    { title: "LAUREATUS 2026: Honouring Academic Achievers", date: "Apr 6, 2026", category: "Academic", excerpt: "The college honoured toppers from various departments in a grand ceremony attended by industry experts.", imageLabel: "Laureatus Event", imagePath: "/images/graduation_kerala.png" }
  ];

  return (
    <div className="flex flex-col">
      <PageHero
        breadcrumbs={[{ label: "News" }]}
        label="LATEST UPDATES"
        heading="Campus News"
        subtext="Stay informed with the latest news, announcements, and success stories from Al Jamia Arts & Science College."
      />

      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Main Feed */}
            <div className="w-full lg:w-2/3">
               <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="relative w-full md:w-96">
                     <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                     <input type="text" placeholder="Search news articles..." className="w-full border border-[#e5e7eb] rounded-full pl-11 pr-6 py-3 text-sm focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none bg-white" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#6b7280]">
                     <span>Sort by:</span>
                     <select className="bg-transparent border-none focus:ring-0 text-[#111827] cursor-pointer">
                        <option>Most Recent</option>
                        <option>Oldest</option>
                     </select>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {newsItems.map((news, i) => (
                    <NewsCard key={i} {...news} />
                  ))}
               </div>

               {/* Pagination UI */}
               <div className="mt-16 flex justify-center items-center gap-2">
                  <button className="w-10 h-10 rounded-lg border border-[#e5e7eb] flex items-center justify-center text-[#9ca3af] hover:border-[#263866] hover:text-[#263866] transition" disabled>
                     ←
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-[#263866] text-white flex items-center justify-center font-bold">1</button>
                  <button className="w-10 h-10 rounded-lg border border-[#e5e7eb] flex items-center justify-center font-semibold text-[#6b7280] hover:border-[#263866] hover:text-[#263866] transition">2</button>
                  <button className="w-10 h-10 rounded-lg border border-[#e5e7eb] flex items-center justify-center font-semibold text-[#6b7280] hover:border-[#263866] hover:text-[#263866] transition">3</button>
                  <span className="text-[#9ca3af] mx-2">...</span>
                  <button className="w-10 h-10 rounded-lg border border-[#e5e7eb] flex items-center justify-center text-[#6b7280] hover:border-[#263866] hover:text-[#263866] transition">
                     →
                  </button>
               </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-1/3 flex flex-col gap-6 lg:gap-12">
               {/* Categories */}
               <div className="bg-white border border-[#e5e7eb] rounded-3xl p-8">
                  <h4 className="font-semibold text-[#111827] mb-6">Categories</h4>
                  <ul className="space-y-4">
                     {[
                       { name: "Academic", count: 24 },
                       { name: "Achievements", count: 18 },
                       { name: "Campus Life", count: 32 },
                       { name: "Extension", count: 12 },
                       { name: "Placement", count: 15 },
                       { name: "Notifications", count: 10 }
                     ].map((cat, i) => (
                       <li key={i}>
                          <Link href="#" className="flex justify-between items-center text-sm text-[#4b5563] hover:text-[#263866] group transition">
                             <span className="group-hover:translate-x-1 transition-transform">{cat.name}</span>
                             <span className="text-[10px] font-bold text-[#9ca3af] bg-[#fafafa] px-2 py-0.5 rounded-full">{cat.count}</span>
                          </Link>
                       </li>
                     ))}
                  </ul>
               </div>

               {/* Recent News Widget */}
               <div className="bg-white border border-[#e5e7eb] rounded-3xl p-8">
                  <h4 className="font-semibold text-[#111827] mb-6">Recent News</h4>
                  <div className="space-y-6">
                     {newsItems.slice(0, 3).map((item, i) => (
                       <Link key={i} href="#" className="flex gap-4 group">
                          <div className="w-16 h-16 rounded-xl bg-[#f3f4f6] shrink-0 border border-[#e5e7eb] flex items-center justify-center">
                             <span className="text-[8px] text-[#9ca3af]">Photo</span>
                          </div>
                          <div>
                             <h5 className="text-xs font-semibold text-[#111827] group-hover:text-[#263866] transition-colors leading-tight line-clamp-2">{item.title}</h5>
                             <span className="text-[10px] text-[#9ca3af] mt-2 block">{item.date}</span>
                          </div>
                       </Link>
                     ))}
                  </div>
               </div>

               {/* Download Widget */}
               <div className="bg-[#111827] rounded-3xl p-8 text-white">
                  <h4 className="font-semibold mb-4">Official Magazine</h4>
                  <p className="text-xs text-white/60 leading-relaxed mb-6">Download our latest monthly campus magazine 'AJAS Pulse'.</p>
                  <button className="w-full bg-[#263866] text-white py-3 rounded-xl text-xs font-bold hover:bg-[#1e40af] transition">
                     Download Pulse (April 2026)
                  </button>
               </div>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}
