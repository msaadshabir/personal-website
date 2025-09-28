"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-6 text-gray-900 font-normal">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-black">Hey, I'm Muhmmad Saad Shabir</h1>
        <div className="mb-8" />

        <h3 className="text-xl font-semibold mb-1 text-black">What I'm up to:</h3>
        <p className="mb-4 text-gray-900 font-normal">Focusing on network architecture, protocol analysis, and system programming.</p>

        <h3 className="text-xl font-semibold mb-1 text-black">Previously:</h3>
        <div className="mb-4 space-y-2 text-gray-900">
          <div>
            <p className="font-medium">AriesTECH</p>
            <div className="ml-4 mt-0.5 space-y-0.5 font-normal">
              <p>- Installed, configured, and maintained Cisco routers & switches; designed Layer 2/3 segmentation (VLANs, trunking, inter-VLAN routing) and implemented static, RIP, and OSPF routing to optimize traffic flow and improve security across the LAN/WAN.</p>
              <p>- Ensured ~99% network availability via proactive monitoring, rapid diagnostics (using packet-analysis / IOS tools), and regular preventative maintenance (firmware upgrades, ACL reviews, configuration backups).</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-1 text-black">Projects:</h3>
        <div className="mb-4 space-y-3 text-gray-900">
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
        </div>

        <h3 className="text-xl font-semibold mb-1 text-black">Thinking about:</h3>
        <div className="mb-4 text-gray-900 font-normal space-y-0.5">
          <p>Awareness</p>
          <p>Evolution</p>
          <p>Superforecasting</p>
        </div>

        <h3 className="text-xl font-semibold mb-1 text-black">Get in touch:</h3>
        <div className="flex items-center space-x-4 mb-1">
          <p className="text-gray-900 font-normal italic">saad.shabir@hotmail.com</p>
          <div className="flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/saadshabir/" target="_blank" rel="noopener noreferrer">
              <svg aria-label="LinkedIn" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-gray-900 hover:text-gray-600"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
        <p className="text-gray-900 font-normal">Let's venture into greatness before AGI makes us the permanent underclass :)</p>
      </main>
    </div>
  );
}
