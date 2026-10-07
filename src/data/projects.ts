export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  status: string;
  /** Omitted for private repositories: the case study shows screenshots instead. */
  repository?: string;
  images?: readonly { src: string; alt: string; caption: string }[];
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
  {
    slug: "celeste",
    name: "Celeste",
    category: "Personal AI assistant",
    description:
      "Private, local-first personal assistant: a FastAPI core on my PC with Android, web and desktop clients, Markdown memory and a voice orb, where the AI can only act through a risk-based tool router.",
    status: "In daily personal use",
    technologies: [
      "Python",
      "FastAPI",
      "SQLite FTS5",
      "Ollama",
      "Kotlin",
      "Android",
      "Piper TTS",
      "faster-whisper",
    ],
    images: [
      { src: "/projects/celeste/speaking.webp", alt: "Celeste web client answering from its memory", caption: "Answering from Celeste Brain with the local Piper voice." },
      { src: "/projects/celeste/thinking.webp", alt: "Celeste orb in thinking state with an orbital ring", caption: "Thinking state: the orb spins faster and shows an orbital ring." },
      { src: "/projects/celeste/idle.webp", alt: "Celeste web client at rest", caption: "Idle: a particle sphere that breathes and reacts to voice." },
    ],
    metrics: [
      { value: "151", label: "Core tests passing" },
      { value: "13", label: "Architecture decisions (ADRs)" },
      { value: "3", label: "Clients: Android, web, desktop" },
      { value: "4", label: "Tool risk levels" },
    ],
    overview:
      "Celeste is a distributed personal assistant that connects my PC, my phone, a durable Markdown memory and local or optional cloud AI models, without handing unrestricted control to any provider.",
    problem:
      "Personal tasks are scattered across PC, phone, notes, mail, calendar and reminders, and most assistants solve that by giving a cloud model broad access to everything. I wanted something useful every day that keeps the data local and never lets the model act on its own authority.",
    solution:
      "A FastAPI core is the security boundary: models receive declared tools, not shell access or credentials. A Tool Router classifies every action as READ, SAFE_WRITE, CONFIRM or RESTRICTED, sensitive changes require real confirmation, and memory lives in human-readable Markdown indexed with SQLite FTS5.",
    architecture: [
      { title: "Clients", description: "Android app, web client and desktop voice orb." },
      { title: "Celeste Core", description: "FastAPI service with token auth and autostart on Windows." },
      { title: "Tool Router", description: "READ, SAFE_WRITE, CONFIRM and RESTRICTED actions with audit." },
      { title: "AI providers", description: "Ollama locally, Claude or OpenAI as interchangeable options." },
      { title: "Celeste Brain", description: "Markdown notes with YAML frontmatter and an FTS5 index." },
    ],
    capabilities: [
      "Voice conversation with a local Piper voice and Whisper transcription.",
      "Notes, search and memory in Markdown that I can open in Obsidian.",
      "Durable reminders with proactive spoken announcements.",
      "Gmail and Google Calendar through official OAuth, with confirmation before sending or changing.",
      "Android client with Wake-on-LAN, offline notes (Room) and idempotent sync.",
      "Swappable AI providers: Ollama, Claude or OpenAI.",
    ],
    verification: [
      "151 of 151 Core tests passed.",
      "Used daily on Windows with autostart and a token-protected API.",
      "Gmail and Calendar validated against a real account in draft mode.",
      "Offline notes synced without duplicates after network loss.",
    ],
    decisions: [
      "The Core, not the model, is the authority over data and actions.",
      "Markdown files are the source of truth; the SQLite index can always be rebuilt.",
      "Sensitive actions need explicit confirmation tied to the exact payload.",
      "Local models first; cloud providers are optional and replaceable.",
      "LinkedIn messaging was evaluated and rejected for lack of official free access.",
    ],
    limitations: [
      "Single-user project built for my own use.",
      "Source code is private; this page shows screenshots from a demo instance with empty memory.",
      "Home automation and an always-on server remain on the roadmap.",
    ],
  },
  {
    slug: "meeting-copilot",
    name: "Copiloto de Reuniones",
    category: "Real-time AI tool",
    description:
      "Local copilot for meetings in English: live transcription, Spanish translation and suggested replies in an always-on-top subtitle overlay, all running on the user's own machine.",
    status: "Working prototype · v0.1",
    technologies: [
      "Python",
      "PySide6",
      "faster-whisper",
      "Argos Translate",
      "Ollama",
      "WebSockets",
    ],
    images: [
      { src: "/projects/copiloto/cover.webp", alt: "Subtitle overlay floating over the Copiloto main window", caption: "The subtitle overlay floating over the main window during the demo meeting." },
      { src: "/projects/copiloto/overlay.webp", alt: "Subtitle overlay with a detected question and a suggested reply", caption: "Always-on-top overlay: detected question, translation and a suggested reply." },
      { src: "/projects/copiloto/main.webp", alt: "Copiloto main window with live transcription and suggested reply", caption: "Main window during the built-in demo meeting." },
    ],
    metrics: [
      { value: "347", label: "Test cases" },
      { value: "2", label: "Modes: local or client/server" },
      { value: "0", label: "Raw audio files stored" },
      { value: "100%", label: "Local processing" },
    ],
    overview:
      "Copiloto de Reuniones listens to the computer's audio during Meet, Teams or Zoom calls, transcribes the English conversation, translates it to Spanish and proposes a short reply when someone asks a question.",
    problem:
      "Following a fast meeting in a second language is hard, and answering a direct question on the spot is harder. Cloud meeting assistants record everything and send it to third parties, which is not acceptable for private or work conversations.",
    solution:
      "A local pipeline segments system audio, transcribes it with faster-whisper, translates offline with Argos, detects questions without calling the LLM on every phrase and only then asks a local Ollama model for a short, safe reply. A lightweight client can delegate the heavy work to a GPU server on the same network.",
    architecture: [
      { title: "System audio", description: "Loopback capture of Meet, Teams or Zoom." },
      { title: "Segmenter", description: "Voice activity detection; silence is never sent to Whisper." },
      { title: "faster-whisper", description: "Streaming English transcription with interim text." },
      { title: "Translate + detect", description: "Argos EN to ES offline and a question detector." },
      { title: "Suggested reply", description: "Local Ollama model with recent context, shown in the overlay." },
    ],
    capabilities: [
      "Live English transcription with interim captions while people speak.",
      "Offline English to Spanish translation.",
      "Question detection and short suggested replies with their meaning in Spanish.",
      "Subtitle overlay that floats over the meeting, with a global hotkey and tray icon.",
      "Meeting history, summary and open items when the meeting ends.",
      "Client/server mode over the local network with setup wizard and auto-discovery.",
    ],
    verification: [
      "347 pytest cases across transcription, diarization, memory and UI logic.",
      "Built-in demo mode reproduces a full meeting without a real call.",
      "Packaged as a Windows app with autostart for client and server.",
    ],
    decisions: [
      "Audio is processed in memory and never written to disk.",
      "The LLM is only called when a question is detected, keeping latency and load low.",
      "If the model does not answer, a safe generic reply is suggested instead of nothing.",
      "Heavy work can move to a GPU server so a modest laptop can still be the client.",
    ],
    limitations: [
      "Prototype focused on meetings held in English.",
      "Source code is private; screenshots come from the built-in demo meeting.",
      "Speaker identification by name is still experimental.",
    ],
  },
] as const satisfies readonly Project[];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
