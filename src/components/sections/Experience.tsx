"use client";
import { motion } from "framer-motion";
import { MapPin, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ease = [0.25, 0.1, 0.25, 1] as const;

type Highlight = { label: string; value: string };

type Exp = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  location: string;
  logo: string;
  headerBg: string;
  accentText: string;
  accentBg: string;
  accentBorder: string;
  dotColor: string;
  achievements: string[];
  tech: string[];
  highlights: Highlight[];
};

const experiences: Exp[] = [
  {
    company: "Oracle Cloud Infrastructure (OCI)",
    role: "Software Developer",
    period: "2022 — Present",
    current: true,
    location: "Bangalore, India",
    logo: "/company-logos/oracle.svg",
    headerBg: "from-[#C74634] to-[#9e2e22]",
    accentText: "text-red-700",
    accentBg: "bg-red-50",
    accentBorder: "border-red-100",
    dotColor: "bg-red-500",
    achievements: [
      "Led frontend architecture for OCI Console features used by thousands of enterprise cloud customers globally.",
      "Built and maintained a shared frontend platform — component library, Nx monorepo tooling, and CI/CD pipelines.",
      "Integrated an AI-driven migration assistant using OpenAI APIs, reducing migration time by 60%.",
      "Drove WCAG 2.1 AA accessibility compliance across the product surface.",
      "Mentored engineers and established enterprise-grade frontend best practices.",
    ],
    tech: ["React", "TypeScript", "Redux", "Nx", "Storybook", "OpenAI APIs", "Azure DevOps"],
    highlights: [
      { label: "CWV Performance", value: "+40%" },
      { label: "Award",           value: "Diamond" },
      { label: "Team Size",       value: "20+ Eng" },
    ],
  },
  {
    company: "Paytm",
    role: "Software Engineer",
    period: "2020 — 2022",
    location: "Noida, India",
    logo: "/company-logos/paytm.svg",
    headerBg: "from-[#20336B] to-[#0f1f45]",
    accentText: "text-blue-700",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100",
    dotColor: "bg-blue-500",
    achievements: [
      "Developed core fintech features for Paytm's wallet and payments platform serving 300M+ users.",
      "Rebuilt the IRCTC e-catering frontend with React, improving order conversion by 25%.",
      "Built a cross-team design system used by 10+ product teams.",
      "Optimized performance with lazy loading, code splitting, and SSR for sub-2s LCP.",
      "Implemented Playwright suites with 85%+ coverage.",
    ],
    tech: ["React", "Next.js", "JavaScript", "Redux", "Node.js", "GraphQL", "Playwright"],
    highlights: [
      { label: "Users Served", value: "300M+" },
      { label: "Award",        value: "Rock Star" },
      { label: "Conversion",   value: "+25%" },
    ],
  },
  {
    company: "Y Media Labs",
    role: "Associate Software Engineer",
    period: "2018 — 2020",
    location: "Bangalore, India",
    logo: "/company-logos/ymedialabs.svg",
    headerBg: "from-[#4F46E5] to-[#3730a3]",
    accentText: "text-violet-700",
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-100",
    dotColor: "bg-violet-500",
    achievements: [
      "Delivered frontend solutions for Fortune 500 clients and enterprise web apps.",
      "Built reusable React component libraries and contributed to an internal design system.",
      "Translated complex Figma prototypes into polished, responsive UI.",
      "Implemented accessible experiences with strong cross-browser compatibility.",
    ],
    tech: ["React", "JavaScript", "CSS3", "HTML5", "Figma", "REST APIs"],
    highlights: [
      { label: "Clients",  value: "Fortune 500" },
      { label: "Award",    value: "Shining Star" },
      { label: "Projects", value: "15+ shipped" },
    ],
  },
];

function ExperienceCard({ exp, index }: { exp: Exp; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease }}
      className="overflow-hidden rounded-[1.25rem] border border-zinc-200/80 bg-white shadow-xs"
    >
      {/* Branded header */}
      <div
        className={cn(
          "relative flex items-center justify-between gap-4 px-6 py-5",
          `bg-gradient-to-r ${exp.headerBg}`
        )}
      >
        {/* Logo pill */}
        <div className="relative z-10 flex items-center rounded-xl bg-white px-4 py-2 shadow-sm">
          <img
            src={exp.logo}
            alt={exp.company}
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Period + badge */}
        <div className="relative z-10 flex flex-col items-end gap-1.5">
          {exp.current && (
            <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              Current
            </span>
          )}
          <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            {exp.period}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 lg:p-8">

        {/* Role + location */}
        <div className="mb-6">
          <h3 className="text-xl font-bold tracking-tight text-zinc-950 lg:text-2xl">
            {exp.role}
          </h3>
          <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500">
            <span className="font-medium text-zinc-700">{exp.company}</span>
            <span className="text-zinc-300">·</span>
            <MapPin size={12} className="text-zinc-400" />
            <span>{exp.location}</span>
          </p>
        </div>

        {/* Highlight stats */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          {exp.highlights.map((h) => (
            <div
              key={h.label}
              className={cn(
                "rounded-xl border px-3 py-3 text-center",
                exp.accentBg, exp.accentBorder
              )}
            >
              <p className={cn("text-[10px] font-bold uppercase tracking-[0.16em] opacity-60", exp.accentText)}>
                {h.label}
              </p>
              <p className={cn("mt-0.5 text-sm font-bold", exp.accentText)}>
                {h.value}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <ul className="mb-6 space-y-3">
          {exp.achievements.map((a, i) => (
            <li key={i} className="flex gap-3 text-sm leading-[1.75] text-zinc-600">
              <span className={cn("mt-[8px] h-1.5 w-1.5 flex-shrink-0 rounded-full", exp.dotColor)} />
              {a}
            </li>
          ))}
        </ul>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[11px] font-semibold text-zinc-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="bg-zinc-50/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="section-header">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Career timeline and impact at every stage.</h2>
          <p className="section-copy">
            7+ years shipping frontend work across cloud infrastructure, fintech, and enterprise product teams.
          </p>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
