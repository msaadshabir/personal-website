interface ProjectCardProps {
  title: string;
  date?: string;
  description: string;
  link: string;
  tags?: readonly string[];
}

export default function ProjectCard({ title, date, description, link, tags }: ProjectCardProps) {
  return (
    <div className="group relative grid gap-4 transition-all sm:grid-cols-4">
      <div className="sm:col-span-1">{date ? <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{date}</p> : null}</div>
      <div className="sm:col-span-3">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
        >
          <h3 className="text-current">{title}</h3>
          <span aria-hidden="true" className="text-current ml-0.5">↗</span>
        </a>
        <p className="mt-2 text-sm leading-normal text-foreground">{description}</p>
        {tags && tags.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag} className="rounded-full bg-[color:var(--surface-soft)] px-3 py-1 text-xs font-medium text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
