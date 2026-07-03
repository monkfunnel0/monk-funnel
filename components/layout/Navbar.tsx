"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { name: "Services", link: "/#services" },
  { name: "Process",  link: "/#process"  },
  { name: "Why Us",   link: "/#about"    },
  { name: "Pricing",  link: "/#pricing"  },
  { name: "FAQ",      link: "/#faq"      },
];

export default function SiteNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop */}
      <NavBody>
        <Link
          href="/"
          className="relative z-20 mr-4 px-2 py-1 font-serif text-[22px] font-semibold text-[#1e180f]"
          style={{ letterSpacing: "0.01em" }}
        >
          Monk Funnel
        </Link>

        <NavItems items={NAV_ITEMS} />

        <div className="flex items-center gap-2">
          <NavbarButton
            href="mailto:monkfunnel0@gmail.com"
            variant="secondary"
          >
            Contact
          </NavbarButton>
          <NavbarButton
            href="/contact"
            as={Link}
            variant="dark"
          >
            Get a teardown
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile */}
      <MobileNav>
        <MobileNavHeader>
          <Link
            href="/"
            className="relative z-20 px-2 py-1 font-serif text-[19px] font-semibold text-[#1e180f]"
          >
            Monk Funnel
          </Link>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            <NavbarButton
              href="/contact"
              as={Link}
              variant="dark"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a free teardown
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
