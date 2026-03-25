import { WRITING } from "@/lib/constants";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function WritingPage(): React.JSX.Element {
  return (
    <main className="flex w-full min-h-screen flex-col items-center px-8">
      <div className="flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-base md:w-3/4 lg:w-1/2">
        <div className="mb-4">
          <Link
            href="/"
            className="font-medium text-muted-foreground transition-colors hover:text-foreground inline-flex items-center gap-1 group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Home
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-foreground">Writing</h1>
        
        <div className="flex w-full flex-col gap-6">
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
            <div className="rounded-lg py-4">
              <p className="font-medium text-muted-foreground">
                Essays, technical notes, and lab write-ups will appear here
                soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
