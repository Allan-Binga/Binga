export default function EngineeringApproach() {
  return (
    <section className="space-y-8">
      <div className="border-b border-soft-neutral pb-4">
        <span className="font-label-meta text-label-meta text-burgundy uppercase tracking-wider">
          02 / Engineering approach
        </span>
        <h2 className="font-headline-lg text-headline-lg text-charcoal mt-1 tracking-tight">
          Building across the stack
        </h2>
        <p className="font-body-md text-body-md text-muted-gray max-w-2xl mt-1">
          From responsive interfaces to backend services, testing, and
          production operations.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        <div className="bg-white border border-soft-neutral rounded p-6 space-y-3">
          <div className="w-10 h-10 rounded border border-soft-neutral bg-ivory flex items-center justify-center text-burgundy">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[20px]"
            >
              web
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-charcoal font-semibold">
            Interfaces
          </h3>
          <p className="font-body-sm text-body-sm text-muted-gray leading-relaxed">
            Responsive web applications with React, JavaScript, HTML, CSS, and
            Tailwind CSS.
          </p>
          <div className="pt-2 font-label-badge text-label-badge text-muted-gray border-t border-soft-neutral">
            State · A11y · Component Scopes
          </div>
        </div>

        <div className="bg-white border border-soft-neutral rounded p-6 space-y-3">
          <div className="w-10 h-10 rounded border border-soft-neutral bg-ivory flex items-center justify-center text-burgundy">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[20px]"
            >
              database
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-charcoal font-semibold">
            Services and data
          </h3>
          <p className="font-body-sm text-body-sm text-muted-gray leading-relaxed">
            Node.js and Express APIs, relational database design, PostgreSQL and
            SQLite, plus experience with MongoDB.
          </p>
          <div className="pt-2 font-label-badge text-label-badge text-muted-gray border-t border-soft-neutral">
            Relational Schemas · Constraints · REST
          </div>
        </div>

        <div className="bg-white border border-soft-neutral rounded p-6 space-y-3">
          <div className="w-10 h-10 rounded border border-soft-neutral bg-ivory flex items-center justify-center text-burgundy">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[20px]"
            >
              rule
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-charcoal font-semibold">
            Quality and delivery
          </h3>
          <p className="font-body-sm text-body-sm text-muted-gray leading-relaxed">
            Jest, Git, GitHub Actions, Docker, and CI/CD pipelines.
          </p>
          <div className="pt-2 font-label-badge text-label-badge text-muted-gray border-t border-soft-neutral">
            Unit Testing · Automation · Builds
          </div>
        </div>

        <div className="bg-white border border-soft-neutral rounded p-6 space-y-3">
          <div className="w-10 h-10 rounded border border-soft-neutral bg-ivory flex items-center justify-center text-burgundy">
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[20px]"
            >
              settings_ethernet
            </span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-charcoal font-semibold">
            Production operations
          </h3>
          <p className="font-body-sm text-body-sm text-muted-gray leading-relaxed">
            Linux, Nginx, HTTPS certificates, PM2, Prometheus, and Grafana.
          </p>
          <div className="pt-2 font-label-badge text-label-badge text-muted-gray border-t border-soft-neutral">
            Reverse Proxies · SSL · Uptime
          </div>
        </div>
      </div>
    </section>
  );
}
