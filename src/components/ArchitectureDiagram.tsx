const HIGHLIGHT_PATTERN =
  /AI|ML|FinBERT|XGBoost|Random Forest|watsonx|Granite|DeepSeek|Risk Scoring|Predictions|Chat Completion/i;

export function ArchitectureDiagram({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-col" aria-label="System architecture">
      {steps.map((step, i) => {
        const highlighted = HIGHLIGHT_PATTERN.test(step);
        return (
          <li key={step} className="flex flex-col">
            <div
              className={
                "rounded-md border-l-2 bg-panel px-4 py-3 text-sm " +
                (highlighted ? "border-l-signal text-ink" : "border-l-rule text-inkMuted")
              }
            >
              {step}
            </div>
            {i < steps.length - 1 ? (
              <div className="flex h-6 items-center pl-4 text-inkFaint" aria-hidden="true">
                ↓
              </div>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
