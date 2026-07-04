const INK = "#1e180f";
const BODY = "#5f5346";
const MUTED = "#9a8c7e";
const BORDER = "#e6dfd5";

const steps = [
  {
    num: "01",
    title: "Discover",
    body: "Before we design anything, we find the one outcome this site has to drive and the one person it has to convince. That answer becomes the headline.",
  },
  {
    num: "02",
    title: "Wireframe",
    body: "Structure before style — we map every page so nothing is left to chance.",
  },
  {
    num: "03",
    title: "Design",
    body: "Your brand given form — typography, colour, and space working as one.",
  },
  {
    num: "04",
    title: "Build",
    body: "Pixel-perfect code — fast, accessible, and built to last beyond the trend cycle.",
  },
  {
    num: "05",
    title: "Launch",
    body: "We hand over the keys — and stay close if you need us to drive.",
  },
];

export default function WebsiteFactorySection() {
  return (
    <section
      id="process"
      className="px-6 sm:px-12 lg:px-20 py-24 sm:py-32"
      style={{ borderTop: `1px solid ${BORDER}` }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <p
          className="text-[11px] tracking-[0.22em] uppercase mb-4"
          style={{ color: MUTED }}
        >
          Process
        </p>
        <h2
          className="font-serif font-medium leading-[1.08] tracking-tight mb-5"
          style={{ fontSize: "clamp(38px, 4.5vw, 56px)", color: INK }}
        >
          How a 21-day build
          <br />
          <em>actually works.</em>
        </h2>

        {/* Badge */}
        <div className="mb-16">
          <span
            className="inline-block text-[12px] font-medium px-4 py-1.5 rounded-full"
            style={{ background: INK, color: "#fff" }}
          >
            Brief to live in 21 days — every time
          </span>
        </div>

        {/* Timeline — editorial rows */}
        <div style={{ borderTop: `1px solid ${BORDER}` }}>
          {steps.map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_180px_1fr] gap-x-4 sm:gap-x-8 py-8 sm:py-9 items-baseline"
              style={{ borderBottom: `1px solid ${BORDER}` }}
            >
              <span
                className="font-serif italic text-[17px]"
                style={{ color: MUTED }}
              >
                {step.num}
              </span>
              <h3
                className="font-serif font-medium text-[26px] sm:text-[28px] leading-snug"
                style={{ color: INK }}
              >
                {step.title}
              </h3>
              <p
                className="col-span-2 sm:col-span-1 col-start-2 sm:col-start-3 mt-2 sm:mt-0 text-[15px] leading-relaxed max-w-xl"
                style={{ color: BODY }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
