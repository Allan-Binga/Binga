export default function MurandiProject() {
  return (
    <article className="bg-white border border-soft-neutral rounded p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-headline-sm text-headline-sm text-charcoal font-semibold">
            Murandi Apartments
          </span>
          <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-ivory border border-soft-neutral text-muted-gray">
            Full-stack web application
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-muted-gray">
          A full-stack project built with React, Node.js, Express, and
          PostgreSQL.
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          <span className="font-label-badge text-label-badge uppercase px-1.5 py-0.5 rounded bg-pale-blush text-burgundy">
            React
          </span>
          <span className="font-label-badge text-label-badge uppercase px-1.5 py-0.5 rounded bg-pale-blush text-burgundy">
            Node.js
          </span>
          <span className="font-label-badge text-label-badge uppercase px-1.5 py-0.5 rounded bg-pale-blush text-burgundy">
            Express
          </span>
          <span className="font-label-badge text-label-badge uppercase px-1.5 py-0.5 rounded bg-pale-blush text-burgundy">
            PostgreSQL
          </span>
          <span className="font-label-badge text-label-badge uppercase px-1.5 py-0.5 rounded bg-pale-blush text-burgundy">
            Nginx
          </span>
          <span className="font-label-badge text-label-badge uppercase px-1.5 py-0.5 rounded bg-pale-blush text-burgundy">
            PM2
          </span>
        </div>
      </div>
      <a
        className="inline-flex items-center gap-2 px-4 py-2 bg-ivory border border-soft-neutral hover:border-burgundy text-charcoal font-label-meta text-label-meta rounded transition-colors whitespace-nowrap"
        href="https://github.com/Allan-Binga/Murandi"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span
          aria-hidden="true"
          className="material-symbols-outlined text-[16px]"
        >
          terminal
        </span>
        <span>View Murandi Repository</span>
      </a>
    </article>
  );
}
