import { playgroundScenarios } from "@/data/playground-scenarios";
import type { ScenarioType } from "@/lib/playground/types";

export function ScenarioSelector({
  value,
  onChange,
  disabled,
}: {
  value: ScenarioType;
  onChange: (value: ScenarioType) => void;
  disabled: boolean;
}) {
  const selected = playgroundScenarios.find((scenario) => scenario.id === value);

  return (
    <fieldset disabled={disabled}>
      <legend className="text-sm font-semibold">Simulation scenario</legend>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as ScenarioType)}
        className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {playgroundScenarios.map((scenario) => (
          <option key={scenario.id} value={scenario.id}>
            {scenario.title}
          </option>
        ))}
      </select>

      {selected ? (
        <div className="mt-3 rounded-xl border border-border bg-background/60 p-4">
          <p className="text-xs leading-5 text-muted">{selected.description}</p>
          <p className="mt-2 font-mono text-[10px] text-primary-bright">
            {selected.outcome}
          </p>
        </div>
      ) : null}
    </fieldset>
  );
}
