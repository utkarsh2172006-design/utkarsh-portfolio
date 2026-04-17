// ========================================
// NAVIGATION
// ========================================
export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];

// ========================================
// HERO
// ========================================
export const HERO_DATA = {
  headline: [
    { text: "I build", indent: 0 },
    { text: "AI-powered", indent: 80, accent: true, italic: true },
    { text: "systems.", indent: 160 },
  ],
  subtext: "Data · AI · Web · IIT Jodhpur",
  currentlyBuilding: "Currently: Building AI tools",
};

// ========================================
// MARQUEE
// ========================================
export const MARQUEE_ITEMS = [
  "Python",
  "Machine Learning",
  "AI Automation",
  "LLM Integration",
  "React",
  "Data Science",
  "Systems Thinking",
  "Content Creation",
];

// ========================================
// ABOUT
// ========================================
export const ABOUT_PARAGRAPHS = [
  "I'm not just studying AI — I'm applying it. At IIT Jodhpur, I've made it my mission to close the gap between what's theoretically possible and what actually ships into the real world.",
  "I think in systems. Whether it's a data pipeline, an AI workflow, or a YouTube content engine — I obsess over inputs, feedback loops, and compounding outputs. Everything connects.",
  "I build in public — documenting the real, unfiltered process of developing skills, launching projects, and turning knowledge into leverage.",
];

export const ABOUT_TIMELINE = [
  { year: "2022", label: "Started CS fundamentals" },
  { year: "2023", label: "Entered IIT Jodhpur, AI & DS" },
  { year: "2024", label: "Started building real systems" },
];

export const ABOUT_STATS = [
  { top: "IIT Jodhpur", bottom: "B.S. AI & Data Science" },
  { top: "2025", bottom: "Currently Active" },
  { top: "Open", bottom: "For Opportunities" },
];

// ========================================
// SKILLS
// ========================================
export const SKILLS_DATA = [
  {
    category: "Data Science",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "SQL",
      "Jupyter",
      "Matplotlib",
    ],
  },
  {
    category: "AI & Integration",
    skills: [
      "OpenAI API",
      "LangChain",
      "Prompt Engineering",
      "Automation",
      "LLM Fine-tuning",
    ],
  },
  {
    category: "Web Development",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "REST APIs",
      "Git",
    ],
  },
  {
    category: "Business & Growth",
    skills: [
      "Email Copywriting",
      "Audience Psychology",
      "Brand Strategy",
      "Content Systems",
    ],
  },
];

// ========================================
// PROJECTS
// ========================================
export type ProjectCategory =
  | "All"
  | "Data Science"
  | "AI"
  | "Web"
  | "Automation";

export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  categories: ProjectCategory[];
  outcome: string;
  github?: string;
  live?: string;
  image?: string;
}

export const PROJECT_FILTERS: ProjectCategory[] = [
  "All",
  "Data Science",
  "AI",
  "Web",
  "Automation",
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Email Automation System",
    description:
      "LLM-powered pipeline that drafts, personalizes, and schedules cold outreach",
    stack: ["Python", "OpenAI API", "Gmail API", "Pandas"],
    categories: ["AI", "Automation"],
    outcome: "10× faster",
    github: "#",
    live: "#",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/projects/project-1.png`,
  },
  {
    id: 2,
    title: "Market Sentiment Analyzer",
    description:
      "Real-time NLP dashboard analyzing stock sentiment from Reddit/Twitter",
    stack: ["Python", "NLTK", "Streamlit", "Tweepy"],
    categories: ["Data Science"],
    outcome: "Live dashboard",
    github: "#",
    live: "#",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/projects/project-2.png`,
  },
  {
    id: 3,
    title: "Personal Knowledge OS",
    description:
      "Second-brain system with AI-powered note capture, linking, and summarization",
    stack: ["Notion API", "Python", "GPT-4", "Zapier"],
    categories: ["AI", "Automation"],
    outcome: "Full system live",
    github: "#",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/projects/project-1.png`,
  },
  {
    id: 4,
    title: "Data Pipeline Optimizer",
    description:
      "Automated ETL pipeline reducing manual data processing for client workflows",
    stack: ["Python", "Pandas", "PostgreSQL", "Airflow"],
    categories: ["Data Science"],
    outcome: "3× faster ETL",
    github: "#",
    live: "#",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/projects/project-2.png`,
  },
];

// ========================================
// AI LAB
// ========================================
export const AI_LAB_CARDS = [
  {
    title: "automation_systems",
    description:
      "Email flows, lead gen pipelines, client onboarding automation. Building the infrastructure that runs while you sleep.",
    status: "In Progress",
  },
  {
    title: "productivity_os",
    description:
      "Personal knowledge systems, AI-assisted workflows, and time leverage tools. Optimizing the human operating system.",
    status: "In Progress",
  },
  {
    title: "llm_integration",
    description:
      "Embedding LLMs into real products, fine-tuning for domains, RAG pipelines. Making AI actually useful.",
    status: "Exploring",
  },
];

// ========================================
// YOUTUBE / BRAND
// ========================================
export const CONTENT_PILLARS = [
  {
    number: "01",
    title: "Systems Thinking",
    description: "How to design workflows that compound over time",
  },
  {
    number: "02",
    title: "Skill Building",
    description: "Learning in public, fast feedback loops",
  },
  {
    number: "03",
    title: "Execution Mindset",
    description: "The gap between knowing and shipping",
  },
  {
    number: "04",
    title: "Audience Psychology",
    description: "Attention, trust, and storytelling",
  },
];

export const YOUTUBE_VIDEOS = [
  { title: "How I Build AI Systems at IIT Jodhpur", status: "Coming soon", thumbnail: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/youtube/youtube-1.png` },
  { title: "My Productivity OS — Full Breakdown", status: "Coming soon", thumbnail: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/youtube/youtube-1.png` },
  { title: "From Student to Builder — The Mindset Shift", status: "Coming soon", thumbnail: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/youtube/youtube-1.png` },
];

// ========================================
// NOW BUILDING
// ========================================
export const NOW_ITEMS = [
  "Building an AI automation agency productized service",
  "Growing a YouTube channel on systems & skill-building",
  "Exploring LLM fine-tuning for domain-specific use cases",
];

// ========================================
// CONTACT
// ========================================
export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "utkarsh@email.com",
    href: "mailto:utkarsh@email.com",
  },
  {
    label: "LinkedIn",
    value: "/in/utkarsh",
    href: "https://linkedin.com/in/utkarsh",
  },
];

export const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/utkarsh" },
  { name: "Twitter", href: "https://twitter.com/utkarsh" },
  { name: "YouTube", href: "https://youtube.com/@utkarsh" },
];
