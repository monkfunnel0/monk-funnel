import { MessagesSquare, CalendarCheck, ReceiptText, Target, KeyRound, Unlock } from "lucide-react";
import { INK, BODY, BORDER } from "@/lib/theme";

// Each point is a concrete difference from the usual agency experience. Every claim
// is one the site already makes elsewhere (hero, pricing, FAQ).
const pillars = [
  {
    icon: MessagesSquare,
    bold: "Founders on every call.",
    body: "No account manager passing messages along. You talk to the people designing and building your site.",
  },
  {
    icon: CalendarCheck,
    bold: "Live in 21 days.",
    body: "The date is agreed before we start — not a three-month project that keeps slipping.",
  },
  {
    icon: ReceiptText,
    bold: "One fixed quote.",
    body: "Scoped on a free call and put in writing. No hourly billing, no surprise change requests.",
  },
  {
    icon: Target,
    bold: "Built to get enquiries.",
    body: "Every page is designed around the action you want visitors to take, not how it looks in a portfolio.",
  },
  {
    icon: KeyRound,
    bold: "Yours from day one.",
    body: "Code, domain and design files are handed over. Nothing held back, nothing held hostage.",
  },
  {
    icon: Unlock,
    bold: "No lock-ins.",
    body: "Growth retainers run month-to-month. You stay because it's working, not because a contract says so.",
  },
];

export default function PixelSection() {
  return (
    <section id="about" className="relative overflow-hidden flex flex-col items-center justify-center min-h-[110svh] px-4">

      {/* Blue sky background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/blue-background.avif"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Top pixel border */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/carousel-top.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-0 w-full z-5"
        style={{ imageRendering: "pixelated" }}
      />

      {/* Left tree + land — h-full, object-contain anchored bottom-left */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
  src="/left-decor.png"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    select-none
    absolute
    bottom-0
    left-0
    z-10
    h-[65%]
    sm:h-[72%]
    lg:h-[80%]
    w-auto
  "
/>

      {/* Right top tree — hidden on mobile, extends above section edge */}
   {/* <img
  src="/right-top-decor.webp"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    select-none
    absolute
    right-0
    z-10
    w-[28vw]
    min-w-[260px]
    max-w-[520px]
    h-auto
  "
  style={{ top: "60px" }}
/> */}

      {/* Bottom-right decor — h-full, object-contain anchored bottom-right */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
   <img
  src="/right-small-decor.webp"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    select-none
    absolute
    bottom-0
    right-0
    z-10
    h-[30%]
    sm:h-[36%]
    lg:h-[42%]
    w-auto
  "
/>
      {/* Left cloud — floats in mid-sky on the left */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
  src="/clouds-left.webp"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    select-none
    absolute
    left-0
    z-[8]
    w-[38%]
    sm:w-[28%]
    lg:w-[22%]
    h-auto
  "
  style={{ top: "26%" }}
/>

      {/* Right cloud — floats in mid-sky on the right */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
   <img
  src="/clouds-right.webp"
  alt=""
  aria-hidden="true"
  className="
    pointer-events-none
    select-none
    absolute
    right-0
    z-[8]
    w-[38%]
    sm:w-[28%]
    lg:w-[22%]
    h-auto
  "
  style={{ top: "46%" }}
/>

      {/* Bottom pixel border */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/carousel-bottom.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 w-full z-15"
        style={{ imageRendering: "pixelated", bottom: "-16px" }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center w-full max-w-4xl mx-auto pt-20 sm:pt-24 pb-24 sm:pb-36">
        <p
          className="text-[11px] tracking-[0.22em] uppercase mb-4 text-white/80"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}
        >
          Why us
        </p>
        <h2
          className="font-serif font-medium text-white leading-[1.08] tracking-tight mb-14"
          style={{ fontSize: "clamp(38px, 4.5vw, 56px)", textShadow: "0 2px 24px rgba(0,0,0,0.3)" }}
        >
          Why founders choose
          <br />
          <em>Monk Funnel.</em>
        </h2>

        {/* Phone: one compact card, readable over the pixel trees */}
        <ul
          className="sm:hidden w-full max-w-md rounded-3xl bg-white text-left divide-y divide-line"
          style={{ boxShadow: "0 16px 48px rgba(15,40,80,0.25)" }}
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <li key={p.bold} className="flex gap-4 px-5 py-4">
                <span
                  className="mt-0.5 w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ border: `1px solid ${BORDER}`, background: "#faf8f4" }}
                >
                  <Icon className="w-4 h-4" style={{ color: BODY }} />
                </span>
                <div>
                  <p className="text-[15px] font-medium leading-snug" style={{ color: INK }}>
                    {p.bold}
                  </p>
                  <p className="mt-1 text-[13.5px] leading-relaxed" style={{ color: BODY }}>
                    {p.body}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Tablet & desktop: airy icons on the sky */}
        <div className="hidden sm:grid grid-cols-3 gap-x-8 gap-y-12 w-full max-w-3xl">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.bold} className="flex flex-col items-center text-center">
                <Icon
                  className="w-8 h-8 text-white mb-4"
                  strokeWidth={1.5}
                  style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))" }}
                />
                <p
                  className="font-semibold text-white mb-2 text-[16px] leading-snug"
                  style={{ textShadow: "0 1px 10px rgba(0,0,0,0.35)" }}
                >
                  {p.bold}
                </p>
                <p
                  className="text-white/90 leading-relaxed text-[14px] max-w-60"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
                >
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
