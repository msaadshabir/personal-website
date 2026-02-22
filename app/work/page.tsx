import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import CollapsibleSection from "@/components/CollapsibleSection";
import { EXPERIENCE, PROJECTS } from "@/lib/constants";

export default function WorkPage(): React.JSX.Element {
  return (
    <main className="flex w-full min-h-screen flex-col items-center font-sans px-8 bg-background text-foreground">
      <div className="z-50 flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-base md:w-3/4 lg:w-1/2">
        <Link 
          href="/"
          className="font-medium text-muted-foreground hover:text-foreground transition-colors mb-4 flex items-center"
        >
          <span aria-hidden="true" className="text-current mr-1">↖</span>
          Home
        </Link>
        
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
