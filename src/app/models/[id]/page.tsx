import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { COMPANION_MODELS, getModelById } from "@/data/models";
import { INDORE_LOCATIONS } from "@/data/locations";
import Breadcrumbs from "@/components/Breadcrumbs";
import ModelCard from "@/components/ModelCard";
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  MapPin,
  Sparkles,
  Heart,
  Globe,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  Banknote,
  Clock,
  ArrowRight,
  Wine,
  Briefcase,
  Compass,
  Hotel
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return COMPANION_MODELS.map((model) => ({
    id: model.id
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const model = getModelById(id);

  if (!model) {
    return { title: "Profile Not Found" };
  }

  return {
    title: `${model.name} (${model.category}) | Indore Escorts & Companion Profile`,
    description: `${model.name}, ${model.age} yrs. Verified social companion & elite escort in Indore. Serving ${model.locationsServed.join(", ")} for luxury stays, corporate dinners & VIP appointments.`,
    alternates: {
      canonical: `https://mysecretgirl69.com/models/${model.id}`
    },
    openGraph: {
      title: `${model.name} (${model.category}) | MySecretGirl69 Indore`,
      description: model.bio,
      url: `https://mysecretgirl69.com/models/${model.id}`,
      images: [
        {
          url: model.image,
          width: 800,
          height: 1067,
          alt: `${model.name} in Indore`
        }
      ]
    }
  };
}

export default async function ModelProfilePage({ params }: PageProps) {
  const { id } = await params;
  const model = getModelById(id);

  if (!model) {
    notFound();
  }

  // Other verified companions for cross-linking
  const otherModels = COMPANION_MODELS.filter((m) => m.id !== model.id).slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hello MySecretGirl69 Indore, I am interested in coordinating an appointment with ${model.name} (${model.category}) in Indore.`
  );

  // Helper to find location slug for clickable badges
  const findLocSlug = (locName: string) => {
    const clean = locName.toLowerCase().replace(/[^a-z0-9]/g, "");
    const match = INDORE_LOCATIONS.find((loc) =>
      clean.includes(loc.slug.replace(/[^a-z0-9]/g, "")) ||
      loc.name.toLowerCase().includes(locName.toLowerCase()) ||
      locName.toLowerCase().includes(loc.name.toLowerCase())
    );
    return match ? `/locations/${match.slug}` : `/locations`;
  };

  const modelSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `https://mysecretgirl69.com/models/${model.id}#person`,
        name: model.name,
        image: `https://mysecretgirl69.com${model.image}`,
        description: model.bio,
        jobTitle: model.category,
        worksFor: {
          "@type": "Organization",
          name: "MySecretGirl69 Indore",
          url: "https://mysecretgirl69.com"
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Indore",
          addressRegion: "Madhya Pradesh",
          addressCountry: "IN"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://mysecretgirl69.com/models/${model.id}#breadcrumb`,
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
            name: "Companion Models",
            item: "https://mysecretgirl69.com/models"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: model.name,
            item: `https://mysecretgirl69.com/models/${model.id}`
          }
        ]
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(modelSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Models", href: "/models" },
          { label: model.name }
        ]}
      />

      <div className="my-8 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Portrait */}
        <div className="md:col-span-5 space-y-4">
          <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl">
            <Image
              src={model.image}
              alt={`${model.name} - Verified Escort & Companion in Indore`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                <ShieldCheck className="w-4 h-4" />
                Verified Active
              </span>
              <span className="px-3 py-1 rounded-full bg-[#e31777] text-white text-xs font-bold shadow-lg">
                {model.category}
              </span>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-3 shadow-sm">
            <h3 className="text-sm font-bold text-[#45474f] flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-[#e31777]" />
              <span>Direct Booking with {model.name}</span>
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              <a
                href={`https://wa.me/${model.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Coordinate via WhatsApp</span>
              </a>
              <a
                href={`tel:${model.phone}`}
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-[#e31777] hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call Central Desk (+91 90062 36133)</span>
              </a>
            </div>
            <p className="text-[11px] text-gray-500 text-center pt-1">
              Zero advance deposit required • Direct In-Person Payment
            </p>
          </div>

          {/* Booking Attributes Box */}
          <div className="p-5 rounded-2xl bg-pink-50/60 border border-pink-100 space-y-3 text-xs">
            <span className="font-bold text-[#45474f] block text-sm">
              Companion Quick Facts
            </span>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between py-1 border-b border-pink-100">
                <span className="text-gray-500">Service Basis:</span>
                <span className="font-bold">In-call &amp; Out-call</span>
              </div>
              <div className="flex justify-between py-1 border-b border-pink-100">
                <span className="text-gray-500">Dispatch Time:</span>
                <span className="font-bold text-emerald-700">30–45 Mins</span>
              </div>
              <div className="flex justify-between py-1 border-b border-pink-100">
                <span className="text-gray-500">Payment Mode:</span>
                <span className="font-bold text-[#b30000]">Direct on Meet</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-500">Verification:</span>
                <span className="font-bold text-emerald-700">100% Genuine Photos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Specifications */}
        <div className="md:col-span-7 space-y-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-pink-100 text-[#e31777] text-xs font-bold">
                {model.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium">
                {model.availability}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                Available Today
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#45474f] tracking-tight">
              {model.name} - Indore Companion Profile
            </h1>
            <p className="text-sm text-[#616161] mt-1">
              Age: <strong className="text-gray-900">{model.age} Years</strong> • Height: <strong className="text-gray-900">{model.height}</strong> • Based in <strong className="text-gray-900">Indore, Madhya Pradesh</strong>
            </p>
          </div>

          {/* Bio */}
          <div className="rounded-2xl bg-white border border-gray-200 p-6 space-y-3 shadow-sm">
            <h2 className="text-base font-bold text-[#45474f] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#e31777]" />
              <span>About {model.name}</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              {model.bio}
            </p>
          </div>

          {/* Key Attributes Table */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-sky-600" />
                Languages Spoken
              </span>
              <p className="text-sm font-bold text-gray-900">
                {model.languages.join(", ")}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 text-[#e31777]" />
                Interests &amp; Hobbies
              </span>
              <p className="text-sm font-bold text-gray-900 truncate">
                {model.interests.slice(0, 2).join(", ")}
              </p>
            </div>
          </div>

          {/* Locality Coverage with Clickable Internal Backlinks */}
          <div className="p-5 rounded-2xl bg-white border border-gray-200 space-y-3 shadow-sm">
            <h3 className="text-sm font-bold text-[#45474f] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#e31777]" />
              <span>Preferred Indore Meeting Locations &amp; Sectors</span>
            </h3>
            <p className="text-xs text-gray-500">
              Click on any sector below to browse local hotel venues, transit logistics, and locality details:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {model.locationsServed.map((loc, idx) => (
                <Link
                  key={idx}
                  href={findLocSlug(loc)}
                  className="px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-[#e31777] border border-pink-200 hover:border-[#e31777] text-[#e31777] hover:text-white text-xs font-semibold transition group flex items-center gap-1"
                >
                  <span>{loc}</span>
                  <ArrowRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Personality Traits */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Personality &amp; Social Charm:
            </span>
            <div className="flex flex-wrap gap-2">
              {model.personalityTraits.map((trait, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] text-xs font-semibold flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>{trait}</span>
                </span>
              ))}
            </div>
          </div>

          {/* In-depth Persona, Social Etiquette & Dining Accompaniment Guide */}
          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 space-y-3 shadow-sm text-xs sm:text-sm text-[#616161] leading-relaxed">
            <h3 className="text-base font-bold text-[#45474f] flex items-center gap-2">
              <Wine className="w-4 h-4 text-[#e31777]" />
              <span>Social Presence &amp; Executive Accompaniment Etiquette</span>
            </h3>
            <p>
              When coordinating time with {model.name}, you are engaging a companion who prides herself on conversational poise, emotional nuance, and impeccable dress sense. Whether accompanying you to high-profile executive gatherings, trade dinners at the Brilliant Convention Centre, or an intimate dinner date at Sayaji Hotel or Indore Marriott, {model.name} understands how to conduct herself with quiet grace that elevates your social stature.
            </p>
            <p>
              She speaks fluent {model.languages.join(" and ")}, allowing effortless conversation across contemporary culture, business trends, travel, and personal passions. Clients frequently comment on her warm, unhurried demeanor that makes even the most stressful business trips feel relaxing and revitalizing.
            </p>
          </div>

          {/* Hotel Accompaniment & Discreet In-Room Appointments */}
          <div className="rounded-2xl bg-white border border-gray-200 p-6 space-y-3 shadow-sm text-xs sm:text-sm text-[#616161] leading-relaxed">
            <h3 className="text-base font-bold text-[#45474f] flex items-center gap-2">
              <Hotel className="w-4 h-4 text-amber-500" />
              <span>Luxury Hotel Stays &amp; In-Room Discretion</span>
            </h3>
            <p>
              {model.name} frequently attends private hotel bookings across Indore&apos;s leading hospitality properties, including Radisson Blu, Indore Marriott, Sheraton Grand Palace, and WOW Hotel. Her arrival is always completely discreet—arriving in smart, contemporary evening attire via private air-conditioned cab without drawing unwanted lobby attention.
            </p>
            <p>
              To explore recommended five-star properties with friendly visitor policies and discreet elevator security, check our dedicated <Link href="/blog/top-luxury-hotels-indore" className="text-[#e31777] font-semibold hover:underline">Indore Luxury Hotel &amp; Suite Guide</Link>.
            </p>
          </div>

          {/* Zero Advance & Direct Payment Protocol */}
          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 shadow-xs">
            <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
              <Banknote className="w-4 h-4 text-emerald-700" />
              <span>Direct In-Person Payment Assurance</span>
            </div>
            <p className="leading-relaxed">
              We uphold strict consumer protection standards. You are <strong>never asked to pay advance registration fees</strong>, security deposits, or cab allowances before meeting {model.name}. All financial settlements occur directly between you and {model.name} upon her verified arrival in person. For full details on avoiding cyber scams, please review our <Link href="/safety-guide" className="text-emerald-800 font-bold underline">Safety &amp; Anti-Fraud Advisory</Link>.
            </p>
          </div>

          {/* Tailored Services You Can Book with this Model */}
          <div className="rounded-2xl bg-white border border-gray-200 p-6 space-y-4 shadow-sm">
            <h3 className="text-base font-bold text-[#45474f] flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#e31777]" />
              <span>Services Available with {model.name}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link
                href="/services/dinner-dates"
                className="p-3.5 rounded-xl bg-pink-50/50 hover:bg-pink-100/70 border border-pink-200 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="block text-gray-900 group-hover:text-[#e31777]">
                    Romantic &amp; Business Dinners
                  </strong>
                  <span className="text-gray-500">Fine dining &amp; rooftop lounge dates</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#e31777] shrink-0" />
              </Link>

              <Link
                href="/services/corporate-events"
                className="p-3.5 rounded-xl bg-pink-50/50 hover:bg-pink-100/70 border border-pink-200 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="block text-gray-900 group-hover:text-[#e31777]">
                    Corporate Accompaniment
                  </strong>
                  <span className="text-gray-500">Expos, summits &amp; business dinners</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#e31777] shrink-0" />
              </Link>

              <Link
                href="/services/weekend-getaways"
                className="p-3.5 rounded-xl bg-pink-50/50 hover:bg-pink-100/70 border border-pink-200 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="block text-gray-900 group-hover:text-[#e31777]">
                    Weekend Holiday Escapes
                  </strong>
                  <span className="text-gray-500">Mandu, Ujjain &amp; resort retreats</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#e31777] shrink-0" />
              </Link>

              <Link
                href="/services/vip-concierge"
                className="p-3.5 rounded-xl bg-pink-50/50 hover:bg-pink-100/70 border border-pink-200 transition flex items-center justify-between group"
              >
                <div>
                  <strong className="block text-gray-900 group-hover:text-[#e31777]">
                    VIP 24/7 Concierge
                  </strong>
                  <span className="text-gray-500">Overnight stays &amp; priority scheduling</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#e31777] shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Cross-Link Section: Other Verified Companions in Indore */}
      <section className="my-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
              Browse More Profiles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#45474f] tracking-tight mt-1">
              Other Verified Companions in Indore
            </h2>
            <p className="text-xs sm:text-sm text-[#616161] mt-1">
              Explore independent models and hostesses available for immediate booking across Indore sectors.
            </p>
          </div>
          <Link
            href="/models"
            className="text-xs font-bold text-[#e31777] hover:underline transition flex items-center gap-1"
          >
            <span>View All 20 Profiles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherModels.map((m) => (
            <ModelCard key={m.id} model={m} />
          ))}
        </div>
      </section>

      {/* Interlink Footer Card */}
      <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="text-gray-700 leading-relaxed">
          <strong>Need assistance choosing the ideal companion?</strong> Our booking coordinator provides personalized recommendations based on your preferences, schedule, and meeting location. Visit our <Link href="/about" className="text-[#e31777] font-semibold hover:underline">About Us</Link> page, or contact our <Link href="/contact" className="text-[#e31777] font-semibold hover:underline">24/7 Concierge Desk</Link>.
        </div>
        <a
          href={`https://wa.me/${model.whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold transition shrink-0 flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Book {model.name} Now</span>
        </a>
      </div>
    </div>
  );
}
