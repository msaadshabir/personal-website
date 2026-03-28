import { WRITING } from "@/lib/constants";
import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";

export default function WritingPage(): React.JSX.Element {
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
        Writing
      </h1>

      <div className="flex w-full flex-col gap-5">
        {WRITING.length > 0 ? (
          WRITING.map((item) => (
            <div key={item.id} className="flex flex-col gap-0.5">
              <Link 
                href={item.url} 
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                {item.title}
              </Link>
              <span className="text-sm text-muted-foreground">{item.publishedAt}</span>
            </div>
          ))
        ) : (
          <div className="py-2">
            <p className="font-medium text-muted-foreground">
              Essays, technical notes, and lab write-ups will appear here soon.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
