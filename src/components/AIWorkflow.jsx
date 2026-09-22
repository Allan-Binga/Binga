export default function AIWorkflow() {
  return (
    <section className="bg-white border border-soft-neutral rounded p-6 md:p-8 space-y-6">
      <div className="border-b border-soft-neutral pb-4 space-y-1">
        <span className="font-label-meta text-label-meta text-burgundy uppercase tracking-wider">
          03 / Tooling &amp; Methodology
        </span>
        <h2 className="font-headline-lg text-headline-lg text-charcoal tracking-tight">
          AI-assisted development, backed by engineering judgment
        </h2>
        <p className="font-body-md text-body-md text-muted-gray max-w-3xl">
          I use Codex for requirements analysis, debugging, code review, and
          test generation. My growing focus is structured model evaluation and
          benchmark-driven engineering.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="p-5 bg-ivory rounded border border-soft-neutral space-y-3">
          <div className="diagram-heading flex items-center justify-between">
            <h3 className="font-headline-sm text-headline-sm text-charcoal font-semibold">
              Current Practice
            </h3>
            <span className="font-label-badge text-label-badge text-burgundy bg-pale-blush px-2 py-0.5 rounded border border-[#800020]/20">
              Current practice
            </span>
          </div>
          <div className="font-label-code text-[12px] text-charcoal space-y-1.5">
            <div>• Codex</div>
            <div>• Prompt design and requirements analysis</div>
            <div>• Code evaluation and review</div>
            <div>• Test generation</div>
            <div>• Debugging</div>
          </div>
          <p className="font-body-sm text-body-sm text-muted-gray pt-2 border-t border-soft-neutral">
            AI assistance supports implementation, with code review and testing
            guiding delivery.
          </p>
        </div>

        <div className="p-5 bg-ivory rounded border border-soft-neutral space-y-3">
          <div className="diagram-heading flex items-center justify-between">
            <h3 className="font-headline-sm text-headline-sm text-charcoal font-semibold">
              Developing Focus
            </h3>
            <span className="font-label-badge text-label-badge text-charcoal bg-white px-2 py-0.5 rounded border border-soft-neutral">
              Exploration
            </span>
          </div>
          <div className="font-label-code text-[12px] text-charcoal space-y-1.5">
            <div>• Structured model evaluation</div>
            <div>• Benchmark-driven engineering</div>
          </div>
          <p className="font-body-sm text-body-sm text-muted-gray pt-2 border-t border-soft-neutral">
            A growing interest in evaluating model outputs with clear tasks and
            measurable criteria.
          </p>
        </div>
      </div>
    </section>
  );
}
