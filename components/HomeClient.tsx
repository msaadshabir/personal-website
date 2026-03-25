"use client";

import Link from "next/link";
import EmailButton from "@/components/EmailButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SITE_CONFIG } from "@/lib/constants";

const socialLinks = [
  {
    label: "LinkedIn",
    href: SITE_CONFIG.linkedin,
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    label: "GitHub",
    href: SITE_CONFIG.github,
    ariaLabel: "Visit GitHub profile",
  },
  {
    label: "Resume",
    href: SITE_CONFIG.resume,
    ariaLabel: "Download resume PDF",
  },
] as const;

export default function HomeClient(): React.JSX.Element {
  return (
    <main className="flex w-full min-h-screen flex-col items-center px-8">
      <div className="flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-base md:w-3/4 lg:w-1/2">
        <section className="flex flex-col gap-8 w-full max-w-[68ch]">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-end justify-between w-full">
              <h1 className="font-semibold tracking-[-0.04em] text-foreground">
                Hi, I&apos;m {SITE_CONFIG.name}
              </h1>
              <div className="mb-[6px]">
                <ThemeToggle />
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground ml-1 text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              I&apos;m studying Network Technology at{" "}
              <a
                href={SITE_CONFIG.schoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                <span>{SITE_CONFIG.school}</span>
                <span aria-hidden="true" className="text-current">
                  ↗
                </span>
              </a>
              , where I&apos;m building a foundation in systems, infrastructure,
              and practical software engineering.
            </p>
            <p className="text-lg leading-relaxed">
              My current focus is network architecture, protocol analysis, and
              low-level software, with an interest in building tools that are
              reliable, observable, and fast.
            </p>
            <p className="text-lg leading-relaxed">{SITE_CONFIG.status}</p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <EmailButton />
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                {link.label}
                <span aria-hidden="true" className="ml-0.5 text-current">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/work"
              className="font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Work
            </Link>
            <Link
              href="/projects"
              className="font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Projects
            </Link>
            <Link
              href="/writing"
              className="font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              Writing
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
