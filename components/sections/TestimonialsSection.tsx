const INK = "#1e180f";
const BODY = "#5f5346";
const MUTED = "#9a8c7e";
const BORDER = "#e6dfd5";

// Placeholder quotes — swap for real client testimonials before launch.
const testimonials = [
  {
    company: "Hearth & Home",
    quote:
      "They rebuilt our homepage around one signup form and our conversion rate nearly doubled in the first month.",
    name: "A. Sharma",
    role: "Founder",
  },
  {
    company: "Northloop",
    quote:
      "Fastest agency we've worked with. Brief to live site in three weeks, exactly as promised — no scope creep.",
    name: "R. Iyer",
    role: "Co-founder",
  },
  {
    company: "Verge Labs",
    quote:
      "Every page had a clear job. No fluff, no filler sections just to look busy. Our bounce rate dropped noticeably.",
    name: "K. Menon",
    role: "Head of Growth",
  },
  {
    company: "Pico Studio",
    quote:
      "We'd been burned by agencies before. Monk Funnel actually shipped what they scoped, on the date they scoped it.",
    name: "S. Rao",
    role: "Founder",
  },
  {
    company: "Fieldnote",
    quote:
      "The copy alone was worth the project. They understood our customer better than we did after three years in market.",
    name: "T. Nair",
    role: "CEO",
  },
  {
    company: "Loop & Co",
    quote:
      "Transparent from day one. We saw every decision before it shipped — zero surprise invoices, zero surprise redesigns.",
    name: "D. Kapoor",
    role: "Co-founder",
  },
];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.company}
              className="rounded-2xl bg-white p-6 flex flex-col"
              style={{ border: `1px solid ${BORDER}`, boxShadow: "0 2px 16px rgba(90,70,40,0.05)" }}
            >
              <p
                className="text-[12px] font-semibold tracking-wide mb-4"
                style={{ color: MUTED }}
              >
                {t.company}
              </p>
              <p
                className="text-[14.5px] leading-relaxed flex-1"
                style={{ color: BODY }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-semibold text-white shrink-0"
                  style={{ background: INK }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[13px] font-medium" style={{ color: INK }}>
                    {t.name}
                  </p>
                  <p className="text-[12px]" style={{ color: MUTED }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
