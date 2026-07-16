import type { SyntheticOrder, SyntheticOrdersPage } from "@/lib/playground/types";

export function paginateOrders(
  orders: readonly SyntheticOrder[],
  pageSize: number,
): SyntheticOrdersPage[] {
  if (!Number.isInteger(pageSize) || pageSize < 1 || pageSize > 100) {
    throw new RangeError("pageSize must be an integer between 1 and 100");
  }

  const totalElements = orders.length;
  const totalPages = totalElements === 0 ? 0 : Math.ceil(totalElements / pageSize);

  if (totalElements === 0) {
    return [
      {
        content: [],
        page: 0,
        size: pageSize,
        totalElements: 0,
        totalPages: 0,
        first: true,
        last: true,
      },
    ];
  }

  return Array.from({ length: totalPages }, (_, page) => ({
    content: orders.slice(page * pageSize, (page + 1) * pageSize),
    page,
    size: pageSize,
    totalElements,
    totalPages,
    first: page === 0,
    last: page === totalPages - 1,
  }));
}

export function aggregatePages(pages: readonly SyntheticOrdersPage[]) {
  return pages.flatMap((page) => page.content);
}
