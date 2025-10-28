"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// Constants
const MAX_RETRIES = 3;
const INITIAL_DELAY = 100; // ms
const COPY_TIMEOUT = 2000; // ms

export function useEmailCopy(email: string) {
  const [emailCopied, setEmailCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyEmail = useCallback(async (e: React.MouseEvent, retries = 0): Promise<void> => {
    e.preventDefault();
    
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set new timeout with ref
      timeoutRef.current = setTimeout(() => {
        setEmailCopied(false);
        timeoutRef.current = null;
      }, COPY_TIMEOUT);
    } catch (err) {
      // Retry with exponential backoff
      if (retries < MAX_RETRIES) {
        const delay = INITIAL_DELAY * Math.pow(2, retries);
        await new Promise(resolve => setTimeout(resolve, delay));
        await copyEmail(e, retries + 1);
      } else {
        console.error("Failed to copy email after retries:", err);
      }
    }
  }, [email]);

  return { emailCopied, copyEmail };
}
