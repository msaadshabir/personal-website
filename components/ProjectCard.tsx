import Link from "next/link";

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  link: string;
}

export default function ProjectCard({ title, date, description, link }: ProjectCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full rounded-lg p-4 group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#F2F2F2] to-[#D9D9D9] opacity-0 group-hover:opacity-50 transition-opacity duration-150 rounded-lg" />
      <div className="relative flex flex-col gap-2">
        <h3 className="font-bold text-foreground">{title}</h3>
        <p className="font-medium text-muted-foreground">{date}</p>
        <p className="font-medium text-foreground">{description}</p>
      </div>
    </Link>
  );
}
