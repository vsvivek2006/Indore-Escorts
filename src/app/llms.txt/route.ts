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
    "# MySecretGirl69 - Elite Indore Call Girls & Escorts Service",
    "",
    "> Premium verified independent companion and executive escort directory in Indore, Madhya Pradesh. Providing transparent direct payment upon meeting, verified genuine photos, and fast 30 to 45-minute discreet outcall delivery to luxury 5-star hotel suites across Vijay Nagar, Palasia, Super Corridor, and 48 municipal sectors.",
    "",
    "## Quick Contact & Verification",
    `- **Official Website**: ${baseUrl}`,
    "- **WhatsApp Concierge**: https://wa.me/919006236133",
    "- **Telephone Hotline**: +91 90062 36133",
    "- **Operating Hours**: 24 Hours, 7 Days a Week",
    "- **Payment Policy**: Direct Payment Upon Meeting (Zero Advance). Settle directly with your companion or coordinator upon arrival. Zero upfront deposits, zero UPI registration fees, zero transit charges.",
    "",
    "## Core Services & Booking Options",
    ...SERVICES_DATA.map(
      (s) => `- [${s.title}](${baseUrl}/services/${s.slug}): ${s.shortDescription}`
    ),
    "",
    `## Verified Companion Roster (${COMPANION_MODELS.length} Profiles)`,
    ...COMPANION_MODELS.map(
      (m) =>
        `- [${m.name}](${baseUrl}/models/${m.id}): ${m.age} yrs, ${m.category}, ${m.locationsServed.slice(0, 2).join(" & ")}`
    ),
    "",
    `## Primary Locality Hubs (${INDORE_LOCATIONS.length} Indore Micro-Markets)`,
    ...INDORE_LOCATIONS.slice(0, 10).map(
      (l) => `- [${l.name}](${baseUrl}/locations/${l.slug}): ${l.metaDescription}`
    ),
    `- [All ${INDORE_LOCATIONS.length} Localities](${baseUrl}/locations): Complete municipal coverage map.`,
    "",
    "## Blog & Executive City Guides",
    ...BLOG_POSTS.map(
      (b) => `- [${b.title}](${baseUrl}/blog/${b.slug}): ${b.excerpt}`
    ),
    "",
    "## Safety & Legal Compliance",
    `- [Safety Guide](${baseUrl}/safety-guide): Comprehensive anti-fraud protocol detailing advance fee scam prevention and verified hotel venue guidelines.`,
    `- [About Us](${baseUrl}/about): Mission, ethical screening standards, and central Vijay Nagar dispatch desk.`,
    `- [Contact](${baseUrl}/contact): 24/7 concierge booking desk for instant hotel suite dispatch.`,
    `- [Privacy Policy](${baseUrl}/privacy-policy): Strict zero-data retention policy ensuring full digital privacy.`,
    `- [Terms of Service](${baseUrl}/terms): 18+ adult consent requirements and code of conduct.`,
    `- [Disclaimer](${baseUrl}/disclaimer): Legal autonomy disclosures and compliance statements.`
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
