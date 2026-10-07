"use client";

import { useState, useEffect, useRef } from "react";

const MESSAGES = [
  "You talk to the founders. Not an account manager.",
  "We treat every ad rupee like it's our own.",
  "Your competitors are already running ads. Just saying.",
  "No retainer until you've seen what we can do.",
  "Your website is your best salesperson. Is it closing?",
  "We don't pitch decks. We pitch outcomes.",
  "Built in 21 days. Built to convert.",
  "We don't do templates. Every page is a custom sales asset.",
  "One outcome. One message. One action. That's a homepage.",
  "No fluff. No jargon. Just a site that works.",
  "We've seen 3x conversions just from rewriting a hero headline.",
  "Every page we build has one job. One.",
  "Most startup sites explain the product. Yours should sell the decision.",
  "We fire clients who ghost feedback rounds.",
  "A beautiful site that doesn't convert is an expensive brochure.",
  "Your brand deserves better than generic templates.",
  "We built our first site at 19. It worked.",
  "No open-ended Figma files. We ship in 21 days.",
  "If your landing page is slow, you're already losing.",
  "Good copy outperforms good design. We do both.",
  "Most brands underestimate how much bad UX costs them.",
  "Consistency beats virality. Every single time.",
  "We've seen 3x leads just from fixing a contact form.",
  "Your next customer is already searching for you.",
  "The best time to rebuild your site was a year ago. Second best? Today.",
  "Every brand has a story. We make sure it converts.",
  "We're not a vendor. We're an extension of your team.",
  "Strategy without execution is just a slide deck.",
  "The difference between good and great is in the headline.",
  "We think like your customers, not like designers.",
  "We work best with founders who are obsessed with growth.",
  "Transparency is non-negotiable. You see everything we see.",
  "We don't do cookie-cutter. Every strategy is built from scratch.",
  "We don't stop at launch. That's actually where we start.",
  "Your conversion ceiling is usually a copy problem, not a traffic one.",
];

function pickRandom(arr: string[], exclude?: string): string {
  const pool = arr.filter((m) => m !== exclude);
  return pool[Math.floor(Math.random() * pool.length)];
}

const INTERVAL_MS = 9000;

// Original 16×16 pixel monk (not a third-party character). Each row is a string
// of palette keys; "." is transparent.
const SPRITE_PALETTE: Record<string, string> = {
  o: "#1a1a1a", // outline
  s: "#f1c9a0", // skin
  r: "#d9772b", // robe
  d: "#a85a1c", // robe shade
  b: "#6b3f1d", // sash / beads
};

const SPRITE_ROWS = [
  "................",
  ".....oooooo.....",
  "....ossssssso...",
  "...osssssssso...",
  "...osoosoossso..",
  "...ossssssssso..",
  "....osssooosso..",
  ".....oosssoo....",
  "....orrrrrrro...",
  "...orrrrrrrrro..",
  "...orrdrrrdrrro.",
  "...osrrbbbrrso..",
  "...osrrrrrrrso..",
  "....orrrddrrro..",
  "....orrrrrrrro..",
  "....oooooooooo..",
];

function MonkSprite() {
  return (
    <svg
      viewBox="0 0 16 16"
      width={64}
      height={64}
      shapeRendering="crispEdges"
      aria-hidden="true"
      className="npc-sprite"
    >
      {SPRITE_ROWS.flatMap((row, y) =>
        row.split("").map((key, x) =>
          key === "." ? null : (
            <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={SPRITE_PALETTE[key]} />
          ),
        ),
      )}
    </svg>
  );
}

export default function FloatingNPC() {
  // Empty until the first message is chosen after mount, so server and client
  // markup match (the message is random).
  const [message, setMessage] = useState("");
  const [tick, setTick] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setMessage((prev) => pickRandom(MESSAGES, prev));
      setTick((t) => t + 1);
    }, INTERVAL_MS);
  }

  useEffect(() => {
    const first = setTimeout(() => setMessage(pickRandom(MESSAGES)), 0);
    startTimer();
    return () => {
      clearTimeout(first);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function handleClick() {
    setMessage((prev) => pickRandom(MESSAGES, prev));
    setTick((t) => t + 1);
    startTimer(); // reset the 9s countdown on manual click
  }

  if (!message) return null;

  return (
    <>
      <style>{`
        @keyframes npc-bob {
          0%, 100% { transform: scaleX(-1) translateY(0px); }
          50%       { transform: scaleX(-1) translateY(-6px); }
        }
        @keyframes npc-pop {
          0%   { opacity: 0; transform: scale(0.88) translateY(5px); }
          65%  { transform: scale(1.03) translateY(-1px); }
          100% { opacity: 1; transform: scale(1)    translateY(0); }
        }
        .npc-mario-sprite {
          display: block;
          animation: npc-bob 1.2s ease-in-out infinite;
          cursor: pointer;
          image-rendering: pixelated;
        }
        .npc-dialog-pop {
          animation: npc-pop 0.24s ease-out both;
        }
      `}</style>

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-end gap-2 sm:gap-3">

        {/* Dialog box */}
        <div
          key={tick}
          className="npc-dialog-pop relative"
          style={{
            background: "#ffffff",
            border: "2px solid #1a1a1a",
            boxShadow: "4px 4px 0px #1a1a1a",
            borderRadius: "4px",
            padding: "10px 14px",
            maxWidth: "min(220px, calc(100vw - 88px))",
            flexShrink: 0,
            fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "1.6",
            color: "#1a1a1a",
            letterSpacing: "-0.01em",
          }}
        >
          <p style={{ margin: 0 }}>{message}</p>

          {/* Speech tail border */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-9px",
              bottom: "18px",
              width: 0,
              height: 0,
              borderTop: "7px solid transparent",
              borderBottom: "7px solid transparent",
              borderLeft: "9px solid #1a1a1a",
            }}
          />
          {/* Speech tail fill */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-6px",
              bottom: "19px",
              width: 0,
              height: 0,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderLeft: "8px solid #ffffff",
            }}
          />
        </div>

        {/* Monk mascot */}
        <button
          onClick={handleClick}
          aria-label="Show another message"
          title="Click for a new message"
          style={{ background: "none", border: "none", padding: 0 }}
        >
          <MonkSprite />
        </button>
      </div>
    </>
  );
}
