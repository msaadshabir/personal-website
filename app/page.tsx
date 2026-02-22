import Link from "next/link";
import EmailButton from "@/components/EmailButton";
import { SITE_CONFIG } from "@/lib/constants";

export default function Home(): React.JSX.Element {
  return (
    <main className="flex w-full min-h-screen flex-col items-center font-sans px-8 bg-background text-foreground">
      <div className="z-50 flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-base md:w-3/4 lg:w-1/2">
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

        <section className="flex flex-col gap-4 w-full">
          <Link 
            href="/work"
            className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
          >
            <h3 className="text-xl font-medium text-foreground">Work</h3>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">→</span>
          </Link>
          
          <Link 
            href="/projects"
            className="group flex items-center justify-between py-4 border-b border-border hover:border-foreground transition-colors"
          >
            <h3 className="text-xl font-medium text-foreground">Projects</h3>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">→</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
