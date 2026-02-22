import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import EmailButton from "@/components/EmailButton";
import CollapsibleSection from "@/components/CollapsibleSection";
import { EXPERIENCE, PROJECTS, SITE_CONFIG } from "@/lib/constants";

export default function Home(): React.JSX.Element {
  return (
    <main className="flex w-full min-h-screen flex-col items-center px-8">
      <div className="flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-base md:w-3/4 lg:w-1/2">
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold tracking-[-0.02em] text-foreground">Hi, I&apos;m Muhammad Saad Shabir.</h2>
            <div className="flex items-center gap-2 text-muted-foreground ml-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span>Ottawa, Canada</span>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Focusing on network architecture, protocol analysis, and system programming.
            </p>
            <p className="text-lg leading-relaxed">
              Studying Network Technology at <span className="font-semibold text-foreground">Carleton University</span>.
            </p>
            <p className="text-lg leading-relaxed">
              Currently exploring new experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <EmailButton />
            <a 
              href={SITE_CONFIG.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
              <span aria-hidden="true" className="text-current ml-0.5">↗</span>
            </a>
            <a 
              href={SITE_CONFIG.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
              <span aria-hidden="true" className="text-current ml-0.5">↗</span>
            </a>
            <a 
              href={SITE_CONFIG.resume} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Download resume PDF"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
              <span aria-hidden="true" className="text-current ml-0.5">↗</span>
            </a>
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
      </div>
    </main>
  );
}
