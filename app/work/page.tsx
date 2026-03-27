import { EXPERIENCE } from "@/lib/constants";
import ExperienceCard from "@/components/ExperienceCard";
import Link from "next/link";

export default function WorkPage(): React.JSX.Element {
  return (
    <>
      <div className="mb-4">
        <Link
          href="/"
          className="font-medium text-foreground transition-colors hover:text-muted-foreground"
        >
          Home
        </Link>
      </div>

      <h1 className="text-2xl font-bold tracking-[-0.04em] text-foreground mb-2">
        Work
      </h1>

      <div className="flex w-full flex-col gap-6">
        {EXPERIENCE.map((item) => (
          <ExperienceCard key={`${item.company}-${item.position}`} {...item} />
        ))}
      </div>
    </>
  );
}
