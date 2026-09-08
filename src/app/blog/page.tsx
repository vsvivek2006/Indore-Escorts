import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookOpen, Clock, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Indore Lifestyle & Luxury Stays Blog | MySecretGirl69 Indore",
  description:
    "Guides to luxury 5-star hotels, rooftop lounges in Vijay Nagar, street food in Sarafa, and client safety advice in Indore, Madhya Pradesh.",
  alternates: {
    canonical: "https://mysecretgirl69.com/blog"
  }
};

export default function BlogHubPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <Breadcrumbs items={[{ label: "Blog & Guides" }]} />

      <div className="my-8 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] text-xs font-bold">
          <BookOpen className="w-4 h-4" />
          <span>Indore Guides &amp; Insights</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
          Indore Lifestyle, Stays &amp; Safety Blog
        </h1>
        <p className="text-sm sm:text-base text-[#616161] leading-relaxed">
          Expert articles on the best five-star hotels in Indore, nightlife in Vijay Nagar, midnight food at Sarafa, and anti-scam consumer safety.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        {BLOG_POSTS.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl bg-white border border-gray-200 hover:border-[#e31777] p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] text-gray-500 mb-3">
                <span className="px-2.5 py-0.5 rounded-md bg-pink-50 border border-pink-100 text-[#e31777] font-semibold">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gray-400" />
                  {post.readTime}
                </span>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-lg font-bold text-[#45474f] group-hover:text-[#e31777] transition mb-2">
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
    </div>
  );
}
