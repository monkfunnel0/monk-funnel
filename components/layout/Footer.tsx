import Image from "next/image";
import Link from "next/link";

const INK = "#1e180f";
const BODY = "#5f5346";
const MUTED = "#9a8c7e";
const BORDER = "#e6dfd5";

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
    <footer className="relative overflow-visible" style={{ background: "#F5F5F1" }}>
      {/* Content */}
      <div
        className="relative z-20 max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 pt-16 sm:pt-20 pb-10"
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
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
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
                        className="text-[14px] text-[#5f5346] hover:text-[#1e180f] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <p
                className="text-[11px] tracking-[0.22em] uppercase mb-4"
                style={{ color: MUTED }}
              >
                Contact
              </p>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:monkfunnel0@gmail.com"
                    className="text-[14px] text-[#5f5346] hover:text-[#1e180f] transition-colors"
                  >
                    monkfunnel0@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918679995506"
                    className="text-[14px] text-[#5f5346] hover:text-[#1e180f] transition-colors"
                  >
                    +91 86799 95506
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          <span className="text-[12px]" style={{ color: MUTED }}>
            © 2026 Monk Funnel. Delhi, India.
          </span>
          <Link
            href="/contact"
            className="text-[12px] text-[#5f5346] hover:text-[#1e180f] underline underline-offset-4 decoration-[#e6dfd5] transition-colors"
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
            h-[28vh]
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
