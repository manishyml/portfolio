"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

const ease = [0.25, 0.1, 0.25, 1] as const;

const socials = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    handle: "/in/mks781996",
    href: "https://www.linkedin.com/in/mks781996/",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    handle: "/manishyml",
    href: "https://github.com/manishyml",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-20 overflow-hidden bg-zinc-950 py-28 md:py-40"
    >
      {/* Subtle noise texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Glow accents */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-sky-500/8 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 right-0 h-[300px] w-[400px] rounded-full bg-violet-500/6 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">

        {/* Availability pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-semibold text-white/70">
              Open to senior frontend roles & consulting
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.05, ease }}
          className="text-center text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white"
        >
          Let&apos;s build something<br />
          <span className="text-white/40">great together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-white/50"
        >
          Whether it&apos;s a full-time role, a consulting engagement, or just a conversation —
          I&apos;d love to hear what you&apos;re building.
        </motion.p>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="mt-12 flex justify-center"
        >
          <a
            href="mailto:mks781996@gmail.com"
            className="group relative inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <Mail size={20} className="text-white/60 transition group-hover:text-white" />
            mks781996@gmail.com
            <ArrowUpRight
              size={18}
              className="text-white/40 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
            />
          </a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.2, ease }}
          className="mt-6 flex flex-wrap justify-center gap-3"
        >
          <a
            href="mailto:mks781996@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
          >
            <Mail size={15} /> Email me
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
          >
            <Download size={15} /> Download CV
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mx-auto mt-16 h-px max-w-sm origin-center bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.3, ease }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {socials.map(({ icon: Icon, label, handle, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-5 py-3.5 transition-all duration-200 hover:border-white/15 hover:bg-white/8"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/8 text-white/60 transition group-hover:border-white/20 group-hover:text-white">
                <Icon size={17} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">
                  {label}
                </p>
                <p className="text-sm font-semibold text-white/70 transition group-hover:text-white">
                  {handle}
                </p>
              </div>
              <ArrowUpRight
                size={14}
                className="ml-1 text-white/20 transition group-hover:text-white/60"
              />
            </a>
          ))}
        </motion.div>

        {/* Response time note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center text-sm text-white/30"
        >
          Usually responds within 24 hours.
        </motion.p>
      </div>
    </section>
  );
}
