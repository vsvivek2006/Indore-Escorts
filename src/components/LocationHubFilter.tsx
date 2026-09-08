"use client";

import { useState, useMemo } from "react";
import { IndoreLocation } from "@/data/locations";
import LocationCard from "@/components/LocationCard";
import { Search, MapPin, X, Building2 } from "lucide-react";

interface LocationHubFilterProps {
  locations: IndoreLocation[];
}

const REGION_MAPPING: Record<string, string[]> = {
  "Central & Heritage": [
    "rajwada",
    "sarafa-bazaar",
    "mg-road",
    "treasure-island-mall",
    "chhawani",
    "siyaganj",
    "juni-indore",
    "geeta-bhawan",
    "south-tukoganj",
    "race-course-road"
  ],
  "North & Vijay Nagar": [
    "vijay-nagar",
    "scheme-54",
    "scheme-74",
    "mr-10",
    "mr-9",
    "lasudia",
    "dewas-naka",
    "lig-colony",
    "mig-colony"
  ],
  "Eastern & Ring Road": [
    "palasia",
    "new-palasia",
    "old-palasia",
    "saket-nagar",
    "tilak-nagar",
    "khajrana",
    "bengali-square",
    "kanadia-road",
    "ring-road"
  ],
  "South-Central & Academic": [
    "bhawarkuan",
    "sapna-sangeeta",
    "tower-square",
    "ab-road",
    "navlakha"
  ],
  "South-Western Residential": [
    "annapurna-road",
    "sudama-nagar",
    "rajendra-nagar",
    "choithram",
    "kesar-bagh"
  ],
  "Western Tech & Airport": [
    "super-corridor",
    "airport-road"
  ],
  "Bypass & Luxury Outskirts": [
    "indore-bypass",
    "phoenix-citadel",
    "rau",
    "bicholi-mardana",
    "nipania",
    "mahalaxmi-nagar",
    "silicon-city",
    "pithampur-road"
  ]
};

export default function LocationHubFilter({ locations }: LocationHubFilterProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const regions = useMemo(() => ["All", ...Object.keys(REGION_MAPPING)], []);

  const filteredLocations = useMemo(() => {
    return locations.filter((loc) => {
      // Region filter
      if (selectedRegion !== "All") {
        const allowedSlugs = REGION_MAPPING[selectedRegion] || [];
        if (!allowedSlugs.includes(loc.slug)) {
          return false;
        }
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = loc.name.toLowerCase().includes(q);
        const matchesZone = loc.zone.toLowerCase().includes(q);
        const matchesPincode = loc.pincode.includes(q);
        const matchesLandmark = loc.keyLandmarks.some((lm) => lm.toLowerCase().includes(q));
        const matchesNearby = loc.nearbyAreas.some((nb) => nb.toLowerCase().includes(q));

        if (!matchesName && !matchesZone && !matchesPincode && !matchesLandmark && !matchesNearby) {
          return false;
        }
      }

      return true;
    });
  }, [locations, selectedRegion, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Controls: Search Bar & Regional Tabs */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 space-y-5 shadow-sm">
        {/* Search input */}
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by locality name (e.g. Vijay Nagar, Palasia, Rau, Nipania), landmark, or PIN code..."
            className="w-full pl-12 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#e31777] focus:ring-1 focus:ring-[#e31777] transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-1 cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => {
            const isSelected = selectedRegion === region;
            const count =
              region === "All"
                ? locations.length
                : REGION_MAPPING[region]?.length || 0;

            return (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? "bg-[#e31777] text-white shadow-md shadow-[#e31777]/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                <span>{region}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-white/25 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Summary text */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#e31777]" />
            <span>
              Showing <strong className="text-gray-900">{filteredLocations.length}</strong> of{" "}
              <strong className="text-gray-900">{locations.length}</strong> verified Indore localities
            </span>
          </div>
          {(selectedRegion !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedRegion("All");
                setSearchQuery("");
              }}
              className="text-[#e31777] hover:underline font-bold transition cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Grid of Location Cards */}
      {filteredLocations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((loc) => (
            <LocationCard key={loc.slug} location={loc} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-2xl bg-gray-50 border border-gray-200">
          <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-1">No Indore Localities Match Your Filter</h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
            We couldn't find any location matching &ldquo;{searchQuery}&rdquo;. Try another locality name, landmark, or reset your filters.
          </p>
          <button
            onClick={() => {
              setSelectedRegion("All");
              setSearchQuery("");
            }}
            className="px-5 py-2.5 rounded-xl bg-[#e31777] text-white text-sm font-bold hover:bg-[#c41164] transition shadow-md cursor-pointer"
          >
            Show All 48 Localities
          </button>
        </div>
      )}
    </div>
  );
}
