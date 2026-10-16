"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, User, BookOpen, Sparkles, Filter } from "lucide-react";
import type { UnifiedBlogPost } from "@/lib/blogs";
import { formatBlogDate } from "@/lib/date";

interface BlogHubClientProps {
  posts: UnifiedBlogPost[];
}

const ITEMS_PER_PAGE = 9;

export default function BlogHubClient({ posts }: BlogHubClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ["ALL", ...Array.from(set)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.slug.toLowerCase().includes(q) ||
        (post.tags && post.tags.some((t) => t.toLowerCase().includes(q)));

      const matchesCat =
        selectedCategory === "ALL" || post.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [posts, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE) || 1;

  // Reset to page 1 on filter or search change
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  // Featured post is the first post when no search/filters are active
  const isDefaultView = !searchQuery && selectedCategory === "ALL" && currentPage === 1;
  const featuredPost = isDefaultView && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const listPosts = isDefaultView && filteredPosts.length > 1
    ? filteredPosts.slice(1, ITEMS_PER_PAGE + 1)
    : filteredPosts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="space-y-10">
      {/* Search and Category Filter Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search guides by keyword, hotel name, or location..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e31777] focus:border-transparent transition"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none shrink-0">
          <Filter className="w-3.5 h-3.5 text-gray-400 mr-1 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#e31777] text-white shadow-xs"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat === "ALL" ? "All Guides" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post Card (if on Page 1 with no filters) */}
      {featuredPost && (
        <div className="rounded-3xl border border-pink-200/80 bg-gradient-to-br from-white via-pink-50/20 to-rose-50/40 p-6 sm:p-10 shadow-sm hover:shadow-md transition-all group">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-3 py-1 rounded-full bg-[#e31777] text-white uppercase tracking-wider shadow-2xs">
                  <Sparkles className="w-3 h-3 text-amber-200" />
                  Featured Guide
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {formatBlogDate(featuredPost.publishedDate)}
                </span>
              </div>

              <Link href={`/blog/${featuredPost.slug}`}>
                <h2 className="text-2xl sm:text-3xl font-black text-[#45474f] group-hover:text-[#e31777] transition leading-tight">
                  {featuredPost.title}
                </h2>
              </Link>

              <p className="text-xs sm:text-sm text-[#616161] leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-500 pt-1">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#e31777]" />
                  {featuredPost.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  {featuredPost.readTime}
                </span>
              </div>
            </div>

            <Link
              href={`/blog/${featuredPost.slug}`}
              className="px-6 py-3 rounded-2xl bg-[#e31777] hover:bg-[#c41164] text-white text-xs sm:text-sm font-bold shadow-md shadow-pink-500/20 inline-flex items-center gap-2 transition shrink-0"
            >
              <span>Read Full Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      )}

      {/* Grid of Articles */}
      {filteredPosts.length === 0 ? (
        <div className="rounded-3xl border border-gray-200 p-12 text-center bg-white">
          <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-gray-800">No articles found</h3>
          <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
            No guides match your search query or category filter. Try clearing filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("ALL");
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-pink-50 text-[#e31777] font-bold text-xs hover:bg-pink-100 transition cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {listPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl bg-white border border-gray-200 hover:border-[#e31777] p-6 flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-gray-500 mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-pink-50 border border-pink-100 text-[#e31777] font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <Calendar className="w-3 h-3 text-[#e31777]" />
                    {formatBlogDate(post.publishedDate)}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-base sm:text-lg font-bold text-[#45474f] group-hover:text-[#e31777] transition mb-2 leading-snug">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-xs text-[#616161] leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-500 flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {post.author.split(" ")[0]}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold text-[#e31777] group-hover:underline inline-flex items-center gap-1 transition"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pt-8 border-t border-gray-100 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition disabled:opacity-40 cursor-pointer"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-xl text-xs font-bold transition cursor-pointer ${
                currentPage === page
                  ? "bg-[#e31777] text-white shadow-xs"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-600 hover:bg-gray-50 transition disabled:opacity-40 cursor-pointer"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
