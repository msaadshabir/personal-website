export const SITE_CONFIG = {
  name: "Muhammad Saad Shabir",
  email: "saad.shabir@hotmail.com",
  github: "https://github.com/msaadshabir",
  linkedin: "https://www.linkedin.com/in/msaadshabir/",
  resume: "/MuhammadSaad_Shabir_Resume.pdf",
} as const;

// Navigation link styles
export const NAV_LINK_STYLES = {
  active: "font-bold text-zinc-900 dark:text-zinc-50",
  inactive: "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50",
  base: "text-xl md:text-2xl transition-colors",
} as const;

// Projects data
export const PROJECTS = [
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
] as const;