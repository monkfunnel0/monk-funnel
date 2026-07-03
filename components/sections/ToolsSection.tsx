const MUTED = "#9a8c7e";
const INK = "#1e180f";
const BORDER = "#e6dfd5";

const tools = [
  "Next.js",
  "Tailwind CSS",
  "Figma",
  "Framer Motion",
  "Vercel",
  "TypeScript",
  "Notion",
];

export default function ToolsSection() {
  const track = [...tools, ...tools];

  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <p
          className="text-[11px] tracking-[0.22em] uppercase mb-8"
          style={{ color: MUTED }}
        >
          Tools we&apos;ve mastered
        </p>

        <div
          className="relative overflow-hidden rounded-full bg-white mx-auto"
          style={{ border: `1px solid ${BORDER}`, boxShadow: "0 2px 16px rgba(90,70,40,0.05)" }}
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-marquee py-4">
            {track.map((tool, i) => (
              <span
                key={`${tool}-${i}`}
                className="shrink-0 px-8 text-[14px] font-medium whitespace-nowrap"
                style={{ color: INK }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
