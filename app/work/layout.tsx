import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recent Work — Monk Funnel",
  description:
    "Ecommerce, education, travel, events, finance and local-business websites and mobile UI shipped by Monk Funnel.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
