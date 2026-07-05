"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";

const NAV_ITEMS = [
  { name: "Services", link: "/#services" },
  { name: "Process",  link: "/#process"  },
  { name: "Work",     link: "/work"      },
  { name: "Why Us",   link: "/#about"    },
  { name: "Pricing",  link: "/#pricing"  },
  { name: "FAQ",      link: "/#faq"      },
  { name: "Careers",  link: "/careers"   },
];

export default function SiteNavbar({
  heroTheme = "light",
}: {
  /** Set to "dark" on pages whose hero sits on a dark background (e.g. a video),
   *  so nav text renders white until the user scrolls past it. */
  heroTheme?: "light" | "dark";
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (heroTheme !== "dark") return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroTheme]);

  const onDarkHero = heroTheme === "dark" && !scrolled;

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <Link
          href="/"
          className="relative z-20 mr-4 px-2 py-1 font-serif text-[22px] font-semibold transition-colors duration-300"
          style={{ letterSpacing: "0.01em", color: onDarkHero ? "#ffffff" : "#1e180f" }}
        >
          Monk Funnel
        </Link>

        <NavItems
          items={NAV_ITEMS}
          linkClassName={
            onDarkHero ? "text-white/85 hover:text-white" : undefined
          }
          highlightClassName={onDarkHero ? "bg-white/15" : undefined}
        />

        <a
          href="https://wa.me/918810326598"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative z-20 inline-flex items-center gap-2 rounded-full bg-[#1e180f] pl-2 pr-4 py-1.5 text-[13px] font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center">
            <WhatsAppIcon className="h-6 w-6" />
          </span>
          Message us
        </a>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <Link
            href="/"
            className="relative z-20 px-2 py-1 font-serif text-[19px] font-semibold transition-colors duration-300"
            style={{ color: onDarkHero ? "#ffffff" : "#1e180f" }}
          >
            Monk Funnel
          </Link>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={onDarkHero ? "text-white" : undefined}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[15px] text-neutral-700"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col gap-3 pt-2">
            <a
              href="https://wa.me/918810326598"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1e180f] px-4 py-2.5 text-[14px] font-medium text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Message us
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
