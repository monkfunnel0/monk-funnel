"use client";

import { INK, BODY, MUTED } from "@/lib/theme";
import { SITE } from "@/lib/site";
const SERIF = "var(--font-serif)";
const BORDER = "#e8e2da";

type Feature = { text: string; ok: boolean };

type Plan = {
  name: string;
  badge: string | null;
  img: string;
  priceLabel: string;
  /** Typical range, not a fixed price — every project is quoted individually. */
  range: string;
  unit: string;
  features: Feature[];
  cta: { label: string; href: string };
  highlighted: boolean;
};

const plans: Plan[] = [
  {
    name: "Launch",
    badge: null,
    img: "/Free.avif",
    priceLabel: "Typical investment",
    range: "₹60,000 – ₹1,50,000",
    unit: "one-time",
    highlighted: false,
    features: [
      { text: "Typically 5–7 pages", ok: true },
      { text: "Mobile-first responsive design", ok: true },
      { text: "On-page SEO setup", ok: true },
      { text: "2 rounds of revisions", ok: true },
      { text: "30-day post-launch support", ok: true },
      { text: "Shipped in 21 days", ok: true },
      { text: "Ongoing growth channel", ok: false },
    ],
    cta: { label: "Get a custom quote", href: SITE.bookingUrl },
  },
  {
    name: "Launch + Grow",
    badge: null,
    img: "/Pro.avif",
    priceLabel: "Typical retainer",
    range: "₹30,000 – ₹75,000",
    unit: "/ mo after launch, ad spend extra",
    highlighted: true,
    features: [
      { text: "Everything in Launch", ok: true },
      { text: "One growth channel (SEO or ads)", ok: true },
      { text: "Monthly performance report", ok: true },
      { text: "Bi-weekly strategy calls", ok: true },
      { text: "Multi-channel ad management", ok: false },
    ],
    cta: { label: "Get a custom quote", href: SITE.bookingUrl },
  },
  {
    name: "Scale",
    badge: null,
    img: "/Team.avif",
    priceLabel: "Typical retainer",
    range: "₹1,00,000+",
    unit: "/ mo, ad spend extra",
    highlighted: false,
    features: [
      { text: "Everything in Launch + Grow", ok: true },
      { text: "Google + Meta ads", ok: true },
      { text: "Full funnel strategy & build", ok: true },
      { text: "Priority support & weekly calls", ok: true },
    ],
    cta: { label: "Talk to us", href: SITE.bookingUrl },
  },
];

