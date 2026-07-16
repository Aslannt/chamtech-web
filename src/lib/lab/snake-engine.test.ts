import { describe, expect, it } from "vitest";
import { INITIAL_SNAKE, canTurn, createPacket, hasCollision, nextHead } from "./snake-engine";

describe("snake engine", () => {
  it("moves one cell", () => expect(nextHead({ x: 4, y: 4 }, "up")).toEqual({ x: 4, y: 3 }));
  it("prevents reverse turns", () => {
    expect(canTurn("right", "left")).toBe(false);
    expect(canTurn("right", "up")).toBe(true);
  });
  it("detects collisions", () => {
    expect(hasCollision({ x: -1, y: 3 }, INITIAL_SNAKE)).toBe(true);
    expect(hasCollision({ x: 6, y: 8 }, INITIAL_SNAKE)).toBe(true);
    expect(hasCollision({ x: 10, y: 10 }, INITIAL_SNAKE)).toBe(false);
  });
  it("places packets outside the snake", () => {
    expect(INITIAL_SNAKE).not.toContainEqual(createPacket(INITIAL_SNAKE, () => 0));
  });
});
