import { MetadataRoute } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
          "Applebot",
          "Applebot-Extended"
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt", "/sitemap.xml"],
        disallow: ["/api/", "/admin/", "/admin", "/login"]
      },
      {
        userAgent: [
          "Bytespider",
          "PetalBot",
          "MJ12bot"
        ],
        disallow: "/"
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/admin", "/login"]
      }
    ],
    sitemap: "https://mysecretgirl69.com/sitemap.xml",
    host: "https://mysecretgirl69.com"
  };
}
