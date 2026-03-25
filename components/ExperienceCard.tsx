interface ExperienceCardProps {
  position: string;
  company: string;
  dates: string;
  description: readonly string[];
  link: string;
}

export default function ExperienceCard({
  position,
  company,
  dates,
  description,
  link,
}: ExperienceCardProps) {
  return (
    <div className="relative flex flex-col gap-2 py-4">
      {link && link !== "#" ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-fit flex items-center gap-1 font-bold text-foreground hover:text-muted-foreground transition-colors"
        >
          <h3 className="text-current">{position} @ {company}</h3>
          <span aria-hidden="true" className="text-current ml-0.5">
            ↗
          </span>
        </a>
      ) : (
        <div className="w-fit flex items-center gap-1 font-bold text-foreground">
          <h3>{position} @ {company}</h3>
        </div>
      )}
      <p className="font-medium text-muted-foreground">{dates}</p>
      {description.map((item, index) => (
        <p key={index} className="font-medium text-foreground">
          {item}
        </p>
      ))}
    </div>
  );
}
