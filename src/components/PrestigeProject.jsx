import ProjectCard from "./ProjectCard.jsx";

export default function PrestigeProject() {
  return (
    <ProjectCard
      title="Prestige Girls Hostel Management System"
      category="Full-stack Application"
      description="A platform bringing tenant, room, booking, visitor, payment, and issue-report workflows into one management system."
      repository="https://github.com/Allan-Binga/Prestige-Hostel"
      stack={["React", "Node.js", "Express", "PostgreSQL", "Jest", "GitHub Actions"]}
      site="https://prestige.skirill.org"
    >
<div className="p-4 space-y-4"><div className="bg-ivory border border-soft-neutral rounded p-4 md:p-6 space-y-4">
        <div className="diagram-heading flex items-center justify-between text-muted-gray font-label-meta text-label-meta border-b border-soft-neutral pb-2">
          <span>HOSTEL MANAGEMENT WORKFLOWS</span>
          <span>ILLUSTRATIVE OVERVIEW</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 font-label-code text-[12px]">
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
      </div>
    </ProjectCard>
  );
}
