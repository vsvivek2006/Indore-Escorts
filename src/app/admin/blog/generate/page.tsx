"use client";

import { useState } from "react";
import Link from "next/link";
import slugify from "slugify";
import dynamic from "next/dynamic";
import { Copy, Check, FileText, Code2, Eye, Edit3, Loader2, Link2, Calendar, Send, Save, ExternalLink, CheckCircle2, Image as ImageIcon, Shuffle } from "lucide-react";
import { toast } from "sonner";
import { AIGeneratorPanel } from "@/components/admin/AIGeneratorPanel";
import type { GenerateBlogPostOutput } from "@/lib/ai/generateBlogPost";
import { formatBlogDate, getTodayDateIso } from "@/lib/date";
import { selectRandomImage } from "@/lib/imagekit";
import { createPostAction } from "../actions";

const TiptapEditor = dynamic(
  () => import("@/components/admin/TiptapEditor").then((mod) => mod.TiptapEditor),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[320px] w-full rounded-xl border border-gray-200 bg-gray-50 p-6 flex flex-col items-center justify-center text-gray-500 animate-pulse">
        <Loader2 className="w-5 h-5 animate-spin text-[#e31777] mb-2" />
        <span className="text-xs font-medium">Loading rich text editor...</span>
      </div>
    ),
  }
);

