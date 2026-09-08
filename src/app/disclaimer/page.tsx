import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Disclaimer & ITPA Notice | MySecretGirl69 Indore",
  description:
    "Statutory legal disclaimer, ITPA compliance, non-solicitation declaration, and adult directory status of MySecretGirl69 Indore.",
  alternates: {
    canonical: "https://mysecretgirl69.com/disclaimer"
  }
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />

      <div className="my-8 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold">
          <AlertTriangle className="w-4 h-4" />
          <span>Statutory Compliance Declaration</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
          Legal &amp; Compliance Disclaimer
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Operated in strict adherence to applicable Indian laws and IT regulations.
        </p>
      </div>

      <div className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-[#616161] leading-relaxed shadow-sm">
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <strong>Important Declaration:</strong> This platform is purely an advertising and directory index for independent social companions. We do not promote, facilitate, or condone prostitution, solicitation, brothel-keeping, or pimping under the Immoral Traffic (Prevention) Act (ITPA).
          </div>
        </div>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">1. Immoral Traffic (Prevention) Act (ITPA) Statement</h2>
          <p>
            The website operator does not maintain any brothel, room, or establishment for immoral traffic. The platform acts solely as a communication and concierge directory for independent adult individuals. Any exchange of services between private consenting adults is outside the purview and responsibility of this platform.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">2. Photographic &amp; Profile Representations</h2>
          <p>
            Certain images on this platform are used for illustrative and privacy-preservation purposes to safeguard the personal identities and reputations of independent companions. All depicted profiles represent consenting independent companions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">3. Independent Advertising Directory</h2>
          <p>
            MySecretGirl69 Indore operates solely as an informational directory and concierge guide. We do not process transactions or collect financial fees on behalf of independent companions. All arrangements are conducted privately and independently between consenting adults.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#45474f]">4. Limitation of Liability</h2>
          <p>
            MySecretGirl69 Indore assumes no liability for interactions, private meetings, travel arrangements, or financial disputes between adult companions and clients. Users are solely responsible for exercising standard personal precautions and diligence.
          </p>
        </section>
      </div>
    </div>
  );
}
