"use client";

import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

// Use custom social icons due to lucide-react brand removals
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
  return (
    <div className="flex flex-col">
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        label="REACH OUT"
        heading="Get in Touch"
        subtext="Have questions? We are here to help. Contact our administrative office for any queries related to admissions, academics, or other services."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Column: Details */}
              <ScrollReveal className="space-y-12 w-full">
                 <div>
                    <SectionHeader
                      label="CONTACT DETAILS"
                      heading="Visit our Campus"
                    />
                    <div className="space-y-8 mt-10">
                       <div className="flex gap-6">
                          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#263866] shrink-0 border border-blue-100/50">
                             <MapPin size={24} />
                          </div>
                          <div>
                             <h4 className="font-bold text-[#111827] mb-1">Our Address</h4>
                             <p className="text-sm text-[#6b7280] leading-relaxed">
                                Al Jamia Arts & Science College<br />
                                Perinthalmanna, Malappuram,<br />
                                Kerala — 679325
                             </p>
                          </div>
                       </div>
                       <div className="flex gap-6">
                          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#263866] shrink-0 border border-blue-100/50">
                             <Phone size={24} />
                          </div>
                          <div>
                             <h4 className="font-bold text-[#111827] mb-1">Phone</h4>
                             <p className="text-sm text-[#6b7280]">+91 7994 188918</p>
                             <p className="text-sm text-[#6b7280]">04933 227318</p>
                          </div>
                       </div>
                       <div className="flex gap-6">
                          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#263866] shrink-0 border border-blue-100/50">
                             <Mail size={24} />
                          </div>
                          <div>
                             <h4 className="font-bold text-[#111827] mb-1">Email</h4>
                             <p className="text-sm text-[#6b7280]">mail@ajascollege.ac.in</p>
                             <p className="text-sm text-[#6b7280]">admissions@ajascollege.ac.in</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Social Links */}
                 <div className="pt-8 border-t border-[#f3f4f6]">
                    <h4 className="font-semibold text-[#111827] mb-6">Follow Us</h4>
                    <div className="flex gap-4">
                       {[
                         { icon: FacebookIcon, href: "#" },
                         { icon: InstagramIcon, href: "#" },
                         { icon: LinkedinIcon, href: "#" },
                       ].map((social, i) => (
                         <a key={i} href={social.href} className="w-12 h-12 rounded-xl border border-[#e5e7eb] flex items-center justify-center text-[#4b5563] hover:border-[#263866] hover:text-[#263866] transition-all bg-white shadow-sm">
                            <social.icon size={20} />
                         </a>
                       ))}
                    </div>
                 </div>

                 {/* Google Maps Placeholder */}
                 <div className="w-full h-64 bg-[#f3f4f6] rounded-2xl border border-dashed border-[#d1d5db] flex flex-col items-center justify-center relative overflow-hidden group">
                    <MapPin size={32} className="text-[#9ca3af] mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-[#9ca3af] text-sm font-medium">Google Maps Embed Placeholder</p>
                    <p className="text-[10px] text-[#d1d5db] mt-1">AJAS Campus, Perinthalmanna</p>
                 </div>
              </ScrollReveal>

              {/* Right Column: Form */}
              <ScrollReveal delay={0.2} className="w-full">
                <div className="bg-[#fafafa] border border-[#e5e7eb] rounded-3xl p-10 shadow-lg">
                   <SectionHeader
                     label="MESSAGE"
                     heading="Send us a Message"
                   />
                   <form className="space-y-5 mt-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                         <div>
                            <label className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-2 block">Full Name</label>
                            <input type="text" className="w-full border border-[#e5e7eb] rounded-xl px-5 py-3 text-sm focus:border-[#263866] outline-none bg-white" placeholder="John Doe" />
                         </div>
                         <div>
                            <label className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-2 block">Email Address</label>
                            <input type="email" className="w-full border border-[#e5e7eb] rounded-xl px-5 py-3 text-sm focus:border-[#263866] outline-none bg-white" placeholder="john@example.com" />
                         </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                         <div>
                            <label className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-2 block">Phone Number</label>
                            <input type="text" className="w-full border border-[#e5e7eb] rounded-xl px-5 py-3 text-sm focus:border-[#263866] outline-none bg-white" placeholder="+91 00000 00000" />
                         </div>
                         <div>
                            <label className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-2 block">Subject</label>
                            <input type="text" className="w-full border border-[#e5e7eb] rounded-xl px-5 py-3 text-sm focus:border-[#263866] outline-none bg-white" placeholder="General Inquiry" />
                         </div>
                      </div>
                      <div>
                         <label className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-2 block">Your Message</label>
                         <textarea rows={6} className="w-full border border-[#e5e7eb] rounded-xl px-5 py-3 text-sm focus:border-[#263866] outline-none bg-white" placeholder="How can we help you?"></textarea>
                      </div>
                      <button type="button" className="w-full bg-[#263866] text-white py-4 rounded-xl font-bold text-sm hover:bg-[#1e40af] transition-all shadow-lg shadow-blue-100">
                         Send Message
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
