import ProjectDetails from "./ProjectDetails.jsx";
export default function PrestigeProject() {
  return (
    <article className="bg-white border border-soft-neutral rounded p-6 md:p-8 hover:border-[#800020]/40 transition-colors shadow-[0_2px_4px_-1px_rgba(36,33,36,0.02)] space-y-6">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-soft-neutral pb-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-label-badge text-label-badge uppercase tracking-wider px-2.5 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/20 font-medium">
              Featured Application
            </span>
            <span className="font-label-meta text-label-meta text-muted-gray">
              Full-stack Application
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md text-charcoal font-semibold">
            Prestige Girls Hostel Management System
          </h3>
          <p className="font-body-md text-body-md text-muted-gray max-w-3xl">
            A platform bringing tenant, room, booking, visitor, payment, and
            issue-report workflows into one management system.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
          <a
            className="inline-flex items-center gap-2 px-4 py-2 bg-ivory border border-soft-neutral hover:border-charcoal text-charcoal font-label-meta text-label-meta rounded transition-colors"
            href="https://github.com/Allan-Binga/Prestige-Hostel"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[16px]"
            >
              code
            </span>
            <span>Source Code</span>
          </a>
        </div>
      </div>

      <div className="bg-ivory border border-soft-neutral rounded p-4 md:p-6 space-y-4">
        <div className="diagram-heading flex items-center justify-between text-muted-gray font-label-meta text-label-meta border-b border-soft-neutral pb-2">
          <span>HOSTEL MANAGEMENT WORKFLOWS</span>
          <span>ILLUSTRATIVE OVERVIEW</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 font-label-code text-[12px]">
          <div className="p-3 bg-white border border-soft-neutral rounded text-charcoal">
            <div className="text-burgundy font-medium">01. Tenants</div>
            <div className="text-[11px] text-muted-gray mt-1">
              Tenant management
            </div>
          </div>
          <div className="p-3 bg-white border border-soft-neutral rounded text-charcoal">
            <div className="text-burgundy font-medium">02. Rooms</div>
            <div className="text-[11px] text-muted-gray mt-1">
              Capacity &amp; allocations
            </div>
          </div>
          <div className="p-3 bg-white border border-soft-neutral rounded text-charcoal">
            <div className="text-burgundy font-medium">03. Bookings</div>
            <div className="text-[11px] text-muted-gray mt-1">
              Verification queue
            </div>
          </div>
          <div className="p-3 bg-white border border-soft-neutral rounded text-charcoal">
            <div className="text-burgundy font-medium">04. Visitors</div>
            <div className="text-[11px] text-muted-gray mt-1">Access logs</div>
          </div>
          <div className="p-3 bg-white border border-soft-neutral rounded text-charcoal">
            <div className="text-burgundy font-medium">05. Payments</div>
            <div className="text-[11px] text-muted-gray mt-1">
              Ledgers &amp; records
            </div>
          </div>
          <div className="p-3 bg-white border border-soft-neutral rounded text-charcoal">
            <div className="text-burgundy font-medium">06. Issue Reports</div>
            <div className="text-[11px] text-muted-gray mt-1">
              Maintenance triage
            </div>
          </div>
        </div>
      </div>

      <p className="font-body-md text-body-md text-charcoal leading-relaxed">
        Implemented React interfaces and Node.js APIs with PostgreSQL,
        role-based administration, and secure cookie authentication. Deployed
        the application behind Nginx with PM2, HTTPS, and GitHub Actions.
      </p>

      <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-soft-neutral">
        <span className="font-label-badge text-label-badge text-muted-gray mr-2 uppercase">
          Stack:
        </span>
        <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
          React
        </span>
        <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
          Node.js
        </span>
        <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
          Express
        </span>
        <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
          PostgreSQL
        </span>
        <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
          Jest
        </span>
        <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
          GitHub Actions
        </span>
      </div>

      <ProjectDetails>
        <div
          className="p-5 bg-white border-t border-soft-neutral space-y-4 font-body-sm text-body-sm text-muted-gray"
          id="project-1-details"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-ivory rounded border border-soft-neutral space-y-1">
              <div className="font-label-meta text-[11px] uppercase text-burgundy font-medium">
                Purpose
              </div>
              <p>
                Bring tenant, room, booking, visitor, payment, and issue-report
                workflows into one management system.
              </p>
            </div>
            <div className="p-3 bg-ivory rounded border border-soft-neutral space-y-1">
              <div className="font-label-meta text-[11px] uppercase text-burgundy font-medium">
                Implementation
              </div>
              <p>
                React interfaces and Node.js APIs backed by PostgreSQL, with
                role-based administration and secure cookie authentication.
              </p>
            </div>
            <div className="p-3 bg-ivory rounded border border-soft-neutral space-y-1">
              <div className="font-label-meta text-[11px] uppercase text-burgundy font-medium">
                Deployment &amp; Ops
              </div>
              <p>Deployed behind Nginx with PM2, HTTPS, and GitHub Actions.</p>
            </div>
          </div>
          <div className="pt-2 diagram-heading flex items-center justify-between border-t border-soft-neutral font-label-meta text-label-meta">
            <span>
              Repository:
              <a
                className="text-burgundy underline hover:text-charcoal"
                href="https://github.com/Allan-Binga/Prestige-Hostel"
                rel="noopener noreferrer"
                target="_blank"
              >
                github.com/Allan-Binga/Prestige-Hostel
              </a>
            </span>
            <span className="text-muted-gray">Full-Stack Application</span>
          </div>
        </div>
      </ProjectDetails>
    </article>
  );
}
