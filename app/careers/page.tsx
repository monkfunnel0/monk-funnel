import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const INK = "#1e180f";
const BODY = "#5f5346";
const MUTED = "#9a8c7e";
const BORDER = "#e6dfd5";

export const metadata: Metadata = {
  title: "Careers — Monk Funnel",
  description:
    "Join Monk Funnel. We build conversion-first websites for startups — and we're looking for people who ship.",
};

const role = {
  title: "Web Design & Development Intern",
  tags: ["Internship · 3 months", "Remote — India", "Paid stipend"],
  description:
    "Work directly with the founders on real client sites — from wireframe to launch in 21-day cycles. You'll design in Figma, build in Next.js and Tailwind, and watch your work ship to production, not a portfolio graveyard.",
  points: [
    "Design and build landing pages that convert",
    "Turn Figma concepts into pixel-perfect Next.js",
    "Sit in on client teardowns and strategy calls",
    "Own small features end-to-end from week one",
  ],
  mailto:
    "mailto:monkfunnel0@gmail.com?subject=Application%3A%20Web%20Design%20%26%20Development%20Intern",
};

export default function CareersPage() {
  return (
    <>
      <Navbar heroTheme="dark" />

      <main style={{ background: "#F5F5F1" }}>
        {/* Cinematic video hero */}
        <section className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden rounded-b-[56px] px-6 text-center shadow-[0_24px_60px_rgba(30,24,15,0.18)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          />

          <div className="relative z-10 flex flex-col items-center">
            <p
              className="animate-fade-down mb-4 text-[11px] tracking-[0.22em] uppercase text-white/80"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
            >
              Careers
            </p>
            <h1
              className="animate-fade-up font-serif font-medium leading-[1.05] tracking-tight text-white"
              style={{
                fontSize: "clamp(44px, 6.5vw, 84px)",
                textShadow: "0 2px 28px rgba(0,0,0,0.35)",
              }}
            >
              Come build websites
              <br />
              <em>that actually sell.</em>
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-lg text-[15px] leading-relaxed text-white/85 sm:text-base"
              style={{ animationDelay: "150ms", textShadow: "0 1px 12px rgba(0,0,0,0.3)" }}
            >
              We&apos;re a small team that ships client sites in 21-day cycles —
              no bloated processes, no work that dies in a Figma file. One role
              is open right now.
            </p>
            <a
              href="#open-roles"
              className="animate-fade-up mt-10 rounded-full px-10 py-4 text-[14px] font-medium text-white transition-transform duration-200 hover:scale-[1.03]"
              style={{
                animationDelay: "300ms",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.2), 0 4px 24px rgba(0,0,0,0.15)",
              }}
            >
              View Open Roles
            </a>
          </div>
        </section>

        {/* Open role */}
        <div id="open-roles" className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
          <p
            className="text-[11px] tracking-[0.22em] uppercase mb-4"
            style={{ color: MUTED }}
          >
            Open roles
          </p>
          <h2
            className="font-serif font-medium leading-[1.08] tracking-tight mb-14"
            style={{ fontSize: "clamp(34px, 4vw, 48px)", color: INK }}
          >
            One seat open. <em>Make it count.</em>
          </h2>

          {/* Role card */}
          <div
            className="rounded-3xl bg-white p-8 sm:p-10"
            style={{ border: `1px solid ${BORDER}`, boxShadow: "0 2px 16px rgba(90,70,40,0.05)" }}
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3
                  className="font-serif font-medium text-[26px] sm:text-[30px] leading-snug"
                  style={{ color: INK }}
                >
                  {role.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3.5 py-1.5 text-[12px] font-medium"
                      style={{ background: "#faf8f4", border: `1px solid ${BORDER}`, color: BODY }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={role.mailto}
                className="shrink-0 self-start rounded-full px-7 py-3 text-[14px] font-medium text-white shadow-[0_2px_12px_rgba(30,24,15,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
                style={{ background: INK }}
              >
                Apply Now
              </a>
            </div>

            <p
              className="mt-7 text-[15px] leading-relaxed max-w-xl"
              style={{ color: BODY }}
            >
              {role.description}
            </p>

            <div
              className="mt-7 pt-7 grid gap-3 sm:grid-cols-2"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              {role.points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: MUTED }}
                    aria-hidden="true"
                  />
                  <span className="text-[14px] leading-relaxed" style={{ color: BODY }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footnote */}
          <p
            className="mt-10 text-center text-[13px] italic font-serif"
            style={{ color: MUTED }}
          >
            Nothing that fits? Write to us anyway —{" "}
            <a
              href="mailto:monkfunnel0@gmail.com"
              className="underline underline-offset-2 not-italic"
              style={{ color: BODY, fontFamily: "var(--font-sans)" }}
            >
              monkfunnel0@gmail.com
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
