import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  Lock,
  Banknote,
  Users,
  Compass,
  ArrowRight,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | MySecretGirl69 Indore & Concierge Directory",
  description:
    "About MySecretGirl69 Indore. Our founding mission, ethical screening standards, client privacy, cash-on-arrival guarantee, and responsible companionship.",
  alternates: {
    canonical: "https://mysecretgirl69.com/about"
  }
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://mysecretgirl69.com/about#webpage",
        url: "https://mysecretgirl69.com/about",
        name: "About MySecretGirl69 Indore",
        description:
          "Founding vision, ethical verification, client confidentiality, and companionship standards in Indore.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://mysecretgirl69.com/#website",
          name: "MySecretGirl69 Indore",
          url: "https://mysecretgirl69.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mysecretgirl69.com/about#breadcrumb",
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
            name: "About Us",
            item: "https://mysecretgirl69.com/about"
          }
        ]
      }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Breadcrumbs items={[{ label: "About Us" }]} />

      {/* Hero Header */}
      <div className="my-8 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] text-xs font-bold">
          <Sparkles className="w-4 h-4" />
          <span>Our Vision, Ethics &amp; Heritage</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
          About MySecretGirl69 Indore
        </h1>
        <p className="text-sm sm:text-base text-[#616161] leading-relaxed">
          Elevating adult companionship in central India through transparent standards, genuine identity verification, uncompromising client privacy, and direct in-person payment assurance.
        </p>
      </div>

      <div className="space-y-10 my-10">
        {/* Section 1: Who We Are & Founding Mission */}
        <section className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-10 space-y-4 shadow-sm">
          <h2 className="text-2xl font-bold text-[#45474f] flex items-center gap-2">
            <HeartHandshake className="w-6 h-6 text-[#e31777]" />
            <span>Redefining Sophisticated Companionship in Madhya Pradesh</span>
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-[#616161] leading-relaxed">
            <p>
              Indore has come a long way to become a commercial hub of central India and it has seen the rise of a ton of online unmoderated classifieds for stolen pictures and advance payment scams. MySecretGirl69 Indore was established to help ensure that people looking for companions get verified, educated and refined companions from Indore and with cash settlement in person.
            </p>
            <p>
              We are a high quality directory designed to match discerning clients with independent, educated, and polished female companions who take pride in their conversational poise, social etiquette, and genuine charm. All appointments are strictly private, respectful, and safe.
            </p>
          </div>
        </section>

        {/* Section 2: Core Operating Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-3 shadow-sm">
            <ShieldCheck className="w-7 h-7 text-emerald-600" />
            <h3 className="text-lg font-bold text-[#45474f]">100% Face-to-Face Verified Profiles</h3>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              We don&apos;t want to see catfish and phony photos. All companions featured on our website are verified in person with actual picture audits. You are greeted by the model you choose from our directory, which is the same model you will have in your venue.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-3 shadow-sm">
            <Banknote className="w-7 h-7 text-emerald-700" />
            <h3 className="text-lg font-bold text-[#45474f]">Direct In-Person Settlement (Zero Advance)</h3>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              We do not request pre-payment of UPI transfers, bank deposits, or &quot;registration fees.&quot; All monetary honors are done in person, after you have been confirmed in comfort by your companion.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-3 shadow-sm">
            <Lock className="w-7 h-7 text-[#e31777]" />
            <h3 className="text-lg font-bold text-[#45474f]">Absolute Privacy &amp; Digital Hygiene</h3>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              No personal data, phone numbers, or reservation itineraries are recorded, cataloged or shared with third parties. Communications with the bookings are done confidentially by telephone or WhatsApp lines.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-3 shadow-sm">
            <Users className="w-7 h-7 text-sky-600" />
            <h3 className="text-lg font-bold text-[#45474f]">Consent &amp; Ethical Standards</h3>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              Each companion on our directory is an independent consenting adult (21+ years old) who has complete freedom in her schedule and availability, as well as in setting her boundaries. Exploitation or coercive practices will not be tolerated at all.
            </p>
          </div>
        </section>

        {/* Section 3: Granular City Footprint & Locality Reach */}
        <section className="rounded-3xl bg-pink-50/50 border border-pink-100 p-6 sm:p-10 space-y-4 shadow-sm">
          <h2 className="text-2xl font-bold text-[#45474f] flex items-center gap-2">
            <MapPin className="w-6 h-6 text-[#e31777]" />
            <span>Rooted Across Indore&apos;s 48 Micro-Markets</span>
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-[#616161] leading-relaxed">
            <p>
              Unlike outside call centers, our local coordination desk is located at Scheme 54, Vijay Nagar, which has a clear understanding of local traffic from AB Road to Ring Road, MR-10, and Super Corridor, which will enable you to get 30-45 minutes direct dispatch to star hotels.
            </p>
            <p>
              Regardless of where you are staying in the vicinity of C21 Mall in <Link href="/locations/vijay-nagar" className="text-[#e31777] font-semibold hover:underline">Vijay Nagar</Link>, <Link href="/locations/scheme-54" className="text-[#e31777] font-semibold hover:underline">Scheme 54</Link> or in luxury <Link href="/locations/palasia" className="text-[#e31777] font-semibold hover:underline">Palasia</Link> or in the vicinity of corporate IT corridors along the <Link href="/locations/super-corridor" className="text-[#e31777] font-semibold hover:underline">Super Corridor</Link>, our verified network offers extensive local coverage.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#e31777] hover:underline"
            >
              <span>Explore All 48 Indore Locality Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Section 4: Tailored Service Offerings */}
        <section className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-4 shadow-sm">
          <h3 className="text-lg font-bold text-[#45474f]">
            Diverse Companionship for Every Social Occasion
          </h3>
          <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
            We recognize that companionship requirements vary significantly depending on your social agenda. Our directory offers specialized categories tailored to match your specific plans:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <Link
              href="/services/dinner-dates"
              className="p-4 rounded-xl bg-gray-50 hover:bg-pink-50 border border-gray-200 hover:border-[#e31777] transition group"
            >
              <strong className="text-xs font-bold text-gray-800 group-hover:text-[#e31777] block">
                Dinner Dates
              </strong>
              <span className="text-[11px] text-gray-500">Gourmet dining &amp; rooftop lounges</span>
            </Link>

            <Link
              href="/services/corporate-events"
              className="p-4 rounded-xl bg-gray-50 hover:bg-pink-50 border border-gray-200 hover:border-[#e31777] transition group"
            >
              <strong className="text-xs font-bold text-gray-800 group-hover:text-[#e31777] block">
                Corporate Events
              </strong>
              <span className="text-[11px] text-gray-500">Summits, expos &amp; business dinners</span>
            </Link>

            <Link
              href="/services/weekend-getaways"
              className="p-4 rounded-xl bg-gray-50 hover:bg-pink-50 border border-gray-200 hover:border-[#e31777] transition group"
            >
              <strong className="text-xs font-bold text-gray-800 group-hover:text-[#e31777] block">
                Weekend Getaways
              </strong>
              <span className="text-[11px] text-gray-500">Palace staycations &amp; outstation trips</span>
            </Link>

            <Link
              href="/services/vip-concierge"
              className="p-4 rounded-xl bg-gray-50 hover:bg-pink-50 border border-gray-200 hover:border-[#e31777] transition group"
            >
              <strong className="text-xs font-bold text-gray-800 group-hover:text-[#e31777] block">
                VIP Concierge
              </strong>
              <span className="text-[11px] text-gray-500">24/7 priority booking &amp; discretion</span>
            </Link>
          </div>
        </section>

        {/* Section 5: Helpful Resources & Guides */}
        <section className="p-6 rounded-2xl bg-gradient-to-r from-pink-50/80 via-white to-purple-50/80 border border-pink-200 space-y-3 text-xs sm:text-sm text-[#616161]">
          <h3 className="text-base font-bold text-[#45474f]">
            Essential Guides &amp; Client Knowledge Base
          </h3>
          <p className="leading-relaxed">
            We encourage all visitors to review our comprehensive editorial guides to ensure seamless and safe arrangements:
          </p>
          <div className="flex flex-wrap gap-4 pt-1">
            <Link href="/safety-guide" className="text-[#e31777] font-semibold hover:underline flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Safety &amp; Anti-Fraud Guide</span>
            </Link>
            <Link href="/blog/top-luxury-hotels-indore" className="text-[#e31777] font-semibold hover:underline flex items-center gap-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Top 5-Star Hotels in Indore</span>
            </Link>
            <Link href="/blog/nightlife-cafes-indore" className="text-[#e31777] font-semibold hover:underline flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nightlife &amp; Dining Hotspots</span>
            </Link>
            <Link href="/contact" className="text-[#e31777] font-semibold hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <span>Contact 24/7 Concierge</span>
            </Link>
          </div>
        </section>
      </div>

      <TrustBadges />
    </div>
  );
}
