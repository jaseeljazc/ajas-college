"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const [isCenterHovered, setIsCenterHovered] = useState(false);
  const mapRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!mapRef.current) return;
    
    const rect = mapRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );
    
    setIsCenterHovered(distance < 30); // Using 30px for slightly better UX while staying close to user's 20px request
  };

  return (
    <footer className="bg-[var(--c-ink)] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#fdfbf9] flex flex-col items-center justify-center border border-white/20">
                <img
                  src="/images/logo.jpg"
                  alt="Al Jamia Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="font-semibold text-lg text-white">
                AJAS College
              </span>
            </div>
            <div className="text-sm text-white/60 space-y-2 mb-6">
              <p>Perinthalmanna, Malappuram,</p>
              <p>Kerala — 679325</p>
              <p>+91 7994 188918</p>
              <p>mail@ajascollege.ac.in</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-white/50 hover:text-white transition">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition">
                <YoutubeIcon size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-white transition">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions"
                  className="text-sm text-blue-200 font-bold hover:underline transition"
                >
                  Admission 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/infrastructure"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/student-life"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Student Life
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Events & News
                </Link>
              </li>
              <li>
                <Link
                  href="/library"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/placement"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Placement Cell
                </Link>
              </li>
              <li>
                <Link
                  href="/alumni"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Alumni
                </Link>
              </li>
              <li>
                <Link
                  href="/iqac"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  IQAC
                </Link>
              </li>
              <li>
                <Link
                  href="/incubation"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Incubation
                </Link>
              </li>
              <li>
                <Link
                  href="/pta"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  PTA
                </Link>
              </li>
              <li>
                <Link
                  href="/consultancy"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Consultancy
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  Calicut University
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  UGC
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  NAAC
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-white transition"
                >
                  DCE Kerala
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map Section - Full Width */}
      <div 
        ref={mapRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsCenterHovered(false)}
        className="w-full block relative group overflow-hidden"
      >
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, var(--c-ink) 0%, transparent 20%, transparent 80%, var(--c-ink) 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background: `
              linear-gradient(to bottom, var(--c-ink) 0%, transparent 20%, transparent 80%, var(--c-ink) 100%),
              linear-gradient(to right, var(--c-ink) 0%, transparent 20%, transparent 80%, var(--c-ink) 100%)
            `,
          }}
        />
        
        {/* Hover Label - Only this is clickable */}
        <a 
          href="https://maps.app.goo.gl/UEcw1APCYXJzqsNj8" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-500 bg-black/10 ${
            isCenterHovered ? "opacity-100 pointer-events-auto cursor-pointer" : "opacity-0 pointer-events-none"
          }`}
        >
          <div 
            className={`px-6 py-3 bg-[var(--c-primary)] text-white text-sm font-semibold rounded-full shadow-2xl flex items-center gap-2 transform transition-all duration-500 ${
              isCenterHovered ? "translate-y-0 scale-100" : "translate-y-4 scale-90"
            }`}
          >
            <span>View on Google Maps</span>
            <ArrowRight size={16} />
          </div>
        </a>

        <img
          src="/images/map2.png"
          alt="Campus Map"
          className={`w-full h-[400px] md:h-[700px] object-cover opacity-90 transition-all duration-1000 ${
            isCenterHovered ? "scale-105 opacity-100" : "scale-100"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-white/10 pt-8 mt-0 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 Al Jamia Arts & Science College. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
