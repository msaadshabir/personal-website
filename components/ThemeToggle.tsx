"use client";

import React from 'react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-zinc-200 dark:bg-zinc-800 rounded-full p-0.5 shadow-sm">
        <div className="flex items-center">
          <button
            onClick={() => handleThemeChange('light')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              theme === 'light'
                ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
            title="Light mode"
          >
            Light
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              theme === 'dark'
                ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
            title="Dark mode"
          >
            Dark
          </button>
          <button
            onClick={() => handleThemeChange('system')}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
              theme === 'system'
                ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
            title="Follow system"
          >
            System
          </button>
        </div>
      </div>
    </div>
  );
}