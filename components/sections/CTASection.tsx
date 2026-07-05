import Image from "next/image";
import { WhatsAppIcon } from "../icons/BrandIcons";

const INK = "#1e180f";
const BODY = "#5f5346";
const MUTED = "#9a8c7e";
const BORDER = "#e6dfd5";

export default function CTASection() {
  return (
    <section
      className="px-6 py-28 sm:py-36"
      style={{ borderTop: `1px solid ${BORDER}` }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <p
          className="text-[11px] tracking-[0.22em] uppercase mb-4"
          style={{ color: MUTED }}
        >
          Get started
        </p>
        <h2
          className="font-serif font-medium leading-[1.05] tracking-tight mb-6"
          style={{ fontSize: "clamp(42px, 6vw, 72px)", color: INK }}
        >
          Let&apos;s start with
          <br />
          <em>your homepage.</em>
        </h2>
        <p
          className="text-[15px] leading-relaxed max-w-md mb-10"
          style={{ color: BODY }}
        >
          Book a free 30-minute teardown. We&apos;ll show you exactly what&apos;s
          costing you signups right now — and what we&apos;d change first.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://cal.com/ankitmehta/30-minute-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#1e180f] pl-2 pr-6 py-2 text-[14px] font-medium text-white shadow-[0_2px_12px_rgba(30,24,15,0.28)]"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
              <Image
                src="/3840px-Google_Meet_icon_(2020).svg.webp"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]"
              />
            </span>
            Book Intro Call
          </a>
          <a
            href="https://wa.me/918679995506"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white pl-2 pr-6 py-2 text-[14px] font-medium text-[#1e180f] border border-[#e6dfd5]"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center">
              <WhatsAppIcon className="h-8 w-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />
            </span>
            Send Message
          </a>
        </div>

        <p
          className="mt-8 text-[13px] italic font-serif"
          style={{ color: MUTED }}
        >
          No pitch, no obligation — just 30 useful minutes.
        </p>
      </div>
    </section>
  );
}
