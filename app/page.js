import React from "react";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import EmailButton from "@/components/EmailButton";
import { EXPERIENCE, PROJECTS, SITE_CONFIG } from "@/lib/constants";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center font-sans px-8 bg-background text-foreground">
      <div className="z-50 flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-md md:w-3/4 lg:w-1/2">
        <section className="flex flex-col gap-8">
                    <h2 className="font-bold">Hi, I'm Muhammad Saad Shabir.</h2>
          <div className="space-y-4">
            <p>
              Focusing on network architecture, protocol analysis, and system programming.
            </p>
            <p>
              Studying BIT NET at <span className="font-semibold text-foreground">Carleton University</span>.
            </p>
            <p>
              Currently exploring new experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <EmailButton />
            <a 
              href={SITE_CONFIG.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={SITE_CONFIG.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a 
              href={SITE_CONFIG.resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
            </a>
          </div>
        </section>

        <section className="flex w-full flex-col gap-8">
          <h1 className="text-xl font-bold text-foreground">Work</h1>
          <div className="flex w-full flex-col gap-2">
            {EXPERIENCE.map((item, index) => (
              <ExperienceCard key={index} {...item} />
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-8">
          <h1 className="text-xl font-bold text-foreground">Projects</h1>
          <div className="flex w-full flex-col gap-2">
            {PROJECTS.map((item, index) => (
              <ProjectCard 
                key={index} 
                title={item.name}
                date={item.tags.join(" • ")}
                description={item.description}
                link={item.url}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
