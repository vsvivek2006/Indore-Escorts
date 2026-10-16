import { NextResponse } from "next/server";
import { generateBlogPost } from "@/lib/ai/generateBlogPost";
import { assertAdminUser, assertPermission } from "@/lib/authorization";

export async function POST(request: Request) {
  try {
    const adminUser = await assertAdminUser();
    assertPermission(adminUser, "content:write");
    const body = await request.json();
    const { topic, tone, keywords, wordCount, audience, model } = body;

    if (!topic || typeof topic !== "string") {
      return NextResponse.json(
        { error: "Topic is required" },
        { status: 400 }
      );
    }

    // Clamp inputs – authenticated admin only, guard against abuse
    const safeTopic = String(topic).slice(0, 500);
    const safeTone = tone ? String(tone).slice(0, 100) : undefined;
    const safeAudience = audience ? String(audience).slice(0, 200) : undefined;
    const safeModel = model ? String(model).slice(0, 100) : undefined;
    const safeWordCount =
      typeof wordCount === "number"
        ? Math.min(Math.max(Math.round(wordCount), 200), 3000)
        : undefined;
    const safeKeywords = Array.isArray(keywords)
      ? keywords.slice(0, 10).map((k: unknown) => String(k).slice(0, 60))
      : undefined;

    const result = await generateBlogPost({
      topic: safeTopic,
      tone: safeTone,
      keywords: safeKeywords,
      wordCount: safeWordCount,
      audience: safeAudience,
      model: safeModel,
    });

    return NextResponse.json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to generate blog post";
    const status = (err as { status?: number }).status || 500;
    return NextResponse.json({ error: message }, { status });
  }
}
