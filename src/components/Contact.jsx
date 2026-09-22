export default function Contact() {
  return (
    <section
      className="bg-white border border-soft-neutral rounded p-8 md:p-12 space-y-8"
      id="contact"
    >
      <div className="max-w-2xl space-y-2">
        <span className="font-label-meta text-label-meta text-burgundy uppercase tracking-wider">
          06 / Contact
        </span>
        <h2 className="font-headline-lg text-headline-lg text-charcoal tracking-tight">
          Let’s build something useful.
        </h2>
        <p className="font-body-lg text-body-lg text-muted-gray">
          Have a full-stack engineering opportunity or a project to discuss? Get
          in touch.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          className="inline-flex items-center gap-2 bg-burgundy-primary bg-burgundy-hover text-white px-6 py-3.5 rounded font-body-md text-body-md font-medium transition-all shadow-sm"
          href="mailto:allanbinga8@gmail.com"
        >
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[18px]"
          >
            mail
          </span>
          <span>Email: allanbinga8@gmail.com</span>
        </a>
        <a
          className="inline-flex items-center gap-2 bg-ivory border border-soft-neutral text-charcoal hover:border-[#800020] px-5 py-3.5 rounded font-label-meta text-label-meta transition-colors"
          href="https://github.com/allan-binga"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[18px]"
          >
            terminal
          </span>
          <span>GitHub: allan-binga</span>
        </a>
        <a
          className="inline-flex items-center gap-2 bg-ivory border border-soft-neutral text-charcoal hover:border-[#800020] px-5 py-3.5 rounded font-label-meta text-label-meta transition-colors"
          href="https://www.linkedin.com/in/allan-binga-772b99212"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span
            aria-hidden="true"
            className="material-symbols-outlined text-[18px]"
          >
            person
          </span>
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
