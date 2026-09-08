import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Banknote,
  Car,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Concierge Desk | MySecretGirl69 Indore & Escorts",
  description:
    "Connect 24/7 with our central booking coordinator via telephone hotline or WhatsApp for immediate companion availability across Vijay Nagar, Palasia, and luxury hotels in Indore.",
  alternates: {
    canonical: "https://mysecretgirl69.com/contact"
  },
  openGraph: {
    title: "Contact Concierge Desk | MySecretGirl69 Indore & Escorts",
    description:
      "24/7 confidential assistance for companion bookings in Indore. Direct coordination via phone or WhatsApp.",
    url: "https://mysecretgirl69.com/contact",
    siteName: "MySecretGirl69 Indore"
  }
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://mysecretgirl69.com/contact#webpage",
        url: "https://mysecretgirl69.com/contact",
        name: "Contact Concierge Desk | MySecretGirl69 Indore",
        description: "24/7 confidential assistance for companion bookings in Indore.",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://mysecretgirl69.com/#website",
          name: "MySecretGirl69 Indore",
          url: "https://mysecretgirl69.com"
        },
        breadcrumb: {
          "@id": "https://mysecretgirl69.com/contact#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mysecretgirl69.com/contact#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mysecretgirl69.com"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Us",
            item: "https://mysecretgirl69.com/contact"
          }
        ]
      }
    ]
  };

  const contactFaqs = [
    {
      question: "How fast will a coordinator respond on WhatsApp or phone?",
      answer: "Our central booking desk operates 24 hours a day, 7 days a week. We typically respond to incoming WhatsApp messages and telephone inquiries in under 3 to 5 minutes."
    },
    {
      question: "Do I need to pay any advance deposit or cab fare during booking?",
      answer: "No. We enforce a zero upfront payment policy across Indore. You never pay any advance booking fees, registration charges, or taxi allowances. You settle the agreed honorarium directly upon meeting your companion."
    },
    {
      question: "What details do I need to provide when placing a booking?",
      answer: "Simply share your preferred meeting venue (hotel name and room number or residential area), preferred appointment timing, and the name or ID of the companion you wish to invite."
    },
    {
      question: "Are out-call services available to five-star hotels in Indore?",
      answer: "Yes, our companions routinely visit major star-rated hotels including Sayaji Hotel, Indore Marriott, Radisson Blu, Sheraton Grand Palace, and WOW Hotel with complete discretion."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Breadcrumbs items={[{ label: "Contact Us" }]} />

      {/* Hero Header */}
      <div className="my-8 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] text-xs font-bold">
          <Clock className="w-4 h-4" />
          <span>24/7 Confidential Concierge Assistance</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
          Contact Our Indore Concierge Desk
        </h1>
        <p className="text-sm sm:text-base text-[#616161] leading-relaxed">
          Connect directly with our central booking coordinator via phone, WhatsApp, or encrypted messaging for instantaneous companion availability across Vijay Nagar, Palasia, and luxury hotels in Indore.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-5">
          <div className="rounded-2xl bg-white border border-gray-200 p-6 space-y-4 shadow-sm">
            <h2 className="text-lg font-bold text-[#45474f] flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#e31777]" />
              <span>Direct Booking Channels</span>
            </h2>
            <p className="text-xs text-gray-500">
              Select your preferred communication method for instant, confidential coordination:
            </p>

            {/* Direct Call */}
            <a
              href="tel:+919006236133"
              className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#e31777] flex items-center gap-3.5 transition group"
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-500 block">Telephone Hotline</span>
                <span className="text-sm font-bold text-gray-900 group-hover:text-[#e31777] transition">
                  +91 90062 36133
                </span>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919006236133?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20companion%20in%20Indore."
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-emerald-500 flex items-center gap-3.5 transition group"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-500 block">WhatsApp Desk</span>
                <span className="text-sm font-bold text-gray-900 group-hover:text-emerald-600 transition">
                  +91 90062 36133
                </span>
              </div>
            </a>
          </div>

          {/* Operational Standards Box */}
          <div className="rounded-2xl bg-pink-50/50 border border-pink-100 p-6 space-y-3 text-xs text-[#616161] shadow-xs">
            <div className="flex items-center gap-2 font-bold text-[#45474f] text-sm mb-1">
              <MapPin className="w-4 h-4 text-[#e31777]" />
              <span>Service Area &amp; Availability</span>
            </div>
            <p><strong>Operating Hours:</strong> 24 Hours / 7 Days a Week</p>
            <p><strong>Central HQ:</strong> Scheme 54, Vijay Nagar, Indore</p>
            <p><strong>Response Time:</strong> Under 5 minutes via WhatsApp</p>
            <p><strong>Payment Policy:</strong> Direct In-Person Settlement (Zero Advance)</p>
          </div>
        </div>

        {/* Right Column: Confidential Inquiry Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>

      {/* Indore Sector Dispatch Timeline & Logistics Matrix */}
      <section className="my-14 rounded-3xl bg-white border border-gray-200 p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
            Rapid Response Network
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#45474f] tracking-tight mt-1">
            Indore Locality Dispatch Logistics &amp; Arrival Timelines
          </h2>
          <p className="text-xs sm:text-sm text-[#616161] mt-2 leading-relaxed">
            Our independent companions are strategically stationed throughout central and eastern Indore, ensuring swift, discreet executive cab arrival directly to your hotel or private residence:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
            <strong className="text-sm font-bold text-gray-900 flex items-center justify-between">
              <span>Vijay Nagar &amp; Scheme 54</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">25–35 Mins</span>
            </strong>
            <p className="text-xs text-gray-600 leading-relaxed">
              Immediate dispatch to Sayaji Hotel, C21 Mall, Malhar Mega Mall, and Brilliant Convention Centre.
            </p>
            <Link href="/locations/vijay-nagar" className="text-xs font-bold text-[#e31777] hover:underline block pt-1">
              Explore Vijay Nagar Guide →
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
            <strong className="text-sm font-bold text-gray-900 flex items-center justify-between">
              <span>Palasia &amp; South Tukoganj</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">30–40 Mins</span>
            </strong>
            <p className="text-xs text-gray-600 leading-relaxed">
              Rapid transit to 56 Dukan, Greater Kailash Road, private luxury apartments, and central boutique hotels.
            </p>
            <Link href="/locations/palasia" className="text-xs font-bold text-[#e31777] hover:underline block pt-1">
              Explore Palasia Guide →
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
            <strong className="text-sm font-bold text-gray-900 flex items-center justify-between">
              <span>MR-10 &amp; Super Corridor</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">30–45 Mins</span>
            </strong>
            <p className="text-xs text-gray-600 leading-relaxed">
              Prompt coordination for Radisson Blu, corporate IT hubs (TCS/Infosys), and Devi Ahilya Airport hotels.
            </p>
            <Link href="/locations/super-corridor" className="text-xs font-bold text-[#e31777] hover:underline block pt-1">
              Explore Super Corridor Guide →
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
            <strong className="text-sm font-bold text-gray-900 flex items-center justify-between">
              <span>Bypass Road &amp; Bicholi</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">35–45 Mins</span>
            </strong>
            <p className="text-xs text-gray-600 leading-relaxed">
              Direct accompaniment to Sheraton Grand Palace, luxury farmhouses, and tranquil highway resorts.
            </p>
            <Link href="/locations/indore-bypass" className="text-xs font-bold text-[#e31777] hover:underline block pt-1">
              Explore Bypass Road Guide →
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
            <strong className="text-sm font-bold text-gray-900 flex items-center justify-between">
              <span>Bhawarkuan &amp; AB Road</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">30–40 Mins</span>
            </strong>
            <p className="text-xs text-gray-600 leading-relaxed">
              Convenient access to southern commercial sectors, university campuses, and Sapna Sangeeta dining.
            </p>
            <Link href="/locations/bhawarkuan" className="text-xs font-bold text-[#e31777] hover:underline block pt-1">
              Explore Bhawarkuan Guide →
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
            <strong className="text-sm font-bold text-gray-900 flex items-center justify-between">
              <span>Rau &amp; Pithampur Industrial</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">45–60 Mins</span>
            </strong>
            <p className="text-xs text-gray-600 leading-relaxed">
              Scheduled executive accompaniment to corporate manufacturing guest houses and highway hotels.
            </p>
            <Link href="/locations/rau" className="text-xs font-bold text-[#e31777] hover:underline block pt-1">
              Explore Rau Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Contact Questions */}
      <section className="my-14">
        <FaqAccordion
          faqs={contactFaqs}
          title="Concierge &amp; Booking Coordination FAQs"
          subtitle="Everything you need to know about placing a reservation, arrival logistics, and payment policies in Indore."
        />
      </section>

      {/* Internal Navigation Links Footer */}
      <div className="p-6 rounded-2xl bg-pink-50/50 border border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="text-gray-700 leading-relaxed">
          <strong>Ready to browse active companions?</strong> View our{" "}
          <Link href="/models" className="text-[#e31777] font-bold hover:underline">20 Verified Profiles</Link>, read our{" "}
          <Link href="/safety-guide" className="text-[#e31777] font-bold hover:underline">Safety Advisory</Link>, or consult our{" "}
          <Link href="/blog/top-luxury-hotels-indore" className="text-[#e31777] font-bold hover:underline">5-Star Hotel Guide</Link>.
        </div>
        <Link
          href="/models"
          className="px-5 py-2.5 rounded-xl bg-[#e31777] hover:bg-[#c2185b] text-white font-bold transition shrink-0 flex items-center gap-1"
        >
          <span>Browse Models</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
