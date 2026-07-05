const INK = "#1e180f";
const BODY = "#5f5346";
const MUTED = "#9a8c7e";
const BORDER = "#e6dfd5";
const GOLD = "#d9a441";

type Review = {
  quote: string;
  metric: string;
  name: string;
  role: string;
  tags: string[];
  dark?: boolean;
};

const reviews: Review[] = [
  {
    quote:
      "Our old site explained the product. The new one sells it. Demo bookings went from 4–5 a month to 17 in the first six weeks — same traffic, same ad spend.",
    metric: "3× more demo bookings",
    name: "Arjun Mehra",
    role: "Founder, B2B SaaS · Bengaluru",
    tags: ["Website", "Copywriting", "21-day build"],
  },
  {
    quote:
      "The free teardown call alone was worth more than what our last agency charged us. They showed exactly where visitors were dropping off — then fixed every one of those leaks in the rebuild.",
    metric: "Cart abandonment down 28%",
    name: "Priya Nair",
    role: "Co-founder, D2C skincare · Mumbai",
    tags: ["Website", "CRO"],
    dark: true,
  },
  {
    quote:
      "Brief went in on the 3rd, site went live on the 24th. Exactly 21 days, exactly as promised. I've never had an agency hit a date before — let alone the first one they quoted.",
    metric: "Brief to live in 21 days",
    name: "Rohan Khanna",
    role: "Founder, fintech startup · Gurugram",
    tags: ["Website", "On-time delivery"],
  },
  {
    quote:
      "I gave them rough notes and they came back with copy that sounded more like me than I do. Clients now mention the website on the first call — that never happened in four years.",
    metric: "Enquiries up 2× in 2 months",
    name: "Sneha Kulkarni",
    role: "Principal, interior studio · Pune",
    tags: ["Website", "Brand copy"],
    dark: true,
  },
  {
    quote:
      "Everything on WhatsApp, every decision shown before it shipped, and full ownership handed over at the end — code, domain, analytics, all of it. No hostage games.",
    metric: "100% ownership handover",
    name: "Vikram Reddy",
    role: "Director, realty advisory · Hyderabad",
    tags: ["Website", "Handover"],
  },
  {
    quote:
      "We started with just the audit because I didn't trust agencies anymore. Three sprints later, they run our SEO too. They earned every rupee of the retainer before asking for it.",
    metric: "Audit → 3 ongoing sprints",
    name: "Ananya Iyer",
    role: "CEO, edtech platform · Chennai",
    tags: ["SEO", "Retainer"],
  },
];

function Stars({ dark }: { dark?: boolean }) {
  return (
    <div
      className="flex items-center gap-0.5 text-[13px] leading-none"
      style={{ color: GOLD }}
      aria-label="5 out of 5 stars"
    >
      {"★★★★★".split("").map((s, i) => (
        <span key={i} style={{ opacity: dark ? 0.95 : 1 }}>
          {s}
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="px-6 sm:px-12 lg:px-20 py-24 sm:py-32"
      style={{ borderTop: `1px solid ${BORDER}` }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-[11px] tracking-[0.22em] uppercase mb-4"
            style={{ color: MUTED }}
          >
            Testimonials
          </p>
          <h2
            className="font-serif font-medium leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(38px, 4.5vw, 56px)", color: INK }}
          >
            What founders <em>say.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => {
            const dark = !!r.dark;
            return (
              <div
                key={r.name}
                className="flex flex-col rounded-[28px] p-2.5 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: dark ? INK : "#ffffff",
                  border: `1px solid ${dark ? "#38301f" : BORDER}`,
                  boxShadow: dark
                    ? "0 10px 32px rgba(30,24,15,0.22)"
                    : "0 2px 16px rgba(90,70,40,0.06)",
                }}
              >
                {/* Quote panel — the "image area" of the reference card */}
                <div
                  className="flex flex-1 flex-col rounded-[20px] px-6 pt-6 pb-5"
                  style={{
                    background: dark ? "rgba(255,255,255,0.07)" : "#f3efe7",
                  }}
                >
                  <Stars dark={dark} />
                  <p
                    className="mt-4 flex-1 text-[14.5px] leading-relaxed"
                    style={{ color: dark ? "rgba(255,255,255,0.88)" : BODY }}
                  >
                    &ldquo;{r.quote}&rdquo;
                  </p>

                  {/* Result pill — mirrors the "Free Delivery until…" banner */}
                  <div className="mt-5 flex justify-center">
                    <span
                      className="rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-wide"
                      style={
                        dark
                          ? {
                              background: "rgba(255,255,255,0.12)",
                              color: "rgba(255,255,255,0.9)",
                              border: "1px solid rgba(255,255,255,0.18)",
                            }
                          : {
                              background: "#ffffff",
                              color: INK,
                              border: `1px solid ${BORDER}`,
                            }
                      }
                    >
                      {r.metric}
                    </span>
                  </div>
                </div>

                {/* Name row + tag chips — the "title + chips" zone of the reference */}
                <div className="px-4 pb-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold"
                      style={
                        dark
                          ? { background: "#ffffff", color: INK }
                          : { background: INK, color: "#ffffff" }
                      }
                    >
                      {r.name
                        .split(" ")
                        .map((w) => w.charAt(0))
                        .join("")}
                    </div>
                    <div>
                      <p
                        className="text-[14px] font-semibold leading-tight"
                        style={{ color: dark ? "#ffffff" : INK }}
                      >
                        {r.name}
                      </p>
                      <p
                        className="mt-0.5 text-[12px]"
                        style={{ color: dark ? "rgba(255,255,255,0.55)" : MUTED }}
                      >
                        {r.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {r.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-[11px] font-medium"
                        style={
                          dark
                            ? {
                                background: "rgba(255,255,255,0.08)",
                                color: "rgba(255,255,255,0.7)",
                                border: "1px solid rgba(255,255,255,0.14)",
                              }
                            : {
                                background: "#faf8f4",
                                color: BODY,
                                border: `1px solid ${BORDER}`,
                              }
                        }
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
