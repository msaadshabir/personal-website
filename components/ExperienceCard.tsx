interface ExperienceCardProps {
  position: string;
  company: string;
  dates: string;
  description: readonly string[];
  link: string;
}

const cardStyles = "group relative grid gap-3 rounded-2xl border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)] p-4 transition-all sm:grid-cols-4 sm:gap-4 sm:border-0 sm:bg-transparent sm:p-0";

export default function ExperienceCard({ position, company, dates, description, link }: ExperienceCardProps) {
  const content = (
    <>
      <div className="sm:col-span-1">
        <p className="whitespace-pre-line text-xs font-semibold uppercase tracking-[0.12em] leading-relaxed text-muted-foreground sm:mt-1">
          {dates}
        </p>
      </div>
      <div className="sm:col-span-3">
        <h3 className="min-h-11 font-medium text-foreground transition-colors group-hover:text-muted-foreground">
          {company} · {position}
        </h3>
        <ul className="mt-2 flex list-disc flex-col gap-2 pl-4 text-sm leading-normal text-foreground marker:text-muted-foreground">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );

  if (link && link !== "#") {
    return (
      <a href={link} className={cardStyles} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <div className={cardStyles}>{content}</div>;
}
