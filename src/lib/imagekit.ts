import imagekitAssets from "@/data/imagekit_assets.json";

export interface ImageKitAsset {
  fileName: string;
  url: string;
  title: string;
}

const FALLBACK_IMAGE =
  "https://ik.imagekit.io/uum5sguzw/shared/Benefits_of_Booking_Through_a_Professional_Escort_.jpg?tr=f-auto,q-85";

/**
 * Returns a single random ImageKit URL with auto-format and high quality.
 */
export function selectRandomImage(): string {
  if (!imagekitAssets || imagekitAssets.length === 0) {
    return FALLBACK_IMAGE;
  }
  const randomIndex = Math.floor(Math.random() * imagekitAssets.length);
  const asset = imagekitAssets[randomIndex];
  return `${asset.url}?tr=f-auto,q-85`;
}

/**
 * Returns N unique random ImageKit URLs.
 */
export function getRandomImages(count = 1): string[] {
  if (!imagekitAssets || imagekitAssets.length === 0) {
    return [FALLBACK_IMAGE];
  }
  const shuffled = [...imagekitAssets].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((a) => `${a.url}?tr=f-auto,q-85`);
}

/**
 * Returns an array of all available ImageKit assets.
 */
export function getAllImagekitAssets(): ImageKitAsset[] {
  return imagekitAssets as ImageKitAsset[];
}
