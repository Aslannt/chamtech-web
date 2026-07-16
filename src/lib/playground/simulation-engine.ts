import { syntheticOrders } from "@/data/playground-orders";
import { transformToCanonical } from "@/lib/playground/canonical-transform";
import { resolveCorrelationId } from "@/lib/playground/correlation-id";
import { aggregatePages, paginateOrders } from "@/lib/playground/pagination";
import type {
  ArchitectureNodeId,
  ArchitectureNodeStatus,
  SimulationConfig,
  SimulationErrorResponse,
  SimulationPlan,
  SimulationStep,
} from "@/lib/playground/types";

const path = "/api/v1/order-sync" as const;

export function createIdleNodeStatuses(): Record<
  ArchitectureNodeId,
  ArchitectureNodeStatus
> {
  return {
    consumer: "idle",
    mule: "idle",
    api: "idle",
    database: "idle",
    canonical: "idle",
  };
}

function formatOutputFilename(now: Date) {
  const digits = (value: number, width = 2) =>
    value.toString().padStart(width, "0");

  return [
    "confirmed-orders-",
    now.getUTCFullYear(),
    digits(now.getUTCMonth() + 1),
    digits(now.getUTCDate()),
    "-",
    digits(now.getUTCHours()),
    digits(now.getUTCMinutes()),
    digits(now.getUTCSeconds()),
    "-",
    digits(now.getUTCMilliseconds(), 3),
    ".json",
  ].join("");
}

function errorResponse(
  code: SimulationErrorResponse["code"],
  message: string,
  correlationId: string,
  timestamp: string,
): SimulationErrorResponse {
  return {
    code,
    message,
    timestamp,
    path,
    correlationId,
    fieldErrors: {},
  };
}

function step(
  id: string,
  label: string,
  description: string,
  elapsedMs: number,
  nodeUpdates: SimulationStep["nodeUpdates"],
  level: SimulationStep["level"] = "info",
): SimulationStep {
  return { id, label, description, elapsedMs, nodeUpdates, level };
}

function baseSteps(): SimulationStep[] {
  return [
    step(
      "request-received",
      "Request received",
      "API Consumer submitted POST /api/v1/order-sync.",
      0,
      { consumer: "active" },
    ),
    step(
      "request-validated",
      "Request validated",
      "APIKit accepted status CONFIRMED and the configured page size.",
      220,
      { consumer: "success", mule: "active" },
    ),
    step(
      "correlation-resolved",
      "Correlation ID resolved",
      "One synthetic correlation ID now follows the complete execution.",
      440,
      { mule: "active" },
    ),
  ];
}

function finalStatuses(
  updates: Partial<Record<ArchitectureNodeId, ArchitectureNodeStatus>>,
) {
  return { ...createIdleNodeStatuses(), ...updates };
}

