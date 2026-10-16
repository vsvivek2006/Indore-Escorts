"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import {
  Sparkles,
  RefreshCw,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Sliders,
  Cpu,
} from "lucide-react";
import { toast } from "sonner";
import type { GenerateBlogPostOutput } from "@/lib/ai/generateBlogPost";
import { AVAILABLE_MODELS, DEFAULT_MODEL_ID } from "@/lib/ai/models";

interface AIGeneratorPanelProps {
  onGenerated: (output: GenerateBlogPostOutput) => void;
  disabled?: boolean;
}

const SUGGESTED_TOPICS = [
  "Top 5-Star Luxury Hotels in Indore for Booking Verified Call Girls & Escorts",
  "Indore Call Girls Safety Guide: How to Avoid Fake Advance Scams & Book Genuine Escorts",
  "Vijay Nagar Call Girls & Nightlife Guide: Rooftop Lounges & Luxury Hotel Stays",
];

export function AIGeneratorPanel({ onGenerated, disabled }: AIGeneratorPanelProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>(DEFAULT_MODEL_ID);
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("Sophisticated & Authoritative");
  const [keywords, setKeywords] = useState("");
  const [wordCount, setWordCount] = useState(800);
  const [audience, setAudience] = useState("Visiting executives, delegates, and gentlemen seeking verified call girls & escorts in Indore");
  const [hasGenerated, setHasGenerated] = useState(false);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);
  const [isRateLimited, setIsRateLimited] = useState(false);

  const FALLBACK_MODEL_ID = "openai/gpt-oss-20b";

  const selectedModelInfo =
    AVAILABLE_MODELS.find((m) => m.id === selectedModel) || AVAILABLE_MODELS[0];

  const generationSteps = useMemo(
    () => [
      { label: `Preparing article with ${selectedModelInfo.name}...`, progress: 25 },
      { label: "Researching topic and structuring headings...", progress: 50 },
      { label: "Writing complete article content...", progress: 75 },
      { label: "Finalizing formatting and preview...", progress: 92 },
    ],
    [selectedModelInfo.name]
  );

  // Animated progress state
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const stepTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Progress simulation during AI generation
  useEffect(() => {
    if (isGenerating) {
      setCurrentStepIndex(0);
      setProgressPercent(15);

      let step = 0;
      stepTimerRef.current = setInterval(() => {
        step += 1;
        if (step < generationSteps.length) {
          setCurrentStepIndex(step);
          setProgressPercent(generationSteps[step].progress);
        } else {
          // Creep forward slowly while waiting for final payload
          setProgressPercent((prev) => Math.min(prev + 2, 94));
        }
      }, 1600);
    } else {
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
        stepTimerRef.current = null;
      }
    }

    return () => {
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
      }
    };
  }, [isGenerating, generationSteps]);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast.error("Topic is required", {
        description: "Please enter a blog post topic or click a suggested prompt.",
      });
      return;
    }

    setIsGenerating(true);
    setErrorBanner(null);
    setIsRateLimited(false);

    const toastId = toast.loading(`Generating article with ${selectedModelInfo.name}...`, {
      description: "Crafting headline, SEO metadata, rich content, and tags.",
    });

    try {
      const keywordList = keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean);

      const response = await fetch("/api/admin/blog/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: topic.trim(),
          tone,
          keywords: keywordList,
          wordCount,
          audience,
          model: selectedModel,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to generate blog post from Groq API");
      }

      setProgressPercent(100);
      toast.success("AI draft generated successfully!", {
        id: toastId,
        description: `Generated via ${selectedModelInfo.name}. Ready for review.`,
      });

      setHasGenerated(true);
      onGenerated(data as GenerateBlogPostOutput);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Unexpected error during AI generation. Check your network or API quota.";
      // Detect rate-limit: Groq SDK error message or HTTP 429 in body
      const isLimit =
        message.toLowerCase().includes("429") ||
        message.toLowerCase().includes("rate limit") ||
        message.toLowerCase().includes("rate_limit");
      if (isLimit) {
        setIsRateLimited(true);
        setErrorBanner(null);
        toast.error("Writing style is busy", {
          id: toastId,
          description: "The detailed writer is busy. Switch to Fast Article Writer for instant generation.",
        });
      } else {
        setErrorBanner(message);
        toast.error("Generation failed", {
          id: toastId,
          description: message,
        });
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-5 sm:p-6 rounded-xl border border-gray-200 bg-gray-50 shadow-sm space-y-5 relative text-gray-900">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-pink-100 border border-pink-200 text-[#e31777]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-2">
              AI Blog Writer
              <span className="text-[10px] px-2 py-0.5 rounded-md font-semibold bg-pink-50 text-[#e31777] border border-pink-200">
                {selectedModelInfo.name}
              </span>
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Create a complete, high-quality blog article for your website.
            </p>
          </div>
        </div>

        {hasGenerated && !isGenerating && (
          <span className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Article Ready
          </span>
        )}
      </div>

      {/* Rate-Limit Fallback Banner */}
      {isRateLimited && !isGenerating && (
        <div className="p-3.5 rounded-lg border border-amber-200 bg-amber-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold text-amber-900">High Server Demand</h4>
              <p className="text-xs text-amber-700 mt-0.5">
                The detailed writer is taking longer. You can switch to the Fast Writer for instant results.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedModel(FALLBACK_MODEL_ID);
              setIsRateLimited(false);
            }}
            className="text-xs font-semibold px-3 py-1.5 rounded bg-amber-600 hover:bg-amber-700 text-white transition-colors cursor-pointer shrink-0"
          >
            Switch to Fast Writer
          </button>
        </div>
      )}

      {/* Generic Error Banner */}
      {errorBanner && !isGenerating && (
        <div className="p-3.5 rounded-lg border border-rose-200 bg-rose-50 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div className="text-xs text-rose-700">
            <span className="font-semibold text-rose-900">Generation Error: </span>
            {errorBanner}
          </div>
        </div>
      )}

      {/* Animated Generation Status */}
      {isGenerating && (
        <div className="p-4 rounded-lg border border-pink-200 bg-pink-50/60 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#e31777] font-semibold flex items-center gap-2">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              {generationSteps[currentStepIndex]?.label ?? "Finalizing article..."}
            </span>
            <span className="text-gray-500 font-mono text-[11px]">
              {Math.round(progressPercent)}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#e31777] to-rose-400 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Main Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Model Selector Cards */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="block text-xs font-semibold text-gray-700 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gray-400" />
            Writing Style &amp; Speed
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {AVAILABLE_MODELS.map((model) => {
              const isSelected = selectedModel === model.id;
              return (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setSelectedModel(model.id)}
                  disabled={disabled || isGenerating}
                  className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                    isSelected
                      ? "border-[#e31777] bg-white ring-2 ring-pink-100 shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  } disabled:opacity-50`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-gray-900 truncate">
                      {model.name}
                    </span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-semibold ${
                        model.id === "openai/gpt-oss-120b"
                          ? "bg-pink-50 text-[#e31777] border border-pink-200"
                          : model.id === "openai/gpt-oss-20b"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}
                    >
                      {model.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-snug line-clamp-2 mb-2">
                    {model.description}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1.5 border-t border-gray-100">
                    <span className="font-medium text-gray-500">{model.speed}</span>
                    {isSelected && (
                      <span className="text-[#e31777] font-semibold">Active</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Topic Input & Quick Suggestions */}
        <div className="md:col-span-2 space-y-1.5">
          <label className="block text-xs font-semibold text-gray-700">
            Target Topic or Title <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Top 5-Star Luxury Hotels in Indore for Discreet Executive Stays"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#e31777] focus:ring-1 focus:ring-[#e31777] transition-all disabled:opacity-50"
          />

          {/* Quick Prompts */}
          <div className="pt-1">
            <span className="text-[11px] text-gray-500 mr-2">Try inspiration:</span>
            <div className="inline-flex flex-wrap gap-1.5 mt-1">
              {SUGGESTED_TOPICS.map((suggested) => (
                <button
                  key={suggested}
                  type="button"
                  onClick={() => setTopic(suggested)}
                  disabled={disabled || isGenerating}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white hover:bg-pink-50 text-[#e31777] border border-gray-200 hover:border-pink-300 transition-colors truncate max-w-[280px] sm:max-w-none cursor-pointer disabled:opacity-50 shadow-2xs"
                >
                  {suggested}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tone Selector */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-gray-400" />
            Editorial Tone
          </label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 text-xs sm:text-sm focus:outline-none focus:border-[#e31777] focus:ring-1 focus:ring-[#e31777] transition-all disabled:opacity-50 cursor-pointer"
          >
            <option value="Sophisticated & Authoritative">
              Sophisticated &amp; Authoritative (Default)
            </option>
            <option value="Conversational & Direct">
              Conversational &amp; Direct
            </option>
            <option value="Lifestyle & Luxury Guide">
              Lifestyle &amp; Luxury Guide
            </option>
            <option value="Discreet & Advisory">
              Discreet Client Advisory
            </option>
          </select>
        </div>

        {/* Word Count */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Target Article Length
          </label>
          <div className="flex items-center gap-2">
            {[600, 900, 1200].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setWordCount(count)}
                disabled={disabled || isGenerating}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  wordCount === count
                    ? "bg-[#e31777] text-white shadow-xs"
                    : "bg-white text-gray-600 hover:text-gray-900 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                ~{count} words
              </button>
            ))}
          </div>
        </div>

        {/* Keywords */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Target SEO Keywords (Comma Separated)
          </label>
          <input
            type="text"
            placeholder="e.g. indore escorts, vijay nagar call girls, luxury hotels indore"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#e31777] focus:ring-1 focus:ring-[#e31777] transition-all disabled:opacity-50"
          />
        </div>

        {/* Audience */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Target Audience Persona
          </label>
          <input
            type="text"
            placeholder="e.g. Visiting executives, business delegates in Indore"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            disabled={disabled || isGenerating}
            className="w-full px-3 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#e31777] focus:ring-1 focus:ring-[#e31777] transition-all disabled:opacity-50"
          />
        </div>
      </div>

      {/* Action Trigger */}
      <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-200">
        <p className="text-[11px] text-gray-500 text-center sm:text-left">
          Using <span className="text-[#e31777] font-semibold">{selectedModelInfo.name}</span>. Auto-weaves 3–5 contextual links from 60+ canonical Indore pages.
        </p>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {hasGenerated ? (
            <button
              type="button"
              onClick={handleGenerate}
              disabled={disabled || isGenerating}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold bg-white hover:bg-gray-100 text-gray-700 hover:text-gray-900 border border-gray-300 transition-all text-xs cursor-pointer disabled:opacity-50 shadow-2xs"
            >
              {isGenerating ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <RefreshCw className="w-3.5 h-3.5 text-[#e31777]" />
              )}
              Regenerate Article
            </button>
          ) : (
            <button
              type="button"
              onClick={handleGenerate}
              disabled={disabled || isGenerating}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg font-semibold bg-[#e31777] hover:bg-[#c41164] text-white transition-colors text-xs cursor-pointer disabled:opacity-50 shadow-sm"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Generating Draft...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  Generate Draft with AI
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
