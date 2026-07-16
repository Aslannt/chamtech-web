"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  GRID_SIZE, INITIAL_SNAKE, canTurn, createPacket, hasCollision,
  nextHead, pointsEqual, type Direction, type Point,
} from "@/lib/lab/snake-engine";

type GameState = "idle" | "running" | "paused" | "failed";
const BEST_SCORE_KEY = "chamtech-data-snake-best";

export function DataSnake() {
  const [snake, setSnake] = useState<readonly Point[]>(INITIAL_SNAKE);
  const [packet, setPacket] = useState(() => createPacket(INITIAL_SNAKE));
  const directionRef = useRef<Direction>("right");
  const turnLocked = useRef(false);
  const [state, setState] = useState<GameState>("idle");
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setBest(Number(window.localStorage.getItem(BEST_SCORE_KEY) ?? 0));
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const reset = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setPacket(createPacket(INITIAL_SNAKE));
    directionRef.current = "right";
    turnLocked.current = false;
    setScore(0);
    setState("running");
  }, []);

  const turn = useCallback((next: Direction) => {
    if (!turnLocked.current && canTurn(directionRef.current, next)) {
      directionRef.current = next;
      turnLocked.current = true;
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const keys: Record<string, Direction | undefined> = {
        ArrowUp: "up", w: "up", ArrowDown: "down", s: "down",
        ArrowLeft: "left", a: "left", ArrowRight: "right", d: "right",
      };
      const next = keys[event.key];
      if (next) { event.preventDefault(); turn(next); }
      if (event.key === " " && state !== "failed" && state !== "idle") {
        event.preventDefault();
        setState((current) => current === "running" ? "paused" : "running");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [state, turn]);

  useEffect(() => {
    if (state !== "running") return;
    const timer = window.setInterval(() => {
      setSnake((current) => {
        turnLocked.current = false;
        const head = nextHead(current[0], directionRef.current);
        const atePacket = pointsEqual(head, packet);
        const collisionBody = atePacket ? current : current.slice(0, -1);
        if (hasCollision(head, collisionBody)) { setState("failed"); return current; }
        const nextSnake = [head, ...current];
        if (atePacket) {
          setScore((currentScore) => {
            const nextScore = currentScore + 1;
            setBest((currentBest) => {
              const nextBest = Math.max(currentBest, nextScore);
              window.localStorage.setItem(BEST_SCORE_KEY, String(nextBest));
              return nextBest;
            });
            return nextScore;
          });
          setPacket(createPacket(nextSnake));
          return nextSnake;
        }
        return nextSnake.slice(0, -1);
      });
    }, 145);
    return () => window.clearInterval(timer);
  }, [packet, state]);

  const cells = Array.from({ length: GRID_SIZE * GRID_SIZE });
  return <div className="p-4 sm:p-6">
    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className="font-mono text-xs text-verified">$ run sync-pipeline --interactive</p>
        <p className="mt-2 max-w-md text-sm leading-6 text-muted">Route the data stream toward each JSON packet without interrupting the pipeline.</p>
      </div>
      <div className="flex gap-5 font-mono text-xs">
        <span><b className="block text-lg text-primary-bright">{score}</b> synchronized</span>
        <span><b className="block text-lg text-main">{best}</b> best</span>
      </div>
    </div>

    <div className="relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden rounded-xl border border-border bg-black p-1 shadow-inner">
      <div className="grid h-full w-full gap-px" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))` }} aria-label={`Data Snake board. ${score} records synchronized.`}>
        {cells.map((_, index) => {
          const point = { x: index % GRID_SIZE, y: Math.floor(index / GRID_SIZE) };
          const segmentIndex = snake.findIndex((segment) => pointsEqual(segment, point));
          const isPacket = pointsEqual(packet, point);
          return <span key={index} className={isPacket ? "grid place-items-center rounded-sm bg-verified text-[8px] font-bold text-black" : segmentIndex === 0 ? "rounded-sm bg-primary-bright shadow-[0_0_10px_rgba(167,139,250,.7)]" : segmentIndex > 0 ? "rounded-sm bg-primary/80" : "bg-white/[0.025]"}>{isPacket ? "{}" : null}</span>;
        })}
      </div>
      {state !== "running" ? <div className="absolute inset-0 grid place-items-center bg-black/75 p-6 text-center backdrop-blur-[2px]"><div>
        <p className={`font-mono text-xs uppercase tracking-widest ${state === "failed" ? "text-primary-bright" : "text-verified"}`}>{state === "failed" ? "PIPELINE_INTERRUPTED" : state === "paused" ? "PROCESS_PAUSED" : "READY_TO_SYNC"}</p>
        <button type="button" onClick={reset} className="mt-4 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{state === "failed" ? "Restart pipeline" : state === "paused" ? "Restart run" : "Start pipeline"}</button>
        {state === "paused" ? <button type="button" onClick={() => setState("running")} className="mt-3 block w-full text-xs text-muted underline hover:text-main">Resume instead</button> : null}
      </div></div> : null}
    </div>

    <div className="mx-auto mt-5 grid w-44 grid-cols-3 gap-2" aria-label="Touch controls">
      <span /><Control label="Up" symbol="↑" onClick={() => turn("up")} /><span />
      <Control label="Left" symbol="←" onClick={() => turn("left")} />
      <button type="button" onClick={() => setState((current) => current === "running" ? "paused" : current === "paused" ? "running" : current)} aria-label="Pause or resume" className="rounded-lg border border-border bg-surface py-3 font-mono text-xs text-muted hover:border-primary hover:text-main">{state === "paused" ? "RUN" : "II"}</button>
      <Control label="Right" symbol="→" onClick={() => turn("right")} />
      <span /><Control label="Down" symbol="↓" onClick={() => turn("down")} /><span />
    </div>
    <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-wider text-muted">Arrow keys or WASD · Space to pause · Escape to close</p>
  </div>;
}

function Control({ label, symbol, onClick }: { label: string; symbol: string; onClick: () => void }) {
  return <button type="button" aria-label={label} onClick={onClick} className="rounded-lg border border-border bg-surface py-3 text-lg text-muted transition hover:border-primary hover:text-main active:bg-primary/30 focus-visible:outline-2 focus-visible:outline-primary">{symbol}</button>;
}