export function buildSimulationPlan(config: SimulationConfig): SimulationPlan {
  const now = config.now ?? new Date();
  const timestamp = now.toISOString();
  const correlationId = resolveCorrelationId(
    config.correlationId,
    now,
    config.randomValue,
  );
  const request = { status: "CONFIRMED" as const, pageSize: config.pageSize };
  const requestHeaders = { "X-Correlation-ID": correlationId };

  if (config.scenario === "invalid-request") {
    const steps = [
      step(
        "request-received",
        "Request received",
        "API Consumer submitted a deliberately malformed synthetic request.",
        0,
        { consumer: "active" },
      ),
      step(
        "request-rejected",
        "Request validation failed",
        "APIKit rejected the unsupported status before backend access.",
        260,
        {
          consumer: "success",
          mule: "error",
          api: "skipped",
          database: "skipped",
          canonical: "skipped",
        },
        "error",
      ),
    ];

    return {
      scenario: config.scenario,
      correlationId,
      request: { status: "PENDING", pageSize: config.pageSize },
      requestHeaders,
      pages: [],
      steps,
      httpStatus: 400,
      response: errorResponse(
        "INVALID_REQUEST",
        "The synchronization request is invalid.",
        correlationId,
        timestamp,
      ),
      canonical: null,
      outputFile: null,
      terminalStatus: "error",
      finalNodeStatuses: finalStatuses({
        consumer: "success",
        mule: "error",
        api: "skipped",
        database: "skipped",
        canonical: "skipped",
      }),
    };
  }

  const steps = baseSteps();
  steps.push(
    step(
      "authentication-requested",
      "Authentication request sent",
      "MuleSoft called POST /api/v1/auth/login without exposing credentials.",
      680,
      { mule: "active", api: "active" },
    ),
  );

  if (config.scenario === "authentication-failure") {
    steps.push(
      step(
        "authentication-rejected",
        "Authentication rejected",
        "Cham Orders API rejected the synthetic downstream login.",
        940,
        {
          mule: "error",
          api: "error",
          database: "skipped",
          canonical: "skipped",
        },
        "error",
      ),
    );

    return {
      scenario: config.scenario,
      correlationId,
      request,
      requestHeaders,
      pages: [],
      steps,
      httpStatus: 401,
      response: errorResponse(
        "CHAM_ORDERS_AUTHENTICATION_ERROR",
        "Authentication with Cham Orders API failed.",
        correlationId,
        timestamp,
      ),
      canonical: null,
      outputFile: null,
      terminalStatus: "error",
      finalNodeStatuses: finalStatuses({
        consumer: "success",
        mule: "error",
        api: "error",
        database: "skipped",
        canonical: "skipped",
      }),
    };
  }

  steps.push(
    step(
      "authentication-completed",
      "JWT token received",
      "A synthetic Bearer context was accepted and kept out of the log.",
      940,
      { api: "success", mule: "active" },
      "success",
    ),
  );

  if (config.scenario === "backend-unavailable") {
    steps.push(
      step(
        "backend-unavailable",
        "Confirmed orders request failed",
        "Cham Orders API was unavailable while MuleSoft requested page 0.",
        1_220,
        {
          mule: "error",
          api: "error",
          database: "skipped",
          canonical: "skipped",
        },
        "error",
      ),
    );

    return {
      scenario: config.scenario,
      correlationId,
      request,
      requestHeaders,
      pages: [],
      steps,
      httpStatus: 502,
      response: errorResponse(
        "CHAM_ORDERS_UNAVAILABLE",
        "Cham Orders API is unavailable.",
        correlationId,
        timestamp,
      ),
      canonical: null,
      outputFile: null,
      terminalStatus: "error",
      finalNodeStatuses: finalStatuses({
        consumer: "success",
        mule: "error",
        api: "error",
        database: "skipped",
        canonical: "skipped",
      }),
    };
  }

  const selectedOrders = config.scenario === "empty" ? [] : syntheticOrders;
  const pages = paginateOrders(selectedOrders, config.pageSize);
  let elapsedMs = 1_220;

  pages.forEach((page) => {
    steps.push(
      step(
        `page-${page.page}-requested`,
        `Confirmed orders page ${page.page} requested`,
        `GET /api/v1/orders?status=CONFIRMED&page=${page.page}&size=${page.size}`,
        elapsedMs,
        { mule: "active", api: "active", database: "active" },
      ),
    );
    elapsedMs += 260;
    steps.push(
      step(
        `page-${page.page}-received`,
        `Page ${page.page} response received`,
        `${page.content.length} orders received · ${page.last ? "pagination complete" : "more pages expected"}.`,
        elapsedMs,
        { api: "success", database: "success", mule: "active" },
        "success",
      ),
    );
    elapsedMs += 260;
  });

  const orders = aggregatePages(pages);
  steps.push(
    step(
      "orders-aggregated",
      "Orders aggregated",
      `${orders.length} confirmed orders matched the expected pagination total.`,
      elapsedMs,
      { mule: "active", api: "success", database: "success" },
      "success",
    ),
  );
  elapsedMs += 280;

  if (config.scenario === "unexpected-error") {
    steps.push(
      step(
        "integration-error",
        "Canonical transformation interrupted",
        "The catch-all handler produced a stable response without internal details.",
        elapsedMs,
        { mule: "error", canonical: "error" },
        "error",
      ),
    );

    return {
      scenario: config.scenario,
      correlationId,
      request,
      requestHeaders,
      pages,
      steps,
      httpStatus: 500,
      response: errorResponse(
        "INTEGRATION_ERROR",
        "An unexpected integration error occurred.",
        correlationId,
        timestamp,
      ),
      canonical: null,
      outputFile: null,
      terminalStatus: "error",
      finalNodeStatuses: finalStatuses({
        consumer: "success",
        mule: "error",
        api: "success",
        database: "success",
        canonical: "error",
      }),
    };
  }

  const canonical = transformToCanonical(orders, correlationId, timestamp);
  const outputFile = formatOutputFilename(now);

  steps.push(
    step(
      "canonical-transformation",
      "DataWeave transformation simulated",
      "Backend fields and historical item snapshots were mapped to the real canonical model.",
      elapsedMs,
      { mule: "active", canonical: "active" },
    ),
  );
  elapsedMs += 300;
  steps.push(
    step(
      "canonical-generated",
      "Canonical JSON generated",
      `${outputFile} prepared in browser memory for the simulated ERP boundary.`,
      elapsedMs,
      { canonical: "success", mule: "active" },
      "success",
    ),
  );
  elapsedMs += 260;
  steps.push(
    step(
      "synchronization-completed",
      "Synchronization completed",
      `${orders.length} orders read and ${orders.length} orders exported.`,
      elapsedMs,
      {
        consumer: "success",
        mule: "success",
        api: "success",
        database: "success",
        canonical: "success",
      },
      "success",
    ),
  );

  return {
    scenario: config.scenario,
    correlationId,
    request,
    requestHeaders,
    pages,
    steps,
    httpStatus: 200,
    response: {
      correlationId,
      status: "COMPLETED",
      ordersRead: orders.length,
      ordersExported: orders.length,
      outputFile,
    },
    canonical,
    outputFile,
    terminalStatus: "success",
    finalNodeStatuses: finalStatuses({
      consumer: "success",
      mule: "success",
      api: "success",
      database: "success",
      canonical: "success",
    }),
  };
}
