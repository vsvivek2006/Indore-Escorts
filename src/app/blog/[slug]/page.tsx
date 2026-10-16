import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPostBySlug, getPublishedBlogPosts } from "@/lib/blogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { formatBlogDate } from "@/lib/date";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPublishedBlogPosts();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | MySecretGirl69 Indore"
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://mysecretgirl69.com/blog/${post.slug}`
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://mysecretgirl69.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedDate,
      authors: [post.author],
      images: [
        {
          url: "https://mysecretgirl69.com/images/hero_banner.jpg",
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: ["https://mysecretgirl69.com/images/hero_banner.jpg"]
    }
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://mysecretgirl69.com/blog/${post.slug}#article`,
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: new Date().toISOString().split("T")[0],
    author: {
      "@type": "Person",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: "MySecretGirl69 Indore",
      logo: {
        "@type": "ImageObject",
        url: "https://mysecretgirl69.com/icon.png",
        width: 180,
        height: 180
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mysecretgirl69.com/blog/${post.slug}`
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title }
        ]}
      />

      <article className="my-8">
        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] font-semibold">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formatBlogDate(post.publishedDate)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-sm text-gray-500 flex items-center gap-2">
            <User className="w-4 h-4 text-[#e31777]" />
            <span>Written by {post.author}</span>
          </p>
        </header>

        {/* Content Paragraphs with Styled Internal Links */}
        <div
          className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-10 space-y-5 text-sm sm:text-base text-[#616161] leading-relaxed shadow-sm [&_a]:text-[#e31777] [&_a]:font-semibold [&_a]:underline hover:[&_a]:text-[#c41164] hover:[&_a]:decoration-2 [&_a]:transition-colors [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[#45474f] [&_h2]:mt-7 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#45474f] [&_h3]:mt-5 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_blockquote]:border-l-4 [&_blockquote]:border-[#e31777] [&_blockquote]:bg-pink-50/50 [&_blockquote]:p-4 [&_blockquote]:rounded-r-xl [&_blockquote]:italic [&_blockquote]:my-4"
          dangerouslySetInnerHTML={{
            __html: typeof post.content === "string"
              ? post.content
              : Array.isArray(post.content)
                ? (post.content as string[]).map((p) => `<p>${p}</p>`).join("")
                : ""
          }}
        />

        {/* Post Footer CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h2 className="text-base font-bold text-[#45474f]">Looking for Verified Call Girls & Escort Service in Indore?</h2>
            <p className="text-xs text-[#616161]">100% verified photo models, cash-on-arrival, and 30-45 minute fast hotel outcalls across Indore.</p>
          </div>
          <Link
            href="/contact"
            className="py-2.5 px-5 rounded-xl bg-[#e31777] hover:bg-[#c41164] text-white font-bold text-xs transition shrink-0 shadow-md"
          >
            Book Call Girls Now
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[#e31777] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
