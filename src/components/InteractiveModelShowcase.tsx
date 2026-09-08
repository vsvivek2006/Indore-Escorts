"use client";

import { useState } from "react";
import Link from "next/link";
import { CompanionModel } from "@/data/models";
import ModelCard from "@/components/ModelCard";
import { Sparkles, ArrowRight, Filter } from "lucide-react";

interface InteractiveModelShowcaseProps {
  initialModels: CompanionModel[];
  allModels: CompanionModel[];
}

export default function InteractiveModelShowcase({
  initialModels,
  allModels
}: InteractiveModelShowcaseProps) {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = [
    { label: "All Featured", value: "All" },
    { label: "VIP Elite", value: "VIP Elite" },
    { label: "Dinner Dates", value: "Dinner Date" },
    { label: "Corporate Escorts", value: "Corporate Escort" },
    { label: "College Models", value: "College Model" }
  ];

  const filteredModels =
    activeTab === "All"
      ? initialModels
      : allModels.filter((m) => m.category === activeTab).slice(0, 8);

  return (
    <div className="space-y-8">
      {/* Interactive Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider mr-1">
          <Filter className="w-3.5 h-3.5 text-[#e31777]" />
          <span>Filter:</span>
        </div>
        {categories.map((cat) => {
          const count =
            cat.value === "All"
              ? initialModels.length
              : allModels.filter((m) => m.category === cat.value).length;
          const isActive = activeTab === cat.value;

          return (
            <button
              key={cat.value}
              onClick={() => setActiveTab(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-[#e31777] via-[#d0156c] to-[#c2185b] text-white shadow-md shadow-pink-500/25 scale-105"
                  : "bg-white text-slate-700 hover:text-[#e31777] border border-slate-200 hover:border-pink-300 hover:shadow-xs"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Model Cards with Smooth Render */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300">
        {filteredModels.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>

      {/* Explore All Profiles Callout Card */}
      <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-pink-50 via-rose-50/80 to-pink-50 border border-pink-200/80 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-luxury-card hover:shadow-luxury-hover transition-all">
        <div className="space-y-1">
          <h3 className="font-sans font-bold text-slate-900 text-base sm:text-lg flex items-center justify-center sm:justify-start gap-2">
            <Sparkles className="w-5 h-5 text-[#e31777]" />
            <span>Looking for More Verified Companions &amp; Tastes?</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Explore our complete roster of 20 verified models with complete photo galleries, background bios, languages, and direct booking.
          </p>
        </div>
        <Link
          href="/models"
          className="shrink-0 inline-flex items-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#e31777] via-[#d0156c] to-[#c2185b] text-white hover:brightness-110 font-bold text-xs sm:text-sm shadow-md shadow-pink-500/30 transition-all hover:scale-105"
        >
          <span>Explore All 20 Profiles</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
