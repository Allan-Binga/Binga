import ProjectDetails from "./ProjectDetails.jsx";
export default function MonitoringProject() {
  return (
    <article className="bg-white border border-soft-neutral rounded p-6 hover:border-[#800020]/40 transition-colors shadow-[0_2px_4px_-1px_rgba(36,33,36,0.02)] flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <div className="diagram-heading flex items-center justify-between">
          <span className="font-label-meta text-label-meta text-muted-gray">
            Full-stack Observability
          </span>
          <a
            className="font-label-meta text-label-meta text-burgundy hover:underline flex items-center gap-1"
            href="https://github.com/Allan-Binga/Monitoring-Tool"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Repository</span>
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[14px]"
            >
              arrow_outward
            </span>
          </a>
        </div>
        <div className="space-y-1.5">
          <h3 className="font-headline-sm text-headline-sm text-charcoal font-semibold">
            Server Monitoring Platform
          </h3>
          <p className="font-body-md text-body-md text-muted-gray">
            A dashboard for observing Linux server resources and PM2-managed
            applications.
          </p>
        </div>

        <div className="bg-ivory border border-soft-neutral rounded p-4 space-y-3 font-label-meta text-[11px]">
          <div className="diagram-heading flex items-center justify-between text-muted-gray border-b border-soft-neutral pb-1.5">
            <span>SERVER RESOURCE METRICS</span>
            <span>ILLUSTRATIVE</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 bg-white border border-soft-neutral rounded">
              <div className="text-muted-gray">CPU LOAD &amp; CORES</div>
              <div className="font-label-code text-charcoal mt-1">
                CPU metrics
              </div>
            </div>
            <div className="p-2 bg-white border border-soft-neutral rounded">
              <div className="text-muted-gray">MEMORY FOOTPRINT</div>
              <div className="font-label-code text-charcoal mt-1">
                Memory metrics
              </div>
            </div>
            <div className="p-2 bg-white border border-soft-neutral rounded">
              <div className="text-muted-gray">DISK I/O &amp; MOUNTS</div>
              <div className="font-label-code text-charcoal mt-1">
                Disk metrics
              </div>
            </div>
            <div className="p-2 bg-white border border-soft-neutral rounded">
              <div className="text-muted-gray">PM2 DAEMON STATUS</div>
              <div className="font-label-code text-charcoal mt-1">
                PM2 application metrics
              </div>
            </div>
          </div>
        </div>
        <p className="font-body-sm text-body-sm text-charcoal leading-relaxed">
          Built Express endpoints for CPU, memory, disk, network, uptime, and
          PM2 metrics, created the React dashboard, containerized services, and
          automated deployment with GitHub Actions.
        </p>
      </div>
      <div className="space-y-4 pt-4 border-t border-soft-neutral">
        <div className="flex flex-wrap gap-1.5">
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
            Docker
          </span>
          <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
            PM2
          </span>
          <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
            Prometheus
          </span>
          <span className="font-label-badge text-label-badge uppercase px-2 py-0.5 rounded bg-pale-blush text-burgundy border border-[#800020]/15">
            Grafana
          </span>
        </div>

        <ProjectDetails>
          <div
            className="p-4 bg-white border-t border-soft-neutral space-y-2 font-body-sm text-body-sm text-muted-gray"
            id="project-2-details"
          >
            <p>
              <strong className="text-charcoal">Purpose:</strong>Observe Linux
              server resources and PM2-managed applications in a React
              dashboard.
            </p>
            <p>
              <strong className="text-charcoal">Implementation:</strong>Express
              endpoints expose CPU, memory, disk, network, uptime, and PM2
              metrics. Services are containerized, with deployment automated
              through GitHub Actions.
            </p>
          </div>
        </ProjectDetails>
      </div>
    </article>
  );
}
