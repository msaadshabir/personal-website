"use client";

import { useEffect, useState, memo } from 'react';
import { useTheme } from './ThemeProvider';
import { SunIcon, MoonIcon } from './Icons';

function ThemeToggleComponent() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute top-6 left-6 z-50">
      <button
        onClick={toggleTheme}
        className="text-zinc-900 dark:text-zinc-50 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors duration-200"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
}

export const ThemeToggle = memo(ThemeToggleComponent);