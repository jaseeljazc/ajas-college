import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import NoticeModal from "@/components/NoticeModal";
import LiveChat from "@/components/LiveChat";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Al Jamia Arts & Science College — Perinthalmanna",
  description:
    "A premier minority institution of higher learning in Kerala, affiliated to the University of Calicut. 14 UG & PG programmes in Commerce, Science, Arts, and Technology.",
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${fraunces.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        <Navbar />
        <main className="flex-grow pt-24 md:pt-28 lg:pt-24">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <NoticeModal />
        <LiveChat />
        <ScrollToTop />
      </body>
    </html>
  );
}

