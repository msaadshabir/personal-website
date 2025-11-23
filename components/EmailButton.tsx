"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";

export default function EmailButton() {
  const [isCopied, setIsCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleEmailClick} 
      className="relative text-muted-foreground hover:text-foreground transition-colors"
    >
      <span className={isCopied ? "invisible" : "visible"}>Email</span>
      <span className={`absolute left-0 top-0 ${isCopied ? "visible" : "invisible"}`}>Copied</span>
    </button>
  );
}
