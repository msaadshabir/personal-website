import { EXPERIENCE } from "@/lib/constants";
import ExperienceCard from "@/components/ExperienceCard";
import Link from "next/link";

export default function WorkPage(): React.JSX.Element {
  return (
    <main className="flex w-full min-h-screen flex-col items-center px-8">
      <div className="flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-base md:w-3/4 lg:w-1/2">
        <div className="mb-6">
          <Link
            href="/"
            className="font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
        </div>
        
        <h1 className="text-2xl font-bold tracking-[-0.04em] text-foreground mb-2">Work</h1>
        
        <div className="flex w-full flex-col gap-6">
          {EXPERIENCE.map((item) => (
            <ExperienceCard
              key={`${item.company}-${item.position}`}
              {...item}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
