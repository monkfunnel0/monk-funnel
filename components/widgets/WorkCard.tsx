import Image from "next/image";
import type { WorkItem } from "@/lib/work-items";

const INK = "#1e180f";
const BODY = "#5f5346";
const MUTED = "#9a8c7e";
const BORDER = "#e6dfd5";

export default function WorkCard({ item }: { item: WorkItem }) {
  const Wrapper = item.href ? "a" : "div";

  return (
    <Wrapper
      {...(item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(90,70,40,0.12)]"
      style={{ border: `1px solid ${BORDER}`, boxShadow: "0 2px 16px rgba(90,70,40,0.06)" }}
    >
      {item.image && item.width && item.height ? (
        <Image
          src={item.image}
          alt={item.title}
          width={item.width}
          height={item.height}
          sizes="(min-width: 1024px) 1120px, 100vw"
          className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      ) : (
        <div
          className="flex aspect-16/10 w-full flex-col items-center justify-center gap-2 px-6 text-center"
          style={{ background: "#f3efe7" }}
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-semibold"
            style={{ background: "#ffffff", color: MUTED, border: `1px solid ${BORDER}` }}
          >
            MF
          </span>
          <p className="text-[13px]" style={{ color: MUTED }}>
            {item.title}
          </p>
        </div>
      )}

      {/* Label row */}
      <div className="flex items-center justify-between px-4 py-3.5" style={{ borderTop: `1px solid ${BORDER}` }}>
        <span className="text-[15px] font-medium" style={{ color: INK }}>
          {item.image ? item.title : "Monk Funnel"}
        </span>
        <span
          className="rounded-full px-2.5 py-1 text-[11px] font-medium"
          style={{ background: "#faf8f4", color: BODY, border: `1px solid ${BORDER}` }}
        >
          {item.category}
        </span>
      </div>
    </Wrapper>
  );
}
