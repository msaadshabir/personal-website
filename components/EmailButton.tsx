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
      timeoutRef.current = setTimeout(() => setIsCopied(false), COPY_RESET_DELAY_MS);
    } catch {
      // Clipboard API unavailable or permission denied
    }
  };

  return (
    <button
      type="button"
      onClick={handleEmailClick}
      className="relative font-medium text-muted-foreground hover:text-foreground transition-colors"
    >
      <span className={isCopied ? "invisible" : "visible"}>
        Email
        <span aria-hidden="true" className="text-current ml-0.5">↗</span>
      </span>
      <span className={`absolute left-0 top-0 ${isCopied ? "visible" : "invisible"}`}>Copied</span>
    </button>
  );
}
