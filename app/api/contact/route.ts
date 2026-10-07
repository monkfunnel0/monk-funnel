// Receives the contact form and forwards the lead to whichever destinations
// are configured in the environment (see .env.example):
//   - Email via Resend      -> RESEND_API_KEY + CONTACT_TO_EMAIL
//   - Google Sheets webhook -> GOOGLE_SHEETS_WEBHOOK_URL (Apps Script web app)
// At least one must be set, otherwise the request fails instead of silently
// dropping the lead.

const MAX = { name: 100, email: 200, phone: 40, company: 150, service: 100, message: 4000 };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort limiter (per server instance). Good enough to blunt casual spam.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type Lead = Record<keyof typeof MAX, string>;

async function sendEmail(lead: Lead): Promise<void> {
  const rows = (Object.keys(lead) as (keyof Lead)[])
    .filter((k) => lead[k])
    .map(
      (k) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#777"><b>${k}</b></td><td>${escapeHtml(lead[k]).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "Monk Funnel <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      reply_to: lead.email,
      subject: `New lead: ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
      html: `<table>${rows}</table>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
}

async function sendToSheet(lead: Lead): Promise<void> {
  const res = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...lead, submittedAt: new Date().toISOString() }),
  });
  if (!res.ok) throw new Error(`Sheets webhook responded ${res.status}`);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Pretend success to bots.
  if (clean(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  const lead: Lead = {
    name: clean(body.name, MAX.name),
    email: clean(body.email, MAX.email),
    phone: clean(body.phone, MAX.phone),
    company: clean(body.company, MAX.company),
    service: clean(body.service, MAX.service),
    message: clean(body.message, MAX.message),
  };

  if (!lead.name || !EMAIL_RE.test(lead.email)) {
    return Response.json({ error: "Please enter your name and a valid email." }, { status: 400 });
  }

  const jobs: Promise<void>[] = [];
  if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) jobs.push(sendEmail(lead));
  if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) jobs.push(sendToSheet(lead));

  if (jobs.length === 0) {
    if (process.env.NODE_ENV === "development") {
      console.log("[contact] No destination configured; lead logged only:", lead);
      return Response.json({ ok: true });
    }
    console.error("[contact] No destination configured (set RESEND_API_KEY + CONTACT_TO_EMAIL and/or GOOGLE_SHEETS_WEBHOOK_URL).");
    return Response.json({ error: "Contact form is not available right now." }, { status: 503 });
  }

  // The lead is safe as long as at least one destination accepted it.
  const results = await Promise.allSettled(jobs);
  results.forEach((r) => {
    if (r.status === "rejected") console.error("[contact] destination failed:", r.reason);
  });
  if (results.every((r) => r.status === "rejected")) {
    return Response.json({ error: "Something went wrong. Please try again or message us on WhatsApp." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
