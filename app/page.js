"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);
  const timeoutRef = useRef(null);

  // Set page title
  useEffect(() => {
    document.title = "Home | Muhammad Saad Shabir";
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

  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-50 dark:bg-zinc-900">
      {/* Navigation */}
      <nav className="flex justify-end items-center px-8 py-6">
        <div className="flex gap-8">
          <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 transition-colors" aria-label="Home page" aria-current="page">
            home
          </Link>
          <Link href="/projects" className="text-2xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors" aria-label="Projects page">
            projects
          </Link>
        </div>
      </nav>

      {/* Main Content - Two Column Layout */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-8 flex items-start overflow-hidden pt-16">
        <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column - Bio */}
          <div className="lg:flex-[2] space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-50 leading-tight">
                Hi, I'm Muhammad Saad Shabir
              </h1>
              
              <div className="space-y-2 text-lg text-zinc-600 dark:text-zinc-400">
                <p>
                  Focusing on network architecture, protocol analysis, and system programming
                </p>
                <p>
                  Previously at <span className="font-semibold text-zinc-900 dark:text-zinc-50">AriesTECH</span>
                </p>
                <p>
                  Studying BIT NET at <span className="font-semibold text-zinc-900 dark:text-zinc-50">Carleton University</span>
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Thinking about</p>
              <div className="text-lg text-zinc-600 dark:text-zinc-400 space-y-1">
                <p>Attention</p>
                <p>Natural selection</p>
                <p>Superforecasting</p>
              </div>
              <p className="text-base italic text-zinc-600 dark:text-zinc-400 pt-4">
                Let's venture into greatness before AGI makes us the permanent underclass :)
              </p>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="lg:flex-[1] space-y-6">
            <div className="space-y-2">
              <p className="text-lg font-bold text-zinc-900 dark:text-zinc-50">AriesTECH</p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">Network Technician</p>
              <p className="text-base text-zinc-600 dark:text-zinc-400">Installed and configured Cisco routers & switches, designed network segmentation, and maintained ~99% uptime through proactive monitoring and diagnostics.</p>
            </div>
          </div>
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
