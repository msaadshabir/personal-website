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
      description: "ZTAP is a lightweight, self-hosted proxy designed to enforce Zero Trust principles for internal services. It sits between users and backend systems, verifying identity and policy compliance before granting access. Built for simplicity, speed, and auditability.",
      tags: ["Go", "eBPF", "YAML", "Python", "Prometheus", "Grafana"],
    },
    {
      id: "002",
      name: "pci-segment",
      url: "https://github.com/msaadshabir/pci-segment",
      description: "pci-segment enforces PCI-DSS Requirements 1.2 & 1.3 by enabling network microsegmentation of the Cardholder Data Environment (CDE). It delivers a free, auditor-ready alternative to costly proprietary solutions. Tailored for fintech and payment-handling systems.",
      tags: ["Go", "eBPF", "pf", "YAML", "CLI"],
    },
    {
      id: "003",
      name: "cloud-netmapper",
      url: "https://github.com/msaadshabir/cloud-netmapper",
      description: "cloud-netmapper captures, analyzes, and visualizes network topology and traffic within cloud environments (AWS, Azure, GCP, etc.). It provides insights into service connectivity, dependencies, and potential security blind spots.",
      tags: ["Go", "AWS SDK", "Graphviz", "JSON", "CLI"],
    },
    {
      id: "004",
      name: "net-guardian",
      url: "https://github.com/msaadshabir/net-guardian",
      description: "net-guardian is a command-line tool in Python that scans your local network, inventories devices, and assesses security risks. It merges network scanning, OS/service detection, and anomaly detection into one lightweight auditor.",
      tags: ["Python", "Scapy", "Nmap", "Rich", "pandas", "scikit-learn"],
    },
    {
      id: "005",
      name: "personal-ai-cli",
      url: "https://github.com/msaadshabir/personal-ai-cli",
      description: "Terminal based, open-source, self-hosted personal AI chatbot that anyone can use with their own data. No UI, no cloud, no tracking.",
      tags: ["Python", "ChromaDB", "Ollama", "Sentence-Transformers", "RAG"],
    },
    {
      id: "006",
      name: "CloudChat",
      url: "https://github.com/msaadshabir/CloudChat",
      description: "CloudChat is an open source chat platform and API framework. It enables developers to build real-time messaging systems with self-hosted control, privacy, and extensibility.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Clerk", "Neon Postgres", "Drizzle ORM"],
    },
    {
      id: "007",
      name: "personal-website",
      url: "https://github.com/msaadshabir/personal-website",
      description: "Modern portfolio showcasing projects and professional experience.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    },
  ];

  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-50 dark:bg-zinc-900">
      {/* Navigation */}
      <nav className="flex justify-end items-center px-4 md:px-8 py-6 pr-4 md:pr-8">
        <div className="flex gap-4 md:gap-8">
          <Link href="/" className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors" aria-label="Home page">
            home
          </Link>
          <Link href="/projects" className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-50 transition-colors" aria-label="Projects page" aria-current="page">
            projects
          </Link>
        </div>
      </nav>

      {/* Projects Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 md:px-8 py-6 md:py-8 overflow-y-auto">
        <div className="space-y-10 md:space-y-12">
          {projects.map((project) => (
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
      <footer className="px-4 md:px-8 py-4 md:py-6 pb-8 md:pb-6">
        <div className="flex flex-wrap gap-4 md:gap-8">
          <a
            href="/MuhammadSaad_Shabir_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="Download resume (opens in new tab)"
          >
            resume
          </a>
          <button
            onClick={copyEmail}
            className="relative text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors cursor-pointer bg-transparent border-none p-0"
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
            href="https://www.linkedin.com/in/msaadshabir/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            linkedin
          </a>
          <a
            href="https://github.com/msaadshabir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            aria-label="GitHub profile (opens in new tab)"
          >
            github
          </a>
        </div>
      </footer>
    </div>
  );
}
