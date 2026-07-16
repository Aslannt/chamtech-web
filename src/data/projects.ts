export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  status: string;
  repository: string;
  technologies: readonly string[];
  metrics: readonly { value: string; label: string }[];
  overview: string;
  problem: string;
  solution: string;
  architecture: readonly { title: string; description: string }[];
  capabilities: readonly string[];
  verification: readonly string[];
  decisions: readonly string[];
  limitations: readonly string[];
};

export const projects = [
  {
    slug: "cham-orders-api",
    name: "Cham Orders API",
    category: "Java backend",
    description:
      "Production-style order management REST API built with Java 21, Spring Boot, PostgreSQL, Flyway, Docker and OpenAPI.",
    status: "Locally verified Release Candidate",
    repository: "https://github.com/Aslannt/cham-orders-api",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Flyway",
      "Docker",
      "OpenAPI",
    ],
    metrics: [
      { value: "38", label: "Automated tests" },
      { value: "2", label: "Flyway migrations" },
      { value: "200", label: "OpenAPI responses" },
      { value: "59.85", label: "Verified server total" },
    ],
    overview:
      "Cham Orders API is a transactional backend case study for managing users, customers, products and multi-item orders through a versioned REST contract.",
    problem:
      "Order systems must protect monetary calculations, preserve the historical state of purchased products and enforce authorization and lifecycle rules without leaking infrastructure details to clients.",
    solution:
      "A feature-first Spring Boot modular monolith applies JWT authentication, role-based authorization, server-side BigDecimal calculations, historical item snapshots, explicit state transitions and a consistent correlation-aware error contract.",
    architecture: [
      { title: "API Consumer", description: "Authenticated REST requests and correlation IDs." },
      { title: "Spring Web", description: "Versioned controllers, DTO validation and OpenAPI." },
      { title: "Application modules", description: "Business rules, security and transactional services." },
      { title: "PostgreSQL", description: "Persistent data, constraints and Flyway migrations." },
    ],
    capabilities: [
      "JWT authentication and ADMIN/OPERATOR authorization.",
      "Customer, product and multi-item order management.",
      "Server-side monetary calculations with explicit mathematical limits.",
      "Historical product name, SKU and price snapshots.",
      "PENDING to CONFIRMED or CANCELLED transitions.",
      "Pagination, filtering and correlation ID propagation.",
      "Standardized HTTP errors, OpenAPI and Swagger UI.",
    ],
    verification: [
      "38 automated tests passed.",
      "Maven clean test and clean package passed.",
      "Docker image built and PostgreSQL 17.10 reported healthy.",
      "Flyway V1 and V2 applied successfully.",
      "OpenAPI JSON and YAML returned HTTP 200.",
      "Docker-backed release-candidate smoke test passed.",
      "Clean-clone verification passed.",
    ],
    decisions: [
      "The server is the only authority for subtotals and totals.",
      "Order items store historical product snapshots.",
      "Expected HTTP failures share one stable error contract.",
      "Flyway exclusively manages the PostgreSQL schema.",
      "Correlation IDs are propagated when safe and generated otherwise.",
    ],
    limitations: [
      "No public or production deployment.",
      "No refresh tokens, payments, inventory, shipping or messaging.",
      "No Testcontainers suite or remote CI execution yet.",
      "Advanced observability and measured query optimization remain outside the MVP.",
    ],
  },
  {
    slug: "cham-orders-mule-integration",
    name: "Cham Orders Mule Integration",
    category: "Enterprise integration",
    description:
      "MuleSoft integration that synchronizes confirmed orders from Cham Orders API into a canonical downstream JSON format.",
    status: "Locally verified Release Candidate",
    repository: "https://github.com/Aslannt/cham-orders-mule-integration",
    technologies: [
      "Mule Runtime 4",
      "APIKit",
      "RAML",
      "DataWeave",
      "MUnit",
      "HTTP",
      "JSON",
    ],
    metrics: [
      { value: "12", label: "MUnit tests" },
      { value: "66.28%", label: "Application coverage" },
      { value: "100%", label: "order-sync coverage" },
      { value: "2 pages", label: "Real pagination proof" },
    ],
    overview:
      "Cham Orders Mule Integration is a synchronous MuleSoft case study that retrieves every confirmed order page and converts the result into one canonical downstream JSON file.",
    problem:
      "A downstream consumer should not depend directly on the backend's authentication flow, pagination mechanics or internal response shape, and the integration must preserve traceability across every call.",
    solution:
      "An APIKit operation authenticates against Cham Orders API, traverses pagination sequentially, validates response metadata, maps historical order data with DataWeave and writes a canonical file with the same correlation context.",
    architecture: [
      { title: "API Client", description: "POST /api/v1/order-sync with optional correlation ID." },
      { title: "APIKit", description: "RAML routing and request validation." },
      { title: "Order sync", description: "Authentication, orchestration and sequential pagination." },
      { title: "DataWeave", description: "Canonical order transformation and validation." },
      { title: "JSON file", description: "Local output simulating downstream ERP delivery." },
    ],
    capabilities: [
      "POST /api/v1/order-sync through APIKit and RAML.",
      "Authentication against Cham Orders API with Bearer token propagation.",
      "Complete sequential pagination with configurable page size.",
      "DataWeave canonical transformation using historical item data.",
      "X-Correlation-ID propagation or generation.",
      "Centralized errors and externalized local credentials.",
      "Canonical JSON output generation.",
    ],
    verification: [
      "Local Mule deployment passed.",
      "Real authentication and confirmed-order synchronization passed.",
      "Real two-page pagination passed with pageSize 1.",
      "Canonical JSON output was generated and reviewed.",
      "Authentication failure and unavailable backend scenarios passed.",
      "12 of 12 MUnit tests passed.",
      "order-sync.xml coverage reached 100% and client coverage 95.65%.",
    ],
    decisions: [
      "Pagination is sequential and validated against backend metadata.",
      "The complete result is transformed once into a canonical model.",
      "Credentials remain external to source control.",
      "Correlation IDs cross the inbound request, backend calls and output.",
      "The implementation stays synchronous for a bounded local portfolio scope.",
    ],
    limitations: [
      "No CloudHub or production deployment.",
      "No real ERP integration; the JSON file is a simulator output.",
      "No queues, persistent idempotency, scheduler or advanced retry policy.",
      "No CI/CD execution or high-availability claim.",
    ],
  },
] as const satisfies readonly Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
