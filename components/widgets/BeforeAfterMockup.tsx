"use client";

// Hero visual: a browser window showing a fictional startup ("Acme") before and
// after a Monk Funnel rebuild (a dark, premium SaaS site). Drag (or swipe, or use arrow keys) to compare.
// The pages are drawn at a fixed design width and scaled down to fit; the drag
// handle and labels live outside the scaled layer so they stay full-size on phones.

import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeftRight,
  Copy,
  Monitor,
  PanelLeft,
  Plus,
  RotateCw,
  Share2,
} from "lucide-react";

const DESIGN_WIDTH = 896;
const TITLE_BAR_HEIGHT = 38;
const BODY_HEIGHT = 440;

function TitleBar() {
  return (
    <div
      className="bg-[#242427] border-b border-white/5 px-4 flex items-center gap-2"
      style={{ height: TITLE_BAR_HEIGHT }}
    >
      <div className="flex items-center gap-1.5 mr-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      <PanelLeft className="w-3.5 h-3.5 text-white/40" />
      <ChevronLeft className="w-3.5 h-3.5 text-white/40" />
      <ChevronRight className="w-3.5 h-3.5 text-white/25" />
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-1.5 bg-[#1a1a1c] rounded-md px-6 py-1">
          <Monitor className="w-3 h-3 text-white/60" />
          <span className="text-[10px] text-white/60">acme.com</span>
        </div>
      </div>
      <RotateCw className="w-3.5 h-3.5 text-white/40" />
      <Share2 className="w-3.5 h-3.5 text-white/40" />
      <Plus className="w-3.5 h-3.5 text-white/40" />
      <Copy className="w-3.5 h-3.5 text-white/40" />
    </div>
  );
}

/** The typical startup homepage: busy, generic, every option shouting at once. */
function BeforePage() {
  return (
    <div className="absolute inset-0 bg-white text-[#333]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="bg-[#2563eb] text-white text-[11px] text-center py-1.5">
        🎉 NEW: Acme v3.2 is here! Read the release notes and explore our latest features →
      </div>
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
        <span className="font-bold text-[17px] tracking-tight text-[#2563eb]">ACME</span>
        <div className="flex gap-4 text-[11px] text-gray-600">
          {["Products", "Solutions", "Platform", "Resources", "Company", "Partners", "Pricing"].map((l) => (
            <span key={l}>{l} ▾</span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="text-gray-600">Log in</span>
          <span className="border border-[#2563eb] text-[#2563eb] rounded px-2.5 py-1">Sign up</span>
          <span className="bg-[#2563eb] text-white rounded px-2.5 py-1">Contact sales</span>
        </div>
      </div>

      <div className="px-10 pt-8 grid grid-cols-[1.25fr_1fr] gap-8">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-2">
            Innovative · Scalable · Seamless
          </p>
          <h3 className="text-[25px] font-bold leading-tight text-[#222]">
            Welcome to Acme — The All-in-One Innovative Platform for Modern Businesses
          </h3>
          <p className="text-[12px] text-gray-500 mt-3 leading-relaxed">
            Acme leverages cutting-edge technology to empower teams with seamless,
            end-to-end solutions that drive synergy, efficiency and growth across
            your entire organisation.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Learn more", "Watch video", "See features", "Book a demo"].map((b) => (
              <span key={b} className="border border-[#2563eb] text-[#2563eb] text-[11px] rounded px-3 py-1.5">
                {b}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 content-start">
          {["Analytics", "Integrations", "Automation", "Security", "Reports", "API"].map((t) => (
            <div key={t} className="rounded bg-gray-50 border border-gray-200 p-2.5 flex flex-col items-center gap-1.5">
              <span className="w-6 h-6 rounded-full bg-[#dbe6fd]" />
              <span className="text-[10px] text-gray-600">{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-10 mt-6 grid grid-cols-4 gap-3">
        {["Enterprise-grade", "AI-powered", "Cloud-native", "24/7 support"].map((s) => (
          <div key={s} className="rounded bg-[#f3f6fd] px-3 py-3 text-[11px] text-[#2563eb] text-center">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

// Revenue line for the dashboard chart (viewBox 0 0 300 80).
const CHART_LINE =
  "M0 62 C 20 58, 34 64, 52 54 S 86 40, 104 44 S 140 30, 158 34 S 196 18, 214 22 S 252 12, 270 8 L 300 4";

/** Product UI for the "after" page — a finance dashboard, drawn in CSS/SVG. */
function Dashboard() {
  const rows = [
    { name: "Northwind", amount: "₹48,000", status: "Paid", tone: "paid" },
    { name: "Globex", amount: "₹1,20,000", status: "Paid", tone: "paid" },
    { name: "Initech", amount: "₹32,500", status: "Due in 3d", tone: "due" },
  ] as const;
  return (
    <div className="relative">
      {/* Glow behind the card */}
      <div
        className="absolute -inset-10 rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(99,102,241,0.45), rgba(16,185,129,0.18), transparent)" }}
      />
      <div className="relative rounded-2xl border border-white/10 bg-[#111114]/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-white/80">Overview</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] text-white/50">
            This month ▾
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { k: "Collected", v: "₹12.4L", d: "+18%", up: true },
            { k: "Overdue", v: "₹0.9L", d: "−42%", up: true },
            { k: "Avg. days to pay", v: "4.2", d: "−6 days", up: true },
          ].map((m) => (
            <div key={m.k} className="rounded-lg border border-white/5 bg-white/[0.03] p-2">
              <p className="text-[8.5px] text-white/45">{m.k}</p>
              <p className="mt-0.5 text-[15px] font-semibold tracking-tight text-white">{m.v}</p>
              <p className="text-[8.5px] font-medium text-emerald-400">{m.d}</p>
            </div>
          ))}
        </div>

        <svg viewBox="0 0 300 80" className="mt-3 h-[70px] w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="acme-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="acme-stroke" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>
          </defs>
          {[20, 40, 60].map((y) => (
            <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgba(255,255,255,0.05)" />
          ))}
          <path d={`${CHART_LINE} L 300 80 L 0 80 Z`} fill="url(#acme-fill)" />
          <path d={CHART_LINE} fill="none" stroke="url(#acme-stroke)" strokeWidth="2" />
          <circle cx="270" cy="8" r="3.5" fill="#34d399" />
          <circle cx="270" cy="8" r="7" fill="#34d399" opacity="0.25" />
        </svg>

        <div className="mt-2 divide-y divide-white/5">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center justify-between py-1.5">
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-md bg-gradient-to-br from-white/20 to-white/5" />
                <span className="text-[10px] text-white/75">{r.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] tabular-nums text-white/60">{r.amount}</span>
                <span
                  className={
                    r.tone === "paid"
                      ? "rounded-full bg-emerald-400/10 px-1.5 py-0.5 text-[8.5px] font-medium text-emerald-300"
                      : "rounded-full bg-amber-400/10 px-1.5 py-0.5 text-[8.5px] font-medium text-amber-300"
                  }
                >
                  {r.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** The same brand, rebuilt: dark, premium, one message, one action. */
function AfterPage() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#08080a] text-white">
      {/* Atmosphere: top glow + faint grid */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 70% 0%, rgba(99,102,241,0.28), transparent 70%), radial-gradient(40% 40% at 20% 30%, rgba(16,185,129,0.10), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(80% 70% at 50% 20%, black, transparent)",
        }}
      />

      {/* Nav */}
      <div className="relative flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-2">
          <span className="h-4 w-4 rotate-45 rounded-[3px] bg-gradient-to-br from-indigo-400 to-emerald-400" />
          <span className="text-[14px] font-semibold tracking-tight">Acme</span>
        </div>
        <div className="flex items-center gap-6 text-[11px] text-white/55">
          <span>Product</span>
          <span>Customers</span>
          <span>Pricing</span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-white/60">Log in</span>
          <span className="rounded-full bg-white px-3.5 py-1.5 font-medium text-[#08080a]">Start free</span>
        </div>
      </div>

      {/* Hero: product left, message right */}
      <div className="relative grid grid-cols-2 gap-14 px-10 pt-6 items-center">
        <Dashboard />
        <div className="pl-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            New · Auto-reminders 2.0 →
          </span>
          <h3
            className="mt-4 text-[40px] font-semibold leading-[1.02] tracking-[-0.03em]"
            style={{
              backgroundImage: "linear-gradient(180deg, #ffffff 30%, rgba(255,255,255,0.55))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Get paid on time, every time.
          </h3>
          <p className="mt-3 max-w-[330px] text-[13px] leading-relaxed text-white/55">
            Acme sends the invoice, chases late payers and reconciles the money — so you never have to.
          </p>
          <div className="mt-5 flex items-center gap-2.5">
            <span className="rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold text-[#08080a] shadow-[0_0_30px_rgba(129,140,248,0.35)]">
              Start free
            </span>
            <span className="rounded-full border border-white/15 px-5 py-2.5 text-[12px] font-medium text-white/80">
              Book a demo
            </span>
          </div>
          <div className="mt-6">
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">Trusted by 2,000+ finance teams</p>
            <div className="mt-2 flex items-center gap-5 text-[12px] font-semibold tracking-tight text-white/40">
              <span>Northwind</span>
              <span>Globex</span>
              <span className="italic">Initech</span>
              <span>Umbrella</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterMockup() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState(50); // % of width showing "before"
  const [animated, setAnimated] = useState(false); // smooth moves for the intro hint
  const dragging = useRef(false);
  const touched = useRef(false);

  // Scale the fixed-width design to the container.
  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    const update = () => setScale(Math.min(1, outer.offsetWidth / DESIGN_WIDTH));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(outer);
    return () => observer.disconnect();
  }, []);

  // One gentle wiggle so visitors see it's draggable (skipped for reduced motion).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const steps: [number, number][] = [[1600, 30], [2500, 70], [3400, 50]];
    const timers = steps.map(([t, p]) =>
      setTimeout(() => {
        if (touched.current) return;
        setAnimated(true);
        setPos(p);
      }, t),
    );
    const done = setTimeout(() => setAnimated(false), 4200);
    return () => [...timers, done].forEach(clearTimeout);
  }, []);

  function moveTo(clientX: number) {
    const rect = outerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  }

  function stopIntro() {
    touched.current = true;
    setAnimated(false);
  }

  const height = (TITLE_BAR_HEIGHT + BODY_HEIGHT) * scale;
  const ease = "700ms cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div
      ref={outerRef}
      className="relative select-none overflow-hidden"
      style={{ height, touchAction: "pan-y" }}
      onPointerDown={(e) => {
        stopIntro();
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        moveTo(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      {/* Scaled browser */}
      <div
        aria-hidden="true"
        style={{
          width: DESIGN_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <TitleBar />
        <div className="relative overflow-hidden" style={{ height: BODY_HEIGHT }}>
          <BeforePage />
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 0 ${pos}%)`, transition: animated ? `clip-path ${ease}` : undefined }}
          >
            <AfterPage />
          </div>
        </div>
      </div>

      {/* Divider + handle (full size, easy to grab on phones) */}
      <div
        className="absolute bottom-0 -translate-x-1/2"
        style={{
          left: `${pos}%`,
          top: TITLE_BAR_HEIGHT * scale,
          transition: animated ? `left ${ease}` : undefined,
        }}
      >
        <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-white shadow-[0_0_8px_rgba(0,0,0,0.35)]" />
        <div
          role="slider"
          tabIndex={0}
          aria-label="Compare the website before and after a Monk Funnel rebuild"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(100 - pos)}% showing the rebuilt version`}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
              e.preventDefault();
              stopIntro();
              setPos((p) => Math.max(4, Math.min(96, p + (e.key === "ArrowLeft" ? -5 : 5))));
            }
          }}
          className="absolute left-1/2 top-[72%] sm:top-[50%] -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1e180f] shadow-[0_4px_16px_rgba(0,0,0,0.3)] ring-1 ring-black/10 cursor-ew-resize focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e180f]"
        >
          <ChevronsLeftRight className="h-5 w-5" />
          {/* Labels ride along with the handle */}
          <span className="pointer-events-none absolute right-full mr-2 rounded-full bg-black/65 px-2.5 py-1 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-white">
            Before
          </span>
          <span className="pointer-events-none absolute left-full ml-2 rounded-full bg-white px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-[#08080a] shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
            After
          </span>
        </div>
      </div>
    </div>
  );
}
