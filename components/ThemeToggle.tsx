"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-6 left-6 z-50">
      <div className="flex items-center gap-4 md:gap-8">
        <button
          onClick={() => handleThemeChange('light')}
          className={`text-xl md:text-2xl transition-colors ${
            theme === 'light'
              ? 'font-bold text-zinc-900 dark:text-zinc-50'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
          }`}
          title="Light mode"
        >
          light
        </button>
        <button
          onClick={() => handleThemeChange('dark')}
          className={`text-xl md:text-2xl transition-colors ${
            theme === 'dark'
              ? 'font-bold text-zinc-900 dark:text-zinc-50'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50'
          }`}
          title="Dark mode"
        >
          dark
        </button>
      </div>
    </div>
  );
}