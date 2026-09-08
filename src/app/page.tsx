import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANION_MODELS } from "@/data/models";
import { INDORE_LOCATIONS } from "@/data/locations";
import ModelCard from "@/components/ModelCard";
import FaqAccordion from "@/components/FaqAccordion";
import TestimonialsSection from "@/components/TestimonialsSection";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  MapPin,
  Lock,
  Clock,
  CheckCircle2,
  Compass,
  ArrowRight,
  Crown,
  Building,
  Heart,
  Users,
  Hotel,
  Check
} from "lucide-react";

export const metadata: Metadata = {
  title: "Escorts in Indore Call Girls | Hot Call Girls in Indore Hotel Delivery",
  description:
    "Book the hottest Indore call girls and Escorts Service today. Elite companions with fast hotel delivery across Vijay Nagar, Palasia, Super Corridor, and 48 localities. 24/7, 100% safety, direct payment on meet, and verified real photos.",
  alternates: {
    canonical: "https://mysecretgirl69.com"
  },
  openGraph: {
    title: "Escorts in Indore Call Girls | Hot Call Girls in Indore Hotel Delivery",
    description:
      "Book the hottest Indore call girls and Escorts Service today. Elite companions with fast hotel delivery across Vijay Nagar, Palasia, and 48 localities.",
    url: "https://mysecretgirl69.com",
    siteName: "Indore Girls Escorts Service",
    type: "website",
    locale: "en_IN"
  }
};

