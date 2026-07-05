"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WorkCard from "@/components/widgets/WorkCard";
import MobileWorkCard from "@/components/widgets/MobileWorkCard";
import { workItems, mobileWorkItems, type WorkCategory } from "@/lib/work-items";

const INK = "#1e180f";
const BODY = "#5f5346";
const MUTED = "#9a8c7e";
const BORDER = "#e6dfd5";

const FILTERS: ("All" | WorkCategory)[] = [
  "All",
  "Ecommerce",
  "Education",
  "Travel",
  "Event",
  "Finance",
  "Local Business",
];

export default function WorkPage() {
  const [filter, setFilter] = useState<"All" | WorkCategory>("All");

  const filtered =
    filter === "All" ? workItems : workItems.filter((item) => item.category === filter);

  return (
    <>
      <Navbar />

      <main style={{ background: "#F5F5F1", minHeight: "100vh", paddingTop: "72px" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-20 sm:py-28">
          {/* Heading */}
          <div className="text-center mb-12">
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ color: MUTED }}
            >
              Recent work
            </p>
            <h1
              className="font-serif font-medium leading-[1.08] tracking-tight mb-4"
              style={{ fontSize: "clamp(38px, 4.5vw, 56px)", color: INK }}
            >
              A raw look at <em>recent work.</em>
            </h1>
            <p
              className="text-[15px] leading-relaxed max-w-md mx-auto"
              style={{ color: BODY }}
            >
              Ecommerce, education, travel, events, finance, and local
              business — every project we&apos;ve shipped.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="mb-12 -mx-6 overflow-x-auto px-6 sm:mx-0 sm:flex sm:justify-center sm:overflow-visible sm:px-0">
            <div
              className="inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-white p-1"
              style={{ border: `1px solid ${BORDER}` }}
            >
              {FILTERS.map((f) => {
                const active = filter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className="rounded-full px-4 py-2 text-[13px] font-medium transition-colors"
                    style={{
                      background: active ? INK : "transparent",
                      color: active ? "#ffffff" : BODY,
                    }}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          {/* List — every card renders at the same large size */}
          {filtered.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filtered.map((item) => (
                <WorkCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="text-center text-[14px]" style={{ color: MUTED }}>
              Nothing here yet — check back soon.
            </p>
          )}

          {/* Mobile designs */}
          <div className="mt-24 pt-16" style={{ borderTop: `1px solid ${BORDER}` }}>
            <div className="text-center mb-12">
              <p
                className="text-[11px] tracking-[0.22em] uppercase mb-4"
                style={{ color: MUTED }}
              >
                Mobile designs
              </p>
              <h2
                className="font-serif font-medium leading-[1.08] tracking-tight"
                style={{ fontSize: "clamp(30px, 3.5vw, 42px)", color: INK }}
              >
                Mobile UI, <em>designed to convert.</em>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {mobileWorkItems.map((item) => (
                <MobileWorkCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
