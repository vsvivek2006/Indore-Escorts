"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function FaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Clear, accurate answers regarding our companion directory, privacy standards, and local Indore coordination."
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <section className="my-12" aria-labelledby="faq-section-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center max-w-3xl mx-auto mb-8">
        <h2 id="faq-section-heading" className="text-xl sm:text-2xl lg:text-3xl font-heading text-[#45474f] tracking-wide leading-relaxed">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-gray-600 mt-2">{subtitle}</p>
        )}
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const buttonId = `faq-trigger-${idx}`;
          const panelId = `faq-panel-${idx}`;

          return (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 bg-white shadow-xs overflow-hidden transition-all duration-200"
            >
              <button
                id={buttonId}
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition cursor-pointer min-h-[48px]"
              >
                <span className="font-semibold text-sm sm:text-base text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#e31777] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={`px-4 sm:px-5 pb-5 pt-2 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
