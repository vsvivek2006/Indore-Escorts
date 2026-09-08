import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES_DATA, getServiceBySlug } from "@/data/services";
import { COMPANION_MODELS } from "@/data/models";
import { INDORE_LOCATIONS } from "@/data/locations";
import Breadcrumbs from "@/components/Breadcrumbs";
import ModelCard from "@/components/ModelCard";
import FaqAccordion from "@/components/FaqAccordion";
import {
  Sparkles,
  Phone,
  MessageCircle,
  ShieldCheck,
  Star,
  Hotel,
  CheckCircle2,
  AlertCircle,
  Banknote,
  ArrowRight
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://mysecretgirl69.com/services/${service.slug}`
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://mysecretgirl69.com/services/${service.slug}`
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Matching models for this service category
  const matchingModels = COMPANION_MODELS.slice(0, 4);

  // Other services for internal cross-linking
  const otherServices = SERVICES_DATA.filter((s) => s.slug !== service.slug);

  // Prime localities for cross-linking
  const primeLocalities = INDORE_LOCATIONS.slice(0, 8);

  const whatsappMessage = encodeURIComponent(
    `Hello MySecretGirl69 Indore, I am interested in inquiring about ${service.title} in Indore.`
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://mysecretgirl69.com/services/${service.slug}#service`,
        name: service.title,
        description: service.fullDescription,
        provider: {
          "@type": "Organization",
          name: "MySecretGirl69 Indore",
          url: "https://mysecretgirl69.com"
        },
        areaServed: {
          "@type": "City",
          name: "Indore"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://mysecretgirl69.com/services/${service.slug}#breadcrumb`,
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
            name: "Services",
            item: "https://mysecretgirl69.com/services"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://mysecretgirl69.com/services/${service.slug}`
          }
        ]
      }
    ]
  };

  const serviceFaqs = [
    {
      question: `How far in advance should I book ${service.title} in Indore?`,
      answer: `While immediate same-day bookings are dispatched within 30 to 45 minutes across major sectors like Vijay Nagar and Palasia, we recommend scheduling 2 to 4 hours in advance for specialized attire coordination, outstation travel, or multi-course dinner reservations.`
    },
    {
      question: `Is advance payment or registration fee required for ${service.title}?`,
      answer: `Never. We enforce a strict zero advance policy across all our services. You settle the honorarium directly upon meeting your verified companion.`
    },
    {
      question: `Can the companion accompany me to luxury hotel restaurants in Indore?`,
      answer: `Yes, our companions are experienced in high-end social etiquette and comfortably accompany clients to five-star venues such as Mediterra at Sayaji Hotel, Indore Kitchen at Indore Marriott, and The Square at Novotel.`
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.title }
        ]}
      />

      {/* Hero Header Box */}
      <div className="my-8 rounded-3xl bg-gradient-to-r from-[#ffeeee]/90 via-[#fff5f8] to-[#f9e8ff]/90 border border-pink-200 p-6 sm:p-10 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 border border-pink-300 text-[#e31777] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Indore Bespoke Experience</span>
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Companions
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-100 text-[#b30000] text-xs font-bold">
            <Banknote className="w-3.5 h-3.5" />
            Direct Payment on Meet
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
          {service.title} in Indore
        </h1>
        <p className="text-base sm:text-lg text-[#e31777] font-bold">
          {service.shortDescription}
        </p>
        <p className="text-xs sm:text-sm text-[#616161] leading-relaxed max-w-3xl">
          Experience unrivaled discretion, warmth, and conversational charm with hand-selected independent companions tailored specifically for {service.title.toLowerCase()} across Indore&apos;s leading sectors.
        </p>

        {/* Quick Booking CTAs */}
        <div className="pt-3 flex flex-wrap items-center gap-3">
          <a
            href="tel:+919006236133"
            className="py-3 px-6 rounded-xl bg-gradient-to-r from-[#b30000] to-[#ff2b2b] hover:from-[#c40000] hover:to-[#ff4545] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
          >
            <Phone className="w-4 h-4" />
            <span>Call Concierge Desk (+91 90062 36133)</span>
          </a>
          <a
            href={`https://wa.me/919006236133?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-xl bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book via WhatsApp</span>
          </a>
          <Link
            href="/safety-guide"
            className="py-3 px-5 rounded-xl bg-white border border-gray-300 hover:border-[#e31777] text-gray-700 hover:text-[#e31777] font-semibold text-xs sm:text-sm flex items-center gap-2 transition"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Anti-Scam Guide</span>
          </Link>
        </div>
      </div>

      {/* Main Narrative on Service Experience */}
      <section className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-10 my-8 space-y-4 shadow-sm">
        <h2 className="text-2xl font-bold text-[#45474f] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#e31777]" />
          <span>Understanding {service.title} in Indore</span>
        </h2>
        <div className="space-y-4 text-xs sm:text-sm text-[#616161] leading-relaxed">
          <p>
            {service.fullDescription}
          </p>
          <p>
            Indore has evolved rapidly into central India&apos;s prime commercial and cultural capital. Between the high-density corporate offices of the Super Corridor, major industrial hubs in Pithampur and Sanwer Road, and premier convention venues like the Brilliant Convention Centre, visiting executives and discerning residents often find themselves seeking exceptional social company. Our dedicated service caters precisely to those who value intelligence, natural charm, and effortless social grace.
          </p>
          <p>
            Every companion available for this offering is rigorously pre-screened to ensure absolute authenticity, emotional maturity, and the ability to seamlessly integrate into high-end public or private environments. Whether attending a formal dinner at a five-star hotel restaurant or enjoying quiet in-suite relaxation, you are assured of an unhurried, thoroughly enjoyable encounter.
          </p>
        </div>
      </section>

      {/* Features & Venues Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        {/* Features */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-4 shadow-sm">
          <h3 className="text-base font-bold text-[#45474f] flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500" />
            <span>Key Service Inclusions &amp; Highlights</span>
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#616161]">
            {service.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Venues */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-4 shadow-sm">
          <h3 className="text-base font-bold text-[#45474f] flex items-center gap-2">
            <Hotel className="w-5 h-5 text-[#e31777]" />
            <span>Recommended Indore Venues</span>
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#616161]">
            {service.idealVenuesInIndore.map((venue, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e31777] mt-1.5 shrink-0" />
                <span>{venue}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2 text-xs">
            <Link href="/blog/top-luxury-hotels-indore" className="text-[#e31777] font-semibold hover:underline">
              Read our full Indore 5-Star Hotel Guide →
            </Link>
          </div>
        </div>
      </div>

      {/* Etiquette & Responsible Conduct */}
      <div className="rounded-2xl bg-pink-50/50 border border-pink-100 p-6 sm:p-8 my-8 space-y-4 shadow-sm">
        <h3 className="text-base font-bold text-[#45474f] flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          <span>Client Etiquette &amp; Confidentiality Protocol</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#616161]">
          To maintain the highest caliber of service and ensure mutual comfort, we ask clients to observe our foundational etiquette standards:
        </p>
        <ul className="space-y-2.5 text-xs sm:text-sm text-[#616161]">
          {service.etiquetteAndExpectations.map((eti, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-[#e31777] mt-0.5 shrink-0" />
              <span>{eti}</span>
            </li>
          ))}
          <li className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-[#e31777] mt-0.5 shrink-0" />
            <span><strong>Direct Payment:</strong> No advance deposits or registration fees are ever demanded. Settle honorariums directly upon meeting.</span>
          </li>
        </ul>
      </div>

      {/* Recommended Companions Available for this Service */}
      <section className="my-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
              Verified Companions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#45474f] tracking-tight mt-1">
              Top Companions Available for {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#616161] mt-1">
              Experienced, verified independent models ready for immediate appointment scheduling in Indore.
            </p>
          </div>
          <Link
            href="/models"
            className="text-xs font-bold text-[#e31777] hover:underline transition flex items-center gap-1"
          >
            <span>View All Profiles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {matchingModels.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </section>

      {/* Popular Indore Sectors for this Service */}
      <section className="my-12 rounded-3xl bg-gray-50 border border-gray-200 p-6 sm:p-10 space-y-4">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e31777]">
            Locality Coverage
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#45474f] mt-1">
            Prime Indore Locations for {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#616161] mt-1">
            Our companions provide prompt out-call service to luxury hotels and executive residences across these key sectors:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {primeLocalities.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="p-3.5 rounded-xl bg-white hover:bg-pink-50 border border-gray-200 hover:border-[#e31777] transition flex items-center justify-between group shadow-xs"
            >
              <div>
                <strong className="text-xs font-bold text-gray-800 group-hover:text-[#e31777] transition block">
                  {loc.name}
                </strong>
                <span className="text-[11px] text-gray-500">{loc.zone}</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#e31777] shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* Service FAQs */}
      <section className="my-14">
        <FaqAccordion
          faqs={serviceFaqs}
          title={`${service.title} FAQs`}
          subtitle="Frequently asked questions regarding scheduling, dress code, safety, and payment policies in Indore."
        />
      </section>

      {/* Other Services Matrix */}
      <section className="my-12 rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 space-y-4 shadow-sm">
        <h3 className="text-lg font-bold text-[#45474f]">
          Explore Other Bespoke Companionship Services in Indore
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {otherServices.map((oth) => (
            <Link
              key={oth.slug}
              href={`/services/${oth.slug}`}
              className="p-4 rounded-xl bg-pink-50/50 hover:bg-pink-100/70 border border-pink-200 transition group space-y-1"
            >
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#e31777] transition">
                {oth.title}
              </h4>
              <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                {oth.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust & Coordinator Reminder */}
      <div className="p-5 rounded-2xl bg-pink-50/50 border border-pink-100 text-xs text-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        <div>
          <strong>Questions regarding arranging {service.title.toLowerCase()}?</strong> Our central coordinator is available 24/7. Learn more in our <Link href="/about" className="text-[#e31777] font-bold hover:underline">About Us</Link> overview or <Link href="/safety-guide" className="text-[#e31777] font-bold hover:underline">Safety Advisory</Link>.
        </div>
        <Link
          href="/contact"
          className="px-5 py-2.5 rounded-xl bg-[#e31777] hover:bg-[#c2185b] text-white font-bold transition shrink-0"
        >
          Contact Coordinator →
        </Link>
      </div>
    </div>
  );
}
