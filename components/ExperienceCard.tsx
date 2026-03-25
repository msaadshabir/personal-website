interface ExperienceCardProps {
  position: string;
  company: string;
  dates: string;
  description: readonly string[];
  link: string;
}

const cardStyles = "relative w-full rounded-lg p-4";

export default function ExperienceCard({
  position,
  company,
  dates,
  description,
  link,
}: ExperienceCardProps) {
  const content = (
    <div className="relative flex flex-col gap-2">
      <h3 className="font-bold text-foreground">
        {position} @ {company}
      </h3>
      <p className="font-medium text-muted-foreground">{dates}</p>
      {description.map((item, index) => (
        <p key={index} className="font-medium text-foreground">
          {item}
        </p>
      ))}
    </div>
  );

  if (link && link !== "#") {
    return (
      <a
        href={link}
        className={cardStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <div className={cardStyles}>{content}</div>;
}
