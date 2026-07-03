"use client";

const SERIF = "var(--font-serif)";
const BORDER = "#e8e2da";

type Feature = { text: string; ok: boolean };

type Plan = {
  name: string;
  badge: string | null;
  img: string;
  priceLabel: string;
  priceSymbol: string;
  price: string;
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
    priceLabel: "Starting at",
    priceSymbol: "₹",
    price: "24,999",
    unit: "one-time",
    highlighted: false,
    features: [
      { text: "Up to 7 pages", ok: true },
      { text: "Mobile-first responsive design", ok: true },
      { text: "On-page SEO setup", ok: true },
      { text: "2 rounds of revisions", ok: true },
      { text: "30-day post-launch support", ok: true },
      { text: "Shipped in 21 days", ok: true },
      { text: "Ongoing growth channel", ok: false },
    ],
    cta: { label: "Get started", href: "/contact" },
  },
  {
    name: "Launch + Grow",
    badge: null,
    img: "/Pro.avif",
    priceLabel: "Starting at",
    priceSymbol: "₹",
    price: "18,999",
    unit: "/ mo after launch",
    highlighted: true,
    features: [
      { text: "Everything in Launch", ok: true },
      { text: "One growth channel (SEO or ads)", ok: true },
      { text: "Monthly performance report", ok: true },
      { text: "Bi-weekly strategy calls", ok: true },
      { text: "Multi-channel ad management", ok: false },
    ],
    cta: { label: "Start growing", href: "/contact" },
  },
  {
    name: "Scale",
    badge: "Coming soon",
    img: "/Team.avif",
    priceLabel: "Custom",
    priceSymbol: "",
    price: "Let's talk",
    unit: "",
    highlighted: false,
    features: [
      { text: "Everything in Growth", ok: true },
      { text: "Google + Meta ads", ok: true },
      { text: "Full funnel strategy & build", ok: true },
      { text: "Priority support & weekly calls", ok: true },
    ],
    cta: { label: "Contact us", href: "/contact" },
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
            style={{ color: "#9a8c7e" }}
          >
            Pricing
          </p>
          <h2
            className="font-serif font-medium leading-[1.08] tracking-tight mb-4"
            style={{ fontSize: "clamp(38px, 4.5vw, 56px)", color: "#1e180f" }}
          >
            Start with the website. <em>Scale from there.</em>
          </h2>
          <p
            className="text-[15px] max-w-md mx-auto"
            style={{ color: "#7a6a58" }}
          >
            Every tier starts with a conversion-first website — then adds growth
            channels once you&apos;re live and ready to scale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl overflow-hidden flex flex-col"
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
                <p className="text-[13px]" style={{ color: "#9a8c7e" }}>
                  {plan.name}
                </p>
                <div className="flex items-center gap-2">
                  {plan.badge && (
                    <span
                      className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full"
                      style={{ background: "#f0ece7", color: "#7a6a58" }}
                    >
                      {plan.badge}
                    </span>
                  )}
                  <a
                    href={plan.cta.href}
                    className="text-[12px] font-medium px-3 py-1.5 rounded-full transition-colors"
                    style={
                      plan.highlighted
                        ? { background: "#1e180f", color: "#fff" }
                        : { background: "#f0ece7", color: "#1e180f" }
                    }
                  >
                    {plan.cta.label}
                  </a>
                </div>
              </div>

              {/* Image */}
              <div
  className="overflow-hidden mx-4 mt-4 rounded-xl"
  style={{
    aspectRatio: "4/3",
  }}
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
                  style={{ color: "#9a8c7e" }}
                >
                  {plan.priceLabel}
                </p>
                <div className="flex items-baseline gap-1 flex-wrap">
                  {plan.priceSymbol && (
                    <span
                      className="text-[15px] font-medium"
                      style={{ color: "#1e180f" }}
                    >
                      {plan.priceSymbol}
                    </span>
                  )}
                  <span
                    className="font-mono leading-none"
                    style={{
                      fontSize:
                        plan.price === "Let's talk"
                          ? "28px"
                          : "clamp(36px, 4vw, 48px)",
                      color: "#1e180f",
                      fontWeight: 500,
                    }}
                  >
                    {plan.price}
                  </span>
                  {plan.unit && (
                    <span
                      className="text-[12px] ml-1"
                      style={{ color: "#9a8c7e" }}
                    >
                      {plan.unit}
                    </span>
                  )}
                </div>
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
                      className="text-[13px] leading-snug"
                      style={{ color: f.ok ? "#1e180f" : "#b8aa98" }}
                    >
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
          style={{ fontFamily: SERIF, fontStyle: "italic", color: "#a09080" }}
        >
          All plans include a free 30-minute discovery call. No commitment
          required.
        </p>
      </div>
    </section>
  );
}
