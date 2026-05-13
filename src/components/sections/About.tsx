"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Rocket, Palette, Bot, MapPin, Clock } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;
const spring = { type: "spring", stiffness: 380, damping: 24 } as const;

const specialties = [
  { icon: Zap,     title: "Frontend Architecture", desc: "Scalable platforms & Nx monorepos." },
  { icon: Rocket,  title: "Performance",            desc: "Core Web Vitals & SSR at scale."   },
  { icon: Palette, title: "Design Systems",         desc: "Bridging product design & code."   },
  { icon: Bot,     title: "AI Integrations",        desc: "GPT workflows in real products."   },
];

const timeline = [
  { year: "2018", role: "Associate Software Engineer", company: "Y Media Labs" },
  { year: "2020", role: "Software Engineer",           company: "Paytm"        },
  { year: "2022", role: "Software Developer",          company: "Oracle OCI"   },
  { year: "2025", role: "Open to new roles",           company: "Remote · WW"  },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden bg-zinc-50/60 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="section-header mb-14">
          <p className="section-label">About</p>
          <h2 className="section-title">Engineering bold products<br />with clarity and craft.</h2>
        </div>

        <div ref={ref} className="space-y-4">

          {/* Row 1: Bio + Specialties */}
          <div className="grid gap-4 lg:grid-cols-2">

            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="flex flex-col justify-between gap-8 rounded-[1.25rem] border border-zinc-200/80 bg-white p-8 shadow-xs"
            >
              <div className="space-y-5">
                <p className="text-lg leading-8 text-zinc-600">
                  Software Developer with{" "}
                  <strong className="font-semibold text-zinc-900">7+ years</strong>{" "}
                  building platforms and design systems for fintech, cloud infrastructure,
                  and consumer products. I help large teams ship faster and build
                  software that scales.
                </p>
                <p className="text-base leading-7 text-zinc-500">
                  My sweet spot is the intersection of robust engineering and
                  thoughtful design — turning complex problems into interfaces
                  that feel simple.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700">
                  <MapPin className="h-3.5 w-3.5 text-sky-500" /> Bangalore, India
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700">
                  <Clock className="h-3.5 w-3.5 text-sky-500" /> Open to remote roles
                </span>
              </div>
            </motion.div>

            {/* Specialty cards */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="grid grid-cols-2 gap-4"
            >
              {specialties.map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col gap-4 rounded-[1.125rem] border border-zinc-200/80 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50 text-zinc-600 transition-all group-hover:border-sky-100 group-hover:bg-sky-50 group-hover:text-sky-600">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900">{item.title}</h4>
                    <p className="mt-1 text-xs leading-5 text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Career Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="rounded-[1.25rem] border border-zinc-200/80 bg-white px-8 pb-10 pt-8 shadow-xs md:px-12"
          >
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.26em] text-zinc-400">
              Career Journey
            </p>

            <div className="-mx-8 overflow-x-auto px-8 md:-mx-12 md:px-12">
              <div className="relative flex min-w-[480px] pt-2">

                {/* Animated line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ transformOrigin: "left", top: "calc(3.5rem + 6px)" }}
                  className="pointer-events-none absolute left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-zinc-200 via-sky-300 to-sky-400"
                />

                {timeline.map((item, i) => {
                  const isActive = i === timeline.length - 1;
                  return (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, y: 16 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.55 + i * 0.12, ease }}
                      className="relative flex flex-1 flex-col items-center"
                    >
                      <div className="flex h-14 items-center justify-center">
                        <span
                          className={`select-none font-light tabular-nums ${
                            isActive ? "text-4xl text-sky-400" : "text-4xl"
                          }`}
                          style={isActive ? {} : { color: "#e4e4e7" }}
                        >
                          {item.year}
                        </span>
                      </div>

                      <div className="relative z-10 mt-[-6px]">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={inView ? { scale: 1 } : {}}
                          transition={{ ...spring, delay: 0.62 + i * 0.12 }}
                          className={`h-3 w-3 rounded-full border-2 ${
                            isActive
                              ? "border-sky-500 bg-sky-500 shadow-[0_0_0_4px_rgba(14,165,233,0.14)]"
                              : "border-zinc-300 bg-white"
                          }`}
                        />
                        {isActive && (
                          <span className="absolute inset-0 animate-ping rounded-full bg-sky-400 opacity-35" />
                        )}
                      </div>

                      <div className="mt-4 max-w-[130px] px-1 text-center">
                        <p className={`text-[13px] font-semibold leading-snug ${isActive ? "text-sky-600" : "text-zinc-800"}`}>
                          {item.role}
                        </p>
                        <p className="mt-0.5 text-[11px] tracking-wide text-zinc-400">
                          {item.company}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
