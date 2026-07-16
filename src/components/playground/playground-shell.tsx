"use client";

import { useEffect, useMemo, useState } from "react";
import { ArchitectureFlow } from "@/components/playground/architecture-flow";
import { CodePanel } from "@/components/playground/code-panel";
import { EventLog } from "@/components/playground/event-log";
import { ExecutionTimeline } from "@/components/playground/execution-timeline";
import { PaginationSummary } from "@/components/playground/pagination-summary";
import { SimulationControls } from "@/components/playground/simulation-controls";
import { SimulationResult } from "@/components/playground/simulation-result";
import { resolveCorrelationId } from "@/lib/playground/correlation-id";
import {
  buildSimulationPlan,
  createIdleNodeStatuses,
} from "@/lib/playground/simulation-engine";
import type {
  ArchitectureNodeId,
  ArchitectureNodeStatus,
  EventLogEntry,
  ScenarioType,
  SimulationPlan,
  SimulationStatus,
} from "@/lib/playground/types";

function prettyJson(value: unknown) {
  return JSON.stringify(value, null, 2);
}

export function PlaygroundShell() {
  const [scenario, setScenario] = useState<ScenarioType>("success");
  const [pageSize, setPageSize] = useState(20);
  const [correlationInput, setCorrelationInput] = useState("");
  const [plan, setPlan] = useState<SimulationPlan | null>(null);
  const [status, setStatus] = useState<SimulationStatus>("idle");
  const [currentStep, setCurrentStep] = useState(-1);
  const [logs, setLogs] = useState<EventLogEntry[]>([]);
  const [nodeStatuses, setNodeStatuses] = useState<
    Record<ArchitectureNodeId, ArchitectureNodeStatus>
  >(createIdleNodeStatuses);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!plan || status !== "running") return;

    const timeouts = plan.steps.map((simulationStep, index) => {
      const delay = reducedMotion ? index * 25 : simulationStep.elapsedMs;

      return window.setTimeout(() => {
        setCurrentStep(index);
        setNodeStatuses((current) => ({
          ...current,
          ...simulationStep.nodeUpdates,
        }));
        setLogs((current) => [
          ...current,
          {
            id: simulationStep.id,
            elapsedMs: simulationStep.elapsedMs,
            message: `${simulationStep.label} · ${simulationStep.description}`,
            level: simulationStep.level,
          },
        ]);

        if (index === plan.steps.length - 1) {
          setCurrentStep(plan.steps.length);
          setNodeStatuses(plan.finalNodeStatuses);
          setStatus(plan.terminalStatus);
        }
      }, delay);
    });

    return () => timeouts.forEach((timeout) => window.clearTimeout(timeout));
  }, [plan, reducedMotion, status]);

  const requestValue = useMemo(() => {
    if (!plan) return null;
    return [
      "POST /api/v1/order-sync",
      `X-Correlation-ID: ${plan.correlationId}`,
      "Content-Type: application/json",
      "",
      prettyJson(plan.request),
    ].join("\n");
  }, [plan]);

  const responseValue = useMemo(
    () => (plan && status !== "running" ? prettyJson(plan.response) : null),
    [plan, status],
  );
  const canonicalValue = useMemo(
    () => (plan?.canonical && status === "success" ? prettyJson(plan.canonical) : null),
    [plan, status],
  );

  function runSimulation() {
    const nextPlan = buildSimulationPlan({
      scenario,
      pageSize,
      correlationId: correlationInput,
    });

    setPlan(nextPlan);
    setCorrelationInput(nextPlan.correlationId);
    setStatus("running");
    setCurrentStep(-1);
    setLogs([]);
    setNodeStatuses(createIdleNodeStatuses());
  }

  function resetSimulation() {
    setPlan(null);
    setStatus("idle");
    setCurrentStep(-1);
    setLogs([]);
    setNodeStatuses(createIdleNodeStatuses());
  }

  function generateCorrelationId() {
    setCorrelationInput(resolveCorrelationId(undefined));
  }

  const firstPageStep =
    plan?.steps.findIndex((simulationStep) => simulationStep.id.includes("page-")) ??
    -1;
  const pageRetrievalVisible = firstPageStep >= 0 && currentStep >= firstPageStep;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <SimulationControls
          scenario={scenario}
          pageSize={pageSize}
          correlationId={correlationInput}
          running={status === "running"}
          onScenarioChange={setScenario}
          onPageSizeChange={setPageSize}
          onCorrelationIdChange={setCorrelationInput}
          onGenerateCorrelationId={generateCorrelationId}
          onRun={runSimulation}
          onReset={resetSimulation}
        />
        <ArchitectureFlow statuses={nodeStatuses} correlationId={plan?.correlationId ?? null} />
      </div>

      <PaginationSummary
        pages={plan?.pages ?? []}
        visible={pageRetrievalVisible && currentStep >= 0}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <ExecutionTimeline steps={plan?.steps ?? []} currentStep={currentStep} />
        <EventLog entries={logs} />
      </div>

      <SimulationResult plan={plan} status={status} />

      <div className="grid gap-6 xl:grid-cols-3">
        <CodePanel
          eyebrow="Inbound contract"
          title="Request"
          value={requestValue}
          emptyMessage="The simulated POST request will appear here."
        />
        <CodePanel
          eyebrow="Stable contract"
          title="Response"
          value={responseValue}
          emptyMessage={
            status === "running"
              ? "The response is produced when execution finishes."
              : "Run a scenario to inspect its success or error response."
          }
        />
        <CodePanel
          eyebrow="Downstream model"
          title="Canonical JSON"
          value={canonicalValue}
          emptyMessage={
            plan && plan.terminalStatus === "error"
              ? "No canonical file is produced for this error scenario."
              : "Successful executions generate the real canonical model here."
          }
        />
      </div>

      <p className="sr-only" aria-live="polite">
        {status === "running"
          ? `Simulation running, step ${Math.max(currentStep + 1, 1)} of ${plan?.steps.length ?? 0}.`
          : status === "success"
            ? "Simulation completed successfully."
            : status === "error"
              ? "Simulation completed with a controlled error."
              : "Simulation idle."}
      </p>
    </div>
  );
}
