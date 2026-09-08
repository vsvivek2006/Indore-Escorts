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
    "Learn about MySecretGirl69 Indore. Our founding mission, ethical screening standards, complete client privacy, cash-on-delivery guarantee, and responsible companionship in Indore, MP.",
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
          Elevating adult companionship in central India through transparent standards, genuine identity verification, uncompromising client privacy, and 100% Cash on Delivery assurance.
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
              Indore has rapidly emerged as the commercial, financial, and educational powerhouse of Central India. With the expansion of the Super Corridor IT SEZ housing technology titans like TCS and Infosys, premier academic institutions like IIM and IIT, and bustling trade conventions at the Brilliant Convention Centre, the city welcomes thousands of traveling business executives, entrepreneurs, and global professionals every week.
            </p>
            <p>
              Historically, individuals seeking adult companionship in tier-2 Indian cities faced a minefield of digital fraud—unmoderated classified boards rife with stolen influencer photos, counterfeit profiles, and predatory syndicates demanding arbitrary advance payments under the guise of &quot;booking tokens,&quot; &quot;medical insurance cards,&quot; or &quot;transit fares.&quot; MySecretGirl69 Indore was established to fundamentally solve this issue by offering a curated, authentic, and dignified alternative.
            </p>
            <p>
              We operate as a premium concierge directory connecting discerning gentlemen with independent, educated, and charming companions who take immense pride in their conversational skills, social poise, and emotional warmth. Every arrangement coordinated through our platform is built on mutual respect, complete personal safety, and unyielding privacy.
            </p>
          </div>
        </section>

        {/* Section 2: Core Operating Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-3 shadow-sm">
            <ShieldCheck className="w-7 h-7 text-emerald-600" />
            <h3 className="text-lg font-bold text-[#45474f]">100% Face-to-Face Verified Profiles</h3>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              Catfishing and counterfeit photos have no place on our roster. Every companion showcased on our website undergoes in-person verification with real photograph audits. The model you select on our directory is the exact person who greets you at your venue.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-3 shadow-sm">
            <Banknote className="w-7 h-7 text-emerald-700" />
            <h3 className="text-lg font-bold text-[#45474f]">100% Cash on Delivery (Zero Advance)</h3>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              We never ask for advance UPI transfers, bank deposits, or &quot;registration fees.&quot; All financial honorariums are settled strictly in person via Cash on Delivery after your companion arrives and mutual satisfaction is verified.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-3 shadow-sm">
            <Lock className="w-7 h-7 text-[#e31777]" />
            <h3 className="text-lg font-bold text-[#45474f]">Absolute Privacy &amp; Digital Hygiene</h3>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              Your personal data, phone numbers, and reservation itineraries are never recorded, cataloged, or shared with third parties. Booking communications are handled confidentially via encrypted channels like WhatsApp and Telegram.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-3 shadow-sm">
            <Users className="w-7 h-7 text-sky-600" />
            <h3 className="text-lg font-bold text-[#45474f]">Consent &amp; Ethical Standards</h3>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              Every companion listed on our directory is an independent consenting adult (21+ years old) who exercises full autonomy over her schedule, availability, and boundaries. We uphold absolute zero tolerance for exploitation or coercive practices.
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
              Unlike out-of-state call centers that possess no geographic awareness of Indore, our central dispatch desk operates locally from Scheme 54 in Vijay Nagar. Our coordinators understand local traffic flows across AB Road, MR-10, Ring Road, and the Super Corridor, allowing us to guarantee prompt 30-to-45-minute companion dispatch to five-star hotels and upscale residential suites.
            </p>
            <p>
              Whether you are lodged near C21 Mall in <Link href="/locations/vijay-nagar" className="text-[#e31777] font-semibold hover:underline">Vijay Nagar</Link>, attending a convention near <Link href="/locations/scheme-54" className="text-[#e31777] font-semibold hover:underline">Scheme 54</Link>, relaxing in upscale <Link href="/locations/palasia" className="text-[#e31777] font-semibold hover:underline">Palasia</Link>, or staying near corporate IT corridors along the <Link href="/locations/super-corridor" className="text-[#e31777] font-semibold hover:underline">Super Corridor</Link>, our verified network delivers comprehensive localized coverage.
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
