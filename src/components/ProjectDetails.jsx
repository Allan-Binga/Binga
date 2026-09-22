export default function ProjectDetails({ children }) {
  return (
    <details className="border border-soft-neutral rounded overflow-hidden">
      <summary className="w-full bg-ivory px-4 py-3 flex items-center justify-between gap-3 font-label-meta text-label-meta text-charcoal hover:bg-pale-blush">
        <span>Project details</span>
        <span
          aria-hidden="true"
          className="material-symbols-outlined text-[18px] transition-transform indicator-icon"
        >
          expand_more
        </span>
      </summary>
      {children}
    </details>
  );
}
