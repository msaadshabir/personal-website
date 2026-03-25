"use client";

import { useState, useEffect, useRef } from "react";
import { SITE_CONFIG } from "@/lib/constants";

const COPY_RESET_DELAY_MS = 2000;

export default function EmailButton(): React.JSX.Element {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setIsCopied(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(
        () => setIsCopied(false),
        COPY_RESET_DELAY_MS,
      );
    } catch {
      // Clipboard API unavailable or permission denied
    }
  };

  return (
    <button
      type="button"
      onClick={handleEmailClick}
      className="group font-medium text-foreground text-left flex items-center"
    >
      <span className="underline decoration-surface-border underline-offset-4 transition-colors group-hover:decoration-foreground">
        {isCopied ? (
          "Copied"
        ) : (
          <>
            <span className="inline group-hover:hidden">Email</span>
            <span className="hidden group-hover:inline">Copy</span>
          </>
        )}
      </span>
    </button>
  );
}
