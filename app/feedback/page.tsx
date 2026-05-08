"use client";

import { useState } from "react";
import Link from "next/link";
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
    setTimeout(() => {
      setIsSubmitted(false);
      setRating(0);
    }, 4000);
  };

  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="bg-white border-b border-[#f3f4f6] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-xs text-[#9ca3af] mb-4">
              <Link href="/" className="hover:text-[#263866] transition">Home</Link> → Feedback
            </div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#263866] font-medium mb-3">Institutional Evaluation</h3>
            <h1 className="text-4xl font-semibold text-[#111827] mb-4">Feedback System</h1>
            <p className="text-[#6b7280]">Your input is vital. Help us improve our academic delivery, infrastructure, and overall campus experience.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#fafafa] py-24">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Overall Rating", value: "4.8/5" },
              { label: "Responses", value: "5000+" },
              { label: "Resolution Rate", value: "95%" },
              { label: "Latest Cycle", value: "2025-26" }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-[#e5e7eb] rounded-lg p-4 text-center">
                <div className="text-xl font-bold text-[#111827] mb-1">{stat.value}</div>
                <div className="text-xs text-[#6b7280]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#e5e7eb] rounded-2xl shadow-sm overflow-hidden">
            
            {/* Tabs */}
            <div className="flex overflow-x-auto border-b border-[#e5e7eb] custom-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? "border-b-2 border-[#263866] text-[#263866]"
                      : "text-[#6b7280] hover:text-[#111827]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Form Area */}
            <div className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-300">
                  <CheckCircle2 size={48} className="text-emerald-500 mb-4" />
                  <h3 className="text-2xl font-semibold text-[#111827] mb-2">Thank You!</h3>
                  <p className="text-[#6b7280]">Your feedback has been successfully submitted and will be reviewed by the IQAC committee.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#111827] mb-1">{activeTab} Feedback</h3>
                    <p className="text-sm text-[#6b7280]">Please rate your overall experience and provide constructive comments.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-[#374151] mb-1.5 block">Full Name</label>
                      <input required type="text" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#374151] mb-1.5 block">Email Address</label>
                      <input required type="email" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" />
                    </div>
                  </div>

                  {activeTab === "Student" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-[#374151] mb-1.5 block">Department/Programme</label>
                        <input required type="text" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-[#374151] mb-1.5 block">Semester/Year</label>
                        <input required type="text" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" />
                      </div>
                    </div>
                  )}

                  {activeTab === "Employer" && (
                    <div>
                      <label className="text-sm font-medium text-[#374151] mb-1.5 block">Company Name</label>
                      <input required type="text" className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" />
                    </div>
                  )}

                  <div>
                    <label className="text-sm font-medium text-[#374151] mb-3 block">Overall Satisfaction Rating</label>
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
                            fill={star <= (hoverRating || rating) ? "#eab308" : "none"} 
                            color={star <= (hoverRating || rating) ? "#eab308" : "#d1d5db"} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#374151] mb-1.5 block">Detailed Comments/Suggestions</label>
                    <textarea required rows={5} className="w-full border border-[#e5e7eb] rounded-lg px-4 py-2.5 bg-white focus:border-[#263866] focus:ring-1 focus:ring-[#263866] outline-none text-sm" placeholder="Please share your thoughts..."></textarea>
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="anonymous" className="rounded border-[#e5e7eb] text-[#263866] focus:ring-[#263866]" />
                    <label htmlFor="anonymous" className="text-sm text-[#6b7280]">Submit anonymously (Hide my identity from department)</label>
                  </div>

                  <button type="submit" disabled={rating === 0} className="w-full md:w-auto bg-[#263866] text-white rounded-lg py-3 px-8 text-sm font-medium hover:bg-[#1e40af] transition disabled:opacity-50 disabled:cursor-not-allowed">
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
