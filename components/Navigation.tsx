"use client";

import Link from "next/link";

interface NavigationProps {
  currentPage: "home" | "projects";
}

export function Navigation({ currentPage }: NavigationProps) {
  return (
    <nav className="flex justify-end items-center px-4 md:px-8 py-6 pr-4 md:pr-8">
      <div className="flex gap-4 md:gap-8">
        <Link
          href="/"
          className={`text-xl md:text-2xl transition-colors ${
            currentPage === "home"
              ? "font-bold text-zinc-900 dark:text-zinc-50"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
          }`}
          aria-label="Home page"
          aria-current={currentPage === "home" ? "page" : undefined}
        >
          home
        </Link>
        <Link
          href="/projects"
          className={`text-xl md:text-2xl transition-colors ${
            currentPage === "projects"
              ? "font-bold text-zinc-900 dark:text-zinc-50"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
          }`}
          aria-label="Projects page"
          aria-current={currentPage === "projects" ? "page" : undefined}
        >
          projects
        </Link>
      </div>
    </nav>
  );
}
