interface ProjectCardProps {
  title: string;
  date?: string;
  description: string;
  link: string;
  tags?: readonly string[];
}

export default function ProjectCard({ title, date, description, link, tags }: ProjectCardProps) {
  return (
    <div className="group relative grid gap-3 rounded-2xl border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)] p-4 transition-all sm:grid-cols-4 sm:gap-4 sm:border-0 sm:bg-transparent sm:p-0">
      <div className="sm:col-span-1">{date ? <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:mt-1">{date}</p> : null}</div>
      <div className="sm:col-span-3">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 w-fit items-center gap-1 font-medium text-foreground transition-colors hover:text-muted-foreground"
        >
          <h3 className="text-current">{title}</h3>
          <span aria-hidden="true" className="text-current ml-0.5">↗</span>
        </a>
        <p className="mt-2 text-sm leading-normal text-foreground">{description}</p>
        {tags && tags.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag} className="max-w-full break-words rounded-full bg-background px-3 py-1 text-xs font-medium leading-relaxed text-muted-foreground sm:bg-[color:var(--surface-soft)]">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
