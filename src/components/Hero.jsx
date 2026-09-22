export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-gutter-desktop items-start pt-4">
      <div className="lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white border border-soft-neutral rounded-full text-charcoal">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#800020] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#800020]"></span>
          </span>
          <span className="font-label-badge text-label-badge text-charcoal tracking-wide">
            Full-stack JavaScript engineer · Nairobi, Kenya · Available for
            engineering roles
          </span>
        </div>

        <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-charcoal tracking-tight">
          From database design to dependable interfaces.
        </h1>

        <p className="font-body-lg text-body-lg text-muted-gray leading-relaxed max-w-2xl">
          I’m Allan Binga. I build web applications with React, Node.js, and
          PostgreSQL, and handle the testing, delivery pipelines, and
          infrastructure that bring them into production.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <a
            className="inline-flex items-center gap-2 bg-burgundy-primary bg-burgundy-hover text-white px-5 py-3 rounded font-body-md text-body-md font-medium transition-all shadow-sm"
            href="#work"
          >
            <span>Explore my work</span>
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[16px]"
            >
              arrow_downward
            </span>
          </a>
          <a
            className="inline-flex items-center gap-2 bg-white border border-soft-neutral text-charcoal hover:border-[#800020] hover:bg-[#FAF7F2] px-5 py-3 rounded font-body-md text-body-md font-medium transition-colors"
            href="mailto:allanbinga8@gmail.com"
          >
            <span>Get in touch</span>
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[16px]"
            >
              mail
            </span>
          </a>
          <a
            className="inline-flex items-center gap-2 px-3 py-2 text-muted-gray hover:text-charcoal font-label-meta text-label-meta transition-colors"
            href="https://github.com/allan-binga"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[18px]"
            >
              verified
            </span>
            <span>github.com/allan-binga</span>
          </a>
        </div>
      </div>

      <div className="lg:col-span-5 bg-white border border-soft-neutral rounded p-6 shadow-[0_2px_4px_-1px_rgba(36,33,36,0.04)]">
        <div className="diagram-heading flex items-center justify-between border-b border-soft-neutral pb-3 mb-5">
          <span className="font-label-meta text-label-meta text-muted-gray">
            ACROSS THE STACK
          </span>
          <span className="font-label-badge text-label-badge text-burgundy bg-pale-blush px-2 py-0.5 rounded border border-[#800020]/20">
            BUILD → SHIP
          </span>
        </div>
        <div className="space-y-4">
          <div className="p-3 bg-ivory rounded border border-soft-neutral">
            <div className="text-[11px] font-label-meta text-muted-gray mb-2">
              APPLICATION PIPELINE
            </div>
            <div className="diagram-heading flex items-center justify-between font-label-code text-label-code text-charcoal">
              <span className="px-2 py-1 bg-white border border-soft-neutral rounded text-burgundy font-medium">
                React Interface
              </span>
              <span className="text-muted-gray">──→</span>
              <span className="px-2 py-1 bg-white border border-soft-neutral rounded text-charcoal">
                Node.js API
              </span>
              <span className="text-muted-gray">──→</span>
              <span className="px-2 py-1 bg-white border border-soft-neutral rounded text-charcoal">
                PostgreSQL
              </span>
            </div>
          </div>

          <div className="p-3 bg-white rounded border border-soft-neutral space-y-2">
            <div className="text-[11px] font-label-meta text-muted-gray">
              DELIVERY &amp; RUNTIME INFRASTRUCTURE
            </div>
            <div className="grid grid-cols-3 gap-2 text-center font-label-badge text-label-badge">
              <div className="p-2 bg-ivory border border-soft-neutral rounded text-charcoal">
                <div className="text-muted-gray text-[10px] uppercase">
                  Testing
                </div>
                <div className="font-medium mt-0.5">Jest Suites</div>
              </div>
              <div className="p-2 bg-ivory border border-soft-neutral rounded text-charcoal">
                <div className="text-muted-gray text-[10px] uppercase">
                  CI/CD Pipeline
                </div>
                <div className="font-medium mt-0.5">GitHub Actions</div>
              </div>
              <div className="p-2 bg-ivory border border-soft-neutral rounded text-charcoal">
                <div className="text-muted-gray text-[10px] uppercase">
                  Runtime
                </div>
                <div className="font-medium mt-0.5">Nginx + PM2</div>
              </div>
            </div>
          </div>

          <div className="pt-2 text-muted-gray font-label-meta text-label-meta diagram-heading flex items-center justify-between border-t border-soft-neutral">
            <span>Linux infrastructure</span>
            <span className="flex items-center gap-1 text-charcoal">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-700"></span>
              Delivery &amp; operations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
