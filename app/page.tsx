import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import EmailButton from "@/components/EmailButton";
import SectionNavigation from "@/components/SectionNavigation";
import { EXPERIENCE, PROJECTS, SITE_CONFIG, WRITING } from "@/lib/constants";

const sectionItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Writing", href: "#writing", id: "writing" },
] as const;

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

interface SectionProps {
  id: string;
  title: string;
  className: string;
  children: React.ReactNode;
}

function MobileSectionHeader({ title }: Pick<SectionProps, "title">): React.JSX.Element {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 border-b border-[color:var(--surface-border)] bg-[color:var(--header-surface)] px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
      <div className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-foreground">{title}</div>
    </div>
  );
}

function ContentSection({ id, title, className, children }: SectionProps): React.JSX.Element {
  return (
    <section id={id} className={className}>
      <h2 className="sr-only">{title}</h2>
      <MobileSectionHeader title={title} />
      {children}
    </section>
  );
}

export default function Home(): React.JSX.Element {

  return (
    <main className="mx-auto min-h-screen w-full max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-12">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div>
              <h1 className="block tracking-tight text-4xl font-bold text-foreground sm:text-5xl">
                {SITE_CONFIG.name}
              </h1>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--status-soft)] opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--status)]"></span>
                </span>
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>

            <SectionNavigation items={sectionItems} />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 lg:mt-0">
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
                <span aria-hidden="true" className="ml-0.5 text-current">↗</span>
              </a>
            ))}
          </div>
        </header>

        <div id="content" className="pt-20 lg:w-[52%] lg:py-24">
          <ContentSection id="about" title="About" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="space-y-4">
              <p>
                I&apos;m studying Network Technology at{" "}
                <a
                  href={SITE_CONFIG.schoolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
                >
                  <span>{SITE_CONFIG.school}</span>
                  <span aria-hidden="true" className="text-current">↗</span>
                </a>
                , where I&apos;m building a foundation in systems, infrastructure, and practical software engineering.
              </p>
              <p>
                My current focus is network architecture, protocol analysis, and low-level software, with an interest in building tools that are reliable, observable, and fast.
              </p>
              <p>{SITE_CONFIG.status}</p>
            </div>
          </ContentSection>

          <ContentSection
            id="experience"
            title="Experience"
            className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div className="flex flex-col gap-12">
              {EXPERIENCE.map((item) => (
                <ExperienceCard key={`${item.company}-${item.position}`} {...item} />
              ))}
            </div>
          </ContentSection>

          <ContentSection id="projects" title="Projects" className="mb-16 scroll-mt-24 lg:scroll-mt-24">
            <div className="flex flex-col gap-12">
              {PROJECTS.map((item) => (
                <ProjectCard
                  key={item.id}
                  title={item.name}
                  description={item.description}
                  link={item.url}
                  tags={item.tags}
                />
              ))}
            </div>
          </ContentSection>

          <ContentSection id="writing" title="Writing" className="mt-16 scroll-mt-24 md:mt-24 lg:mt-36 lg:scroll-mt-24">
            {WRITING.length > 0 ? (
              <div className="flex flex-col gap-12">
                {WRITING.map((item) => (
                  <ProjectCard
                    key={item.id}
                    title={item.title}
                    date={item.publishedAt}
                    description={item.description}
                    link={item.url}
                  />
                ))}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-4">
                <div className="sm:col-span-1"></div>
                <p className="sm:col-span-3 text-sm leading-normal text-muted-foreground">
                  Technical notes and write-ups coming soon.
                </p>
              </div>
            )}
          </ContentSection>
        </div>
      </div>
    </main>
  );
}
