"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Projects() {
  const [emailCopied, setEmailCopied] = useState(false);
  const timeoutRef = useRef(null);

  // Set page title and meta description
  useEffect(() => {
    document.title = "Projects | Muhammad Saad Shabir";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Network engineering and system programming projects including ZTAP, pci-segment, cloud-netmapper, and more.');
    }
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("saad.shabir@hotmail.com");
      setEmailCopied(true);
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set new timeout with ref
      timeoutRef.current = setTimeout(() => {
        setEmailCopied(false);
        timeoutRef.current = null;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const projects = [
    {
      id: "001",
      name: "ZTAP",
      url: "https://github.com/msaadshabir/ZTAP",
      description: "Zero Trust Access Platform for secure network segmentation and access control.",
      tags: ["Go", "eBPF", "YAML", "Python", "Prometheus", "Grafana"],
    },
    {
      id: "002",
      name: "pci-segment",
      url: "https://github.com/msaadshabir/pci-segment",
      description: "PCI DSS compliant network segmentation tool for enterprise environments.",
      tags: ["Go", "eBPF", "pf", "YAML", "CLI"],
    },
    {
      id: "003",
      name: "cloud-netmapper",
      url: "https://github.com/msaadshabir/cloud-netmapper",
      description: "Cloud network topology mapper for AWS, Azure, and GCP infrastructures.",
      tags: ["Go", "AWS SDK", "Graphviz", "JSON", "CLI"],
    },
    {
      id: "004",
      name: "net-guardian",
      url: "https://github.com/msaadshabir/net-guardian",
      description: "Real-time network monitoring and threat detection system.",
      tags: ["Python", "Scapy", "Nmap", "Rich", "pandas", "scikit-learn"],
    },
    {
      id: "005",
      name: "personal-ai-cli",
      url: "https://github.com/msaadshabir/personal-ai-cli",
      description: "Command-line interface tool powered by AI for network automation tasks.",
      tags: ["Python", "ChromaDB", "Ollama", "Sentence-Transformers", "RAG"],
    },
    {
      id: "006",
      name: "CloudChat",
      url: "https://github.com/msaadshabir/CloudChat",
      description: "Real-time chat application built with cloud-native architecture.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Clerk", "Neon Postgres", "Drizzle ORM"],
    },
    {
      id: "007",
      name: "personal-website",
      url: "https://github.com/msaadshabir/personal-website",
      description: "Personal portfolio website showcasing projects and experience.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-end items-center px-8 py-6">
        <div className="flex gap-8">
          <Link href="/" className="text-2xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors" aria-label="Home page">
            home
          </Link>
          <Link href="/projects" className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 transition-colors" aria-label="Projects page" aria-current="page">
            projects
          </Link>
        </div>
      </nav>

      {/* Projects Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-8 py-8">
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="space-y-3"
            >
              {/* Project Number */}
              <div className="text-sm font-bold text-zinc-400 dark:text-zinc-500">
                {project.id}
              </div>

              {/* Project Title */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors inline-block"
              >
                {project.name}
              </a>

              {/* Description */}
              <p className="text-base text-zinc-600 dark:text-zinc-400">
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
      <footer className="px-8 py-6">
        <div className="flex gap-8">
          <a
            href="/MuhammadSaad_Shabir_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="Download resume (opens in new tab)"
          >
            resume
          </a>
          <button
            onClick={copyEmail}
            className="relative text-2xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors cursor-pointer bg-transparent border-none p-0"
            aria-label="Copy email address to clipboard"
          >
            email
            {emailCopied && (
              <span className="absolute -top-10 left-0 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-sm px-3 py-2 rounded shadow-lg animate-fade-in whitespace-nowrap" role="status" aria-live="polite">
                Copied!
              </span>
            )}
          </button>
          <a
            href="https://www.linkedin.com/in/saadshabir/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            linkedin
          </a>
          <a
            href="https://github.com/msaadshabir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="GitHub profile (opens in new tab)"
          >
            github
          </a>
        </div>
      </footer>
    </div>
  );
}
