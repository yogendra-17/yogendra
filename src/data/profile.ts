export const profile = {
  name: "Yogendra Sankhla",
  title: "Software Engineer",
  location: "Bangalore, India",
  email: "yogisankhala17@gmail.com",
  phone: "+91 7014759453",
  linkedin: "https://www.linkedin.com/in/yogendra-sankhla-435689164/",
  resume: "/yogendra/Yogendra.pdf",
  github: "https://github.com/yogendra-17",
  twitter: "https://x.com/yogendra__17",
  photo: "/yogendra/images/yogendra-photo.jpg",
  bio: `Software engineer specializing in distributed systems, cryptography, and full-stack development. 
Building secure, scalable infrastructure across multiple domains — from multi-party computation protocols 
to AI agent systems and real-time applications.`,
};

export const experience = [
  {
    company: "Silence Laboratories",
    role: "Software Engineer",
    location: "Singapore · Remote",
    period: "Dec 2022 - Present · 3 yrs 1 mo",
    highlights: [
      "Developed software utilizing Secure Multi-Party Computation (MPC) protocols to enhance data privacy and security across distributed systems",
      "Architected AP3-a privacy-preserving infrastructure enabling autonomous AI agents to securely collaborate on sensitive computations without revealing private data, supporting multi-agent use cases like supply chain optimization (secure dot product), customer screening (private set intersection), and data sharing across competitive industries using Python + Rust, integrating with Google ADK, CrewAI, and LangChain",
      "Integrated MPC-based permissioning into AI agentic frameworks (Eliza), enabling secure session key management for autonomous agent transactions",
      "Researched and implemented various integration on Google's AP2 (Agent-to-Agent Payment Protocol) with MPC support for privacy-preserving multi-agent collaboration",
      "Built MPC + Account Abstraction integration kits for Biconomy, Stackup, and Alchemy SDKs, eliminating single points of failure in smart contract accounts",
      "Developed Silent Shard MetaMask Snap providing 2FA-style transaction approval with sub-20ms latency, reducing key exposure by 90%",
      "Contributed to ShardSafe project: distributed key management system using Shamir Secret Sharing for non-custodial recovery",
    ],
    certificates: [],
    skills: ["TypeScript", "JavaScript", "Rust", "Go", "React", "React Native", "Flask", "Python", "LangChain", "MPC", "A2A", "AP3"],
    productionLinks: [
      {
        name: "Silent Shard MetaMask Snap",
        url: "https://snaps.metamask.io/snap/npm/silencelaboratories/silent-shard-snap",
        description: "MPC-based 2FA for MetaMask transactions"
      },
      {
        name: "MPC + Account Abstraction Kits",
        url: "https://docs.silencelaboratories.com/duo/advanced-setup/mpc-+-account-abstraction-kits",
        description: "Integration kits for Biconomy, Stackup, and Alchemy"
      },
      {
        name: "Eliza Framework Integration",
        url: "https://github.com/silence-laboratories/elizaSl",
        description: "AI agent permissioning with MPC"
      },
      {
        name: "@silencelaboratories/walletprovider-sdk",
        url: "https://www.npmjs.com/package/@silencelaboratories/walletprovider-sdk",
        description: "NPM package for MPC wallet integration"
      },
      {
        name: "@silencelaboratories/universal-mpc-auth",
        url: "https://www.npmjs.com/package/@silencelaboratories/universal-mpc-auth",
        description: "Universal MPC authentication SDK"
      }
    ],
  },
  {
    company: "ETHIndia Fellowship",
    role: "Ethereum Developer",
    location: "Remote",
    period: "Feb 2023 - Apr 2023 · 3 mos",
    highlights: [
      "Selected among top 0.5% of applicants for intensive development fellowship focused on distributed systems and decentralized applications",
      "Completed multiple technical challenges including NFT systems, staking mechanisms, token exchange, state channels, and DEX implementation",
      "Built social recovery dApp enabling account recovery through distributed guardian network using modified Shamir Secret Sharing algorithm",
    ],
    certificates: [],
    skills: ["Solidity", "React.js", "Ethereum", "Smart Contracts"],
    productionLinks: [
      {
        name: "ShardSafe - Social Recovery Wallet",
        url: "https://devfolio.co/projects/shardsafe-8f80",
        description: "Non-custodial recovery dApp using Shamir Secret Sharing"
      },
      {
        name: "Speedrun Ethereum Profile",
        url: "https://speedrunethereum.com/builders/0x18911c00FCA88227A7D7FeB4D202298E4a89008e",
        description: "Completed DApp challenges: NFT, Staking, Token Vendor, State Channel, DEX"
      }
    ],
  },
  {
    company: "Zluri",
    role: "Software Engineer Intern",
    location: "Singapore · Remote",
    period: "Jul 2022 - Dec 2022 · 6 mos",
    highlights: [
      "Worked as Full Stack Engineer on the Integration Engineering Team building enterprise SaaS automation platform",
      "Created automated employee onboarding/offboarding workflow feature across multiple third-party applications",
      "Developed integration connectors and API middleware for seamless app-to-app communication",
    ],
    certificates: ["/images/zluri-certificate.jpg"],
    skills: ["MongoDB", "JavaScript", "Node.js", "Express.js", "React.js"],
  },
  {
    company: "Specter Solutions",
    role: "Software Developer",
    location: "Remote",
    period: "May 2022 - Sep 2022 · 5 mos",
    highlights: [
      "Integrated fully functional plugin for portfolio tracking with real-time fiat conversion and wallet performance monitoring",
      "Contributed to open-source development: bug fixes, issue reproduction, PR reviews, and feature additions for Specter Desktop",
      "Built monitoring system for wallet activity and transaction notifications",
    ],
    certificates: [],
    skills: ["Python", "Flask", "SQLAlchemy", "Bitcoin Core"],
  },
  {
    company: "Summer of Bitcoin",
    role: "Software Engineer",
    location: "Remote",
    period: "May 2022 - Sep 2022 · 5 mos",
    highlights: [
      "Developed Warden extension for Specter Desktop featuring portfolio tracker showing purchase price analysis and performance metrics",
      "Implemented wallet and address monitoring using personal Bitcoin node with real-time transaction notifications",
      "Built node status tracking system allowing users to monitor node performance and health metrics",
    ],
    certificates: ["/images/summer-of-bitcoin-certificate.jpg"],
    skills: ["Python", "SQLAlchemy", "Flask", "Bitcoin Protocol"],
  },
  {
    company: "Silence Laboratories",
    role: "Summer Research Intern",
    location: "Remote",
    period: "Jun 2022 - Aug 2022 · 3 mos",
    highlights: [
      "Research internship exploring cryptographic protocols and multi-party computation systems",
      "Contributed to early-stage research on distributed key management and secure computation",
    ],
    certificates: [],
    skills: ["Cryptography", "Research", "Protocol Design"],
  },
  {
    company: "Indian Red Cross Society",
    role: "Summer Intern",
    location: "Hyderabad, Telangana, India",
    period: "May 2021 - Jul 2021 · 3 mos",
    highlights: [
      "Developed full-stack web application for volunteer management and coordination",
      "Built RESTful APIs and database schemas for managing volunteer registration, scheduling, and activity tracking",
    ],
    certificates: [],
    skills: ["Express.js", "MongoDB", "Node.js", "JavaScript", "HTML", "CSS"],
  },
  {
    company: "Wall Street Club BITS Goa",
    role: "Core Team Member",
    location: "Goa, India",
    period: "Aug 2019 - Apr 2021 · 1 yr 9 mos",
    highlights: [
      "Managed shared investment portfolio of ₹1,00,000+ generating 13% CAGR returns through fundamental and technical analysis",
      "Led Investment Division team providing trading recommendations for portfolio optimization",
      "Mentored 100+ club members on investment strategies, quantitative finance, and market analysis",
    ],
    certificates: [],
    skills: ["Trading", "Finance", "Portfolio Management", "Technical Analysis"],
  },
  {
    company: "Tpie",
    role: "Co-Founder",
    location: "Remote",
    period: "Jan 2020 - Nov 2020 · 11 mos",
    highlights: [
      "Co-founded e-commerce platform after researching 5 different user personas to identify market requirements",
      "Built fully functional web application using React.js, MongoDB, and Node.js in 2 months, scaling to 10,000+ users",
      "Learned and implemented Jekyll, Figma, and various JavaScript libraries on-the-go to meet product requirements",
    ],
    certificates: [],
    skills: ["React.js", "MongoDB", "JavaScript", "Product Development", "Figma"],
  },
];

