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
      </div>
    </section>
  );
}
