"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log client error to console
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-white text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-50 border border-red-200 text-red-600 flex items-center justify-center mx-auto shadow-sm">
          <AlertCircle className="w-8 h-8" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">
            System Notice
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#334155] tracking-tight">
            Something Went Wrong
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            We encountered an unexpected issue while loading this page. You can attempt to reload the view or return to our directory homepage.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto min-h-[44px] py-2.5 px-6 rounded-full bg-[#e31777] hover:bg-[#c41164] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto min-h-[44px] py-2.5 px-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center gap-2 border border-gray-300 transition"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
