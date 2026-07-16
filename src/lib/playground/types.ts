export type ScenarioType =
  | "success"
  | "empty"
  | "invalid-request"
  | "authentication-failure"
  | "backend-unavailable"
  | "unexpected-error";

export type SimulationStatus = "idle" | "running" | "success" | "error";

export type ArchitectureNodeId =
  | "consumer"
  | "mule"
  | "api"
  | "database"
  | "canonical";

export type ArchitectureNodeStatus =
  | "idle"
  | "active"
  | "success"
  | "error"
  | "skipped";

export type EventLevel = "info" | "success" | "error";

export type SimulationStep = {
  id: string;
  label: string;
  description: string;
  elapsedMs: number;
  level: EventLevel;
  nodeUpdates: Partial<Record<ArchitectureNodeId, ArchitectureNodeStatus>>;
};

export type EventLogEntry = {
  id: string;
  elapsedMs: number;
  message: string;
  level: EventLevel;
};

export type SyntheticOrderItem = {
  productSku: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
};

export type SyntheticOrder = {
  id: string;
  customerId: string;
  status: "CONFIRMED";
  total: number;
  items: SyntheticOrderItem[];
};

export type SyntheticOrdersPage = {
  content: SyntheticOrder[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
};

export type CanonicalItem = {
  sku: string;
  name: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
};

export type CanonicalOrder = {
  orderId: string;
  customerId: string;
  status: "CONFIRMED";
  total: number;
  items: CanonicalItem[];
};

export type CanonicalExport = {
  source: "CHAM_ORDERS";
  generatedAt: string;
  correlationId: string;
  orders: CanonicalOrder[];
};

export type SimulationRequest = {
  status: "CONFIRMED";
  pageSize: number;
};

export type SimulationSuccessResponse = {
  correlationId: string;
  status: "COMPLETED";
  ordersRead: number;
  ordersExported: number;
  outputFile: string;
};

export type SimulationErrorResponse = {
  code:
    | "INVALID_REQUEST"
    | "CHAM_ORDERS_AUTHENTICATION_ERROR"
    | "CHAM_ORDERS_UNAVAILABLE"
    | "INTEGRATION_ERROR";
  message: string;
  timestamp: string;
  path: "/api/v1/order-sync";
  correlationId: string;
  fieldErrors: Record<string, string>;
};

export type SimulationResponse =
  | SimulationSuccessResponse
  | SimulationErrorResponse;

export type SimulationConfig = {
  scenario: ScenarioType;
  pageSize: number;
  correlationId?: string;
  now?: Date;
  randomValue?: number;
};

export type SimulationPlan = {
  scenario: ScenarioType;
  correlationId: string;
  request: SimulationRequest | { status: string; pageSize: number };
  requestHeaders: Record<string, string>;
  pages: SyntheticOrdersPage[];
  steps: SimulationStep[];
  httpStatus: 200 | 400 | 401 | 500 | 502;
  response: SimulationResponse;
  canonical: CanonicalExport | null;
  outputFile: string | null;
  terminalStatus: "success" | "error";
  finalNodeStatuses: Record<ArchitectureNodeId, ArchitectureNodeStatus>;
};
