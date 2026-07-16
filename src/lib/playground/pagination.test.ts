import { describe, expect, it } from "vitest";
import { syntheticOrders } from "@/data/playground-orders";
import {
  aggregatePages,
  paginateOrders,
} from "@/lib/playground/pagination";

describe("pagination", () => {
  it("creates sequential zero-based pages", () => {
    const pages = paginateOrders(syntheticOrders, 2);

    expect(pages).toHaveLength(3);
    expect(pages.map((page) => page.page)).toEqual([0, 1, 2]);
    expect(pages.map((page) => page.content.length)).toEqual([2, 2, 1]);
    expect(pages[0].first).toBe(true);
    expect(pages[2].last).toBe(true);
  });

  it("aggregates all orders in page order", () => {
    const pages = paginateOrders(syntheticOrders, 1);
    expect(aggregatePages(pages)).toEqual(syntheticOrders);
  });

  it("returns the real empty-page metadata shape", () => {
    expect(paginateOrders([], 20)).toEqual([
      {
        content: [],
        page: 0,
        size: 20,
        totalElements: 0,
        totalPages: 0,
        first: true,
        last: true,
      },
    ]);
  });
});
