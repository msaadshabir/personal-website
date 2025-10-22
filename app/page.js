"use client";

import React, { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SITE_CONFIG } from "@/lib/constants";

export default function Home() {
  // Set page title
  useEffect(() => {
    document.title = `Home | ${SITE_CONFIG.name}`;
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-50 dark:bg-zinc-900">
      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Main Content - Two Column Layout */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-8 flex items-start overflow-y-auto md:overflow-hidden pt-4 md:pt-16 pb-4 md:pb-0">
        <div className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20">
          {/* Left Column - Bio */}
          <div className="lg:flex-[2] space-y-6 md:space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-50 leading-tight">
                Hi, I'm Muhammad Saad Shabir
              </h1>
              
              <div className="space-y-2 text-base md:text-lg text-zinc-600 dark:text-zinc-400">
                <p>
                  Focusing on network architecture, protocol analysis, and system programming
                </p>
                <p>
                  Currently exploring new experiences
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
              <p className="text-base md:text-lg font-bold text-zinc-900 dark:text-zinc-50">Thinking about</p>
              <div className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 space-y-1">
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
          <div className="lg:flex-[1] space-y-4 md:space-y-6">
            <div className="space-y-2">
              <p className="text-base md:text-lg font-bold text-zinc-900 dark:text-zinc-50">AriesTECH</p>
              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">Network Technician</p>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">Installed and configured Cisco routers & switches, designed network segmentation, and maintained ~99% uptime through proactive monitoring and diagnostics.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
