import { MetadataRoute } from "next";
import { INDORE_LOCATIONS } from "@/data/locations";
import { SERVICES_DATA } from "@/data/services";
import { COMPANION_MODELS } from "@/data/models";
import { BLOG_POSTS } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mysecretgirl69.com";
  const now = new Date();

  // Static Core Pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/locations`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/models`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/safety-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/llms.txt`, lastModified: now, changeFrequency: "weekly", priority: 0.6 }
  ];

  // 48 Location Pages
  const locationPages: MetadataRoute.Sitemap = INDORE_LOCATIONS.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85
  }));

  // Services Pages
  const servicePages: MetadataRoute.Sitemap = SERVICES_DATA.map((srv) => ({
    url: `${baseUrl}/services/${srv.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75
  }));

  // Model Pages
  const modelPages: MetadataRoute.Sitemap = COMPANION_MODELS.map((model) => ({
    url: `${baseUrl}/models/${model.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8
  }));

  // Blog Pages
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65
  }));

  return [
    ...staticPages,
    ...locationPages,
    ...servicePages,
    ...modelPages,
    ...blogPages
  ];
}
