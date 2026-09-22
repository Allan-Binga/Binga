import PrestigeProject from "./PrestigeProject.jsx";
import MonitoringProject from "./MonitoringProject.jsx";
import FastStoreProject from "./FastStoreProject.jsx";
import MurandiProject from "./MurandiProject.jsx";
export default function SelectedWork() {
  return (
    <section className="space-y-10" id="work">
      <div className="border-b border-soft-neutral pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-label-meta text-label-meta text-burgundy uppercase tracking-wider">
            01 / Engineering Portfolio
          </span>
          <h2 className="font-headline-lg text-headline-lg text-charcoal mt-1 tracking-tight">
            Selected Work
          </h2>
        </div>
        <p className="font-body-md text-body-md text-muted-gray max-w-md">
          Applications and APIs spanning React interfaces, database design, and
          production deployment.
        </p>
      </div>

      <PrestigeProject></PrestigeProject>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <MonitoringProject></MonitoringProject>

        <FastStoreProject></FastStoreProject>
      </div>

      <MurandiProject></MurandiProject>
    </section>
  );
}
