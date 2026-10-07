"use client";

import { useEffect, useRef, useState } from "react";

const CYCLE = 4.2;

const nodes = [
  { y: 16, title: "API Consumer", detail: "POST /api/v1/order-sync" },
  { y: 104, title: "MuleSoft · order-sync", detail: "JWT · paging · DataWeave" },
  { y: 192, title: "Spring Boot · Cham Orders API", detail: "rules · snapshots · errors" },
  { y: 280, title: "PostgreSQL 17", detail: "Flyway V1/V2" },
];

/* Request packets travel down the left rail, responses climb the right rail. */
const hops = [
  { x: 128, from: 68, to: 104, start: 0.0 },
  { x: 128, from: 156, to: 192, start: 0.55 },
  { x: 128, from: 244, to: 280, start: 1.1 },
  { x: 312, from: 280, to: 244, start: 1.8, response: true },
  { x: 312, from: 192, to: 156, start: 2.35, response: true },
  { x: 312, from: 104, to: 68, start: 2.9, response: true },
];

const HOP = 0.5;

function logLines(cid: string) {
  return [
    `→ POST /order-sync      cid=${cid}`,
    "  auth  bearer token ok           38ms",
    "  page  1/3  50 orders           112ms",
    "  page  2/3  50 orders            97ms",
    "  page  3/3  14 orders            64ms",
    "  dw    canonical mapping         21ms",
    "← 200   114 orders synced        342ms",
  ];
}

function randomCid() {
  return Math.random().toString(16).slice(2, 6) + "…" + Math.random().toString(16).slice(2, 5);
}

export function IntegrationPulse() {
  const svg = useRef<SVGSVGElement>(null);
  const [cid, setCid] = useState("7f3c…a91");
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      svg.current?.pauseAnimations();
      const frame = requestAnimationFrame(() => setStep(logLines(cid).length));
      return () => cancelAnimationFrame(frame);
    }
    const total = logLines(cid).length;
    const timer = window.setInterval(() => {
      setStep((current) => {
        if (current >= total + 2) {
          setCid(randomCid());
          return 0;
        }
        return current + 1;
      });
    }, 620);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lines = logLines(cid).slice(0, Math.min(step, logLines(cid).length));

  return (
    <div data-no-translate className="blueprint-box overflow-hidden rounded-[10px] !bg-surface/70 backdrop-blur">
      <div className="flex items-center justify-between border-b border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        <span className="flex items-center gap-2.5">
          <span className="pulse-dot size-1.5 rounded-full bg-verified text-verified" />
          order-sync · live trace
        </span>
        <span>cham-orders</span>
      </div>

      <svg
        ref={svg}
        viewBox="0 0 440 340"
        className="block w-full"
        role="img"
        aria-label="Request flow from API consumer through MuleSoft and Spring Boot to PostgreSQL"
      >
        <defs>
          <linearGradient id="packet" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#ff7a45" />
            <stop offset="55%" stopColor="#e8467c" />
            <stop offset="100%" stopColor="#7c8cff" />
          </linearGradient>
        </defs>

        {[0, 1, 2].map((gap) => (
          <g key={gap} stroke="var(--border)" strokeWidth="1">
            <line className="flow-dash" x1="128" x2="128" y1={68 + gap * 88} y2={104 + gap * 88} />
            <line className="flow-dash" x1="312" x2="312" y1={104 + gap * 88} y2={68 + gap * 88} />
          </g>
        ))}

        {nodes.map((node, index) => (
          <g key={node.title}>
            <rect
              x="20"
              y={node.y}
              width="400"
              height="52"
              rx="6"
              fill="var(--surface-raised)"
              stroke={index === 1 ? "var(--primary-bright)" : "var(--border)"}
              strokeOpacity={index === 1 ? 0.6 : 1}
            />
            <text x="40" y={node.y + 22} fill="var(--text-primary)" fontSize="13" fontWeight="500">
              {node.title}
            </text>
            <text
              x="40"
              y={node.y + 39}
              fill="var(--text-muted)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              {node.detail}
            </text>
            <text
              x="400"
              y={node.y + 30}
              textAnchor="end"
              fill="var(--primary-bright)"
              fontSize="10"
              fontFamily="var(--font-geist-mono)"
            >
              {String(index + 1).padStart(2, "0")}
            </text>
          </g>
        ))}

        {hops.map((hop) => {
          const begin = hop.start / CYCLE;
          const end = (hop.start + HOP) / CYCLE;
          return (
            <circle
              key={`${hop.x}-${hop.from}`}
              r={hop.response ? 3.5 : 4.5}
              cx={hop.x}
              cy={hop.from}
              fill={hop.response ? "var(--verified)" : "url(#packet)"}
              opacity="0"
            >
              <animate
                attributeName="cy"
                dur={`${CYCLE}s`}
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes={`0;${begin};${end};1`}
                keySplines="0 0 1 1;0.4 0 0.2 1;0 0 1 1"
                values={`${hop.from};${hop.from};${hop.to};${hop.to}`}
              />
              <animate
                attributeName="opacity"
                dur={`${CYCLE}s`}
                repeatCount="indefinite"
                keyTimes={`0;${begin};${begin + 0.01};${end - 0.01};${end};1`}
                values="0;0;1;1;0;0"
              />
            </circle>
          );
        })}
      </svg>

      <div className="h-[168px] border-t border-border bg-background/60 px-5 py-4 font-mono text-[11px] leading-[1.75] text-muted">
        {lines.map((line, index) => (
          <p
            key={`${cid}-${index}`}
            className={`log-line whitespace-pre ${
              line.startsWith("←") ? "text-verified" : line.startsWith("→") ? "text-foreground" : ""
            }`}
          >
            {line}
          </p>
        ))}
        {step <= logLines(cid).length ? (
          <span aria-hidden="true" className="inline-block h-3 w-1.5 animate-pulse bg-primary-bright align-middle" />
        ) : null}
      </div>
    </div>
  );
}
