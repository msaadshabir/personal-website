export const SITE_CONFIG = {
  name: "Muhammad Saad Shabir",
  email: "saad.shabir@hotmail.com",
  github: "https://github.com/msaadshabir",
  linkedin: "https://www.linkedin.com/in/msaadshabir/",
  resume: "/MuhammadSaad_Shabir_Resume.pdf",
} as const;

// Projects data
export const PROJECTS = [
  {
    id: "001",
    name: "ZTAP",
    url: "https://github.com/msaadshabir/ZTAP",
    description: "Cross-platform zero-trust microsegmentation engine enforcing network policies at the kernel level (eBPF, WFP, pf) with etcd-backed policy distribution and hybrid cloud security orchestration (AWS/GCP/Azure).",
    tags: ["Go", "eBPF (CO-RE)", "Windows Filtering Platform (WFP)", "etcd", "gRPC", "Prometheus", "AWS/Azure/GCP", "Kubernetes"],
  },
  {
    id: "002",
    name: "pci-segment",
    url: "https://github.com/msaadshabir/pci-segment",
    description: "CLI tool for PCI-DSS network segmentation with policy validation, cloud sync (AWS/Azure), eBPF enforcement, and compliance reporting.",
    tags: ["Go", "eBPF", "YAML", "CLI", "AWS/Azure"],
  },
  {
    id: "003",
    name: "cloud-netmapper",
    url: "https://github.com/msaadshabir/cloud-netmapper",
    description: "AWS infrastructure visualization and security analysis tool - generates interactive network maps, detects misconfigurations, and exports reports in multiple formats.",
    tags: ["Go", "AWS SDK", "Graphviz", "JSON", "CLI"],
  },
  {
    id: "004",
    name: "net-guardian",
    url: "https://github.com/msaadshabir/net-guardian",
    description: "Automated network security auditor with device discovery, port scanning, anomaly detection, and vulnerability checking.",
    tags: ["Python", "Nmap", "Machine-Learning", "CLI", "Docker"],
  },
  {
    id: "005",
    name: "personal-ai-cli",
    url: "https://github.com/msaadshabir/personal-ai-cli",
    description: "A terminal-based, self-hosted personal AI chatbot powered by RAG. Chat with your own documents using local LLMs via Ollama. No cloud, no tracking, fully private.",
    tags: ["Python", "Local LLM (Ollama)", "RAG", "CLI"],
  },
  {
    id: "006",
    name: "CloudChat",
    url: "https://github.com/msaadshabir/CloudChat",
    description: "A modern Twitter/X clone built with Next.js 15, React 19, and TypeScript. Features real-time updates, infinite scroll, optimistic UI, and Clerk authentication.",
    tags: ["Next.js", "React", "TypeScript", "Clerk", "Full-stack"],
  },
] as const;

// Experience data
export const EXPERIENCE = [
  {
    position: "Network Technician",
    company: "AriesTECH",
    dates: "January 2024 - April 2025",
    description: [
      "Maintained 99% uptime for Cisco infrastructure through advanced routing and monitoring, while implementing Python automation to reduce manual configuration time by 30%.",
    ],
    link: "#",
  },
] as const;