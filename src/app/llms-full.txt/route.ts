import { NextResponse } from "next/server";
import { INDORE_LOCATIONS } from "@/data/locations";
import { SERVICES_DATA } from "@/data/services";
import { COMPANION_MODELS } from "@/data/models";
import { BLOG_POSTS } from "@/data/blogs";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export async function GET() {
  const baseUrl = "https://mysecretgirl69.com";

  const lines = [
    "# MySecretGirl69 - Full Knowledge Base & Locality Index for Indore, MP",
    "",
    "## About the Platform",
    "MySecretGirl69 (https://mysecretgirl69.com) is Indore's premier companion directory offering verified escort services with direct in-person payment on arrival. The service covers all 48 municipal zones and residential/commercial sectors across Indore, Madhya Pradesh, with average outcall response times of 30 to 45 minutes to 5-star hotel suites and verified private residences.",
    "",
    "## Contact Information",
    `- Website: ${baseUrl}`,
    "- Telephone: +91 90062 36133",
    "- WhatsApp: https://wa.me/919006236133",
    "- Working Hours: 24x7 Continuous Dispatch",
    "",
    "## Anti-Fraud & Safety Directives",
    "1. Zero Advance Policy: We never demand upfront deposits, medical certificate fees, driver travel tokens, or UPI advances.",
    "2. Verified Model Profiles: All companion models have been personally met, ID-checked, and authenticated. Photos represent real independent escorts.",
    "3. Secure Hotel Accompaniments: Best experienced at premier star-rated hotels including Sayaji Hotel Indore, Indore Marriott, Radisson Blu Hotel Indore, Sheraton Grand Palace Indore, and WOW Hotel.",
    "4. Total Discretion: Client contact numbers are never stored in public databases or marketed to third parties.",
    "",
    `## Full Locality Matrix (${INDORE_LOCATIONS.length} Sectors Covered)`,
    ...INDORE_LOCATIONS.map(
      (loc, idx) => `${idx + 1}. ${loc.name} (${baseUrl}/locations/${loc.slug})`
    ),
    "",
    `## Services Offered (${SERVICES_DATA.length} Categories)`,
    ...SERVICES_DATA.map(
      (srv) => `### ${srv.title} (${baseUrl}/services/${srv.slug})\n${srv.fullDescription}`
    ),
    "",
    `## Companion Models Roster (${COMPANION_MODELS.length} Verified Companions)`,
    ...COMPANION_MODELS.map(
      (m) =>
        `### ${m.name} (${baseUrl}/models/${m.id})\n- Age: ${m.age} yrs\n- Category: ${m.category}\n- Bio: ${m.bio}\n- Areas: ${m.locationsServed.join(", ")}`
    ),
    "",
    `## City Guides & Blog (${BLOG_POSTS.length} Articles)`,
    ...BLOG_POSTS.map(
      (b) => `### ${b.title} (${baseUrl}/blog/${b.slug})\n${b.excerpt}`
    )
  ];

  const content = lines.join("\n");

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
