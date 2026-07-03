import type { Metadata } from "next";
import "./globals.css";
import { Geist, Cormorant_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Monk Funnel — Conversion-First Websites for Startups",
  description:
    "We build conversion-focused websites for startups and ship in 21 days — then help you grow with SEO and paid ads when you're ready.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased font-sans", geist.variable, cormorant.variable)}
    >
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
