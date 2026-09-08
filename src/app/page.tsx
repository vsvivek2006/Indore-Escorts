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
  BookOpen,
  Crown,
  Building,
  Heart,
  Users,
  Hotel
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

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const localServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MySecretGirl69 Indore",
    image: "https://mysecretgirl69.com/images/hero_banner.jpg",
    telephone: "+91-9006236133",
    url: "https://mysecretgirl69.com",
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
    },
    priceRange: "₹₹₹"
  };

  return (
    <div className="flex flex-col w-full text-slate-900 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
      />

      {/* 1. HERO BANNER SECTION (Godelhiescort Style) */}
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
          <h1 className="hero-main-title">
            Hot Call Girls in Indore Escorts Service Free Hotel Delivery
          </h1>

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
        </div>
      </section>

      {/* 2. PREMIER ESCORTS SERVICE (4 Highlight Boxes - Godelhiescort .about-sec-new) */}
      <section className="py-16 bg-white border-b border-slate-200/80" aria-label="Premier Escorts Overview">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <span className="px-3 py-1 rounded-full bg-[#e31777] text-white text-[11px] font-bold uppercase tracking-wider">
                      Verified Elite Escort
                    </span>
                    <h3 className="text-xl font-bold font-heading">Aarohi Sharma, 23</h3>
                    <p className="text-xs text-slate-300">Vijay Nagar &bull; Sayaji Luxury Suites</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Narrative & 4 Stat Boxes */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#e31777] bg-pink-50 border border-pink-200 px-3.5 py-1 rounded-full">
                  Premier Escorts Service
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 leading-tight">
                  Unforgettable Experiences with Elite <span className="text-[#e31777]">Call Girls in Indore</span>
                </h2>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Welcome to the leading <strong>escorts service in Indore</strong> in the commercial capital of Madhya Pradesh, where elegance, charm, and complete discretion blend into moments that linger in your memory. We are committed to providing you with the most outstanding companionship—a refined mix of class and thrill tailored to satisfy your personal preferences.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Whether you desire an articulate date for corporate conventions at the <strong>Brilliant Convention Centre</strong>, a romantic dinner at <strong>Mediterra (Sayaji)</strong> or <strong>Radisson Blu</strong>, or an intimate private suite rendezvous along the <strong>Indore Bypass</strong>, our high-profile <Link href="/models" className="text-[#e31777] font-bold underline">Indore call girls</Link> ensure an unforgettable stay. Affordability, reliability, and 100% genuine satisfaction are our highest priorities.
              </p>

              {/* 4 Feature Boxes (Godelhiescort .about-new-box Style) */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="about-new-box p-4 rounded-xl bg-[#e31777] text-white text-center border-l-4 border-r-4 border-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">100%</h3>
                  <span className="text-xs sm:text-sm font-normal text-white/95 block mt-0.5">Privacy &amp; Discretion</span>
                </div>

                <div className="about-new-box p-4 rounded-xl bg-[#e31777] text-white text-center border-l-4 border-r-4 border-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">No Fake</h3>
                  <span className="text-xs sm:text-sm font-normal text-white/95 block mt-0.5">Profiles &amp; Real Photos</span>
                </div>

                <div className="about-new-box p-4 rounded-xl bg-[#e31777] text-white text-center border-l-4 border-r-4 border-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">48 Zones</h3>
                  <span className="text-xs sm:text-sm font-normal text-white/95 block mt-0.5">Best Indore Areas</span>
                </div>

                <div className="about-new-box p-4 rounded-xl bg-[#e31777] text-white text-center border-l-4 border-r-4 border-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">5,000+</h3>
                  <span className="text-xs sm:text-sm font-normal text-white/95 block mt-0.5">Satisfied Guests</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAST PHONE CALL STRIP (Godelhiescort .phone-no-sec) */}
      <section className="py-8 bg-gradient-to-r from-[#b30000] via-[#e31777] to-[#b30000] text-center px-4 shadow-lg text-white">
        <div className="max-w-3xl mx-auto space-y-2">
          <p className="text-sm font-extrabold tracking-wide uppercase text-amber-200">
            So hurry up and get in touch with us now!!!
          </p>
          <div>
            <a
              href="tel:+919006236133"
              className="inline-flex items-center gap-3 py-3 px-8 rounded-full bg-white text-[#b30000] hover:text-[#e31777] font-black text-xl sm:text-2xl shadow-xl hover:scale-105 transition-all"
            >
              <Phone className="w-6 h-6 fill-[#b30000]" />
              <span>+91 90062 36133</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. DISCOVER THE ALLURE OF INDORE (Godelhiescort .socialDate-con style) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
                  Cleanest &amp; Most Dynamic Commercial Capital
                </span>
                <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900">
                  Discover the Allure of <span className="text-[#e31777]">Call Girls in Indore</span>
                </h2>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Indore is a fascinating metropolis celebrating royal Holkar heritage, world-renowned street food at <strong>Sarafa Bazaar</strong> and <strong>56 Dukan</strong>, and a booming automobile and IT corridor. The city offers the ultimate romantic backdrop for unforgettable experiences with our independent companions.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Local Areas &amp; Experience:</strong> Our <Link href="/models" className="text-[#e31777] font-bold underline">Indore call girls</Link> cater to the cosmopolitan crowd in <strong>Vijay Nagar</strong>, Scheme 54, and the elite residential avenues of <strong>Palasia &amp; New Palasia</strong>. For corporate executives staying near the <strong>Super Corridor IT Corridor</strong> or guests enjoying five-star luxury suites on <strong>MR-10</strong>, our companions provide a discreet, well-spoken, and sensual presence that guarantees complete privacy.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e31777]" />
                  <span><strong>Cosmopolitan Standard:</strong> Educated and articulate models fluent in English and Hindi for executive dinners.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e31777]" />
                  <span><strong>Resort &amp; Suite Luxury:</strong> Private, secure companions available at Sheraton Grand Palace and luxury retreats along the Indore Bypass.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e31777]" />
                  <span><strong>Fast 30-45 Minute Dispatch:</strong> Real-time coordination across all 48 Indore sectors with zero delay.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 aspect-[4/3]">
                <Image
                  src="/images/model_natasha.jpg"
                  alt="Indore Call Girls Luxury Suite Companion"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEMBER PROFILES GALLERY (Expanded from 8 to 20 Profiles) */}
      <section id="curated-profiles" className="py-16 bg-white border-b border-slate-200/80 w-full" aria-label="Curated Profiles Gallery">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e31777] bg-pink-50 border border-pink-200 px-3.5 py-1 rounded-full">
              Exclusive 2026 Portfolio
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Browse Charming <span className="text-[#e31777]">Indore Call Girls</span> – Select from Our Exclusive Profiles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Hand-picked independent companions available for hotel visits, corporate conventions, dinner dates, and social appointments across Indore.
            </p>
          </div>

          {/* 20 Profiles Grid: 2 columns on mobile, 4 columns on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {COMPANION_MODELS.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>

          <div className="text-center pt-10">
            <Link
              href="/models"
              className="inline-flex items-center gap-2 py-3.5 px-8 rounded-full bg-[#e31777] text-white hover:bg-[#c2185b] font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all"
            >
              <span>Explore All Verified Companion Profiles &amp; Rates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SEDUCTIVE ESCORT SERVICES TAILORED TO YOUR DESIRES */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center sm:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
              Tailored Companionship
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Seductive Escort Services in Indore Tailored to Your Desires
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            Our <strong>Indore call girl services</strong> are designed to ignite your senses and fulfill your personal desires. We offer a wide array of options, each crafted to provide a thrilling, sensual, and unforgettable experience that leaves you completely refreshed:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* In-Call & Out-Call */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#e31777] flex items-center justify-center font-bold">
                <Hotel className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-slate-900">
                In-Call &amp; Out-Call Delivery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Out-Call Passion:</strong> Prefer a private rendezvous at your chosen hotel or residence? Our call girls can visit your suite in Vijay Nagar, Palasia, or the Indore Bypass, bringing irresistible charm directly to your doorstep within 30 to 45 minutes.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>In-Call Indulgence:</strong> Step into a discreet, peaceful, and clean setting arranged for your comfort, ensuring total relaxation and confidentiality.
              </p>
            </div>

            {/* Customized Encounters */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#e31777] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-slate-900">
                Sensual Customized Encounters
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li>
                  <strong>Romantic Intimacy:</strong> Candlelit dinners at Mediterra, rooftop cocktails at Sky Blue Sports Lounge, or late-night culinary strolls through Sarafa Bazaar.
                </li>
                <li>
                  <strong>Corporate Allure:</strong> Turn heads at business galas, symposiums, and networking events with an articulate, polished companion.
                </li>
                <li>
                  <strong>Sensual Stress Relief:</strong> Unwind after strenuous corporate travel with gentle, attentive companionship that eases all fatigue.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOTEL BOOKING GUIDE (Godelhiescort Feature) */}
      <section className="py-16 bg-white border-b border-slate-200/80" aria-label="Hotel Booking Guide">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
              Indore Hospitality Scene
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Booking a Hotel for Your Encounter in Indore
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To make your experience with our <strong>Indore escorts</strong> seamless, we guide you through choosing the perfect hotel setting across the city.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-heading font-bold text-slate-900 text-base">1. Luxury 5-Star Hotels</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Opt for <strong>Sayaji Hotel</strong>, <strong>Radisson Blu</strong>, <strong>Indore Marriott</strong>, or <strong>Sheraton Grand Palace</strong>. These properties offer discreet check-in, spacious luxury suites, and 24/7 in-room dining.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-heading font-bold text-slate-900 text-base">2. Boutique Hotels</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For a more intimate vibe, boutique properties in <strong>Vijay Nagar</strong>, <strong>New Palasia</strong>, and near <strong>MR-10</strong> offer cozy, quiet rooms ideal for unhurried evenings.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-heading font-bold text-slate-900 text-base">3. Budget-Friendly Stays</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If affordability is key, trusted 3-star business hotels near <strong>Indore Junction</strong>, <strong>Bhawarkuan</strong>, and <strong>Airport Road</strong> maintain clean comfort and privacy on a modest budget.
              </p>
            </div>
          </div>

          {/* 5-Step Arrangement Process */}
          <div className="rounded-3xl bg-pink-50/50 border border-pink-100 p-6 sm:p-8 space-y-4">
            <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900">
              How to Book in 5 Easy Steps:
            </h3>
            <ol className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-xs sm:text-sm text-slate-700">
              <li className="p-3 bg-white rounded-xl border border-pink-200/60 space-y-1">
                <span className="font-bold text-[#e31777] block text-sm">Step 01</span>
                <strong>Explore Profiles:</strong> Browse our gallery of 20 verified models.
              </li>
              <li className="p-3 bg-white rounded-xl border border-pink-200/60 space-y-1">
                <span className="font-bold text-[#e31777] block text-sm">Step 02</span>
                <strong>Contact Concierge:</strong> WhatsApp or call us at +91 90062 36133.
              </li>
              <li className="p-3 bg-white rounded-xl border border-pink-200/60 space-y-1">
                <span className="font-bold text-[#e31777] block text-sm">Step 03</span>
                <strong>Share Venue:</strong> Inform your hotel name &amp; preferred timing.
              </li>
              <li className="p-3 bg-white rounded-xl border border-pink-200/60 space-y-1">
                <span className="font-bold text-[#e31777] block text-sm">Step 04</span>
                <strong>Swift Arrival:</strong> Companion arrives at your room in 30–45 mins.
              </li>
              <li className="p-3 bg-white rounded-xl border border-pink-200/60 space-y-1">
                <span className="font-bold text-[#e31777] block text-sm">Step 05</span>
                <strong>Meet &amp; Settle Directly:</strong> Direct in-person payment, total satisfaction.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* 8. TEMPTING PRICING & PACKAGES */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="text-center sm:text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
              Honest &amp; Transparent Rates
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Tempting Pricing for Every Desire in Indore
            </h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            We believe companionship should be accessible without compromising safety, beauty, or service quality. Our pricing is 100% transparent with zero hidden advance charges:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#e31777] uppercase tracking-wider block">Short Rendezvous</span>
              <h3 className="text-xl font-bold font-heading text-slate-900">Standard Seduction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Affordable rates for quick 2-hour encounters and relaxed hotel dates with charming college and independent models.
              </p>
              <div className="pt-2 text-xs font-bold text-slate-800">
                &bull; Direct Hotel Dispatch &bull; Direct Payment on Meet
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-[#e31777] shadow-md space-y-3 relative">
              <span className="absolute -top-3 right-4 bg-[#e31777] text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase">
                Most Popular
              </span>
              <span className="text-xs font-bold text-[#e31777] uppercase tracking-wider block">Dinner &amp; Evening</span>
              <h3 className="text-xl font-bold font-heading text-slate-900">VIP Elite Passion</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unrushed evening companionship for corporate gala dinners, lounge dates, and convention networking in Vijay Nagar.
              </p>
              <div className="pt-2 text-xs font-bold text-[#e31777]">
                &bull; Articulate &bull; Fluent English &bull; Elegant Attire
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3">
              <span className="text-xs font-bold text-[#e31777] uppercase tracking-wider block">Full Night Stay</span>
              <h3 className="text-xl font-bold font-heading text-slate-900">Overnight Luxury</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete overnight companionship for luxury suites at Sayaji, Radisson Blu, and farmhouse resort staycations on the Bypass.
              </p>
              <div className="pt-2 text-xs font-bold text-slate-800">
                &bull; 10-12 Hours &bull; Total Discretion &bull; Unrushed Intimacy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS SECTION (Captivating Client Stories) */}
      <TestimonialsSection />

      {/* 10. SULTRY SAFETY, HYGIENE & ETHICAL STANDARDS */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
            Trust &amp; Ethics
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900">
            Sultry Safety and Ethical Standards
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            At our escort directory, we prioritize your pleasure, safety, and complete peace of mind:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Confirmed Real Temptresses</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every companion is thoroughly verified in person. What you see in our photo gallery is exactly who arrives at your suite.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Safe In-Person Transactions</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We arrange direct payments upon meeting your companion, safeguarding you against deceptive advance payment scams.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Consensual &amp; Adult Autonomy</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We foster mutual courtesy and respect. All independent models listed on our platform are 18+ consenting adults participating freely.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-heading font-bold text-slate-900 text-base flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Absolute Cleanliness &amp; Privacy</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Companions maintain pristine hygiene standards. We never record personal phone numbers or share information with third parties.
            </p>
          </div>
        </div>
      </section>

      {/* 11. 48 INDORE LOCALITIES MATRIX */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80 w-full" aria-label="48 Indore Localities Matrix">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e31777] bg-pink-50 border border-pink-200 px-3.5 py-1 rounded-full">
              <Compass className="w-3.5 h-3.5" />
              <span>Complete City Index</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900">
              Companion Directory Across All 48 Localities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Click any locality to view detailed area guides, hotel venues, transit access, and local companion availability.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-xs">
            {INDORE_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="p-3 rounded-xl bg-white hover:bg-pink-50 border border-slate-200 hover:border-[#e31777] text-slate-700 hover:text-[#e31777] font-bold transition-all text-center truncate shadow-xs hover:shadow-md hover:-translate-y-0.5 min-h-[46px] flex items-center justify-center"
              >
                {loc.name}
              </Link>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#e31777] hover:text-[#c2185b] transition py-3 px-8 rounded-full bg-pink-50 border border-pink-200 hover:shadow-md"
            >
              <span>Explore Interactive Locality Hub with Regional Filters</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. FAQS SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 w-full">
        <FaqAccordion
          faqs={homeFaqs}
          title="Frequently Asked Questions"
          subtitle="Clear answers regarding companion arrangements, flexible in-person payment, hotel visits, and privacy in Indore."
        />
      </section>
    </div>
  );
}
