/**
 * Blog date formatting utilities for real-time and published dates.
 */

export function getTodayDateIso(): string {
  const now = new Date();
  return now.toISOString().split("T")[0]; // e.g. "2026-10-16"
}

export function formatBlogDate(dateStr?: string | null): string {
  if (!dateStr) {
    const now = new Date();
    return now.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  // Handle YYYY-MM-DD cleanly without timezone offset drift
  const parts = dateStr.split("-");
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const d = new Date(year, month, day);
    if (!isNaN(d.getTime())) {
      return d.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }
  }

  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;

  return d.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
