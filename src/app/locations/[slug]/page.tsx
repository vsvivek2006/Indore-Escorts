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
  Briefcase
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
    `Hello MySecretGirl69 Indore, I am inquiring about companion bookings in ${location.name}, Indore.`
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Breadcrumbs
        items={[
          { label: "Indore Locations", href: "/locations" },
          { label: location.name }
        ]}
      />

      {/* Hero Header Box with Soft Blush Gradient */}
      <div className="my-6 rounded-3xl bg-gradient-to-r from-[#ffeeee]/90 via-[#fff5f8] to-[#f9e8ff]/90 border border-pink-200 p-6 sm:p-10 shadow-sm">
        <div className="max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="px-3 py-1 rounded-full bg-pink-100 border border-pink-300 text-[#e31777] uppercase tracking-wider font-bold">
              {location.zone}
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-mono">
              PIN {location.pincode}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center gap-1 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Local Coverage
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-[#b30000] flex items-center gap-1 font-bold">
              <Banknote className="w-3.5 h-3.5" />
              100% Cash on Delivery
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
            {location.name} Escorts &amp; Companions in Indore
          </h1>

          <p className="text-base sm:text-lg text-[#e31777] font-bold">
            {location.tagline}
          </p>

          <p className="text-xs sm:text-sm text-[#616161] leading-relaxed pt-1">
            {location.introduction}
          </p>

          {/* Quick Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <a
              href="tel:+919006236133"
              className="py-3 px-6 rounded-xl bg-gradient-to-r from-[#b30000] to-[#ff2b2b] hover:from-[#c40000] hover:to-[#ff4545] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
            >
              <Phone className="w-4 h-4" />
              <span>Call Local Desk (+91 90062 36133)</span>
            </a>

            <a
              href={`https://wa.me/919006236133?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Coordinator</span>
            </a>

            <Link
              href="/safety-guide"
              className="py-3 px-5 rounded-xl bg-white border border-gray-300 hover:border-[#e31777] text-gray-700 hover:text-[#e31777] font-semibold text-xs sm:text-sm flex items-center gap-2 transition"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Safety &amp; Anti-Fraud Guide</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Grid: Transit & Area Context */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {/* Transit & Access */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6 space-y-4 shadow-sm">
          <h2 className="text-lg font-bold text-[#45474f] flex items-center gap-2">
            <Navigation className="w-5 h-5 text-sky-600" />
            <span>Transit &amp; Accessibility Information</span>
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-[#616161]">
            <div>
              <span className="font-bold text-gray-900 block mb-1">Access Routes &amp; Transit:</span>
              <p className="leading-relaxed">{location.accessInformation}</p>
            </div>
            <div className="pt-2 border-t border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">Nearby Neighborhoods:</span>
              <div className="flex flex-wrap gap-1.5">
                {location.nearbyAreas.map((area, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Landmarks & Recommended Hotels */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6 space-y-4 shadow-sm">
          <h2 className="text-lg font-bold text-[#45474f] flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-500" />
            <span>Key Landmarks &amp; Recommended Venues</span>
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-[#616161]">
            <div>
              <span className="font-bold text-gray-900 block">Prominent Landmarks:</span>
              <ul className="mt-1 space-y-1 text-xs">
                {location.keyLandmarks.map((lm, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e31777]"></span>
                    <span>{lm}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-2 border-t border-gray-100">
              <span className="font-bold text-gray-900 block">Recommended Hotel Venues:</span>
              <ul className="mt-1 space-y-1 text-xs">
                {location.luxuryHotelsNearby.map((hotel, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <Hotel className="w-3.5 h-3.5 text-[#e31777] shrink-0" />
                    <span className="font-medium text-gray-800">{hotel}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Local Narrative & Lifestyle Guide */}
      <section className="my-10 space-y-6">
        <div className="rounded-3xl bg-pink-50/50 border border-pink-100 p-6 sm:p-10 space-y-4 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#45474f] flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-[#e31777]" />
            <span>Elite Companionship &amp; Social Lifestyle in {location.name}</span>
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-[#616161] leading-relaxed">
            <p>
              {location.localContext} As one of Indore&apos;s most sought-after urban districts, {location.name} seamlessly combines rapid commercial growth with sophisticated leisure opportunities. Whether you are an out-of-town corporate executive attending a high-stakes summit, an entrepreneur resting after long boardroom deliberations, or a discerning traveler seeking cultural enrichment, having an elegant, well-spoken social companion transforms your stay into an unforgettable experience.
            </p>
            <p>
              Our verified independent companions in {location.name} are celebrated for their natural elegance, refined conversational etiquette, and intuitive emotional intelligence. They comfortably accompany gentlemen to upscale rooftop lounges, executive business dinners, social galas, or provide restful, private company in luxury suites. Every companion listed in this sector is verified through physical meetings, photo cross-validation, and strict discretion adherence, ensuring that what you view on our roster is authentic in real life.
            </p>
          </div>
        </div>

        {/* 5-Star Hotel Etiquette & Accommodation Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-3 shadow-sm">
            <h3 className="text-lg font-bold text-[#45474f] flex items-center gap-2">
              <Hotel className="w-5 h-5 text-[#e31777]" />
              <span>5-Star Hotel Accompaniment Guide in {location.name}</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              When hosting an elite companion at premier hospitality establishments near {location.name}—including renowned venues such as {location.luxuryHotelsNearby.slice(0, 3).join(", ")}—guest discretion is effortless. Five-star hotels in Indore operate under professional global hospitality standards, featuring private key-card elevators, discrete lobby lounges, and valet privacy.
            </p>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              We recommend arranging your companion&apos;s arrival directly to your room or meeting for an aperitif at the property&apos;s lobby cafe. For full insights on guest check-ins, visitor policies, and top suites, consult our curated <Link href="/blog/top-luxury-hotels-indore" className="text-[#e31777] font-semibold hover:underline">Indore Luxury Hotel &amp; Suite Guide</Link>.
            </p>
          </div>

          {/* Cash on Delivery (COD) & Zero-Advance Policy */}
          <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-3 shadow-sm">
            <h3 className="text-lg font-bold text-[#45474f] flex items-center gap-2">
              <Banknote className="w-5 h-5 text-emerald-600" />
              <span>100% Cash on Delivery &amp; Zero Advance Assurance</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              In an industry frequently targeted by fraudulent operators demanding upfront UPI payments or fabricated &quot;hotel registration charges,&quot; our directory operates on an uncompromising <strong>100% Cash on Delivery (COD)</strong> basis in {location.name}.
            </p>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              You never transfer advance deposits, security fees, or taxi allowances to unverified handles. You only settle the agreed honorarium directly with your chosen companion in person upon meeting at your designated venue. Read our comprehensive <Link href="/safety-guide" className="text-[#e31777] font-semibold hover:underline">Client Safety &amp; Anti-Scam Advisory</Link> to ensure your complete financial and personal peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Available Companions in this Locality */}
      <section className="my-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
              Active Roster in {location.name}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#45474f] tracking-tight mt-1">
              Verified Escorts &amp; Companions in {location.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#616161] mt-1">
              Hand-screened independent models, corporate hostesses, and college companions available for immediate booking.
            </p>
          </div>
          <Link
            href="/models"
            className="text-xs font-bold text-[#e31777] hover:underline transition flex items-center gap-1"
          >
            <span>View All Indore Companions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {localModels.length > 0 ? (
            localModels.map((model) => <ModelCard key={model.id} model={model} />)
          ) : (
            COMPANION_MODELS.slice(0, 4).map((model) => (
              <ModelCard key={model.id} model={model} />
            ))
          )}
        </div>
      </section>

      {/* Specialized Services Available in this Locality */}
      <section className="my-14 rounded-3xl bg-gray-50 border border-gray-200 p-6 sm:p-10 space-y-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
            Tailored Experiences
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#45474f] tracking-tight mt-1">
            Bespoke Companionship Services in {location.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#616161] mt-2 leading-relaxed">
            Every encounter is custom tailored to align with your personal preferences, schedule, and social setting. Choose from our signature service offerings:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/services/dinner-dates"
            className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#e31777] hover:shadow-md transition group"
          >
            <Wine className="w-6 h-6 text-[#e31777] mb-2" />
            <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#e31777] transition">
              Luxury Dinner Dates
            </h4>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Fine dining companionship at top rooftop restaurants and private hotel bistros across {location.name}.
            </p>
          </Link>

          <Link
            href="/services/corporate-events"
            className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#e31777] hover:shadow-md transition group"
          >
            <Briefcase className="w-6 h-6 text-sky-600 mb-2" />
            <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#e31777] transition">
              Corporate &amp; Business Events
            </h4>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Cultured, articulate accompaniment for summits, trade expos, and executive dinners.
            </p>
          </Link>

          <Link
            href="/services/weekend-getaways"
            className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#e31777] hover:shadow-md transition group"
          >
            <Compass className="w-6 h-6 text-emerald-600 mb-2" />
            <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#e31777] transition">
              Weekend Getaways
            </h4>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Relaxing holiday retreats to Mandu, Ujjain, or luxurious resorts around Indore.
            </p>
          </Link>

          <Link
            href="/services/vip-concierge"
            className="p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#e31777] hover:shadow-md transition group"
          >
            <Sparkles className="w-6 h-6 text-amber-500 mb-2" />
            <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#e31777] transition">
              VIP 24/7 Concierge
            </h4>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Round-the-clock priority dispatch, celebrity-grade discretion, and multi-day bookings.
            </p>
          </Link>
        </div>
      </section>

      {/* Step-by-Step Booking Logistics in this Locality */}
      <section className="my-14 rounded-3xl bg-gradient-to-br from-pink-50/70 via-white to-purple-50/70 border border-pink-200 p-6 sm:p-10 space-y-6">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
            Effortless Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#45474f] tracking-tight mt-1">
            How to Book a Companion in {location.name}, Indore
          </h2>
          <p className="text-xs sm:text-sm text-[#616161] mt-2 leading-relaxed">
            Arranging an appointment in {location.name} takes less than five minutes through our private concierge desk. Follow our simple four-step reservation protocol:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-2">
            <span className="w-7 h-7 rounded-full bg-pink-100 text-[#e31777] font-bold text-xs flex items-center justify-center">
              1
            </span>
            <h4 className="text-sm font-bold text-gray-900">Select Profile</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Explore our verified companion roster and choose your preferred profile based on photos, languages, and personality.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-2">
            <span className="w-7 h-7 rounded-full bg-pink-100 text-[#e31777] font-bold text-xs flex items-center justify-center">
              2
            </span>
            <h4 className="text-sm font-bold text-gray-900">Share Venue Details</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Message our coordinator on WhatsApp with your location in {location.name}, preferred hotel/residence, and appointment timing.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-2">
            <span className="w-7 h-7 rounded-full bg-pink-100 text-[#e31777] font-bold text-xs flex items-center justify-center">
              3
            </span>
            <h4 className="text-sm font-bold text-gray-900">Rapid Dispatch</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our central desk coordinates private executive cab transit, reaching your {location.name} venue within 30 to 45 minutes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-xs space-y-2">
            <span className="w-7 h-7 rounded-full bg-pink-100 text-[#e31777] font-bold text-xs flex items-center justify-center">
              4
            </span>
            <h4 className="text-sm font-bold text-gray-900">Meet &amp; Pay COD</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Meet your companion in person, verify mutual comfort, and complete the honorarium via Cash on Delivery with zero stress.
            </p>
          </div>
        </div>
      </section>

      {/* Location Specific FAQs */}
      <section className="my-14">
        <FaqAccordion
          faqs={[
            ...location.faqs,
            {
              question: `Is advance payment mandatory for companion bookings in ${location.name}?`,
              answer: `No. We never ask for advance booking deposits, card clearances, or UPI transfers. You pay directly via Cash on Delivery only after your companion arrives at your venue in ${location.name}.`
            },
            {
              question: `Which hotels in ${location.name} allow private companion visits?`,
              answer: `Reputed 4-star and 5-star hotels in and around ${location.name} (such as ${location.luxuryHotelsNearby.slice(0, 2).join(" and ")}) have professional guest policies. Simply register accompanying guests as required by standard hotel compliance.`
            }
          ]}
          title={`${location.name} Escorts & Companions FAQs`}
          subtitle={`Verified answers regarding scheduling, transit, hotel guidelines, and discretion in ${location.name}, Indore.`}
        />
      </section>

      {/* Nearby Locations Internal Linking Matrix */}
      <section className="my-12 rounded-2xl bg-gray-50 border border-gray-200 p-6 sm:p-8">
        <h3 className="text-base font-bold text-[#45474f] mb-4 flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#e31777]" />
          <span>Explore Related Indore Locations &amp; Neighboring Sectors</span>
        </h3>
        <p className="text-xs text-[#616161] mb-4">
          Looking for companion coverage in adjoining neighborhoods or other major commercial corridors in Indore? Browse our verified local hubs:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {location.relatedLocations.map((relSlug) => {
            const relLoc = getLocationBySlug(relSlug);
            if (!relLoc) return null;
            return (
              <Link
                key={relSlug}
                href={`/locations/${relSlug}`}
                className="p-3 rounded-xl bg-white hover:bg-pink-50 border border-gray-200 hover:border-[#e31777] transition flex items-center justify-between group shadow-xs"
              >
                <span className="text-xs font-bold text-gray-700 group-hover:text-[#e31777] transition truncate">
                  {relLoc.name}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#e31777] shrink-0 transition" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Site Interlink Footer Box */}
      <div className="p-6 rounded-2xl bg-pink-50/50 border border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="text-gray-700">
          <strong>Questions regarding booking in {location.name}?</strong> Read our{" "}
          <Link href="/about" className="text-[#e31777] font-semibold hover:underline">About Us</Link>, check{" "}
          <Link href="/blog/nightlife-cafes-indore" className="text-[#e31777] font-semibold hover:underline">Nightlife &amp; Dining Spots</Link>, or connect with our{" "}
          <Link href="/contact" className="text-[#e31777] font-semibold hover:underline">24/7 Concierge</Link>.
        </div>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-xl bg-[#e31777] hover:bg-[#c2185b] text-white font-bold transition shrink-0"
        >
          Contact Coordinator
        </Link>
      </div>
    </div>
  );
}
