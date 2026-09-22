const certificateUrl = "https://moringa.my.salesforce-sites.com/certificateStatus?id=a0PQ200000BHR2l";

export default function About() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-start"
      id="about"
    >
      <div className="lg:col-span-8 space-y-4">
        <span className="font-label-meta text-label-meta text-burgundy uppercase tracking-wider">
          05 / Background
        </span>
        <h2 className="font-headline-lg text-headline-lg text-charcoal tracking-tight">
          About Allan Binga
        </h2>
        <p className="font-body-lg text-body-lg text-charcoal leading-relaxed">
          I’m a full-stack JavaScript engineer based in Nairobi, Kenya, with
          experience across application development, backend services, and
          production infrastructure. I’m comfortable taking work from
          requirements and relational data design through implementation,
          testing, and deployment.
        </p>
        <p className="font-body-md text-body-md text-muted-gray leading-relaxed">
          My work connects backend development with deployment: Node.js
          services, PostgreSQL databases, and Linux infrastructure using PM2,
          Nginx, and GitHub Actions.
        </p>
      </div>

      <div className="lg:col-span-4 bg-white border border-soft-neutral rounded p-6 space-y-4">
        <div className="font-label-meta text-label-meta text-muted-gray border-b border-soft-neutral pb-2">
          CREDENTIALS &amp; TRAINING
        </div>
        <div className="space-y-2">
          <span className="font-label-badge text-label-badge text-burgundy uppercase tracking-wide">
            Structured Program
          </span>
          <h3 className="font-headline-sm text-headline-sm text-charcoal font-semibold">
            DevOps Engineering Course
          </h3>
          <p className="font-label-meta text-label-meta text-muted-gray">
            Moringa School · Completed December 2024
          </p>
        </div>
        <a href={certificateUrl} target="_blank" rel="noopener noreferrer"
          className="block rounded" aria-label="Verify Moringa certificate (opens in a new tab)">
          <img src="/certificate-qr.svg" alt="QR code linking to Moringa certificate verification"
            width="232" height="232" loading="lazy" className="certificate-qr w-full max-w-[232px] mx-auto rounded" />
        </a>
        <p className="text-body-sm text-muted-gray">Scan the QR code or follow the link to view the certificate’s verification page.</p>
        <a href={certificateUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-body-md font-medium text-burgundy underline underline-offset-4">
          Verify certificate
          <span aria-hidden="true" className="material-symbols-outlined text-[18px]">open_in_new</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