export default function HomePage() {
  const homeFaqs = [
    {
      question: "What areas in Indore does this companion directory cover?",
      answer: "We provide comprehensive coverage across all 48 major zones in Indore, including Vijay Nagar, Scheme 54, Scheme 74, Palasia, New Palasia, Bhawarkuan, Super Corridor, Airport Road, South Tukoganj, Rau, and the Indore Bypass luxury resorts."
    },
    {
      question: "How long does local companion coordination typically take in Indore?",
      answer: "For central and north-eastern hubs like Vijay Nagar, Palasia, and MR-10, verified companions can usually arrive at your hotel room or private accommodation within 30 to 45 minutes of direct confirmation."
    },
    {
      question: "How do I contact or arrange a companion in Indore?",
      answer: "You can reach out directly via WhatsApp or telephone to our concierge desk at +91 90062 36133. State your preferred Indore locality and desired schedule to coordinate available independent companions."
    },
    {
      question: "Can companions accompany guests to corporate galas or events in Indore?",
      answer: "Yes, many independent companions listed in our directory possess polished social etiquette, articulate English and Hindi fluency, and elegant attire suitable for business dinners, convention galas at the Brilliant Convention Centre, and executive social events."
    },
    {
      question: "What payment methods are accepted for companion bookings in Indore?",
      answer: "We support flexible and transparent payment arrangements settled directly upon meeting your companion. Whether you prefer cash or digital transfer upon arrival, zero advance deposits or registration fees are required."
    },
    {
      question: "Which luxury hotels in Indore are companion-friendly and discreet?",
      answer: "Indore's leading five-star establishments such as Sayaji Hotel, Radisson Blu, Indore Marriott, Sheraton Grand Palace, and boutique suites in Vijay Nagar and New Palasia offer discreet check-in procedures, spacious suites, and private in-room dining."
    },
    {
      question: "How is client privacy and discretion handled?",
      answer: "All interactions are handled with the utmost discretion. We do not retain personal identifying records, numbers are never shared with marketing third parties, and all communication via phone or WhatsApp is completely private and confidential."
    }
  ];

  const localServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MySecretGirl69 Indore Escorts Service",
    image: "https://mysecretgirl69.com/images/hero_banner.jpg",
    telephone: "+91-9006236133",
    url: "https://mysecretgirl69.com",
    priceRange: "₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    description:
      "Premier verified escort services in Indore offering 24/7 hotel room delivery across Vijay Nagar, Palasia, Super Corridor, and 48 localities. 100% genuine photos and direct payment on meeting.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Scheme 54, Vijay Nagar",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "452010",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.7533,
      longitude: 75.8937
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "00:00",
      closes: "23:59"
    }
  };

  // Top 8 Featured Companions for homepage to prevent infinite scroll fatigue
  const featuredModels = COMPANION_MODELS.slice(0, 8);
  // Top 18 Localities for quick access on homepage
  const primeLocalities = INDORE_LOCATIONS.slice(0, 18);

  return (
    <div className="flex flex-col w-full text-slate-900 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />

      {/* 1. HERO BANNER SECTION (Godelhiescort Style with Radiant Gradient) */}
      <section className="hero-banner-wrap" aria-label="Hero Banner">
        <div className="hero-bg-img">
          <Image
            src="/images/hero_banner.jpg"
            alt="Indore Call Girls Escorts Service"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="hero-banner-overlay">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-4 border border-white/20 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>#1 Indore Escorts Service &bull; 100% Genuine Profiles &bull; 24/7 Delivery</span>
          </div>

          <h1 className="hero-main-title">
            Hot Call Girls in Indore Escorts Service Free Hotel Delivery
          </h1>

          <p className="text-white/90 text-sm sm:text-base max-w-2xl text-center mb-8 drop-shadow-md font-sans">
            Verified independent companions for 5-star hotel suites, dinner dates, and executive stays in Vijay Nagar, Palasia &amp; 48 Indore zones. Fast 30–45 min dispatch.
          </p>

          <div className="hero-cta-row">
            <a className="hero-btn call-btn" href="tel:+919006236133">
              <Phone className="w-5 h-5 inline-block mr-2" />
              Call Us
            </a>
            <a
              className="hero-btn whatsapp-btn"
              href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20your%20services%20in%20Indore%20Escorts.%20Is%20cash%20on%20delivery%20available%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 inline-block mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Quick Pillars Strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-white/90 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>30–45 Min Room Delivery</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct Payment on Meeting</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Real Photos</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. PREMIER ESCORTS SERVICE (Soft Rose Gradient) */}
      <section className="py-12 sm:py-14 bg-gradient-to-b from-white via-rose-50/30 to-white border-b border-slate-200/80" aria-label="Premier Escorts Overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#e31777] aspect-[4/5] max-w-md mx-auto">
                <Image
                  src="/images/model_aarohi.jpg"
                  alt="Elite Indore Call Girl Premier Escort"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      Verified Elite Escort
                    </span>
                    <h3 className="text-xl font-bold font-sans text-white">Aarohi Sharma, 23</h3>
                    <p className="text-xs text-slate-300">Vijay Nagar &bull; Sayaji Luxury Suites</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Narrative & 4 Stat Boxes */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#e31777] bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 px-3.5 py-1 rounded-full inline-block">
                  Premier Escorts Service
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
                  Unforgettable Experiences with Elite <span className="text-[#e31777]">Call Girls in Indore</span>
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Welcome to <strong>MySecretGirl69</strong>, Indore&apos;s premier independent <strong>escorts service in Indore</strong>. We connect discerning business travelers, tourists, and local gentlemen with charming, articulate, and verified companions designed for seamless corporate dates, luxury staycations, and private hotel encounters.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Whether you desire an articulate partner for business summits at the <strong>Brilliant Convention Centre</strong>, a romantic candlelit dinner at <strong>Sayaji (Mediterra)</strong> or <strong>Radisson Blu</strong>, or private suite relaxation along the <strong>Indore Bypass</strong>, our high-profile <Link href="/models" className="text-[#e31777] font-bold underline">Indore call girls</Link> guarantee complete confidentiality and direct in-person settlement with zero advance deposits.
              </p>

              {/* 4 Feature Boxes (Gradient Glassmorphism) */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="about-new-box p-4 rounded-xl bg-gradient-to-br from-[#e31777] via-[#d0156c] to-[#b80e5d] text-white text-center border-l-4 border-r-4 border-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white leading-tight">100%</h3>
                  <span className="text-xs sm:text-sm font-normal text-white/95 block mt-0.5 font-sans">Privacy &amp; Discretion</span>
                </div>

                <div className="about-new-box p-4 rounded-xl bg-gradient-to-br from-[#e31777] via-[#d0156c] to-[#b80e5d] text-white text-center border-l-4 border-r-4 border-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white leading-tight">No Fake</h3>
                  <span className="text-xs sm:text-sm font-normal text-white/95 block mt-0.5 font-sans">Profiles &amp; Real Photos</span>
                </div>

                <div className="about-new-box p-4 rounded-xl bg-gradient-to-br from-[#e31777] via-[#d0156c] to-[#b80e5d] text-white text-center border-l-4 border-r-4 border-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white leading-tight">48 Zones</h3>
                  <span className="text-xs sm:text-sm font-normal text-white/95 block mt-0.5 font-sans">Best Indore Areas</span>
                </div>

                <div className="about-new-box p-4 rounded-xl bg-gradient-to-br from-[#e31777] via-[#d0156c] to-[#b80e5d] text-white text-center border-l-4 border-r-4 border-white shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white leading-tight">5,000+</h3>
                  <span className="text-xs sm:text-sm font-normal text-white/95 block mt-0.5 font-sans">Satisfied Guests</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAST PHONE CALL STRIP (Bold Gradient Strip) */}
      <section className="py-7 bg-gradient-to-r from-[#b30000] via-[#e31777] to-[#b30000] text-center px-4 shadow-lg text-white">
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-sm font-bold tracking-wide uppercase text-amber-200">
            So hurry up and get in touch with us now!!!
          </p>
          <div>
            <a
              href="tel:+919006236133"
              className="inline-flex items-center gap-3 py-3 px-8 rounded-full bg-white text-[#b30000] hover:text-[#e31777] font-bold text-xl sm:text-2xl shadow-xl hover:scale-105 transition-all"
            >
              <Phone className="w-6 h-6 fill-[#b30000]" />
              <span>+91 90062 36133</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. DISCOVER THE ALLURE OF INDORE (Soft Diagonal Gradient) */}
      <section className="py-12 sm:py-14 bg-gradient-to-br from-slate-50 via-rose-50/20 to-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
                  Cleanest &amp; Most Dynamic Commercial Capital
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
                  Discover the Allure of <span className="text-[#e31777]">Call Girls in Indore</span>
                </h2>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Indore is a captivating metropolis celebrating royal Holkar heritage, world-renowned culinary lanes at <strong>Sarafa Bazaar</strong> and <strong>56 Dukan</strong>, and a flourishing commercial IT corridor. The city offers the ultimate backdrop for unforgettable experiences with our independent companions.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Local Presence:</strong> Our <Link href="/models" className="text-[#e31777] font-bold underline">Indore call girls</Link> cater to guests in <strong>Vijay Nagar</strong>, Scheme 54, <strong>Palasia &amp; New Palasia</strong>, and five-star luxury suites along the <strong>Indore Bypass</strong> and <strong>MR-10</strong>.
              </p>

              {/* 3 Sleek Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-pink-200 transition-all space-y-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-100 to-rose-100 text-[#e31777] flex items-center justify-center mb-2">
                    <Crown className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold font-sans text-slate-900">Cosmopolitan Standard</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Articulate companions fluent in English and Hindi for executive business dinners.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-pink-200 transition-all space-y-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-100 to-rose-100 text-[#e31777] flex items-center justify-center mb-2">
                    <Hotel className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold font-sans text-slate-900">Suite &amp; Resort Luxury</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Discreet room delivery to Sayaji, Radisson Blu, and Bypass luxury retreats.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-pink-200 transition-all space-y-1">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-100 to-rose-100 text-[#e31777] flex items-center justify-center mb-2">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold font-sans text-slate-900">30–45 Min Dispatch</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Direct real-time arrival across all 48 Indore sectors with zero advance deposit.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 aspect-[4/3]">
                <Image
                  src="/images/model_natasha.jpg"
                  alt="Indore Call Girls Luxury Suite Companion"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white text-[10px] font-bold uppercase tracking-wider">
                      5-Star Suite Specialist
                    </span>
                    <h4 className="text-lg font-bold font-sans text-white mt-1">Natasha Verma, 24</h4>
                    <p className="text-xs text-slate-200">Radisson Blu &bull; Indore Bypass</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEMBER PROFILES GALLERY (Top 8 Curated Profiles - Eliminates Infinite Scroll) */}
      <section id="curated-profiles" className="py-12 sm:py-14 bg-gradient-to-b from-white via-pink-50/20 to-white border-b border-slate-200/80 w-full" aria-label="Curated Profiles Gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e31777] bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 px-3.5 py-1 rounded-full inline-block">
              Exclusive 2026 Portfolio
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed max-w-3xl mx-auto">
              Browse Charming <span className="text-[#e31777]">Indore Call Girls</span> &bull; Select from Our Exclusive Profiles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Hand-picked independent companions available for hotel visits, corporate conventions, dinner dates, and social appointments across Indore.
            </p>
          </div>

          {/* Featured 8 Profiles Grid: 2 columns on mobile, 4 columns on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {featuredModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>

          {/* All 20 Profiles Expansion Banner */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-pink-50 via-rose-50/80 to-pink-50 border border-pink-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
            <div>
              <h3 className="font-sans font-bold text-slate-900 text-sm sm:text-base flex items-center justify-center sm:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-[#e31777]" />
                <span>Looking for More Profiles, Specific Tastes &amp; Rates?</span>
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Explore our full roster of 20 verified models with complete photos, statistics, availability, and direct booking.
              </p>
            </div>
            <Link
              href="/models"
              className="shrink-0 inline-flex items-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#e31777] via-[#d0156c] to-[#c2185b] text-white hover:brightness-110 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
            >
              <span>Explore All 20 Companion Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. REDESIGNED COMPANION SERVICES */}
      <section className="py-12 sm:py-14 bg-gradient-to-b from-slate-50 via-pink-50/15 to-slate-50 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
              Tailored Companionship
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
              Seductive Escort Services in Indore <span className="text-[#e31777]">Tailored to Your Desires</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Personalized arrangements designed for complete privacy, effortless comfort, and genuine connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1: Hotel Out-Call */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#e31777] transition-all hover:shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-100 to-rose-100 text-[#e31777] flex items-center justify-center font-bold">
                  <Hotel className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#e31777] uppercase tracking-wider block">
                  30–45 Min Arrival
                </span>
                <h3 className="text-lg font-bold font-sans text-slate-900">
                  Hotel &amp; Suite Out-Call
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct visits to your hotel room or suite in Vijay Nagar, Palasia, or along the Indore Bypass. Punctual, discreet arrival with direct in-person payment.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>5-Star Hotels &amp; Luxury Resorts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Discreet In-Room Check-In</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Zero Advance Payment Required</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20Hotel%20Out-Call%20service%20in%20Indore."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-pink-50 text-[#e31777] hover:bg-gradient-to-r hover:from-[#e31777] hover:to-[#c2185b] hover:text-white transition"
              >
                Book Out-Call via WhatsApp
              </a>
            </div>

            {/* Service 2: Corporate & Dinner Dates */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white via-pink-50/20 to-white border-2 border-[#e31777] shadow-md transition-all hover:shadow-lg flex flex-col justify-between space-y-4 relative">
              <span className="absolute -top-3 right-4 bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase shadow-xs">
                Most Popular
              </span>
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-100 to-rose-200 text-[#e31777] flex items-center justify-center font-bold">
                  <Crown className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#e31777] uppercase tracking-wider block">
                  Articulate &amp; Bilingual
                </span>
                <h3 className="text-lg font-bold font-sans text-slate-900">
                  Corporate &amp; Dinner Dates
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Turn heads at executive summits, conventions at Brilliant Convention Centre, or enjoy private dining at Sayaji Mediterra with a well-spoken date.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Fluent in English &amp; Hindi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Polished Social Etiquette</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Sophisticated Evening Attire</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20Corporate%20Dinner%20Date%20companionship%20in%20Indore."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-gradient-to-r from-[#e31777] via-[#d0156c] to-[#c2185b] text-white hover:brightness-110 transition shadow-xs"
              >
                Reserve Dinner Date
              </a>
            </div>

            {/* Service 3: Overnight Suite Luxury */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#e31777] transition-all hover:shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-100 to-rose-100 text-[#e31777] flex items-center justify-center font-bold">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#e31777] uppercase tracking-wider block">
                  10–12 Hours Stay
                </span>
                <h3 className="text-lg font-bold font-sans text-slate-900">
                  Overnight Suite Luxury
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete overnight companionship for luxury suites and farmhouse resorts along the Indore Bypass. Unhurried romance, intimacy, and relaxed morning company.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Full Night 10–12 Hours Duration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Total Discretion &amp; Calm Vibe</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Direct In-Person Payment</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20Overnight%20Stay%20companionship%20in%20Indore."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-pink-50 text-[#e31777] hover:bg-gradient-to-r hover:from-[#e31777] hover:to-[#c2185b] hover:text-white transition"
              >
                Inquire Overnight Package
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOTEL BOOKING GUIDE (Soft Slate Gradient) */}
      <section className="py-12 sm:py-14 bg-gradient-to-b from-white via-slate-50/40 to-white border-b border-slate-200/80" aria-label="Hotel Booking Guide">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
              Indore Hospitality Scene
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
              Booking a Hotel for Your <span className="text-[#e31777]">Encounter in Indore</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To make your experience with our <strong>Indore escorts</strong> seamless and discreet, here is our recommended guide for hotel accommodations across the city:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-pink-100 text-[#e31777] flex items-center justify-center font-bold">
                <Hotel className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-slate-900 text-base">1. Luxury 5-Star Hotels</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Opt for <strong>Sayaji Hotel</strong>, <strong>Radisson Blu</strong>, <strong>Indore Marriott</strong>, or <strong>Sheraton Grand Palace</strong>. These properties offer discreet check-in, spacious suites, and 24/7 in-room dining.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-pink-100 text-[#e31777] flex items-center justify-center font-bold">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-slate-900 text-base">2. Boutique Hotels</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For a more intimate vibe, boutique suites in <strong>Vijay Nagar</strong>, <strong>New Palasia</strong>, and near <strong>MR-10</strong> offer cozy, quiet rooms ideal for unhurried evenings.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-pink-100 text-[#e31777] flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-slate-900 text-base">3. Budget-Friendly Stays</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trusted business hotels near <strong>Indore Junction</strong>, <strong>Bhawarkuan</strong>, and <strong>Airport Road</strong> maintain clean comfort and total privacy on a modest budget.
              </p>
            </div>
          </div>

          {/* 5-Step Arrangement Process */}
          <div className="rounded-3xl bg-gradient-to-br from-pink-50/60 via-rose-50/40 to-pink-50/60 border border-pink-200/70 p-6 sm:p-7 space-y-5">
            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-base sm:text-lg font-sans font-bold text-slate-900">
                How to Book in <span className="text-[#e31777]">5 Easy Steps</span>
              </h3>
              <p className="text-xs text-slate-600">Quick, safe, and transparent coordination with zero hassle.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs text-slate-700">
              <div className="p-3.5 bg-white rounded-xl border border-pink-200/60 space-y-1 shadow-2xs">
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white font-bold flex items-center justify-center text-xs mb-2">01</span>
                <strong className="block text-slate-900 font-sans">Browse Profiles</strong>
                <p className="text-[11px] text-slate-500">Pick your favorite companion from verified profiles.</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-pink-200/60 space-y-1 shadow-2xs">
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white font-bold flex items-center justify-center text-xs mb-2">02</span>
                <strong className="block text-slate-900 font-sans">Contact Desk</strong>
                <p className="text-[11px] text-slate-500">WhatsApp or call us directly at +91 90062 36133.</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-pink-200/60 space-y-1 shadow-2xs">
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white font-bold flex items-center justify-center text-xs mb-2">03</span>
                <strong className="block text-slate-900 font-sans">Share Venue</strong>
                <p className="text-[11px] text-slate-500">Provide hotel name and preferred timing.</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-pink-200/60 space-y-1 shadow-2xs">
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white font-bold flex items-center justify-center text-xs mb-2">04</span>
                <strong className="block text-slate-900 font-sans">Swift Arrival</strong>
                <p className="text-[11px] text-slate-500">Companion arrives at your room in 30–45 mins.</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-pink-200/60 space-y-1 shadow-2xs">
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white font-bold flex items-center justify-center text-xs mb-2">05</span>
                <strong className="block text-slate-900 font-sans">Meet &amp; Pay</strong>
                <p className="text-[11px] text-slate-500">Direct in-person payment, total satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TEMPTING PRICING & PACKAGES (Rose Gradient) */}
      <section className="py-12 sm:py-14 bg-gradient-to-b from-slate-50 via-rose-50/25 to-slate-50 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
              Honest &amp; Transparent Rates
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
              Tempting Pricing for Every <span className="text-[#e31777]">Desire in Indore</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              100% transparent rates with zero advance deposits. Settle directly when your companion arrives.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Standard */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#e31777] uppercase tracking-wider block">Short Rendezvous</span>
                <h3 className="text-xl font-bold font-sans text-slate-900">Standard Seduction</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Affordable rates for relaxed 2-hour encounters with charming college and independent models.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>2 Hours Intimate Companionship</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Direct Hotel Room Dispatch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Cash or UPI Upon Meeting</span>
                  </li>
                </ul>
              </div>
              <a
                href="tel:+919006236133"
                className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 transition"
              >
                Call to Check Rates
              </a>
            </div>

            {/* VIP Elite */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-white via-pink-50/25 to-white border-2 border-[#e31777] shadow-md space-y-4 flex flex-col justify-between relative">
              <span className="absolute -top-3 right-4 bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase shadow-xs">
                Most Popular
              </span>
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#e31777] uppercase tracking-wider block">Dinner &amp; Evening</span>
                <h3 className="text-xl font-bold font-sans text-slate-900">VIP Elite Passion</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unrushed evening companionship for corporate gala dinners, lounge dates, and convention networking.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>4 to 6 Hours Extended Duration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Fluent English &amp; Hindi Models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Executive Dinner Attendance</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20the%20VIP%20Elite%20Passion%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-gradient-to-r from-[#e31777] via-[#d0156c] to-[#c2185b] text-white hover:brightness-110 transition shadow-xs"
              >
                Reserve VIP Package
              </a>
            </div>

            {/* Overnight */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#e31777] uppercase tracking-wider block">Full Night Stay</span>
                <h3 className="text-xl font-bold font-sans text-slate-900">Overnight Luxury</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete overnight stay for luxury suites at Sayaji, Radisson Blu, and Bypass resorts.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>10–12 Hours Full Night Stay</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Complete Unhurried Intimacy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Discretion Guaranteed</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20the%20Overnight%20Luxury%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 transition"
              >
                Inquire Overnight Rates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SECTION (Captivating Client Stories) */}
      <TestimonialsSection />

      {/* 10. SAFETY, DISCRETION & ETHICAL STANDARDS */}
      <section className="py-12 sm:py-14 max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
            Trust &amp; Ethics
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
            Safety, Discretion &amp; <span className="text-[#e31777]">Ethical Standards</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            At our escort directory, we prioritize your privacy, personal comfort, and complete peace of mind:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-sans font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>100% Verified Real Photos</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every companion is screened and verified in person. The companion in the gallery is exactly who arrives at your suite.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-sans font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Safe In-Person Transactions</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We arrange direct payments upon meeting your companion, safeguarding you completely against online advance payment scams.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-sans font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>100% Consensual &amp; Independent Models</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We foster mutual courtesy and respect. All independent models listed on our platform are 18+ consenting adults participating freely.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-sans font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Strict Discretion &amp; Privacy Safeguards</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Companions maintain pristine hygiene standards. We never record personal phone numbers or share information with third parties.
            </p>
          </div>
        </div>
      </section>

      {/* 11. 48 INDORE LOCALITIES MATRIX (Top 18 Hotspots + Full Hub Link) */}
      <section className="py-12 sm:py-14 bg-gradient-to-b from-slate-50 via-rose-50/20 to-white border-t border-slate-200/80 w-full" aria-label="48 Indore Localities Matrix">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e31777] bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 px-3.5 py-1 rounded-full">
              <Compass className="w-3.5 h-3.5" />
              <span>Complete City Index</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
              Companion Directory Across <span className="text-[#e31777]">All 48 Localities</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Quick access to premier hotel hubs, corporate IT corridors, and private avenues across Indore.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 text-xs">
            {primeLocalities.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="p-3 rounded-xl bg-white hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 border border-slate-200 hover:border-[#e31777] text-slate-700 hover:text-[#e31777] font-semibold transition-all text-center truncate shadow-2xs hover:shadow-xs min-h-[44px] flex items-center justify-center font-sans"
              >
                {loc.name}
              </Link>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-xs font-bold text-white transition py-3 px-8 rounded-full bg-gradient-to-r from-[#e31777] via-[#d0156c] to-[#c2185b] shadow-md hover:brightness-110 hover:shadow-lg hover:scale-105"
            >
              <span>Explore Complete 48 Locality Hub &amp; Area Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. FAQS SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-14 w-full">
        <FaqAccordion
          faqs={homeFaqs}
          title="Frequently Asked Questions"
          subtitle="Clear answers regarding companion arrangements, flexible in-person payment, hotel visits, and privacy in Indore."
        />
      </section>
    </div>
  );
}
