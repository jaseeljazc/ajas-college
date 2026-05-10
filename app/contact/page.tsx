"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin } from "lucide-react";

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactPage() {
  const contactDetails = [
    { icon: MapPin, title: "Our Address", lines: ["Al Jamia Arts & Science College", "Perinthalmanna, Malappuram,", "Kerala — 679325"] },
    { icon: Phone, title: "Phone", lines: ["+91 7994 188918", "04933 227318"] },
    { icon: Mail, title: "Email", lines: ["mail@ajascollege.ac.in", "admissions@ajascollege.ac.in"] },
  ];

  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        label="REACH OUT"
        heading="Get in Touch"
        subtext="Have questions? We are here to help. Contact our administrative office for any queries related to admissions, academics, or other services."
      />

      <section className="page-section" style={{ background: "var(--c-surface-raised)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: Details */}
            <ScrollReveal className="w-full">
              <p className="label mb-6">Contact Details</p>
              <h2 className="mb-10">Visit our Campus</h2>
              <div className="space-y-8">
                {contactDetails.map((detail, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="icon-box flex-shrink-0" style={{ width: "3rem", height: "3rem" }}>
                      <detail.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: "var(--c-text-primary)" }}>{detail.title}</h4>
                      {detail.lines.map((line, j) => (
                        <p key={j} className="text-sm leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8" style={{ borderTop: "1px solid var(--c-border)" }}>
                <h4 className="font-semibold mb-4" style={{ color: "var(--c-text-primary)" }}>Follow Us</h4>
                <div className="flex gap-3">
                  {[FacebookIcon, InstagramIcon, LinkedinIcon].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        width: "2.75rem",
                        height: "2.75rem",
                        border: "1px solid var(--c-border)",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--c-surface)",
                        color: "var(--c-text-secondary)",
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div
                className="mt-8 w-full h-56 flex flex-col items-center justify-center"
                style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}
              >
                <MapPin size={28} style={{ color: "var(--c-text-tertiary)", marginBottom: "0.5rem" }} />
                <p className="text-sm" style={{ color: "var(--c-text-tertiary)" }}>Google Maps Embed Placeholder</p>
                <p className="text-xs mt-1" style={{ color: "var(--c-text-tertiary)", opacity: 0.6 }}>AJAS Campus, Perinthalmanna</p>
              </div>
            </ScrollReveal>

            {/* Right: Form */}
            <ScrollReveal delay={0.2} className="w-full">
              <div className="p-10" style={{ background: "var(--c-surface)", border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)" }}>
                <p className="label mb-4">Message</p>
                <h2 className="mb-8">Send us a Message</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-primary)", fontFamily: "var(--font-mono)" }}>Full Name</label>
                      <input type="text" className="input-base" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-primary)", fontFamily: "var(--font-mono)" }}>Email Address</label>
                      <input type="email" className="input-base" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-primary)", fontFamily: "var(--font-mono)" }}>Phone Number</label>
                      <input type="text" className="input-base" placeholder="+91 00000 00000" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-primary)", fontFamily: "var(--font-mono)" }}>Subject</label>
                      <input type="text" className="input-base" placeholder="General Inquiry" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-primary)", fontFamily: "var(--font-mono)" }}>Your Message</label>
                    <textarea rows={6} className="input-base" placeholder="How can we help you?" />
                  </div>
                  <button type="button" className="btn-primary">Send Message</button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
