"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/server";
import { assertAdminUser, assertPermission, AuthorizationError } from "@/lib/authorization";

export interface PostInput {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  meta_title?: string;
  meta_description?: string;
  category?: string;
  author?: string;
  tags?: string[];
  status?: "draft" | "published";
  read_time?: string;
  source?: "manual" | "ai" | "ai-edited";
  published_at?: string;
}

export async function createPostAction(input: PostInput) {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "content:write");

    if (!input.title || !input.slug || !input.content) {
      return { success: false, error: "Title, slug, and content are required." };
    }

    const adminClient = createAdminClient();

    const normalizedSlug = input.slug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const newRecord = {
      title: input.title.trim(),
      slug: normalizedSlug,
      content: input.content,
      excerpt: input.excerpt?.trim() || input.meta_description?.trim() || "",
      meta_title: input.meta_title?.trim() || input.title.trim(),
      meta_description: input.meta_description?.trim() || "",
      category: input.category || "Luxury Travel",
      author: input.author || "MySecretGirl69 Editorial",
      tags: input.tags || [],
      status: input.status || "published",
      read_time: input.read_time || "5 min read",
      source: input.source || "ai",
      published_at: input.status === "published"
        ? (input.published_at ? new Date(input.published_at).toISOString() : new Date().toISOString())
        : null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await adminClient
      .from("posts")
      .upsert(newRecord, { onConflict: "slug" })
      .select()
      .single();

    if (error) {
      console.error("[createPostAction] Supabase error:", error);
      return { success: false, error: error.message };
    }

    // Bust Next.js ISR caches so the post is live immediately
    revalidatePath("/admin");
    revalidatePath("/admin/blog");
    revalidatePath("/blog");
    revalidatePath(`/blog/${normalizedSlug}`);
    revalidatePath("/sitemap.xml");

    return { success: true, data };
  } catch (err: unknown) {
    if (err instanceof AuthorizationError) {
      return { success: false, error: err.message };
    }
    const message = err instanceof Error ? err.message : "Failed to publish post.";
    console.error("[createPostAction] Error:", err);
    return { success: false, error: message };
  }
}

export async function deletePostAction(id: string) {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "content:delete");

    const adminClient = createAdminClient();
    const { error } = await adminClient.from("posts").delete().eq("id", id);

    if (error) {
      return { success: false, error: error.message };
    }

    revalidatePath("/admin");
    revalidatePath("/admin/blog");
    revalidatePath("/blog");

    return { success: true };
  } catch (err: unknown) {
    if (err instanceof AuthorizationError) {
      return { success: false, error: err.message };
    }
    const message = err instanceof Error ? err.message : "Failed to delete post.";
    return { success: false, error: message };
  }
}

export async function getPostsAction() {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "content:read");

    const adminClient = createAdminClient();
    const { data, error } = await adminClient
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return { success: false, error: error.message, posts: [] };
    }

    return { success: true, posts: data || [] };
  } catch (err: unknown) {
    if (err instanceof AuthorizationError) {
      return { success: false, error: err.message, posts: [] };
    }
    const message = err instanceof Error ? err.message : "Failed to load posts.";
    return { success: false, error: message, posts: [] };
  }
}

export async function getPostByIdAction(id: string) {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "content:read");

    const adminClient = createAdminClient();
    const { data, error } = await adminClient
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, post: data };
  } catch (err: unknown) {
    if (err instanceof AuthorizationError) {
      return { success: false, error: err.message };
    }
    const message = err instanceof Error ? err.message : "Failed to load post.";
    return { success: false, error: message };
  }
}

export async function updatePostAction(id: string, input: Partial<PostInput>) {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "content:write");

    const adminClient = createAdminClient();

    const updateFields: Record<string, any> = {
      updated_at: new Date().toISOString(),
    };

    if (input.title !== undefined) updateFields.title = input.title.trim();
    if (input.slug !== undefined) {
      updateFields.slug = input.slug
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }
    if (input.content !== undefined) updateFields.content = input.content;
    if (input.excerpt !== undefined) updateFields.excerpt = input.excerpt.trim();
    if (input.meta_title !== undefined) updateFields.meta_title = input.meta_title.trim();
    if (input.meta_description !== undefined) updateFields.meta_description = input.meta_description.trim();
    if (input.category !== undefined) updateFields.category = input.category;
    if (input.author !== undefined) updateFields.author = input.author;
    if (input.tags !== undefined) updateFields.tags = input.tags;
    if (input.read_time !== undefined) updateFields.read_time = input.read_time;
    if (input.status !== undefined) {
      updateFields.status = input.status;
      if (input.status === "published" && !input.published_at) {
        updateFields.published_at = new Date().toISOString();
      }
    }
    if (input.published_at !== undefined) {
      updateFields.published_at = input.published_at ? new Date(input.published_at).toISOString() : null;
    }

    const { data, error } = await adminClient
      .from("posts")
      .update(updateFields)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error("[updatePostAction] Supabase error:", error);
      return { success: false, error: error.message };
    }

    revalidatePath("/admin");
    revalidatePath("/admin/blog");
    revalidatePath("/blog");
    if (data?.slug) {
      revalidatePath(`/blog/${data.slug}`);
    }
    revalidatePath("/sitemap.xml");

    return { success: true, data };
  } catch (err: unknown) {
    if (err instanceof AuthorizationError) {
      return { success: false, error: err.message };
    }
    const message = err instanceof Error ? err.message : "Failed to update post.";
    console.error("[updatePostAction] Error:", err);
    return { success: false, error: message };
  }
}


