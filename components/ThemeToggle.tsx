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
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-lg p-1 shadow-sm">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => handleThemeChange('light')}
            className={`px-2 py-1 text-xs rounded ${
              theme === 'light'
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            title="Light mode"
          >
            Light
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className={`px-2 py-1 text-xs rounded ${
              theme === 'dark'
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            title="Dark mode"
          >
            Dark
          </button>
          <button
            onClick={() => handleThemeChange('system')}
            className={`px-2 py-1 text-xs rounded ${
              theme === 'system'
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
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