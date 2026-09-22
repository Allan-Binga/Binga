import { useRef, useState } from "react";

const links = ["Work", "About", "Experience", "Contact"];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  function handleEscape(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      toggleRef.current?.focus();
    }
  }

  return (
    <div
      className="md:hidden border-t border-soft-neutral px-margin py-2"
      onKeyDown={handleEscape}
    >
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="flex w-full items-center justify-between min-h-11 font-label-meta text-label-meta text-burgundy"
        onClick={() => setOpen(!open)}
      >
        <span>Explore portfolio</span>
        <span aria-hidden="true" className="material-symbols-outlined">
          {open ? "close" : "menu"}
        </span>
      </button>
      <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open}>
        {links.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="block py-3 text-body-md hover:text-burgundy"
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
