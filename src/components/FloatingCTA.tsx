"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const whatsappNumber = "919006236133";
  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in arranging a companion in Indore. Is someone available today?"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-center gap-3 pointer-events-none">
      {/* 1. Floating Scroll To Top Button (Directly Above WhatsApp Button) */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        title="Scroll to top"
        className={`w-11 h-11 rounded-full bg-[#0b172d]/95 hover:bg-[#e31777] text-white border border-white/20 backdrop-blur-md shadow-2xl shadow-black/40 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>

      {/* 2. Single Floating WhatsApp Contact Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="Contact Coordinator on WhatsApp"
        className="pointer-events-auto relative w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 hover:scale-110 transition-all duration-300 group cursor-pointer"
      >
        {/* Subtle pulsating ping ring */}
        <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-35 animate-ping -z-10" />
        <MessageCircle className="w-7 h-7 text-white" />
        
        {/* Tooltip on hover */}
        <span className="hidden md:group-hover:flex items-center gap-1 absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#0b172d] text-white text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/10 shadow-2xl pointer-events-none">
          <span>WhatsApp Coordinator</span>
        </span>
      </a>
    </div>
  );
}
