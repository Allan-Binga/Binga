import ProjectDetails from "./ProjectDetails.jsx";

export default function ProjectCard({ title, category, description, stack, site, repository, children }) {
  return (
    <article className="bg-white border border-soft-neutral rounded p-6 flex flex-col gap-5 h-full min-w-0">
      <div className="space-y-3">
        <p className="font-label-meta text-label-meta text-burgundy uppercase tracking-wide">{category}</p>
        <h3 className="font-headline-md text-headline-md text-charcoal font-semibold">{title}</h3>
        <p className="font-body-md text-body-md text-muted-gray">{description}</p>
      </div>
      <ul aria-label={`${title} technologies`} className="flex flex-wrap gap-2">
        {stack.map((technology) => (
          <li key={technology} className="font-label-badge text-label-badge uppercase px-2 py-1 rounded bg-pale-blush text-burgundy">{technology}</li>
        ))}
      </ul>
      <div className="mt-auto space-y-4 pt-4">
        <div className="flex flex-wrap gap-3">
          {[
            ...(site ? [{ href: site, label: "Site", icon: "language" }] : []),
            { href: repository, label: "Source Code", icon: "code" },
          ].map(({ href, label, icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={`${title}: ${label} (opens in a new tab)`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-ivory border border-soft-neutral hover:border-burgundy text-charcoal font-label-meta text-label-meta rounded transition-colors">
              <span aria-hidden="true" className="material-symbols-outlined text-[16px]">{icon}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
        <ProjectDetails>{children}</ProjectDetails>
      </div>
    </article>
  );
}
