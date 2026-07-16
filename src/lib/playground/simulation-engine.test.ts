import { describe, expect, it } from "vitest";
import {
  buildSimulationPlan,
  createIdleNodeStatuses,
} from "@/lib/playground/simulation-engine";

const now = new Date("2026-07-16T10:30:01.900Z");

describe("simulation engine", () => {
  it("builds a completed paginated synchronization", () => {
    const plan = buildSimulationPlan({
      scenario: "success",
      pageSize: 2,
      correlationId: "cham-test-success",
      now,
    });

    expect(plan.httpStatus).toBe(200);
    expect(plan.pages.map((page) => page.content.length)).toEqual([2, 2, 1]);
    expect(plan.response).toMatchObject({
      status: "COMPLETED",
      ordersRead: 5,
      ordersExported: 5,
    });
    expect(plan.canonical?.orders).toHaveLength(5);
  });

  it("treats zero confirmed orders as success", () => {
    const plan = buildSimulationPlan({
      scenario: "empty",
      pageSize: 20,
      correlationId: "cham-test-empty",
      now,
    });

    expect(plan.terminalStatus).toBe("success");
    expect(plan.response).toMatchObject({ ordersRead: 0, ordersExported: 0 });
    expect(plan.canonical?.orders).toEqual([]);
  });

  it.each([
    ["invalid-request", 400, "INVALID_REQUEST"],
    ["authentication-failure", 401, "CHAM_ORDERS_AUTHENTICATION_ERROR"],
    ["backend-unavailable", 502, "CHAM_ORDERS_UNAVAILABLE"],
    ["unexpected-error", 500, "INTEGRATION_ERROR"],
  ] as const)("builds the %s stable error", (scenario, status, code) => {
    const plan = buildSimulationPlan({
      scenario,
      pageSize: 20,
      correlationId: "cham-test-error",
      now,
    });

    expect(plan.httpStatus).toBe(status);
    expect(plan.response).toMatchObject({
      code,
      path: "/api/v1/order-sync",
      correlationId: "cham-test-error",
      fieldErrors: {},
    });
    expect(plan.canonical).toBeNull();
  });

  it("provides a clean reset state", () => {
    expect(createIdleNodeStatuses()).toEqual({
      consumer: "idle",
      mule: "idle",
      api: "idle",
      database: "idle",
      canonical: "idle",
    });
  });
});
