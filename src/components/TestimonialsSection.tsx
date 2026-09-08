import { TESTIMONIALS } from "@/data/testimonials";
import { Star, CheckCircle, MapPin, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: "MySecretGirl69 Indore",
      image: "https://mysecretgirl69.com/images/hero_banner.jpg",
      telephone: "+91-9006236133",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Scheme 54, Vijay Nagar",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        postalCode: "452010",
        addressCountry: "IN"
      }
    },
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "148",
    reviewCount: TESTIMONIALS.length.toString()
  };

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@graph": TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.clientName
      },
      datePublished: "2026-08-01",
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating.toString(),
        bestRating: "5",
        worstRating: "1"
      },
      reviewBody: t.quote,
      itemReviewed: {
        "@type": "LocalBusiness",
        name: "MySecretGirl69 Indore"
      }
    }))
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-rose-50/30 to-white border-y border-slate-200/80 w-full" aria-label="Client Testimonials and Reviews">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e31777] bg-pink-50 border border-pink-200 px-3.5 py-1 rounded-full">
            Real Experiences &bull; 100% Confidential
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
            Captivating <span className="text-[#e31777]">Client Stories</span> &amp; Reviews
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our premier Indore escort service has left a trail of delighted corporate guests, hotel travelers, and locals who rave about discretion, punctual arrival, and authentic profiles.
          </p>
          <div className="inline-flex items-center gap-2 pt-2 text-xs font-bold text-slate-700 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span><strong>4.9 / 5.0</strong> based on 140+ verified appointments in Indore</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="relative rounded-2xl bg-white border border-slate-200 hover:border-[#e31777] p-6 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Top Row: Stars + Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {t.verifiedBooking && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Verified Stay</span>
                    </span>
                  )}
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-pink-100 absolute -top-2 -left-2 -z-0 opacity-70 group-hover:text-pink-200 transition-colors" />
                  <p className="relative z-10 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom Meta */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e31777] to-[#c2185b] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    {t.clientName.slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-sans font-bold text-slate-900">
                      {t.clientName}
                    </h3>
                    <p className="text-[11px] text-slate-500">{t.clientRole}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#e31777]">
                    <MapPin className="w-3 h-3 text-[#e31777]" />
                    <span className="truncate max-w-[120px]">{t.locality}</span>
                  </span>
                  <span className="block text-[10px] text-slate-400">{t.reviewDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Bar */}
        <div className="mt-12 rounded-2xl bg-white border border-pink-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
              Want to Experience the Same High Standard of Companionship?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Direct telephone or WhatsApp coordination. 100% privacy, verified photos, zero hidden advance fees.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="tel:+919006236133"
              className="py-3 px-6 rounded-full bg-[#e31777] hover:bg-[#c2185b] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
            >
              Call Concierge Desk
            </a>
            <a
              href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20arranging%20a%20verified%20companion%20in%20Indore."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full bg-[#1fa34a] hover:bg-[#168039] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
