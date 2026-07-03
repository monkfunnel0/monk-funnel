import { TrendingUp, Target, Search, Layers, Monitor } from "lucide-react";

const INK = "#1e180f";
const BODY = "#5f5346";
const MUTED = "#9a8c7e";
const BORDER = "#e6dfd5";

const growthServices = [
  {
    icon: Search,
    title: "SEO",
    desc: "Topical authority and technical foundations for organic visibility that compounds.",
  },
  {
    icon: Target,
    title: "Google Ads",
    desc: "Intent-driven campaigns optimised for qualified leads, not vanity clicks.",
  },
  {
    icon: TrendingUp,
    title: "Meta Ads",
    desc: "Targeted Facebook and Instagram campaigns, every creative tested.",
  },
  {
    icon: Layers,
    title: "Funnels",
    desc: "Landing pages, email sequences, and retargeting that move prospects to a yes.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
      <div className="mb-14">
        <p
          className="text-[11px] tracking-[0.22em] uppercase mb-4"
          style={{ color: MUTED }}
        >
          What we do
        </p>
        <h2
          className="font-serif font-medium leading-[1.08] tracking-tight max-w-xl"
          style={{ fontSize: "clamp(38px, 4.5vw, 56px)", color: INK }}
        >
          We build the website first.
          <br />
          <em>Then we help it grow.</em>
        </h2>
      </div>

      {/* Primary service — featured */}
      <div
        className="mb-10 rounded-3xl bg-white p-8 sm:p-10"
        style={{ border: `1px solid ${BORDER}`, boxShadow: "0 2px 16px rgba(90,70,40,0.05)" }}
      >
        <div className="flex items-start gap-4 mb-5">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
            style={{ background: INK }}
          >
            <Monitor className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <span
              className="text-[11px] tracking-[0.22em] uppercase"
              style={{ color: MUTED }}
            >
              Primary service
            </span>
            <h3 className="text-xl font-medium mt-1" style={{ color: INK }}>
              Conversion-First Website Design &amp; Build
            </h3>
          </div>
        </div>
        <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: BODY }}>
          Every page engineered as a sales asset — not a brochure. Built on Next.js, no templates,
          structured around the one action that matters. Brief to live in 21 days.
        </p>
        <a
          href="/contact"
          className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium underline underline-offset-4 transition-colors hover:opacity-70"
          style={{ color: INK, textDecorationColor: "rgba(30,24,15,0.35)" }}
        >
          Get a free homepage teardown →
        </a>
      </div>

      {/* Secondary services */}
      <p
        className="text-[11px] tracking-[0.22em] uppercase mb-5"
        style={{ color: MUTED }}
      >
        When you&apos;re ready to scale traffic
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {growthServices.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="group bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{ border: `1px solid ${BORDER}` }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center mb-4 transition-colors"
                style={{ border: `1px solid ${BORDER}`, background: "#faf8f4" }}
              >
                <Icon className="w-4 h-4" style={{ color: BODY }} />
              </div>
              <h3 className="text-[15px] font-medium mb-1.5" style={{ color: INK }}>
                {s.title}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: BODY }}>
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
