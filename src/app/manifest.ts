import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MySecretGirl69 Indore Escorts",
    short_name: "MySecretGirl69",
    description: "Premier verified escort directory and companion service in Indore, MP.",
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
      }
    ]
  };
}
