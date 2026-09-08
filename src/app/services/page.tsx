import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Sparkles, ArrowRight, Star, Hotel, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Indore Companion Services | Dinner Dates, Corporate Escorts & VIP Concierge",
  description:
    "Explore tailored companionship services in Indore. Professional social companions for candlelit dinners, corporate business travel, and luxury staycations.",
  alternates: {
    canonical: "https://mysecretgirl69.com/services"
  }
};

export default function ServicesHubPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Indore Companion & Concierge Services",
    description: "Tailored companionship and executive concierge services across Indore.",
    numberOfItems: SERVICES_DATA.length,
    itemListElement: SERVICES_DATA.map((srv, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: srv.title,
      url: `https://mysecretgirl69.com/services/${srv.slug}`
    }))
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Breadcrumbs items={[{ label: "Services" }]} />

      {/* Header */}
      <div className="my-8 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] text-xs font-bold">
          <Sparkles className="w-4 h-4" />
          <span>Tailored Social Engagements</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
          Companionship &amp; Concierge Services in Indore
        </h1>
        <p className="text-sm sm:text-base text-[#616161] leading-relaxed">
          From high-profile business galas at the Brilliant Convention Centre to romantic culinary tours across Vijay Nagar, our companions provide unmatched poise, charm, and confidentiality.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.slug}
            className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 flex flex-col justify-between hover:border-[#e31777] transition-all duration-300 shadow-sm hover:shadow-xl group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-50 border border-pink-200 text-[#e31777] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#45474f] group-hover:text-[#e31777] transition mb-3">
                {service.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#616161] leading-relaxed mb-6">
                {service.fullDescription}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#e31777]">
                  Key Service Highlights:
                </span>
                <ul className="space-y-1.5 text-xs text-[#616161]">
                  {service.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <Star className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Venues */}
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5 mb-6">
                <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                  <Hotel className="w-4 h-4 text-[#e31777]" />
                  Recommended Indore Venues:
                </span>
                <p className="text-xs text-[#616161]">
                  {service.idealVenuesInIndore.slice(0, 2).join(" • ")}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Discreet &amp; Confidential
              </span>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#e31777] group-hover:text-[#c41164] transition"
              >
                <span>Read Full Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
