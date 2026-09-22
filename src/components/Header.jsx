import MobileMenu from "./MobileMenu.jsx";
export default function Header() {
  return (
    <header className="site-header bg-surface border-b border-outline-variant docked full-width top-0 sticky z-50 transition-all duration-150">
      <div className="flex justify-between items-center w-full px-margin md:px-margin-tablet lg:px-margin-desktop max-w-[1240px] mx-auto h-16">
        <div className="flex flex-wrap items-center gap-3">
          <a
            className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface flex items-center gap-2"
            href="#"
          >
            Allan Binga
          </a>
          <span className="hidden sm:inline-block font-label-badge text-label-badge uppercase tracking-wider px-2 py-0.5 rounded border border-soft-neutral text-muted-gray bg-white">
            Full-Stack Engineer
          </span>
        </div>

        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-8"
        >
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-150 font-label-meta text-label-meta"
            href="#work"
          >
            Work
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-150 font-label-meta text-label-meta"
            href="#about"
          >
            About
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-150 font-label-meta text-label-meta"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-150 font-label-meta text-label-meta"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        <div className="flex flex-wrap items-center gap-3">
          <a
            aria-label="Allan Binga on GitHub"
            className="hidden sm:inline-flex items-center justify-center w-9 h-9 border border-soft-neutral bg-white hover:border-[#800020] text-charcoal rounded transition-colors"
            href="https://github.com/allan-binga"
            rel="noopener noreferrer"
            target="_blank"
            title="Allan Binga on GitHub"
          >
            <span
              aria-hidden="true"
              className="material-symbols-outlined text-[18px]"
            >
              terminal
            </span>
          </a>
          <a
            className="inline-flex items-center justify-center bg-burgundy-primary bg-burgundy-hover text-white text-body-sm font-medium px-4 py-2 rounded transition-all duration-150"
            href="mailto:allanbinga8@gmail.com"
          >
            Let's talk
          </a>
        </div>
      </div>
      <MobileMenu></MobileMenu>
    </header>
  );
}
