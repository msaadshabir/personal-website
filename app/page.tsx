import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import EmailButton from "@/components/EmailButton";
import CollapsibleSection from "@/components/CollapsibleSection";
import { EXPERIENCE, PROJECTS, SITE_CONFIG, WRITING } from "@/lib/constants";

export default function Home(): React.JSX.Element {
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

  return (
    <main className="flex w-full min-h-screen flex-col items-center px-8">
      <div className="flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-base md:w-3/4 lg:w-1/2">
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold tracking-[-0.02em] text-foreground">Hi, I&apos;m {SITE_CONFIG.name}.</h2>
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
              {SITE_CONFIG.description}
            </p>
            <p className="text-lg leading-relaxed">
              Studying Network Technology at <span className="font-semibold text-foreground">{SITE_CONFIG.school}</span>.
            </p>
            <p className="text-lg leading-relaxed">
              {SITE_CONFIG.status}
            </p>
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
                <span aria-hidden="true" className="ml-0.5 text-current">↗</span>
              </a>
            ))}
          </div>
        </section>

        <CollapsibleSection title="Work">
          {EXPERIENCE.map((item) => (
            <ExperienceCard key={`${item.company}-${item.position}`} {...item} />
          ))}
        </CollapsibleSection>

        <CollapsibleSection title="Projects">
          {PROJECTS.map((item) => (
            <ProjectCard 
              key={item.id} 
              title={item.name}
              date={item.tags.join(" • ")}
              description={item.description}
              link={item.url}
            />
          ))}
        </CollapsibleSection>

        <CollapsibleSection title="Writing">
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
        </CollapsibleSection>
      </div>
    </main>
  );
}
