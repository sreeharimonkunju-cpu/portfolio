import { Project, Skill, Certificate } from '../types';

export const PERSONAL_INFO = {
  name: "Sreehari PS",
  alternateName: "Sreehari P.S.",
  headline: "Hi, I'm Sreehari PS",
  subheadline: "B.Tech CS Student | Building intelligent solutions with Python, Generative AI, and Modern Web Tech.",
  location: "Tirunelveli / Kanyakumari, Tamil Nadu, India",
  email: "sreeharimonkunju@gmail.com",
  phone: "+91 94958 68851",
  secondaryPhone: "+91 94952 68851",
  github: "https://github.com/sreeharimonkunju-cpu",
  linkedin: "https://www.linkedin.com/in/sreehari-p-s-899a27308/",
  university: "Joy University, Kanyakumari",
  degree: "B.Tech in Artificial Intelligence & Machine Learning",
  expectedYear: "2030",
  currentRole: "AI-Assisted Product Developer & B.Tech Student",
  status: "Available for AI Trainee Roles & Collaborative Engineering",
  bio: "B.Tech Artificial Intelligence & Machine Learning scholar with hands-on expertise building and deploying AI-driven products using vibe coding, autonomous agents, and modern full-stack web architectures. Passionate about applying AI to high-impact domains such as medical diagnostics, automated identity verification, and multi-model voice assistants.",
  pillars: [
    {
      title: "Intelligent Systems & Agents",
      desc: "Architecting hybrid local and cloud agentic pipelines combining Google Gemini with offline Ollama models, SQLite memory stores, and zero-latency desktop automation.",
      tag: "Agentic AI"
    },
    {
      title: "Trust & Document Screening",
      desc: "Developing explainable computer-vision and tampering detection algorithms for high-security digital ID verification with multi-stage risk scoring.",
      tag: "Explainable AI"
    },
    {
      title: "Rapid Vibe Coding to Hosted MVPs",
      desc: "Accelerating the trajectory from conceptual prompts to robust, hosted web applications with clean architecture, Material Design 3, and liquid UI paradigms.",
      tag: "Rapid Prototyping"
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "jarvis",
    title: "Jarvis",
    tagline: "Hybrid Local/Online Autonomous AI Assistant",
    category: "AI Assistant",
    description: "A production-grade, modular, hybrid-cognitive personal assistant combining Google Gemini Cloud intelligence with offline Ollama local reasoning, zero-latency desktop automation, and SQLite MemOS.",
    fullOverview: "Jarvis is inspired by Tony Stark's personal assistant architecture. It features a decoupled 5-layer pipeline: Perception (SpeechRecognition & Async TTS Queue), Cognitive Orchestration (Gemini 2.5 Flash cloud fallback + Ollama Llama 3.2 offline reasoning), Tool Execution (system automation, file management, audio calibration), and MemOS (SQLite dual-tier sliding-window memory with audit trail).",
    problemStatement: "Most AI assistants either fail when disconnected from the internet or lack deep system integration. Jarvis solves this with local fallback and instant desktop tool execution.",
    architectureHighlights: [
      "Decoupled 5-layer architecture (Perception, Orchestration, Tools, Memory, Rich HUD)",
      "Hybrid routing: High-complexity tasks dispatch to Gemini 2.5 Flash; offline mode engages Ollama Llama 3.2",
      "Persistent MemOS: SQLite dual-tier store for short-term conversation context and long-term user preferences",
      "Perception engine: Ambient noise calibrator, async TTS queue (pyttsx3/edge-tts), and Rich CLI dashboard"
    ],
    techStack: [
      "Python",
      "Gemini 2.5 Flash",
      "Ollama (Llama 3.2)",
      "SQLite (MemOS)",
      "SpeechRecognition",
      "pyttsx3 / edge-tts",
      "Rich CLI"
    ],
    sourceUrl: "https://github.com/sreeharimonkunju-cpu/jarvis",
    status: "Active Development",
    icon: "Bot",
    featuredBadge: "Flagship AI Project",
    metrics: [
      { label: "Architecture", value: "5-Layer Decoupled" },
      { label: "Offline Inference", value: "<150ms Local" },
      { label: "Memory Retention", value: "Dual-Tier SQLite" }
    ]
  },
  {
    id: "fako-trustlens",
    title: "FAKO AI / TrustLens AI",
    tagline: "Fake ID Detector & Document Tampering Screening",
    category: "Computer Vision & Fraud",
    description: "A high-performance hackathon MVP that screens government & institutional identity documents for digital tampering, typeface anomalies, and generates explainable trust/risk scores.",
    fullOverview: "Built for rapid fraud detection, TrustLens AI features an animated multi-stage verification pipeline: Document Alignment, Artifact & Tampering Analysis, Optical Character Recognition cross-checks, and algorithmic trust scoring. Includes configurable risk thresholds, explainable 'Why?' diagnostic reports, and session persistence.",
    problemStatement: "Manual identity document verification is slow and vulnerable to digitally edited credentials. FAKO AI automates screening in seconds with transparent risk metrics.",
    architectureHighlights: [
      "Animated multi-stage verification pipeline with step-by-step progress metrics",
      "Explainable AI ('Why?' report) dissecting metadata mismatches and artifact anomalies",
      "Configurable risk scoring thresholds and local session persistence via browser storage",
      "Modular AI service layer engineered for seamless integration with real OCR & face verification APIs"
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "Vercel"
    ],
    demoUrl: "https://trustlens-ai.vercel.app",
    sourceUrl: "https://github.com/sreeharimonkunju-cpu/trustlens-ai",
    status: "Production MVP",
    icon: "ShieldAlert",
    featuredBadge: "Hackathon MVP",
    metrics: [
      { label: "Verification Stages", value: "4 Multi-Pass" },
      { label: "Explainability", value: "Deep 'Why?' Breakdown" },
      { label: "Pipeline Latency", value: "<2.4s Simulation" }
    ]
  },
  {
    id: "style-muse",
    title: "Style Muse AI",
    tagline: "AI-Driven Fashion & Outfit Harmony Assistant",
    category: "Vibe Coded Product",
    description: "A responsive AI styling web application where users upload their wardrobe and receive occasion-ready outfit combinations powered by color harmony algorithms and prompt-driven styling.",
    fullOverview: "Style Muse AI (also known as Make Yourself Fit) was conceived and launched through prompt-driven vibe coding. It guides users through uploading wardrobe items, assessing chromatic compatibility, suggesting weather and occasion-tailored combinations, and generating accessory recommendations.",
    problemStatement: "Choosing outfits for varied occasions often leads to decision fatigue. Style Muse uses generative design and color matching rules to craft stylish combinations effortlessly.",
    architectureHighlights: [
      "Vibe coded product lifecycle from initial conceptual prompts to live production deployment",
      "Wardrobe asset catalog with intelligent color palette and seasonal tagging",
      "Occasion-based recommendation engine (Formal, Casual, Festive, Athletic)",
      "Interactive styling preview cards with saved favorites and outfit history"
    ],
    techStack: [
      "React",
      "TypeScript",
      "Lovable / Vibe Coding",
      "Tailwind CSS",
      "Vercel"
    ],
    demoUrl: "https://style-muse-ai.vercel.app",
    sourceUrl: "https://github.com/sreeharimonkunju-cpu",
    status: "Live Demo",
    icon: "Sparkles",
    featuredBadge: "Vibe Coded",
    metrics: [
      { label: "Development", value: "Rapid Prompt Driven" },
      { label: "Styling Modes", value: "Occasion + Seasonal" },
      { label: "Responsive", value: "100% Mobile Ready" }
    ]
  }
];

export const SKILLS: Skill[] = [
  // Core AI & Languages
  { name: "Python", category: "Core AI & Languages", level: 92, iconName: "Terminal", highlight: true, description: "System scripting, AI pipelines, async workers, backend APIs, data manipulation." },
  { name: "Generative AI", category: "Core AI & Languages", level: 90, iconName: "BrainCircuit", highlight: true, description: "Gemini API, Local LLMs (Ollama Llama 3.2), prompt engineering, retrieval pipelines." },
  { name: "Prompt Engineering", category: "Core AI & Languages", level: 94, iconName: "MessageSquareCode", highlight: true, description: "Zero-shot, few-shot, agent workflows, structured JSON output extraction." },
  { name: "Data Serialization", category: "Core AI & Languages", level: 86, iconName: "FileJson", highlight: true, description: "JSON schema validation, Protocol Buffers, Pickle, SQLite binary persistence." },
  { name: "SQL & Databases", category: "Core AI & Languages", level: 82, iconName: "Database", highlight: false, description: "SQLite, PostgreSQL queries, indexing, session and audit trail relational storage." },

  // Frontend & Design
  { name: "React", category: "Frontend & Design", level: 88, iconName: "Layers", highlight: true, description: "Modern functional components, hooks, custom state management, performance optimization." },
  { name: "Material Design 3", category: "Frontend & Design", level: 92, iconName: "Palette", highlight: true, description: "M3 elevation tokens, tonal surface containers, state layers, responsive grids, fluid ripples." },
  { name: "Tailwind CSS", category: "Frontend & Design", level: 90, iconName: "Wind", highlight: true, description: "Custom utility configuration, responsive flex/grid layouts, frosted glassmorphism." },
  { name: "CapCut Video Editing", category: "Frontend & Design", level: 85, iconName: "Video", highlight: true, description: "Product demo creation, keyframe animations, audio synchronization, pacing and visual storytelling." },
  { name: "TypeScript", category: "Frontend & Design", level: 84, iconName: "Code2", highlight: false, description: "Strict typing, interface contracts, reusable generic components, API schemas." },
  { name: "HTML5 / CSS3", category: "Frontend & Design", level: 95, iconName: "Globe", highlight: false, description: "Semantic markup, CSS animations, backdrop filters, CSS Grid and flexbox mastery." },

  // Systems, Data & Tools
  { name: "Vibe Coding", category: "Systems, Data & Tools", level: 95, iconName: "Zap", highlight: true, description: "AI-assisted rapid prototyping using Lovable, VS Code Copilot, Antigravity, and Stitch AI." },
  { name: "n8n Automation", category: "Systems, Data & Tools", level: 80, iconName: "Workflow", highlight: false, description: "Automated workflow design, webhook triggers, multi-step API integrations." },
  { name: "Telegram Bots", category: "Systems, Data & Tools", level: 85, iconName: "Send", highlight: false, description: "Interactive bot creation, webhook listening, automated notification dispatch." },
  { name: "Git & GitHub", category: "Systems, Data & Tools", level: 88, iconName: "GitBranch", highlight: false, description: "Version control, branching strategies, collaborative workflows, CI/CD deploys." },
  { name: "Vercel Hosting", category: "Systems, Data & Tools", level: 90, iconName: "Cloud", highlight: false, description: "Production deployments, preview environments, custom domains, edge routing." }
];

export const CERTIFICATE_DATA: Certificate = {
  id: "vibe-coding-2026",
  title: "Vibe Coding Workshop 2026",
  issuer: "Google for Developers",
  collaborator: "StartupTN & Noorul Islam Centre for Higher Education",
  date: "30 October 2026",
  certificateId: "VCW26-Q2XP2",
  recipient: "Sreehari P. S",
  venue: "Noorul Islam Centre for Higher Education, Kumaracoil, Kanniyakumari District",
  signatory: "M Senthil Kumar",
  signatoryRole: "Google Developer Expert, Google for Developers",
  description: "Successfully participated in the prestigious Vibe Coding Workshop 2026 organised by StartupTN in direct collaboration with Google for Developers, focusing on AI-assisted rapid development, agentic workflows, and prompt-driven product engineering.",
  skillsLearned: [
    "AI-Assisted Rapid Web Prototyping",
    "Agentic Problem Solving with Gemini",
    "Prompt-Driven Architecture & UI Generation",
    "Real-World Production Deployment Workflows"
  ]
};
