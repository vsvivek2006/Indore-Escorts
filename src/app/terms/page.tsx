import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | MySecretGirl69 Indore",
  description: "Terms and conditions governing the use of MySecretGirl69 Indore directory, service scope, and code of conduct.",
  alternates: {
    canonical: "https://mysecretgirl69.com/terms"
  }
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />

      <div className="my-8 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] text-xs font-bold">
          <Scale className="w-4 h-4" />
          <span>User Agreement &amp; Code of Conduct</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Last Updated: March 2026 • Mandatory Conditions for All Visitors
        </p>
      </div>

      <div className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-[#616161] leading-relaxed shadow-sm">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">1. User Eligibility &amp; Agreement</h2>
          <p>
            By accessing or using this website, you confirm that you have the legal capacity to enter into binding agreements and that you agree to comply with all applicable local, state, and national regulations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">2. Nature of Services</h2>
          <p>
            MySecretGirl69 Indore is an informational and advertising directory. We facilitate introductions between consenting adult clients and independent social companions for events such as dinner dates, social galas, and travel accompaniment. The company does NOT employ companions, nor does it control or dictate the personal boundaries of independent adults.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">3. Zero Tolerance for Illegal Activity &amp; Exploitation</h2>
          <p>
            This website strictly prohibits any unlawful conduct, including but not limited to: human trafficking, child exploitation, non-consensual solicitation, intimidation, illegal narcotics, or brothel-keeping under the Immoral Traffic (Prevention) Act (ITPA). Any suspicion of illegal coercion will be immediately reported to law enforcement authorities in Indore.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">4. Client Code of Conduct</h2>
          <p>
            Clients must treat all companions with courtesy, dignity, and respect. Intoxication, aggressive behavior, unauthorized photography or videography, or boundary violations will result in immediate termination of any meeting and permanent banning from the directory network.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">5. Independent Arrangements &amp; Financial Transparency</h2>
          <p>
            All companionship arrangements and gratuities are settled directly and independently between consenting adults. MySecretGirl69 Indore acts purely as an informational advertising directory and bears no liability for independent private agreements or transactions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">6. Jurisdiction &amp; Legal Governance</h2>
          <p>
            These terms are governed exclusively by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Indore, Madhya Pradesh.
          </p>
        </section>
      </div>
    </div>
  );
}
