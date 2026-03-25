"use client";

import { useEffect, useRef, useState } from "react";

type SectionItem = {
  label: string;
  href: string;
  id: string;
};

interface SectionNavigationProps {
  items: readonly SectionItem[];
}

export default function SectionNavigation({
  items,
}: SectionNavigationProps): React.JSX.Element {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const hasActivatedNavRef = useRef(false);
  const isScrollingToRef = useRef(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    let animationFrame = 0;

    const getSectionFromScroll = (): string | null => {
      if (window.scrollY <= 8) {
        return hasActivatedNavRef.current ? (items[0]?.id ?? null) : null;
      }

      const anchorLine = window.innerHeight * 0.3;
      const lastSection = sections[sections.length - 1];
      const isNearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 48;

      if (lastSection) {
        const lastRect = lastSection.getBoundingClientRect();
        if (lastRect.top <= anchorLine + 72 || isNearBottom) {
          return lastSection.id;
        }
      }

      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= anchorLine) {
          current = section;
        } else {
          break;
        }
      }

      return current?.id ?? null;
    };

    const updateActiveSection = () => {
      if (!isScrollingToRef.current) {
        setActiveSection(getSectionFromScroll());
      }
      animationFrame = 0;
    };

    const handleScrollEnd = () => {
      isScrollingToRef.current = false;
      setActiveSection(getSectionFromScroll());
    };

    const queueUpdate = () => {
      if (!hasActivatedNavRef.current) {
        if (window.scrollY <= 0) {
          return;
        }
        hasActivatedNavRef.current = true;
      }

      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("scrollend", handleScrollEnd);
    window.addEventListener("resize", queueUpdate);

    return () => {
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("scrollend", handleScrollEnd);
      window.removeEventListener("resize", queueUpdate);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [items]);

  return (
    <nav className="hidden lg:block">
      <ul className="mt-16 w-max space-y-1">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="group flex items-center py-3"
              aria-current={activeSection === item.id ? "page" : undefined}
              onClick={() => {
                hasActivatedNavRef.current = true;
                isScrollingToRef.current = true;
                setActiveSection(item.id);
              }}
            >
              <span
                className={`mr-4 h-px transition-all duration-300 ease-out ${
                  activeSection === item.id
                    ? "w-14 bg-foreground"
                    : "w-9 bg-foreground/35 group-hover:w-12 group-hover:bg-foreground/70"
                }`}
              ></span>
              <span
                className={`text-[0.8rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ease-out ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-foreground/60 group-hover:text-foreground/85"
                }`}
              >
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
