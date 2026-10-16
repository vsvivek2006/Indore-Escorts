import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Groq from "groq-sdk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, "../.env.local");

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...vals] = trimmed.split("=");
    if (key && vals.length > 0) {
      process.env[key.trim()] = vals.join("=").trim();
    }
  }
}

import { buildBlogPostPrompt, blogPostResponseSchema } from "../src/lib/ai/prompts/blogPost";
import { normalizeContentToHtml } from "../src/lib/ai/contentFormatter";
import { getValidModel } from "../src/lib/ai/models";

async function run() {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("Error: GROQ_API_KEY is not set in environment or .env.local");
    process.exit(1);
  }

  const groq = new Groq({ apiKey });

  // Parse command line arguments if provided
  const args = process.argv.slice(2);
  let topic = "Top 5-Star Luxury Hotels in Indore for Discreet Executive Stays";
  let keywords = ["indore escorts", "5 star hotels indore", "vijay nagar luxury stays"];
  let wordCount = 800;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--topic" && args[i + 1]) topic = args[++i];
    if (args[i] === "--keywords" && args[i + 1]) keywords = args[++i].split(",").map((k) => k.trim());
    if (args[i] === "--words" && args[i + 1]) wordCount = parseInt(args[++i], 10);
  }

  console.log(`\n🚀 Generating Blog Post via Groq AI...`);
  console.log(`Topic: ${topic}`);
  console.log(`Keywords: ${keywords.join(", ")}`);
  console.log(`Target Words: ${wordCount}`);

  const prompt = buildBlogPostPrompt({
    topic,
    keywords,
    wordCount,
  });

  const model = getValidModel();
  console.log(`Model: ${model}\n`);

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a seasoned human editorial director and luxury concierge consultant with 15+ years of live experience in elite hospitality, hotel guest relations, and high-end city guides in central India. You write with deep analytical substance, natural burstiness, and zero detectable AI clichés or synthetic filler. Output strictly valid JSON matching the requested schema. The content field MUST be clean, valid semantic HTML with rich visual hierarchy (h2, h3, p, ul, ol, li, strong, blockquote). Never output markdown code blocks or commentary around the JSON.",
      },
      { role: "user", content: prompt },
    ],
    model,
    max_completion_tokens: 8000,
    reasoning_effort: "low",
    response_format: { type: "json_schema", json_schema: blogPostResponseSchema },
  });

  const raw = completion.choices[0]?.message?.content;
  if (!raw) {
    throw new Error("No response received from Groq");
  }

  const parsed = JSON.parse(raw);
  const formattedHtml = normalizeContentToHtml(parsed.content);

  console.log("==================================================");
  console.log("TITLE:", parsed.title);
  console.log("META DESC:", parsed.metaDescription);
  console.log("TAGS:", parsed.suggestedTags?.join(", "));
  console.log("CONTENT LENGTH:", formattedHtml.length, "characters");
  console.log("==================================================\n");

  const outDir = path.resolve(__dirname, "../scratch");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const filename = path.join(outDir, `generated_blog_${Date.now()}.json`);
  fs.writeFileSync(filename, JSON.stringify({ ...parsed, content: formattedHtml }, null, 2), "utf-8");
  console.log(`Draft saved to: ${filename}`);
}

run().catch((err) => {
  console.error("Execution failed:", err);
  process.exit(1);
});
