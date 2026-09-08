import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { INDORE_LOCATIONS, getLocationBySlug } from "@/data/locations";
import { COMPANION_MODELS } from "@/data/models";
import Breadcrumbs from "@/components/Breadcrumbs";
import ModelCard from "@/components/ModelCard";
import FaqAccordion from "@/components/FaqAccordion";
import {
  MapPin,
  Navigation,
  Building2,
  Hotel,
  ShieldCheck,
  Phone,
  MessageCircle,
  Compass,
  Sparkles,
  ArrowRight,
  Banknote,
  Wine,
  Briefcase,
  Check,
  Clock,
  HeartHandshake
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDORE_LOCATIONS.map((loc) => ({
    slug: loc.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found"
    };
  }

  return {
    title: location.title,
    description: location.metaDescription,
    alternates: {
      canonical: `https://mysecretgirl69.com/locations/${location.slug}`
    },
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      url: `https://mysecretgirl69.com/locations/${location.slug}`,
      siteName: "MySecretGirl69 Indore",
      images: [
        {
          url: "/images/hero_banner.jpg",
          width: 1200,
          height: 675,
          alt: `${location.name} Indore Escorts & Companions`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: location.title,
      description: location.metaDescription,
      images: ["/images/hero_banner.jpg"]
    }
  };
}

export default async function LocationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  // Filter models serving or associated with this location
  const localModels = COMPANION_MODELS.filter(
    (m) =>
      location.featuredModelIds.includes(m.id) ||
      m.locationsServed.some((l) =>
        location.name.toLowerCase().includes(l.toLowerCase())
      )
  );

  const whatsappMessage = encodeURIComponent(
    `Hello MySecretGirl69, I'm interested in arranging a companion in ${location.name}, Indore.`
  );

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": `https://mysecretgirl69.com/locations/${location.slug}#place`,
        name: `${location.name}, Indore`,
        description: location.metaDescription,
        address: {
          "@type": "PostalAddress",
          streetAddress: location.name,
          addressLocality: "Indore",
          addressRegion: "Madhya Pradesh",
          postalCode: location.pincode,
          addressCountry: "IN"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://mysecretgirl69.com/locations/${location.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mysecretgirl69.com"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Indore Locations",
            item: "https://mysecretgirl69.com/locations"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: location.name,
            item: `https://mysecretgirl69.com/locations/${location.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://mysecretgirl69.com/locations/${location.slug}#faq`,
        mainEntity: location.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="w-full bg-white text-[#1c1c1c] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* 1. EDGE-TO-EDGE DARK LUXURY HERO HEADER */}
      <section className="relative bg-[#0b172d] text-white py-12 sm:py-16 border-b border-pink-950/40 overflow-hidden">
        {/* Subtle luminous background ambient glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#e31777]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#c2185b]/15 blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          {/* Clean light breadcrumbs */}
          <div className="opacity-90">
            <Breadcrumbs
              items={[
                { label: "Indore Locations", href: "/locations" },
                { label: location.name }
              ]}
            />
          </div>

          {/* Badges strip */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold pt-1">
            <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-pink-300 uppercase tracking-wider font-bold">
              {location.zone}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 font-mono">
              PIN {location.pincode}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center gap-1 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Local Roster
            </span>
            <span className="px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-200 flex items-center gap-1 font-bold">
              <Banknote className="w-3.5 h-3.5 text-pink-400" />
              Direct Payment on Meet
            </span>
          </div>

          {/* Heading in Pacifico Cursive */}
          <div className="space-y-2 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading text-white tracking-wide leading-tight">
              {location.name} Escorts &amp; Companions in Indore
            </h1>
            <p className="text-lg sm:text-xl text-pink-300 font-bold font-sans">
              {location.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl pt-1">
              {location.introduction}
            </p>
          </div>

          {/* Quick Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="tel:+919006236133"
              className="py-3 px-6 rounded-full bg-gradient-to-r from-[#b30000] to-[#ff2b2b] hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition animate-pulse-subtle"
            >
              <Phone className="w-4 h-4" />
              <span>Call Coordinator: +91 90062 36133</span>
            </a>

            <a
              href={`https://wa.me/919006236133?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Coordinator</span>
            </a>

            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs text-white/80">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>30–45 Min In-Room Arrival in {location.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WIDE EDITORIAL CANVAS (No Box Cages, Clean Magazine-Style Flow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14">
          {/* Main Article Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Story 1: Atmosphere & Companionship */}
            <article className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
                  Local Experience
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
                  Refined Companionship in <span className="text-[#e31777]">{location.name}</span>
                </h2>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {location.localContext} As one of Indore&apos;s most prominent districts, {location.name} is known for upscale lifestyle, fine dining, and prime hospitality. Whether you are in town for an important business conference, unwinding after a busy schedule, or simply looking for warm and intelligent company, our verified independent companions bring natural grace and cheerful conversation to your evening.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                Every companion listed in {location.name} is hand-screened in person. You will enjoy genuine warmth, articulate conversation, and effortless elegance whether you are sharing dinner at an upscale restaurant, socializing at an executive gathering, or enjoying unhurried relaxation in your hotel suite.
              </p>
            </article>

            {/* Story 2: Recommended Venues & 5-Star Hotel Guide */}
            <article className="space-y-5 pt-4 border-t border-slate-100">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
                  Where to Meet
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
                  Recommended Hotels &amp; Venues Near <span className="text-[#e31777]">{location.name}</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Enjoy complete privacy, discreet check-ins, and 24/7 room service at these premier hospitality addresses:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {location.luxuryHotelsNearby.map((hotel, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 via-rose-50/20 to-slate-50 border border-slate-200/80 flex items-start gap-3.5 hover:border-[#e31777] transition-all hover:shadow-xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-pink-100 text-[#e31777] flex items-center justify-center shrink-0">
                      <Hotel className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 font-sans">{hotel}</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Discreet guest check-in &bull; 24/7 In-room service</p>
                    </div>
                  </div>
                ))}
              </div>

              {location.keyLandmarks.length > 0 && (
                <div className="p-4 rounded-2xl bg-white border border-slate-200/70 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 font-sans">
                    <Building2 className="w-4 h-4 text-[#e31777]" />
                    <span>Prominent Landmarks Around {location.name}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {location.keyLandmarks.map((lm, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {lm}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Story 3: Transit & 30-Minute Dispatch */}
            <article className="space-y-4 pt-4 border-t border-slate-100">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
                  Fast &amp; Punctual
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
                  Swift 30 to 45-Minute Dispatch to Your Door
                </h2>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                {location.accessInformation} Our central coordination desk manages private executive cab transit to all hotels and residential addresses in {location.name}. Once you confirm your preferred companion and hotel details, your companion will arrive directly at your room within 30 to 45 minutes.
              </p>
            </article>

            {/* Story 4: Customer Trust & Zero Advance Policy */}
            <article className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-pink-50 via-rose-50/50 to-pink-50 border border-pink-200 space-y-3">
              <div className="flex items-center gap-2 text-[#e31777]">
                <HeartHandshake className="w-6 h-6" />
                <h3 className="text-base sm:text-lg font-bold font-sans text-slate-900">
                  Our Guest Assurance: Zero Advance &amp; Direct Payment
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                We believe in straightforward, honest service. You never transfer advance fees, booking charges, or online deposits. You only pay the agreed amount in person directly to your companion when she arrives at your venue and you are completely satisfied.
              </p>
            </article>
          </div>

          {/* Sticky Concierge Sidebar (4 Cols) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Concierge Action Card */}
              <div className="rounded-3xl bg-gradient-to-b from-[#0b172d] via-[#111f3d] to-[#0b172d] text-white p-6 sm:p-7 shadow-xl border border-pink-900/40 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-300 text-[11px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Instant Booking Concierge</span>
                  </div>
                  <h3 className="text-xl font-bold font-sans text-white">
                    Book in {location.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Connect directly with our friendly coordinator. Fast dispatch to your hotel suite with zero advance required.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="tel:+919006236133"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#e31777] to-[#c2185b] hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Desk: +91 90062 36133</span>
                  </a>

                  <a
                    href={`https://wa.me/919006236133?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Coordinator</span>
                  </a>
                </div>

                {/* 4-Step Quick Reservation */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Quick 4-Step Reservation
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                      <span>1. Choose companion from verified photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                      <span>2. Message hotel venue in {location.name}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                      <span>3. Swift arrival in 30–45 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                      <span>4. Direct in-person payment on meeting</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 text-center">
                  <Link
                    href="/safety-guide"
                    className="text-[11px] text-pink-300 hover:text-white transition underline"
                  >
                    Read Our Client Safety &amp; Anti-Scam Guide &rarr;
                  </Link>
                </div>
              </div>

              {/* Transit & Zone Box */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 font-sans">
                  <Navigation className="w-3.5 h-3.5 text-[#e31777]" />
                  <span>Nearby Sectors &amp; Hubs</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {location.nearbyAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* 3. FULL-WIDTH VERIFIED COMPANION ROSTER */}
      <section className="w-full bg-gradient-to-b from-slate-50 via-rose-50/20 to-white py-12 sm:py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
                Available Tonight
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
                Verified Companions in <span className="text-[#e31777]">{location.name}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                100% genuine photos. Available for out-call hotel visits and dinner dates.
              </p>
            </div>
            <Link
              href="/models"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#e31777] to-[#c2185b] py-2.5 px-5 rounded-full shadow-md hover:brightness-110 transition shrink-0"
            >
              <span>View Full 20 Models Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(localModels.length > 0 ? localModels : COMPANION_MODELS.slice(0, 4)).map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. BESPOKE EXPERIENCES STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
            Tailored Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
            Tailored Experiences in <span className="text-[#e31777]">{location.name}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Personalized to fit your timing, preferred venue, and desire for genuine company.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link
            href="/services/dinner-dates"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#e31777] hover:shadow-lg transition-all group space-y-2"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#e31777] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Wine className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#e31777] transition font-sans">
              Luxury Dinner Dates
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fine dining and rooftop lounge dates at top restaurants across {location.name}.
            </p>
          </Link>

          <Link
            href="/services/corporate-events"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#e31777] hover:shadow-lg transition-all group space-y-2"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#e31777] transition font-sans">
              Corporate &amp; Business Events
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cultured, articulate accompaniment for business expos and networking dinners.
            </p>
          </Link>

          <Link
            href="/services/weekend-getaways"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#e31777] hover:shadow-lg transition-all group space-y-2"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#e31777] transition font-sans">
              Weekend Staycations
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Relaxing resort getaways and peaceful weekend retreats around Indore and Mandu.
            </p>
          </Link>

          <Link
            href="/services/vip-concierge"
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#e31777] hover:shadow-lg transition-all group space-y-2"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-[#e31777] transition font-sans">
              VIP 24/7 Concierge
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Round-the-clock priority dispatch, multi-day bookings, and total discretion.
            </p>
          </Link>
        </div>
      </section>

      {/* 5. LOCATION SPECIFIC FAQS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <FaqAccordion
          faqs={[
            ...location.faqs,
            {
              question: `Is advance payment required for bookings in ${location.name}?`,
              answer: `No. We never ask for advance booking deposits or UPI transfers. You settle the agreed amount directly with your companion only upon her arrival at your venue in ${location.name}.`
            },
            {
              question: `How fast can a companion reach my hotel in ${location.name}?`,
              answer: `Our companions typically arrive within 30 to 45 minutes of booking confirmation at any luxury hotel or suite in ${location.name}.`
            }
          ]}
          title={`${location.name} Companionship FAQs`}
          subtitle={`Clear answers regarding hotel visits, arrival timings, and direct payment in ${location.name}, Indore.`}
        />
      </section>

      {/* 6. NEIGHBORING LOCATIONS DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-3xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 p-6 sm:p-8 space-y-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 font-sans">
              <Compass className="w-4 h-4 text-[#e31777]" />
              <span>Explore Neighboring Indore Sectors</span>
            </h3>
            <p className="text-xs text-slate-600">
              We also provide verified companion services across all surrounding corridors and hubs:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-2">
            {location.relatedLocations.map((relSlug) => {
              const relLoc = getLocationBySlug(relSlug);
              if (!relLoc) return null;
              return (
                <Link
                  key={relSlug}
                  href={`/locations/${relSlug}`}
                  className="p-3 rounded-xl bg-white hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 border border-slate-200 hover:border-[#e31777] text-slate-700 hover:text-[#e31777] font-medium text-xs transition-all flex items-center justify-between shadow-2xs hover:shadow-xs group font-sans"
                >
                  <span className="truncate">{relLoc.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#e31777] shrink-0 transition" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
