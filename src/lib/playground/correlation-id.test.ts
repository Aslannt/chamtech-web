import { describe, expect, it } from "vitest";
import {
  isSafeCorrelationId,
  resolveCorrelationId,
} from "@/lib/playground/correlation-id";

describe("correlation ID", () => {
  it("preserves a safe caller value", () => {
    expect(
      resolveCorrelationId(" cham-sync-client:001 ", new Date(0), 0),
    ).toBe("cham-sync-client:001");
  });

  it("generates a deterministic synthetic value when absent", () => {
    expect(resolveCorrelationId(undefined, new Date(1_000), 0.5)).toBe(
      "cham-sync-1000-apsw",
    );
  });

  it("rejects unsafe values", () => {
    expect(isSafeCorrelationId("unsafe correlation id")).toBe(false);
    expect(isSafeCorrelationId("safe.value-01:test")).toBe(true);
  });
});
