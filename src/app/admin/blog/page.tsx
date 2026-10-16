"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Sparkles,
  ExternalLink,
  Search,
  Copy,
  Check,
  Calendar,
  Clock,
  ArrowRight,
  Filter,
  Trash2,
  Loader2,
  RefreshCw,
  Edit3,
} from "lucide-react";
import { formatBlogDate } from "@/lib/date";
import { toast } from "sonner";
import { getPostsAction, deletePostAction } from "./actions";

interface AdminPostItem {
  id?: string;
  slug: string;
  title: string;
  excerpt?: string;
  read_time?: string;
  readTime?: string;
  published_at?: string;
  publishedDate?: string;
  author?: string;
  category?: string;
  status?: "draft" | "published";
  created_at?: string;
}

export default function AdminBlogManagementPage() {
  const [posts, setPosts] = useState<AdminPostItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<"ALL" | "published" | "draft">("ALL");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  const categories = [
    "ALL",
    "Luxury Travel",
    "Safety & Ethics",
    "Local Lifestyle",
  ];

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const res = await getPostsAction();
      if (res.success && res.posts) {
        setPosts(res.posts as AdminPostItem[]);
      } else {
        toast.error("Failed to load posts from database", {
          description: res.error,
        });
      }
    } catch (err) {
      console.error("Error loading posts:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) {
      return;
    }

    setDeletingId(id);
    const toastId = toast.loading("Deleting post...");
    const res = await deletePostAction(id);
    setDeletingId(null);

    if (res.success) {
      toast.success("Post deleted successfully", { id: toastId });
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } else {
      toast.error("Failed to delete post", {
        id: toastId,
        description: res.error,
      });
    }
  };

  const filteredPosts = posts.filter((post) => {
    const postTitle = post.title || "";
    const postExcerpt = post.excerpt || "";
    const postSlug = post.slug || "";
    const matchesSearch =
      postTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      postExcerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      postSlug.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "ALL" || post.category === selectedCategory;

    const matchesStatus =
      selectedStatus === "ALL" ||
      (selectedStatus === "draft" && post.status === "draft") ||
      (selectedStatus === "published" && post.status !== "draft");

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const publishedCount = posts.filter((p) => p.status !== "draft").length;
  const draftCount = posts.filter((p) => p.status === "draft").length;

  const handleCopySlug = (slug: string) => {
    navigator.clipboard.writeText(slug);
    setCopiedSlug(slug);
    toast.success(`Copied slug: "${slug}"`);
    setTimeout(() => setCopiedSlug(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Blog Articles
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-pink-100 text-[#e31777] font-bold">
              {posts.length} Posts
            </span>
            <button
              onClick={fetchPosts}
              disabled={isLoading}
              className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
              title="Refresh list"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Manage your website articles, publish updates, or generate new content with AI.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/blog/generate"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#e31777] to-rose-600 hover:from-[#c2185b] hover:to-rose-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-600/30 transition-all transform active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>+ Generate Post with AI</span>
          </Link>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, keyword, or slug..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e31777] focus:border-transparent transition"
          />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-xl shrink-0">
          <button
            type="button"
            onClick={() => setSelectedStatus("ALL")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              selectedStatus === "ALL"
                ? "bg-white text-gray-900 shadow-2xs"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All ({posts.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedStatus("published")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              selectedStatus === "published"
                ? "bg-white text-emerald-700 shadow-2xs"
                : "text-gray-600 hover:text-emerald-700"
            }`}
          >
            Live ({publishedCount})
          </button>
          <button
            type="button"
            onClick={() => setSelectedStatus("draft")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              selectedStatus === "draft"
                ? "bg-white text-amber-700 shadow-2xs"
                : "text-gray-600 hover:text-amber-700"
            }`}
          >
            Drafts ({draftCount})
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none shrink-0">
          <Filter className="w-3.5 h-3.5 text-gray-400 mr-1 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#e31777] text-white shadow-xs"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat === "ALL" ? "All Categories" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
            <Loader2 className="w-8 h-8 text-[#e31777] animate-spin mx-auto mb-3" />
            <p className="text-xs text-gray-500">Loading articles from database...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-800">No blog posts found</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
              No articles matched your search query or filter. Try clearing filters or create a new article.
            </p>
            <Link
              href="/admin/blog/generate"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-50 text-[#e31777] font-bold text-xs hover:bg-pink-100 transition"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Generate with AI</span>
            </Link>
          </div>
        ) : (
          filteredPosts.map((post) => {
            const isDraft = post.status === "draft";
            const pubDate = post.published_at || post.publishedDate || post.created_at;
            const rTime = post.read_time || post.readTime || "5 min read";

            return (
              <div
                key={post.id || post.slug}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-pink-300 shadow-2xs hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-5 group"
              >
                <div className="space-y-2 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-pink-100 text-[#e31777] uppercase tracking-wider">
                      {post.category || "Luxury Travel"}
                    </span>

                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        isDraft
                          ? "bg-amber-100 text-amber-800 border border-amber-200"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      {isDraft ? "Draft" : "Published"}
                    </span>

                    {pubDate && (
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        {formatBlogDate(pubDate)}
                      </span>
                    )}

                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {rTime}
                    </span>

                    {post.author && (
                      <span className="text-xs text-gray-500">• By {post.author}</span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#e31777] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="flex items-center gap-2 pt-1 text-xs text-gray-400 font-mono">
                    <span>Slug:</span>
                    <code className="text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded border border-gray-200">
                      /blog/{post.slug}
                    </code>
                    <button
                      type="button"
                      onClick={() => handleCopySlug(post.slug)}
                      className="p-1 text-gray-400 hover:text-gray-700 transition"
                      title="Copy slug"
                    >
                      {copiedSlug === post.slug ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                  {post.id && (
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold border border-gray-200 transition"
                      title="Edit article"
                    >
                      <Edit3 className="w-3.5 h-3.5 text-gray-600" />
                      <span>Edit</span>
                    </Link>
                  )}

                  {!isDraft && (
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View Live</span>
                    </Link>
                  )}


                  {post.id && (
                    <button
                      type="button"
                      onClick={() => handleDelete(post.id!, post.title)}
                      disabled={deletingId === post.id}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold border border-red-200 transition disabled:opacity-50 cursor-pointer"
                      title="Delete post"
                    >
                      {deletingId === post.id ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <Trash2 className="w-3.5 h-3.5" />
                      )}
                      <span>Delete</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* AI Assistance Prompt Callout */}
      <div className="bg-gradient-to-r from-pink-900 to-[#120719] text-white rounded-2xl p-6 border border-pink-700/50 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="space-y-1">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>Generate New Indore Content</span>
          </h4>
          <p className="text-xs text-slate-300 max-w-xl">
            Create high-quality articles for Sayaji Hotel, Vijay Nagar, Palasia, and luxury venues in seconds.
          </p>
        </div>

        <Link
          href="/admin/blog/generate"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e31777] hover:bg-[#c2185b] text-white font-bold text-xs whitespace-nowrap shadow-md transition"
        >
          <span>Write with AI</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
