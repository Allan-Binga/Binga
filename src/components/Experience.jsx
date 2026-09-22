export default function Experience() {
  return (
    <section className="space-y-8" id="experience">
      <div className="border-b border-soft-neutral pb-4">
        <span className="font-label-meta text-label-meta text-burgundy uppercase tracking-wider">
          04 / History
        </span>
        <h2 className="font-headline-lg text-headline-lg text-charcoal mt-1 tracking-tight">
          Experience
        </h2>
      </div>
      <div className="space-y-6">
        <div className="bg-white border border-soft-neutral rounded p-6 md:p-8 space-y-4 hover:border-[#800020]/30 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-soft-neutral pb-4">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-charcoal font-semibold">
                Backend &amp; DevOps Engineer
              </h3>
              <div className="font-label-meta text-label-meta text-burgundy mt-0.5">
                Querysoft Technologies · Remote
              </div>
            </div>
            <div className="font-label-meta text-label-meta text-muted-gray bg-ivory px-3 py-1 rounded border border-soft-neutral self-start md:self-auto">
              March 2024 – December 2025
            </div>
          </div>
          <ul className="font-body-md text-body-md text-charcoal space-y-2.5 list-disc list-inside">
            <li>
              Built and maintained Node.js/Express REST APIs backed by
              PostgreSQL.
            </li>
            <li>
              Configured Ubuntu servers, Nginx reverse proxies, HTTPS
              certificates, and PM2.
            </li>
            <li>Implemented GitHub Actions build and deployment workflows.</li>
            <li>
              Containerized services and supported database troubleshooting and
              releases.
            </li>
          </ul>
        </div>

        <div className="bg-white border border-soft-neutral rounded p-6 md:p-8 space-y-4 hover:border-[#800020]/30 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-soft-neutral pb-4">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-charcoal font-semibold">
                Backend &amp; DevOps Engineer
              </h3>
              <div className="font-label-meta text-label-meta text-burgundy mt-0.5">
                Independent Contract · Remote
              </div>
            </div>
            <div className="font-label-meta text-label-meta text-muted-gray bg-ivory px-3 py-1 rounded border border-soft-neutral self-start md:self-auto">
              2025
            </div>
          </div>
          <ul className="font-body-md text-body-md text-charcoal space-y-2.5 list-disc list-inside">
            <li>
              Developed backend services and supported deployment infrastructure
              for a private client engagement.
            </li>
            <li>
              Translated requirements into APIs, database changes, and
              deployable application updates.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
