import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"]
      }
    ],
    sitemap: "https://mysecretgirl69.com/sitemap.xml",
    host: "https://mysecretgirl69.com"
  };
}
