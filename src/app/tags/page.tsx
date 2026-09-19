import type { Metadata } from "next";
import Link from "next/link";
import { TAG_KEYWORDS_DATA } from "@/data/tags";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Tag,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Phone,
  MessageCircle,
  FolderKanban
} from "lucide-react";

export const metadata: Metadata = {
  title: "Indore Escort Service Tags & Keyword Directory | MySecretGirl69",
  description:
    "Comprehensive directory of all 46 verified companion search tags, hotel outcall services, VIP escorts, and independent call girls across Indore. 100% cash on arrival.",
  alternates: {
    canonical: "https://mysecretgirl69.com/tags"
  },
  openGraph: {
    title: "Indore Escort Service Tags Directory | MySecretGirl69",
    description:
      "Explore all 46 verified companion search categories, hotel visits, and verified escort services in Indore.",
    url: "https://mysecretgirl69.com/tags",
    siteName: "MySecretGirl69 Indore"
  }
};

export default function TagsIndexPage() {
  // Group tags by category
  const categories = Array.from(new Set(TAG_KEYWORDS_DATA.map((t) => t.category)));

  const whatsappMessage = encodeURIComponent(
    "Hello MySecretGirl69, I am browsing your Indore escort tag directory. Can you share today's verified portfolio?"
  );

  return (
    <main className="min-h-screen bg-[#0d0914] text-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <Breadcrumbs items={[{ label: "Tags Directory" }]} />
      </div>

      {/* Hero */}
      <section className="relative py-12 md:py-16 text-center border-b border-[#2d1b4e]/40">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e31777]/10 border border-[#e31777]/30 text-[#e31777] text-xs font-semibold uppercase tracking-wider mb-4">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>SEO & Service Index</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Indore Escorts & Companionship Directory
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Browse our complete directory of 46 dedicated service categories, local search tags, and verified hotel outcall guides tailored for guests across Indore.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/919006236133?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:scale-105 transition"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Concierge</span>
            </a>
            <a
              href="tel:+919006236133"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e31777] text-white font-bold text-sm hover:scale-105 transition"
            >
              <Phone className="w-4 h-4" />
              <span>Call: +91 90062 36133</span>
            </a>
          </div>
        </div>
      </section>

      {/* Categories & Tags List */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {categories.map((cat) => {
            const tagsInCat = TAG_KEYWORDS_DATA.filter((t) => t.category === cat);
            return (
              <div key={cat} className="bg-[#150d24] border border-[#2d1b4e] rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2.5 text-[#e31777] font-bold text-lg sm:text-xl mb-2">
                  <Sparkles className="w-5 h-5" />
                  <h2>{cat} ({tagsInCat.length} Categories)</h2>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mb-6">
                  Verified listings and local outcall arrangements under {cat}.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tagsInCat.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/tags/${item.slug}`}
                      className="group p-4 rounded-xl bg-[#1c1230] border border-[#2d1b4e]/80 hover:border-[#e31777] hover:bg-[#23153d] transition flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-sm font-bold text-white group-hover:text-[#e31777] transition flex items-center gap-1.5">
                            <Tag className="w-3.5 h-3.5 text-[#e31777]" />
                            {item.kw}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-xs text-[#e31777] font-semibold pt-2 border-t border-[#2d1b4e]/40">
                        <span>Read Dedicated Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Safety Banner */}
      <section className="py-10 bg-[#120a1f] border-t border-[#2d1b4e]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex p-3 rounded-full bg-[#e31777]/10 text-[#e31777] mb-3">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            The Golden Rule of Booking in Indore
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Never pay any advance money via QR codes, medical card scams, or transit fees. Genuine Indore escorts visit your hotel suite first and accept cash only after mutual greeting.
          </p>
        </div>
      </section>
    </main>
  );
}
