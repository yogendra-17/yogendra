export const profile = {
  name: "Yogendra Sankhla",
  title: "Software Security Engineer",
  location: "Bangalore, India",
  email: "f20190287g@alumni.bits-pilani.ac.in",
  phone: "+91 7014759453",
  linkedin: "https://linkedin.com/in/yogendrasankhla",
  github: "https://github.com/yogendrasankhla",
  bio: `Blockchain developer and security engineer with expertise in MPC, 
cryptographic protocols, and decentralized systems. Building secure 
infrastructure for the next generation of distributed applications.`,
};

export const experience = [
  {
    company: "Silence Laboratories",
    role: "Software Security Engineer",
    location: "Singapore (Hybrid)",
    period: "Dec 2022 - Present",
    highlights: [
      "Integrated privacy-preserving MPC workflows into AI agents for secure inference on encrypted data",
      "Developed 2FA 'Swipe to Approve' for MetaMask using TSS library, reducing key exposure by 90%",
    ],
  },
  {
    company: "Eth-India Fellowship",
    role: "Ethereum Blockchain Developer",
    location: "Bangalore",
    period: "Mar 2023 - Apr 2023",
    highlights: [
      "Selected among top 0.5% applicants for intensive blockchain fellowship",
      "Built DApps: NFT, Staking, Token Vendor, State Channel, DEX, Social Recovery",
    ],
  },
  {
    company: "Summer of Bitcoin",
    role: "Bitcoin Developer",
    location: "Remote",
    period: "May 2022 - Dec 2022",
    highlights: [
      "Developed Specter-Desktop extension with portfolio tracker and investment analysis",
      "Built real-time wallet monitoring and Bitcoin node status tracking",
    ],
  },
];

export const projects = [
  {
    name: "OxBridge Core Protocol",
    description: "Open Source Bitcoin PSBT Library",
    period: "Oct 2024 - Jan 2025",
    tech: ["Go", "TypeScript", "PSBT", "Taproot"],
    highlights: [
      "Implemented PSBT and Taproot Protocol for secure BTC cross-chain transfer",
      "Developed AVS node infrastructure for decentralized key management",
    ],
    link: "#",
  },
  {
    name: "Live Audio Visualizer",
    description: "Real-time audio visualization in Rust",
    period: "Apr 2024 - May 2024",
    tech: ["Rust", "FFT", "Audio Processing"],
    highlights: [
      "High-performance visualizer with real-time FFT and microphone input",
      "Supports MP3, WAV, FLAC with full playback controls",
    ],
    link: "#",
  },
  {
    name: "Decentralised Social Recovery",
    description: "Blockchain D-app for key recovery",
    period: "Oct 2022 - Dec 2022",
    tech: ["Solidity", "React", "Shamir Secret"],
    highlights: [
      "Shards private keys across trusted social accounts",
      "Collusion resistant with modified Shamir secret algorithm",
    ],
    link: "#",
  },
];

export const skills = {
  languages: ["Rust", "Go", "TypeScript", "Solidity", "C++", "Python"],
  frameworks: ["React.js", "Next.js", "Flutter"],
  blockchain: ["Ethereum", "Bitcoin", "MPC", "TSS", "PSBT", "Taproot"],
  tools: ["Git", "MongoDB", "Node.js"],
};

export const education = {
  institution: "Birla Institute of Technology and Sciences, Pilani, Goa",
  degree: "B.E (Hons.) Electronics and Instrumentation Engineering",
  year: "2023",
};

export const articles = [
  {
    title: "Understanding Zero-Knowledge Proofs",
    source: "Vitalik's Blog",
    date: "2024-11-15",
    link: "#",
    tags: ["cryptography", "zkp"],
  },
  {
    title: "The Future of Account Abstraction",
    source: "Ethereum Research",
    date: "2024-11-10",
    link: "#",
    tags: ["ethereum", "aa"],
  },
  {
    title: "Bitcoin's Taproot Explained",
    source: "Bitcoin Magazine",
    date: "2024-11-05",
    link: "#",
    tags: ["bitcoin", "taproot"],
  },
];
