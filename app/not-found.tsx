import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";
import { INK, BODY, MUTED, PAPER } from "@/lib/theme";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main style={{ background: PAPER, paddingTop: "72px" }}>
        <div className="max-w-3xl mx-auto px-6 py-28 sm:py-36 flex flex-col items-center text-center">
          <p
            className="text-[11px] tracking-[0.22em] uppercase mb-4"
            style={{ color: MUTED }}
          >
            404
          </p>
          <h1
            className="font-serif font-medium leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(42px, 6vw, 72px)", color: INK }}
          >
            This page
            <br />
            <em>wandered off.</em>
          </h1>
          <p
            className="text-[15px] leading-relaxed max-w-md mb-10"
            style={{ color: BODY }}
          >
            The link may be old or mistyped. Head back home, or message us and
            we&apos;ll point you to what you were looking for.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-[14px] font-medium text-white shadow-[0_2px_12px_rgba(30,24,15,0.28)]"
            >
              Back to home
            </Link>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white pl-2 pr-6 py-2 text-[14px] font-medium text-ink border border-line"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                <WhatsAppIcon className="h-8 w-8 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[8deg]" />
              </span>
              Message us
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
