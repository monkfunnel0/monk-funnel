import Image from "next/image";
import Link from "next/link";
import { INK, BODY, MUTED, BORDER, PAPER } from "@/lib/theme";
import { SITE } from "@/lib/site";

const columns = [
  {
    title: "Company",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Process", href: "/#process" },
      { label: "Work", href: "/work" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-visible" style={{ background: PAPER }}>
      {/* Content */}
      <div
        className="relative z-20 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 pt-16 sm:pt-20 pb-24 sm:pb-10"
        style={{ borderTop: `1px solid ${BORDER}` }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10 sm:gap-6">
          {/* Brand + tagline */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-serif text-[24px] font-semibold"
              style={{ color: INK }}
            >
              Monk Funnel
            </Link>
            <p className="mt-3 text-[14px] leading-relaxed" style={{ color: BODY }}>
              Conversion-first websites for startups, shipped in 21 days.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:flex sm:flex-row sm:gap-20">
            {columns.map((col) => (
              <div key={col.title}>
                <p
                  className="text-[11px] tracking-[0.22em] uppercase mb-4"
                  style={{ color: MUTED }}
                >
                  {col.title}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-ink-body hover:text-ink transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div className="col-span-2 sm:col-span-1">
              <p
                className="text-[11px] tracking-[0.22em] uppercase mb-4"
                style={{ color: MUTED }}
              >
                Contact
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-[14px] text-ink-body hover:text-ink transition-colors"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="text-[14px] text-ink-body hover:text-ink transition-colors"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider + copyright — no divider on phones, where it cuts across the pixel tree */}
        <div className="mt-10 sm:mt-14 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:border-t sm:border-line">
          <span className="text-[12px]" style={{ color: MUTED }}>
            © {new Date().getFullYear()} {SITE.name}. Delhi, India.
          </span>
          <Link
            href="/contact"
            className="text-[12px] text-ink-body hover:text-ink underline underline-offset-4 decoration-line transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </div>

      {/* Decorative pixel-art ground strip */}
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/left-decor.png"
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            select-none
            absolute
            bottom-0
            left-0
            z-10
            h-[16vh]
            sm:h-[38vh]
            lg:h-[55vh]
            xl:h-[65vh]
            max-h-[720px]
            w-auto
          "
        />
        <Image
          src="/footer-bg-cofounder-co.png"
          alt=""
          width={2048}
          height={122}
          className="w-full h-auto block"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
    </footer>
  );
}
