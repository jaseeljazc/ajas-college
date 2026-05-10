"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Star, CheckCircle2 } from "lucide-react";

export default function FeedbackPage() {
  const [activeTab, setActiveTab] = useState("Student");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tabs = ["Student", "Faculty", "Parent", "Alumni", "Employer"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => { setIsSubmitted(false); setRating(0); }, 4000);
  };

  return (
    <div className="flex flex-col" style={{ background: "var(--c-surface)" }}>
      <PageHero
        breadcrumbs={[{ label: "Feedback" }]}
        label="INSTITUTIONAL EVALUATION"
        heading="Feedback System"
        subtext="Your input is vital. Help us improve our academic delivery, infrastructure, and overall campus experience."
      />

      <section className="page-section" style={{ background: "var(--c-surface-raised)" }}>
        <div className="max-w-4xl mx-auto px-6 md:px-16">

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Overall Rating", value: "4.8/5" },
              { label: "Responses", value: "5000+" },
              { label: "Resolution Rate", value: "95%" },
              { label: "Latest Cycle", value: "2025-26" },
            ].map((stat, i) => (
              <div key={i} className="p-5 text-center card-base">
                <div className="text-2xl font-light mb-1" style={{ color: "var(--c-primary)", fontFamily: "var(--font-display)" }}>{stat.value}</div>
                <div className="text-xs" style={{ color: "var(--c-text-tertiary)", fontFamily: "var(--font-mono)" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden" style={{ border: "1px solid var(--c-border)", borderRadius: "var(--radius-lg)", background: "var(--c-surface)" }}>
            {/* Tabs */}
            <div className="flex overflow-x-auto no-scrollbar" style={{ borderBottom: "1px solid var(--c-border)" }}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    borderBottom: activeTab === tab ? `2px solid var(--c-primary)` : "2px solid transparent",
                    color: activeTab === tab ? "var(--c-primary)" : "var(--c-text-secondary)",
                    marginBottom: "-1px",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Form */}
            <div className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: "color-mix(in srgb, #22c55e 10%, transparent)" }}>
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="mb-2" style={{ color: "var(--c-text-primary)" }}>Thank You!</h3>
                  <p style={{ color: "var(--c-text-secondary)" }}>Your feedback has been successfully submitted and will be reviewed by the IQAC committee.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "var(--c-text-primary)" }}>{activeTab} Feedback</h3>
                    <p className="text-sm" style={{ color: "var(--c-text-secondary)" }}>Please rate your overall experience and provide constructive comments.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Full Name</label>
                      <input required type="text" className="input-base" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Email Address</label>
                      <input required type="email" className="input-base" />
                    </div>
                  </div>

                  {activeTab === "Student" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Department/Programme</label>
                        <input required type="text" className="input-base" />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Semester/Year</label>
                        <input required type="text" className="input-base" />
                      </div>
                    </div>
                  )}

                  {activeTab === "Employer" && (
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Company Name</label>
                      <input required type="text" className="input-base" />
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider mb-3 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Overall Satisfaction Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(star)}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star
                            size={28}
                            fill={star <= (hoverRating || rating) ? "var(--c-accent)" : "none"}
                            color={star <= (hoverRating || rating) ? "var(--c-accent)" : "var(--c-border)"}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider mb-2 block" style={{ color: "var(--c-text-secondary)", fontFamily: "var(--font-mono)" }}>Detailed Comments/Suggestions</label>
                    <textarea required rows={5} className="input-base" placeholder="Please share your thoughts..." />
                  </div>

                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="anonymous" className="w-4 h-4" style={{ accentColor: "var(--c-primary)" }} />
                    <label htmlFor="anonymous" className="text-sm" style={{ color: "var(--c-text-secondary)" }}>Submit anonymously (Hide my identity from department)</label>
                  </div>

                  <button
                    type="submit"
                    disabled={rating === 0}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ width: "auto", paddingLeft: "2rem", paddingRight: "2rem" }}
                  >
                    Submit Evaluation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
