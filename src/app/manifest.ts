import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MySecretGirl69 Indore Call Girls & Escorts",
    short_name: "MySecretGirl69",
    description: "Premier verified call girl directory and 5-star hotel luxury escort service in Indore, Madhya Pradesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0914",
    theme_color: "#e31777",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png"
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ]
  };
}
