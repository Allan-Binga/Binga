import ProjectCard from "./ProjectCard.jsx";

export default function MonitoringProject() {
  return (
    <ProjectCard
      title="Server Monitoring Platform"
      category="Full-stack Observability"
      description="A dashboard for observing Linux server resources and PM2-managed applications."
      repository="https://github.com/Allan-Binga/Monitoring-Tool"
      stack={["React", "Node.js", "Express", "Docker", "PM2", "Prometheus", "Grafana"]}
    >
<div className="p-4 space-y-4"><div className="bg-ivory border border-soft-neutral rounded p-4 space-y-3 font-label-meta text-[11px]">
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
        </div>
    </ProjectCard>
  );
}
