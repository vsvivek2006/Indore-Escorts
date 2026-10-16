import { BLOG_POSTS, BlogPost, getBlogPostBySlug as getStaticBlogPostBySlug } from "@/data/blogs";
import { createAdminClient } from "@/lib/supabase/server";

export interface UnifiedBlogPost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedDate: string;
  author: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  content: string;
  tags?: string[];
  status: "published" | "draft";
  source?: string;
  created_at?: string;
  updated_at?: string;
}

function mapDbRowToPost(row: any): UnifiedBlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt || row.meta_description || "",
    readTime: row.read_time || "5 min read",
    publishedDate: row.published_at
      ? row.published_at.split("T")[0]
      : row.created_at?.split("T")[0] || new Date().toISOString().split("T")[0],
    author: row.author || "MySecretGirl69 Editorial",
    category: row.category || "Luxury Travel",
    metaTitle: row.meta_title || row.title,
    metaDescription: row.meta_description || row.excerpt || "",
    content: row.content || "",
    tags: Array.isArray(row.tags) ? row.tags : [],
    status: (row.status as "published" | "draft") || "published",
    source: row.source,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

function mapStaticToPost(staticPost: BlogPost): UnifiedBlogPost {
  return {
    slug: staticPost.slug,
    title: staticPost.title,
    excerpt: staticPost.excerpt,
    readTime: staticPost.readTime,
    publishedDate: staticPost.publishedDate,
    author: staticPost.author,
    category: staticPost.category,
    metaTitle: staticPost.metaTitle,
    metaDescription: staticPost.metaDescription,
    content: Array.isArray(staticPost.content)
      ? staticPost.content.map((p) => `<p>${p}</p>`).join("\n")
      : staticPost.content,
    tags: [],
    status: "published",
  };
}

/**
 * Fetches all published posts from Supabase `posts` table,
 * falling back to static BLOG_POSTS if table is empty or unreachable.
 */
export async function getPublishedBlogPosts(): Promise<UnifiedBlogPost[]> {
  try {
    const admin = createAdminClient();
    const { data, error } = await admin
      .from("posts")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false, nullsFirst: false });

    if (error || !data || data.length === 0) {
      return BLOG_POSTS.map(mapStaticToPost);
    }

    return data.map(mapDbRowToPost);
  } catch (err) {
    console.error("[getPublishedBlogPosts] Fallback to static:", err);
    return BLOG_POSTS.map(mapStaticToPost);
  }
}

/**
 * Fetches a single published post by slug from Supabase `posts` table,
 * falling back to static BLOG_POSTS.
 */
export async function getBlogPostBySlug(slug: string): Promise<UnifiedBlogPost | null> {
  try {
    const admin = createAdminClient();
    const { data, error } = await admin
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .single();

    if (!error && data) {
      return mapDbRowToPost(data);
    }
  } catch (err) {
    console.warn(`[getBlogPostBySlug] Supabase query for slug ${slug}:`, err);
  }

  // Fallback to static
  const staticPost = getStaticBlogPostBySlug(slug);
  return staticPost ? mapStaticToPost(staticPost) : null;
}

/**
 * Fetches all posts (drafts and published) for the Admin panel.
 */
export async function getAllBlogPostsForAdmin(): Promise<UnifiedBlogPost[]> {
  try {
    const admin = createAdminClient();
    const { data, error } = await admin
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data && data.length > 0) {
      return data.map(mapDbRowToPost);
    }
  } catch (err) {
    console.error("[getAllBlogPostsForAdmin] Supabase error:", err);
  }

  return BLOG_POSTS.map(mapStaticToPost);
}
