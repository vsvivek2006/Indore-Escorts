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
    <footer className="bg-[#0b172d] text-white text-xs border-t border-pink-900/30" role="contentinfo">
      {/* 1. Top Call-to-Action & Friendly Coordinator Connect */}
      <div className="relative bg-gradient-to-r from-[#0b172d] via-[#152442] to-[#0b172d] py-8 sm:py-10 border-b border-white/10 overflow-hidden">
        {/* Soft luminous ambient backlight */}
        <div className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[#e31777]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 w-80 h-80 rounded-full bg-[#c2185b]/15 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-pink-300 text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#e31777]" />
              <span>24/7 Warm &amp; Discreet Concierge in Indore</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">
              Looking for Charming, Verified Company Tonight?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We arrange quick 30–45 minute hotel visits in Vijay Nagar, Palasia, and across Indore. Settle directly with your companion when you meet.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
            <a
              href="tel:+919006236133"
              className="py-3 px-6 rounded-full bg-gradient-to-r from-[#b30000] to-[#ff2b2b] hover:brightness-110 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-rose-900/30 transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call Desk: +91 90062 36133</span>
            </a>
            <a
              href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20arranging%20a%20companion%20in%20Indore."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-emerald-900/30 transition-all hover:scale-105 animate-pulse-subtle"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Coordinator</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Trust Pillars Strip */}
      <div className="bg-[#091326] border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-200 font-medium text-xs">
            <Banknote className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Pay In Person on Arrival</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-200 font-medium text-xs">
            <ShieldCheck className="w-4 h-4 text-[#e31777] shrink-0" />
            <span>100% Real Photos Verified</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-200 font-medium text-xs">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>30–45 Min Swift Arrival</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-200 font-medium text-xs">
            <span className="w-4 h-4 rounded-full bg-rose-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0">18+</span>
            <span>Consenting Adults Only</span>
          </div>
        </div>
      </div>

      {/* 3. Main Navigation Columns */}
      <div className="bg-[#060e1d] py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Brand & Contact Info */}
            <div className="space-y-3.5">
              <div>
                <Link href="/" className="text-xl font-black text-white hover:text-pink-300 transition flex items-center gap-1.5 tracking-tight">
                  <span className="font-pacifico text-2xl tracking-wide">MySecretGirl</span>
                  <span className="bg-yellow-400 text-slate-900 text-xs font-black px-1.5 py-0.5 rounded">69</span>
                </Link>
                <span className="text-[11px] text-pink-400 font-bold uppercase tracking-wider block mt-1">
                  Elite Indore Escorts &amp; Social Companions
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed text-xs">
                Connecting discerning gentlemen with articulate, verified independent companions for romantic dinners, business events, and peaceful private suite stays.
              </p>
              <div className="space-y-2 text-slate-300 pt-2 border-t border-white/10 text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#e31777] mt-0.5 shrink-0" />
                  <span>Scheme 54, Vijay Nagar, Indore, MP 452010</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Coordinator: +91 90062 36133 (24/7)</span>
                </div>
              </div>
            </div>

            {/* Column 2: Personalized Services */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2.5 flex items-center gap-2 font-sans">
                <Sparkles className="w-3.5 h-3.5 text-[#e31777]" />
                <span>Tailored Experiences</span>
              </h3>
              <ul className="space-y-2.5 text-slate-400 text-xs">
                <li>
                  <Link href="/services/dinner-dates" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>Luxury Dinner Dates</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/corporate-events" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>Corporate &amp; Business Events</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/weekend-getaways" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>Weekend Staycations &amp; Mandu</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="/services/vip-concierge" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>VIP Overnight &amp; 24/7 Concierge</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
                <li className="pt-1.5">
                  <Link href="/services" className="text-pink-400 font-bold hover:underline inline-flex items-center gap-1">
                    <span>View All Services Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Prime Indore Localities */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2.5 flex items-center gap-2 font-sans">
                <MapPin className="w-3.5 h-3.5 text-[#e31777]" />
                <span>Prime Locations</span>
              </h3>
              <ul className="space-y-2.5 text-slate-400 text-xs">
                <li>
                  <Link href="/locations/vijay-nagar" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>Vijay Nagar Hotels &amp; Suites</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="/locations/scheme-54" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>Scheme 54 &amp; Brilliant Centre</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="/locations/palasia" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>New Palasia Luxury Stays</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="/locations/super-corridor" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>Super Corridor IT Area</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="/locations/indore-bypass" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>Indore Bypass &amp; Sheraton</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
                <li className="pt-1.5">
                  <Link href="/locations" className="text-pink-400 font-bold hover:underline inline-flex items-center gap-1">
                    <span>Browse All 48 Localities</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Client Safety & Resources */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2.5 flex items-center gap-2 font-sans">
                <ShieldCheck className="w-3.5 h-3.5 text-[#e31777]" />
                <span>Guest Resources</span>
              </h3>
              <ul className="space-y-2.5 text-slate-400 text-xs">
                <li>
                  <Link href="/models" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>20 Verified Models Roster</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="/safety-guide" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>Guest Privacy &amp; Anti-Scam Guide</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="/blog/top-luxury-hotels-indore" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>Top 5-Star Hotel Guide</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="/blog/nightlife-cafes-indore" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>Indore Dining &amp; Lounge Spots</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-pink-300 hover:translate-x-1 transition-all flex items-center justify-between group">
                    <span>About Our Standards</span>
                    <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:text-pink-300 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Compliance, 18+ Notice & Copyright Strip */}
      <div className="bg-[#03070f] border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left text-[11px] text-slate-400">
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

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-[11px] text-slate-500 pt-2.5 border-t border-white/5">
            <p>
              &copy; {new Date().getFullYear()} MySecretGirl69 Indore. All Rights Reserved.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="/privacy-policy" className="text-slate-400 hover:text-pink-400 transition">
                Privacy Policy
              </Link>
              <span className="text-white/20">&bull;</span>
              <Link href="/terms" className="text-slate-400 hover:text-pink-400 transition">
                Terms of Service
              </Link>
              <span className="text-white/20">&bull;</span>
              <Link href="/disclaimer" className="text-slate-400 hover:text-pink-400 transition">
                Legal Disclaimer
              </Link>
              <span className="text-white/20">&bull;</span>
              <Link href="/safety-guide" className="text-slate-400 hover:text-pink-400 transition">
                Safety Advisory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
