"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { User as UserIcon } from "lucide-react";

export default function PtaPage() {
  const members = [
    { role: "President", name: "Mr. Abdul Kareem" },
    { role: "Secretary", name: "Dr. Aisha Rahman" },
    { role: "Treasurer", name: "Prof. Mohammed Ali" },
  ];

  const upcomingMeetings = [
    { title: "Annual General Body Meeting", venue: "Main Auditorium", date: "June 10, 2026", time: "10:00 AM" },
    { title: "Executive Committee", venue: "Conference Room", date: "May 25, 2026", time: "02:00 PM" },
  ];

  const pastMeetings = [
    { title: "First Year Orientation PTA", date: "Aug 2025" },
    { title: "Mid-term Review Meeting", date: "Nov 2025" },
    { title: "Pre-Exam Counselling", date: "Feb 2026" },
  ];

  const announcements = [
    "Fund allocation for the new smart classroom approved.",
    "PTA Meritorious Student Award 2026 applications open.",
    "Requesting parents to update their contact details in the portal.",
    "Volunteers required for the upcoming Cultural Fest.",
    "New transportation guidelines finalized by the committee.",
  ];

  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "PTA" }]}
        label="PARENT TEACHER ASSOCIATION"
        heading="Collaborative Growth"
        subtext="Fostering a strong partnership between parents and teachers for the holistic development of our students."
      />

      {/* Committee */}
      <section className="page-section" style={{ background: "var(--c-surface-raised)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <ScrollReveal>
            <p className="label mb-4">Leadership</p>
            <h2 className="mb-12">PTA Committee</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {members.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className="flex flex-col items-center text-center p-8 overflow-hidden"
                  style={{
                    border: "1px solid var(--c-border)",
                    borderTop: `4px solid var(--c-primary)`,
                    borderRadius: "var(--radius-lg)",
                    background: "var(--c-surface)",
                  }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                    style={{ background: "var(--c-surface-raised)", border: "1px solid var(--c-border)" }}
                  >
                    <UserIcon size={24} style={{ color: "var(--c-text-tertiary)" }} />
                  </div>
                  <h4 className="mb-1" style={{ color: "var(--c-text-primary)" }}>{member.name}</h4>
                  <p className="text-sm font-medium" style={{ color: "var(--c-primary)" }}>{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meetings & Announcements */}
      <section className="page-section" style={{ background: "var(--c-surface)", borderTop: "1px solid var(--c-border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            <ScrollReveal>
              <p className="label mb-4">Schedule</p>
              <h2 className="mb-8">PTA Meetings</h2>
              <div className="mb-8">
                <h4 className="font-semibold mb-4" style={{ color: "var(--c-text-primary)" }}>Upcoming Meetings</h4>
                <div className="space-y-3">
                  {upcomingMeetings.map((m, i) => (
                    <div key={i} className="flex justify-between items-center p-5" style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)", background: "var(--c-surface-raised)" }}>
                      <div>
                        <h5 className="font-semibold text-sm" style={{ color: "var(--c-text-primary)" }}>{m.title}</h5>
                        <p className="text-xs mt-1" style={{ color: "var(--c-text-tertiary)" }}>{m.venue}</p>
                      </div>
                      <div className="text-right">
                        <span className="block text-sm font-bold" style={{ color: "var(--c-primary)" }}>{m.date}</span>
                        <span className="text-xs" style={{ color: "var(--c-text-tertiary)" }}>{m.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4" style={{ color: "var(--c-text-primary)" }}>Past Archives</h4>
                <div className="overflow-hidden" style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius-md)" }}>
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr style={{ background: "var(--c-surface)", borderBottom: "1px solid var(--c-border)" }}>
                        <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)", color: "var(--c-text-tertiary)" }}>Meeting Type</th>
                        <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)", color: "var(--c-text-tertiary)" }}>Date</th>
                      </tr>
                    </thead>
                    <tbody style={{ background: "var(--c-surface-raised)" }}>
                      {pastMeetings.map((m, i) => (
                        <tr key={i} style={{ borderBottom: i < pastMeetings.length - 1 ? "1px solid var(--c-border)" : "none" }}>
                          <td className="px-5 py-3" style={{ color: "var(--c-text-primary)" }}>{m.title}</td>
                          <td className="px-5 py-3" style={{ color: "var(--c-text-secondary)" }}>{m.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="label mb-4">Updates</p>
              <h2 className="mb-8">Announcements</h2>
              <div className="flex flex-col gap-3 mb-10">
                {announcements.map((text, i) => (
                  <div key={i} className="pl-5 py-4 pr-5" style={{ borderLeft: `3px solid var(--c-primary)`, background: "var(--c-surface-raised)", border: "1px solid var(--c-border)", borderRadius: "0 var(--radius-sm) var(--radius-sm) 0" }}>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-primary)" }}>{text}</p>
                  </div>
                ))}
              </div>
              <div className="p-6 card-base">
                <h4 className="font-semibold mb-4" style={{ color: "var(--c-text-primary)" }}>Parent Feedback Form</h4>
                <form className="space-y-3">
                  <input type="text" placeholder="Parent Name" className="input-base" />
                  <input type="text" placeholder="Student Name & Batch" className="input-base" />
                  <textarea rows={3} placeholder="Your Feedback/Suggestion" className="input-base" />
                  <button type="button" className="btn-primary">Submit Feedback</button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
