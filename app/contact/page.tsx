"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SERIF  = "var(--font-serif)";
const BORDER = "#d6cfc6";

const services = [
  "Website Design & Development",
  "SEO & Content Strategy",
  "Google Ads",
  "Meta Ads",
  "Full Performance Package",
  "Growth Audit",
  "Other",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // TODO: wire to Google Sheets / API route
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  }

  const inputClass =
    "w-full px-4 py-3 text-[14px] rounded-xl border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7a6a58]/30";
  const inputStyle = {
    borderColor: BORDER,
    background: "#faf9f7",
    color: "#1e180f",
  };

  return (
    <>
      <Navbar />

      <main style={{ background: "#F5F5F1", minHeight: "100vh", paddingTop: "72px" }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — info */}
            <div>
              <p className="text-[11px] tracking-widest uppercase mb-5" style={{ color: "#9a8c7e" }}>
                Get in touch
              </p>
              <h1
                className="font-normal leading-tight mb-6"
                style={{ fontFamily: SERIF, fontSize: "clamp(40px, 5vw, 64px)", color: "#1e180f" }}
              >
                Let&apos;s talk<br />about growth.
              </h1>
              <p
                className="text-[15px] leading-relaxed mb-12"
                style={{ fontFamily: SERIF, fontStyle: "italic", color: "#7a6a58", maxWidth: 380 }}
              >
                Tell us about your brand and what you need. We typically respond within a few hours — often the same day.
              </p>

              <div className="space-y-5">
                <ContactInfo icon="mail" label="Email" value="monkfunnel0@gmail.com" href="mailto:monkfunnel0@gmail.com" />
                <ContactInfo icon="phone" label="Phone" value="+91 88103 26598" href="tel:+918810326598" />
                <ContactInfo icon="pin" label="Based in" value="Delhi, India" href={null} />
              </div>

              <div style={{ marginTop: 48, borderTop: `1px solid ${BORDER}`, paddingTop: 24 }}>
                <p className="text-[12px] tracking-widest uppercase mb-2" style={{ color: "#9a8c7e" }}>Office hours</p>
                <p className="text-[14px]" style={{ color: "#7a6a58" }}>Mon – Sat, 10 am – 7 pm IST</p>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {status === "success" ? (
                <div
                  className="flex flex-col items-center justify-center text-center py-20 rounded-2xl"
                  style={{ border: `1px solid ${BORDER}`, background: "#fff" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "#e8f4ec" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5L19 7" stroke="#5a9a6e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2
                    className="font-normal mb-3"
                    style={{ fontFamily: SERIF, fontSize: 28, color: "#1e180f" }}
                  >
                    Message received.
                  </h2>
                  <p className="text-[14px]" style={{ color: "#7a6a58" }}>
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl p-8 space-y-5"
                  style={{ border: `1px solid ${BORDER}`, background: "#fff" }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] tracking-widest uppercase mb-2" style={{ color: "#9a8c7e" }}>
                        Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Priya Sharma"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-widest uppercase mb-2" style={{ color: "#9a8c7e" }}>
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@brand.com"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] tracking-widest uppercase mb-2" style={{ color: "#9a8c7e" }}>
                        Phone
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-widest uppercase mb-2" style={{ color: "#9a8c7e" }}>
                        Brand / Company
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-widest uppercase mb-2" style={{ color: "#9a8c7e" }}>
                      What are you looking for?
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, appearance: "none" }}
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-widest uppercase mb-2" style={{ color: "#9a8c7e" }}>
                      Tell us more
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="What's your current challenge? Where do you want to be in 6 months?"
                      className={inputClass}
                      style={{ ...inputStyle, resize: "none" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 rounded-full text-[14px] font-medium transition-opacity"
                    style={{
                      background: "#1e180f",
                      color: "#fff",
                      opacity: status === "submitting" ? 0.6 : 1,
                    }}
                  >
                    {status === "submitting" ? "Sending…" : "Send message"}
                  </button>

                  <p
                    className="text-center text-[12px]"
                    style={{ fontFamily: SERIF, fontStyle: "italic", color: "#a09080" }}
                  >
                    We typically respond within a few hours, never more than 24.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function ContactInfo({
  icon,
  label,
  value,
  href,
}: {
  icon: "mail" | "phone" | "pin";
  label: string;
  value: string;
  href: string | null;
}) {
  const icons = {
    mail: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="3" width="14" height="10" rx="2" stroke="#7a6a58" strokeWidth="1.2"/>
        <path d="M1 5l7 5 7-5" stroke="#7a6a58" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    phone: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 2h3l1.5 3.5-2 1.2A9.5 9.5 0 007.3 10L8.5 8l3.5 1.5V13a1 1 0 01-1 1C5.1 14 2 10.9 2 7a5 5 0 011-3z" stroke="#7a6a58" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
    pin: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5A4.5 4.5 0 018 10.5S3.5 7 3.5 6a4.5 4.5 0 119 0c0 1-4.5 4.5-4.5 4.5z" stroke="#7a6a58" strokeWidth="1.2"/>
        <circle cx="8" cy="6" r="1.5" stroke="#7a6a58" strokeWidth="1.2"/>
        <path d="M5 13.5h6" stroke="#7a6a58" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  };

  const content = (
    <div className="flex items-center gap-3">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
        style={{ background: "#f0ece7" }}
      >
        {icons[icon]}
      </div>
      <div>
        <p className="text-[10px] tracking-widest uppercase" style={{ color: "#9a8c7e" }}>{label}</p>
        <p className="text-[14px] font-medium" style={{ color: "#1e180f" }}>{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:opacity-75 transition-opacity">{content}</a>
  ) : (
    <div>{content}</div>
  );
}
