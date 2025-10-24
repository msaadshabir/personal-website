"use client";

import React, { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG, PROJECTS } from "@/lib/constants";

export default function Projects() {
  // Set page title and meta description
  useEffect(() => {
    document.title = `Projects | ${SITE_CONFIG.name}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Network engineering and system programming projects including ZTAP, pci-segment, cloud-netmapper, and more.');
    }
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-50 dark:bg-zinc-900">
      {/* Navigation */}
      <Navigation currentPage="projects" />

      {/* Projects Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 md:px-8 py-6 md:py-8 overflow-y-auto">
        <div className="space-y-10 md:space-y-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="space-y-3"
            >
              {/* Project Title */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors inline-block"
              >
                {project.name}
              </a>

              {/* Description */}
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
