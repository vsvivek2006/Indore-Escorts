import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blogs";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookOpen } from "lucide-react";
import BlogHubClient from "@/components/BlogHubClient";

export const metadata: Metadata = {
  title: "Indore Call Girls & Escorts Blog | Luxury Stays & Safety Guides | MySecretGirl69",
  description:
    "Expert guides to luxury 5-star hotels in Indore for call girl stays, Vijay Nagar nightlife, anti-scam advice, and booking verified escorts in Indore.",
  alternates: {
    canonical: "https://mysecretgirl69.com/blog"
  },
  openGraph: {
    title: "Indore Call Girls & Escorts Blog | Luxury Stays & Safety Guides",
    description:
      "Expert guides to luxury 5-star hotels in Indore for call girl stays, Vijay Nagar nightlife, anti-scam advice, and booking verified escorts in Indore.",
    url: "https://mysecretgirl69.com/blog",
    siteName: "MySecretGirl69 Indore",
    images: [
      {
        url: "https://mysecretgirl69.com/images/hero_banner.jpg",
        width: 1200,
        height: 630,
        alt: "Indore Call Girls and Escorts Blog"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Indore Call Girls & Escorts Blog | Luxury Stays & Safety Guides",
    description:
      "Expert guides to luxury 5-star hotels in Indore for call girl stays, Vijay Nagar nightlife, and client safety advice.",
    images: ["https://mysecretgirl69.com/images/hero_banner.jpg"]
  }
};

export default async function BlogHubPage() {
  const posts = await getPublishedBlogPosts();

  const blogHubSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://mysecretgirl69.com/blog#blog",
        name: "Indore Call Girls & Escorts Lifestyle, Stays & Safety Blog",
        description:
          "Authoritative guides on 5-star luxury hotels for call girl outcalls, Vijay Nagar nightlife & dinner dates, and client safety best practices in Indore.",
        url: "https://mysecretgirl69.com/blog",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://mysecretgirl69.com/#website",
          name: "MySecretGirl69 Indore",
          url: "https://mysecretgirl69.com"
        },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          url: `https://mysecretgirl69.com/blog/${post.slug}`,
          datePublished: post.publishedDate,
          author: {
            "@type": "Person",
            name: post.author
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://mysecretgirl69.com/blog#breadcrumb",
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
            name: "Blog & Guides",
            item: "https://mysecretgirl69.com/blog"
          }
        ]
      }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white text-[#1c1c1c]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogHubSchema) }}
      />
      <Breadcrumbs items={[{ label: "Blog & Guides" }]} includeSchema={false} />

      <div className="my-8 text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#e31777] text-xs font-bold">
          <BookOpen className="w-4 h-4" />
          <span>Indore Guides &amp; Insights</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#45474f] tracking-tight">
          Indore Call Girls &amp; Escorts Blog
        </h1>
        <p className="text-sm sm:text-base text-[#616161] leading-relaxed">
          Authoritative guides on the best 5-star luxury hotels for call girl stays, Vijay Nagar nightlife &amp; dinner dates, and client safety best practices in Indore.
        </p>
      </div>

      <BlogHubClient posts={posts} />
    </div>
  );
}
