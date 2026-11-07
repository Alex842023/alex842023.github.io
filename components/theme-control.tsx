"use client";
import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
const KEY = "surya.portfolio.theme";
function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light" || value === "system";
}
function applyTheme(choice: Theme) {
  const resolved = choice === "system"
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : choice;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.style.colorScheme = resolved;
}
export default function ThemeControl() {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    let choice: Theme = "dark";
    try { const saved = localStorage.getItem(KEY); if (isTheme(saved)) choice = saved; } catch {}
    setTheme(choice);
    applyTheme(choice);
    const sync = (event: StorageEvent) => {
      if (event.key === KEY) {
        const next = isTheme(event.newValue) ? event.newValue : "dark";
        setTheme(next);
        applyTheme(next);
      }
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystem = () => { if (theme === "system") applyTheme("system"); };
    media.addEventListener("change", syncSystem);
    return () => media.removeEventListener("change", syncSystem);
  }, [theme]);
  return <label className="theme-control"><span className="visually-hidden">Color theme</span>
    <select aria-label="Color theme" value={theme} onChange={event => {
      const choice = event.target.value as Theme;
      setTheme(choice);
      applyTheme(choice);
      try { localStorage.setItem(KEY, choice); } catch {}
    }}><option value="dark">Dark</option><option value="light">Light</option><option value="system">System</option></select>
  </label>;
}