export type ProjectTrack = "distributed-systems" | "security-crypto" | "fullstack" | "systems-programming" | "ai-agents";

export interface Project {
  name: string;
  description: string;
  period: string;
  tech: string[];
  highlights: string[];
  link?: string;
  npmPackage?: string;
  image?: string;
  track: ProjectTrack[];
}

export const projects: Project[] = [
  {
    name: "Eliza Framework Integration",
    description: "Secure permissioning for AI agentic systems using MPC",
    period: "2024",
    tech: ["TypeScript", "MPC", "AI Agents", "Session Management"],
    highlights: [
      "Integrated permission engine with MPC signer for AI agent transaction approval",
      "Developed session key management allowing agents to make autonomous purchases within defined limits",
      "Built using Silent Network Protocol TSS 2/3 for distributed authorization",
      "Demonstrated secure agent-to-commerce interaction without compromising user keys",
    ],
    link: "https://github.com/silence-laboratories/elizaSl",
    image: "/images/projects/eliza.svg",
    track: ["ai-agents", "security-crypto"],
  },
  {
    name: "AP3 Protocol Research",
    description: "Privacy-preserving multi-agent collaboration protocol",
    period: "2024",
    tech: ["MPC", "Multi-Agent Systems", "Privacy Protocols"],
    highlights: [
      "Researched Google's A2A,AP2 protocol end-to-end",
      "Made additions to support secure multi-agent collaboration using MPC",
      "Built proposal for AP3(secure multi-agent collabration)",
      "Featured multiple agents collaborating while preserving data privacy",
    ],
    image: "/images/projects/ap3.svg",
    track: ["ai-agents", "security-crypto", "distributed-systems"],
  },
  {
    name: "0xBridge Core Protocol",
    description: "Open-source distributed systems library for secure cross-chain asset transfers",
    period: "Oct 2024 - Jan 2025",
    tech: ["Go", "TypeScript", "PSBT", "Taproot", "Cryptography"],
    highlights: [
      "Implemented PSBT and Taproot protocols for secure non-custodial asset locking and transfer",
      "Developed AVS node infrastructure for decentralized key management and validation",
      "Integrated cryptographic primitives and consensus mechanisms for 1:1 pegged asset minting",
      "Optimized light client implementation and block header verification for protocol efficiency",
    ],
    link: "https://github.com/0xBridge",
    npmPackage: "https://www.npmjs.com/package/@0xbridge/bitcoin-vault",
    image: "/images/projects/0xbridge.svg",
    track: ["distributed-systems", "security-crypto"],
  },
  {
    name: "Warden - Specter Desktop Extension",
    description: "Privacy-centric portfolio tracker and node monitoring system",
    period: "May 2022 - Sep 2022",
    tech: ["Python", "Flask", "SQLAlchemy", "Bitcoin Core"],
    highlights: [
      "Developed portfolio tracker displaying purchase price analysis and investment performance metrics",
      "Implemented real-time wallet monitoring with transaction notifications using personal node",
      "Built node status tracking dashboard for performance and health metrics visualization",
      "Published as open-source extension for Specter Desktop wallet",
    ],
    link: "https://github.com/yogendra-17/specterext-warden",
    image: "/images/projects/warden-dashboard.png",
    track: ["fullstack", "systems-programming"],
  },
  {
    name: "Silent Shard MetaMask Snap",
    description: "MPC-based 2FA extension for secure transaction approval",
    period: "2023",
    tech: ["TypeScript", "MPC", "Browser Extensions", "MetaMask Snaps"],
    highlights: [
      "Built 2FA-style transaction approval system using multi-party computation between browser and mobile",
      "Achieved sub-20ms latency for distributed signature generation while eliminating single points of failure",
      "Integrated with MetaMask Snaps API for seamless user experience",
      "Published on MetaMask Snaps Directory for public use",
    ],
    link: "https://snaps.metamask.io/snap/npm/silencelaboratories/silent-shard-snap",
    npmPackage: "https://www.npmjs.com/package/@silencelaboratories/walletprovider-sdk",
    image: "/images/projects/silent-shard.svg",
    track: ["security-crypto", "fullstack"],
  },
  {
    name: "MPC + Account Abstraction Integration Kits",
    description: "SDK integrations eliminating single points of failure in smart contract accounts",
    period: "2023 - 2024",
    tech: ["TypeScript", "MPC", "Account Abstraction", "Smart Contracts"],
    highlights: [
      "Developed MPC integration kits for Biconomy, Stackup, and Alchemy Account Abstraction SDKs",
      "Eliminated single EOA key dependency by distributing key shares across devices",
      "Enabled gasless 2FA-style transaction approval for smart contract wallets",
      "Published SDK packages for ecosystem-wide adoption",
    ],
    npmPackage: "https://www.npmjs.com/package/@silencelaboratories/universal-mpc-auth",
    image: "/images/projects/mpc-aa.svg",
    track: ["security-crypto", "distributed-systems"],
  },
  
  
  {
    name: "ShardSafe",
    description: "Distributed key storage and recovery system",
    period: "Mar 2023",
    tech: ["Solidity", "React", "Shamir Secret Sharing", "Cryptography"],
    highlights: [
      "Built decentralized system for secure private key storage without centralized infrastructure",
      "Implemented modified Shamir Secret Sharing algorithm with collusion resistance",
      "Enabled social recovery through distributed guardian network with no single point of failure",
      "Won recognition at ETH India Fellowship program",
    ],
    link: "https://devfolio.co/projects/shardsafe-8f80",
    image: "/images/projects/shardsafe.svg",
    track: ["security-crypto", "distributed-systems", "fullstack"],
  },
  {
    name: "Live Audio Visualizer",
    description: "High-performance real-time audio visualization in Rust",
    period: "Apr 2024 - May 2024",
    tech: ["Rust", "FFT", "Audio Processing", "Real-time Systems"],
    highlights: [
      "Engineered high-performance visualizer with real-time FFT for dynamic audio analysis",
      "Implemented interactive features: microphone input, musical note marking, playback controls",
      "Supported multiple formats (MP3, WAV, FLAC) with optimized audio processing pipeline",
      "Built playlist management with automatic looping and segment replay capabilities",
    ],
    link: "https://github.com/brewedBorrows/oxy-viz",
    image: "/images/projects/audio-visualizer.svg",
    track: ["systems-programming"],
  },
  {
    name: "GoerCervejaria",
    description: "Proximity-based verification system for proof of liveliness",
    period: "2022",
    tech: ["Solidity", "React", "Proximity Verification", "NFT"],
    highlights: [
      "Created POC for proximity-based verification to establish proof of physical presence",
      "Implemented challenge-response system to prevent automated bot participation",
      "Built NFT minting flow with integrated proximity verification",
      "Developed at ETH Lisbon hackathon",
    ],
    link: "https://github.com/goercervejaria/goercervejaria",
    image: "/images/projects/goer.svg",
    track: ["fullstack", "security-crypto"],
  },
  {
    name: "Anti-Bot NFT Mints",
    description: "Challenge-based system to prevent bot spam in NFT minting",
    period: "2022",
    tech: ["Solidity", "React", "Challenge Systems"],
    highlights: [
      "Designed dApp flow integrating external challenges to prevent automated bot participation",
      "Implemented multi-step verification requiring human interaction",
      "Deployed on Goerli testnet for public demonstration",
      "Built at ETH Berlin hackathon",
    ],
    link: "https://taikai.network/ethlisbon/hackathons/ethlisbon-2022/projects/cl9sowwkj60565201z25homgbju/idea",
    image: "/images/projects/antibot.svg",
    track: ["fullstack", "security-crypto"],
  },
];

