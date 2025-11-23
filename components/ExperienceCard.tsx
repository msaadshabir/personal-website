import Link from "next/link";

interface ExperienceCardProps {
  position: string;
  company: string;
  dates: string;
  description: string[];
  link: string;
}

export default function ExperienceCard({ position, company, dates, description, link }: ExperienceCardProps) {
  const Content = () => (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-[#F2F2F2] to-[#D9D9D9] opacity-0 group-hover:opacity-50 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-md"></div>
      <div className="relative flex flex-col items-start justify-start gap-2 text-md">
        <h2 className="font-bold text-foreground">{position} @ {company}</h2>
        <p className="font-medium text-muted-foreground">{dates}</p>
        {description.map((item, index) => (
          <p key={index} className="font-medium text-foreground">{item}</p>
        ))}
      </div>
    </>
  );

  if (link && link !== "#") {
    return (
      <Link href={link} className="relative w-full rounded-lg p-4 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md">
        <Content />
      </Link>
    );
  }

  return (
    <div className="relative w-full rounded-lg p-4 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md">
      <Content />
    </div>
  );
}
