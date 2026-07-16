import type { ScenarioType } from "@/lib/playground/types";

export type PlaygroundScenario = {
  id: ScenarioType;
  title: string;
  description: string;
  outcome: string;
};

export const playgroundScenarios: readonly PlaygroundScenario[] = [
  {
    id: "success",
    title: "Successful synchronization",
    description: "Authenticates, retrieves every confirmed-order page and creates canonical JSON.",
    outcome: "200 · COMPLETED",
  },
  {
    id: "empty",
    title: "No confirmed orders",
    description: "Completes successfully with an empty canonical orders collection.",
    outcome: "200 · 0 orders",
  },
  {
    id: "invalid-request",
    title: "Invalid request",
    description: "Simulates a RAML contract violation rejected before backend access.",
    outcome: "400 · INVALID_REQUEST",
  },
  {
    id: "authentication-failure",
    title: "Authentication failure",
    description: "The downstream login is rejected before order retrieval begins.",
    outcome: "401 · AUTHENTICATION_ERROR",
  },
  {
    id: "backend-unavailable",
    title: "Backend unavailable",
    description: "Cham Orders API cannot serve the confirmed-order request.",
    outcome: "502 · CHAM_ORDERS_UNAVAILABLE",
  },
  {
    id: "unexpected-error",
    title: "Unexpected integration error",
    description: "A controlled catch-all response prevents internal details from leaking.",
    outcome: "500 · INTEGRATION_ERROR",
  },
];
