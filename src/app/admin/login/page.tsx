"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, Mail, Eye, EyeOff, Loader2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { createClient } from "@/lib/supabase/client";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/admin/blog/generate";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });

      if (error) {
        setErrorMessage(error.message || "Invalid credentials. Please verify your email and password.");
        toast.error("Sign in failed", { description: error.message });
        setIsLoading(false);
        return;
      }

      if (data?.user) {
        toast.success("Welcome back! Signed in successfully.");
        router.push(redirectTo);
        router.refresh();
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unexpected sign-in error occurred.";
      setErrorMessage(msg);
      toast.error(msg);
      setIsLoading(false);
    }
  };

  const handleQuickFill = () => {
    setEmail("admin@mysecretgirl69.com");
    setPassword("Admin@Indore2026");
    toast.info("Admin credentials autofilled!");
  };

  return (
    <div className="w-full max-w-md relative z-10">
      {/* Ambient pink glow */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#e31777]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#c2185b]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative p-7 sm:p-9 rounded-3xl bg-white/95 backdrop-blur-xl border-2 border-pink-100 shadow-2xl shadow-pink-900/20 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 justify-center mb-1">
            <span className="font-pacifico text-3xl sm:text-4xl text-[#e31777] tracking-wide">
              MySecretGirl
            </span>
            <span className="bg-yellow-400 text-slate-900 text-xs font-black px-2 py-0.5 rounded-md shadow-xs">
              69
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] text-xs font-bold shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Management Portal</span>
          </div>

          <p className="text-xs text-gray-500 pt-1">
            Sign in with authorized administrator credentials to manage AI blogs &amp; site data.
          </p>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50 text-xs text-rose-700 flex items-start gap-2 shadow-2xs">
            <div className="shrink-0 mt-0.5 w-2 h-2 rounded-full bg-rose-500" />
            <div>
              <strong className="font-bold text-rose-900">Authentication Failed: </strong>
              {errorMessage}
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              Admin Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#e31777]">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                disabled={isLoading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@mysecretgirl69.com"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-pink-50/40 border border-pink-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#e31777] focus:ring-2 focus:ring-pink-200 focus:bg-white transition disabled:opacity-50"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Password
              </label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#e31777]">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-pink-50/40 border border-pink-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-[#e31777] focus:ring-2 focus:ring-pink-200 focus:bg-white transition disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#e31777] transition cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Quick autofill helper */}
          <div className="flex items-center justify-between text-[11px] pt-1">
            <span className="text-gray-400">First time sign-in?</span>
            <button
              type="button"
              onClick={handleQuickFill}
              className="text-[#e31777] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3 h-3 text-yellow-500" />
              Autofill Credentials
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl font-bold bg-gradient-to-r from-[#e31777] via-[#d8156e] to-[#c2185b] hover:from-[#c2185b] hover:to-[#a0134b] text-white shadow-lg shadow-pink-500/35 hover:shadow-pink-500/50 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-50 transform hover:-translate-y-0.5"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Authenticating with Supabase...</span>
              </>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Back Link */}
        <div className="pt-2 text-center border-t border-pink-100">
          <a
            href="/"
            className="text-xs font-semibold text-gray-500 hover:text-[#e31777] transition inline-flex items-center gap-1"
          >
            ← Return to public website
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-pink-50 via-rose-50/50 to-white relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e31777]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c2185b]/10 rounded-full blur-3xl pointer-events-none" />
      <Suspense
        fallback={
          <div className="h-40 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-[#e31777]" />
          </div>
        }
      >
        <LoginForm />
      </Suspense>
    </div>
  );
}