export const trackInfo = {
  "distributed-systems": {
    name: "Distributed Systems",
    description: "Decentralized architectures, consensus mechanisms, and distributed computing",
    color: "from-blue-500 to-cyan-500",
  },
  "security-crypto": {
    name: "Security & Cryptography",
    description: "Multi-party computation, cryptographic protocols, and security engineering",
    color: "from-purple-500 to-pink-500",
  },
  fullstack: {
    name: "Full-stack Development",
    description: "End-to-end web applications with modern frameworks and databases",
    color: "from-green-500 to-emerald-500",
  },
  "systems-programming": {
    name: "Systems Programming",
    description: "Low-level programming, performance optimization, and real-time systems",
    color: "from-orange-500 to-red-500",
  },
  "ai-agents": {
    name: "AI & Agent Systems",
    description: "Autonomous agents, multi-agent protocols, and AI security",
    color: "from-indigo-500 to-violet-500",
  },
};

export const skills = {
  languages: ["Rust", "Go", "TypeScript", "JavaScript", "Python", "Solidity", "C++"],
  frameworks: ["React.js", "Next.js", "Node.js", "Express.js", "Flask", "Flutter"],
  security: ["MPC", "TSS", "Cryptography", "Zero-Knowledge Proofs", "Secure Protocols"],
  systems: ["Distributed Systems", "Real-time Processing", "Protocol Design", "API Development"],
  tools: ["Git", "MongoDB", "PostgreSQL", "Docker", "CI/CD"],
};

export const npmPackages = [
  {
    name: "@0xbridge/bitcoin-vault",
    description: "Bitcoin PSBT and Taproot protocol library",
    link: "https://www.npmjs.com/package/@0xbridge/bitcoin-vault",
  },
  {
    name: "@silencelaboratories/walletprovider-sdk",
    description: "MPC wallet provider SDK for distributed key management",
    link: "https://www.npmjs.com/package/@silencelaboratories/walletprovider-sdk",
  },
  {
    name: "@silencelaboratories/universal-mpc-auth",
    description: "Universal MPC authentication SDK",
    link: "https://www.npmjs.com/package/@silencelaboratories/universal-mpc-auth",
  },
];

export const extracurricular = [
  "Electronic Music Production",
  "Badminton",
  "Cricket",
  "Personal Finance",
];

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
