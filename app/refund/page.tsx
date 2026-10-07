import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SERIF  = "var(--font-serif)";
const BORDER = "#d6cfc6";

export const metadata = {
  title: "Refund Policy — Monk Funnel",
};

export default function RefundPage() {
  return (
    <>
      <Navbar />

      <main style={{ background: "#F5F5F1", minHeight: "100vh", paddingTop: "72px" }}>
        <div className="max-w-3xl mx-auto px-6 sm:px-12 py-20 sm:py-28">
          <p className="text-[11px] tracking-widest uppercase mb-4" style={{ color: "#9a8c7e" }}>Legal</p>
          <h1
            className="font-normal leading-tight mb-4"
            style={{ fontFamily: SERIF, fontSize: "clamp(36px, 5vw, 56px)", color: "#1e180f" }}
          >
            Refund Policy
          </h1>
          <p className="text-[13px] mb-14" style={{ color: "#9a8c7e" }}>
            Last updated: June 2025 &nbsp;·&nbsp; Monk Funnel, Delhi, India
          </p>

          <div style={{ borderTop: `1px solid ${BORDER}` }}>
            <LegalSection title="Monthly Retainers">
              <p>
                Retainer fees are <strong>non-refundable</strong> once a billing cycle has commenced.
                This reflects the immediate allocation of team time and resources to your account
                at the start of each month.
              </p>
              <p>
                You may cancel your retainer with 30 days&apos; written notice as per our Terms of
                Service. No refund is issued for the final billing cycle once notice is given,
                but no further billing occurs after the notice period expires.
              </p>
            </LegalSection>

            <LegalSection title="Project Deposits">
              <p>
                Project deposits (50% of the agreed project fee) are <strong>non-refundable</strong>
                {" "}once work has commenced. This covers the initial discovery, planning, and
                design work undertaken before delivery.
              </p>
              <p>
                If you cancel a project <strong>before</strong> work has started (i.e., before
                the project kick-off call), a full refund of the deposit will be issued within
                5 business days.
              </p>
            </LegalSection>

            <LegalSection title="Milestone Payments">
              <p>
                Milestone payments are refundable only if the corresponding milestone deliverable
                has <strong>not yet been delivered</strong>. Once a milestone deliverable has been
                submitted for review, the milestone payment is considered earned regardless of
                subsequent change of scope or cancellation.
              </p>
            </LegalSection>

            <LegalSection title="Growth Audits">
              <p>
                Growth audit fees (₹999 or as quoted) are <strong>non-refundable</strong> once
                the audit has been delivered. The audit represents a fixed amount of research and
                strategic analysis work that cannot be recovered after completion.
              </p>
              <p>
                <strong>Exception:</strong> If you request cancellation before the audit has been
                started, a full refund will be issued within 5 business days of your written request.
              </p>
            </LegalSection>

            <LegalSection title="Ad Spend">
              <p>
                Ad spend paid directly to Google, Meta, or other advertising platforms is entirely
                separate from Monk Funnel&apos;s management fees. We have no ability to issue refunds
                for ad spend, as these funds flow directly to the respective platforms.
              </p>
              <p>
                Disputes about ad spend must be taken up directly with the relevant platform. We
                will assist in providing documentation where possible.
              </p>
            </LegalSection>

            <LegalSection title="How to Request a Refund">
              <p className="mb-3">To request a refund:</p>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>Email us at <a href="mailto:monkfunnel0@gmail.com" className="underline underline-offset-2" style={{ color: "#7a6a58" }}>monkfunnel0@gmail.com</a> with the subject line &ldquo;Refund Request&rdquo;</li>
                <li>Include your name, invoice number, and the reason for your request</li>
                <li>We will review and respond within <strong>5 business days</strong></li>
                <li>Approved refunds are processed within <strong>10 business days</strong> via the original payment method</li>
              </ol>
            </LegalSection>

            <LegalSection title="Contact">
              <p>
                If you have any questions about this policy, please contact us at{" "}
                <a href="mailto:monkfunnel0@gmail.com" className="underline underline-offset-2" style={{ color: "#7a6a58" }}>
                  monkfunnel0@gmail.com
                </a>{" "}
                or call{" "}
                <a href="tel:+918679995506" className="underline underline-offset-2" style={{ color: "#7a6a58" }}>
                  +91 86799 95506
                </a>.
              </p>
            </LegalSection>
          </div>

          <div
            className="mt-12 flex flex-wrap gap-6 text-[13px]"
            style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24 }}
          >
            <a href="/privacy-policy" className="underline underline-offset-2" style={{ color: "#7a6a58" }}>Privacy Policy</a>
            <a href="/terms" className="underline underline-offset-2" style={{ color: "#7a6a58" }}>Terms of Service</a>
            <Link href="/" className="underline underline-offset-2" style={{ color: "#7a6a58" }}>Home</Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  const SERIF = "var(--font-serif)";
  const BORDER = "#d6cfc6";

  return (
    <div style={{ borderBottom: `1px solid ${BORDER}`, paddingTop: 32, paddingBottom: 32 }}>
      <h2
        className="font-normal mb-5"
        style={{ fontFamily: SERIF, fontSize: 24, color: "#1e180f" }}
      >
        {title}
      </h2>
      <div
        className="text-[14px] leading-relaxed space-y-3 [&_ol]:space-y-1.5 [&_strong]:font-semibold"
        style={{ color: "#7a6a58" }}
      >
        {children}
      </div>
    </div>
  );
}
