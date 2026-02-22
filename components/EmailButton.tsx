"use client";

import { useState, useEffect, useRef } from "react";
import { SITE_CONFIG } from "@/lib/constants";

export default function EmailButton() {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setIsCopied(true);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button 
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
