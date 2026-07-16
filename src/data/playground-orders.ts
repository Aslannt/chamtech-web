import type { SyntheticOrder } from "@/lib/playground/types";

export const syntheticOrders: readonly SyntheticOrder[] = [
  {
    id: "11111111-1111-1111-1111-111111111111",
    customerId: "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
    status: "CONFIRMED",
    total: 59.85,
    items: [
      {
        productSku: "NOTE-001",
        productName: "Synthetic Notebook",
        quantity: 2,
        unitPrice: 24.9,
        subtotal: 49.8,
      },
      {
        productSku: "PEN-001",
        productName: "Synthetic Pen",
        quantity: 3,
        unitPrice: 3.35,
        subtotal: 10.05,
      },
    ],
  },
  {
    id: "22222222-2222-2222-2222-222222222222",
    customerId: "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
    status: "CONFIRMED",
    total: 15,
    items: [
      {
        productSku: "MUG-001",
        productName: "Synthetic Mug",
        quantity: 1,
        unitPrice: 15,
        subtotal: 15,
      },
    ],
  },
  {
    id: "33333333-3333-3333-3333-333333333333",
    customerId: "cccccccc-cccc-cccc-cccc-cccccccccccc",
    status: "CONFIRMED",
    total: 42.5,
    items: [
      {
        productSku: "BAG-001",
        productName: "Synthetic Tech Bag",
        quantity: 1,
        unitPrice: 42.5,
        subtotal: 42.5,
      },
    ],
  },
  {
    id: "44444444-4444-4444-4444-444444444444",
    customerId: "dddddddd-dddd-dddd-dddd-dddddddddddd",
    status: "CONFIRMED",
    total: 29.7,
    items: [
      {
        productSku: "CABLE-001",
        productName: "Synthetic USB Cable",
        quantity: 3,
        unitPrice: 9.9,
        subtotal: 29.7,
      },
    ],
  },
  {
    id: "55555555-5555-5555-5555-555555555555",
    customerId: "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
    status: "CONFIRMED",
    total: 18.25,
    items: [
      {
        productSku: "PAD-001",
        productName: "Synthetic Desk Pad",
        quantity: 1,
        unitPrice: 18.25,
        subtotal: 18.25,
      },
    ],
  },
];
