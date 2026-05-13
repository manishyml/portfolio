"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { SimpleIcon } from "simple-icons";
import {
  siReact, siNextdotjs, siTypescript, siTailwindcss,
  siRedux, siReactquery, siStorybook, siPreact,
  siFramer, siJavascript, siHtml5,
  siNodedotjs, siGraphql, siExpress, siNx,
  siWebpack, siVite, siGit, siJest, siOpenapiinitiative,
} from "simple-icons";
import { Layers, Sparkles, Database, Server, Wrench, FlaskConical } from "lucide-react";

type Tech = {
  name: string;
  si?: SimpleIcon;
  customIcon?: string;
};

type Category = {
  id: string;
  title: string;
  desc: string;
  Icon: React.ElementType;
  accent: string;
  techs: Tech[];
};

const categories: Category[] = [
  {
    id: "frontend",
    title: "Frontend Core",
    desc: "UI frameworks & languages",
    Icon: Layers,
    accent: "text-sky-600",
    techs: [
      { name: "React",      si: siReact      },
      { name: "Next.js",    si: siNextdotjs  },
      { name: "TypeScript", si: siTypescript },
      { name: "JavaScript", si: siJavascript },
      { name: "HTML5",      si: siHtml5      },
      { name: "Preact",     si: siPreact     },
    ],
  },
  {
    id: "styling",
    title: "Styling & Motion",
    desc: "Design systems & animation",
    Icon: Sparkles,
    accent: "text-violet-600",
    techs: [
      { name: "TailwindCSS",   si: siTailwindcss },
      { name: "Framer Motion", si: siFramer      },
      { name: "Storybook",     si: siStorybook   },
    ],
  },
  {
    id: "state",
    title: "State & Data",
    desc: "State management & APIs",
    Icon: Database,
    accent: "text-emerald-600",
    techs: [
      { name: "Redux",       si: siRedux            },
      { name: "React Query", si: siReactquery       },
      { name: "Zustand",     customIcon: "/tech-icons/zustand.svg" },
      { name: "GraphQL",     si: siGraphql          },
      { name: "REST APIs",   si: siOpenapiinitiative},
    ],
  },
  {
    id: "backend",
    title: "Backend & Runtime",
    desc: "Server-side & cloud infrastructure",
    Icon: Server,
    accent: "text-orange-600",
    techs: [
      { name: "Node.js",      si: siNodedotjs },
      { name: "Express.js",   si: siExpress   },
      { name: "Azure DevOps", customIcon: "/tech-icons/azure-devops.svg" },
    ],
  },
  {
    id: "tooling",
    title: "Build & Tooling",
    desc: "Bundlers & dev workflow",
    Icon: Wrench,
    accent: "text-amber-600",
    techs: [
      { name: "Webpack", si: siWebpack },
      { name: "Vite",    si: siVite    },
      { name: "Git",     si: siGit     },
      { name: "Nx",      si: siNx      },
    ],
  },
  {
    id: "testing",
    title: "Testing & AI",
    desc: "Quality assurance & intelligence",
    Icon: FlaskConical,
    accent: "text-rose-600",
    techs: [
      { name: "Jest",        si: siJest },
      { name: "Playwright",  customIcon: "/tech-icons/playwright.svg" },
      { name: "OpenAI APIs", customIcon: "/tech-icons/openai.svg"     },
    ],
  },
];

function TechChip({ tech }: { tech: Tech }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-100">
      <span className="flex h-3.5 w-3.5 flex-shrink-0 items-center justify-center">
        {tech.si ? (
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill={`#${tech.si.hex}`}
            aria-label={tech.name}
          >
            <path d={tech.si.path} />
          </svg>
        ) : (
          <img src={tech.customIcon} alt={tech.name} className="h-3.5 w-3.5 object-contain" />
        )}
      </span>
      {tech.name}
    </div>
  );
}

function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col gap-4 rounded-[1.125rem] border border-zinc-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:shadow-md"
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className={cn("flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50", cat.accent)}>
          <cat.Icon size={17} strokeWidth={2} />
        </div>
        <div>
          <h3 className={cn("text-sm font-semibold", cat.accent)}>{cat.title}</h3>
          <p className="text-[12px] text-zinc-400">{cat.desc}</p>
        </div>
      </div>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-2">
        {cat.techs.map((tech) => (
          <TechChip key={tech.name} tech={tech} />
        ))}
      </div>
    </motion.div>
  );
}

export function TechStack() {
  return (
    <section id="skills" className="relative z-20 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="section-header"
        >
          <p className="section-label">Technologies</p>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="section-copy">
            Tools and technologies I use to craft modern, performant,
            and accessible web experiences.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