export default function AdminBlogGeneratePage() {
  const [output, setOutput] = useState<GenerateBlogPostOutput | null>(null);
  const [slug, setSlug] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [publishedDate, setPublishedDate] = useState<string>(getTodayDateIso());
  const [activeTab, setActiveTab] = useState<"editor" | "preview" | "code">("editor");
  const [copied, setCopied] = useState<string | null>(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishedStatus, setPublishedStatus] = useState<"idle" | "draft" | "published">("idle");

  const handleGenerated = (res: GenerateBlogPostOutput) => {
    setOutput(res);
    setSlug(slugify(res.title || "", { lower: true, strict: true }));
    setCoverImage(res.coverImage || selectRandomImage());
    setPublishedDate(getTodayDateIso());
    setPublishedStatus("idle");
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => setCopied(null), 2000);
  };

  const handlePublish = async (status: "published" | "draft" = "published") => {
    if (!output) return;
    if (!slug.trim()) {
      toast.error("Article slug is required.");
      return;
    }

    setIsPublishing(true);
    const actionLabel = status === "published" ? "Publishing article to website..." : "Saving draft to database...";
    const toastId = toast.loading(actionLabel);

    const res = await createPostAction({
      title: output.title,
      slug: slug.trim(),
      content: output.content,
      meta_description: output.metaDescription,
      meta_title: output.title,
      tags: output.suggestedTags,
      status,
      published_at: publishedDate,
      category: "Luxury Travel",
      source: "ai",
      cover_image: coverImage || selectRandomImage(),
    });

    setIsPublishing(false);

    if (res.success) {
      setPublishedStatus(status);
      toast.success(
        status === "published"
          ? "🎉 Post published live to website!"
          : "Draft saved to database!",
        {
          id: toastId,
          description:
            status === "published"
              ? `Live at /blog/${slug}`
              : "Saved in your database draft list.",
        }
      );
    } else {
      toast.error("Failed to save post", {
        id: toastId,
        description: res.error || "Please verify database connection.",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-gray-200">
        <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
          AI Blog Post Generator &amp; Editor
        </h1>
        <p className="text-xs text-gray-500 mt-0.5">
          Write and customize engaging articles for your website.
        </p>
      </div>

      <AIGeneratorPanel onGenerated={handleGenerated} />

      {output && (
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
            <div>
              <span className="text-[11px] font-bold text-[#e31777] uppercase tracking-wider">
                Article Draft
              </span>
              <h2 className="text-xl font-bold text-gray-900 mt-1">
                {output.title}
              </h2>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <Calendar className="w-3 h-3 text-emerald-600" />
                  Published: {formatBlogDate(publishedDate)}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {publishedStatus === "published" && (
                <Link
                  href={`/blog/${slug}`}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-semibold border border-emerald-200 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Live Article
                </Link>
              )}

              <button
                type="button"
                onClick={() => handlePublish("draft")}
                disabled={isPublishing}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 shadow-xs transition disabled:opacity-50 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5 text-gray-500" />
                Save Draft
              </button>

              <button
                type="button"
                onClick={() => handlePublish("published")}
                disabled={isPublishing}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#e31777] hover:bg-[#c01565] text-xs font-semibold text-white shadow-xs transition disabled:opacity-50 cursor-pointer"
              >
                {isPublishing ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Send className="w-3.5 h-3.5" />
                )}
                {isPublishing ? "Saving..." : "Publish to Website"}
              </button>

              <button
                type="button"
                onClick={() => handleCopy(output.content, "Article Content")}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-800 transition cursor-pointer"
              >
                {copied === "Article Content" ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                Copy Content
              </button>
            </div>
          </div>

          {/* Generated Slug and Published Date Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2 space-y-1.5">
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider flex items-center gap-1.5">
                <Link2 className="w-3.5 h-3.5 text-gray-400" />
                Article URL / Link
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs font-mono text-gray-800 focus:outline-none focus:border-[#e31777]"
                />
                <button
                  type="button"
                  onClick={() => handleCopy(`/blog/${slug}`, "Article Link")}
                  className="px-3 py-2 rounded-lg border border-gray-200 bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 shrink-0 transition cursor-pointer"
                >
                  Copy Link
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#e31777]" />
                Publish Date
              </span>
              <input
                type="date"
                value={publishedDate}
                onChange={(e) => setPublishedDate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs font-mono text-gray-800 focus:outline-none focus:border-[#e31777]"
              />
            </div>
          </div>

          {/* Cover Image Preview & Shuffle */}
          <div className="space-y-2 p-4 rounded-xl border border-gray-200 bg-gray-50/60">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
                <ImageIcon className="w-3.5 h-3.5 text-[#e31777]" />
                Cover Image (ImageKit CDN)
              </span>
              <button
                type="button"
                onClick={() => setCoverImage(selectRandomImage())}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-pink-50 text-[#e31777] hover:bg-pink-100 border border-pink-200 transition cursor-pointer"
              >
                <Shuffle className="w-3 h-3" />
                Shuffle Image
              </button>
            </div>
            {coverImage ? (
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="relative w-full sm:w-48 h-28 rounded-lg overflow-hidden border border-gray-200 bg-gray-100 shrink-0">
                  <img
                    src={coverImage}
                    alt="Cover preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full space-y-1">
                  <input
                    type="text"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    placeholder="Image URL"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-gray-200 text-xs font-mono text-gray-700 focus:outline-none focus:border-[#e31777]"
                  />
                  <p className="text-[11px] text-gray-500">
                    Randomized from AlinaVIP ImageKit CDN. Displays as article banner &amp; card thumbnail.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-between py-2">
                <span className="text-xs text-gray-500">No cover image selected</span>
                <button
                  type="button"
                  onClick={() => setCoverImage(selectRandomImage())}
                  className="text-xs font-semibold text-[#e31777] hover:underline"
                >
                  Assign Random Image
                </button>
              </div>
            )}
          </div>

          {/* Meta Description */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
              Meta Description
            </span>
            <textarea
              rows={2}
              value={output.metaDescription}
              onChange={(e) => setOutput({ ...output, metaDescription: e.target.value })}
              className="w-full text-xs text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-200 font-mono leading-relaxed focus:outline-none focus:border-[#e31777]"
            />
          </div>

          {/* Suggested Tags */}
          {output.suggestedTags && output.suggestedTags.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                Suggested Tags
              </span>
              <div className="flex flex-wrap gap-2">
                {output.suggestedTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-pink-50 text-[#e31777] border border-pink-200 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Mode Switch Tabs & Content Area */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab("editor")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    activeTab === "editor"
                      ? "bg-[#e31777] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  Tiptap Rich Editor
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("preview")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    activeTab === "preview"
                      ? "bg-[#e31777] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  Live Preview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("code")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                    activeTab === "code"
                      ? "bg-[#e31777] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  Raw HTML
                </button>
              </div>

              <span className="text-[11px] text-gray-400 font-mono">
                {output.content.length} chars
              </span>
            </div>

            {/* Tab 1: Tiptap Editor */}
            {activeTab === "editor" && (
              <TiptapEditor
                content={output.content}
                onChange={(updatedHtml) => setOutput({ ...output, content: updatedHtml })}
              />
            )}

            {/* Tab 2: Live HTML Preview */}
            {activeTab === "preview" && (
              <div
                className="tiptap-editor-surface p-6 rounded-xl border border-gray-200 bg-white text-gray-800 leading-relaxed shadow-xs"
                dangerouslySetInnerHTML={{ __html: output.content }}
              />
            )}

            {/* Tab 3: Raw HTML Code */}
            {activeTab === "code" && (
              <pre className="p-4 rounded-xl border border-gray-200 bg-gray-900 text-gray-100 font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-[600px] overflow-y-auto">
                {output.content}
              </pre>
            )}
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-gray-500">
              {publishedStatus === "published"
                ? "This post is live on your website."
                : publishedStatus === "draft"
                ? "Draft saved in your database."
                : "Ready to publish or save to your database."}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handlePublish("draft")}
                disabled={isPublishing}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 shadow-xs transition disabled:opacity-50 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5 text-gray-500" />
                Save as Draft
              </button>

              <button
                type="button"
                onClick={() => handlePublish("published")}
                disabled={isPublishing}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#e31777] hover:bg-[#c01565] text-xs font-semibold text-white shadow-sm transition disabled:opacity-50 cursor-pointer"
              >
                {isPublishing ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {isPublishing ? "Saving..." : "Publish to Website Now"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
