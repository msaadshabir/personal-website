interface ExperienceCardProps {
  position: string;
  company: string;
  dates: string;
  description: readonly string[];
  link: string;
}

const cardStyles = "relative grid gap-4 transition-all sm:grid-cols-4";

export default function ExperienceCard({ position, company, dates, description, link }: ExperienceCardProps) {
  const content = (
    <>
      <div className="sm:col-span-1">
        <p className="mt-1 whitespace-pre-line text-xs font-semibold uppercase tracking-[0.12em] leading-relaxed text-muted-foreground">
          {dates}
        </p>
      </div>
      <div className="sm:col-span-3">
        <h3 className="font-medium text-foreground">
          {company} · {position}
        </h3>
        <ul className="mt-2 flex list-disc flex-col gap-2 pl-4 text-sm leading-normal text-foreground">
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
