"use client";

import { useState } from "react";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="flex w-full flex-col gap-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-muted-foreground transition-colors w-fit min-h-[44px]"
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Collapse" : "Expand"} ${title} section`}
      >
        <span>{title}</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isOpen ? "rotate-180" : undefined}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <div className="flex w-full flex-col gap-2">{children}</div>
      )}
    </section>
  );
}
