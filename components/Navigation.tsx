"use client";

import { memo, useCallback } from "react";
import Link from "next/link";
import { NAV_LINK_STYLES } from "@/lib/constants";

interface NavigationProps {
  currentPage: "home" | "projects";
}

function NavigationComponent({ currentPage }: NavigationProps) {
  const getLinkClassName = useCallback(
    (isActive: boolean) =>
      `${NAV_LINK_STYLES.base} ${isActive ? NAV_LINK_STYLES.active : NAV_LINK_STYLES.inactive}`,
    []
  );

  return (
    <nav className="flex justify-end items-center px-4 md:px-8 py-6 pr-4 md:pr-8">
      <div className="flex gap-4 md:gap-8">
        <Link
          href="/"
          className={getLinkClassName(currentPage === "home")}
          aria-label="Home page"
          aria-current={currentPage === "home" ? "page" : undefined}
        >
          home
        </Link>
        <Link
          href="/projects"
          className={getLinkClassName(currentPage === "projects")}
          aria-label="Projects page"
          aria-current={currentPage === "projects" ? "page" : undefined}
        >
          projects
        </Link>
      </div>
    </nav>
  );
}

export const Navigation = memo(NavigationComponent);
