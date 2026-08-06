"use client";

import Image from "next/image";
import { WhatsAppIcon } from "../icons/BrandIcons";
import ScaledDashboard from "../widgets/ScaledDashboard";
import DashboardMockup from "../widgets/DashboardMockup";

const BG_URL =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260611_133301_d5f2a94a-b22e-4e4a-a6b6-eacdddf1f5b0.png&w=1280&q=85";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url("${BG_URL}")` }}
    >
      {/* Spacer below fixed navbar */}
      <div className="flex-1 min-h-20 shrink-0" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Badge */}
        {/* <div
          className="animate-fade-down mb-4 inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md ring-1 ring-gray-200 px-4 py-1.5"
        >
          <span className="text-[11px] tracking-widest text-gray-500 uppercase">Conversion-First Websites · Shipped in 21 days</span>
        </div> */}

        {/* Headline */}
        <h1 className="font-serif font-medium text-[#1e180f] leading-[1.02] tracking-tight text-[44px] min-[400px]:text-[50px] sm:text-[68px] lg:text-[80px] xl:text-[92px]">
          <span className="block animate-fade-up">Your website should be</span>
          <span
            className="block animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            your <em>best salesperson.</em>
          </span>
        </h1>

        {/* Description */}
        <p
          className="animate-fade-up mt-5 sm:mt-6 text-[#3f382e] text-[15px] sm:text-base lg:text-[17px] leading-relaxed max-w-lg"
          style={{ animationDelay: "220ms" }}
        >
          Most startup sites explain the product. We build the one that sells the decision —
          one outcome, one message, one action. Shipped in 21 days.
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fade-up mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "340ms" }}
        >
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
      </div>

      {/* Spacer: content → dashboard */}
      <div className="flex-1 min-h-10 sm:min-h-12 lg:min-h-16 shrink-0" />

      {/* Dashboard mockup — z-[5]: above back grass (bg image), below front grass strip */}
      <div
        className="animate-hero-rise relative z-[5] w-[92%] sm:w-[84%] lg:w-[72%] max-w-4xl mx-auto shrink-0 -mb-10 sm:-mb-20 lg:-mb-32"
        style={{ animationDelay: "500ms" }}
      >
        <div className="rounded-t-2xl overflow-hidden bg-[#1a1a1c] shadow-[0_-20px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10 text-left">
          <ScaledDashboard>
            <DashboardMockup />
          </ScaledDashboard>
        </div>
      </div>

    </section>
  );
}
