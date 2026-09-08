import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
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
      authors: [post.author]
    }
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://mysecretgirl69.com/blog/${post.slug}#article`,
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.publishedDate,
        dateModified: post.publishedDate,
        author: {
          "@type": "Person",
          name: post.author
        },
        publisher: {
          "@type": "Organization",
          name: "MySecretGirl69 Indore",
          logo: {
            "@type": "ImageObject",
            url: "https://mysecretgirl69.com/images/hero_banner.jpg"
          }
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://mysecretgirl69.com/blog/${post.slug}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://mysecretgirl69.com/blog/${post.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mysecretgirl69.com"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://mysecretgirl69.com/blog"
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://mysecretgirl69.com/blog/${post.slug}`
          }
        ]
      }
    ]
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
              {post.publishedDate}
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

        {/* Content Paragraphs */}
        <div className="rounded-3xl bg-white border border-gray-200 p-6 sm:p-10 space-y-6 text-sm sm:text-base text-[#616161] leading-relaxed shadow-sm">
          {post.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Post Footer CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h3 className="text-base font-bold text-[#45474f]">Looking for Verified Companionship in Indore?</h3>
            <p className="text-xs text-[#616161]">Our concierge desk is ready 24/7 for discreet local coordination.</p>
          </div>
          <Link
            href="/contact"
            className="py-2.5 px-5 rounded-xl bg-[#e31777] hover:bg-[#c41164] text-white font-bold text-xs transition shrink-0 shadow-md"
          >
            Inquire Now
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
