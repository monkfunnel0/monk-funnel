import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SERIF  = "var(--font-serif)";
const BORDER = "#d6cfc6";

export const metadata = {
  title: "Terms of Service — Monk Funnel",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-[13px] mb-14" style={{ color: "#9a8c7e" }}>
            Last updated: June 2025 &nbsp;·&nbsp; Monk Funnel, Delhi, India
          </p>

          <div style={{ borderTop: `1px solid ${BORDER}` }}>
            <LegalSection title="Scope of Services">
              <p>
                Monk Funnel provides performance marketing and web development services including
                SEO, Meta Ads management, Google Ads management, social media marketing, funnel
                design, and website design and development. The exact scope of work for each
                engagement is agreed upon in writing before project commencement.
              </p>
              <p>
                Any changes to the agreed scope must be confirmed in writing by both parties.
                Additional scope may be subject to additional fees.
              </p>
            </LegalSection>

            <LegalSection title="Client Obligations">
              <p className="mb-3">To deliver results, we require you to:</p>
              <ul>
                <li>Grant access to relevant platforms (ad accounts, Google Search Console, CMS) in a timely manner</li>
                <li>Provide all required materials — brand assets, copy, imagery, credentials — within agreed timelines</li>
                <li>Provide feedback on deliverables within <strong>3 business days</strong> of submission</li>
                <li>Maintain responsibility for your ad spend budgets, which are separate from our management fees</li>
              </ul>
              <p className="mt-4">
                Delays caused by late material submission or approval may extend project timelines
                without constituting a breach on our part.
              </p>
            </LegalSection>

            <LegalSection title="Payment Terms">
              <ul>
                <li>Project work requires a 50% deposit before work commences; the remaining 50% is due upon completion</li>
                <li>Monthly retainers are billed in advance at the start of each billing cycle</li>
                <li>Invoices are due within <strong>7 days</strong> of issue</li>
                <li>Payments outstanding beyond <strong>14 days</strong> accrue interest at 2% per month</li>
                <li>We reserve the right to pause active work on accounts with outstanding invoices beyond 14 days</li>
              </ul>
              <p className="mt-4">
                All fees are in Indian Rupees (INR) unless otherwise stated. GST is applied where applicable.
              </p>
            </LegalSection>

            <LegalSection title="Intellectual Property">
              <p className="mb-3">
                <strong>Your work:</strong> All custom creative work, copy, and code developed specifically
                for your brand transfers to you upon receipt of full payment. You own it outright.
              </p>
              <p>
                <strong>Our methods:</strong> Our agency frameworks, processes, templates, and proprietary
                methodologies remain the intellectual property of Monk Funnel and are not transferred
                as part of any engagement.
              </p>
            </LegalSection>

            <LegalSection title="No Guaranteed Results">
              <p>
                Digital marketing outcomes depend on many variables outside our control — platform
                algorithm changes, market conditions, competitor actions, and the quality of the
                client&apos;s own product. We do not guarantee specific results (clicks, conversions,
                revenue) unless explicitly stated in a separate written performance agreement.
              </p>
              <p className="mt-3">
                We commit to applying proven strategies, transparent reporting, and continuous
                optimisation throughout your engagement.
              </p>
            </LegalSection>

            <LegalSection title="Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Monk Funnel&apos;s total liability for any
                claim arising from our services shall not exceed the fees paid by you in the
                <strong> three months preceding the claim</strong>. We are not liable for indirect,
                consequential, or speculative losses including lost revenue or lost profits.
              </p>
            </LegalSection>

            <LegalSection title="Termination">
              <ul>
                <li>Either party may terminate a retainer engagement with <strong>30 days&apos; written notice</strong></li>
                <li>Project-based engagements may not be terminated mid-milestone without forfeiture of the milestone payment</li>
                <li>Upon termination, we will transfer all completed work and access credentials within <strong>7 business days</strong> of final payment settlement</li>
                <li>We reserve the right to terminate with immediate effect if a client engages in unlawful activity or materially breaches these terms</li>
              </ul>
            </LegalSection>

            <LegalSection title="Confidentiality">
              <p>
                Both parties agree to keep confidential any non-public business information shared
                during the engagement. This obligation survives termination of our working relationship.
              </p>
            </LegalSection>

            <LegalSection title="Governing Law">
              <p>
                These terms are governed by the laws of India. Any disputes shall be subject to
                the exclusive jurisdiction of courts in Delhi, India.
              </p>
            </LegalSection>

            <LegalSection title="Contact">
              <p>
                For questions about these terms, contact us at{" "}
                <a href="mailto:monkfunnel0@gmail.com" className="underline underline-offset-2" style={{ color: "#7a6a58" }}>
                  monkfunnel0@gmail.com
                </a>.
              </p>
            </LegalSection>
          </div>

          <div
            className="mt-12 flex flex-wrap gap-6 text-[13px]"
            style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24 }}
          >
            <a href="/privacy-policy" className="underline underline-offset-2" style={{ color: "#7a6a58" }}>Privacy Policy</a>
            <a href="/refund" className="underline underline-offset-2" style={{ color: "#7a6a58" }}>Refund Policy</a>
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
        className="text-[14px] leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:font-semibold"
        style={{ color: "#7a6a58" }}
      >
        {children}
      </div>
    </div>
  );
}
