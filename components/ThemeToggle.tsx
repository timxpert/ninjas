"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentTheme =
      document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    setTheme(currentTheme);

    const handleThemeChange = () => {
      const updated =
        document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      setTheme(updated);
    };

    window.addEventListener("theme-change", handleThemeChange);
    return () => window.removeEventListener("theme-change", handleThemeChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event("theme-change"));
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`w-9 h-9 rounded-full flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition-all ${className}`}
      >
        <Moon className="w-4 h-4 opacity-50" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={`group relative inline-flex items-center gap-2 rounded-full p-2 border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-2)] text-[var(--color-text)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)] ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-[#C8FF3D] transition-transform duration-200 group-hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-[var(--color-link)] transition-transform duration-200 group-hover:-rotate-12" />
        )}
      </div>
      {showLabel && (
        <span className="text-xs font-medium pr-1 text-[var(--color-muted)] group-hover:text-[var(--color-text)]">
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </span>
      )}
    </button>
  );
}
