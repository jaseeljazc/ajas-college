"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CAMPUS_IMAGES = [
  { src: "/images/seminar_new.png", alt: "Seminar Hall", span: "md:col-span-8" },
  { src: "/images/science_lab.png", alt: "Science Lab",  span: "md:col-span-4" },
  { src: "/images/library.png",     alt: "Library",      span: "md:col-span-4" },
  { src: "/images/hero.png",        alt: "Campus View",  span: "md:col-span-8" },
];

// Large enough to show a dramatic parallax effect, without breaking bounds
const PARALLAX_STRENGTH = 150;

export default function CampusParallaxGallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Use GSAP context for proper cleanup in React 18 strict mode
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLDivElement>(".g2-card", track);

      cards.forEach((card) => {
        const wrapper = card.querySelector<HTMLDivElement>(".g2-card-image-wrapper");
        if (!wrapper) return;

        // GSAP ScrollTrigger handles the scroll math
        gsap.fromTo(
          wrapper,
          {
            y: -PARALLAX_STRENGTH / 2, // Start shifted up
            force3D: true, // Force GPU layer
          },
          {
            y: PARALLAX_STRENGTH / 2, // End shifted down
            ease: "none", // Linear movement locked to scroll
            force3D: true, // Force GPU layer
            scrollTrigger: {
              trigger: card,
              start: "top bottom", // When card's top hits viewport's bottom
              end: "bottom top", // When card's bottom hits viewport's top
              scrub: true, // 'true' provides instant response, removing the 'floaty/laggy' feel of '1'
            },
          }
        );
      });
    }, track);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="gallery"
      className="py-12 md:py-16 lg:py-20 relative overflow-hidden"
      style={{ background: "var(--c-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <ScrollReveal className="lg:col-span-8">
            <p className="label mb-6">Campus Life</p>
            <h2>A glimpse of our campus</h2>
          </ScrollReveal>
          <div className="lg:col-span-4 flex items-end justify-end">
            <p
              className="text-sm"
              style={{ color: "var(--c-text-secondary)", maxWidth: "280px" }}
            >
              Explore our modern infrastructure designed to foster innovation
              and character.
            </p>
          </div>
        </div>

        {/* Parallax Grid */}
        <div ref={trackRef} className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {CAMPUS_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`${img.span} h-[350px] md:h-[450px] relative overflow-hidden group g2-card`}
              style={{
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--c-border)",
                contain: "layout style",
                // Crucial for performance: Forces the masked parent onto its own GPU layer,
                // preventing the browser from recalculating the mask every frame
                transform: "translateZ(0)", 
                WebkitMaskImage: "-webkit-radial-gradient(white, black)", // Safari border-radius bug fix
              }}
            >
              {/* Parallax wrapper — Oversized to allow vertical movement */}
              <div
                className="g2-card-image-wrapper absolute inset-0 w-full"
                style={{
                  top: `-${PARALLAX_STRENGTH / 2}px`,
                  bottom: `-${PARALLAX_STRENGTH / 2}px`,
                  willChange: "transform",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  // Removed 'grayscale' filter — animating filters during transforms kills scroll performance
                  className="w-full h-full object-cover transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                  fetchPriority={i < 2 ? "high" : "low"}
                />
              </div>

              {/* Gradient overlay - now handles all hover interactions purely via opacity */}
              <div
                className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,17,32,0.95) 0%, rgba(11,17,32,0.4) 50%, transparent 100%)",
                }}
              />

              {/* Caption */}
              <div className="absolute bottom-6 left-6 z-10 transition-all duration-500 text-white">
                <p className="text-[10px] uppercase tracking-widest mb-1 font-mono text-white/70">
                  Infrastructure
                </p>
                <h3 className="text-white text-xl" style={{ color: 'white' }}>{img.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}