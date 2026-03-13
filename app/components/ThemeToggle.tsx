"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 border border-gray-200 dark:border-gray-800 sharp-button" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all sharp-button text-slate-600 dark:text-slate-400"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 animate-in zoom-in duration-300" />
      ) : (
        <Moon className="w-5 h-5 animate-in zoom-in duration-300" />
      )}
    </button>
  );
}
