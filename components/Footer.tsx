"use client";

import { SITE_CONFIG, FOOTER_LINK_STYLES } from "@/lib/constants";
import { useEmailCopy } from "@/hooks/useEmailCopy";

export function Footer() {
  const { emailCopied, copyEmail } = useEmailCopy(SITE_CONFIG.email);

  return (
    <footer className="px-4 md:px-8 py-4 md:py-6 pb-8 md:pb-6">
      <div className="flex flex-wrap gap-4 md:gap-8">
        <a
          href={SITE_CONFIG.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={FOOTER_LINK_STYLES}
          aria-label="Download resume (opens in new tab)"
        >
          resume
        </a>
        <button
          onClick={copyEmail}
          className={`relative ${FOOTER_LINK_STYLES} cursor-pointer bg-transparent border-none p-0`}
          aria-label="Copy email address to clipboard"
        >
          email
          {emailCopied && (
            <span
              className="absolute -top-10 left-0 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm px-3 py-2 rounded shadow-lg animate-fade-in whitespace-nowrap"
              role="status"
              aria-live="polite"
            >
              Copied!
            </span>
          )}
        </button>
        <a
          href={SITE_CONFIG.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={FOOTER_LINK_STYLES}
          aria-label="LinkedIn profile (opens in new tab)"
        >
          linkedin
        </a>
        <a
          href={SITE_CONFIG.github}
          target="_blank"
          rel="noopener noreferrer"
          className={FOOTER_LINK_STYLES}
          aria-label="GitHub profile (opens in new tab)"
        >
          github
        </a>
      </div>
    </footer>
  );
}
