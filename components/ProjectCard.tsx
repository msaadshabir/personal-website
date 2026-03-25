interface ProjectCardProps {
  title: string;
  date?: string;
  description: string;
  link: string;
}

export default function ProjectCard({
  title,
  date,
  description,
  link,
}: ProjectCardProps) {
  const CardWrapper = link ? "a" : "div";
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className="-mx-4 flex flex-col gap-2 rounded-lg p-4 transition-colors hover:bg-surface-soft active:bg-surface-border sm:mx-0 group"
    >
      <div className="flex items-center gap-2">
        <h3 className="font-bold text-foreground transition-colors group-hover:text-status">
          {title}
        </h3>
        {link && (
          <span
            aria-hidden="true"
            className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            ↗
          </span>
        )}
      </div>
      {date ? (
        <p className="font-medium text-muted-foreground">{date}</p>
      ) : null}
      <p className="font-medium text-foreground">{description}</p>
    </CardWrapper>
  );
}
