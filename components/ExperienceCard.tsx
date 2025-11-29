import Link from "next/link";

interface ExperienceCardProps {
  position: string;
  company: string;
  dates: string;
  description: readonly string[];
  link: string;
}

const cardStyles = "relative w-full rounded-lg p-4 group";
const hoverOverlay = "absolute inset-0 bg-gradient-to-r from-[#F2F2F2] to-[#D9D9D9] opacity-0 group-hover:opacity-50 transition-opacity duration-150 rounded-lg";

export default function ExperienceCard({ position, company, dates, description, link }: ExperienceCardProps) {
  const content = (
    <>
      <div className={hoverOverlay} />
      <div className="relative flex flex-col gap-2">
        <h3 className="font-bold text-foreground">{position} @ {company}</h3>
        <p className="font-medium text-muted-foreground">{dates}</p>
        {description.map((item, index) => (
          <p key={index} className="font-medium text-foreground">{item}</p>
        ))}
      </div>
    </>
  );

  if (link && link !== "#") {
    return (
      <Link href={link} className={cardStyles}>
        {content}
      </Link>
    );
  }

  return <div className={cardStyles}>{content}</div>;
}
