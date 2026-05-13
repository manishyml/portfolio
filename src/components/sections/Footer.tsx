"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const socials = [
  { icon: GithubIcon,  href: "https://github.com/manishyml",           label: "GitHub"   },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/mks781996/", label: "LinkedIn" },
  { icon: Mail,        href: "mailto:mks781996@gmail.com",              label: "Email"    },
];

const navLinks = [
  { href: "#about",      label: "About"      },
  { href: "#skills",     label: "Skills"     },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects"   },
  { href: "#contact",    label: "Contact"    },
];

export function Footer() {
  return (
    <footer className="relative z-20 overflow-hidden border-t border-zinc-100 bg-white pb-8 pt-16">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">

        <div className="flex flex-col items-center gap-8 pb-12">

          {/* Brand */}
          <div className="flex flex-col items-center gap-1.5">
            <a
              href="#"
              className="text-base font-bold tracking-tight text-zinc-950 transition hover:text-zinc-700"
            >
              Manish Kumar Singh
            </a>
            <p className="text-sm text-zinc-400">
              Software Developer · React · Next.js · TypeScript
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(href.replace("#", ""));
                }}
                className="text-sm font-medium text-zinc-400 transition hover:text-zinc-900"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-xs transition-colors hover:border-zinc-300 hover:bg-zinc-950 hover:text-white"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Decorative wordmark */}
        <div className="mb-8 flex w-full select-none justify-center overflow-hidden">
          <span className="text-[clamp(3rem,9vw,7rem)] font-bold leading-none tracking-tighter text-zinc-950/[0.03] whitespace-nowrap">
            MANISH KUMAR
          </span>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-zinc-100 pt-6 text-xs text-zinc-400 sm:flex-row">
          <span>© {new Date().getFullYear()} Manish Kumar Singh. All rights reserved.</span>
          <span>Built with Next.js &amp; TailwindCSS</span>
        </div>
      </div>
    </footer>
  );
}
