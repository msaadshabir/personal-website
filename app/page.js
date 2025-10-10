"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-6 text-gray-900 font-normal">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-black">Hey, I'm Muhmmad Saad Shabir</h1>
        <div className="mb-8" />

        <h2 className="text-xl font-semibold mb-1 text-black">What I'm up to:</h2>
        <p className="mb-4 text-gray-900 font-normal">Focusing on network architecture, protocol analysis, and system programming.</p>

        <h2 className="text-xl font-semibold mb-1 text-black">Previously:</h2>
        <div className="mb-4 space-y-2 text-gray-900">
          <div>
            <p className="font-medium">AriesTECH</p>
            <div className="ml-4 mt-0.5 space-y-0.5 font-normal">
              <p>• Installed, configured, and maintained Cisco routers & switches; designed Layer 2/3 segmentation (VLANs, trunking, inter-VLAN routing) and implemented static, RIP, and OSPF routing to optimize traffic flow and improve security across the LAN/WAN.</p>
              <p>• Ensured ~99% network availability via proactive monitoring, rapid diagnostics (using packet-analysis / IOS tools), and regular preventative maintenance (firmware upgrades, ACL reviews, configuration backups).</p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-1 text-black">Projects:</h2>
        <div className="mb-4 grid grid-cols-2 gap-x-6 gap-y-3 text-gray-900">
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/ZTAP" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">ZTAP</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/pci-segment" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">pci-segment</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/cloud-netmapper" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">cloud-netmapper</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/net-guardian" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">net-guardian</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/personal-ai-cli" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">personal-ai-cli</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/personal-website" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">personal-website</a></p>
          </div>
          <div>
            <p className="font-medium"><a href="https://github.com/saad-build/CloudChat" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-gray-600">CloudChat</a></p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-1 text-black">Thinking about:</h2>
        <div className="mb-4 text-gray-900 font-normal space-y-0.5">
          <p>Awareness</p>
          <p>Evolution</p>
          <p>Superforecasting</p>
        </div>

        <h2 className="text-xl font-semibold mb-1 text-black">Get in touch:</h2>
        <div className="mb-1">
          <a href="mailto:saad.shabir@hotmail.com" className="text-black font-medium underline hover:text-gray-600">saad.shabir@hotmail.com</a>
        </div>
        <div className="mb-1">
          <a href="https://www.linkedin.com/in/saadshabir/" target="_blank" rel="noopener noreferrer" className="text-black font-medium underline hover:text-gray-600">LinkedIn</a>
        </div>
        <p className="text-gray-900 font-normal">Let's venture into greatness before AGI makes us the permanent underclass :)</p>
      </main>
    </div>
  );
}
