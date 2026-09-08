"use client";

import { Phone, MessageCircle, Send } from "lucide-react";

export default function FloatingCTA() {
  const phone = "+919006236133";
  const whatsappNumber = "919006236133";
  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in your services in Indore Escorts. Is service available today?"
  );

  return (
    <>
      {/* Desktop Floating Action Icons (Exact positions from reference CSS) */}
      <div className="floating-icon whatsapp-icon">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </div>

      <div className="floating-icon call-icon">
        <a href={`tel:${phone}`} aria-label="Call Now">
          <Phone className="w-7 h-7 text-white" />
        </a>
      </div>

      <div className="floating-icon telegram-icon">
        <a
          href="https://t.me/mysecretgirl69"
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Telegram"
        >
          <Send className="w-6 h-6 text-white -translate-x-0.5" />
        </a>
      </div>

      {/* Mobile Bottom Docked Calling Bar (.nowcalling1: exact reference markup) */}
      <div className="nowcalling1">
        <div className="lcol">
          <a href={`tel:${phone}`}>
            <Phone className="w-5 h-5 text-white" />
            <span>+91 90062 36133</span>
          </a>
        </div>
        <div className="rcol">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
