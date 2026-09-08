import Link from "next/link";
import { Sparkles, Home, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center bg-white">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-pink-50 border border-[#e31777] text-[#e31777] flex items-center justify-center mx-auto shadow-md">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#45474f] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-[#616161] leading-relaxed">
            The page or location you requested is not available. Explore our verified Indore directory below.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#e31777] hover:bg-[#c41164] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#e31777]/30 transition"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/locations"
            className="w-full sm:w-auto py-3 px-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center gap-2 border border-gray-300 transition"
          >
            <MapPin className="w-4 h-4 text-[#e31777]" />
            <span>Browse 48 Localities</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
