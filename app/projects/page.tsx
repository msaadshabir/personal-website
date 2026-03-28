import { PROJECTS } from "@/lib/constants";
import ProjectCard from "@/components/ProjectCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export default function ProjectsPage(): React.JSX.Element {
  return (
    <>
      <div className="mb-4 flex items-center justify-between w-full">
        <Link
          href="/"
          className="font-medium text-foreground transition-colors hover:text-muted-foreground"
        >
          Home
        </Link>
        <ThemeToggle />
      </div>

      <h1 className="text-2xl font-bold tracking-[-0.04em] text-foreground mb-2">
        Projects
      </h1>

      <div className="flex w-full flex-col gap-6">
        {PROJECTS.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.name}
            date={item.tags.join(" • ")}
            description={item.description}
            link={item.url}
          />
        ))}
      </div>
    </>
  );
}
