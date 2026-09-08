"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { INDORE_LOCATIONS } from "@/data/locations";
import { MapPin, ArrowRight } from "lucide-react";

export default function HeroSearchFilter() {
  const [selectedSlug, setSelectedSlug] = useState("vijay-nagar");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSlug) {
      router.push(`/locations/${selectedSlug}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="hero-search-wrap"
      role="search"
      aria-label="Search Locality"
    >
      <div className="pl-4 pr-1 text-[#e31777] shrink-0">
        <MapPin className="w-5 h-5" aria-hidden="true" />
      </div>
      <label htmlFor="heroLocality" className="sr-only">
        Select Locality in Indore
      </label>
      <select
        id="heroLocality"
        value={selectedSlug}
        onChange={(e) => setSelectedSlug(e.target.value)}
        className="hero-search-select"
      >
        {INDORE_LOCATIONS.map((loc) => (
          <option key={loc.slug} value={loc.slug}>
            {loc.name} ({loc.zone})
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="hero-search-btn"
        aria-label="Find Companions in Selected Locality"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
}
