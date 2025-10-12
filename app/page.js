"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-6 text-zinc-700 dark:text-zinc-300 font-normal">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-zinc-900 dark:text-zinc-50">Hey, I'm Muhmmad Saad Shabir</h1>
        <div className="mb-8" />

        <h2 className="text-xl font-semibold mb-1 text-zinc-900 dark:text-zinc-50">What I'm up to:</h2>
        <p className="mb-4 text-zinc-700 dark:text-zinc-300 font-normal">Focusing on network architecture, protocol analysis, and system programming.</p>

        <h2 className="text-xl font-semibold mb-1 text-zinc-900 dark:text-zinc-50">Currently:</h2>
        <p className="mb-4 text-zinc-700 dark:text-zinc-300 font-normal">N/A</p>

        <h2 className="text-xl font-semibold mb-1 text-zinc-900 dark:text-zinc-50">Previously:</h2>
        <div className="mb-4 space-y-2 text-zinc-700 dark:text-zinc-300">
          <div>
            <p className="font-medium">AriesTECH</p>
            <div className="ml-4 mt-0.5 space-y-0.5 font-normal">
              <p>• Installed, configured, and maintained Cisco routers & switches; designed Layer 2/3 segmentation (VLANs, trunking, inter-VLAN routing) and implemented static, RIP, and OSPF routing to optimize traffic flow and improve security across the LAN/WAN.</p>
              <p>• Ensured ~99% network availability via proactive monitoring, rapid diagnostics (using packet-analysis / IOS tools), and regular preventative maintenance (firmware upgrades, ACL reviews, configuration backups).</p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-1 text-zinc-900 dark:text-zinc-50">Projects:</h2>
        <div className="mb-4 grid grid-cols-2 gap-x-6 gap-y-3 text-zinc-700 dark:text-zinc-300">
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/ZTAP" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400">ZTAP</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/pci-segment" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400">pci-segment</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/cloud-netmapper" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400">cloud-netmapper</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/net-guardian" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400">net-guardian</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/personal-ai-cli" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400">personal-ai-cli</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/personal-website" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400">personal-website</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/CloudChat" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 underline hover:text-blue-600 dark:hover:text-blue-400">CloudChat</a></p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-1 text-zinc-900 dark:text-zinc-50">Thinking about:</h2>
        <div className="mb-4 text-zinc-700 dark:text-zinc-300 font-normal space-y-0.5">
          <p>Awareness</p>
          <p>Evolution</p>
          <p>Superforecasting</p>
        </div>

        <h2 className="text-xl font-semibold mb-1 text-zinc-900 dark:text-zinc-50">Get in touch:</h2>
        <div className="mb-4 grid grid-cols-2 gap-x-6 gap-y-3">
          <div>
            <a href="mailto:saad.shabir@hotmail.com" className="text-zinc-900 dark:text-zinc-50 font-medium underline hover:text-blue-600 dark:hover:text-blue-400">saad.shabir@hotmail.com</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/saadshabir/" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-50 font-medium underline hover:text-blue-600 dark:hover:text-blue-400">LinkedIn</a>
          </div>
        </div>
        <p className="text-zinc-700 dark:text-zinc-300 font-normal">Let's venture into greatness before AGI makes us the permanent underclass :)</p>
      </main>
    </div>
  );
}
