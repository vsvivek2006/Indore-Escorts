import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Eye,
  Banknote,
  Hotel,
  Phone,
  AlertOctagon
} from "lucide-react";

export const metadata: Metadata = {
  title: "Client Safety & Anti-Fraud Advisory | MySecretGirl69 Indore",
  description:
    "Comprehensive guide to client safety, digital discretion, avoiding advance fee scams, cash-on-delivery protocols, and 5-star hotel compliance in Indore, MP.",
  alternates: {
    canonical: "https://mysecretgirl69.com/safety-guide"
  }
};

export default function SafetyGuidePage() {
  const safetySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://mysecretgirl69.com/safety-guide#webpage",
        url: "https://mysecretgirl69.com/safety-guide",
        name: "Client Safety & Anti-Fraud Advisory | MySecretGirl69 Indore",
        description:
          "Essential advisory on consumer protection, avoiding online escort scams, and hotel check-in safety in Indore.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://mysecretgirl69.com/#website",
          name: "MySecretGirl69 Indore",
          url: "https://mysecretgirl69.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mysecretgirl69.com/safety-guide#breadcrumb",
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
            name: "Safety Guide",
            item: "https://mysecretgirl69.com/safety-guide"
          }
        ]
      }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(safetySchema) }}
      />
      <Breadcrumbs items={[{ label: "Safety Guide" }]} />

      {/* Hero Header */}
      <div className="my-8 text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] text-xs font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>Consumer Awareness &amp; Fraud Prevention</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
          Client Safety &amp; Anti-Fraud Advisory
        </h1>
        <p className="text-sm sm:text-base text-[#616161] leading-relaxed">
          Authoritative guidelines on protecting your personal privacy, financial security, and personal safety when reserving adult companionship across Indore.
        </p>
      </div>

      <div className="space-y-10 my-10">
        {/* Core Principle: Direct Payment on Meet */}
        <section className="rounded-3xl bg-gradient-to-br from-rose-50/70 via-pink-50/50 to-amber-50/50 border border-pink-200 p-6 sm:p-10 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-[#b30000] flex items-center justify-center shrink-0">
              <AlertOctagon className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                Rule #1: Never Pay Advance Fees — Pay Directly on Meeting
              </h2>
              <span className="text-xs text-[#b30000] font-bold uppercase tracking-wider">
                Zero Financial Risk Standard
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
            The single most pervasive danger in the online escort market is the <strong>Advance Fee Scam</strong>. Unregulated classified directories and anonymous messaging channels are filled with fake operators who steal photos from fashion models and demand upfront money via UPI, Paytm, or gift cards before vanishing.
          </p>
          <div className="p-5 rounded-2xl bg-white border border-rose-200 space-y-3 text-xs sm:text-sm">
            <strong className="text-rose-900 block font-bold">
              Common Fabricated Advance Charges to Immediately Reject:
            </strong>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span><strong>&quot;Medical Registration / Health Card Clearances&quot;</strong> — Claiming mandatory government disease screenings requiring ₹1,500 to ₹3,000 deposits. Completely fraudulent.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span><strong>&quot;Driver Transit / Petrol Allowances&quot;</strong> — Demanding ₹500 to ₹1,000 for private cab dispatch before arrival. Legitimate agencies cover their own transit.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span><strong>&quot;Hotel Security &amp; Room Booking Tokens&quot;</strong> — Falsely alleging the hotel requires an advance security bond. Hotels never ask independent agencies for this.</span>
              </li>
            </ul>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
            At MySecretGirl69 Indore, <strong>you never transfer a single rupee prior to your companion&apos;s physical arrival</strong>. You inspect your companion in person, confirm mutual comfort, and settle the honorarium directly upon meeting.
          </p>
        </section>

        {/* Identity Verification Checklist */}
        <section className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-10 space-y-5 shadow-sm">
          <h2 className="text-2xl font-bold text-[#45474f] flex items-center gap-2">
            <Eye className="w-6 h-6 text-sky-600" />
            <span>How to Authenticate Real Companion Profiles</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
            Before inviting any companion to your venue, ensure you are interacting with the genuine individual rather than a cyber syndicate using downloaded stock imagery. Follow this practical 3-step verification checklist:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <div className="w-8 h-8 rounded-full bg-pink-100 text-[#e31777] font-bold text-xs flex items-center justify-center">
                1
              </div>
              <h3 className="text-sm font-bold text-gray-900">Personalized Voice Note</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Request a quick audio voice message on WhatsApp mentioning your name and the current date. Scammers using bots cannot provide this.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <div className="w-8 h-8 rounded-full bg-pink-100 text-[#e31777] font-bold text-xs flex items-center justify-center">
                2
              </div>
              <h3 className="text-sm font-bold text-gray-900">Brief Video Call</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                A 5-to-10-second live video greeting before dispatch removes 100% of catfishing doubt and confirms that real photographs match the person.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <div className="w-8 h-8 rounded-full bg-pink-100 text-[#e31777] font-bold text-xs flex items-center justify-center">
                3
              </div>
              <h3 className="text-sm font-bold text-gray-900">Local Dialect &amp; Landmarks</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Genuine Indore companions possess intimate knowledge of local sectors like Vijay Nagar, Chappan Dukan, and major hotels like Sayaji or Marriott.
              </p>
            </div>
          </div>
        </section>

        {/* Safe Meeting Venues & 5-Star Hotel Guidance */}
        <section className="rounded-3xl bg-pink-50/50 border border-pink-100 p-6 sm:p-10 space-y-5 shadow-sm">
          <h2 className="text-2xl font-bold text-[#45474f] flex items-center gap-2">
            <Hotel className="w-6 h-6 text-[#e31777]" />
            <span>Venue Safety &amp; Star-Rated Hotel Etiquette in Indore</span>
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-[#616161] leading-relaxed">
            <p>
              Your physical safety and peace of mind depend heavily on choosing recognized, well-regulated venues. We strictly recommend meeting at established star-rated hotels that follow international guest hospitality practices:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-white border border-pink-200 space-y-2">
                <strong className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Recommended 5-Star Properties
                </strong>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Sayaji Hotel (Vijay Nagar), Indore Marriott Hotel, Radisson Blu (MR-10), Sheraton Grand Palace (Bypass), and WOW Hotel provide round-the-clock security, private key-card elevators, and discrete lobby lounges.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-pink-200 space-y-2">
                <strong className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Venues to Strictly Avoid
                </strong>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Never agree to meet in obscure roadside guest houses, secluded suburban outskirts, industrial factory areas, or unverified short-stay rentals where security infrastructure is absent.
                </p>
              </div>
            </div>
            <p className="pt-2">
              For complete hospitality insights, read our editorial on <Link href="/blog/top-luxury-hotels-indore" className="text-[#e31777] font-bold hover:underline">Top 5-Star Hotels &amp; Visitor Etiquette in Indore</Link>.
            </p>
          </div>
        </section>

        {/* Digital Privacy & Communication Hygiene */}
        <section className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-10 space-y-4 shadow-sm">
          <h2 className="text-2xl font-bold text-[#45474f] flex items-center gap-2">
            <Lock className="w-6 h-6 text-emerald-600" />
            <span>Digital Privacy &amp; Operational Hygiene</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
            Maintaining total personal anonymity is essential when coordinating adult appointments. Follow these essential digital hygiene protocols:
          </p>
          <ul className="space-y-3 text-xs sm:text-sm text-[#616161]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span><strong>Use Secondary Messaging Channels:</strong> Utilize private WhatsApp chat windows with auto-deleting or disappearing message timers enabled to protect your communication trail.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span><strong>Withhold Sensitive Personal Credentials:</strong> Never disclose your corporate email, official workplace designation, financial account details, or permanent residential address.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <span><strong>Strict No-Photography &amp; Recording Policy:</strong> Unauthorized photography, audio capturing, or video recordings during social appointments are strictly prohibited by law and professional ethics. Mutual discretion must be maintained at all times.</span>
            </li>
          </ul>
        </section>

        {/* Local Assistance Box */}
        <section className="p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-gray-700 leading-relaxed">
            <strong>Encountered a suspicious contact or advance fee demand?</strong> Report it immediately to our central coordination desk. We actively maintain a registry of flagged fraudulent numbers across Indore. Browse our <Link href="/models" className="text-[#e31777] font-semibold hover:underline">Verified Models</Link> or connect with our <Link href="/contact" className="text-[#e31777] font-semibold hover:underline">24/7 Concierge Hotline</Link>.
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-[#e31777] text-white font-bold transition shrink-0 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contact Desk</span>
          </Link>
        </section>
      </div>
    </div>
  );
}
