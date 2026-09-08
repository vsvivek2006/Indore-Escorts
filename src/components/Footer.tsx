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

export default function Footer() {
  return (
    <footer className="bg-[#0b172d] text-white text-xs" role="contentinfo">
      {/* 1. Top Call-to-Action & Friendly Coordinator Connect */}
      <div className="bg-gradient-to-r from-[#e31777] via-[#c2185b] to-[#9b1150] py-6 sm:py-8 border-b border-pink-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-white text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>24/7 Warm &amp; Discreet Concierge in Indore</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
              Looking for Charming, Verified Company Tonight?
            </h2>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
              We arrange quick 30–45 minute hotel visits in Vijay Nagar, Palasia, and across Indore. Settle directly with your companion when you meet.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+919006236133"
              className="py-2.5 px-5 rounded-xl bg-white hover:bg-gray-100 text-[#b30000] font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition"
            >
              <Phone className="w-4 h-4" />
              <span>Call Desk: +91 90062 36133</span>
            </a>
            <a
              href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20arranging%20a%20companion%20in%20Indore."
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Coordinator</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Trust Pillars Strip */}
      <div className="bg-[#0e1d38] border-b border-white/10 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="flex items-center justify-center gap-2 text-white/90 font-medium text-xs">
            <Banknote className="w-4 h-4 text-emerald-400" />
            <span>Pay In Person on Arrival</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/90 font-medium text-xs">
            <ShieldCheck className="w-4 h-4 text-[#e31777]" />
            <span>100% Real Photos Verified</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/90 font-medium text-xs">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>30–45 Min Swift Arrival</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-white/90 font-medium text-xs">
            <span className="w-4 h-4 rounded-full bg-rose-600 text-white font-bold text-[10px] flex items-center justify-center">18+</span>
            <span>Consenting Adults Only</span>
          </div>
        </div>
      </div>

      {/* 3. Main Navigation Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-3">
            <div>
              <Link href="/" className="text-xl font-black text-white hover:text-pink-300 transition flex items-center gap-1.5 tracking-tight">
                <span className="font-pacifico text-2xl tracking-wide">MySecretGirl</span>
                <span className="bg-yellow-400 text-slate-900 text-xs font-black px-1.5 py-0.5 rounded">69</span>
              </Link>
              <span className="text-[11px] text-pink-400 font-bold uppercase tracking-wider block mt-1">
                Elite Indore Escorts &amp; Social Companions
              </span>
            </div>
            <p className="text-white/70 leading-relaxed text-xs">
              Connecting discerning gentlemen with articulate, verified independent companions for romantic dinners, business events, and peaceful private suite stays.
            </p>
            <div className="space-y-1.5 text-white/80 pt-2 border-t border-white/10 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#e31777] mt-0.5 shrink-0" />
                <span>Scheme 54, Vijay Nagar, Indore, MP 452010</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Coordinator: +91 90062 36133 (Available 24/7)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Personalized Services */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#e31777]" />
              <span>Tailored Experiences</span>
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
                  <span>VIP Overnight &amp; 24/7 Concierge</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/services" className="text-pink-400 font-bold hover:underline">
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Prime Indore Localities */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#e31777]" />
              <span>Prime Locations</span>
            </h3>
            <ul className="space-y-2 text-white/70 text-xs">
              <li>
                <Link href="/locations/vijay-nagar" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Vijay Nagar Hotels &amp; Suites</span>
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
                  <span>New Palasia Luxury Stays</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/locations/super-corridor" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Super Corridor IT Area</span>
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
                  Browse All 48 Localities &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Safety & Resources */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#e31777]" />
              <span>Guest Resources</span>
            </h3>
            <ul className="space-y-2 text-white/70 text-xs">
              <li>
                <Link href="/models" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>20 Verified Models Roster</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/safety-guide" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Guest Privacy &amp; Anti-Scam Guide</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/blog/top-luxury-hotels-indore" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Top 5-Star Hotel Guide</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/blog/nightlife-cafes-indore" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>Indore Dining &amp; Lounge Spots</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-400 transition flex items-center justify-between">
                  <span>About Our Standards</span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4. Bottom Compliance, 18+ Notice & Copyright Strip */}
      <div className="bg-[#070e1c] border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-[11px] text-white/60">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                <strong>18+ Adult Policy:</strong> Strictly for consenting adults aged 18 and older. Zero advance payment required.
              </span>
            </div>
            <div className="flex items-center gap-2 justify-center shrink-0 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct In-Person Payment Guarantee</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-[11px] text-white/50 pt-2 border-t border-white/5">
            <p>
              &copy; {new Date().getFullYear()} MySecretGirl69 Indore. All Rights Reserved.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="/privacy-policy" className="text-white/70 hover:text-pink-400 transition">
                Privacy Policy
              </Link>
              <span className="text-white/20">&bull;</span>
              <Link href="/terms" className="text-white/70 hover:text-pink-400 transition">
                Terms of Service
              </Link>
              <span className="text-white/20">&bull;</span>
              <Link href="/disclaimer" className="text-white/70 hover:text-pink-400 transition">
                Legal Disclaimer
              </Link>
              <span className="text-white/20">&bull;</span>
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
