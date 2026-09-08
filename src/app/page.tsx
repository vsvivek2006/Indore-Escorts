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
                Welcome to <strong>MySecretGirl69</strong>. We are here to make your time in Indore relaxing, exciting, and completely stress-free. Whether you are visiting for executive summits at the <strong>Brilliant Convention Centre</strong>, unwinding after a long day in your luxury hotel suite, or looking for a charming, well-spoken date for dinner, our handpicked independent companions are ready to spend quality, unhurried time with you.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                From romantic candlelit dining at <strong>Sayaji (Mediterra)</strong> or <strong>Radisson Blu</strong> to peaceful suite stays along the <strong>Indore Bypass</strong> and <strong>Vijay Nagar</strong>, our verified <Link href="/models" className="text-[#e31777] font-bold underline">Indore call girls</Link> bring natural warmth and elegance. You enjoy complete confidentiality and direct in-person payment with zero advance deposits.
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

      {/* 6. TAILORED COMPANIONSHIP & HONEST RATES (Single Clear Showcase) */}
      <section className="py-12 sm:py-14 bg-gradient-to-b from-slate-50 via-pink-50/15 to-slate-50 border-b border-slate-200/80" aria-label="Services and Rates">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
              Tailored For Your Comfort
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
              Thoughtful Companionship <span className="text-[#e31777]">Tailored to Your Evening</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear rates, zero advance deposits, and complete privacy. Settle directly with your companion when you meet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1: Hotel Out-Call */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#e31777] transition-all hover:shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-100 to-rose-100 text-[#e31777] flex items-center justify-center font-bold">
                    <Hotel className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#e31777] bg-pink-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    2–3 Hours
                  </span>
                </div>
                <h3 className="text-lg font-bold font-sans text-slate-900">
                  Private Hotel Suite Rendezvous
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Relaxing private company delivered directly to your hotel room or suite in Vijay Nagar, Palasia, or along the Bypass. Quick 30–45 minute arrival.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Prompt 30–45 Min In-Room Arrival</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Discreet, Respectful &amp; Calm Vibe</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Zero Advance &bull; Pay In Person</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20arranging%20a%20Hotel%20Out-Call%20rendezvous%20in%20Indore."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-pink-50 text-[#e31777] hover:bg-gradient-to-r hover:from-[#e31777] hover:to-[#c2185b] hover:text-white transition"
              >
                Book Hotel Rendezvous
              </a>
            </div>

            {/* Service 2: Corporate & Dinner Dates */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white via-pink-50/20 to-white border-2 border-[#e31777] shadow-md transition-all hover:shadow-lg flex flex-col justify-between space-y-4 relative">
              <span className="absolute -top-3 right-4 bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase shadow-xs">
                Most Popular
              </span>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-100 to-rose-200 text-[#e31777] flex items-center justify-center font-bold">
                    <Crown className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#e31777] bg-pink-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    4–6 Hours
                  </span>
                </div>
                <h3 className="text-lg font-bold font-sans text-slate-900">
                  Dinner Dates &amp; Social Galas
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  An articulate, charming companion by your side for business banquets at Brilliant Convention Centre, rooftop dinners at Sayaji, or casual drinks.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Fluent in English &amp; Hindi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Elegant Social Presence &amp; Etiquette</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Zero Advance &bull; Pay In Person</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20a%20Dinner%20Date%20companion%20in%20Indore."
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
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-100 to-rose-100 text-[#e31777] flex items-center justify-center font-bold">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#e31777] bg-pink-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    10–12 Hours
                  </span>
                </div>
                <h3 className="text-lg font-bold font-sans text-slate-900">
                  Full Night Overnight Stay
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unhurried romance and comfortable company from night until morning at luxury hotels and private resort villas across the city.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-600 pt-1">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Full 10–12 Hours Peaceful Stay</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Unhurried Romance &amp; Breakfast Company</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Zero Advance &bull; Pay In Person</span>
                  </li>
                </ul>
              </div>
              <a
                href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20arranging%20an%20Overnight%20Stay%20companion%20in%20Indore."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-bold rounded-xl bg-pink-50 text-[#e31777] hover:bg-gradient-to-r hover:from-[#e31777] hover:to-[#c2185b] hover:text-white transition"
              >
                Inquire Overnight Stay
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOTEL BOOKING & EASY 5-STEP ARRANGEMENT */}
      <section className="py-12 sm:py-14 bg-gradient-to-b from-white via-slate-50/40 to-white border-b border-slate-200/80" aria-label="Hotel Booking Guide">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
              Easy &amp; Discreet Stays
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
              Recommended Hotels For Your <span className="text-[#e31777]">Visit in Indore</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We frequently coordinate visits to Indore&apos;s top hospitality venues. Here are the best spots where guest privacy and comfort are guaranteed:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-pink-100 text-[#e31777] flex items-center justify-center font-bold">
                <Hotel className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-slate-900 text-base">1. Luxury 5-Star Hotels</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Sayaji Hotel</strong>, <strong>Radisson Blu</strong>, <strong>Indore Marriott</strong>, and <strong>Sheraton Grand Palace</strong>. Smooth room key access, 24/7 dining, and high discretion.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-pink-100 text-[#e31777] flex items-center justify-center font-bold">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-slate-900 text-base">2. Boutique Hotels</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cozy boutique properties in <strong>Vijay Nagar</strong>, <strong>New Palasia</strong>, and along <strong>MR-10</strong> offer quiet rooms ideal for private, relaxing evenings.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-pink-100 text-[#e31777] flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-slate-900 text-base">3. Business &amp; Transit Stays</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean, reliable hotels near <strong>Indore Junction</strong>, <strong>Bhawarkuan</strong>, and <strong>Airport Road</strong> for dependable comfort and hassle-free coordination.
              </p>
            </div>
          </div>

          {/* 5-Step Arrangement Process */}
          <div className="rounded-3xl bg-gradient-to-br from-pink-50/60 via-rose-50/40 to-pink-50/60 border border-pink-200/70 p-6 sm:p-7 space-y-5">
            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-base sm:text-lg font-sans font-bold text-slate-900">
                How to Book in <span className="text-[#e31777]">5 Simple Steps</span>
              </h3>
              <p className="text-xs text-slate-600">Quick, friendly, and transparent with zero upfront payments.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs text-slate-700">
              <div className="p-3.5 bg-white rounded-xl border border-pink-200/60 space-y-1 shadow-2xs">
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white font-bold flex items-center justify-center text-xs mb-2">01</span>
                <strong className="block text-slate-900 font-sans">Choose Companion</strong>
                <p className="text-[11px] text-slate-500">Pick the companion you like from verified photos.</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-pink-200/60 space-y-1 shadow-2xs">
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white font-bold flex items-center justify-center text-xs mb-2">02</span>
                <strong className="block text-slate-900 font-sans">Message or Call</strong>
                <p className="text-[11px] text-slate-500">Connect with our friendly desk on WhatsApp or phone.</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-pink-200/60 space-y-1 shadow-2xs">
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white font-bold flex items-center justify-center text-xs mb-2">03</span>
                <strong className="block text-slate-900 font-sans">Share Location</strong>
                <p className="text-[11px] text-slate-500">Tell us your hotel or area and preferred time.</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-pink-200/60 space-y-1 shadow-2xs">
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white font-bold flex items-center justify-center text-xs mb-2">04</span>
                <strong className="block text-slate-900 font-sans">Quick Arrival</strong>
                <p className="text-[11px] text-slate-500">Your companion arrives at your door in 30–45 mins.</p>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-pink-200/60 space-y-1 shadow-2xs">
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#e31777] to-[#c2185b] text-white font-bold flex items-center justify-center text-xs mb-2">05</span>
                <strong className="block text-slate-900 font-sans">Meet &amp; Settle</strong>
                <p className="text-[11px] text-slate-500">Pay directly in person when you meet. Zero stress.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SECTION (Captivating Client Stories) */}
      <TestimonialsSection />

      {/* 10. SAFETY, DISCRETION & GUEST PEACE OF MIND */}
      <section className="py-12 sm:py-14 max-w-5xl mx-auto px-4 sm:px-6 space-y-8" aria-label="Guest Peace of Mind">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
            Your Peace of Mind
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
            Your Comfort, Privacy &amp; <span className="text-[#e31777]">Trust Always Come First</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We know what matters most to our guests: real photos, reliable timing, and complete discretion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-sans font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>100% Real In-Person Photos</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every companion is personally met and verified. The charming person you select in our gallery is exactly who greets you at your door.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-sans font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Pay Only When You Meet</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Never pay a single rupee in advance. You settle the agreed amount directly with your companion only after she arrives and you feel comfortable.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-sans font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Charming &amp; Courteous Companions</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Independent, articulate ladies aged 18+ who bring genuine warmth, elegance, and positive energy to your evening.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-sans font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Complete Discretion &amp; Privacy</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your contact details are strictly confidential. We never store personal records or contact details after your appointment.
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
