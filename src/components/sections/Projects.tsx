"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/ui/SocialIcons";

const ease = [0.25, 0.1, 0.25, 1] as const;

type Project = {
  title: string;
  description: string;
  longDesc: string;
  tech: string[];
  metrics: { value: string; label: string }[];
  badge: string;
  badgeColor: string;
  screenshot?: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "AI-Powered Developer Migration Assistant",
    description: "LLM-driven tool that automates API migration workflows",
    longDesc:
      "Built an intelligent migration assistant using OpenAI's GPT-4 API that analyzes legacy code patterns, generates migration plans, and produces updated code — reducing manual migration effort by 60% for OCI engineering teams.",
    tech: ["React", "TypeScript", "OpenAI APIs", "Node.js", "Redux"],
    metrics: [
      { value: "60%",  label: "Migration time saved" },
      { value: "200+", label: "Engineers onboarded" },
      { value: "95%",  label: "Accuracy rate" },
    ],
    badge: "AI / LLM",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    title: "Shared Frontend Platform & Design System",
    description: "Enterprise-grade component library and monorepo architecture",
    longDesc:
      "Architected a cross-team frontend platform using Nx monorepo, Storybook, and an 80+ component design system. Reduced UI inconsistencies by 80% and cut new engineer onboarding time from weeks to days.",
    tech: ["React", "TypeScript", "Storybook", "Nx", "TailwindCSS"],
    metrics: [
      { value: "80+",  label: "Components built" },
      { value: "10+",  label: "Product teams" },
      { value: "80%",  label: "Bug reduction" },
    ],
    badge: "Design System",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    screenshot: "/projects/OCI.png",
    liveUrl: "https://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html",
  },
  {
    title: "IRCTC E-Catering Platform",
    description: "High-traffic food ordering platform for Indian Railways",
    longDesc:
      "Rebuilt the IRCTC e-catering frontend with React and Next.js SSR, serving millions of travelers. Optimized for low-bandwidth connectivity with lazy loading, service workers, and aggressive caching.",
    tech: ["React", "Next.js", "GraphQL", "Playwright"],
    metrics: [
      { value: "300M+", label: "Users served" },
      { value: "+25%",  label: "Order conversion" },
      { value: "<2s",   label: "LCP" },
    ],
    badge: "High Scale",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    screenshot: "/projects/IRCTC E-catering.png",
  },
  {
    title: "Dosist — Cannabis Wellness Brand Platform",
    description: "Immersive scroll-driven brand and e-commerce experience",
    longDesc:
      "Built the brand and product showcase platform for Dosist, a design-forward cannabis wellness company. Delivered cinematic scroll-driven product presentations, dose-formula storytelling pages, and a retail locator — optimised for engagement, accessibility, and mobile performance.",
    tech: ["React", "JavaScript", "CSS3", "HTML5", "Figma", "REST APIs"],
    metrics: [
      { value: "99",    label: "Lighthouse score" },
      { value: "3×",    label: "Engagement lift" },
      { value: "<1.5s", label: "Mobile LCP" },
    ],
    badge: "Consumer Brand",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    screenshot: "/projects/Dosist.png",
    liveUrl: "https://dosist.com/",
  },
];

const personalProjects = [
  {
    title: "Portfolio Website",
    description: "This site — built with Next.js, TailwindCSS v4, and Framer Motion.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
    screenshot: "/projects/Portfolio.png",
    githubUrl: "https://github.com/manishyml/portfolio",
  },
  {
    title: "TankerFlow",
    description: "A logistics platform for streamlining tanker fleet management and fuel delivery.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    screenshot: "/projects/TankerFlow.png",
    liveUrl: "https://tankerflow.vercel.app/",
  },
  {
    title: "Investherapy",
    description: "A personal finance platform helping users build mindful money habits.",
    tech: ["React", "TypeScript", "TailwindCSS", "Node.js"],
    screenshot: "/projects/Investherapy.png",
    liveUrl: "https://investherapy-web.vercel.app/",
  },
];

function BrowserShell({
  index,
  screenshot,
  title,
}: {
  index: number;
  screenshot?: string;
  title: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <div className="mx-auto flex-1 max-w-[60%]">
          <div className="flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1">
            <span className="text-[10px] text-zinc-400 font-mono truncate">
              project-{String(index + 1).padStart(2, "0")}.dev
            </span>
          </div>
        </div>
      </div>
      {/* Screenshot or placeholder */}
      {screenshot ? (
        <div className="relative h-[260px] w-full bg-zinc-100">
          <Image
            src={screenshot}
            alt={title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div className="flex min-h-[260px] flex-col gap-3 bg-zinc-950 p-6">
          <div className="h-3 w-24 rounded-full bg-white/15" />
          <div className="h-3 w-36 rounded-full bg-white/10" />
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 rounded-xl bg-white/8" />
            ))}
          </div>
          <div className="mt-auto flex gap-2.5">
            <div className="h-8 w-20 rounded-full bg-white/10" />
            <div className="h-8 w-14 rounded-full bg-white/8" />
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease }}
      className="overflow-hidden rounded-[1.25rem] border border-zinc-200/80 bg-white shadow-xs"
    >
      <div className={`grid gap-0 lg:grid-cols-2 ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}>
        {/* Visual side */}
        <div className="border-b border-zinc-100 p-5 lg:border-b-0 lg:border-r">
          <BrowserShell index={index} screenshot={project.screenshot} title={project.title} />
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-center gap-5 p-8">
          <div className="flex items-center gap-2">
            <span className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${project.badgeColor}`}>
              {project.badge}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-zinc-950">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-500">{project.description}</p>
          </div>

          <p className="text-[0.9375rem] leading-7 text-zinc-600">{project.longDesc}</p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-zinc-100 bg-zinc-50 p-3 text-center"
              >
                <p className="text-base font-bold text-zinc-950">{metric.value}</p>
                <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[11px] font-semibold text-zinc-600"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                Live demo <ArrowUpRight size={15} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
              >
                <GithubIcon size={15} /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <>
      {/* Work projects */}
      <section id="projects" className="relative z-20 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="section-header">
            <p className="section-label">Work</p>
            <h2 className="section-title">Projects that combine scale, polish, and real impact.</h2>
            <p className="section-copy">
              Selected product and platform work highlighting architecture, performance, and design systems.
            </p>
          </div>
          <div className="space-y-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Personal projects */}
      <section className="relative z-20 bg-zinc-50/60 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="section-header">
            <p className="section-label">Personal</p>
            <h2 className="section-title">Open source and personal tooling.</h2>
            <p className="section-copy">
              Small but high-leverage projects that show my workflow, tooling preferences, and interests.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {personalProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="group flex flex-col overflow-hidden rounded-[1.25rem] border border-zinc-200/80 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Screenshot */}
                <div className="relative h-44 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={project.screenshot}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="text-[1.0625rem] font-bold text-zinc-950">{project.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-zinc-500">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-semibold text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2.5">
                    {"liveUrl" in project && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-zinc-800"
                      >
                        Live site <ExternalLink size={12} />
                      </a>
                    )}
                    {"githubUrl" in project && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-50"
                      >
                        <GithubIcon size={12} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
