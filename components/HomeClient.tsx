"use client";

import { useState } from "react";
import EmailButton from "@/components/EmailButton";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { EXPERIENCE, PROJECTS, SITE_CONFIG, WRITING } from "@/lib/constants";

type OpenSection = "work" | "projects" | "writing" | null;

type AccordionSectionProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

function AccordionSection({ title, isOpen, onToggle, children }: AccordionSectionProps): React.JSX.Element {
  return (
    <section className="flex w-full flex-col gap-8">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-muted-foreground transition-colors w-fit min-h-[44px]"
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Collapse" : "Expand"} ${title} section`}
        type="button"
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
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen ? <div className="flex w-full flex-col gap-2">{children}</div> : null}
    </section>
  );
}

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
  const [openSection, setOpenSection] = useState<OpenSection>(null);

  return (
    <main className="flex w-full min-h-screen flex-col items-center px-8">
      <div className="flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-base md:w-3/4 lg:w-1/2">
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold tracking-[-0.02em] text-foreground">
              Hi, I&apos;m {SITE_CONFIG.name}
            </h2>
            <div className="flex items-center gap-2 text-muted-foreground ml-1">
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
              , where I&apos;m building a foundation in systems, infrastructure, and practical software engineering.
            </p>
            <p className="text-lg leading-relaxed">
              My current focus is network architecture, protocol analysis, and low-level software, with an interest in building tools that are reliable, observable, and fast.
            </p>
            <p className="text-lg leading-relaxed">{SITE_CONFIG.status}</p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <EmailButton />
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span aria-hidden="true" className="ml-0.5 text-current">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        <AccordionSection
          title="Work"
          isOpen={openSection === "work"}
          onToggle={() => setOpenSection((current) => (current === "work" ? null : "work"))}
        >
          {EXPERIENCE.map((item) => (
            <ExperienceCard key={`${item.company}-${item.position}`} {...item} />
          ))}
        </AccordionSection>

        <AccordionSection
          title="Projects"
          isOpen={openSection === "projects"}
          onToggle={() => setOpenSection((current) => (current === "projects" ? null : "projects"))}
        >
          {PROJECTS.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.name}
              date={item.tags.join(" • ")}
              description={item.description}
              link={item.url}
            />
          ))}
        </AccordionSection>

        <AccordionSection
          title="Writing"
          isOpen={openSection === "writing"}
          onToggle={() => setOpenSection((current) => (current === "writing" ? null : "writing"))}
        >
          {WRITING.length > 0 ? (
            WRITING.map((item) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                date={item.publishedAt}
                description={item.description}
                link={item.url}
              />
            ))
          ) : (
            <div className="rounded-lg p-4">
              <p className="font-medium text-muted-foreground">
                Essays, technical notes, and lab write-ups will appear here soon.
              </p>
            </div>
          )}
        </AccordionSection>
      </div>
    </main>
  );
}
