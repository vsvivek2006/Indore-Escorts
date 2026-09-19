import type { Metadata } from "next";
import { COMPANION_MODELS } from "@/data/models";
import ModelCard from "@/components/ModelCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Verified Escorts & Call Girls Directory | MySecretGirl69 Concierge",
  description:
    "Browse 20+ verified call girls & companion profiles in Indore. Elite models for dinner dates, business travel, and luxury stays. 100% real photos.",
  alternates: {
    canonical: "https://mysecretgirl69.com/models"
  },
  openGraph: {
    title: "Verified Escorts & Call Girls Directory | MySecretGirl69 Concierge",
    description: "Browse authentic, verified call girl & escort profiles in Indore.",
    url: "https://mysecretgirl69.com/models",
    images: [
      {
        url: "https://mysecretgirl69.com/images/hero_banner.jpg",
        width: 1200,
        height: 630,
        alt: "Verified Escorts & Call Girls Directory Indore"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Verified Escorts & Call Girls Directory | MySecretGirl69 Concierge",
    description: "Browse authentic, verified call girl & escort profiles in Indore.",
    images: ["https://mysecretgirl69.com/images/hero_banner.jpg"]
  }
};

export default function ModelsDirectoryPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Indore Verified Escorts Directory",
    description: "Authentic, verified independent call girl profiles in Indore.",
    numberOfItems: COMPANION_MODELS.length,
    itemListElement: COMPANION_MODELS.map((model, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: model.name,
      url: `https://mysecretgirl69.com/models/${model.id}`,
      image: `https://mysecretgirl69.com${model.image}`
    }))
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Breadcrumbs items={[{ label: "Escort Models" }]} />

      {/* Header */}
      <div className="my-8 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] text-xs font-bold">
          <Sparkles className="w-4 h-4" />
          <span>Indore Verified Roster</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
          Browse Verified Escorts & Call Girls in Indore
        </h1>
        <p className="text-sm sm:text-base text-[#616161] leading-relaxed">
          Look for authentic and genuine escorts to accompany you on an evening date, business dates or luxury hotel stays in Indore.
        </p>
      </div>

      {/* Direct Coordination Pill */}
      <div className="mb-10 max-w-2xl mx-auto p-4 rounded-xl bg-pink-50 border border-pink-200 text-pink-900 text-xs sm:text-sm flex items-center justify-center gap-2 text-center shadow-xs">
        <ShieldCheck className="w-5 h-5 text-[#e31777] shrink-0" />
        <span>
          <strong>Direct Coordination:</strong> Talk directly by telephone or WhatsApp with the escort for the availability and private scheduling.
        </span>
      </div>

      {/* Models Grid: 2 columns on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {COMPANION_MODELS.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}
