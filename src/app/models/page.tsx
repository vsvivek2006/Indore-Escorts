import type { Metadata } from "next";
import { COMPANION_MODELS } from "@/data/models";
import ModelCard from "@/components/ModelCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Verified Escorts & Companions Directory | MySecretGirl69 Concierge",
  description:
    "Browse authentic, verified companion profiles in Indore. Elite social escorts for dinner dates, corporate events, and staycations in Vijay Nagar, Palasia, and luxury hotels.",
  alternates: {
    canonical: "https://mysecretgirl69.com/models"
  },
  openGraph: {
    title: "Verified Escorts & Companions Directory | MySecretGirl69 Concierge",
    description: "Browse authentic, verified companion profiles in Indore.",
    url: "https://mysecretgirl69.com/models"
  }
};

export default function ModelsDirectoryPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Indore Verified Companions Directory",
    description: "Authentic, verified independent companion profiles in Indore.",
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
      <Breadcrumbs items={[{ label: "Companion Models" }]} />

      {/* Header */}
      <div className="my-8 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] text-xs font-bold">
          <Sparkles className="w-4 h-4" />
          <span>Indore Verified Roster</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
          Browse Verified Companions in Indore
        </h1>
        <p className="text-sm sm:text-base text-[#616161] leading-relaxed">
          Browse verified independent companions available for dinner dates, business accompaniment, and luxury hotel visits across Indore.
        </p>
      </div>

      {/* Direct Coordination Pill */}
      <div className="mb-10 max-w-2xl mx-auto p-4 rounded-xl bg-pink-50 border border-pink-200 text-pink-900 text-xs sm:text-sm flex items-center justify-center gap-2 text-center shadow-xs">
        <ShieldCheck className="w-5 h-5 text-[#e31777] shrink-0" />
        <span>
          <strong>Direct Coordination:</strong> Connect directly via telephone or WhatsApp to confirm companion availability and private scheduling.
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
