import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  ShieldCheck,
  Banknote,
  Clock,
  Sparkles,
  AlertTriangle,
  ArrowRight
} from "lucide-react";

// Categorized all 48 authentic Indore Localities (12 per zone x 4 = 48)
const FOOTER_LOCALITY_GROUPS = [
  {
    title: "North & Vijay Nagar Zone",
    locations: [
      { name: "Vijay Nagar", slug: "vijay-nagar" },
      { name: "Scheme 54", slug: "scheme-54" },
      { name: "Scheme 74", slug: "scheme-74" },
      { name: "MR-10", slug: "mr-10" },
      { name: "MR-9", slug: "mr-9" },
      { name: "Mahalaxmi Nagar", slug: "mahalaxmi-nagar" },
      { name: "Nipania", slug: "nipania" },
      { name: "Lasudia", slug: "lasudia" },
      { name: "Dewas Naka", slug: "dewas-naka" },
      { name: "LIG Colony", slug: "lig-colony" },
      { name: "MIG Colony", slug: "mig-colony" },
      { name: "Phoenix Citadel", slug: "phoenix-citadel" }
    ]
  },
  {
    title: "Central & Heritage Zone",
    locations: [
      { name: "Rajwada", slug: "rajwada" },
      { name: "Sarafa Bazaar", slug: "sarafa-bazaar" },
      { name: "MG Road", slug: "mg-road" },
      { name: "South Tukoganj", slug: "south-tukoganj" },
      { name: "Race Course Road", slug: "race-course-road" },
      { name: "Chhawani", slug: "chhawani" },
      { name: "Siyaganj", slug: "siyaganj" },
      { name: "Geeta Bhawan", slug: "geeta-bhawan" },
      { name: "Juni Indore", slug: "juni-indore" },
      { name: "Treasure Island Mall", slug: "treasure-island-mall" },
      { name: "AB Road", slug: "ab-road" },
      { name: "Navlakha", slug: "navlakha" }
    ]
  },
  {
    title: "Eastern & Ring Road Zone",
    locations: [
      { name: "Palasia", slug: "palasia" },
      { name: "New Palasia", slug: "new-palasia" },
      { name: "Old Palasia", slug: "old-palasia" },
      { name: "Saket Nagar", slug: "saket-nagar" },
      { name: "Tilak Nagar", slug: "tilak-nagar" },
      { name: "Khajrana", slug: "khajrana" },
      { name: "Bengali Square", slug: "bengali-square" },
      { name: "Kanadia Road", slug: "kanadia-road" },
      { name: "Ring Road", slug: "ring-road" },
      { name: "Bicholi Mardana", slug: "bicholi-mardana" },
      { name: "Sapna Sangeeta", slug: "sapna-sangeeta" },
      { name: "Tower Square", slug: "tower-square" }
    ]
  },
  {
    title: "West, South & IT Corridor",
    locations: [
      { name: "Super Corridor", slug: "super-corridor" },
      { name: "Airport Road", slug: "airport-road" },
      { name: "Indore Bypass", slug: "indore-bypass" },
      { name: "Rau", slug: "rau" },
      { name: "Bhawarkuan", slug: "bhawarkuan" },
      { name: "Annapurna Road", slug: "annapurna-road" },
      { name: "Sudama Nagar", slug: "sudama-nagar" },
      { name: "Rajendra Nagar", slug: "rajendra-nagar" },
      { name: "Choithram", slug: "choithram" },
      { name: "Kesar Bagh", slug: "kesar-bagh" },
      { name: "Silicon City", slug: "silicon-city" },
      { name: "Pithampur Road", slug: "pithampur-road" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#0b172d] text-white text-xs" role="contentinfo">
      {/* 1. Top Call-to-Action & Priority Connect Banner */}
      <div className="bg-gradient-to-r from-[#e31777] via-[#c2185b] to-[#9b1150] py-8 sm:py-10 border-b border-pink-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-white text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>24/7 VIP Concierge Service in Indore</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ready for Sophisticated Accompaniment in Indore?
            </h2>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
              Instant 30 to 45-minute companion dispatch to luxury hotel suites in Vijay Nagar, Palasia, and the Super Corridor. 100% Cash on Delivery.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+919006236133"
              className="py-3 px-6 rounded-xl bg-white hover:bg-gray-100 text-[#b30000] font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: +91 90062 36133</span>
            </a>
            <a
              href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20arranging%20a%20companion%20in%20Indore."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Coordinator</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Trust Pillars Strip */}
      <div className="bg-[#0e1d38] border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-white/90 font-semibold text-xs">
            <Banknote className="w-4 h-4 text-emerald-400" />
            <span>100% Cash on Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/90 font-semibold text-xs">
            <ShieldCheck className="w-4 h-4 text-[#e31777]" />
            <span>Real In-Person Photos</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/90 font-semibold text-xs">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>30-Min Hotel Dispatch</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/90 font-semibold text-xs">
            <span className="w-4 h-4 rounded-full bg-rose-600 text-white font-bold text-[10px] flex items-center justify-center">18+</span>
            <span>Consenting Adults Only</span>
          </div>
        </div>
      </div>

      {/* 3. Main Multi-Column Navigation Mesh */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <div>
              <Link href="/" className="text-lg font-black text-white hover:text-pink-400 transition block tracking-tight">
                MySecretGirl69 Indore
              </Link>
              <span className="text-[11px] text-pink-400 font-bold uppercase tracking-wider block mt-0.5">
                Elite Escorts &amp; Social Concierge
              </span>
            </div>
            <p className="text-white/70 leading-relaxed text-xs">
              Indore&apos;s premier informational directory connecting discerning gentlemen with independent, verified companions for executive dinners, conventions, and luxury hotel visits.
            </p>
            <div className="space-y-2 text-white/80 pt-2 border-t border-white/10 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#e31777] mt-0.5 shrink-0" />
                <span>Central HQ: Scheme 54, Vijay Nagar, Indore, MP 452010</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Hotline: +91 90062 36133 (24/7)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Specialized Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e31777]" />
              <span>Bespoke Services</span>
            </h3>
            <ul className="space-y-2 text-white/70 text-xs">
              <li>
                <Link href="/services/dinner-dates" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Luxury Dinner Dates</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-events" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Corporate &amp; Business Events</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/services/weekend-getaways" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Weekend Staycations &amp; Mandu</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/services/vip-concierge" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>VIP 24/7 Priority Concierge</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/services" className="text-pink-400 font-bold hover:underline">
                  View All Services Overview →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Prime Indore Localities */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#e31777]" />
              <span>Prime Indore Hubs</span>
            </h3>
            <ul className="space-y-2 text-white/70 text-xs">
              <li>
                <Link href="/locations/vijay-nagar" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Vijay Nagar Escorts</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/locations/scheme-54" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Scheme 54 &amp; Brilliant Centre</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/locations/palasia" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>New Palasia Escorts</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/locations/super-corridor" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Super Corridor IT SEZ</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/locations/indore-bypass" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Indore Bypass &amp; Sheraton</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/locations" className="text-pink-400 font-bold hover:underline">
                  Browse All 48 Locality Guides →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Resources & Safety */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#e31777]" />
              <span>Safety &amp; Editorial Guides</span>
            </h3>
            <ul className="space-y-2 text-white/70 text-xs">
              <li>
                <Link href="/safety-guide" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Anti-Fraud &amp; Safety Advisory</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/blog/top-luxury-hotels-indore" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Top 5-Star Luxury Hotel Guide</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/blog/nightlife-cafes-indore" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Indore Nightlife &amp; Dining Guide</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/models" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>20 Verified Models Roster</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>About Our Agency Standards</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/contact" className="text-pink-400 font-bold hover:underline">
                  Contact Concierge Coordinator →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Complete 48 Indore Locality Directory Grid */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center mb-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Comprehensive Indore Call Girls Directory (48 Verified Sectors)
            </h3>
            <p className="text-white/60 text-xs mt-1">
              Local companion coverage across every commercial sector, upscale township, and 5-star hotel corridor in Indore.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {FOOTER_LOCALITY_GROUPS.map((group, idx) => (
              <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h4 className="font-bold text-pink-400 text-xs mb-2.5 border-b border-white/10 pb-1.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span>{group.title}</span>
                </h4>
                <ul className="space-y-1.5 text-[11px]">
                  {group.locations.map((loc) => (
                    <li key={loc.slug}>
                      <Link
                        href={`/locations/${loc.slug}`}
                        className="text-white/70 hover:text-pink-400 transition block py-0.5 truncate"
                      >
                        {loc.name} Escorts
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Bottom Compliance, 18+ Warning & Legal Strip */}
      <div className="bg-[#070e1c] border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-[11px] text-white/60">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>18+ Adult Content Notice:</strong> For consenting adults aged 18 and older only. Zero tolerance for exploitation, trafficking, or unlawful conduct.
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center shrink-0 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Cash on Delivery Assurance</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-white/50">
            <p>
              © {new Date().getFullYear()} MySecretGirl69 Indore. All Rights Reserved. Protected under DMCA.
            </p>
            <div className="flex items-center gap-3">
              <Link href="/privacy-policy" className="text-white/70 hover:text-pink-400 transition">
                Privacy Policy
              </Link>
              <span className="text-white/20">•</span>
              <Link href="/terms" className="text-white/70 hover:text-pink-400 transition">
                Terms of Service
              </Link>
              <span className="text-white/20">•</span>
              <Link href="/disclaimer" className="text-white/70 hover:text-pink-400 transition">
                Legal Disclaimer
              </Link>
              <span className="text-white/20">•</span>
              <Link href="/safety-guide" className="text-white/70 hover:text-pink-400 transition">
                Safety Advisory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
