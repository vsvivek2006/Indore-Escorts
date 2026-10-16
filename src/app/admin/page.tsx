import Link from "next/link";
import {
  FileText,
  Sparkles,
  Calendar,
  Clock,
  ExternalLink,
  TrendingUp,
} from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";
import { formatBlogDate, getTodayDateIso } from "@/lib/date";

export default function AdminDashboardPage() {
  const todayIso = getTodayDateIso();
  const totalBlogs = BLOG_POSTS.length;
  const todayBlogs = BLOG_POSTS.filter((post) => post.publishedDate === todayIso).length;

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Overview of your blog posts
          </p>
        </div>

        <Link
          href="/admin/blog/generate"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#e31777] to-rose-600 hover:from-[#c2185b] hover:to-rose-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-pink-600/30 transition-all transform active:scale-95 self-start sm:self-auto"
        >
          <Sparkles className="w-4 h-4" />
          <span>Write New Blog</span>
        </Link>
      </div>

      {/* Clean KPI Cards: Total Blogs & Today's Blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Total Blogs Posted */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Total Blogs Posted
              </p>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                {totalBlogs}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-pink-50 border border-pink-200 text-[#e31777]">
              <FileText className="w-7 h-7" />
            </div>
          </div>
        </div>

        {/* Today Blog Posted */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Today Blog Posted
              </p>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
                {todayBlogs}
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600">
              <TrendingUp className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>

      {/* Published Blog Articles List */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-2xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#e31777]" />
            <span>Published Blog Articles</span>
          </h3>
          <Link
            href="/admin/blog"
            className="text-xs font-bold text-[#e31777] hover:text-[#c2185b]"
          >
            View All ({totalBlogs})
          </Link>
        </div>

        <div className="space-y-3">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.slug}
              className="p-4 rounded-xl border border-gray-100 hover:border-pink-200 hover:bg-pink-50/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
            >
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-100 text-[#e31777] uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    {formatBlogDate(post.publishedDate)}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-gray-900 group-hover:text-[#e31777] transition-colors truncate">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 line-clamp-1">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-pink-50 hover:text-[#e31777] hover:border-pink-200 border border-gray-200 transition"
                  title="View on Website"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
