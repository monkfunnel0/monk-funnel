import Image from "next/image";
import type { MobileWorkItem } from "@/lib/work-items";

const INK = "#1e180f";
const BORDER = "#e6dfd5";

export default function MobileWorkCard({ item }: { item: MobileWorkItem }) {
  return (
    <div
      className="group overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(90,70,40,0.12)]"
      style={{ border: `1px solid ${BORDER}`, boxShadow: "0 2px 16px rgba(90,70,40,0.06)" }}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={item.width}
        height={item.height}
        sizes="(min-width: 1024px) 220px, 40vw"
        className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      />
      <p className="px-3 py-2.5 text-[13px] font-medium" style={{ color: INK, borderTop: `1px solid ${BORDER}` }}>
        {item.title}
      </p>
    </div>
  );
}
