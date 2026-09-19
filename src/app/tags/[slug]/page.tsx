import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TAG_KEYWORDS_DATA, getTagBySlug } from "@/data/tags";
import { COMPANION_MODELS } from "@/data/models";
import { INDORE_LOCATIONS } from "@/data/locations";
import Breadcrumbs from "@/components/Breadcrumbs";
import ModelCard from "@/components/ModelCard";
import FaqAccordion from "@/components/FaqAccordion";
import {
  ShieldCheck,
  Phone,
  MessageCircle,
  Sparkles,
  MapPin,
  Clock,
  Banknote,
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
  Tag
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TAG_KEYWORDS_DATA.map((item) => ({
    slug: item.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTagBySlug(slug);

  if (!tag) {
    return {
      title: "Tag Not Found | MySecretGirl69 Indore"
    };
  }

  return {
    title: tag.title,
    description: tag.desc,
    alternates: {
      canonical: `https://mysecretgirl69.com/tags/${tag.slug}`
    },
    openGraph: {
      title: tag.title,
      description: tag.desc,
      url: `https://mysecretgirl69.com/tags/${tag.slug}`,
      siteName: "MySecretGirl69 Indore",
      images: [
        {
          url: "/images/hero_banner.jpg",
          width: 1200,
          height: 675,
          alt: `${tag.kw} - Indore Escorts & Call Girls`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: tag.title,
      description: tag.desc,
      images: ["/images/hero_banner.jpg"]
    }
  };
}

export default async function TagDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tag = getTagBySlug(slug);

  if (!tag) {
    notFound();
  }

  // Filter suggested models or fallback to top 3 models
  const suggestedModels = COMPANION_MODELS.filter((m) =>
    tag.suggestedModelIds.includes(m.id)
  );
  const displayModels = suggestedModels.length > 0 ? suggestedModels : COMPANION_MODELS.slice(0, 3);

  // Filter related locations
  const relatedLocations = INDORE_LOCATIONS.filter((loc) =>
    tag.relatedLocalitySlugs.includes(loc.slug)
  );

  // Related sibling tags in same category or others
  const relatedTags = TAG_KEYWORDS_DATA.filter(
    (t) => t.slug !== tag.slug && (t.category === tag.category || Math.random() > 0.5)
  ).slice(0, 8);

  const whatsappMessage = encodeURIComponent(
    `Hello MySecretGirl69, I saw your page for "${tag.kw}" in Indore. Please share available verified profiles for tonight.`
  );

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: tag.title,
    description: tag.desc,
    url: `https://mysecretgirl69.com/tags/${tag.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "MySecretGirl69 Indore",
      url: "https://mysecretgirl69.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />


      <main className="min-h-screen bg-[#0d0914] text-white">
        {/* Breadcrumb container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <Breadcrumbs
            items={[
              { label: "Tags Directory", href: "/tags" },
              { label: tag.kw }
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-16 border-b border-[#2d1b4e]/40">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f2e]/60 via-[#0d0914] to-[#0d0914] pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e31777]/10 border border-[#e31777]/30 text-[#e31777] text-xs font-semibold uppercase tracking-wider mb-6">
              <Tag className="w-3.5 h-3.5" />
              <span>{tag.category}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {tag.h1}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              {tag.desc}
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/919006236133?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1ebe57] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#25D366]/20 hover:scale-105 transition transform"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp Booking</span>
              </a>
              <a
                href="tel:+919006236133"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#e31777] to-[#b01058] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#e31777]/20 hover:scale-105 transition transform"
              >
                <Phone className="w-5 h-5" />
                <span>Call Concierge: +91 90062 36133</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 max-w-3xl mx-auto text-left">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#1a0f2e]/80 border border-[#2d1b4e]/60">
                <ShieldCheck className="w-5 h-5 text-[#e31777] flex-shrink-0" />
                <span className="text-xs font-medium text-gray-200">100% Cash On Arrival</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#1a0f2e]/80 border border-[#2d1b4e]/60">
                <Banknote className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <span className="text-xs font-medium text-gray-200">Zero Advance Fraud</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#1a0f2e]/80 border border-[#2d1b4e]/60">
                <Clock className="w-5 h-5 text-[#f59e0b] flex-shrink-0" />
                <span className="text-xs font-medium text-gray-200">30-45 Min Outcall</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#1a0f2e]/80 border border-[#2d1b4e]/60">
                <HeartHandshake className="w-5 h-5 text-[#a855f7] flex-shrink-0" />
                <span className="text-xs font-medium text-gray-200">Discreet & Polite</span>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative & Human Story Content */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#150d24] border border-[#2d1b4e] rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center gap-2.5 text-[#e31777] font-semibold text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Indore Local Experience & Verification</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Authentic Insights on {tag.kw}
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
              <p>{tag.introParagraph1}</p>
              <p>{tag.introParagraph2}</p>
            </div>

            {/* Practical Advice Alert */}
            <div className="mt-8 p-5 rounded-xl bg-amber-500/10 border border-amber-500/30">
              <h3 className="text-amber-400 font-bold text-sm sm:text-base flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5" />
                Safety Rule: No Advance Payments in Indore
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {tag.practicalTips}
              </p>
            </div>

            {/* Features Checklist */}
            <div className="mt-8">
              <h3 className="text-base font-bold text-white mb-4">
                What Sets Our Arrangements Apart
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {tag.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[#1c1230] border border-[#2d1b4e]/80 text-sm text-gray-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#e31777] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Available Models Grid */}
        <section className="py-12 bg-[#120a1f]/60 border-y border-[#2d1b4e]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e31777]/10 text-[#e31777] text-xs font-semibold uppercase tracking-wider mb-3">
                <span>Direct Outcall Companion Profiles</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Featured Companions Ready for {tag.kw}
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                Genuine photo-verified models available for hotel visits and private bookings across Indore.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {displayModels.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/models"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1f1338] border border-[#e31777]/40 text-white font-semibold text-sm hover:bg-[#e31777] transition"
              >
                <span>View All 20+ Verified Indore Companions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Outcall Localities */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              Popular Indore Hotel Areas for Outcall Service
            </h2>
            <p className="text-sm text-gray-400">
              Direct dispatch within 30 to 45 minutes to star hotels and guest residences in these prime zones.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {relatedLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group p-4 rounded-xl bg-[#150d24] border border-[#2d1b4e] hover:border-[#e31777] transition block"
              >
                <div className="flex items-center gap-2 text-white font-semibold text-sm group-hover:text-[#e31777] transition">
                  <MapPin className="w-4 h-4 text-[#e31777]" />
                  <span>{loc.name}</span>
                </div>
                <div className="text-xs text-gray-400 mt-1 line-clamp-1">
                  {loc.tagline}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Frequently Asked Questions: {tag.kw}
            </h2>
            <p className="text-sm text-gray-400">
              Clear answers regarding verified outcalls, pricing, safety checks, and private room visits.
            </p>
          </div>

          <div className="bg-[#150d24] border border-[#2d1b4e] rounded-2xl p-6 shadow-xl">
            <FaqAccordion faqs={tag.faqs} />
          </div>
        </section>

        {/* Related Keyword Hub Links */}
        <section className="py-12 bg-[#120a1f]/40 border-t border-[#2d1b4e]/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">
                Related Indore Escort Searches & Guides
              </h3>
              <Link
                href="/tags"
                className="text-xs text-[#e31777] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Browse All 46 Tags</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {relatedTags.map((rTag) => (
                <Link
                  key={rTag.slug}
                  href={`/tags/${rTag.slug}`}
                  className="px-3 py-1.5 rounded-lg bg-[#1a0f2e] border border-[#2d1b4e] hover:border-[#e31777] text-xs text-gray-300 hover:text-white transition"
                >
                  {rTag.kw}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Booking Banner */}
        <section className="py-12 bg-gradient-to-r from-[#1c0f33] via-[#2d1345] to-[#1c0f33] border-t border-[#e31777]/30 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Book an Unhurried Companion in Indore?
            </h2>
            <p className="text-sm text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
              Connect with our discreet local concierge desk. 100% genuine photos, zero advance fraud, and direct suite visits to all Indore star hotels.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/919006236133?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-lg shadow-[#25D366]/20 hover:scale-105 transition"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
              <a
                href="tel:+919006236133"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#e31777] text-white font-bold text-sm shadow-lg shadow-[#e31777]/20 hover:scale-105 transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 90062 36133</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
