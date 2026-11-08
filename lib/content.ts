export const site = {
  name: "Sai Kiran Madala",
  title: "Frontend Engineer",
  company: "Unacademy · Graphy",
  oneLiner: "I build fast, accessible AI-powered product surfaces with React, Next.js and TypeScript.",
  url: "https://sai-s-portfolio-two.vercel.app",
  email: "saikiranmadala5555@gmail.com",
  resume: "/Sai_Kiran_Madala_Resume.pdf",
  github: "https://github.com/sai-kiran-99",
  linkedin: "https://www.linkedin.com/in/saikiranmadala",
  leetcode: "https://leetcode.com/u/saikiranmadala",
  location: "Bengaluru, India",
  headline: "2.5+ years · React · Next.js · TypeScript",
  about:
    "Frontend engineer with 2.5+ years at Unacademy (Graphy), a creator-commerce SaaS platform for course businesses. I have shipped 10+ production features end to end: component and state architecture, performance, and the APIs and LLM integrations behind them.",
};

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "project", label: "Project" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const metrics = [
  { value: 60, label: "faster creator site setup", source: "AI Website Builder" },
  { value: 20, label: "better Largest Contentful Paint", source: "Next.js 15 migration" },
  { value: 30, label: "smaller support backlog", source: "AI support escalation" },
  { value: 15, label: "less signup abandonment", source: "Onboarding rebuild" },
];

export type Place = "graphy-se" | "graphy-intern" | "academor" | "codereview";

export const places: { id: Place; label: string }[] = [
  { id: "graphy-se", label: "Graphy · Engineer" },
  { id: "graphy-intern", label: "Graphy · Intern" },
  { id: "academor", label: "Academor · Intern" },
  { id: "codereview", label: "CodeReview AI" },
];

export const experience: {
  place: Place;
  hash: string;
  head?: boolean;
  role: string;
  company: string;
  date: string;
  bullets: string[];
}[] = [
  {
    place: "graphy-se",
    hash: "a91f3c2",
    head: true,
    role: "Software Engineer, Frontend",
    company: "Unacademy · Graphy",
    date: "Sep 2024 – Present",
    bullets: [
      "Architected the AI Website Builder: prompt-based and manual editing, live preview across 5 page types, and version history with rollback. Cut creator site-setup time 60%.",
      "Led the Next.js 15 App Router migration for core pages, moving rendering server-side. Improved LCP 20%.",
      "Built WhatsApp Campaigns with an AI-assisted approval workflow for 3 organization types. Shipped in 2 sprints with zero post-launch defects.",
      "Automated AI support escalation with dissatisfaction detection and webhook-triggered human handover. Reduced support backlog 30%.",
      "Rebuilt web and mobile onboarding as a responsive step-based flow, instrumented across 6 core product flows. Signup abandonment down 15%.",
    ],
  },
  {
    place: "graphy-intern",
    hash: "7d2e0b4",
    role: "Frontend Developer Intern",
    company: "Unacademy · Graphy",
    date: "Mar 2024 – Sep 2024",
    bullets: [
      "Built mobile OTP login and signup for web and mobile, raising login-flow completion 10% in the India market.",
      "Added 3 modular components to the shared React library with Zustand, speeding feature delivery 15% across teams.",
    ],
  },
  {
    place: "academor",
    hash: "3c8b1fe",
    role: "Frontend Developer Intern",
    company: "Academor",
    date: "Jan 2024 – Mar 2024",
    bullets: ["Built responsive UI in React and Tailwind CSS for the customer-facing web product."],
  },
];

export const project = {
  name: "CodeReview AI",
  live: "https://codereview-ai-silk.vercel.app",
  repo: "https://github.com/sai-kiran-99/codereview-ai",
  description:
    "Paste code and get an AI code review streamed live: every issue with severity, line number and a suggested fix.",
  points: [
    "LLM output as newline-delimited JSON, validated line by line with Zod, so valid issues render instantly and malformed lines are skipped.",
    "JWT auth with an in-memory access token and httpOnly refresh cookie, rate limiting, review history, and Vitest coverage.",
  ],
  stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Gemini", "SSE", "Zod", "Vitest"],
};

export type Token = [kind: "kw" | "fn" | "str" | "plain" | "prop", text: string];

export const demoCode: Token[][] = [
  [["kw", "export async function "], ["fn", "getUser"], ["plain", "(id) {"]],
  [["kw", "  const "], ["plain", "res = "], ["fn", "fetch"], ["plain", "("], ["str", '"/users/"'], ["plain", " + id);"]],
  [["kw", "  const "], ["plain", "user = "], ["kw", "await "], ["plain", "res."], ["fn", "json"], ["plain", "();"]],
  [["plain", "  document.body."], ["prop", "innerHTML"], ["plain", " = user.bio;"]],
  [["kw", "  return "], ["plain", "user."], ["prop", "nmae"], ["plain", ";"]],
  [["plain", "}"]],
];

export type Severity = "critical" | "major" | "minor" | "info";

export const demoIssues: {
  severity: Severity;
  category: string;
  line: number;
  message: string;
  suggestion: string;
}[] = [
  {
    severity: "critical",
    category: "security",
    line: 4,
    message: "Unsanitized user.bio is written to innerHTML, which allows XSS.",
    suggestion: "document.body.textContent = user.bio;",
  },
  {
    severity: "major",
    category: "bug",
    line: 2,
    message: "Missing await: res is a Promise, so res.json() throws.",
    suggestion: 'const res = await fetch("/users/" + id);',
  },
  {
    severity: "minor",
    category: "bug",
    line: 5,
    message: "Typo: user.nmae is always undefined.",
    suggestion: "return user.name;",
  },
];

type Dep = { name: string; used: string; places: Place[] };

const G: Place = "graphy-se";
const I: Place = "graphy-intern";
const A: Place = "academor";
const C: Place = "codereview";

export const skills: { group: string; deps: Dep[] }[] = [
  {
    group: "dependencies",
    deps: [
      { name: "react", used: "unacademy.graphy, academor, codereview-ai", places: [G, I, A, C] },
      { name: "next.js", used: "unacademy.graphy", places: [G] },
      { name: "typescript", used: "unacademy.graphy, codereview-ai", places: [G, C] },
      { name: "tailwindcss", used: "unacademy.graphy, academor, codereview-ai", places: [G, A, C] },
      { name: "zustand", used: "unacademy.graphy", places: [G, I] },
      { name: "redux", used: "unacademy.graphy", places: [G] },
      { name: "react-query", used: "toolbox", places: [] },
      { name: "socket.io", used: "unacademy.graphy", places: [G] },
    ],
  },
  {
    group: "peerDependencies",
    deps: [
      { name: "node.js", used: "unacademy.graphy, codereview-ai", places: [G, C] },
      { name: "express", used: "codereview-ai", places: [C] },
      { name: "mongodb", used: "codereview-ai", places: [C] },
      { name: "redis", used: "toolbox", places: [] },
      { name: "gemini-api", used: "codereview-ai", places: [C] },
      { name: "openai-api", used: "toolbox", places: [] },
      { name: "server-sent-events", used: "codereview-ai", places: [C] },
      { name: "zod", used: "codereview-ai", places: [C] },
    ],
  },
  {
    group: "devDependencies",
    deps: [
      { name: "core-web-vitals", used: "unacademy.graphy", places: [G] },
      { name: "vitest", used: "codereview-ai", places: [C] },
      { name: "amplitude", used: "unacademy.graphy", places: [G] },
      { name: "vercel", used: "codereview-ai", places: [C] },
    ],
  },
];
