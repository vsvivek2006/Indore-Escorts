"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X, ChevronRight, Sparkles } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Indore", href: "/" },
    { label: "Vijay Nagar", href: "/locations/vijay-nagar" },
    { label: "Palasia", href: "/locations/palasia" },
    { label: "Super Corridor", href: "/locations/super-corridor" },
    { label: "Models", href: "/models" },
    { label: "Services", href: "/services" },
    { label: "48 Localities", href: "/locations" },
    { label: "Safety Guide", href: "/safety-guide" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <header className="site-header-main" role="banner">
      <nav className="site-navbar-main" aria-label="Main Navigation">
        {/* Logo */}
        <Link className="site-logo-main flex items-center gap-1.5 text-white font-extrabold text-xl sm:text-2xl tracking-tight group" href="/" aria-label="MySecretGirl69 Home">
          <span className="font-pacifico text-2xl sm:text-3xl tracking-wide">MySecretGirl</span>
          <span className="bg-yellow-400 text-slate-900 text-xs font-black px-1.5 py-0.5 rounded-md shadow-xs group-hover:scale-105 transition-transform">69</span>
        </Link>

        {/* Desktop Primary Nav */}
        <ul className="site-menu-main desktop-only" id="desktopMainMenu">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Action Desk Buttons */}
        <div className="header-actions flex items-center gap-2.5">
          <a
            href="tel:+919006236133"
            className="hidden sm:inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-white text-[#e31777] hover:bg-slate-50 font-bold text-xs shadow-md transition"
            aria-label="Call concierge desk"
          >
            <Phone className="w-3.5 h-3.5 fill-[#e31777]" />
            <span>+91 90062 36133</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobileDrawerMenu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobileDrawerMenu"
          className={`site-mobile-drawer ${isMenuOpen ? "show" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="mobile-drawer-inner bg-[#e31777]">
            {/* Quick Action CTAs */}
            <div className="p-3.5 grid grid-cols-2 gap-2.5 bg-[#c2185b]">
              <a
                href="tel:+919006236133"
                className="py-2.5 px-3 rounded-full bg-white text-[#e31777] font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
              >
                <Phone className="w-3.5 h-3.5 fill-[#e31777]" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919006236133?text=Hi%2C%20I'm%20inquiring%20about%20Indore%20companion%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Main Links */}
            <ul className="mobile-menu-list">
              {navLinks.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`mobile-menu-link ${isActive ? "active-link" : ""}`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-60" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
