import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const SERIF  = "var(--font-serif)";
const BORDER = "#d6cfc6";

export const metadata = {
  title: "Privacy Policy — Monk Funnel",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-[13px] mb-14" style={{ color: "#9a8c7e" }}>
            Last updated: June 2025 &nbsp;·&nbsp; Monk Funnel, Delhi, India
          </p>

          <div style={{ borderTop: `1px solid ${BORDER}` }}>
            <LegalSection title="Overview">
              <p>
                Monk Funnel (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is a Delhi-based performance
                marketing agency. We only collect what we need. We never sell your data.
                This policy explains what personal information we collect, how we use it,
                and your rights with respect to it.
              </p>
            </LegalSection>

            <LegalSection title="Information We Collect">
              <p className="mb-3">We collect information in two ways:</p>
              <p className="mb-2 font-medium" style={{ color: "#1e180f" }}>Directly from you</p>
              <ul>
                <li>Name, email address, phone number</li>
                <li>Business name, website URL, and marketing goals</li>
                <li>Ad account credentials (only when required to deliver services)</li>
                <li>Communications via email, WhatsApp, or our contact form</li>
              </ul>
              <p className="mt-4 mb-2 font-medium" style={{ color: "#1e180f" }}>Automatically</p>
              <ul>
                <li>Usage data and pages visited on our website</li>
                <li>Device type, browser, and IP address</li>
                <li>Cookies and tracking pixels (see the Cookies section below)</li>
              </ul>
            </LegalSection>

            <LegalSection title="How We Use Your Information">
              <ul>
                <li>Delivering the services you have engaged us for</li>
                <li>Communicating with you about your project and campaigns</li>
                <li>Sending relevant updates, reports, and proposals</li>
                <li>Improving our website and service quality</li>
                <li>Complying with Indian tax law and regulatory requirements</li>
              </ul>
              <p className="mt-4">
                We do not use your personal data for automated decision-making or profiling
                unrelated to our services.
              </p>
            </LegalSection>

            <LegalSection title="Sharing Your Information">
              <p className="mb-3">
                We do not sell, rent, or trade your personal information. We share data only
                with:
              </p>
              <ul>
                <li>
                  <strong>Platform tools</strong> — Google, Meta, Canva, and similar services
                  used to deliver your campaigns and projects
                </li>
                <li>
                  <strong>Trusted service partners</strong> — subcontractors or freelancers who
                  assist in delivering your project, bound by confidentiality obligations
                </li>
                <li>
                  <strong>Legal authorities</strong> — when required by law, court order, or
                  regulatory demand
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="Your Rights">
              <p className="mb-3">You have the right to:</p>
              <ul>
                <li><strong>Access</strong> — request a copy of the personal data we hold about you</li>
                <li><strong>Correct</strong> — ask us to correct inaccurate or incomplete data</li>
                <li><strong>Delete</strong> — ask us to erase your data where it is no longer necessary</li>
                <li><strong>Object</strong> — object to processing of your data for specific purposes</li>
                <li><strong>Portability</strong> — request a portable copy of your data</li>
                <li><strong>Restrict</strong> — ask us to limit how we use your data</li>
              </ul>
              <p className="mt-4">
                We respond to all rights requests within 30 days. Contact us at{" "}
                <a href="mailto:monkfunnel0@gmail.com" className="underline underline-offset-2" style={{ color: "#7a6a58" }}>
                  monkfunnel0@gmail.com
                </a>.
              </p>
            </LegalSection>

            <LegalSection title="Cookies & Tracking">
              <p className="mb-3">
                Cookies are small text files stored on your device. They cannot execute programmes
                or deliver viruses. We use:
              </p>
              <ul>
                <li><strong>Strictly necessary cookies</strong> — required for the site to function; cannot be opted out</li>
                <li><strong>Analytics cookies</strong> — to understand how visitors interact with our site (e.g. Google Analytics)</li>
                <li><strong>Functional cookies</strong> — to remember your preferences</li>
                <li><strong>Marketing pixels</strong> — Meta Pixel and Google Ads conversion tracking</li>
              </ul>
              <p className="mt-4">
                You can opt out of analytics tracking via the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" className="underline underline-offset-2" style={{ color: "#7a6a58" }} target="_blank" rel="noopener noreferrer">
                  Google Analytics opt-out add-on
                </a>{" "}
                and ad tracking via your browser settings or the Facebook Ad Preferences centre.
              </p>
            </LegalSection>

            <LegalSection title="Data Retention">
              <p>
                We retain client data for as long as our engagement is active and for a period
                of 3 years thereafter, in line with Indian tax and record-keeping obligations.
                You may request earlier deletion subject to these legal requirements.
              </p>
            </LegalSection>

            <LegalSection title="Security">
              <p>
                We take reasonable technical and organisational measures to protect your
                personal data from unauthorised access, disclosure, or loss. However, no
                internet transmission is completely secure and we cannot guarantee absolute security.
              </p>
            </LegalSection>

            <LegalSection title="Contact">
              <p>
                For any privacy-related questions or to exercise your rights, email us at{" "}
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
            <a href="/terms" className="underline underline-offset-2" style={{ color: "#7a6a58" }}>Terms of Service</a>
            <a href="/refund" className="underline underline-offset-2" style={{ color: "#7a6a58" }}>Refund Policy</a>
            <a href="/" className="underline underline-offset-2" style={{ color: "#7a6a58" }}>Home</a>
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
