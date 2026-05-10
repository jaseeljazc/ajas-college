"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, Tag, ArrowRight } from "lucide-react";

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Academic", "Cultural", "Sports", "Extension"];

  const events = [
    { title: "Convocation 2026", date: "May 2, 2026", category: "Academic", description: "Celebrating the academic achievements of our graduating batch of 2026.", imagePath: "/images/graduation_kerala.png" },
    { title: "World Earth Day", date: "Apr 22, 2026", category: "Extension", description: "A day dedicated to environmental awareness and sustainable initiatives.", imagePath: "/images/activities.png" },
    { title: "Graduation Ceremony 2026", date: "Apr 8, 2026", category: "Academic", description: "Honouring the hard work and success of our final year students.", imagePath: "/images/graduation_kerala.png" },
    { title: "BIOCODEZ", date: "Feb 3, 2026", category: "Academic", description: "Inter-departmental life science fest featuring innovative biological projects.", imagePath: "/images/science_lab.png" },
    { title: "Gustoza Food Fest", date: "Feb 3, 2026", category: "Cultural", description: "A culinary celebration showcasing diverse food cultures by our students.", imagePath: "/images/activities.png" },
    { title: "Spot the Fake", date: "Jan 15, 2026", category: "Extension", description: "Awareness programme on identifying misinformation and fake news.", imagePath: "/images/seminar_new.png" },
    { title: "Weedless Wednesday", date: "Jan 10, 2026", category: "Extension", description: "NSS initiative for a tobacco-free and healthy campus environment.", imagePath: "/images/activities.png" },
    { title: "Annual Sports Meet", date: "Dec 20, 2025", category: "Sports", description: "Competitive athletics and team sports events for all students.", imagePath: "/images/activities.png" },
  ];

  const filteredEvents = activeFilter === "All" ? events : events.filter(e => e.category === activeFilter);

  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "Events" }]}
        label="CAMPUS BUZZ"
        heading="Events & Activities"
        subtext="Explore the vibrant happenings at AJAS College, from academic symposiums to cultural extravaganzas."
      />

      {/* Filter Tabs */}
      <div
        className="sticky top-20 z-40 py-6"
        style={{
          background: "var(--c-surface-raised)",
          borderBottom: "1px solid var(--c-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex overflow-x-auto gap-2 no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-200 whitespace-nowrap flex-shrink-0"
                style={{
                  fontFamily: "var(--font-mono)",
                  background: activeFilter === filter ? "var(--c-primary)" : "transparent",
                  color: activeFilter === filter ? "#fff" : "var(--c-text-secondary)",
                  border: `1px solid ${activeFilter === filter ? "var(--c-primary)" : "var(--c-border)"}`,
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <section className="page-section" style={{ background: "var(--c-surface)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div
                    className="group flex flex-col overflow-hidden h-full transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "var(--c-surface-raised)",
                      border: "1px solid var(--c-border)",
                      borderRadius: "var(--radius-lg)",
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.imagePath}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(11,17,32,0.5) 0%, transparent 60%)" }}
                      />
                      <span className="status-badge absolute top-4 left-4">{event.category}</span>
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <div
                        className="flex items-center gap-2 mb-3"
                        style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)", fontSize: "11px" }}
                      >
                        <Calendar size={12} />
                        {event.date}
                      </div>
                      <h4
                        className="mb-3 leading-snug"
                        style={{ color: "var(--c-text-primary)", fontFamily: "var(--font-display)", fontSize: "1.2rem" }}
                      >
                        {event.title}
                      </h4>
                      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--c-text-secondary)" }}>
                        {event.description}
                      </p>
                      <div
                        className="flex items-center gap-2 mt-6 pt-4 text-xs font-semibold group-hover:gap-3 transition-all duration-200"
                        style={{ borderTop: "1px solid var(--c-border)", color: "var(--c-primary)" }}
                      >
                        Read more <ArrowRight size={13} />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div
              className="text-center py-20"
              style={{
                background: "var(--c-surface-raised)",
                border: "1px solid var(--c-border)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <p style={{ color: "var(--c-text-tertiary)" }}>No events found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section
        className="page-section"
        style={{ background: "var(--c-surface-raised)", borderTop: "1px solid var(--c-border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <div className="mb-12">
              <p className="label mb-4">Archive</p>
              <h2>Past Events</h2>
              <p className="mt-4" style={{ color: "var(--c-text-secondary)", maxWidth: "480px" }}>
                Glimpses of successful events from the previous academic cycles.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.slice(0, 4).map((event, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div
                  className="group overflow-hidden"
                  style={{
                    background: "var(--c-surface)",
                    border: "1px solid var(--c-border)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={event.imagePath}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p
                      className="text-xs mb-1"
                      style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}
                    >
                      {event.date}
                    </p>
                    <p className="text-sm font-medium" style={{ color: "var(--c-text-primary)" }}>
                      {event.title}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
