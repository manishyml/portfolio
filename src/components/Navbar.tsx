"use client";

import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Contact",    href: "#contact"    },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));

    const update = () => {
      const threshold = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= threshold) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const hireMeLink = (
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault();
        setIsOpen(false);
        scrollToSection("contact");
      }}
      className="btn-pill whitespace-nowrap py-2 px-4 text-sm"
    >
      Hire Me
    </a>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-200/80 bg-white/95 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-sm font-bold uppercase tracking-[0.28em] text-zinc-950"
        >
          MKS
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.replace("#", ""));
                }}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] rounded-full bg-zinc-950 transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          {hireMeLink}
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t transition-all duration-300 sm:hidden ${
          isOpen
            ? "max-h-72 border-zinc-200/80 bg-white/95 backdrop-blur-xl opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  scrollToSection(link.href.replace("#", ""));
                }}
                className={`px-3 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-zinc-950"
                    : "text-zinc-500 hover:text-zinc-950"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="mt-3 border-t border-zinc-100 pt-3 pb-1">{hireMeLink}</div>
        </nav>
      </div>
    </header>
  );
}
