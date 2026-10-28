import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extracts a numeric Vimeo video ID from a Vimeo link or raw ID string.
 */
export function extractVimeoId(input: string): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  const match = trimmed.match(/(?:vimeo\.com\/|video\/)(\d+)/) || trimmed.match(/^(\d+)$/);
  return match ? match[1] : null;
}

/**
 * Generates an accessible, responsive Vimeo embed URL.
 */
export function getVimeoEmbedUrl(input: string, autoplay: boolean = true): string {
  const id = extractVimeoId(input) || input;
  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    dnt: "1",
    title: "0",
    byline: "0",
    portrait: "0",
    color: "c8ff3d",
  });
  return `https://player.vimeo.com/video/${id}?${params.toString()}`;
}

/**
 * Converts a social media handle / identifier into a full valid URL.
 * Handles are stored without '@' and turned into full URLs.
 */
export function resolveSocialUrl(platform: string, handleOrUrl: string): string {
  if (!handleOrUrl) return "#";
  const clean = handleOrUrl.trim().replace(/^@/, "");

  // If already a full URL, return it
  if (/^https?:\/\//i.test(clean)) {
    return clean;
  }

  switch (platform.toLowerCase()) {
    case "instagram":
      return `https://www.instagram.com/${clean}`;
    case "x":
    case "twitter":
      return `https://x.com/${clean}`;
    case "linkedin":
      return `https://www.linkedin.com/in/${clean}`;
    case "tiktok":
      return `https://www.tiktok.com/@${clean}`;
    case "youtube":
      return clean.startsWith("@") ? `https://www.youtube.com/${clean}` : `https://www.youtube.com/@${clean}`;
    case "behance":
      return `https://www.behance.net/${clean}`;
    case "website":
      return `https://${clean}`;
    case "whatsapp": {
      const numeric = clean.replace(/[^0-9]/g, "");
      return `https://wa.me/${numeric}`;
    }
    case "email":
      return `mailto:${clean}`;
    default:
      return clean;
  }
}
