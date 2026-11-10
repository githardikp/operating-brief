export type WritingPlatform = "X" | "LinkedIn";

export type WritingPost = {
  title: string;
  platform: WritingPlatform;
  url: string;
  /** Calendar date, YYYY-MM-DD. */
  date: string;
};

/**
 * Posts worth keeping on the site. An empty list hides the Writing section.
 *
 * {
 *   title: "The demo is an operating meeting",
 *   platform: "X",
 *   url: "https://x.com/lifeseemsaloha/status/123",
 *   date: "2026-11-10",
 * }
 */
export const posts: WritingPost[] = [];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatPostDate(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const month = MONTHS[Number(match[2]) - 1];
  if (!month) return iso;
  return `${Number(match[3])} ${month} ${match[1]}`;
}

export function postsByDate(): WritingPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
