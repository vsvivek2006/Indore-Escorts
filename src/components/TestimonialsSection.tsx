"use client";

import { useState, useEffect, useRef } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star, CheckCircle, MapPin, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(1);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-advance every 5.5s unless hovered or interacted
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

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
    <section
      className="py-14 sm:py-18 bg-gradient-to-b from-white via-rose-50/25 to-white border-y border-slate-200/80 w-full relative overflow-hidden"
      aria-label="Client Testimonials and Reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      {/* Decorative ambient lighting aura */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-gradient-to-r from-pink-200/20 via-rose-100/15 to-pink-200/20 blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#e31777] bg-pink-100/70 border border-pink-200 px-3.5 py-1 rounded-full inline-block">
            Verified Guest Reviews &bull; 100% Confidential
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
            What Our Guests Say About Their <span className="text-[#e31777]">Time With Us</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From executive business travelers to gentlemen seeking relaxed private company, read genuine feedback from guests who trust our discretion, real photos, and warm hospitality.
          </p>
          <div className="inline-flex items-center gap-2 pt-1 text-xs font-bold text-slate-700 bg-white/90 backdrop-blur-xs px-4 py-1.5 rounded-full border border-pink-100 shadow-xs">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span><strong>4.9 / 5.0</strong> rating across 140+ verified appointments in Indore</span>
          </div>
        </div>

        {/* Interactive Slider Container with Touch Swipe */}
        <div
          className="relative max-w-5xl mx-auto"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous / Next Arrow Controls */}
          <div className="hidden sm:flex items-center justify-between absolute -left-5 -right-5 top-1/2 -translate-y-1/2 pointer-events-none z-20">
            <button
              onClick={prevSlide}
              aria-label="Previous review"
              className="pointer-events-auto w-11 h-11 rounded-full bg-white hover:bg-[#e31777] text-slate-700 hover:text-white border border-slate-200 hover:border-[#e31777] shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next review"
              className="pointer-events-auto w-11 h-11 rounded-full bg-white hover:bg-[#e31777] text-slate-700 hover:text-white border border-slate-200 hover:border-[#e31777] shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Cards Showcase (3-Card Multi-View on Desktop, Single Card on Mobile) */}
          <div className="overflow-hidden py-4 px-1">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {TESTIMONIALS.map((t, index) => (
                <div
                  key={t.id}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 p-3"
                >
                  <div className="h-full relative rounded-3xl bg-white/95 backdrop-blur-md border border-pink-100 shadow-luxury-card hover:shadow-luxury-hover p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group">
                    <div className="space-y-4">
                      {/* Top Row: Stars + Verified Badge */}
                      <div className="flex items-center justify-between">
                        <div className="flex text-amber-400">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        {t.verifiedBooking && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-sans">
                            <CheckCircle className="w-3 h-3 text-emerald-600" />
                            <span>Verified Stay</span>
                          </span>
                        )}
                      </div>

                      {/* Quote Text with Watermark Quote Icon */}
                      <div className="relative">
                        <Quote className="w-8 h-8 text-pink-100 absolute -top-3 -left-2 -z-0 opacity-70 group-hover:text-pink-200 transition-colors" />
                        <p className="relative z-10 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Bottom Meta */}
                    <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e31777] to-[#c2185b] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-pink-500/25">
                          {t.clientName.slice(0, 2)}
                        </div>
                        <div>
                          <h3 className="text-xs sm:text-sm font-sans font-bold text-slate-900 group-hover:text-[#e31777] transition-colors">
                            {t.clientName}
                          </h3>
                          <p className="text-[11px] text-slate-500">{t.clientRole}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#e31777]">
                          <MapPin className="w-3 h-3 text-[#e31777]" />
                          <span className="truncate max-w-[110px]">{t.locality}</span>
                        </span>
                        <span className="block text-[10px] text-slate-400">{t.reviewDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Navigation Dots & Mobile Controls */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {/* Mobile Previous Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous review"
              className="sm:hidden w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-pink-100 shadow-xs">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-6 bg-gradient-to-r from-[#e31777] to-[#c2185b]"
                      : "w-2 bg-slate-200 hover:bg-pink-300"
                  }`}
                />
              ))}
            </div>

            {/* Mobile Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next review"
              className="sm:hidden w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Assurance Card */}
        <div className="mt-12 rounded-3xl bg-white border border-pink-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-luxury-card text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-heading font-bold text-slate-900">
              Ready for a Relaxing, Memorable Evening in Indore?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Connect directly with our friendly coordinator. Handpicked companions, 100% privacy, pay only when you meet.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="tel:+919006236133"
              className="py-3 px-6 rounded-full bg-[#e31777] hover:bg-[#c2185b] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              Call Coordinator
            </a>
            <a
              href="https://wa.me/919006236133?text=Hi%2C%20I'm%20interested%20in%20arranging%20a%20verified%20companion%20in%20Indore."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-full bg-[#25d366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