function CheckIcon({ ok }: { ok: boolean }) {
  return ok ? (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="shrink-0"
    >
      <circle
        cx="9"
        cy="9"
        r="8.5"
        fill="#e8f4ec"
        stroke="#5a9a6e"
        strokeWidth="1"
      />
      <path
        d="M5.5 9l2.5 2.5 4.5-4.5"
        stroke="#5a9a6e"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="shrink-0"
    >
      <circle cx="9" cy="9" r="8.5" stroke="#d6cfc6" strokeWidth="1" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="px-6 sm:px-12 lg:px-20 py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="text-[11px] tracking-[0.22em] uppercase mb-4"
            style={{ color: MUTED }}
          >
            Pricing
          </p>
          <h2
            className="font-serif font-medium leading-[1.08] tracking-tight mb-4"
            style={{ fontSize: "clamp(38px, 4.5vw, 56px)", color: INK }}
          >
            Start with the website. <em>Scale from there.</em>
          </h2>
          <p
            className="text-[15px] max-w-lg mx-auto"
            style={{ color: MUTED }}
          >
            Every business has different problems, so every project is scoped
            individually. These are typical ranges — your exact quote comes
            after a free 30-minute discovery call.
          </p>
        </div>

        {/* Cards — swipeable row on phones (next card peeks in), stacked on tablets, 3-up on desktop */}
        <div className="-mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pt-2 pb-4 [scrollbar-width:none] sm:mx-auto sm:px-0 sm:pt-0 sm:pb-0 sm:overflow-visible sm:grid sm:grid-cols-1 lg:grid-cols-3 sm:gap-5 sm:max-w-md lg:max-w-none">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="shrink-0 w-[85%] snap-center sm:w-auto rounded-2xl overflow-hidden flex flex-col"
              style={{
                border: plan.highlighted
                  ? "1.5px solid #b8aa98"
                  : `1px solid ${BORDER}`,
                background: "#fff",
                boxShadow: plan.highlighted
                  ? "0 4px 24px 0 rgba(90,70,40,0.08)"
                  : "none",
                transition:
                  "transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-6px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 16px 48px rgba(90,70,40,0.14)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  plan.highlighted
                    ? "0 4px 24px 0 rgba(90,70,40,0.08)"
                    : "none";
              }}
            >
              {/* Plan name + CTA row (cofounder.co style) */}
              <div className="flex items-center justify-between px-5 py-4">
                <p className="text-[13px]" style={{ color: MUTED }}>
                  {plan.name}
                </p>
                <div className="flex items-center gap-2">
                  {plan.badge && (
                    <span
                      className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                      style={{ background: "#f0ece7", color: MUTED }}
                    >
                      {plan.badge}
                    </span>
                  )}
                  <a
                    href={plan.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-medium px-3 py-1.5 rounded-full transition-colors"
                    style={
                      plan.highlighted
                        ? { background: INK, color: "#fff" }
                        : { background: "#f0ece7", color: INK }
                    }
                  >
                    {plan.cta.label}
                  </a>
                </div>
              </div>

              {/* Image */}
              <div
  className="overflow-hidden mx-4 mt-1 sm:mt-4 rounded-xl aspect-[16/7] sm:aspect-4/3"
>
  <img
    src={plan.img}
    alt=""
    aria-hidden="true"
    className="w-full h-full object-cover"
    style={{
      imageRendering: "pixelated",
    }}
  />
</div>
              {/* Pricing */}
              <div className="px-5 pt-5 pb-4">
                <p
                  className="text-[11px] tracking-wide uppercase mb-1.5"
                  style={{ color: MUTED }}
                >
                  {plan.priceLabel}
                </p>
                {/* Non-breaking space keeps the dash with the low end
                    when a range wraps on narrow cards. */}
                <p
                  className="font-mono leading-tight"
                  style={{
                    fontSize: "clamp(20px, 1.9vw, 26px)",
                    color: INK,
                    fontWeight: 500,
                  }}
                >
                  {plan.range.replace(" – ", " – ")}
                </p>
                <p className="text-[12px] mt-1.5" style={{ color: MUTED }}>
                  {plan.unit}
                </p>
              </div>

              {/* Divider */}
              <div
                style={{ height: 1, background: BORDER, margin: "0 20px" }}
              />

              {/* Features */}
              <div className="px-5 py-5 flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <div key={f.text} className="flex items-center gap-2.5">
                    <CheckIcon ok={f.ok} />
                    <span
                      className={`text-[13px] leading-snug ${f.ok ? "" : "line-through"}`}
                      style={{ color: f.ok ? INK : MUTED }}
                    >
                      {!f.ok && <span className="sr-only">Not included: </span>}
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p
          className="text-center mt-10 text-[13px]"
          style={{ fontFamily: SERIF, fontStyle: "italic", color: MUTED }}
        >
          Prices are indicative, not fixed. Ad spend is billed separately and
          paid directly to Google/Meta. No commitment until you approve a
          written quote.
        </p>
        <p className="text-center mt-3 text-[13px]">
          <a
            href="/contact"
            className="underline underline-offset-4 transition-colors hover:opacity-70"
            style={{ color: BODY, textDecorationColor: "rgba(30,24,15,0.25)" }}
          >
            Prefer not to call? Send us your brief →
          </a>
        </p>
      </div>
    </section>
  );
}
