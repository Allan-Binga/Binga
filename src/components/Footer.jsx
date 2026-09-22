export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant docked full-width bottom-0 mt-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-margin md:px-margin-tablet lg:px-margin-desktop py-space-lg max-w-[1240px] mx-auto gap-space-md">
        <div className="space-y-1">
          <p className="font-label-meta text-label-meta text-on-surface-variant">
            © {new Date().getFullYear()} Allan Binga. Full-stack JavaScript
            engineer · Nairobi, Kenya.
          </p>
        </div>

        <nav
          aria-label="Footer Quick Links"
          className="flex flex-wrap items-center gap-6"
        >
          <a
            className="text-on-surface-variant font-mono text-label-meta hover:text-primary transition-colors duration-150"
            href="#work"
          >
            Selected work
          </a>
          <a
            className="text-on-surface-variant font-mono text-label-meta hover:text-primary transition-colors duration-150"
            href="https://github.com/allan-binga"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant font-mono text-label-meta hover:text-primary transition-colors duration-150"
            href="https://www.linkedin.com/in/allan-binga-772b99212"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
