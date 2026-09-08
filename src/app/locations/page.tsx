import type { Metadata } from "next";
import { INDORE_LOCATIONS } from "@/data/locations";
import LocationHubFilter from "@/components/LocationHubFilter";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqAccordion from "@/components/FaqAccordion";
import { Compass, Navigation, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Indore Escorts & Companions Directory | 48 Verified Locality Hubs",
  description:
    "Explore our verified directory across Indore's 48 primary localities. Detailed transit routes, luxury hotel zones, landmark guides, and local companion coordination for Vijay Nagar, Palasia, Bhawarkuan, Rau, Super Corridor, and beyond.",
  alternates: {
    canonical: "https://mysecretgirl69.com/locations"
  }
};

export default function LocationsHubPage() {
  const hubFaqs = [
    {
      question: "Which areas in Indore have the best luxury hotels for social companion meetings?",
      answer: "Vijay Nagar (featuring Indore Marriott, Sayaji Hotel, Radisson Blu on MR-10) and the Indore Bypass (featuring Sheraton Grand Palace and luxury country resorts) offer Indore's finest five-star accommodations, private dining facilities, and discreet valet parking."
    },
    {
      question: "How long does it take for a companion to arrive at my hotel in Indore?",
      answer: "In central and north-eastern hubs like Vijay Nagar, Palasia, and South Tukoganj, verified companions can usually coordinate arrival within 30 to 45 minutes. Peripheral areas like Rau, Silicon City, or Bicholi Mardana may require 45 to 60 minutes."
    },
    {
      question: "What public transit is best for navigating Indore?",
      answer: "Indore's air-conditioned i-Bus BRTS runs efficiently along the central spine of AB Road, connecting Bhawarkuan, Navlakha, Geeta Bhawan, Palasia, LIG, and Vijay Nagar with dedicated rapid-transit lanes."
    },
    {
      question: "Are all 48 locations in this directory within the Indore municipal/metropolitan region?",
      answer: "Yes. Every single one of the 48 localities listed has been geographically verified within the Indore urban territory, from the historical center around Rajwada and Sarafa to modern growth corridors like Super Corridor, MR-10, and Indore Bypass."
    }
  ];

  const hubFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubFaqSchema) }}
      />
      <Breadcrumbs items={[{ label: "Indore Locations" }]} />

      {/* Header Section */}
      <div className="my-8 text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] text-xs font-bold">
          <Compass className="w-4 h-4" />
          <span>Indore Geographical Directory (48 Localities)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
          Indore Escorts &amp; Companions Locality Directory
        </h1>
        <p className="text-sm sm:text-base text-[#616161] leading-relaxed">
          Indore is the commercial capital, educational hub, and cleanest city of India. We have cataloged our companion services across 48 distinct, geographically verified Indore localities, each featuring detailed transit connectivity, key landmarks, five-star hotel options, and localized coordination guidance.
        </p>
      </div>

      {/* Transit Overview Box */}
      <div className="mb-10 rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-[#45474f] mb-3 flex items-center gap-2">
          <Navigation className="w-5 h-5 text-[#e31777]" />
          <span>Navigating Indore: Corridors, Highways &amp; Connectivity</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
          Indore is organized along major transportation axes: the central <strong>AB Road (NH 52)</strong> running north-south, the <strong>Ring Road</strong> encircling middle sectors, the multi-lane <strong>Bypass (AH47)</strong> hosting palatial five-star resorts and private clubs, and the <strong>Super Corridor</strong> providing a 15-minute signal-free conduit directly to Devi Ahilya Bai Holkar International Airport and major IT campuses.
        </p>
      </div>

      {/* Filterable Hub View */}
      <LocationHubFilter locations={INDORE_LOCATIONS} />

      {/* Regional Directory Coverage */}
      <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-pink-50/60 via-white to-pink-50/40 border border-pink-200 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-pink-100 border border-pink-300 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#e31777]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              Direct Directory Coverage Across All 48 Indore Localities
            </h3>
            <p className="text-xs sm:text-sm text-[#616161] leading-relaxed">
              Whether you are planning companion services in Vijay Nagar, Palasia, Rau, or an Indore Bypass resort, our local directory provides accurate area guides, hotel transit notes, and direct contact details.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="mt-16">
        <FaqAccordion
          faqs={hubFaqs}
          title="Indore Locality &amp; Travel FAQs"
          subtitle="Frequently asked questions regarding transit corridors, arrival times, and hotel coordination across Indore."
        />
      </div>
    </div>
  );
}
