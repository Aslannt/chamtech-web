"use client";

import { useEffect, useRef, useState } from "react";

/** Animates the numeric part of `value` ("50", "66.28%", "3+") once it is on screen. */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!match || !element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [, prefix, numeric, suffix] = match;
    const target = Number(numeric);
    const decimals = numeric.includes(".") ? numeric.split(".")[1].length : 0;
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        setDisplay(`${prefix}${(0).toFixed(decimals)}${suffix}`);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span ref={ref} data-no-translate className="tabular-nums">
      {display}
    </span>
  );
}
