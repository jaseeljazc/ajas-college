import Link from "next/link";

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
  return (
    <footer className="bg-[#263866] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#fdfbf9] flex flex-col items-center justify-center border border-white/20">
                <img src="/images/logo.jpg" alt="Al Jamia Logo" className="w-full h-full object-contain p-1" />
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
            <h3 className="font-semibold text-white mb-6">Quick Links</h3>
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
            <h3 className="font-semibold text-white mb-6">Portal</h3>
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
            <h3 className="font-semibold text-white mb-6">External Links</h3>
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

        <div className="border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 Al Jamia Arts & Science College. All Rights Reserved.
          </p>
          <p className="text-white/30 text-sm">
            Designed & Developed by{" "}
            <a href="#" className="hover:text-white transition">
              Prepscale
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
