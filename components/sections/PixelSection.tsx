import { ShieldCheck, Crosshair, Clock3 } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    bold: "You approve every move.",
    body: "Nothing ships without your sign-off. Full control, zero surprises.",
  },
  {
    icon: Crosshair,
    bold: "One outcome, not ten.",
    body: "We build around the single action that matters most, and cut everything that competes with it.",
  },
  {
    icon: Clock3,
    bold: "Shipped in 21 days.",
    body: "A real deadline, not an open-ended Figma file that drags for months.",
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
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
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto pt-20 sm:pt-24">
        <p
          className="text-[11px] tracking-[0.22em] uppercase mb-4 text-white/80"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}
        >
          Why us
        </p>
        <h2
          className="font-serif font-medium text-white leading-[1.08] tracking-tight mb-12"
          style={{ fontSize: "clamp(38px, 4.5vw, 56px)", textShadow: "0 2px 24px rgba(0,0,0,0.3)" }}
        >
          Why founders choose
          <br />
          <em>Monk Funnel.</em>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 w-full max-w-3xl">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center">
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
                  className="text-white/80 leading-relaxed text-[13.5px] max-w-[220px]"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}
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
