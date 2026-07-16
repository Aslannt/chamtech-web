import { describe, expect, it } from "vitest";
import { syntheticOrders } from "@/data/playground-orders";
import { transformToCanonical } from "@/lib/playground/canonical-transform";

describe("canonical transformation", () => {
  it("matches the real DataWeave field mapping", () => {
    const result = transformToCanonical(
      [syntheticOrders[0]],
      "cham-test-001",
      "2026-07-16T10:30:01.900Z",
    );

    expect(result.source).toBe("CHAM_ORDERS");
    expect(result.correlationId).toBe("cham-test-001");
    expect(result.orders[0]).toEqual({
      orderId: "11111111-1111-1111-1111-111111111111",
      customerId: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      status: "CONFIRMED",
      total: 59.85,
      items: [
        {
          sku: "NOTE-001",
          name: "Synthetic Notebook",
          quantity: 2,
          unitPrice: 24.9,
          subtotal: 49.8,
        },
        {
          sku: "PEN-001",
          name: "Synthetic Pen",
          quantity: 3,
          unitPrice: 3.35,
          subtotal: 10.05,
        },
      ],
    });
    expect("customer" in result.orders[0]).toBe(false);
  });
});
