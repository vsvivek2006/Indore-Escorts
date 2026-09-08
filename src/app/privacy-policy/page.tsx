import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | MySecretGirl69 Indore",
  description: "Our commitment to user privacy, data minimization, cookie usage, and zero tracking of sensitive personal data.",
  alternates: {
    canonical: "https://mysecretgirl69.com/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <div className="my-8 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] text-xs font-bold">
          <Lock className="w-4 h-4" />
          <span>Data Protection &amp; Privacy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Last Updated: March 2026 • Strict Data Minimization Protocols
        </p>
      </div>

      <div className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-[#616161] leading-relaxed shadow-sm">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">1. Principles of Data Minimization</h2>
          <p>
            MySecretGirl69 Indore is designed with privacy-first architecture. We believe the safest data is the data never collected. We do NOT require users to register accounts, upload identification, or store payment card details on our servers to browse our directory.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">2. Information We Collect</h2>
          <p>
            When you submit a contact or booking inquiry, we collect only the minimal details you voluntarily provide (e.g., your preferred name or alias, contact number, preferred locality in Indore, and scheduling notes). This information is utilized solely to facilitate the requested companion coordination and is purged regularly from operational logs.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">3. Cookies &amp; Local Storage</h2>
          <p>
            We practice strict technical minimalism. We do not store tracking cookies, third-party analytics pixels, or behavioral advertising identifiers in your browser. Any local session state is used purely for essential website layout functionality.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">4. Third-Party Links &amp; External Platforms</h2>
          <p>
            Our website provides direct links to communication platforms such as phone and WhatsApp. When communicating over external messaging apps, your interactions are governed by their respective end-to-end encryption and privacy policies. We encourage users to enable disappearing messages for added peace of mind.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">5. Disclosure to Authorities</h2>
          <p>
            We comply with lawful court orders and legitimate statutory obligations under the Information Technology Act of India. We do not sell, rent, or commercialize visitor data to any marketing brokers or third-party networks.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">6. Contacting Privacy Governance</h2>
          <p>
            If you have questions regarding our privacy practices or wish to request the deletion of any inquiry records, you may email our data protection desk at: <strong>privacy@mysecretgirl69.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
