"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Academic", "Cultural", "Sports", "Extension"];

  const events = [
    { title: "Convocation 2026", date: "May 2, 2026", category: "Academic", description: "Celebrating the academic achievements of our graduating batch of 2026.", imageLabel: "Convocation Photo", imagePath: "/images/graduation_kerala.png" },
    { title: "World Earth Day", date: "Apr 22, 2026", category: "Extension", description: "A day dedicated to environmental awareness and sustainable initiatives.", imageLabel: "Earth Day Celebration", imagePath: "/images/activities.png" },
    { title: "Graduation Ceremony 2026", date: "Apr 8, 2026", category: "Academic", description: "Honouring the hard work and success of our final year students.", imageLabel: "Graduation Event", imagePath: "/images/graduation_kerala.png" },
    { title: "BIOCODEZ", date: "Feb 3, 2026", category: "Academic", description: "Inter-departmental life science fest featuring innovative biological projects.", imageLabel: "Bio Fest", imagePath: "/images/science_lab.png" },
    { title: "Gustoza Food Fest", date: "Feb 3, 2026", category: "Cultural", description: "A culinary celebration showcasing diverse food cultures by our students.", imageLabel: "Food Fest", imagePath: "/images/activities.png" },
    { title: "Spot the Fake", date: "Jan 15, 2026", category: "Extension", description: "Awareness programme on identifying misinformation and fake news.", imageLabel: "Seminar Hall", imagePath: "/images/seminar_new.png" },
    { title: "Weedless Wednesday", date: "Jan 10, 2026", category: "Extension", description: "NSS initiative for a tobacco-free and healthy campus environment.", imageLabel: "NSS Unit", imagePath: "/images/activities.png" },
    { title: "Annual Sports Meet", date: "Dec 20, 2025", category: "Sports", description: "Competitive athletics and team sports events for all students.", imageLabel: "College Ground", imagePath: "/images/activities.png" },
  ];

  const filteredEvents = activeFilter === "All" ? events : events.filter(e => e.category === activeFilter);

  return (
    <div className="flex flex-col">
      <PageHero
        breadcrumbs={[{ label: "Events" }]}
        label="CAMPUS BUZZ"
        heading="Events & Activities"
        subtext="Explore the vibrant happenings at AJAS College, from academic symposiums to cultural extravaganzas."
      />

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b border-[#f3f4f6] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-4 pb-2 custom-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-2 text-xs font-bold rounded-full border transition-all ${
                  activeFilter === filter
                    ? "bg-[#263866] text-white border-[#263866] shadow-lg shadow-blue-100"
                    : "bg-white text-[#6b7280] border-[#e5e7eb] hover:border-[#263866] hover:text-[#263866]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, i) => (
                <EventCard key={i} {...event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-white border border-[#e5e7eb] rounded-3xl">
               <p className="text-[#9ca3af] font-medium">No events found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="ARCHIVE"
            heading="Past Events"
            subtext="Glimpses of successful events from the previous academic cycles."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.slice(0, 4).map((event, i) => (
              <EventCard key={i} {...event} muted={true} />
            ))}
          </div>
          <div className="mt-16 text-center">
             <button className="text-sm font-semibold text-[#6b7280] border border-[#e5e7eb] px-8 py-3 rounded-full hover:border-[#263866] hover:text-[#263866] transition">
                Load More Past Events
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
