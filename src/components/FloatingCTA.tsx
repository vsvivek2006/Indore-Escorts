"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  const phone = "+919006236133";
  const whatsappNumber = "919006236133";
  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in your services in Indore Escorts. Is service available today?"
  );

  return (
    <>
      {/* Desktop Floating Action Icons */}
      <div className="floating-icon whatsapp-icon">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="WhatsApp Concierge"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </div>

      <div className="floating-icon call-icon">
        <a href={`tel:${phone}`} aria-label="Call Now">
          <Phone className="w-7 h-7 text-white" />
        </a>
      </div>
    </>
  );
}
