"use client";

import { memo } from "react";
import { SITE_CONFIG, FOOTER_LINK_STYLES } from "@/lib/constants";
import { useEmailCopy } from "@/hooks/useEmailCopy";

function FooterComponent() {
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
          className={`${FOOTER_LINK_STYLES} cursor-pointer bg-transparent border-none p-0 inline-block w-[4.5rem] text-left`}
          aria-label="Copy email address to clipboard"
        >
          {emailCopied ? "copied!" : "email"}
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

export const Footer = memo(FooterComponent);
