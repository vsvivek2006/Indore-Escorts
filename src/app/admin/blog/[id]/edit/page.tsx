"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import {
  ArrowLeft,
  Save,
  Send,
  Loader2,
  Trash2,
  ExternalLink,
  Edit3,
  Eye,
  Code2,
  Calendar,
  Link2,
} from "lucide-react";
import { toast } from "sonner";
import { getPostByIdAction, updatePostAction, deletePostAction } from "../../actions";
import { formatBlogDate } from "@/lib/date";

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

interface EditPostPageProps {
  params: Promise<{ id: string }>;
}

export default function EditPostPage({ params }: EditPostPageProps) {
  const { id } = use(params);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState<"editor" | "preview" | "code">("editor");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [category, setCategory] = useState("Luxury Travel");
  const [author, setAuthor] = useState("MySecretGirl69 Editorial");
  const [status, setStatus] = useState<"published" | "draft">("published");
  const [publishedAt, setPublishedAt] = useState("");
  const [readTime, setReadTime] = useState("5 min read");
  const [tagsInput, setTagsInput] = useState("");

  useEffect(() => {
    async function loadPost() {
      setIsLoading(true);
      const res = await getPostByIdAction(id);
      if (res.success && res.post) {
        const p = res.post;
        setTitle(p.title || "");
        setSlug(p.slug || "");
        setContent(p.content || "");
        setMetaDescription(p.meta_description || p.excerpt || "");
        setMetaTitle(p.meta_title || p.title || "");
        setCategory(p.category || "Luxury Travel");
        setAuthor(p.author || "MySecretGirl69 Editorial");
        setStatus(p.status || "published");
        setReadTime(p.read_time || "5 min read");
        setTagsInput(Array.isArray(p.tags) ? p.tags.join(", ") : "");
        if (p.published_at) {
          setPublishedAt(p.published_at.split("T")[0]);
        }
      } else {
        toast.error("Failed to load article from database", {
          description: res.error,
        });
      }
      setIsLoading(false);
    }

    loadPost();
  }, [id]);

  const handleSave = async (targetStatus?: "published" | "draft") => {
    if (!title.trim() || !slug.trim() || !content.trim()) {
      toast.error("Title, Slug, and Content are required.");
      return;
    }

    setIsSaving(true);
    const chosenStatus = targetStatus || status;
    const toastId = toast.loading("Saving changes to database...");

    const tagsArray = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const res = await updatePostAction(id, {
      title,
      slug,
      content,
      meta_title: metaTitle || title,
      meta_description: metaDescription,
      category,
      author,
      status: chosenStatus,
      read_time: readTime,
      tags: tagsArray,
      published_at: publishedAt ? new Date(publishedAt).toISOString() : undefined,
    });

    setIsSaving(false);

    if (res.success) {
      setStatus(chosenStatus);
      toast.success(
        chosenStatus === "published"
          ? "🎉 Post updated and live on website!"
          : "Draft updated in database!",
        { id: toastId }
      );
      router.refresh();
    } else {
      toast.error("Failed to save changes", {
        id: toastId,
        description: res.error,
      });
    }
  };

  const handleDelete = async () => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    const toastId = toast.loading("Deleting post...");
    const res = await deletePostAction(id);

    if (res.success) {
      toast.success("Post deleted successfully", { id: toastId });
      router.push("/admin/blog");
    } else {
      toast.error("Failed to delete post", {
        id: toastId,
        description: res.error,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center space-y-3">
        <Loader2 className="w-8 h-8 text-[#e31777] animate-spin" />
        <p className="text-xs text-gray-500 font-medium">Loading article details...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
        <div>
          <Link
            href="/admin/blog"
            className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            Edit Article
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Modify article title, content, SEO metadata, and published status.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {status === "published" && (
            <Link
              href={`/blog/${slug}`}
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-semibold border border-emerald-200 transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Live
            </Link>
          )}

          <button
            type="button"
            onClick={() => handleSave("draft")}
            disabled={isSaving}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 shadow-xs transition disabled:opacity-50 cursor-pointer"
          >
            <Save className="w-3.5 h-3.5 text-gray-500" />
            Save as Draft
          </button>

          <button
            type="button"
            onClick={() => handleSave("published")}
            disabled={isSaving}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#e31777] hover:bg-[#c01565] text-xs font-semibold text-white shadow-xs transition disabled:opacity-50 cursor-pointer"
          >
            {isSaving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
            {isSaving ? "Saving..." : "Publish Live"}
          </button>

          <button
            type="button"
            onClick={handleDelete}
            className="p-2 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition"
            title="Delete post"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editor Form Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-xs space-y-6">
        {/* Title */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            Article Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm font-bold text-gray-900 focus:outline-none focus:border-[#e31777]"
          />
        </div>

        {/* Slug, Date, Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1">
              <Link2 className="w-3.5 h-3.5 text-gray-400" />
              Slug (URL)
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs font-mono text-gray-800 focus:outline-none focus:border-[#e31777]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              Publish Date
            </label>
            <input
              type="date"
              value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs font-mono text-gray-800 focus:outline-none focus:border-[#e31777]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-[#e31777]"
            >
              <option value="Luxury Travel">Luxury Travel</option>
              <option value="Safety & Ethics">Safety & Ethics</option>
              <option value="Local Lifestyle">Local Lifestyle</option>
            </select>
          </div>
        </div>

        {/* Meta Description */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            Meta Description (Search Snippet)
          </label>
          <textarea
            rows={2}
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            className="w-full text-xs text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-200 font-mono leading-relaxed focus:outline-none focus:border-[#e31777]"
          />
        </div>

        {/* Tags */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder="5-Star Hotels, Indore Call Girls, Vijay Nagar"
            className="w-full px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs text-gray-800 focus:outline-none focus:border-[#e31777]"
          />
        </div>

        {/* Content Tabs & Editor */}
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
              {content.length} chars
            </span>
          </div>

          {activeTab === "editor" && (
            <TiptapEditor
              content={content}
              onChange={(updatedHtml) => setContent(updatedHtml)}
            />
          )}

          {activeTab === "preview" && (
            <div
              className="tiptap-editor-surface p-6 rounded-xl border border-gray-200 bg-white text-gray-800 leading-relaxed shadow-xs"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}

          {activeTab === "code" && (
            <textarea
              rows={16}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-4 rounded-xl border border-gray-200 bg-gray-900 text-gray-100 font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed focus:outline-none"
            />
          )}
        </div>

        {/* Bottom Save Bar */}
        <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-gray-500">
            Current Status:{" "}
            <span
              className={`font-bold uppercase ${
                status === "published" ? "text-emerald-600" : "text-amber-600"
              }`}
            >
              {status}
            </span>
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleSave("draft")}
              disabled={isSaving}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 shadow-xs transition disabled:opacity-50 cursor-pointer"
            >
              <Save className="w-3.5 h-3.5 text-gray-500" />
              Save as Draft
            </button>

            <button
              type="button"
              onClick={() => handleSave("published")}
              disabled={isSaving}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#e31777] hover:bg-[#c01565] text-xs font-semibold text-white shadow-sm transition disabled:opacity-50 cursor-pointer"
            >
              {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              {isSaving ? "Saving..." : "Save & Publish Live"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
