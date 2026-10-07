import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Monk Funnel",
  description:
    "Tell us about your brand and what you need. Book a free homepage teardown or send us a message — we reply within a day.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
