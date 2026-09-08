"use client";

import { useState } from "react";
import { INDORE_LOCATIONS } from "@/data/locations";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    locality: "vijay-nagar",
    serviceType: "dinner-dates",
    preferredTime: "Evening (7 PM - 11 PM)",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-8 space-y-5 shadow-sm">
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-[#45474f]">Discreet Booking Request</h2>
        <p className="text-xs text-[#616161]">
          Submit your preferred engagement details. Our desk coordinator will reach out confidentially.
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in duration-300">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Inquiry Received Successfully</h3>
          <p className="text-xs text-emerald-800">
            Thank you. Our concierge will review your preferences and connect with you via your preferred channel within 15 minutes.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-3 py-2 px-4 rounded-xl bg-[#e31777] hover:bg-[#c41164] text-xs font-bold text-white transition cursor-pointer"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="contactName" className="text-gray-700 font-medium">Your Name / Alias *</label>
              <input
                id="contactName"
                type="text"
                required
                placeholder="e.g. Vikram"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#e31777] transition"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="contactPhone" className="text-gray-700 font-medium">WhatsApp / Phone *</label>
              <input
                id="contactPhone"
                type="tel"
                required
                placeholder="+91 98XXX XXXXX"
                value={formData.contactNumber}
                onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#e31777] transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="contactLocality" className="text-gray-700 font-medium">Target Indore Locality *</label>
              <select
                id="contactLocality"
                value={formData.locality}
                onChange={(e) => setFormData({ ...formData, locality: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-[#e31777] transition cursor-pointer"
              >
                {INDORE_LOCATIONS.map((loc) => (
                  <option key={loc.slug} value={loc.slug}>
                    {loc.name} ({loc.zone})
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="contactService" className="text-gray-700 font-medium">Service Engagement *</label>
              <select
                id="contactService"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-[#e31777] transition cursor-pointer"
              >
                <option value="dinner-dates">Dinner Date &amp; Dining</option>
                <option value="corporate-events">Corporate / Convention Travel</option>
                <option value="weekend-getaways">Weekend Staycation / Resort</option>
                <option value="vip-concierge">VIP Elite Concierge</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="contactNotes" className="text-gray-700 font-medium">Special Requests / Preferences</label>
            <textarea
              id="contactNotes"
              rows={3}
              placeholder="Specific hotel name, language preferences, or scheduling notes..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#e31777] transition"
            />
          </div>

          <div className="flex items-start gap-2 pt-1 text-xs text-gray-600">
            <input type="checkbox" required id="confirm-agreement" className="mt-0.5 rounded text-[#e31777] cursor-pointer" />
            <label htmlFor="confirm-agreement" className="cursor-pointer">
              I agree to the terms of service and respectful code of conduct. (18+ only)
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-[#e31777] hover:bg-[#c41164] text-white font-black transition shadow-lg shadow-[#e31777]/30 cursor-pointer text-sm"
          >
            Submit Confidential Request
          </button>
        </form>
      )}
    </div>
  );
}
