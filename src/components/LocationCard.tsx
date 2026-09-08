import Link from "next/link";
import { IndoreLocation } from "@/data/locations";
import { MapPin, Navigation, Building2, ChevronRight, Sparkles } from "lucide-react";

interface LocationCardProps {
  location: IndoreLocation;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <article className="group relative rounded-3xl bg-white border border-slate-200/80 hover:border-rose-300 p-6 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_35px_-10px_rgba(217,27,110,0.14)] hover:-translate-y-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-100/80">
            {location.zone}
          </span>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono font-medium">
            PIN {location.pincode}
          </span>
        </div>

        <Link href={`/locations/${location.slug}`} className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-lg">
          <h3 className="text-xl font-heading font-extrabold text-slate-900 group-hover:text-rose-600 transition-colors flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <MapPin className="w-4 h-4" aria-hidden="true" />
            </div>
            <span>{location.name}</span>
          </h3>
        </Link>

        <p className="text-xs text-rose-600 font-medium mt-2">
          {location.tagline}
        </p>

        <p className="text-xs text-slate-500 mt-2.5 line-clamp-3 leading-relaxed">
          {location.introduction}
        </p>

        {/* Landmarks & Transit */}
        <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5">
          <div className="flex items-center gap-2 text-[11px] text-slate-700 font-medium">
            <Building2 className="w-3.5 h-3.5 text-amber-500 shrink-0" aria-hidden="true" />
            <span className="truncate">{location.keyLandmarks.slice(0, 2).join(", ")}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <Navigation className="w-3.5 h-3.5 text-sky-600 shrink-0" aria-hidden="true" />
            <span className="truncate">{location.accessInformation.split(".")[0]}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400" />
          Indore Zone
        </span>
        <Link
          href={`/locations/${location.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:text-rose-700 transition-colors py-1 group/btn"
        >
          <span>Explore Locality</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
