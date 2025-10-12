"use client";

import React, { useState } from "react";

export default function Home() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("saad.shabir@hotmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-8 text-zinc-700 dark:text-zinc-300 font-normal">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-zinc-900 dark:text-zinc-50 animate-fade-in leading-tight">Hey, I'm Muhmmad Saad Shabir</h1>
        <div className="mb-10" />

        <h2 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50 animate-fade-in animate-delay-100">What I'm up to:</h2>
        <p className="mb-6 text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed animate-fade-in animate-delay-100">Focusing on network architecture, protocol analysis, and system programming.</p>

        <h2 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50 animate-fade-in animate-delay-200">Currently:</h2>
        <p className="mb-6 text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed animate-fade-in animate-delay-200">N/A</p>

        <h2 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50 animate-fade-in animate-delay-300">Previously:</h2>
        <div className="mb-6 space-y-3 text-zinc-700 dark:text-zinc-300 animate-fade-in animate-delay-300">
          <div>
            <p className="font-medium">AriesTECH</p>
            <div className="ml-4 mt-1 space-y-1 font-normal leading-relaxed">
              <p>• Installed, configured, and maintained Cisco routers & switches; designed Layer 2/3 segmentation (VLANs, trunking, inter-VLAN routing) and implemented static, RIP, and OSPF routing to optimize traffic flow and improve security across the LAN/WAN.</p>
              <p>• Ensured ~99% network availability via proactive monitoring, rapid diagnostics (using packet-analysis / IOS tools), and regular preventative maintenance (firmware upgrades, ACL reviews, configuration backups).</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50 animate-fade-in animate-delay-400">Projects:</h2>
        <div className="mb-6 grid grid-cols-2 gap-x-6 gap-y-3 text-zinc-700 dark:text-zinc-300 animate-fade-in animate-delay-400">
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/ZTAP" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">ZTAP</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/pci-segment" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">pci-segment</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/cloud-netmapper" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">cloud-netmapper</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/net-guardian" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">net-guardian</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/personal-ai-cli" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">personal-ai-cli</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/personal-website" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">personal-website</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/CloudChat" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">CloudChat</a></p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50 animate-fade-in animate-delay-500">Thinking about:</h2>
        <div className="mb-6 text-zinc-700 dark:text-zinc-300 font-normal space-y-1 leading-relaxed animate-fade-in animate-delay-500">
          <p>Awareness</p>
          <p>Evolution</p>
          <p>Superforecasting</p>
        </div>

        <h2 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50 animate-fade-in animate-delay-600">Get in touch:</h2>
        <div className="mb-6 grid grid-cols-2 gap-x-6 gap-y-3 animate-fade-in animate-delay-600">
          <div className="relative">
            <button
              onClick={copyEmail}
              className="text-zinc-900 dark:text-zinc-50 font-medium underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 text-left"
            >
              saad.shabir@hotmail.com
            </button>
            {emailCopied && (
              <span className="absolute -top-8 left-0 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 text-xs px-2 py-1 rounded animate-fade-in">
                Copied!
              </span>
            )}
          </div>
          <div>
            <a href="https://www.linkedin.com/in/saadshabir/" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 font-medium underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">LinkedIn</a>
          </div>
        </div>
        <p className="text-zinc-700 dark:text-zinc-300 font-normal leading-relaxed">Let's venture into greatness before AGI makes us the permanent underclass :)</p>
      </main>
    </div>
  );
}
