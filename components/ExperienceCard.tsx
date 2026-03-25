interface ExperienceCardProps {
  position: string;
  company: string;
  dates: string;
  description: readonly string[];
  link: string;
}

const cardStyles = "-mx-4 flex flex-col gap-2 rounded-lg p-4 transition-colors hover:bg-surface-soft active:bg-surface-border sm:mx-0 group";

export default function ExperienceCard({
  position,
  company,
  dates,
  description,
  link,
}: ExperienceCardProps) {
  const content = (
    <>
      <div className="flex items-center gap-2">
        <h3 className="font-bold text-foreground transition-colors group-hover:text-status">
          {position} @ {company}
        </h3>
        {link && link !== "#" && (
          <span
            aria-hidden="true"
            className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            ↗
          </span>
        )}
      </div>
      <p className="font-medium text-muted-foreground">{dates}</p>
      {description.map((item, index) => (
        <p key={index} className="font-medium text-foreground">
          {item}
        </p>
      ))}
    </>
  );

  if (link && link !== "#") {
    return (
      <a
        href={link}
        className={`${cardStyles} block`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <div className={cardStyles}>{content}</div>;
}
