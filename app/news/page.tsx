"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { Search, Calendar } from "lucide-react";

export default function NewsPage() {
  const newsItems = [
    { title: "AJAS Students Shine in Calicut University Inter-College Arts Fest", date: "Apr 25, 2026", category: "Achievements", excerpt: "Our students secured multiple positions in various events at the recently concluded university arts festival.", imagePath: "/images/activities.png" },
    { title: "Department of AI organizes Workshop on Generative Modeling", date: "Apr 18, 2026", category: "Academic", excerpt: "A three-day hands-on workshop focused on the latest trends in Generative AI and Large Language Models.", imagePath: "/images/lab.png" },
    { title: "New Academic Block Construction Reaches Final Phase", date: "Apr 12, 2026", category: "Campus", excerpt: "The Phase II expansion project is on track for inauguration in the coming academic year.", imagePath: "/images/building_evening.png" },
    { title: "World Earth Day: AJAS Campus Goes Plastic-Free", date: "Apr 22, 2026", category: "Extension", excerpt: "College administration announces new guidelines to minimize plastic usage on campus.", imagePath: "/images/hero.png" },
    { title: "Placement Cell records 85% success in Phase 1 Recruitment", date: "Apr 5, 2026", category: "Placement", excerpt: "Over 200 students received offers from leading multinational companies during the initial drive.", imagePath: "/images/seminar_new.png" },
    { title: "LAUREATUS 2026: Honouring Academic Achievers", date: "Apr 6, 2026", category: "Academic", excerpt: "The college honoured toppers from various departments in a grand ceremony attended by industry experts.", imagePath: "/images/graduation_kerala.png" },
  ];

  const categories = [
    { name: "Academic", count: 24 }, { name: "Achievements", count: 18 },
    { name: "Campus Life", count: 32 }, { name: "Extension", count: 12 },
    { name: "Placement", count: 15 }, { name: "Notifications", count: 10 },
  ];

  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "News" }]}
        label="LATEST UPDATES"
        heading="Campus News"
        subtext="Stay informed with the latest news, announcements, and success stories from Al Jamia Arts & Science College."
      />

      <section className="page-section" style={{ background: "var(--c-surface)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Main Feed */}
            <div className="w-full lg:w-2/3">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
                <div className="relative w-full sm:w-80">
                  <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "var(--c-text-tertiary)" }} />
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    className="input-base pl-10"
                    style={{ borderRadius: "99px" }}
                  />
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>
                  <span>Sort by:</span>
                  <select className="bg-transparent border-none outline-none" style={{ color: "var(--c-text-primary)" }}>
                    <option>Most Recent</option>
                    <option>Oldest</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsItems.map((news, i) => (
                  <ScrollReveal key={i} delay={i * 0.05}>
                    <div
                      className="group flex flex-col overflow-hidden h-full transition-all duration-300 hover:-translate-y-1"
                      style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img src={news.imagePath} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <span className="status-badge absolute top-4 left-4">{news.category}</span>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3 text-xs" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>
                          <Calendar size={11} />{news.date}
                        </div>
                        <h4 className="mb-3 leading-snug flex-1" style={{ color: "var(--c-text-primary)", fontFamily: "var(--font-display)", fontSize: "1.1rem" }}>{news.title}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>{news.excerpt}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-16 flex justify-center items-center gap-2">
                {["←", "1", "2", "3", "→"].map((p, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 flex items-center justify-center text-sm font-semibold transition-all duration-200"
                    style={{
                      border: "1px solid var(--c-border)",
                      borderRadius: "var(--radius-sm)",
                      background: p === "1" ? "var(--c-primary)" : "var(--c-surface-raised)",
                      color: p === "1" ? "#fff" : "var(--c-text-secondary)",
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-1/3 flex flex-col gap-8">
              <div className="p-8 card-base">
                <h4 className="font-semibold mb-6" style={{ color: "var(--c-text-primary)" }}>Categories</h4>
                <ul className="space-y-3">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <Link href="#" className="flex justify-between items-center text-sm transition-colors duration-200" style={{ color: "var(--c-text-secondary)" }}>
                        <span>{cat.name}</span>
                        <span className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ background: "var(--c-surface)", color: "var(--c-text-tertiary)", border: "1px solid var(--c-border)" }}>{cat.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 card-base">
                <h4 className="font-semibold mb-6" style={{ color: "var(--c-text-primary)" }}>Recent News</h4>
                <div className="space-y-5">
                  {newsItems.slice(0, 3).map((item, i) => (
                    <Link key={i} href="#" className="flex gap-4 group">
                      <div
                        className="w-16 h-16 flex-shrink-0 overflow-hidden"
                        style={{ borderRadius: "var(--radius-sm)", border: "1px solid var(--c-border)" }}
                      >
                        <img src={item.imagePath} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold leading-tight line-clamp-2 mb-1" style={{ color: "var(--c-text-primary)" }}>{item.title}</h5>
                        <span className="text-[10px]" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>{item.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-8" style={{ background: "var(--color-ink-gradient)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)" }}>
                <h4 className="font-semibold mb-3" style={{ color: "#ffffff" }}>Official Magazine</h4>
                <p className="text-xs mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>Download our latest monthly campus magazine 'AJAS Pulse'.</p>
                <button className="btn-outline w-full" style={{ color: "var(--c-accent)", borderColor: "var(--c-accent)" }}>Download Pulse (April 2026)</button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
