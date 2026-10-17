import { INK, MUTED, BORDER } from "@/lib/theme";

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
    <section
      className="px-6 py-20 sm:py-24"
      style={{ borderTop: `1px solid ${BORDER}` }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p
          className="text-[11px] tracking-[0.22em] uppercase mb-8"
          style={{ color: MUTED }}
        >
          Tools we&apos;ve mastered
        </p>
        {/* From sm up the strip is decorative (it repeats items for the loop), so screen
            readers get this clean list instead. On phones the chips below serve both. */}
        <ul className="hidden sm:block sr-only">
          {tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>

        {/* Phones: every tool visible at once as chips */}
        <ul className="sm:hidden flex flex-wrap justify-center gap-2.5">
          {tools.map((tool) => (
            <li
              key={tool}
              className="rounded-full bg-white px-4 py-2 text-[13px] font-medium"
              style={{ color: INK, border: `1px solid ${BORDER}`, boxShadow: "0 2px 10px rgba(90,70,40,0.04)" }}
            >
              {tool}
            </li>
          ))}
        </ul>

        {/* Tablet & desktop: scrolling strip */}
        <div
          className="hidden sm:block relative overflow-hidden rounded-full bg-white mx-auto"
          aria-hidden="true"
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
