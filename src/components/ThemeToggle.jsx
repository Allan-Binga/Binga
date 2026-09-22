import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    function syncTheme() {
      let saved;
      try { saved = localStorage.getItem("portfolio-theme"); } catch { /* Use system preference. */ }
      const next = saved === "dark" || (saved !== "light" && media.matches);
      document.documentElement.classList.toggle("dark", next);
      setDark(next);
    }
    media.addEventListener("change", syncTheme);
    window.addEventListener("storage", syncTheme);
    return () => {
      media.removeEventListener("change", syncTheme);
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("portfolio-theme", next ? "dark" : "light"); } catch { /* Keep working without storage. */ }
  }

  return (
    <button type="button" onClick={toggleTheme}
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      title={`Switch to ${dark ? "light" : "dark"} theme`}
      className="inline-flex shrink-0 items-center justify-center w-11 h-11 rounded border border-soft-neutral bg-white text-charcoal">
      <span aria-hidden="true" className="material-symbols-outlined">{dark ? "light_mode" : "dark_mode"}</span>
    </button>
  );
}
