import type { CanonicalExport, SyntheticOrder } from "@/lib/playground/types";

export function transformToCanonical(
  orders: readonly SyntheticOrder[],
  correlationId: string,
  generatedAt: string,
): CanonicalExport {
  return {
    source: "CHAM_ORDERS",
    generatedAt,
    correlationId,
    orders: orders.map((order) => ({
      orderId: order.id,
      customerId: order.customerId,
      status: order.status,
      total: order.total,
      items: order.items.map((item) => ({
        sku: item.productSku,
        name: item.productName,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        subtotal: item.subtotal,
      })),
    })),
  };
}
