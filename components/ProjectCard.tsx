import Link from "next/link";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, date, description, link }: ProjectCardProps) {
  return (
    <div className="relative w-full rounded-lg p-4">
      <div className="relative flex flex-col gap-2">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-fit flex items-center gap-1 font-bold text-foreground hover:opacity-75 transition-opacity"
        >
          <h3 className="text-current">{title}</h3>
          <span aria-hidden="true" className="text-current ml-0.5">↗</span>
        </Link>
        <p className="font-medium text-muted-foreground">{date}</p>
        <p className="font-medium text-foreground">{description}</p>
      </div>
    </div>
  );
}
