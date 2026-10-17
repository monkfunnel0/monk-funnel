import Link from "next/link";
import { Lock, EyeOff, Palette } from "lucide-react";
import { INK, BODY, MUTED, BORDER } from "@/lib/theme";

// Stamp colour — the NPC monk's robe shade, dark enough for small text (AA on white).
const STAMP = "#a85a1c";

const points = [
  {
    icon: Lock,
    title: "Under NDA",
    desc: "Most client work is covered by confidentiality agreements — and we honour every one.",
  },
  {
    icon: EyeOff,
    title: "Never shown without permission",
    desc: "Your site, brand and numbers stay off our portfolio, and off every sales call we take.",
  },
  {
    icon: Palette,
    title: "Studio concepts instead",
    desc: "Our Work page shows design explorations — the same craft, without anyone's data.",
  },
];

// 12×12 pixel padlock, same technique as the floating NPC sprite. "." is transparent.
const LOCK_ROWS = [
  "....oooo....",
  "...o....o...",
  "..o......o..",
  "..o......o..",
  ".oooooooooo.",
  ".oyyyyyyyyo.",
  ".oyyyccyyyo.",
  ".oyyyccyyyo.",
  ".oyyyycyyyo.",
  ".oyyyyyyyyo.",
  ".oooooooooo.",
  "............",
];
const LOCK_PALETTE: Record<string, string> = { o: STAMP, y: "#d9772b", c: "#faf3ea" };

function PixelLock() {
  return (
    <svg viewBox="0 0 12 12" width={18} height={18} shapeRendering="crispEdges" aria-hidden="true">
      {LOCK_ROWS.flatMap((row, y) =>
        row.split("").map((key, x) =>
          key === "." ? null : (
            <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={LOCK_PALETTE[key]} />
          ),
        ),
      )}
    </svg>
  );
}

/** A client site with everything identifying blacked out. Purely decorative. */
function RedactedSite({ faint = false }: { faint?: boolean }) {
  const bar = faint ? "#e9e3da" : "#e6dfd5";
  const ink = faint ? "#cfc6ba" : INK;
  return (
    <div className="rounded-xl overflow-hidden bg-[#1a1a1c] ring-1 ring-black/5">
      {/* Browser chrome — same treatment as the hero mockup */}
      <div className="flex items-center gap-1.5 px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="mx-auto flex items-center gap-1 rounded-md bg-white/10 px-3 py-1">
          <span className="h-1.5 w-14 rounded-sm bg-white/70" />
          <span className="text-[9px] leading-none text-white/60">.com</span>
        </span>
      </div>

      {/* Page */}
      <div className="bg-[#faf8f4] px-5 pt-4 pb-5 sm:px-6">
        <div className="flex items-center justify-between mb-7">
          <span className="h-2.5 w-16 rounded-sm" style={{ background: ink }} />
          <div className="flex items-center gap-2.5">
            <span className="hidden sm:block h-1.5 w-8 rounded-full" style={{ background: bar }} />
            <span className="hidden sm:block h-1.5 w-8 rounded-full" style={{ background: bar }} />
            <span className="h-4 w-14 rounded-full" style={{ background: ink }} />
          </div>
        </div>

        {/* Headline + subtext, redacted */}
        <span className="block h-4 w-[82%] rounded-sm mb-2" style={{ background: ink }} />
        <span className="block h-4 w-[58%] rounded-sm mb-4" style={{ background: ink }} />
        <span className="block h-2 w-[70%] rounded-full mb-1.5" style={{ background: bar }} />
        <span className="block h-2 w-[50%] rounded-full mb-5" style={{ background: bar }} />
        <span className="inline-block h-6 w-24 rounded-full" style={{ background: ink }} />

        {/* Product tiles, blurred */}
        <div className="mt-6 grid grid-cols-3 gap-2.5">
          {["#e8d8c4", "#d9e4dc", "#e4d6d8"].map((c) => (
            <span
              key={c}
              className="aspect-4/3 rounded-lg"
              style={{ background: faint ? bar : c, filter: "blur(1.5px)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ConfidentialSection() {
  return (
    <section
      id="confidential"
      className="px-6 sm:px-12 lg:px-20 py-24 sm:py-32"
      style={{ borderTop: `1px solid ${BORDER}` }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ color: MUTED }}
            >
              Confidential by default
            </p>
            <h2
              className="font-serif font-medium leading-[1.08] tracking-tight mb-5"
              style={{ fontSize: "clamp(38px, 4.5vw, 56px)", color: INK }}
            >
              Your project
              <br />
              <em>stays yours.</em>
            </h2>
            <p className="text-[15px] leading-relaxed max-w-md" style={{ color: BODY }}>
              Founders trust us with unreleased products, revenue numbers and
              brand plans. That&apos;s why you won&apos;t find client names or
              screenshots here — and why yours won&apos;t end up on anyone
              else&apos;s screen.
            </p>
            <Link
              href="/work"
              className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium underline underline-offset-4 transition-colors hover:opacity-70"
              style={{ color: INK, textDecorationColor: "rgba(30,24,15,0.35)" }}
            >
              Browse studio concepts →
            </Link>
          </div>

          {/* Visual — decorative only */}
          <div className="relative hidden sm:block order-first lg:order-none mx-auto w-full sm:max-w-md lg:max-w-none sm:pt-6 sm:pr-6" aria-hidden="true">
            <div className="absolute top-0 right-0 left-6 sm:left-10 rotate-3 opacity-80">
              <RedactedSite faint />
            </div>
            <div className="relative rotate-[-1.5deg] shadow-[0_24px_60px_rgba(30,24,15,0.18)] rounded-xl">
              <RedactedSite />
            </div>

            {/* Rubber stamp */}
            <div
              className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] flex items-center gap-2 whitespace-nowrap rounded-md bg-white/90 px-3 py-1.5 sm:px-4 sm:py-2 backdrop-blur-sm"
              style={{ border: `2px solid ${STAMP}`, boxShadow: `0 0 0 3px rgba(255,255,255,0.9), 0 0 0 4px ${STAMP}` }}
            >
              <PixelLock />
              <span
                className="text-[11px] sm:text-[13px] font-semibold tracking-[0.2em] uppercase"
                style={{ color: STAMP }}
              >
                Under NDA
              </span>
            </div>
          </div>
        </div>

        {/* Points — one list card on phones, three cards from sm up */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 sm:gap-4 max-sm:rounded-3xl max-sm:bg-white max-sm:border max-sm:border-line max-sm:divide-y max-sm:divide-line">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="flex gap-4 px-5 py-4 sm:block sm:bg-white sm:rounded-2xl sm:p-6 sm:border sm:border-line sm:transition-all sm:duration-300 sm:hover:-translate-y-1"
              >
                <span
                  className="mt-0.5 sm:mt-0 w-9 h-9 shrink-0 rounded-full flex items-center justify-center sm:mb-4"
                  style={{ border: `1px solid ${BORDER}`, background: "#faf8f4" }}
                >
                  <Icon className="w-4 h-4" style={{ color: BODY }} />
                </span>
                <div>
                  <h3 className="text-[15px] font-medium mb-1" style={{ color: INK }}>
                    {p.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[13px] leading-relaxed" style={{ color: BODY }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
