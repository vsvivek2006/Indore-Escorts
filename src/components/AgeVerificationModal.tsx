"use client";

import { useState, useEffect } from "react";

export default function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const isVerified = localStorage.getItem("indore_age_verified");
      if (!isVerified) {
        setIsOpen(true);
      }
    } catch {
      setIsOpen(false);
    }
  }, []);

  const handleConfirm = () => {
    try {
      localStorage.setItem("indore_age_verified", "true");
    } catch {
      // Ignore storage errors
    }
    setIsOpen(false);
  };

  const handleReject = () => {
    window.location.href = "https://www.google.com";
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-[10px] animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-modal-title"
    >
      <div
        className="bg-black text-white max-w-[440px] w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-[24px] text-center shadow-[0_30px_90px_rgba(0,0,0,0.9)] border border-[rgba(120,0,30,0.45)]"
      >
        <h2 id="age-modal-title" className="text-[22px] font-black tracking-[0.6px] mb-3 text-[#ff4d6d]">
          WARNING: 18+ ADULT CONTENT
        </h2>

        <p className="text-[14px] leading-[1.7] text-[#d0d0d0]">
          This website contains age-restricted adult companionship materials. If you are under the age of 18 or browsing where adult services are restricted, you must exit immediately.
        </p>

        <p className="text-[14px] font-bold text-[#ff758c] my-3">
          By clicking &quot;Enter&quot;, you confirm:
        </p>

        <ul className="text-left text-[13px] text-[#e0e0e0] space-y-1.5 my-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
          <li className="flex items-center gap-2">
            <span className="text-[#ff4d6d] font-bold">✔</span>
            <span>You are at least 18 years of age.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#ff4d6d] font-bold">✔</span>
            <span>You consent to viewing adult companion information.</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-[#ff4d6d] font-bold">✔</span>
            <span>You will not distribute this content to minors.</span>
          </li>
        </ul>

        <p className="text-[12px] text-[#a0a0a0] border-t border-white/10 pt-3 mb-5">
          Zero tolerance policy towards non-consensual exploitation or human trafficking.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 px-4 rounded-xl text-[14px] font-extrabold text-white bg-gradient-to-r from-[#ff4d6d] to-[#c41e3b] shadow-[0_4px_15px_rgba(255,77,109,0.4)] hover:brightness-110 transition cursor-pointer"
          >
            I Am 18+ (Enter)
          </button>
          <button
            onClick={handleReject}
            className="flex-1 py-3 px-4 rounded-xl text-[14px] font-extrabold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition cursor-pointer"
          >
            Exit (Leave)
          </button>
        </div>
      </div>
    </div>
  );
}
