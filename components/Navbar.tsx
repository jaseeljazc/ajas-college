"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ChevronDown, Plus, Minus, Search, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navGroups = [
    {
      name: "About",
      links: [
        { name: "Vision & Mission", href: "/about#vision" },
        { name: "Overview", href: "/about#overview" },
        { name: "Administration", href: "/about#admin" },
        { name: "Committees", href: "/about#committees" },
        { name: "Mandatory Disclosure", href: "/about#disclosure" },
        { name: "Sister Institutions", href: "/about#sister" },
      ]
    },
    {
      name: "College",
      links: [
        { name: "Infrastructure", href: "/infrastructure" },
        { name: "Fee Details", href: "/infrastructure#fees" },
      ]
    },
    {
      name: "Academics",
      links: [
        { name: "Departments", href: "/academics#departments" },
        { name: "Faculty", href: "/academics#faculty" },
        { name: "Syllabus", href: "/academics#syllabus" },
        { name: "Academic Calendar", href: "/academics#calendar" },
        { name: "Add-On Courses", href: "/academics#addon" },
        { name: "Toppers List", href: "/academics#toppers" },
        { name: "Research", href: "/research" },
      ]
    },
    {
      name: "Students",
      links: [
        { name: "Student Life", href: "/student-life" },
        { name: "Clubs & Cells", href: "/student-life#clubs" },
        { name: "NSS", href: "/student-life#nss" },
        { name: "Career & Placements", href: "/placement" },
        { name: "Scholarships", href: "/scholarships" },
        { name: "Counselling", href: "/student-life#counselling" },
        { name: "Grievance Redressal", href: "/grievance" },
      ]
    },
    {
      name: "Portal",
      links: [
        { name: "Placement Cell", href: "/placement" },
        { name: "Alumni", href: "/alumni" },
        { name: "IQAC", href: "/iqac" },
        { name: "Incubation", href: "/incubation" },
        { name: "PTA", href: "/pta" },
        { name: "Consultancy", href: "/consultancy" },
        { name: "Feedback", href: "/feedback" },
      ]
    }
  ];

  const standaloneLinks = [
    { name: "Library", href: "/library" },
    { name: "Events", href: "/events" },
    { name: "News", href: "/news" },
  ];

  const allLinks = [
    ...navGroups.flatMap(group => group.links),
    ...standaloneLinks,
    { name: "Admissions", href: "/admissions" }
  ];

  const searchResults = searchQuery 
    ? allLinks.filter(link => link.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const quickLinks = ["Admissions", "Placement", "IQAC", "Contact"];

  const isActive = (path: string) => pathname === path;

  // Clear search on route change
  useEffect(() => {
    setSearchQuery("");
  }, [pathname]);

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchResults.length > 0) {
      router.push(searchResults[0].href);
      setSearchQuery("");
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        {/* Top bar - Fades out on scroll for cleaner floating look */}
        <div className={`bg-[#263866] text-white text-[11px] font-medium px-6 transition-all duration-500 overflow-hidden ${scrolled ? "h-0 opacity-0" : "py-2 h-auto opacity-100"}`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex gap-4">
              <span>+91 7994 188918</span>
              <span className="hidden sm:inline opacity-60">|</span>
              <span className="hidden sm:inline">mail@ajascollege.ac.in</span>
            </div>
            <div className="flex gap-4">
              <Link href="/alumni" className="hover:underline">Alumni</Link>
              <Link href="/placement" className="hover:underline">Placement</Link>
              <Link href="/admissions" className="hover:underline">Admissions</Link>
            </div>
          </div>
        </div>

        {/* Main Nav Container - Transitions from full-width to floating island */}
        <div className={`transition-all duration-500 ${
          scrolled 
            ? "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-4" 
            : "w-full mt-0"
        }`}>
          <nav className={`transition-all duration-500 relative z-50 ${
            scrolled 
              ? "bg-white/80 backdrop-blur-lg border border-[#e5e7eb] shadow-xl rounded-3xl" 
              : "bg-white border-b border-[#f3f4f6]"
          }`}>
            <div className={`flex justify-between items-center h-20 transition-all duration-500 ${scrolled ? "px-6" : "max-w-[1440px] mx-auto px-6"}`}>
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#fdfbf9] flex flex-col items-center justify-center border border-[#e5e7eb] group-hover:scale-105 transition-transform">
                 <img src="/images/logo.jpg" alt="Al Jamia Logo" className="w-full h-full object-contain p-1" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[#111827] text-sm md:text-base leading-tight">
                  Al Jamia Arts & Science College
                </span>
                <span className="text-[10px] text-[#9ca3af] uppercase tracking-wider font-medium">Perinthalmanna</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-6">
              {navGroups.map((group) => (
                <div
                  key={group.name}
                  className="relative h-20 flex items-center"
                  onMouseEnter={() => setActiveDropdown(group.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 text-xs font-medium transition ${
                      group.links.some(l => isActive(l.href))
                        ? "text-[#263866]"
                        : "text-[#4b5563] hover:text-[#111827]"
                    }`}
                  >
                    {group.name} <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === group.name ? "rotate-180" : ""}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === group.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[80%] left-0 w-56 bg-white border border-[#f3f4f6] shadow-2xl rounded-xl p-2 flex flex-col z-50"
                      >
                        {group.links.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className={`px-4 py-2 text-xs rounded-lg transition ${
                              isActive(link.href)
                                ? "bg-[#fafafa] text-[#263866] font-semibold"
                                : "text-[#4b5563] hover:bg-[#fafafa] hover:text-[#111827]"
                            }`}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {standaloneLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium transition ${
                    isActive(link.href) ? "text-[#263866]" : "text-[#4b5563] hover:text-[#111827]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="relative group flex items-center ml-2">
                <Search size={14} className="absolute left-3 text-[#9ca3af]" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Search..." 
                  className="pl-8 pr-4 py-2 bg-[#f3f4f6] border border-transparent rounded-full text-xs focus:bg-white focus:border-[#e5e7eb] focus:ring-2 focus:ring-[#263866]/10 outline-none w-32 focus:w-48 transition-all duration-300"
                />
                
                <AnimatePresence>
                  {searchQuery && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-3 w-64 bg-white border border-[#e5e7eb] rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col max-h-[60vh] overflow-y-auto"
                    >
                      {searchResults.length > 0 ? (
                        searchResults.map((link, i) => (
                          <Link 
                            key={i} 
                            href={link.href} 
                            onClick={() => setSearchQuery("")}
                            className="px-4 py-3 text-xs text-[#4b5563] hover:text-[#263866] hover:bg-[#f3f4f6] border-b last:border-0 border-[#f3f4f6] transition-colors"
                          >
                            {link.name}
                          </Link>
                        ))
                      ) : (
                        <div className="px-4 py-4 text-xs text-[#9ca3af] text-center">No matching sections found.</div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/admissions" className="bg-[#263866] text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#1e40af] transition-all transform hover:scale-105 shadow-md shadow-blue-900/20">
                Admissions
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                className="text-[#111827] p-2"
                onClick={() => setIsOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
            </div>
          </nav>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 xl:hidden"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl z-50 flex flex-col xl:hidden"
              >
                <div className="p-6 flex justify-between items-center border-b border-[#f3f4f6]">
                  <span className="font-bold text-[#111827]">Navigation</span>
                  <button onClick={() => setIsOpen(false)} className="p-2">
                    <X size={24} className="text-[#4b5563]" />
                  </button>
                </div>
                
                <div className="flex-grow overflow-y-auto py-6 px-4">
                  <div className="mb-6 relative px-2">
                    <Search size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearchKeyDown}
                      placeholder="Search sections..." 
                      className="w-full pl-10 pr-4 py-3 bg-[#f3f4f6] rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#263866]/20 transition-all"
                    />
                  </div>

                  {searchQuery ? (
                    <div className="flex flex-col gap-2 px-2">
                      {searchResults.length > 0 ? (
                        searchResults.map((link, i) => (
                          <Link 
                            key={i} 
                            href={link.href} 
                            onClick={() => { setIsOpen(false); setSearchQuery(""); }}
                            className="px-4 py-3 text-sm font-medium text-[#263866] bg-[#f8fafc] rounded-xl border border-[#e5e7eb] hover:bg-[#f1f5f9] transition"
                          >
                            {link.name}
                          </Link>
                        ))
                      ) : (
                        <div className="text-sm text-[#9ca3af] text-center py-4">No matching sections found.</div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1">
                    {navGroups.map((group) => (
                      <div key={group.name} className="border-b border-[#fafafa] last:border-0">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === group.name ? null : group.name)}
                          className="w-full flex justify-between items-center py-4 px-2 text-sm font-semibold text-[#111827]"
                        >
                          {group.name}
                          {activeDropdown === group.name ? <Minus size={16} className="text-[#263866]" /> : <Plus size={16} className="text-[#9ca3af]" />}
                        </button>
                        
                        <AnimatePresence>
                          {activeDropdown === group.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-[#fafafa] rounded-xl mb-2"
                            >
                              <div className="flex flex-col py-2">
                                {group.links.map((link) => (
                                  <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`px-6 py-3 text-sm ${isActive(link.href) ? "text-[#263866] font-bold" : "text-[#4b5563]"}`}
                                  >
                                    {link.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}

                    <div className="mt-4 pt-4 border-t border-[#f3f4f6] flex flex-col gap-1">
                      {standaloneLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`px-2 py-4 text-sm font-semibold ${isActive(link.href) ? "text-[#263866]" : "text-[#111827]"}`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>

                    <Link
                      href="/admissions"
                      onClick={() => setIsOpen(false)}
                      className="mt-6 mx-2 bg-[#263866] text-white py-4 rounded-xl text-center font-bold shadow-lg shadow-blue-900/30 active:scale-95 transition-transform"
                    >
                      Apply for Admissions
                    </Link>
                  </div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Floating CTA */}
      <div className="xl:hidden">
        <AnimatePresence>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="fixed bottom-6 left-6 z-[40]"
          >
            <Link 
              href="/admissions"
              className="bg-[#263866] text-white px-6 py-4 rounded-full font-bold shadow-2xl flex items-center gap-2 active:scale-95 transition-transform"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
