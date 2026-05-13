"use client";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import Image from "next/image";

const ease = [0.25, 0.1, 0.25, 1] as const;

function WavingHand() {
  return (
    <motion.span
      animate={{ rotate: [0, 20, -8, 20, 0] }}
      transition={{ duration: 1.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
      style={{ display: "inline-block", transformOrigin: "70% 80%" }}
    >
      👋
    </motion.span>
  );
}

const stats = [
  { value: "7+",    label: "Years" },
  { value: "300M+", label: "Users Reached" },
  { value: "10+",   label: "Projects Shipped" },
  { value: "3",     label: "Top Companies" },
];

const companies = [
  { name: "Oracle OCI",  logo: "/company-logos/oracle.svg"     },
  { name: "Paytm",       logo: "/company-logos/paytm.svg"      },
  { name: "Y Media Labs", logo: "/company-logos/ymedialabs.svg" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-white"
    >
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Soft accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-sky-100/60 blur-[120px]"
      />

      {/* ── Main content ───────────────────────────────── */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-20 pt-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          className="flex flex-col items-start gap-7"
        >
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-emerald-700">
              Open to new opportunities
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-3xl text-[clamp(2.75rem,6.5vw,5.25rem)] font-bold leading-[1.04] tracking-[-0.04em] text-zinc-950">
            Hi, I&apos;m Manish <WavingHand/><br />
            <span className="text-zinc-400">building products at</span>
            <br />enterprise scale.
          </h1>

          {/* Bio */}
          <p className="max-w-xl text-lg leading-relaxed text-zinc-500">
            7 years shipping frontend at{" "}
            <strong className="font-semibold text-zinc-800">Oracle</strong>,{" "}
            <strong className="font-semibold text-zinc-800">Paytm</strong>, and{" "}
            <strong className="font-semibold text-zinc-800">Y Media Labs</strong>.{" "}
            I specialize in performance, design systems, and AI integrations.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              download
              className="btn-pill inline-flex items-center"
            >
              <Download size={15} /> Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-pill btn-pill-soft inline-flex items-center"
            >
              Let&apos;s Talk <ArrowRight size={15} />
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2.5">
            {[
              { href: "https://github.com/manishyml",          Icon: GithubIcon,   label: "GitHub" },
              { href: "https://www.linkedin.com/in/mks781996/", Icon: LinkedinIcon,  label: "LinkedIn" },
              { href: "mailto:mks781996@gmail.com",            Icon: Mail,          label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 shadow-xs transition-all hover:border-zinc-300 hover:text-zinc-900 hover:shadow-sm"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Company logos strip */}
          <div className="mt-2 flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Formerly at
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {companies.map(({ name, logo }) => (
                <div key={name} className="flex items-center">
                  <Image
                    src={logo}
                    alt={name}
                    width={80}
                    height={28}
                    className="h-6 w-auto object-contain opacity-50 grayscale transition-all hover:opacity-70 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Hero photo: circle pop-out ──────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 64 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.22, ease }}
        className="pointer-events-none absolute bottom-[88px] right-0 z-10 hidden items-end justify-center lg:flex"
      >
        <Image
          src="/projects/hero.png"
          alt="Manish Kumar Singh"
          width={500}
          height={900}
          priority
          className="w-auto select-none"
          style={{
            height: "135vh",
            objectFit: "contain",
            objectPosition: "bottom",
            filter: "drop-shadow(0 20px 44px rgba(0,0,0,0.13))",
          }}
        />
      </motion.div>

      {/* ── Stats bar ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease }}
        className="relative z-10 border-t border-zinc-100 bg-white/90 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 divide-x divide-zinc-100 sm:grid-cols-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center py-6 px-4 text-center"
              >
                <span className="text-2xl font-bold tracking-tight text-zinc-900">
                  {value}
                </span>
                <span className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-400">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
