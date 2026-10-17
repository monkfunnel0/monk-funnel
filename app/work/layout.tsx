import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio Concepts — Monk Funnel",
  description:
    "Design explorations from the Monk Funnel studio across ecommerce, education, travel, events, finance and local business. Client work stays confidential under NDA.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
